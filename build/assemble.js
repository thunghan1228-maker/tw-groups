const fs = require('fs');
const path = require('path');

const draft = fs.readFileSync(path.join(__dirname, 'tw-groups-draft.html'), 'utf8');

const groupsMatch = draft.match(/const GROUPS = (\[[\s\S]*?\]);\nconst ALL_CODES/);
if (!groupsMatch) throw new Error('GROUPS literal not found in draft');
const groupsLiteral = groupsMatch[1];

let clientBody = fs.readFileSync(path.join(__dirname, 'client_body.html'), 'utf8');

// 版本戳記（台北時間，組裝當下）：頁面右上角顯示，/api/version 也回同一個字串；
// 前端切回頁面時比對，不一樣就重新載入（2026-09-25 使用者：iPhone 加到主畫面的網頁一直跑舊版）。
const BUILD_STAMP = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Taipei' });
if (!clientBody.includes('__BUILD_STAMP__')) throw new Error('__BUILD_STAMP__ placeholder not found in client_body.html');
clientBody = clientBody.split('__BUILD_STAMP__').join(BUILD_STAMP);

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

// 模板字面值本體不含反引號或 ${，前面已驗證過；反斜線要跳脫，不然前端程式碼裡的正規表達式
// （\s、\d）放進模板字面值後會被當成跳脫序列吃掉，到了瀏覽器變成 s、d。
const templateBody = protectedHtml.replace(/\\/g, '\\\\').split(PLACEHOLDER).join('${JSON.stringify(GROUPS)}');

const serverPrelude = 'const BUILD_STAMP = ' + JSON.stringify(BUILD_STAMP) + ';\n' +
  'const GROUPS = ' + groupsLiteral + ';\n' +
  'const ALL_CODES = [...new Set(GROUPS.flatMap((g) => g.stocks.map((s) => s.code)))];\n\n' +
  'const HTML_PAGE = `' + templateBody + '`;\n\n';

const serverTail = `const CHUNK_SIZE = 80;

// /api/groups 最近一份結果（2026-10-06 使用者：開盤時首頁報價要 10 幾秒，刀劍空、盤中333 一直顯示「還沒載入」）：
// 同一個 worker 執行環境裡 8 秒內再有人要（主畫面、釘選視窗、另一個螢幕、另一台電腦），直接給這一份，
// 不用每個視窗各自再去證交所抓一次。只存抓成功的結果；失敗不存。
let groupsMemo = null;
const GROUPS_MEMO_MS = 8000;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchQuoteChunk(codes, timeoutMs) {
  const exCh = codes.flatMap((c) => [\`tse_\${c}.tw\`, \`otc_\${c}.tw\`]).join("|");
  const url = \`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=\${exCh}&json=1&delay=0\`;
  // timeoutMs：重抓時才給（重抓有總時間上限，不能卡在一段一直不回的請求上）
  const ctrl = timeoutMs ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    const resp = await fetch(url, {
      headers: {
        Referer: "https://mis.twse.com.tw/stock/index.jsp",
        "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)"
      },
      signal: ctrl ? ctrl.signal : undefined
    });
    if (!resp.ok) throw new Error(\`TWSE API 回應錯誤: \${resp.status}\`);
    const data = await resp.json();
    return data.msgArray || [];
  } finally {
    if (timer) clearTimeout(timer);
  }
}

// 證交所報價：先自己從 Cloudflare 打證交所；整批失敗（2026-10-06 使用者那邊整個早上首頁都抓不到）就改問
// HanStock 後端代抓（/api/hub/group-quotes，從 Railway 那台主機抓證交所），並且 20 秒內不再直接打證交所，
// 省得每個視窗每 4 秒重試又把證交所打得更兇。抓到的不到一半時，缺的也拿後端補。
let misDownUntil = 0;
const MIS_DOWN_MS = 20000;
async function fetchQuotes(codes) {
  if (Date.now() >= misDownUntil) {
    let quotes;
    try {
      quotes = await fetchQuotesFromMis(codes);
    } catch (err) {
      misDownUntil = Date.now() + MIS_DOWN_MS;
      try { return await fetchQuotesFromBackend(codes); } catch (backendErr) { throw err; }
    }
    const meta = quotes.__meta || {};
    if ((meta.missing || 0) > codes.length / 2) {
      try { return mergeBackendQuotes(quotes, await fetchQuotesFromBackend(codes), codes); } catch (backendErr) { /* 後端也沒有就照原本的回 */ }
    }
    return quotes;
  }
  return await fetchQuotesFromBackend(codes);
}

async function fetchQuotesFromBackend(codes) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  let data = null;
  try {
    const resp = await fetch("https://hanstock-production-b872.up.railway.app/api/hub/group-quotes?codes=" + encodeURIComponent(codes.join(",")), {
      headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
      signal: ctrl.signal
    });
    if (!resp.ok) throw new Error("後端代抓 HTTP " + resp.status);
    data = await resp.json();
  } finally {
    clearTimeout(timer);
  }
  if (!data || data.status !== "ok" || !data.quotes) throw new Error("後端代抓格式不對");
  const quotes = {};
  for (const code of codes) {
    const q = data.quotes[code];
    quotes[code] = q && q.price > 0
      ? { name: q.name || undefined, price: q.price, open: q.open, prevClose: q.prevClose, change: q.change, changePercent: q.changePercent,
          limitUp: !!q.limitUp, limitDown: !!q.limitDown, volume: Number.isFinite(q.volume) ? q.volume : null }
      : { price: null, change: 0, changePercent: 0 };
  }
  const missing = codes.filter((c) => quotes[c].price === null).length;
  Object.defineProperty(quotes, "__meta", {
    value: { quoteDate: data.quoteDate || null, quoteTime: data.quoteTime || null, missing, retried: 0, source: "backend" },
    enumerable: false
  });
  return quotes;
}

function mergeBackendQuotes(quotes, backup, codes) {
  for (const code of codes) {
    if (quotes[code].price === null && backup[code] && backup[code].price !== null) quotes[code] = backup[code];
  }
  const meta = quotes.__meta || {};
  meta.missing = codes.filter((c) => quotes[c].price === null).length;
  meta.source = "mis+backend";
  return quotes;
}

async function fetchQuotesFromMis(codes) {
  const quotes = {};
  for (const code of codes) quotes[code] = { price: null, change: 0, changePercent: 0 };
  const chunks = chunk(codes, CHUNK_SIZE);
  // 2026-10-02 使用者回報某台電腦/api/groups一直502、其他台正常：查出來是TWSE那個公開查詢
  // API偶爾某一段（chunk）會failed，原本Promise.all只要有一段掛了就整個請求502，其他段明明
  // 有抓到的資料也一起被丟掉。改成允許個別段失敗：只要還有至少一段抓到，就用抓到的那些正常
  // 回（失敗那幾段的股票價格維持null，前端本來就會跳過不計入族群平均漲跌幅）；真的整批都失敗
  // 才維持原本502（連不上後端的提示要照舊出現）。
  // 2026-10-05：證交所偶爾整段不回（實測 /api/groups 60 秒都沒回應），第一輪每段最多等 8 秒，沒回的交給下面重抓
  const settled = await Promise.allSettled(chunks.map((c) => fetchQuoteChunk(c, 8000)));
  // 2026-10-05 使用者：兩台電腦「今天曾發動」一台 2 檔、一台 35 檔。35 檔那台列出來的全是族群表後半段
  // （第 4、5 段：光電、光學鏡頭、面板…）的股票：那兩段報價整段沒抓到，沒有價格就判斷不了還在不在發動，
  // 全被當成「已回落」。5 段同時打偶爾後面幾段會失敗或回空的；沒抓到的段落一段一段重抓（隔 0.3 秒、
  // 每段最多再 2 次、全部重抓最多 5 秒），還是沒有的才維持 null，並把沒價格的檔數交給前端標示。
  const results = settled.map((r) => (r.status === "fulfilled" ? r.value : null));
  const retryUntil = Date.now() + 5000;
  let retried = 0;
  for (let i = 0; i < chunks.length; i++) {
    for (let attempt = 0; attempt < 2 && !(results[i] && results[i].length) && Date.now() < retryUntil - 500; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      retried++;
      try {
        const again = await fetchQuoteChunk(chunks[i], Math.max(1000, retryUntil - Date.now()));
        if (again.length || !results[i]) results[i] = again;
      } catch (e) { /* 這段再試一次，還是不行就算了 */ }
    }
  }
  if (!results.some((r) => r !== null)) throw settled[0].reason;
  let quoteDate = "", quoteTime = "";
  for (const msgArray of results) {
    if (!msgArray) continue;
    for (const item of msgArray) {
      const code = item.c;
      // d／t＝這筆報價的日期（YYYYMMDD）／時間（HH:MM:SS）；取最新的一筆，讓頁面知道行情是不是今天盤中的
      // （醞釀／發動用來把盤中累積量換算成全天預估量；週末、假日行情停在上一個交易日就不換算）。
      const d = String(item.d || ""), t = String(item.t || "");
      if (/^\\d{8}$/.test(d) && (d > quoteDate || (d === quoteDate && t > quoteTime))) { quoteDate = d; quoteTime = t; }
      if (!code || !(code in quotes)) continue;
      // 股名（2026-10-05 自選股：族群表以外的股票也要有中文股名）；/api/groups 不會帶出去
      if (item.n) quotes[code].name = String(item.n).trim();
      // 價格一定要是正數才算有效：2026-10-04（週日）TWSE 回了一批 z／委買委賣是 0 的資料
      // （週末測試盤），0 被當成有效成交價算出 -100%、前端再推算漲跌就變 NaN。
      const pos = (v) => (Number.isFinite(v) && v > 0 ? v : NaN);
      const price = pos(parseFloat(item.z));
      const prevClose = pos(parseFloat(item.y));
      // z 是「這一盤」的成交價，這一盤沒成交就是 "-"；漲停鎖死的股票常常好幾盤沒成交，
      // 以前退回開盤價會讓漲停的股票一直顯示開盤那個漲幅（2026-09-23 尼克森漲停卻顯示 +4.79%）。
      // 沒成交時改用委買／委賣推算：漲停鎖死只剩委買（＝漲停價）、跌停鎖死只剩委賣（＝跌停價）、
      // 兩邊都有就取中價；開盤前 b/a 也都是 "-" 時才退回開盤價／昨收。
      const bids = String(item.b || "").split("_").map((v) => pos(parseFloat(v))).filter(Number.isFinite);
      const asks = String(item.a || "").split("_").map((v) => pos(parseFloat(v))).filter(Number.isFinite);
      const quotePrice = bids.length && !asks.length ? bids[0]
        : asks.length && !bids.length ? asks[0]
        : bids.length && asks.length ? (bids[0] + asks[0]) / 2
        : NaN;
      const fallbackPrice = pos(parseFloat(item.o)) || pos(parseFloat(item.h)) || pos(parseFloat(item.l)) || prevClose;
      const finalPrice = Number.isFinite(price) ? price : Number.isFinite(quotePrice) ? quotePrice : fallbackPrice;
      if (Number.isFinite(finalPrice) && Number.isFinite(prevClose) && prevClose > 0) {
        // u／w＝當天漲停價／跌停價、v＝累積成交量（張）：盤中333 用來排除已經漲停買不到的股票、
        // 跌停放不到空的股票，以及成交量太小的冷門股。
        const limitUpPrice = parseFloat(item.u);
        const limitDownPrice = parseFloat(item.w);
        const volume = parseInt(item.v, 10);
        quotes[code] = {
          name: quotes[code].name,
          price: finalPrice,
          // 開盤價：創高黑選股 13:20 提醒用來判斷「收黑」（現價 < 開盤）；/api/groups 不會帶出去
          open: pos(parseFloat(item.o)),
          // 今天到目前的最高／最低、昨收（2026-10-06 日線圖盤中接上今天那根K棒用）；/api/groups 不會帶出去
          high: pos(parseFloat(item.h)),
          low: pos(parseFloat(item.l)),
          prevClose,
          change: finalPrice - prevClose,
          changePercent: (finalPrice - prevClose) / prevClose * 100,
          limitUp: Number.isFinite(limitUpPrice) && finalPrice >= limitUpPrice - 1e-6,
          limitDown: Number.isFinite(limitDownPrice) && finalPrice <= limitDownPrice + 1e-6,
          volume: Number.isFinite(volume) ? volume : null
        };
      }
    }
  }
  const missing = codes.filter((c) => quotes[c].price === null).length;
  Object.defineProperty(quotes, "__meta", {
    value: { quoteDate: quoteDate ? quoteDate.slice(0, 4) + "-" + quoteDate.slice(4, 6) + "-" + quoteDate.slice(6, 8) : null, quoteTime: quoteTime || null,
      missing, retried },
    enumerable: false
  });
  return quotes;
}

async function fetchSessionClose() {
  // 後端的「該不該顯示上一個交易日收盤」快照（休市日整天、交易日 08:45 前 held=true，附族群成員那天的
  // 日K收盤／漲跌／成交量／漲跌停）。邊緣快取 2 分鐘；抓不到或格式不對就回 null，/api/groups 照舊用即時報價。
  const resp = await fetch("https://hanstock-production-b872.up.railway.app/api/hub/session-close", {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    cf: { cacheTtl: 120, cacheEverything: true }
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  return data && data.status === "ok" ? data : null;
}

async function proxyHanstockBars(pathname, cacheSeconds = 20) {
  // 代理到 Railway 上 HanStock 主要服務自己的 Hub API（用 Railway 專屬網址，
  // 不依賴 hanstock.xyz 這個要續約的自訂網域，到期也不受影響）。
  // 歷史/K棒類做短暫快取，避免 tw-groups 流量直接反映成後端服務的負載；
  // 盤中訊號類傳 cacheSeconds=0：Cloudflare 跟瀏覽器各快取 20 秒，加上頁面
  // 15 秒輪詢，使用者實際看到訊號會比另一台直接推播的電腦慢將近 30 秒。
  const upstream = "https://hanstock-production-b872.up.railway.app" + pathname;
  const live = !(cacheSeconds > 0);
  const resp = await fetch(upstream, {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    // 只快取成功的回應：2026-10-09 後端重新部署那兩分鐘回錯誤，原本錯誤也照樣在 Cloudflare 跟瀏覽器
    // 各快取 10 分鐘，醞釀／發動前端每分鐘重試都拿到快取的錯誤，一直卡在「讀取中」。
    cf: live ? { cacheTtl: 0, cacheEverything: false } : { cacheTtlByStatus: { "200-299": cacheSeconds, "300-599": 0 }, cacheEverything: true }
  });
  const body = await resp.text();
  return new Response(body, {
    status: resp.status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": live || !resp.ok ? "no-store" : "public, max-age=" + cacheSeconds
    }
  });
}

async function proxyHanstockPost(pathname, request) {
  // 自選股（2026-10-05 使用者）：同步碼放在 POST 內容裡原樣轉給後端，不放網址、不快取
  const body = await request.text();
  if (body.length > 80000) return Response.json({ status: "error", error: "清單太大了" }, { status: 413 });
  const resp = await fetch("https://hanstock-production-b872.up.railway.app" + pathname, {
    method: "POST",
    headers: { "content-type": "application/json", Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    body
  });
  return new Response(await resp.text(), {
    status: resp.status,
    headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" }
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
    if (url.pathname.indexOf("/api/bars1mrange/") === 0) {
      const code = url.pathname.slice("/api/bars1mrange/".length);
      if (codePattern.test(code)) {
        try {
          // 1分K 多日歷史（至少3天，含今天）。
          const upstreamPath = "/api/hub/history1m/" + encodeURIComponent(code) + "?calendar_days=5";
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
    if (url.pathname.indexOf("/api/force5range/") === 0) {
      const code = url.pathname.slice("/api/force5range/".length);
      if (codePattern.test(code)) {
        try {
          // 永久保存的5分K主力進出副圖，多日歷史（不是只有今天）。
          const upstreamPath = "/api/hub/force/bars/" + encodeURIComponent(code) + "?interval=5m&days=10&backfill=false";
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502 });
        }
      }
    }
    if (url.pathname.indexOf("/api/force1range/") === 0) {
      const code = url.pathname.slice("/api/force1range/".length);
      if (codePattern.test(code)) {
        try {
          // 永久保存的1分K主力進出副圖，多日歷史（不是只有今天）。
          const upstreamPath = "/api/hub/force/bars/" + encodeURIComponent(code) + "?interval=1m&days=10&backfill=false";
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502 });
        }
      }
    }
    if (url.pathname.indexOf("/api/force-backfill/") === 0) {
      const code = url.pathname.slice("/api/force-backfill/".length);
      if (codePattern.test(code)) {
        try {
          // 觸發指定交易日的主力副圖背景回補(用Shioaji api.ticks()重建)；
          // limit=1是因為呼叫端只要側效果，不需要真的把K棒資料拉回來。
          const interval = url.searchParams.get("interval") === "1m" ? "1m" : "5m";
          const tradeDate = url.searchParams.get("trade_date") || "";
          const upstreamPath = "/api/hub/force/bars/" + encodeURIComponent(code) +
            "?interval=" + interval + "&trade_date=" + encodeURIComponent(tradeDate) +
            "&backfill=true&limit=1";
          return await proxyHanstockBars(upstreamPath);
        } catch (err) {
          return Response.json({ status: "error", error: String(err) }, { status: 502 });
        }
      }
    }
    if (url.pathname === "/api/main-force-ranking") {
      try {
        return await proxyHanstockBars("/api/hub/main-force/ranking" + url.search, 0);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ranking: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/kline-backfill-status") {
      // 收盤後校正（用歷史K棒重算今天的12空／1+2多／創高黑龍）的狀態，給訊號中心那三個分頁顯示。
      try {
        return await proxyHanstockBars("/api/hub/kline-signals/backfill-today/status", 0);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/group-daily-changes") {
      try {
        // 族群昨天／前天的平均漲跌幅（盤中打 333 用）：來自日K，收盤後才會變，快取 10 分鐘。
        return await proxyHanstockBars("/api/hub/group-daily-changes", 600);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/swing-report") {
      // 波段日報（2026-09-26 使用者）：後端每日保存，60 秒快取
      return await proxyHanstockBars("/api/hub/swing-report" + url.search, 60);
    }
    if (url.pathname === "/api/heilong") {
      // 下午報・黑龍回測（2026-09-28 使用者）：參數帶給後端算，60 秒快取
      return await proxyHanstockBars("/api/hub/heilong" + url.search, 60);
    }
    if (url.pathname === "/api/chip-radar") {
      // 籌碼暴增雷達（2026-10-04 使用者：照莊爸 zhuang.tw/radar 做，放在盤後籌碼排行）：集保週資料，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar" + url.search, 300);
    }
    if (url.pathname === "/api/grail-radar") {
      // 飆股雷達（2026-10-07 使用者：照莊爸 App 的飆股雷達做）：紫殺四個聖杯 15 個邏輯照時間點的名單，30 秒快取
      return await proxyHanstockBars("/api/hub/grail-radar" + url.search, 30);
    }
    if (url.pathname === "/api/jail") {
      // 處置監獄（2026-10-09 使用者：照莊爸「處置股・出獄與嫌疑名單」做）：證交所／櫃買注意、處置公告，2 分鐘快取
      return await proxyHanstockBars("/api/hub/jail" + url.search, 120);
    }
    if (url.pathname === "/api/jail-stock") {
      // 處置監獄的個股前科查詢，60 秒快取
      return await proxyHanstockBars("/api/hub/jail/stock" + url.search, 60);
    }
    if (url.pathname === "/api/revenue") {
      // 營收成長榜（2026-10-09 使用者：照莊爸「每月營收成長榜」做）：觀測站每月營收彙總表＋公布日＋隔日漲跌，2 分鐘快取
      return await proxyHanstockBars("/api/hub/revenue" + url.search, 120);
    }
    if (url.pathname === "/api/revenue-stock") {
      // 營收成長榜的查個股營收（每個月的年增、公布日、隔日漲跌），60 秒快取
      return await proxyHanstockBars("/api/hub/revenue/stock" + url.search, 60);
    }
    if (url.pathname === "/api/ma-rank") {
      // 均線分數排行（2026-10-10 使用者：照莊爸 zhuang.tw/ma 做）：個股分數前 60＋族群分數前十大，收盤後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/ma-rank" + url.search, 300);
    }
    if (url.pathname === "/api/ma-rank-hits") {
      // 均線分數排行的前十名常客（近 N 天每天取前 K 名，同分全算），5 分鐘快取
      return await proxyHanstockBars("/api/hub/ma-rank/hits" + url.search, 300);
    }
    if (url.pathname === "/api/ma-rank-q") {
      // 均線分數查詢（股號→所屬族群全部成員；或族群名），60 秒快取
      return await proxyHanstockBars("/api/hub/ma-rank/q" + url.search, 60);
    }
    if (url.pathname === "/api/chip-weekly") {
      // 籌碼週報（2026-10-10 使用者：照莊爸雷達頁的「籌碼週報・可回看 4 週」做）：每週一份摘要，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar/weekly" + url.search, 300);
    }
    if (url.pathname === "/api/chip-radar-stock") {
      // 籌碼暴增雷達的個股查詢（九週軌跡、同族群、三大法人），60 秒快取
      return await proxyHanstockBars("/api/hub/chip-radar/stock" + url.search, 60);
    }
    if (url.pathname === "/api/picker") {
      // 創高黑選股（2026-10-04 使用者：照莊爸 App「創高黑」做）：模組參數帶給後端算，60 秒快取
      return await proxyHanstockBars("/api/hub/picker" + url.search, 60);
    }
    if (url.pathname === "/api/picker-live") {
      // 創高黑選股 13:20 提醒：持股＋觀察中的即時報價（含開盤價，判斷收黑）；一次最多 150 檔，不快取
      const codes = [...new Set(String(url.searchParams.get("codes") || "").split(",").map((c) => c.trim().toUpperCase()).filter((c) => /^[0-9A-Z]{4,6}$/.test(c)))].slice(0, 150);
      const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" };
      if (!codes.length) return new Response(JSON.stringify({ quotes: {}, quoteDate: null, quoteTime: null }), { headers });
      try {
        const quotes = await fetchQuotes(codes);
        const out = {};
        for (const code of codes) {
          const q = quotes[code];
          if (q && Number.isFinite(q.price)) out[code] = { price: q.price, open: Number.isFinite(q.open) ? q.open : null, changePercent: q.changePercent, limitUp: !!q.limitUp, limitDown: !!q.limitDown, volume: q.volume };
        }
        return new Response(JSON.stringify({ quotes: out, quoteDate: quotes.__meta.quoteDate, quoteTime: quotes.__meta.quoteTime }), { headers });
      } catch (e) {
        return new Response(JSON.stringify({ error: String(e && e.message || e) }), { status: 502, headers });
      }
    }
    if (url.pathname === "/api/watchlist/load" || url.pathname === "/api/watchlist/save") {
      // 自選股（2026-10-05 使用者）：兩台電腦＋手機用同一個同步碼看到同一份清單
      if (request.method !== "POST") return Response.json({ status: "error", error: "要用 POST" }, { status: 405 });
      try {
        return await proxyHanstockPost("/api/hub" + url.pathname.slice(4), request);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/watch-quotes") {
      // 自選股：族群表以外的股票報價（族群股前端直接用首頁那份 /api/groups）；上市、上櫃都問，附股名；
      // 一次最多 200 檔，不快取
      const codes = [...new Set(String(url.searchParams.get("codes") || "").split(",").map((c) => c.trim().toUpperCase()).filter((c) => /^[0-9A-Z]{4,6}$/.test(c)))].slice(0, 200);
      const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" };
      if (!codes.length) return new Response(JSON.stringify({ quotes: {} }), { headers });
      try {
        const quotes = await fetchQuotes(codes);
        const out = {};
        for (const code of codes) {
          const q = quotes[code];
          if (!q) continue;
          if (Number.isFinite(q.price)) {
            // 開高低／昨收：日線圖盤中用即時報價接上今天那根K棒（2026-10-06）；後端代抓的備援沒有高低就是 null
            const num = (v) => (Number.isFinite(v) ? v : null);
            out[code] = { name: q.name || null, price: q.price, change: q.change, changePercent: q.changePercent, limitUp: !!q.limitUp, limitDown: !!q.limitDown, volume: q.volume,
              open: num(q.open), high: num(q.high), low: num(q.low), prevClose: num(q.prevClose) };
          } else if (q.name) {
            out[code] = { name: q.name, price: null };
          }
        }
        return new Response(JSON.stringify({ quotes: out, quoteDate: quotes.__meta.quoteDate, quoteTime: quotes.__meta.quoteTime }), { headers });
      } catch (e) {
        return new Response(JSON.stringify({ error: String(e && e.message || e) }), { status: 502, headers });
      }
    }
    if (url.pathname === "/api/checkup") {
      // 每日持股健診（2026-09-28 使用者）：股號清單帶給後端，60 秒快取
      return await proxyHanstockBars("/api/hub/checkup" + url.search, 60);
    }
    if (url.pathname === "/api/diag") {
      // 個股問診（2026-09-28 使用者）：股號帶給後端，60 秒快取
      return await proxyHanstockBars("/api/hub/diag" + url.search, 60);
    }
    if (url.pathname === "/api/chips-daily") {
      // 盤後籌碼排行（2026-09-25 使用者）：主力大單、三大法人買賣超，後端每天收盤後收好，快取 1 分鐘
      return await proxyHanstockBars("/api/hub/chips/daily" + url.search, 60);
    }
    if (url.pathname === "/api/brew-launch-history") {
      try {
        // 醞釀／發動每日保存（昨天／前天的醞釀名單、盤中曾發動的紀錄）：快取 1 分鐘。
        return await proxyHanstockBars("/api/hub/brew-launch/history" + url.search, 60);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), dates: [], days: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/brew-launch") {
      try {
        // 醞釀／發動選股：箱子、均線、5日均量等都是日K算的，收盤後才會變，快取 10 分鐘；發動用即時價由前端判斷。
        return await proxyHanstockBars("/api/hub/brew-launch", 600);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), stocks: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/stock-flags") {
      try {
        return await proxyHanstockBars("/api/hub/stock-flags", 120);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), stocks: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/intraday-signals") {
      try {
        return await proxyHanstockBars("/api/hub/intraday-signals" + url.search, 0);
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
        return await proxyHanstockBars("/api/hub/index/otc/strength", 0);
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
    if (url.pathname === "/api/version") {
      return new Response(JSON.stringify({ build: BUILD_STAMP }), {
        headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
      });
    }
    if (url.pathname === "/api/groups") {
      if (groupsMemo && Date.now() - groupsMemo.at < GROUPS_MEMO_MS) {
        return new Response(groupsMemo.body, { headers: { "content-type": "application/json", "x-groups-memo": "hit" } });
      }
      try {
        // 休市日（週末、假日）與交易日 08:45 前，後端 session-close 說要暫留（held）時，用上一個交易日的
        // 日K收盤取代 TWSE 即時報價：2026-10-04（週日）TWSE 跑測試盤，即時報價不是 0 就是測試用的假價
        // （鴻海 276 漲停），首頁跟盤中333／刀劍空／醞釀發動全跟著亂。快照裡沒有的股票照舊用即時報價；
        // 快照抓不到就整個照舊；TWSE 整批失敗但有暫留快照時照樣回資料。
        const [quotesResult, sessionResult] = await Promise.allSettled([fetchQuotes(ALL_CODES), fetchSessionClose()]);
        const sessionClose = sessionResult.status === "fulfilled" ? sessionResult.value : null;
        const held = !!(sessionClose && sessionClose.held && sessionClose.session && sessionClose.stocks);
        if (quotesResult.status === "rejected" && !held) throw quotesResult.reason;
        const quotes = quotesResult.status === "fulfilled" ? quotesResult.value : {};
        const closeOf = (code) => {
          const c = held ? sessionClose.stocks[code] : null;
          return c && Number.isFinite(c.close) && c.close > 0 && Number.isFinite(c.pct) ? c : null;
        };
        const groups = GROUPS.map((g) => {
          const stocks = g.stocks.map((s) => {
            const c = closeOf(s.code);
            if (c) {
              return { code: s.code, name: s.name, price: c.close, changePercent: c.pct, limitUp: !!c.limitUp, limitDown: !!c.limitDown, volume: Number.isFinite(c.volume) ? c.volume : null };
            }
            return {
              code: s.code,
              name: s.name,
              price: quotes[s.code]?.price ?? null,
              changePercent: quotes[s.code]?.changePercent ?? 0,
              limitUp: quotes[s.code]?.limitUp ?? false,
              limitDown: quotes[s.code]?.limitDown ?? false,
              volume: quotes[s.code]?.volume ?? null
            };
          });
          const valid = stocks.filter((s) => s.price !== null);
          const avgChange = valid.length ? valid.reduce((sum, s) => sum + s.changePercent, 0) / valid.length : 0;
          return { name: g.name, avgChange, stocks };
        });
        const meta = (quotes && quotes.__meta) || {};
        const body = JSON.stringify({
          groups,
          quoteDate: held ? sessionClose.session : (meta.quoteDate || null),
          quoteTime: held ? "13:30:00" : (meta.quoteTime || null),
          heldClose: held ? { session: sessionClose.session, today: sessionClose.today || null } : null,
          // 這次重抓後還是沒有報價的檔數（休市暫留收盤時不算）；前端多到不正常會標示
          quoteMissing: held ? 0 : (meta.missing || 0),
          // 報價來源：mis＝這裡直接抓證交所、backend＝後端代抓、mis+backend＝缺的拿後端補
          quoteSource: held ? "close" : (meta.source || "mis")
        });
        groupsMemo = { at: Date.now(), body };
        return new Response(body, { headers: { "content-type": "application/json" } });
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
