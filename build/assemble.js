const fs = require('fs');
const path = require('path');

const draft = fs.readFileSync(path.join(__dirname, 'tw-groups-draft.html'), 'utf8');

const groupsMatch = draft.match(/const GROUPS = (\[[\s\S]*?\]);\nconst ALL_CODES/);
if (!groupsMatch) throw new Error('GROUPS literal not found in draft');
const groupsLiteral = groupsMatch[1];

let clientBody = fs.readFileSync(path.join(__dirname, 'client_body.html'), 'utf8');

// 組成完整 HTML 文件：在 <style> 結束後補上 </head><body>，並在檔案最前面補齊 doctype/head 開頭
const styleCloseTag = '</style>';
const styleCloseIdx = clientBody.indexOf(styleCloseTag);
if (styleCloseIdx === -1) throw new Error('</style> not found');
const headPart = clientBody.slice(0, styleCloseIdx + styleCloseTag.length);
const bodyPart = clientBody.slice(styleCloseIdx + styleCloseTag.length);

const fullHtml =
  '<!DOCTYPE html>\n<html lang="zh-Hant">\n<head>\n' +
  '<meta charset="UTF-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  headPart +
  '\n</head>\n<body>' +
  bodyPart +
  '\n</body>\n</html>';

// HTML_PAGE 模板字面值裡面唯一需要保留的插值是 ${JSON.stringify(GROUPS)}；
// 先用佔位字串保護它，其餘內容全部視為純文字寫進模板字面值。
const PLACEHOLDER = '@@GROUPS_JSON@@';
const protectedHtml = fullHtml.split('${JSON.stringify(GROUPS)}').join(PLACEHOLDER);

// 模板字面值本體不含反引號或 ${，前面已驗證過，這裡只需把 PLACEHOLDER 換回插值語法字串
const templateBody = protectedHtml.split(PLACEHOLDER).join('${JSON.stringify(GROUPS)}');

const serverPrelude = 'const GROUPS = ' + groupsLiteral + ';\n' +
  'const ALL_CODES = [...new Set(GROUPS.flatMap((g) => g.stocks.map((s) => s.code)))];\n\n' +
  'const HTML_PAGE = `' + templateBody + '`;\n\n';

const serverTail = `const CHUNK_SIZE = 80;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchQuoteChunk(codes) {
  const exCh = codes.flatMap((c) => [\`tse_\${c}.tw\`, \`otc_\${c}.tw\`]).join("|");
  const url = \`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=\${exCh}&json=1&delay=0\`;
  const resp = await fetch(url, {
    headers: {
      Referer: "https://mis.twse.com.tw/stock/index.jsp",
      "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)"
    }
  });
  if (!resp.ok) throw new Error(\`TWSE API 回應錯誤: \${resp.status}\`);
  const data = await resp.json();
  return data.msgArray || [];
}

async function fetchQuotes(codes) {
  const quotes = {};
  for (const code of codes) quotes[code] = { price: null, change: 0, changePercent: 0 };
  const chunks = chunk(codes, CHUNK_SIZE);
  const results = await Promise.all(chunks.map((c) => fetchQuoteChunk(c)));
  for (const msgArray of results) {
    for (const item of msgArray) {
      const code = item.c;
      if (!code || !(code in quotes)) continue;
      const price = parseFloat(item.z);
      const prevClose = parseFloat(item.y);
      // 開盤前 z/o/h/l 都還沒有值（TWSE 回傳 "-"）時，退回昨收價：讓開盤前畫面顯示
      // 最近一個交易日的收盤價（漲跌 0%），而不是整檔空白「目前無資料」。
      const fallbackPrice = parseFloat(item.o) || parseFloat(item.h) || parseFloat(item.l) || prevClose;
      const finalPrice = Number.isFinite(price) ? price : fallbackPrice;
      if (Number.isFinite(finalPrice) && Number.isFinite(prevClose) && prevClose > 0) {
        quotes[code] = {
          price: finalPrice,
          change: finalPrice - prevClose,
          changePercent: (finalPrice - prevClose) / prevClose * 100
        };
      }
    }
  }
  return quotes;
}

async function proxyHanstockBars(pathname) {
  // 代理到 Railway 上 HanStock 主要服務自己的 Hub API（用 Railway 專屬網址，
  // 不依賴 hanstock.xyz 這個要續約的自訂網域，到期也不受影響）。
  // 這裡做短暫快取，避免 tw-groups 流量直接反映成後端服務的負載。
  const upstream = "https://hanstock-production-b872.up.railway.app" + pathname;
  const resp = await fetch(upstream, {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    cf: { cacheTtl: 20, cacheEverything: true }
  });
  const body = await resp.text();
  return new Response(body, {
    status: resp.status,
    headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=20" }
  });
}

const USAGE_SAMPLE_RATE = 0.05; // 每20個請求抽樣寫入1次KV，避免超過KV免費方案每天1000次寫入上限
const USAGE_BUCKET_MINUTES = 15;
const DEFAULT_USAGE_ANOMALY_THRESHOLD = 5000; // 每15分鐘估計請求數超過這個值才發警報；可用環境變數USAGE_ANOMALY_THRESHOLD覆蓋

function usageBucketKey(date) {
  const d = new Date(date);
  const minute = d.getUTCMinutes() - (d.getUTCMinutes() % USAGE_BUCKET_MINUTES);
  const bucketStart = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), minute));
  return "reqcount:" + bucketStart.toISOString().slice(0, 16);
}

function recordSampledRequest(env, ctx) {
  // KV沒有原子遞增、抽樣寫入本身也有競態，估計值本來就是概算，用來抓
  // 「暴增好幾倍」這種明顯異常已經足夠，不追求精確計數。
  if (!env || !env.USAGE_KV || !ctx || Math.random() >= USAGE_SAMPLE_RATE) return;
  ctx.waitUntil((async () => {
    try {
      const key = usageBucketKey(new Date());
      const current = parseInt((await env.USAGE_KV.get(key)) || "0", 10) || 0;
      const increment = Math.round(1 / USAGE_SAMPLE_RATE);
      await env.USAGE_KV.put(key, String(current + increment), { expirationTtl: 172800 });
    } catch (err) {
      // 計數失敗不影響正常請求處理，靜默略過。
    }
  })());
}

async function checkUsageAnomaly(env) {
  if (!env.USAGE_KV) return null;
  // Cron觸發當下「現在」已經跨進下一個bucket，往前退幾分鐘才會落在剛結束
  // 的那個完整bucket裡，不會查到還沒收滿的當前bucket。
  const key = usageBucketKey(new Date(Date.now() - 5 * 60 * 1000));
  const raw = await env.USAGE_KV.get(key);
  const estimatedRequests = parseInt(raw || "0", 10) || 0;
  const threshold = parseInt(env.USAGE_ANOMALY_THRESHOLD, 10) || DEFAULT_USAGE_ANOMALY_THRESHOLD;
  return { key: key, estimatedRequests: estimatedRequests, threshold: threshold, anomalous: estimatedRequests > threshold };
}

async function notifyDiscordUsageAnomaly(env, result) {
  if (!env.DISCORD_WEBHOOK_URL) return;
  const windowLabel = result.key.replace("reqcount:", "");
  const message = "⚠️ tw-groups 請求量異常｜時段 " + windowLabel +
    "｜估計請求數 " + result.estimatedRequests + "（抽樣估算，非精確值）" +
    "｜門檻 " + result.threshold;
  await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ content: message })
  });
}

export default {
  async fetch(request, env, ctx) {
    recordSampledRequest(env, ctx);
    const url = new URL(request.url);
    let barsRequest = null;
    if (url.pathname.indexOf("/api/bars1m/") === 0) {
      barsRequest = { isOneMin: true, code: url.pathname.slice("/api/bars1m/".length) };
    } else if (url.pathname.indexOf("/api/bars/") === 0) {
      barsRequest = { isOneMin: false, code: url.pathname.slice("/api/bars/".length) };
    }
    const codePattern = new RegExp("^[0-9A-Za-z]{1,10}$");
    if (barsRequest && codePattern.test(barsRequest.code)) {
      const isOneMin = barsRequest.isOneMin;
      const code = barsRequest.code;
      try {
        const upstreamPath = (isOneMin ? "/api/hub/bars1m/" : "/api/hub/bars/") + encodeURIComponent(code);
        return await proxyHanstockBars(upstreamPath);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502 });
      }
    }
    if (url.pathname.indexOf("/api/bars5range/") === 0) {
      const code = url.pathname.slice("/api/bars5range/".length);
      if (codePattern.test(code)) {
        try {
          // 5分K 多日歷史（今日以外的天沒有主力逐筆資料，前端會另外補今日主力數字）。
          const upstreamPath = "/api/hub/history5m/" + encodeURIComponent(code) + "?calendar_days=7";
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502 });
        }
      }
    }
    if (url.pathname.indexOf("/api/bars1d/") === 0) {
      const code = url.pathname.slice("/api/bars1d/".length);
      if (codePattern.test(code)) {
        try {
          const upstreamPath = "/api/hub/bars1d/" + encodeURIComponent(code) + "?limit=260";
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502 });
        }
      }
    }
    if (url.pathname === "/api/main-force-ranking") {
      try {
        return await proxyHanstockBars("/api/hub/main-force/ranking" + url.search);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ranking: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/intraday-signals") {
      try {
        return await proxyHanstockBars("/api/hub/intraday-signals" + url.search);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), signals: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/intraday-signals-dates") {
      try {
        return await proxyHanstockBars("/api/hub/intraday-signals/dates" + url.search);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), dates: [] }, { status: 502 });
      }
    }
    if (url.pathname.indexOf("/api/kline-signals/") === 0) {
      const code = url.pathname.slice("/api/kline-signals/".length);
      if (codePattern.test(code)) {
        try {
          const upstreamPath = "/api/hub/intraday-signals/stock/" + encodeURIComponent(code) + url.search;
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err), signals: [] }, { status: 502 });
        }
      }
    }
    if (url.pathname === "/api/otc-strength") {
      try {
        return await proxyHanstockBars("/api/hub/index/otc/strength");
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ready: false }, { status: 502 });
      }
    }
    if (url.pathname === "/api/after-hours-fixed-price") {
      try {
        return await proxyHanstockBars("/api/hub/after-hours-fixed-price" + url.search);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), entries: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/groups") {
      try {
        const quotes = await fetchQuotes(ALL_CODES);
        const groups = GROUPS.map((g) => {
          const stocks = g.stocks.map((s) => ({
            code: s.code,
            name: s.name,
            price: quotes[s.code]?.price ?? null,
            changePercent: quotes[s.code]?.changePercent ?? 0
          }));
          const valid = stocks.filter((s) => s.price !== null);
          const avgChange = valid.length ? valid.reduce((sum, s) => sum + s.changePercent, 0) / valid.length : 0;
          return { name: g.name, avgChange, stocks };
        });
        return Response.json({ groups });
      } catch (err) {
        return Response.json({ error: String(err) }, { status: 502 });
      }
    }
    return new Response(HTML_PAGE, {
      headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
    });
  },
  async scheduled(event, env, ctx) {
    try {
      const result = await checkUsageAnomaly(env);
      if (result && result.anomalous) {
        await notifyDiscordUsageAnomaly(env, result);
      }
    } catch (err) {
      // 排程檢查本身失敗時不重試；靠Cloudflare自己的Cron執行記錄追蹤即可。
    }
  }
};
`;

const finalSource = serverPrelude + serverTail;
const outPath = path.join(__dirname, '..', 'src', 'index.js');
fs.writeFileSync(outPath, finalSource, 'utf8');
console.log('Wrote', outPath, 'length', finalSource.length);
console.log('Contains stray backtick issues?', (finalSource.match(/`/g) || []).length, 'backticks total');
