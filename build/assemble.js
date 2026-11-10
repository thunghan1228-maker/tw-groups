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
  // 2026-10-24 使用者：iPad 字太小（整頁比例跟 iPhone 差不多）。平板上把 viewport 寬度縮成「螢幕寬 ÷ 倍率」，瀏覽器就會整頁等比放大
  // （視窗、下方導覽列、K線圖一起放大，media query／vw／vh 也都跟著新寬度算，不像 CSS zoom 會讓 vh 跑掉）。倍率存在這台裝置（localStorage tabletScale），
  // 預設 1.25；在「自訂」的列上用 ＋／－ 調。電腦、手機不動。
  '<script>(function(){var KEY="tabletScale",LV=[1,1.15,1.25,1.4,1.6],DEF=1.25;\n' +
  'function tablet(){try{if(Math.min(screen.width,screen.height)<700)return false;return matchMedia("(pointer:coarse)").matches||(navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent));}catch(e){return false;}}\n' +
  'function get(){var v=NaN;try{v=parseFloat(localStorage.getItem(KEY));}catch(e){}return LV.indexOf(v)>=0?v:DEF;}\n' +
  'function apply(){var m=document.querySelector("meta[name=viewport]");if(!m)return;var sc=tablet()?get():1,c;\n' +
  'if(sc<=1)c="width=device-width, initial-scale=1";else{var a=Math.min(screen.width,screen.height),b=Math.max(screen.width,screen.height),land=matchMedia("(orientation: landscape)").matches;c="width="+Math.round((land?b:a)/sc);}\n' +
  'if(m.getAttribute("content")!==c)m.setAttribute("content",c);}\n' +
  'window.tabletScale={isTablet:tablet,get:get,step:function(d){var i=LV.indexOf(get())+d;i=Math.max(0,Math.min(LV.length-1,i));try{localStorage.setItem(KEY,String(LV[i]));}catch(e){}apply();}};\n' +
  'apply();window.addEventListener("orientationchange",function(){setTimeout(apply,50);});window.addEventListener("resize",apply);})();</script>\n' +
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
// 2026-10-12（週一盤中實測）：每個請求幾乎都落在不同的執行環境，8 秒共用幾乎沒命中，/api/groups 每次都直接打證交所
// 499 檔（7 段），盤中要 2～15 秒。改成「先給舊的、背景抓新的」：30 秒內的結果直接回，超過 8 秒就在背景重抓
// （同一時間只抓一份）；首頁每 15 秒輪詢，拿到的報價最多晚一輪，但不用每次等證交所。
let groupsMemo = null;
let groupsInflight = null;
const GROUPS_MEMO_MS = 8000;
const GROUPS_STALE_MS = 30000;   // 超過 30 秒的舊資料就不給了，等這次抓完（首頁 15 秒輪詢，報價最多晚一輪）

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

// ---- 後端（HanStock／Railway）連不上時別讓 Worker 跟著慢（2026-11-10 後端掛了：Railway 每個請求空等 15 秒才回 502，
// 首頁 /api/groups 因為等後端的 session-close 變成 15 秒才回、首頁一直「資料讀取中」；台指期近月走後端代打也超過 live-bundle 的 7 秒上限，一直「暫時抓不到」）。
// 這幾個「後端只是備援／附加」的呼叫改成短逾時，失敗後 30 秒內直接略過（斷路器），Worker 自己的資料照常回。純轉送後端的路由（K 線、選股…）不受影響、照舊。
const HS_BASE = "https://hanstock-production-b872.up.railway.app";
const HS_BREAKER_MS = 30000;
async function hsFetchShort(path, init, timeoutMs) {
  if (Date.now() < (globalThis.__hsDownUntil || 0)) throw new Error("後端暫時連不上（30 秒內略過）");
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || 4000);
  try {
    const r = await fetch(HS_BASE + path, Object.assign({}, init || {}, { signal: ctrl.signal }));
    if (r.status === 502 || r.status === 503 || r.status === 504) globalThis.__hsDownUntil = Date.now() + HS_BREAKER_MS;
    else globalThis.__hsDownUntil = 0;
    return r;
  } catch (e) {
    globalThis.__hsDownUntil = Date.now() + HS_BREAKER_MS;
    throw e;
  } finally {
    clearTimeout(timer);
  }
}

// 後端報價中心一次最多 600 檔（2026-10-12 族群表加「其他」後變 650 檔）：每 400 檔一批同時問，批次切法固定，後端各批各自共用快取
const BACKEND_QUOTE_BATCH = 400;
async function fetchBackendQuoteBatch(codes, signal) {
  const resp = await fetch("https://hanstock-production-b872.up.railway.app/api/hub/group-quotes?codes=" + encodeURIComponent(codes.join(",")), {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    signal
  });
  if (!resp.ok) throw new Error("後端代抓 HTTP " + resp.status);
  const data = await resp.json();
  if (!data || data.status !== "ok" || !data.quotes) throw new Error("後端代抓格式不對");
  return data;
}

async function fetchQuotesFromBackend(codes, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || 15000);
  let data = null;
  try {
    const batches = [];
    for (let i = 0; i < codes.length; i += BACKEND_QUOTE_BATCH) batches.push(codes.slice(i, i + BACKEND_QUOTE_BATCH));
    const parts = await Promise.all(batches.map((b) => fetchBackendQuoteBatch(b, ctrl.signal)));
    data = { status: "ok", quotes: {}, quoteDate: null, quoteTime: null, preopen: false };
    for (const part of parts) {
      Object.assign(data.quotes, part.quotes);
      if (part.preopen) data.preopen = true;   // 盤前撮合（08:30～09:00，2026-11-02 起；原本 08:40）：後端把 Shioaji 試撮價蓋上去的
      const stamp = (part.quoteDate || "") + " " + (part.quoteTime || "");
      if (stamp > (data.quoteDate || "") + " " + (data.quoteTime || "")) { data.quoteDate = part.quoteDate; data.quoteTime = part.quoteTime; }
    }
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
    value: { quoteDate: data.quoteDate || null, quoteTime: data.quoteTime || null, missing, retried: 0, source: "backend", preopen: !!data.preopen },
    enumerable: false
  });
  return quotes;
}

// /api/groups 專用（2026-10-12 週一盤中實測）：Worker 自己打證交所 499 檔要 2～15 秒、偶爾一段整段缺（缺 161 檔），
// 證交所舊主機還會回落後 40～100 秒的資料。後端報價中心（HanStock #258）每檔留最新一筆、5 秒共用、30 秒內先給舊的
// 背景再抓，各執行環境都拿同一份。先問後端（4 秒），後端失敗或缺超過一成才走原本的（自己打證交所、再拿後端補）。
// 自選股、創高黑提醒要開高低，照舊用 fetchQuotes。
async function fetchGroupQuotes(codes) {
  // 收盤後／盤前（台北時間平日 08:25～13:45 以外、週末）：後端快取放長了，但冷的時候重抓要 10 秒左右，
  // 晚上自己打證交所又常抓不回來（2026-10-12 晚上首頁報價一直等 20 秒），所以多等後端一點（12 秒）
  const tw = new Date(Date.now() + 8 * 3600000), minutes = tw.getUTCHours() * 60 + tw.getUTCMinutes(), wd = tw.getUTCDay();
  const inSession = wd >= 1 && wd <= 5 && minutes >= 8 * 60 + 25 && minutes <= 13 * 60 + 45;
  try {
    const quotes = await fetchQuotesFromBackend(codes, inSession ? 4000 : 12000);
    if ((quotes.__meta.missing || 0) <= codes.length / 10) {
      quotes.__meta.source = "hub";      // 正常來源（前端不標示）；"backend" 留給證交所直連失敗時的備援
      return quotes;
    }
  } catch (err) { /* 後端不行就自己打證交所 */ }
  return await fetchQuotes(codes);
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
      // 2026-10-15 天二科技跌停鎖死整個早上：這盤沒成交、委買委賣也全是 "-"，以前退回開盤價 156 顯示成 -4%（其實 146.5 跌停）。
      // 沒成交也沒委買委賣、但今天最低＝跌停價（或最高＝漲停價），幾乎一定是鎖在那個價，就用跌停／漲停價。
      const dayLow = pos(parseFloat(item.l)), dayHigh = pos(parseFloat(item.h));
      const upPx = pos(parseFloat(item.u)), downPx = pos(parseFloat(item.w));
      const lockedPrice = Number.isFinite(downPx) && Number.isFinite(dayLow) && Math.abs(dayLow - downPx) < 1e-6 ? downPx
        : Number.isFinite(upPx) && Number.isFinite(dayHigh) && Math.abs(dayHigh - upPx) < 1e-6 ? upPx : NaN;
      const fallbackPrice = Number.isFinite(lockedPrice) ? lockedPrice : (pos(parseFloat(item.o)) || pos(parseFloat(item.h)) || pos(parseFloat(item.l)) || prevClose);
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
  const resp = await hsFetchShort("/api/hub/session-close", {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    cf: { cacheTtl: 120, cacheEverything: true }
  }, 4000);
  if (!resp.ok) return null;
  const data = await resp.json();
  return data && data.status === "ok" ? data : null;
}

async function buildGroupsBody() {
  // 休市日（週末、假日）與交易日 08:45 前，後端 session-close 說要暫留（held）時，用上一個交易日的
  // 日K收盤取代 TWSE 即時報價：2026-10-04（週日）TWSE 跑測試盤，即時報價不是 0 就是測試用的假價
  // （鴻海 276 漲停），首頁跟盤中333／刀劍空／醞釀發動全跟著亂。快照裡沒有的股票照舊用即時報價；
  // 快照抓不到就整個照舊；TWSE 整批失敗但有暫留快照時照樣回資料。
  const [quotesResult, sessionResult] = await Promise.allSettled([fetchGroupQuotes(ALL_CODES), fetchSessionClose()]);
  const sessionClose = sessionResult.status === "fulfilled" ? sessionResult.value : null;
  const held = !!(sessionClose && sessionClose.held && sessionClose.session && sessionClose.stocks);
  if (quotesResult.status === "rejected" && !held) throw quotesResult.reason;
  const quotes = quotesResult.status === "fulfilled" ? quotesResult.value : {};
  const closeOf = (code) => {
    const c = held ? sessionClose.stocks[code] : null;
    return c && Number.isFinite(c.close) && c.close > 0 && Number.isFinite(c.pct) ? c : null;
  };
  // 盤前撮合（09:00 以前）：證交所／後端給的量是 0（還沒有成交），當成不知道（null），各名單的成交量門檻才不會把所有股票擋掉
  const metaEarly = (quotes && quotes.__meta) || {};
  const preOpenClock = !held && !!metaEarly.quoteTime && String(metaEarly.quoteTime) < "09:00:00";
  const volOf = (v) => (preOpenClock && !v ? null : (v ?? null));
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
        volume: volOf(quotes[s.code]?.volume),
        // 今天到目前的最高價（2026-10-16 首頁終點戰法空(283)：盤中曾漲到 5% 以上的才列）；後端代抓那條沒有就是 null
        high: Number.isFinite(quotes[s.code]?.high) ? quotes[s.code].high : null,
        // 開盤價、今天到目前的最低價（2026-10-23 使用者：盤中落底訊號／回檔警示要用今天那根暫時的日K：開高低現價＋累計量）
        open: Number.isFinite(quotes[s.code]?.open) ? quotes[s.code].open : null,
        low: Number.isFinite(quotes[s.code]?.low) ? quotes[s.code].low : null
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
    // 報價來源：hub＝後端報價中心（正常）、mis＝這裡直接抓證交所、backend＝直連失敗改後端代抓、mis+backend＝缺的拿後端補
    quoteSource: held ? "close" : (meta.source || "mis"),
    // 盤前撮合（2026-10-22 使用者：用即時價選股的功能從盤前試撮（08:30 起，原本 08:40）就開始算）：後端試撮資料夠多時不再暫留昨收（held=false），
    // 報價是試算價（沒有成交量），前端各名單照盤中的邏輯算；用前一天收盤資料選股的功能不受影響
    preopen: !held && !!meta.preopen
  });
  return body;
}

function refreshGroups() {
  if (!groupsInflight) {
    groupsInflight = buildGroupsBody()
      .then((body) => { groupsMemo = { at: Date.now(), body }; return body; })
      .finally(() => { groupsInflight = null; });
  }
  return groupsInflight;
}

// 個股問診「今天在漲／跌什麼」（2026-10-12 使用者：照老師問診的「今天在漲什麼」，盤中十點後大漲大跌的股票問診有新的資料）：
// Yahoo 股市個股新聞 RSS（各家媒體轉載）＋鉅亨（代號、股名兩種關鍵字：新聞、公司公告；「盤中速報」只是報價不列）＋Google 新聞
// （近 2 天；Google 常擋 Cloudflare 回 503，抓不到就算了）。都只留標題有股名的（公告除外）。
// 同一則新聞多家轉載只留一則；每檔 10 分鐘快取（同一個執行環境）。
const moveNewsCache = new Map();
const MOVE_NEWS_MS = 10 * 60 * 1000;
function xmlText(v) {
  return String(v || "").replace(/<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>/g, "$1").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&").trim();
}
function rssItems(xml) {
  const out = [];
  for (const m of xml.matchAll(/<item>([\\s\\S]*?)<\\/item>/g)) {
    const pick = (tag) => { const r = m[1].match(new RegExp("<" + tag + "[^>]*>([\\\\s\\\\S]*?)</" + tag + ">")); return r ? xmlText(r[1]) : ""; };
    out.push({ title: pick("title"), link: pick("link"), time: Date.parse(pick("pubDate")), source: pick("source") });
  }
  return out;
}
async function fetchMoveNews(code, name) {
  const key = code + "|" + name;
  const hit = moveNewsCache.get(key);
  if (hit && Date.now() - hit.at < MOVE_NEWS_MS) return hit.data;
  const since = Date.now() - 3 * 86400000;
  const base = name.replace(/-(KY|創|DR)$/i, "");
  const items = [], errors = [];
  const named = (title) => !!base && title.includes(base);
  const yahoo = async () => {
    const res = await fetch("https://tw.stock.yahoo.com/rss?s=" + encodeURIComponent(code), { headers: { "user-agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error("Yahoo 股市 HTTP " + res.status);
    for (const x of rssItems(await res.text())) {
      if (!named(x.title) || !(x.time >= since)) continue;
      items.push({ title: x.title, source: "Yahoo股市", time: new Date(x.time).toISOString(), url: x.link, kind: "news" });
    }
  };
  const google = async () => {
    const q = encodeURIComponent('"' + base + '" when:2d');
    const res = await fetch("https://news.google.com/rss/search?q=" + q + "&hl=zh-TW&gl=TW&ceid=TW:zh-Hant", { headers: { "user-agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error("Google 新聞 HTTP " + res.status);
    for (const x of rssItems(await res.text())) {
      let title = x.title;
      if (x.source && title.endsWith(" - " + x.source)) title = title.slice(0, -(x.source.length + 3));
      if (!named(title) || !(x.time >= since)) continue;
      items.push({ title, source: x.source || "Google 新聞", time: new Date(x.time).toISOString(), url: x.link, kind: "news" });
    }
  };
  const seenIds = new Set();
  const cnyes = async (q, needName) => {
    const res = await fetch("https://ess.api.cnyes.com/ess/api/v1/news/keyword?q=" + encodeURIComponent(q) + "&limit=30&page=1");
    if (!res.ok) throw new Error("鉅亨 HTTP " + res.status);
    const body = await res.json();
    for (const it of (body && body.data && body.data.items) || []) {
      const t = Number(it.publishAt) * 1000;
      const title = String(it.title || "").replace(/<\\/?mark>/g, "");
      if (!(t >= since) || /^盤中速報/.test(title) || seenIds.has(it.newsId)) continue;
      const notice = (it.category || []).some((c) => c && c.name === "台股公告");
      if (needName && !notice && !named(title)) continue;
      seenIds.add(it.newsId);
      items.push({ title, source: notice ? "公司公告" : "鉅亨", time: new Date(t).toISOString(), url: "https://news.cnyes.com/news/id/" + it.newsId, kind: notice ? "notice" : "news" });
    }
  };
  const jobs = [yahoo, google, () => cnyes(code, false)];
  if (base) jobs.push(() => cnyes(base, true));
  await Promise.all(jobs.map((fn) => fn().catch((e) => errors.push(String((e && e.message) || e)))));
  const seen = new Set();
  // 同一則公告 Yahoo 也會轉載：先看公告，留公告那一則
  const out = items.sort((a, b) => ((a.kind === "notice") !== (b.kind === "notice") ? (a.kind === "notice" ? -1 : 1) : a.time < b.time ? 1 : -1)).filter((x) => {
    const k = x.title.replace(/[\\s\\p{P}\\p{S}]/gu, "").slice(0, 24);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  // 公司公告一定留（澄清報導、重大訊息）；新聞最多 12 則
  const kept = out.filter((x) => x.kind === "notice").slice(0, 5).concat(out.filter((x) => x.kind !== "notice").slice(0, 12))
    .sort((a, b) => (a.time < b.time ? 1 : -1));
  const data = { status: "ok", code, name, items: kept, errors, at: new Date().toISOString() };
  if (kept.length || !errors.length) {
    if (moveNewsCache.size > 300) moveNewsCache.delete(moveNewsCache.keys().next().value);
    moveNewsCache.set(key, { at: Date.now(), data });
  }
  return data;
}

// 均線分數排行／前二十名常客的快取秒數：沒指定日期、或指定的是今天（台北）＝可能是盤中即時，30 秒；回看舊日期的歷史資料 5 分鐘
function maLiveTtl(url) {
  const date = url.searchParams.get("date");
  return !date || date === new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10) ? 30 : 300;
}

// 期交所 MIS（臺指期）：2026-10-29 使用者要台指期近月的 K 線圖（日線、5 分、1 分）。getQuoteList 找近月合約、getChartData1M 給今天日盤的 1 分K；
// 同一份資料短時間內共用（globalThis 存活在同一個 isolate 裡），不每個瀏覽器都打一次期交所
async function txfMis(endpoint, body, ttlMs) {
  const cache = (globalThis.__txfMis = globalThis.__txfMis || {});
  const key = endpoint + JSON.stringify(body);
  const hit = cache[key];
  if (hit && Date.now() - hit.at < ttlMs) return hit.data;
  // 2026-10-30 09:13 使用者截圖：日盤開盤後 Worker 打期交所一直回 HTTP 520（同一時間從別的地方打都正常）——換兩種標頭輪流試最多 3 次，
  // 還是失敗就用 2 分鐘內的舊資料；錯誤訊息帶上期交所回的前 80 個字，方便看是被擋還是掛了
  const heads = [
    { "content-type": "application/json", origin: "https://mis.taifex.com.tw", referer: "https://mis.taifex.com.tw/futures/", "user-agent": "Mozilla/5.0" },
    { "content-type": "application/json;charset=UTF-8", accept: "application/json, text/plain, */*", "accept-language": "zh-TW,zh;q=0.9", origin: "https://mis.taifex.com.tw", referer: "https://mis.taifex.com.tw/futures/",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" }
  ];
  let lastErr = null;
  // 2026-11-05：期交所直打從 10/30 起一直回 520，每次都白白試 3 次（含等待約 3 秒）才換後端代打，txf-live 一次要 9 秒、還多吃好幾個子請求。
  // 3 次都失敗後 10 分鐘內先不直打、直接走後端代打；過了 10 分鐘再試一輪（直打恢復了就用回直打）
  const directOk = Date.now() >= (globalThis.__txfDirectBadUntil || 0);
  for (let i = 0; directOk && i < 3; i++) {
    try {
      const r = await fetch("https://mis.taifex.com.tw/futures/api/" + endpoint, { method: "POST", headers: heads[i % 2], body: JSON.stringify(body), cf: { cacheTtl: 0 } });
      if (!r.ok) {
        const t = (await r.text().catch(() => "")).split(String.fromCharCode(10)).join(" ").slice(0, 80);
        throw new Error("期交所 HTTP " + r.status + (t ? "：" + t : ""));
      }
      const data = await r.json();
      cache[key] = { at: Date.now(), data };
      globalThis.__txfDirectBadUntil = 0;
      return data;
    } catch (e) {
      lastErr = e;
      await new Promise((res) => setTimeout(res, 350));
    }
  }
  if (directOk) globalThis.__txfDirectBadUntil = Date.now() + 600000;   // 走到這裡＝直打 3 次都失敗
  // 直接打期交所失敗（2026-10-30 起被回 520）就請後端（Railway）代打同一支 getQuoteList，回來的 JSON 跟期交所原樣一樣
  if (endpoint === "getQuoteList") {
    try {
      const r2 = await hsFetchShort("/api/hub/txf-mis?market=" + encodeURIComponent(String(body.MarketType || "0")),
        { headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0" }, cf: { cacheTtl: 0 } }, 4000);
      if (r2.ok) {
        const data = await r2.json();
        cache[key] = { at: Date.now(), data };
        return data;
      }
      lastErr = new Error("期交所 520、後端代打也失敗 HTTP " + r2.status);
    } catch (e2) {
      lastErr = new Error("期交所失敗、後端代打也失敗：" + String(e2));
    }
  }
  if (hit && Date.now() - hit.at < 120000) return hit.data;
  throw lastErr;
}
// 2026-11-05 使用者提供的行情網站 TradingView：它網頁自己用的公開行情掃描介面（不用登入，一次問全部）。
// 日經 TVC:NI225、韓國 TVC:KOSPI、那斯達克 TVC:IXIC、費半 TVC:SOX 是即時（streaming）；道瓊 DJ:DJI 匿名只有延遲 10 分、台積電 ADR NYSE:TSM 延遲 15 分，
// 所以每個指數把 Yahoo 和 TradingView 的「最新價時間」比，誰新用誰（延遲的那個時間舊，自然輸給 Yahoo）。TradingView 沒有官方免費資料 API，這是非官方介面，失敗就回空、照用 Yahoo。
const TV_SYMS = { n225: "TVC:NI225", kospi: "TVC:KOSPI", dji: "DJ:DJI", ixic: "TVC:IXIC", sox: "TVC:SOX", tsm: "NYSE:TSM", hsi: "TVC:HSI", tnx: "TVC:US10Y" };   // 美國 10 年期公債殖利率：TVC:US10Y 即時（債券市場幾乎 24 小時），Yahoo ^TNX 只有芝加哥選擇權交易所的時段
async function tvQuotes() {
  const cache = (globalThis.__tvQ = globalThis.__tvQ || {});
  if (cache.at && Date.now() - cache.at < 3000 && cache.data) return cache.data;   // 同一個 isolate 3 秒內共用，不是每個瀏覽器都打一次
  try {
    const r = await fetch("https://scanner.tradingview.com/global/scan", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://tw.tradingview.com", "user-agent": "Mozilla/5.0" },
      body: JSON.stringify({ symbols: { tickers: Object.values(TV_SYMS) }, columns: ["close", "open", "high", "low", "change_abs", "update_mode", "update_time", "last_bar_update_time"] })
    });
    if (!r.ok) throw new Error("TradingView HTTP " + r.status);
    const j = await r.json();
    const out = {};
    for (const row of (j.data || [])) {
      const id = Object.keys(TV_SYMS).find((k) => TV_SYMS[k] === row.s);
      const d = row.d || [];
      if (id && Number.isFinite(d[0]) && d[5] === "streaming") out[id] = { price: d[0], open: d[1], high: d[2], low: d[3], chg: d[4], mode: d[5], time: Math.max(Number(d[6]) || 0, Number(d[7]) || 0) };
    }
    cache.at = Date.now(); cache.data = out;   // 只收 update_mode＝streaming（即時）的；delayed_streaming（延遲 10／15 分）的不用，免得把延遲價當最新價
    return out;
  } catch (e) {
    if (cache.data && Date.now() - cache.at < 60000) return cache.data;
    return {};
  }
}
const TV_TZ = { n225: "Asia/Tokyo", kospi: "Asia/Seoul", dji: "America/New_York", ixic: "America/New_York", sox: "America/New_York", tsm: "America/New_York", hsi: "Asia/Hong_Kong", tnx: "America/New_York" };
function tvExDay(sec, id) {   // 這個市場自己的日期 YYYY-MM-DD
  return new Intl.DateTimeFormat("en-CA", { timeZone: TV_TZ[id] || "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(sec * 1000));
}
// 2026-11-05 使用者：道瓊、那斯達克要看「期貨」（幾乎 24 小時在交易），日經、恒生有期貨也要。實測 Yahoo、TradingView 的 CME 期貨固定延遲 10 分鐘、
// 大阪／港交所延遲 15 分鐘（交易所收費才即時）；新浪財經的外盤期貨報價（hf_ 開頭）和分K 跟交易時間只差幾秒，所以期貨用新浪（非官方公開介面，失敗就退回 Yahoo 延遲價）。
// 欄位：0 現價、4 最高、5 最低、6 時間（台北）、7 昨結算、8 開盤、12 日期、14 成交量。韓國 KOSPI 期貨、費半、台積電 ADR 沒有可用的免費期貨資料。
const FUT_SINA = { ym: "YM", nq: "NQ", nk: "NK", hsi: "HSI" };
const FUT_YAHOO = { ym: "YM=F", nq: "NQ=F", nk: "NKD=F" };
const FUT_NAME = { ym: "道瓊期貨", nq: "那斯達克期貨", nk: "日經期貨", hsi: "恒生期貨", ks: "韓國 KOSPI 200 期貨" };
// 韓國 KOSPI 200 期貨（2026-11-05 使用者問韓國有沒有期貨——有，韓國交易所日盤 09:00～15:35 韓國時間＝台北 08:00～14:35）：TradingView 的 KRX:K2I1! 延遲 20 分鐘、新浪沒有，
// Naver Finance（韓國入口網站）的行情是即時（delayTime 0）：報價 polling API、1 分K、日K。沒有夜盤資料，收盤後就停在收盤價（前端寫休市）
const NAVER_HEAD = { "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120 Mobile", Referer: "https://m.stock.naver.com/" };
const naverNum = (v) => Number(String(v == null ? "" : v).split(",").join(""));
async function naverKospiFut() {
  const cache = (globalThis.__naverF = globalThis.__naverF || {});
  if (cache.at && Date.now() - cache.at < 2000 && cache.data) return cache.data;
  try {
    const r = await fetch("https://polling.finance.naver.com/api/realtime/domestic/index/FUT", { headers: NAVER_HEAD });
    if (!r.ok) throw new Error("Naver HTTP " + r.status);
    const d = (((await r.json()) || {}).datas || [])[0] || {};
    const price = naverNum(d.closePrice), chg = naverNum(d.compareToPreviousClosePrice), t = Date.parse(d.localTradedAt) / 1000;
    if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(chg) || !Number.isFinite(t)) throw new Error("Naver 資料不完整");
    const out = { price, prev: price - chg, open: naverNum(d.openPrice), high: naverNum(d.highPrice), low: naverNum(d.lowPrice), volume: naverNum(d.accumulatedTradingVolume) || 0, time: t, date: String(d.localTradedAt || "").slice(0, 10), status: d.marketStatus };
    cache.at = Date.now(); cache.data = out;
    return out;
  } catch (e) {
    if (cache.data && Date.now() - cache.at < 60000) return cache.data;
    return null;
  }
}
async function naverKospiFutBars(tf) {   // Naver 的 K 棒時間是起算時間（韓國時間），1 分K 約 395 根一天；5 分K 由 1 分K 合併
  const pad = (n) => String(n).padStart(2, "0");
  const ymd = (ms) => { const d = new Date(ms + 9 * 3600000); return String(d.getUTCFullYear()) + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()); };
  const iso = (s) => s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8);
  if (tf === "1d") {
    const r = await fetch("https://api.stock.naver.com/chart/domestic/index/FUT/day?startDateTime=" + ymd(Date.now() - 420 * 86400000) + "&endDateTime=" + ymd(Date.now()), { headers: NAVER_HEAD, cf: { cacheTtlByStatus: { "200-299": 20, "300-599": 0 }, cacheEverything: true } });
    if (!r.ok) throw new Error("Naver 日K HTTP " + r.status);
    const rows = await r.json();
    const out = [];
    for (const x of rows || []) { const o = Number(x.openPrice), h = Number(x.highPrice), l = Number(x.lowPrice), c = Number(x.closePrice); if ([o, h, l, c].every((n) => Number.isFinite(n) && n > 0)) out.push({ ts: iso(String(x.localDate)) + "T00:00:00+00:00", open: o, high: h, low: l, close: c, volume: Number(x.accumulatedTradingVolume) || 0, closeTime: "收盤" }); }
    return out.slice(-300);
  }
  const r = await fetch("https://api.stock.naver.com/chart/domestic/index/FUT/minute?startDateTime=" + ymd(Date.now() - 8 * 86400000) + "0800&endDateTime=" + ymd(Date.now()) + "1700", { headers: NAVER_HEAD, cf: { cacheTtlByStatus: { "200-299": 2, "300-599": 0 }, cacheEverything: true } });
  if (!r.ok) throw new Error("Naver 分K HTTP " + r.status);
  const rows = await r.json();
  const m1 = [];
  for (const x of rows || []) {
    const s = String(x.localDateTime), o = Number(x.openPrice), h = Number(x.highPrice), l = Number(x.lowPrice), c = Number(x.currentPrice);
    const t = Date.parse(iso(s) + "T" + s.slice(8, 10) + ":" + s.slice(10, 12) + ":" + s.slice(12, 14) + "+09:00");
    if (Number.isFinite(t) && [o, h, l, c].every((n) => Number.isFinite(n) && n > 0)) m1.push({ ts: t, open: o, high: h, low: l, close: c, volume: Number(x.accumulatedTradingVolume) || 0 });
  }
  if (tf === "1m") return m1;
  const bucket = new Map();
  for (const b of m1) {
    const k = Math.floor(b.ts / 300000) * 300000, g = bucket.get(k);
    if (!g) bucket.set(k, { ts: k, open: b.open, high: b.high, low: b.low, close: b.close, volume: b.volume });
    else { g.high = Math.max(g.high, b.high); g.low = Math.min(g.low, b.low); g.close = b.close; g.volume += b.volume; }
  }
  return Array.from(bucket.values()).sort((a, c) => a.ts - c.ts);
}
const SINA_HEAD = { Referer: "https://finance.sina.com.cn", "User-Agent": "Mozilla/5.0" };
async function sinaFutQuotes() {
  const cache = (globalThis.__sinaF = globalThis.__sinaF || {});
  if (cache.at && Date.now() - cache.at < 2000 && cache.data) return cache.data;   // 同一個 isolate 2 秒內共用
  try {
    const r = await fetch("https://hq.sinajs.cn/list=" + Object.values(FUT_SINA).map((x) => "hf_" + x).join(","), { headers: SINA_HEAD });
    if (!r.ok) throw new Error("Sina HTTP " + r.status);
    const text = await r.text();
    const out = {};
    for (const id of Object.keys(FUT_SINA)) {
      const part = text.split("hq_str_hf_" + FUT_SINA[id] + '="')[1];
      if (!part) continue;
      const f = part.split('"')[0].split(",");
      const price = Number(f[0]), prev = Number(f[7]), t = Date.parse(f[12] + "T" + f[6] + "+08:00") / 1000;
      if (!Number.isFinite(price) || price <= 0 || f.length < 13 || !Number.isFinite(t)) continue;
      out[id] = { price, prev: Number.isFinite(prev) && prev > 0 ? prev : null, open: Number(f[8]), high: Number(f[4]), low: Number(f[5]), volume: Number(f[14]) || 0, time: t, date: f[12], src: "sina" };
    }
    cache.at = Date.now(); cache.data = out;
    return out;
  } catch (e) {
    if (cache.data && Date.now() - cache.at < 60000) return cache.data;
    return {};
  }
}
async function sinaFutBars(sym, tf) {   // 新浪外盤期貨 K 線：1 分／5 分（約最近 1000 根）、日線；K 棒時間是台北時間（收盤時間）
  const url = tf === "1d" ? "https://stock2.finance.sina.com.cn/futures/api/jsonp.php/var%20t=/GlobalFuturesService.getGlobalFuturesDailyKLine?symbol=" + sym
    : "https://gu.sina.cn/ft/api/jsonp.php/var%20t=/GlobalService.getMink?symbol=" + sym + "&type=" + (tf === "5m" ? "5" : "1");
  const r = await fetch(url, { headers: SINA_HEAD, cf: { cacheTtlByStatus: { "200-299": tf === "1d" ? 30 : 2, "300-599": 0 }, cacheEverything: true } });
  if (!r.ok) throw new Error("Sina K線 HTTP " + r.status);
  const text = await r.text();
  const a = text.indexOf("["), b = text.lastIndexOf("]");
  if (a < 0 || b < a) return [];
  const rows = JSON.parse(text.slice(a, b + 1));
  const out = [];
  for (const x of rows) {
    const o = Number(tf === "1d" ? x.open : x.o), h = Number(tf === "1d" ? x.high : x.h), l = Number(tf === "1d" ? x.low : x.l), c = Number(tf === "1d" ? x.close : x.c), v = Number(tf === "1d" ? x.volume : x.v) || 0;
    if (![o, h, l, c].every((n) => Number.isFinite(n) && n > 0)) continue;
    const clamp = (n) => Math.min(Math.max(n, l), h);   // 新浪日經期貨日線的開盤價有時跑出當天高低之外，夾回去，K 棒才不會畫壞
    if (tf === "1d") out.push({ ts: String(x.date) + "T00:00:00+00:00", open: clamp(o), high: h, low: l, close: clamp(c), volume: v, closeTime: "收盤" });
    else {
      // 新浪分K 的時間是「收盤時間」（5 分K 17:30 那根，17:26 就已經在走了），K 線圖的 ts 要是開始時間，往前推一根
      const t = Date.parse(String(x.d).replace(" ", "T") + "+08:00") - (tf === "5m" ? 300000 : 60000);
      if (Number.isFinite(t)) out.push({ ts: t, open: o, high: h, low: l, close: c, volume: v });
    }
  }
  return tf === "1d" ? out.slice(-300) : out;
}
async function txfNearQuote() {
  const j = await txfMis("getQuoteList", { MarketType: "0", SymbolType: "F", KindID: "1", CID: "TXF", ExpireMonth: "", RowSize: "全部", PageNo: "", SortColumn: "", AscDesc: "A" }, 8000);
  const list = (j && j.RtData && j.RtData.QuoteList) || [];
  const months = list.filter((x) => /^TXF[A-L][0-9]-F$/.test(String(x.SymbolID || "")));
  // 有日盤成交價的第一檔月合約；開盤前（夜盤收盤 05:00～日盤 08:45）期交所把日盤報價清空，沒有成交價也要回近月那一檔（合約代號、昨結算價還在），
  // 呼叫端看 CLastPrice 空白就改用官方每日行情的最後一個交易日日盤收盤（2026-10-30 使用者：開盤前停在昨天日盤收盤價，不要一直「讀取中」）
  const q = months.find((x) => String(x.CLastPrice == null ? "" : x.CLastPrice).trim() !== "") || months[0];
  if (!q) throw new Error("期交所沒有臺指期近月資料");
  return q;
}
// 2026-10-30 使用者：台指期近月一直抓不到。Worker 直接打期交所被回 520、後端代打還沒上線時，退到台灣版 Yahoo 的「台指期近一」（WTX&）：
// 即時報價（price、previousClose＝昨結算、volume）加夜盤＋日盤接在一起的 1 分K（時間標籤是那根的結束時間，減 60 秒才是開始）。回 { price, ref, sec, volume, month, bars }
function txfNearMonthOf(tp) {   // tp＝台北時間（UTC 方法讀出來的 Date）；近月＝這個月，過了第三個週三 13:45 結算就是下個月
  const y = tp.getUTCFullYear(), mo = tp.getUTCMonth();
  const dow = new Date(Date.UTC(y, mo, 1)).getUTCDay();
  const thirdWed = 1 + ((3 - dow + 7) % 7) + 14;
  const day = tp.getUTCDate(), mins = tp.getUTCHours() * 60 + tp.getUTCMinutes();
  const rolled = day > thirdWed || (day === thirdWed && mins >= 13 * 60 + 45);
  return (rolled ? mo + 1 : mo) % 12 + 1;
}
async function txfYahooTw() {
  const cache = (globalThis.__txfYahoo = globalThis.__txfYahoo || {});
  if (cache.at && Date.now() - cache.at < 6000 && cache.data) return cache.data;
  const r = await fetch("https://tw.stock.yahoo.com/_td-stock/api/resource/FinanceChartService.ApacLibraCharts;symbols=%5B%22WTX%26%22%5D;type=tick", {
    headers: { "user-agent": "Mozilla/5.0", accept: "application/json" },
    cf: { cacheTtlByStatus: { "200-299": 6, "300-599": 0 }, cacheEverything: true }
  });
  if (!r.ok) throw new Error("Yahoo 台指期 HTTP " + r.status);
  const j = await r.json();
  const c = j && j[0] && j[0].chart, m = c && c.meta, qt = (c && c.quote) || {};
  const price = Number(qt.price !== undefined ? qt.price : (m && m.regularMarketPrice)), ref = Number(m && m.previousClose), sec = Number(m && m.regularMarketTime);
  if (!c || !Number.isFinite(price) || !Number.isFinite(ref) || ref <= 0 || !Number.isFinite(sec)) throw new Error("Yahoo 台指期資料不完整");
  const tq = (c.indicators && c.indicators.quote && c.indicators.quote[0]) || {}, stamps = c.timestamp || [], bars = [];
  for (let i = 0; i < stamps.length; i++) {
    const b = { open: tq.open && tq.open[i], high: tq.high && tq.high[i], low: tq.low && tq.low[i], close: tq.close && tq.close[i] };
    if (!Number.isFinite(b.open) || !Number.isFinite(b.high) || !Number.isFinite(b.low) || !Number.isFinite(b.close)) continue;
    bars.push({ ts: (stamps[i] - 60) * 1000, open: b.open, high: b.high, low: b.low, close: b.close, volume: (tq.volume && tq.volume[i]) || 0, ref });
  }
  const data = { price, ref, sec, volume: Number(qt.volume) || 0, month: txfNearMonthOf(new Date((sec + 8 * 3600) * 1000)), bars };
  cache.at = Date.now(); cache.data = data;
  return data;
}
// 期交所官方每日行情（CSV、Big5）最近 20 天的日盤（一般交易時段），每天取到期月份最小的那一檔＝近月；回最後一個交易日：
// { day, month(6 碼), open, high, low, close, change(漲跌價，對前一日結算價), pct, volume, settle }
async function txfLastDayClose() {
  const cache = (globalThis.__txfLastDay = globalThis.__txfLastDay || {});
  if (cache.at && Date.now() - cache.at < 300000 && cache.row) return cache.row;
  const today = new Date(Date.now() + 8 * 3600000);
  const from = new Date(today.getTime() - 20 * 86400000);
  const f = (d) => d.getUTCFullYear() + "/" + String(d.getUTCMonth() + 1).padStart(2, "0") + "/" + String(d.getUTCDate()).padStart(2, "0");
  const r = await fetch("https://www.taifex.com.tw/cht/3/futDataDown", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", referer: "https://www.taifex.com.tw/cht/3/dlFutDailyMarketView", "user-agent": "Mozilla/5.0" },
    body: "down_type=1&commodity_id=TX&commodity_id2=&queryStartDate=" + encodeURIComponent(f(from)) + "&queryEndDate=" + encodeURIComponent(f(today))
  });
  if (!r.ok) throw new Error("期交所每日行情 HTTP " + r.status);
  const text = new TextDecoder("big5").decode(await r.arrayBuffer());
  const num = (v) => { const n = Number(String(v == null ? "" : v).replace(/,/g, "")); return Number.isFinite(n) && String(v).trim() !== "" ? n : null; };
  const nearOf = new Map();
  for (const line of text.split(String.fromCharCode(10))) {
    const c = line.split(",");
    if (c.length < 11 || !/^[0-9]{4}[/][0-9]{2}[/][0-9]{2}$/.test(c[0])) continue;
    const month = String(c[2]).trim();
    if (!/^[0-9]{6}$/.test(month) || String(c[17]).trim() !== "一般") continue;
    const close = num(c[6]);
    if (close === null || close <= 0) continue;
    const day = c[0].replace(/[/]/g, "-");
    const cur = nearOf.get(day);
    if (!cur || month < cur.month) nearOf.set(day, { day, month, open: num(c[3]), high: num(c[4]), low: num(c[5]), close, change: num(c[7]), pct: num(String(c[8]).replace("%", "")), volume: num(c[9]) || 0, settle: num(c[10]) });
  }
  const days = Array.from(nearOf.keys()).sort();
  if (!days.length) throw new Error("期交所每日行情沒有日盤資料");
  const row = nearOf.get(days[days.length - 1]);
  cache.at = Date.now(); cache.row = row;
  return row;
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

// 每500個請求抽樣寫入1次KV（KV 免費方案一天只能寫 1,000 次）。0.05 時 2026-10-11 收到 Cloudflare 警告信改 0.01；
// 2026-10-15 一天約 5 萬次請求又用到寫入上限的一半，再降到 0.002（一天 10 萬次請求也只寫 200 次）。
const USAGE_SAMPLE_RATE = 0.002;
const USAGE_BUCKET_MINUTES = 15;
// 2026-11-10 使用者：5000 比平常開盤時段（09:00～11:00，5～9 個分頁／裝置同時開）的用量還低，每天早上都響 → 調高到 8000，另外加「全天累計」警報。
const DEFAULT_USAGE_ANOMALY_THRESHOLD = 8000; // 每15分鐘估計請求數超過這個值才發警報；可用環境變數USAGE_ANOMALY_THRESHOLD覆蓋
// 全天累計警報：Cloudflare 免費方案一天 10 萬次請求、每天 00:00 UTC（台灣 08:00）重新計算，所以這裡也照 UTC 日加總；超過 8 萬次發一次（當天不再重複）。可用環境變數USAGE_DAILY_THRESHOLD覆蓋
const DEFAULT_USAGE_DAILY_THRESHOLD = 80000;

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

// /api/usage（2026-10-12 使用者：今天開盤要檢查流量）：讀用量監控的抽樣計數，算台灣時間今天每小時的估計請求數。
// 只讀一天的 bucket（最多 96 個 KV 讀取），結果在同一個執行環境裡留 5 分鐘，不會把 KV 免費讀取額度用掉。
// ?date=YYYY-MM-DD 看前一天（2026-10-15 KV 警告信：要看昨天到底多少請求）；bucket 只留 2 天。
let usageMemo = {};
let ipoMemo = null;   // 抽籤股：同一個 isolate 10 分鐘內直接回（2026-10-17：原本一次要 25～39 秒）
async function usageToday(env, date) {
  const twNow = new Date(Date.now() + 8 * 3600000);
  const twDate = date || twNow.toISOString().slice(0, 10);
  const memo = usageMemo[twDate];
  if (memo && Date.now() - memo.at < 300000) return memo.body;
  const startUtc = Date.parse(twDate + "T00:00:00Z") - 8 * 3600000;
  const endUtc = Math.min(Date.now(), startUtc + 24 * 3600000 - 1);
  const keys = [];
  for (let t = startUtc; t <= endUtc; t += USAGE_BUCKET_MINUTES * 60000) keys.push(usageBucketKey(new Date(t)));
  const values = await Promise.all(keys.map((k) => env.USAGE_KV.get(k).catch(() => null)));
  const byHour = {};
  let total = 0, peak = { at: null, requests: 0 };
  keys.forEach((k, i) => {
    const n = parseInt(values[i] || "0", 10) || 0;
    if (!n) return;
    const tw = new Date(Date.parse(k.slice(9) + ":00Z") + 8 * 3600000).toISOString();
    const hour = tw.slice(11, 13);
    byHour[hour] = (byHour[hour] || 0) + n;
    total += n;
    if (n > peak.requests) peak = { at: tw.slice(11, 16), requests: n };
  });
  const body = {
    status: "ok", date: twDate, asOf: date ? null : twNow.toISOString().slice(11, 16), estimatedRequests: total, byHour, peak15m: peak,
    sampleRate: USAGE_SAMPLE_RATE, alertThreshold15m: parseInt(env.USAGE_ANOMALY_THRESHOLD, 10) || DEFAULT_USAGE_ANOMALY_THRESHOLD,
    alertThresholdDaily: parseInt(env.USAGE_DAILY_THRESHOLD, 10) || DEFAULT_USAGE_DAILY_THRESHOLD,
    freePlanDailyLimit: 100000,
    note: "每 " + Math.round(1 / USAGE_SAMPLE_RATE) + " 個請求抽樣記 1 次再乘回去，是估計值；時間是台灣時間；5 分鐘更新一次"
  };
  usageMemo[twDate] = { at: Date.now(), body };
  return body;
}

// 全天累計（UTC 日，跟 Cloudflare 免費方案的計算日一致）：把今天 00:00 UTC 到現在的 15 分鐘 bucket 加起來（最多 96 次 KV 讀取，排程每 15 分鐘一次）。
// 超過門檻時在 KV 記一個旗標（USAGE_KV 一天只多寫這 1 次），當天不再重複通知。
async function checkDailyUsage(env, nowMs) {
  if (!env.USAGE_KV) return null;
  const now = nowMs === undefined ? Date.now() : nowMs;
  const day = new Date(now).toISOString().slice(0, 10);
  const startUtc = Date.parse(day + "T00:00:00Z");
  const keys = [];
  for (let t = startUtc; t <= now; t += USAGE_BUCKET_MINUTES * 60000) keys.push(usageBucketKey(new Date(t)));
  const values = await Promise.all(keys.map((k) => env.USAGE_KV.get(k).catch(() => null)));
  const total = values.reduce((a, v) => a + (parseInt(v || "0", 10) || 0), 0);
  const threshold = parseInt(env.USAGE_DAILY_THRESHOLD, 10) || DEFAULT_USAGE_DAILY_THRESHOLD;
  const flagKey = "reqalert-day:" + day;
  let alreadyNotified = false;
  if (total > threshold) alreadyNotified = !!(await env.USAGE_KV.get(flagKey).catch(() => null));
  return { day: day, flagKey: flagKey, estimatedRequests: total, threshold: threshold, anomalous: total > threshold && !alreadyNotified };
}

async function notifyDiscordDailyUsage(env, result) {
  if (!env.DISCORD_WEBHOOK_URL) return;
  const message = "⚠️ tw-groups 全天請求量偏高｜UTC 日 " + result.day + "（台灣時間 08:00 起算）" +
    "｜累計估計 " + result.estimatedRequests + "（抽樣估算，非精確值）" +
    "｜門檻 " + result.threshold + "（免費方案一天上限約 100000）";
  await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ content: message })
  });
  await env.USAGE_KV.put(result.flagKey, "1", { expirationTtl: 172800 }).catch(() => {});
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

// ---- 13:00 建議（2026-11-10 使用者：改成後端 13:00 自動存，每台裝置看到同一份）----
// 排程（每 15 分鐘）在交易日 13:00～13:25 之間算一次存進 KV（key sg13:日期），沒存過才算；網頁來問時若今天還沒有（排程漏了）也會當場算一次補上。
// 買進（全市場）：技術＝均線分數、籌碼＝當週集保大戶變化 %、營收＝最新月營收年增，三項各自在全市場排百分位、平均＝綜合分；
// 門檻：均線分數 >=7、週籌碼 >0、營收年增 >0、非處置股、現在沒漲停、今天漲跌幅在 -5%~+9.5%；照綜合分高到低排，同分比盤中大戶力，符合的全部列出（不限檔數）。
// 另外把全部股票 13:00 當時的 [股名, 價, 漲跌幅, 均線分數, 週籌碼, 營收年增, 大戶力] 一起存（table），前端用它對自己的自選股分組算賣出建議（不用把持股傳給後端）。
const SG13_MIN_SCORE = 7, SG13_MAX_PCT = 9.5, SG13_MIN_PCT = -5, SG13_VERSION = 3;   // 2026-11-10 使用者：符合的全部列出（不限檔數）；均線分數門檻 9 → 7；版本改了當天的舊快照會重算
let sg13Inflight = null;
function sg13Pctile(rows, key) {
  const v = rows.filter((r) => r[key] !== null && Number.isFinite(r[key])).sort((a, b) => a[key] - b[key]);
  const m = new Map();
  v.forEach((r, i) => m.set(r.code, v.length <= 1 ? 1 : i / (v.length - 1)));
  return m;
}
// 純計算（好測試）：sc＝/api/hub/screener、rv＝/api/hub/revenue、mf＝盤中大戶力排行、groups＝/api/groups 的 groups
function sg13Compute(sc, rv, mf, groups, date, hm, quoteDate) {
  const yi = rv.fields.indexOf("yoy"), yoy = new Map();
  rv.rows.forEach((r) => { const v = Number(r[yi]); if (r[yi] !== null && Number.isFinite(v)) yoy.set(String(r[0]), v); });
  const hold = new Map();
  ((mf && mf.ranking) || []).forEach((r) => { const v = Number(r.strengthPct); if (Number.isFinite(v)) hold.set(String(r.code), v); });
  const quote = new Map();
  (groups || []).forEach((g) => (g.stocks || []).forEach((st) => {
    if (st.price !== null && st.price !== undefined && Number.isFinite(st.changePercent) && !quote.has(st.code)) quote.set(st.code, st);
  }));
  const rows = sc.rows.map((r) => ({ code: r.code, name: r.name, grp: r.grp || "", score: Number.isFinite(r.score) ? r.score : null,
    chip: Number.isFinite(r.chip) ? r.chip : null, yoy: yoy.has(r.code) ? yoy.get(r.code) : null, dispo: !!r.dispo }));
  const pt = sg13Pctile(rows, "score"), pc = sg13Pctile(rows, "chip"), pf = sg13Pctile(rows, "yoy");
  const buy = [];
  rows.forEach((r) => {
    if (!pt.has(r.code) || !pc.has(r.code) || !pf.has(r.code)) return;
    if (r.score < SG13_MIN_SCORE || !(r.chip > 0) || !(r.yoy > 0) || r.dispo) return;
    const q = quote.get(r.code);
    if (!q || q.limitUp || q.changePercent >= SG13_MAX_PCT || q.changePercent <= SG13_MIN_PCT) return;
    buy.push({ code: r.code, name: r.name, grp: r.grp, px: q.price, pct: q.changePercent,
      combo: Math.round(100 * (pt.get(r.code) + pc.get(r.code) + pf.get(r.code)) / 3), score: r.score, chip: r.chip, yoy: r.yoy,
      hold: hold.has(r.code) ? hold.get(r.code) : null });
  });
  buy.sort((a, b) => b.combo - a.combo || (b.hold === null ? -1e9 : b.hold) - (a.hold === null ? -1e9 : a.hold) || b.score - a.score);
  const table = {};
  rows.forEach((r) => {
    const q = quote.get(r.code);
    table[r.code] = [r.name, q ? q.price : null, q ? q.changePercent : null, r.score, r.chip, r.yoy, hold.has(r.code) ? hold.get(r.code) : null];
  });
  return { v: SG13_VERSION, date: date, hm: hm, dataDate: sc.date || "", chipWeek: sc.chipWeek || "", revMonth: rv.month || "", quoteDate: quoteDate || "",
    universe: rows.length, candN: buy.length, buy: buy, table: table };
}
async function sg13Fetch(path) {
  const r = await proxyHanstockBars(path, 0);
  if (!r.ok) throw new Error("HanStock " + path + " " + r.status);
  return JSON.parse(await r.text());
}
async function sg13BuildAndSave(env) {
  const tw = new Date(Date.now() + 8 * 3600000);
  const date = tw.toISOString().slice(0, 10), hm = tw.toISOString().slice(11, 16);
  const [sc, rv, mf, gbody] = await Promise.all([
    sg13Fetch("/api/hub/screener"), sg13Fetch("/api/hub/revenue"), sg13Fetch("/api/hub/main-force/ranking?limit=1000").catch(() => null), refreshGroups()
  ]);
  const g = JSON.parse(gbody);
  if (!sc || !Array.isArray(sc.rows) || !sc.rows.length || !rv || !Array.isArray(rv.rows) || !Array.isArray(rv.fields)) throw new Error("資料不完整");
  if (g.quoteDate !== date) return null;   // 今天沒開盤（假日）或報價還是舊的，不存
  const snap = sg13Compute(sc, rv, mf, g.groups, date, hm, g.quoteDate);
  if (env && env.USAGE_KV) {
    await env.USAGE_KV.put("sg13:" + date, JSON.stringify(snap), { expirationTtl: 30 * 86400 });
    await env.USAGE_KV.put("sg13:latest", date, { expirationTtl: 30 * 86400 });
  }
  return snap;
}
// 今天的快照：KV 有就直接回；沒有且已過 13:00（交易日）就當場算一次（同一時間只算一份）
async function sg13Today(env, allowBuild) {
  const tw = new Date(Date.now() + 8 * 3600000);
  const date = tw.toISOString().slice(0, 10), hm = tw.toISOString().slice(11, 16), dow = tw.getUTCDay();
  if (!env || !env.USAGE_KV) return null;
  const raw = await env.USAGE_KV.get("sg13:" + date);
  const old = raw ? JSON.parse(raw) : null;
  if (old && old.v === SG13_VERSION) return old;
  if (!allowBuild || dow < 1 || dow > 5 || hm < "13:00") return old;   // 規則改過（版本不同）的舊快照，13:00 後有人來問或排程跑到就重算一次
  if (!sg13Inflight) sg13Inflight = sg13BuildAndSave(env).finally(() => { sg13Inflight = null; });
  return await sg13Inflight;
}
async function sg13Cron(env) {
  const tw = new Date(Date.now() + 8 * 3600000), hm = tw.toISOString().slice(11, 16), dow = tw.getUTCDay();
  if (dow < 1 || dow > 5 || hm < "13:00" || hm > "13:25") return;
  await sg13Today(env, true);
}
// GET /api/suggest13?date=YYYY-MM-DD&codes=2330,2034：回快照（不含 table），codes 給了就附上這幾檔的 table
async function sg13Response(env, url) {
  const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" };
  if (!env || !env.USAGE_KV) return new Response(JSON.stringify({ status: "missing" }), { headers });
  const qd = url.searchParams.get("date");
  let snap = null;
  if (qd) {
    if (!(qd.length === 10 && qd[4] === "-" && qd[7] === "-")) return new Response(JSON.stringify({ status: "error", error: "date 要 YYYY-MM-DD" }), { status: 422, headers });
    const raw = await env.USAGE_KV.get("sg13:" + qd);
    snap = raw ? JSON.parse(raw) : null;
  } else {
    snap = await sg13Today(env, true);
    if (!snap) {
      const latest = await env.USAGE_KV.get("sg13:latest");
      const raw = latest ? await env.USAGE_KV.get("sg13:" + latest) : null;
      snap = raw ? JSON.parse(raw) : null;
    }
  }
  if (!snap) return new Response(JSON.stringify({ status: "empty" }), { headers });
  const codes = String(url.searchParams.get("codes") || "").split(",").map((c) => c.trim().toUpperCase()).filter((c) => c).slice(0, 60);
  const table = {};
  codes.forEach((c) => { if (snap.table && snap.table[c]) table[c] = snap.table[c]; });
  const out = Object.assign({}, snap, { table: table });
  return new Response(JSON.stringify({ status: "ok", snap: out }), { headers });
}

// 教學影片（2026-10-13 使用者：訊號教學、下方工具列各功能做影音教學）：mp4 放在 Workers 靜態檔案 public/tut-assets/，
// 網址用 /videos/<名字>.mp4 經過這裡：iPhone／iPad 的 Safari 播影片一定要 Range（206 分段），靜態檔案有沒有支援文件沒寫，這裡自己切。
// 2026-10-30 使用者：K 棒道場每堂課的「語音課程」mp3 放在 public/tut-assets/dj/，網址 /dojo-voice/<型態>.mp3，同樣要 Range（iPhone 播音檔也要）
async function serveTutorialVideo(request, env, url) {
  const isVoice = url.pathname.indexOf("/dojo-voice/") === 0;
  const name = url.pathname.slice((isVoice ? "/dojo-voice/" : "/videos/").length);
  const nameOk = isVoice ? /^[a-z0-9_-]{1,60}[.]mp3$/.test(name) : /^[a-z0-9_-]{1,60}[.]mp4$/.test(name);
  if (!nameOk || !env.ASSETS) return new Response("not found", { status: 404 });
  const res = await env.ASSETS.fetch(new Request(new URL((isVoice ? "/tut-assets/dj/" : "/tut-assets/") + name, url.origin).toString()));
  if (!res.ok) return new Response("not found", { status: 404 });
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const headers = { "content-type": isVoice ? "audio/mpeg" : "video/mp4", "accept-ranges": "bytes", "cache-control": "public, max-age=600" };
  const head = request.method === "HEAD";
  const m = /^bytes=([0-9]*)-([0-9]*)$/.exec(String(request.headers.get("range") || "").trim());
  if (m && (m[1] !== "" || m[2] !== "")) {
    let start, end;
    if (m[1] === "") { start = Math.max(0, size - parseInt(m[2], 10)); end = size - 1; }
    else { start = parseInt(m[1], 10); end = m[2] === "" ? size - 1 : Math.min(parseInt(m[2], 10), size - 1); }
    if (!(start <= end) || start >= size) return new Response(null, { status: 416, headers: { "content-range": "bytes */" + size } });
    return new Response(head ? null : buf.slice(start, end + 1), { status: 206,
      headers: Object.assign({}, headers, { "content-range": "bytes " + start + "-" + end + "/" + size, "content-length": String(end - start + 1) }) });
  }
  return new Response(head ? null : buf, { headers: Object.assign({}, headers, { "content-length": String(size) }) });
}

// 2026-11-05 使用者：Worker 自己記錄每 10 秒的即時價。美債 10 年期殖利率幾乎 24 小時在交易，但 Yahoo ^TNX 的分K 只有芝加哥選擇權交易所那段時間，亞洲時段是空的。
// 這個 Durable Object 用 alarm 每 10 秒向 TradingView 問一次即時價（TVC:US10Y），合成 1 分K，存在自己的儲存空間（每小時一個 key、留 4 天）；
// 圖表的 5 分／1 分把 Yahoo 最後一根之後的接上記錄的 K 棒（見 /api/idx-bars/tnx）。只記有即時價、而且最新價 3 分鐘內有更新的時候。
// 2026-11-06 使用者要日經、韓國、恒生的 1 分／5 分 K 圖也即時：Yahoo 這三個指數的分K 慢約 15 分鐘（報價是即時的、圖慢），一起記錄（TradingView 即時價，休市／暫停交易時沒有新價就不記）
const REC_SYMS = ["tnx", "n225", "kospi", "hsi"];
// 2026-11-06 例行檢查：日經收盤（台北 14:30）後 TradingView 偶爾還會更新時間（結算價之類），記錄器就記出一排平的 K 棒（14:45、18:31…）。
// 日經／韓國／恒生只在開盤時段才記、才接即時價（台北時間分鐘數：日經、韓國 08:00～14:35，恒生 09:30～16:10，週一到週五）；美債殖利率幾乎 24 小時，不限
const REC_SESSION = { n225: [480, 875], kospi: [480, 875], hsi: [570, 970] };
function recInSession(sym, ms) {
  const w = REC_SESSION[sym];
  if (!w) return true;
  const t = new Date(ms + 8 * 3600000), day = t.getUTCDay(), m = t.getUTCHours() * 60 + t.getUTCMinutes();
  return day >= 1 && day <= 5 && m >= w[0] && m <= w[1];
}
export class Recorder {
  constructor(state, env) { this.state = state; this.env = env; }
  async fetch(request) {
    const url = new URL(request.url);
    const al = await this.state.storage.getAlarm();
    if (al === null) await this.state.storage.setAlarm(Date.now() + 500);   // 鬧鐘沒在跑就叫起來（第一次、或中斷過）
    if (url.pathname === "/bars") return Response.json({ status: "ok", bars: await this.allBars(url.searchParams.get("sym") || "tnx") });
    return Response.json({ status: "ok", alarm: al });
  }
  async alarm() {
    try { await this.sample(); } catch (e) { /* 這次沒取到就算了，下一個 10 秒再取 */ }
    await this.state.storage.setAlarm(Date.now() + 10000);
  }
  async sample() {
    const tv = await tvQuotes();
    const nowMs = Date.now();
    for (const sym of REC_SYMS) {
      const q = tv[sym];
      if (!q || !Number.isFinite(q.price) || nowMs / 1000 - q.time > 180 || !recInSession(sym, nowMs)) continue;   // 沒有即時價（休市）、不在開盤時段就不記
      const key = Math.floor(nowMs / 60000) * 60000;
      let cur = await this.state.storage.get("cur:" + sym);
      if (cur && cur.ts !== key) { await this.saveBar(sym, cur); cur = null; }   // 上一分鐘結束：存進那個小時的 key
      if (!cur) cur = { ts: key, open: q.price, high: q.price, low: q.price, close: q.price, n: 1 };
      else { cur.high = Math.max(cur.high, q.price); cur.low = Math.min(cur.low, q.price); cur.close = q.price; cur.n += 1; }
      await this.state.storage.put("cur:" + sym, cur);
    }
  }
  async saveBar(sym, bar) {
    const hk = "bars:" + sym + ":" + new Date(bar.ts).toISOString().slice(0, 13);
    const arr = (await this.state.storage.get(hk)) || [];
    if (!arr.length || arr[arr.length - 1].ts < bar.ts) arr.push({ ts: bar.ts, open: bar.open, high: bar.high, low: bar.low, close: bar.close });
    await this.state.storage.put(hk, arr);
    if (new Date(bar.ts).getUTCMinutes() === 0) {   // 每小時清一次 4 天前的
      const old = await this.state.storage.list({ prefix: "bars:" + sym + ":", end: "bars:" + sym + ":" + new Date(bar.ts - 4 * 86400000).toISOString().slice(0, 13) });
      for (const k of old.keys()) await this.state.storage.delete(k);
    }
  }
  async allBars(sym) {
    const m = await this.state.storage.list({ prefix: "bars:" + sym + ":", limit: 120 });
    const out = [];
    for (const arr of m.values()) for (const b of arr) out.push(b);
    const cur = await this.state.storage.get("cur:" + sym);
    if (cur && (!out.length || out[out.length - 1].ts < cur.ts)) out.push({ ts: cur.ts, open: cur.open, high: cur.high, low: cur.low, close: cur.close });
    return out;
  }
}
let recPingAt = 0;
function recorderStub(env) { return env && env.RECORDER ? env.RECORDER.get(env.RECORDER.idFromName("main")) : null; }
async function recorderBars(env, sym) {   // 記錄的 1 分K（沒有綁定或失敗就是空的，圖照用 Yahoo）
  try {
    const stub = recorderStub(env);
    if (!stub) return [];
    const r = await stub.fetch("https://recorder/bars?sym=" + sym);
    const j = await r.json();
    return Array.isArray(j.bars) ? j.bars : [];
  } catch (e) { return []; }
}
function recorderPing(env, ctx) {   // 確認鬧鐘有在跑；同一個 isolate 一分鐘最多叫一次
  if (!env || !env.RECORDER || Date.now() - recPingAt < 60000) return;
  recPingAt = Date.now();
  const p = (async () => { try { await recorderStub(env).fetch("https://recorder/ping"); } catch (e) { /* 下次再叫 */ } })();
  if (ctx && ctx.waitUntil) ctx.waitUntil(p);
}
const WORKER_ENTRY = {
  async fetch(request, env, ctx) {
    if (!request.headers.get("x-internal")) recordSampledRequest(env, ctx);   // /api/live-bundle 裡面呼叫的子請求不重複計數
    const url = new URL(request.url);
    if (url.pathname.indexOf("/videos/") === 0 || url.pathname.indexOf("/dojo-voice/") === 0) return await serveTutorialVideo(request, env, url);
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
    if (url.pathname === "/api/signal-bundle") {
      // 2026-10-16 Cloudflare 免費方案一天 10 萬次請求：網頁每 5 秒要盤中訊號＋大戶力排行，原本兩支請求合成這一支。
      // Worker 去後端抓兩份（跟 /api/intraday-signals、/api/main-force-ranking 一樣不快取），原樣拼成 {"signals":…,"ranking":…}，
      // 不解析 JSON、不轉字串，省 Worker 的 CPU 時間。
      const day = url.searchParams.get("trade_date") || "";
      const limit = parseInt(url.searchParams.get("limit") || "5000", 10);
      const rankLimit = parseInt(url.searchParams.get("rank_limit") || "1000", 10);
      if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(day) || !(limit > 0) || !(rankLimit > 0)) return Response.json({ status: "error", error: "參數不對" }, { status: 422 });
      try {
        const opts = { headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" }, cf: { cacheTtl: 0, cacheEverything: false } };
        const base = "https://hanstock-production-b872.up.railway.app";
        const [sig, rank] = await Promise.all([
          fetch(base + "/api/hub/intraday-signals?trade_date=" + day + "&limit=" + limit, opts),
          fetch(base + "/api/hub/main-force/ranking?limit=" + rankLimit, opts)
        ]);
        if (!sig.ok || !rank.ok) return Response.json({ status: "error", error: "後端回 " + sig.status + "／" + rank.status }, { status: 502 });
        const parts = [new TextEncoder().encode('{"signals":'), new Uint8Array(await sig.arrayBuffer()), new TextEncoder().encode(',"ranking":'), new Uint8Array(await rank.arrayBuffer()), new TextEncoder().encode("}")];
        const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
        let at = 0;
        for (const p of parts) { out.set(p, at); at += p.length; }
        return new Response(out, { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" } });
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/main-force-ranking") {
      try {
        return await proxyHanstockBars("/api/hub/main-force/ranking" + url.search, 0);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ranking: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/holder-timeline") {
      // 盤中大戶力每檔第一次進名單的時間（2026-10-13 使用者：早上進過名單、後來掉出去的要補回來），60 秒快取
      try {
        return await proxyHanstockBars("/api/hub/main-force/holder-timeline" + url.search, 60);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), stocks: {} }, { status: 502 });
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
    if (url.pathname === "/api/kill12") {
      // 1️⃣2️⃣空（機器人 123，2026-10-18）：後端 5 分K引擎算好的「今天衝高 3% 以上、收在 20MA 下、20MA 往下彎」名單；2026-10-21 使用者：123 比綠卡片慢，快取 30 秒（瀏覽器再 30 秒）→ 10 秒
      try {
        return await proxyHanstockBars("/api/hub/kill12", 10);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), items: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/kbar-dojo/quiz" || url.pathname === "/api/kbar-dojo/lessons") {
      // K 棒型態道場（2026-10-30）：後端用日K歷史掃出五種型態的真實案例出題；題目每次隨機、案例池剛建好前會回 building，都不快取
      try {
        const lessons = url.pathname.endsWith("/lessons");
        return await proxyHanstockBars("/api/hub/kbar-dojo/" + (lessons ? "lessons" : "quiz" + url.search), 0);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/big-holder") {
      // 老師版大戶%（2026-10-18：同秒同方向併單 ≥7 張、開盤第一筆算賣、÷ 近 5 日平均成交值），今日功課用，20 秒快取
      try {
        return await proxyHanstockBars("/api/hub/big-holder" + url.search, 20);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), items: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/homework-snapshot") {
      // 今日功課盤中紀錄（2026-10-18）：網站每 5 分鐘把刀劍空名單送後端存一份，回放、刀功課廣播用
      if (request.method !== "POST") return Response.json({ status: "error", error: "要用 POST" }, { status: 405 });
      try {
        return await proxyHanstockPost("/api/hub/homework-snapshot", request);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/homework-snapshots") {
      // 今日功課某一天的全部 5 分鐘紀錄，30 秒快取
      try {
        return await proxyHanstockBars("/api/hub/homework-snapshots" + url.search, 30);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), slots: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/group-rank-checkpoints") {
      // 67 族今天每半小時的族群名次（2026-10-16，老師族群明細最下面「今天23-3-11-24」那排；馬火多(30) 用），60 秒快取
      try {
        return await proxyHanstockBars("/api/hub/group-rank-checkpoints" + url.search, 60);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), times: [], groups: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/stock-futures-board") {
      // 股票期貨價格板（2026-10-16，首頁股票期貨排名(155) 照老師用股期價格算、空方線照台指期）：後端永豐 Snapshot，60 秒快取
      try {
        return await proxyHanstockBars("/api/hub/stock-futures-board", 60);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), quotes: {}, tx: null }, { status: 502 });
      }
    }
    if (url.pathname === "/api/group-daily-changes") {
      try {
        // 族群昨天／前天的平均漲跌幅（盤中打 333 用）：來自日K，收盤後才會變，快取 10 分鐘。
        // 前端要 days=4（週末、收盤後要剪掉報價那一天，剩下的還要有昨天、前天）
        const days = /^[1-9]$/.test(url.searchParams.get("days") || "") ? "?days=" + url.searchParams.get("days") : "";
        return await proxyHanstockBars("/api/hub/group-daily-changes" + days, 600);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/eps-board") {
      // 季報 EPS 榜（2026-10-29 使用者）：財報鏡像一天抓一次，5 分鐘快取
      return await proxyHanstockBars("/api/hub/eps-board" + url.search, 300);
    }
    if (url.pathname === "/api/obs-weekly") {
      // 收盤觀察股 週分析（2026-10-29 使用者）：名單、回測都是收盤後才變，同一個日期 5 分鐘快取（沒指定日期的 2 分鐘）
      return await proxyHanstockBars("/api/hub/obs-weekly" + url.search, url.searchParams.get("date") ? 300 : 120);
    }
    if (url.pathname === "/api/obs-weekly-mine") {
      // 自選觀察股 週分析（2026-11-01 使用者）：自選股只存在使用者的瀏覽器，名單（分組＋代號）用 POST 送後端算，不快取
      if (request.method !== "POST") return Response.json({ status: "error", error: "要用 POST" }, { status: 405 });
      try {
        return await proxyHanstockPost("/api/hub/obs-weekly-custom", request);
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
      // 籌碼暴增雷達（2026-10-04 使用者：照老師 zhuang.tw/radar 做，放在盤後籌碼排行）：集保週資料，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar" + url.search, 300);
    }
    if (url.pathname === "/api/grail-radar") {
      // 飆股雷達（2026-10-07 使用者：照老師 App 的飆股雷達做）：紫殺四個聖杯 15 個邏輯照時間點的名單，30 秒快取
      return await proxyHanstockBars("/api/hub/grail-radar" + url.search, 30);
    }
    if (url.pathname === "/api/jail") {
      // 處置監獄（2026-10-09 使用者：照老師「處置股・出獄與嫌疑名單」做）：證交所／櫃買注意、處置公告，2 分鐘快取
      return await proxyHanstockBars("/api/hub/jail" + url.search, 120);
    }
    if (url.pathname === "/api/jail-stock") {
      // 處置監獄的個股前科查詢，60 秒快取
      return await proxyHanstockBars("/api/hub/jail/stock" + url.search, 60);
    }
    if (url.pathname === "/api/revenue") {
      // 營收成長榜（2026-10-09 使用者：照老師「每月營收成長榜」做）：觀測站每月營收彙總表＋公布日＋隔日漲跌，2 分鐘快取
      return await proxyHanstockBars("/api/hub/revenue" + url.search, 120);
    }
    if (url.pathname === "/api/revenue-stock") {
      // 營收成長榜的查個股營收（每個月的年增、公布日、隔日漲跌），60 秒快取
      return await proxyHanstockBars("/api/hub/revenue/stock" + url.search, 60);
    }
    if (url.pathname === "/api/ma-rank") {
      // 均線分數排行（2026-10-10 使用者：照老師 zhuang.tw/ma 做）：個股分數前 60＋族群分數前十大。
      // 2026-10-24 使用者：盤中也要即時——沒指定日期（或選到今天）時後端用現價當今天收盤重算（回 live＝true），所以快取 30 秒；回看舊日期的歷史資料照舊 5 分鐘（選到今天＝還是即時，也 30 秒）
      return await proxyHanstockBars("/api/hub/ma-rank" + url.search, maLiveTtl(url));
    }
    if (url.pathname === "/api/ma-strength") {
      // 今日強勢股／弱勢股（2026-10-12 使用者）：族群分數前十大（倒數十名）裡均線分數高（低）的股票。
      // 2026-10-19 使用者：盤中也要即時——沒指定日期時後端用現價當今天收盤重算分數（回 live＝true），所以只快取 30 秒；指定日期的歷史資料照舊 5 分鐘
      return await proxyHanstockBars("/api/hub/ma-rank/strength" + url.search, url.searchParams.get("date") ? 300 : 30);
    }
    if (url.pathname === "/api/ma-rank-hits") {
      // 均線分數排行的前十名常客（近 N 天每天取前 K 名，同分全算）。2026-10-24：沒指定日期時最後一天盤中用現價即時算，快取 30 秒；指定日期照舊 5 分鐘
      return await proxyHanstockBars("/api/hub/ma-rank/hits" + url.search, maLiveTtl(url));
    }
    if (url.pathname === "/api/index-score") {
      // 指數均線分數（2026-10-24 使用者：櫃買分數、加權分數）：收盤後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/index-score", 300);
    }
    if (url.pathname === "/api/ma-rank-q") {
      // 均線分數查詢（股號→所屬族群全部成員；或族群名），60 秒快取
      return await proxyHanstockBars("/api/hub/ma-rank/q" + url.search, 60);
    }
    if (url.pathname === "/api/screener") {
      // 系統選股・條件選股（2026-10-10 使用者：照老師選股系統做，併進個股研究）：收盤後才變，3 分鐘快取（不同條件各自快取）
      return await proxyHanstockBars("/api/hub/screener" + url.search, 180);
    }
    if (url.pathname === "/api/screener-stock") {
      // 選股系統的個股完整彙整，3 分鐘快取
      return await proxyHanstockBars("/api/hub/screener/stock" + url.search, 180);
    }
    if (url.pathname === "/api/river") {
      // 估值河流圖（2026-10-10 使用者：照老師 zhuang.tw/river 做，先做本站版）：查個股位置＋河道歷史，收盤後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/river" + url.search, 300);
    }
    if (url.pathname === "/api/river-list") {
      // 估值河流圖的股票清單（查詢建議用），5 分鐘快取
      return await proxyHanstockBars("/api/hub/river/list" + url.search, 300);
    }
    if (url.pathname === "/api/rec-status") {
      // 看記錄器有沒有在跑：記了幾根 1 分K、最後一根的時間
      const rec = await recorderBars(env, url.searchParams.get("sym") || "tnx");
      recorderPing(env, ctx);
      return Response.json({ status: env.RECORDER ? "ok" : "no-binding", n: rec.length, first: rec[0] ? new Date(rec[0].ts).toISOString() : null, last: rec.length ? new Date(rec[rec.length - 1].ts).toISOString() : null, lastBar: rec[rec.length - 1] || null },
        { headers: { "cache-control": "no-store" } });
    }
    if (url.pathname === "/api/live-bundle") {
      // 首頁右上角四份即時行情（國際指數、期貨、加權、台指期）合成一個請求（2026-11-05：Cloudflare 免費方案每天只有 10 萬個請求，
      // 原本四份各自輪詢，一個分頁每分鐘 21 個）。裡面直接呼叫原本四條路由（函式呼叫，不是對外請求），子回應的文字原樣接起來，不再解析一次，省 CPU；
      // 哪一份失敗就是 null，前端各自判斷。
      const sub = async (path) => {
        try {
          const r = await WORKER_ENTRY.fetch(new Request(url.origin + path, { headers: { "x-internal": "1" } }), env, ctx);
          const t = await r.text();
          return t.charCodeAt(0) === 123 ? t : "null";
        } catch (e) { return "null"; }
      };
      const limited = (p) => Promise.race([p, new Promise((res) => setTimeout(() => res("null"), 7000))]);   // 哪一份超過 7 秒就當這次沒有，不拖住其他三份
      const parts = await Promise.all([limited(sub("/api/world-idx")), limited(sub("/api/fut-live")), limited(sub("/api/taiex-live")), limited(sub("/api/txf-live"))]);
      return new Response('{"status":"ok","world":' + parts[0] + ',"fut":' + parts[1] + ',"taiex":' + parts[2] + ',"txf":' + parts[3] + '}',
        { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" } });
    }
    if (url.pathname === "/api/fut-live") {
      // 首頁國際行情框裡的「期貨」那行（2026-11-05 使用者）：道瓊 YM、那斯達克 NQ、日經 NK、恒生 HSI。新浪即時；新浪抓不到的退回 Yahoo（慢 10 分，delayMin 會標）
      const sina = await sinaFutQuotes();
      const items = {};
      const nv = await naverKospiFut();
      if (nv) { const change = nv.price - nv.prev; items.ks = { name: FUT_NAME.ks, price: nv.price, prev: nv.prev, change, pct: nv.prev > 0 ? (change / nv.prev) * 100 : null, open: nv.open, high: nv.high, low: nv.low, time: nv.time, date: nv.date, src: "naver", delayMin: 0, status: nv.status }; }
      else items.ks = { name: FUT_NAME.ks, error: "暫時抓不到" };
      await Promise.all(Object.keys(FUT_SINA).map(async (id) => {
        const q = sina[id];
        if (q) { const change = q.prev ? q.price - q.prev : null; items[id] = { name: FUT_NAME[id], price: q.price, prev: q.prev, change, pct: change !== null ? (change / q.prev) * 100 : null, open: q.open, high: q.high, low: q.low, time: q.time, date: q.date, src: "sina", delayMin: 0 }; return; }
        if (!FUT_YAHOO[id]) { items[id] = { name: FUT_NAME[id], error: "沒有報價" }; return; }
        try {
          const r = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(FUT_YAHOO[id]) + "?interval=5m&range=1d", {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", Accept: "application/json" }, cf: { cacheTtlByStatus: { "200-299": 5, "300-599": 0 }, cacheEverything: true }
          });
          const m = ((((await r.json()) || {}).chart || {}).result || [])[0], meta = (m && m.meta) || {};
          const price = Number(meta.regularMarketPrice), prev = Number(meta.previousClose), rm = Number(meta.regularMarketTime);
          if (!Number.isFinite(price) || !Number.isFinite(rm)) throw new Error("沒有報價");
          const change = Number.isFinite(prev) && prev > 0 ? price - prev : null;
          items[id] = { name: FUT_NAME[id], price, prev: change !== null ? prev : null, change, pct: change !== null ? (change / prev) * 100 : null, time: rm, date: "", src: "yahoo", delayMin: 10 };
        } catch (e) { items[id] = { name: FUT_NAME[id], error: String((e && e.message) || e).slice(0, 60) }; }
      }));
      return new Response(JSON.stringify({ status: Object.values(items).some((x) => !x.error) ? "ok" : "error", items, generatedAt: new Date().toISOString() }),
        { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=2" } });
    }
    if (url.pathname === "/api/world-idx") {
      // 首頁右上角國際指數框（2026-11-05 使用者）：日經 225、韓國 KOSPI、道瓊、那斯達克、費城半導體。Yahoo 圖表 API 的日線（近 5 天）取最新價、前一日收盤，Cloudflare 快取 15 秒。
      // live＝現在在這個市場的正常交易時段內、而且最新價是 30 分鐘內的；不是就當收盤（前端寫「11/05 收盤」）
      const LIST = [["n225", "^N225", "日經 225"], ["kospi", "^KS11", "韓國 KOSPI"], ["dji", "^DJI", "道瓊工業"], ["ixic", "^IXIC", "那斯達克"], ["sox", "^SOX", "費城半導體"], ["tsm", "TSM", "台積電 ADR"], ["hsi", "^HSI", "恒生指數"], ["tnx", "^TNX", "美國10年期公債殖利率"]];
      // 2026-11-05 使用者：這幾個都要即時行情（有開盤、有在交易就要一直跳）。國際版 Yahoo 和台灣版 Yahoo（同一個來源、不同快取）一起問，取「最新價時間」較新的那個；
      // 快取只留 5 秒（Cloudflare 不快取失敗的）。日經、韓國的行情 Yahoo 可能被交易所限制延遲，所以回傳 time（最新價的時間），前端會寫資料時間、落後就標「慢 N 分」
      const twTick = async (sym) => {
        try {
          const r = await fetch("https://tw.stock.yahoo.com/_td-stock/api/resource/FinanceChartService.ApacLibraCharts;symbols=" + encodeURIComponent(JSON.stringify([sym])) + ";type=tick", {
            headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" }, cf: { cacheTtlByStatus: { "200-299": 5, "300-599": 0 }, cacheEverything: true }
          });
          if (!r.ok) return null;
          const c = (((await r.json()) || [])[0] || {}).chart || {};
          const price = Number(c.quote && c.quote.price), rm = Number(c.meta && c.meta.regularMarketTime);
          return Number.isFinite(price) && Number.isFinite(rm) ? { price, rm } : null;
        } catch (e) { return null; }
      };
      recorderPing(env, ctx);
      const tvAll = await tvQuotes();
      const one = async ([id, sym, name]) => {
        try {
          const [r, tw] = await Promise.all([fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(sym) + "?interval=1d&range=5d", {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", Accept: "application/json" },
            cf: { cacheTtlByStatus: { "200-299": 5, "300-599": 0 }, cacheEverything: true }
          }), twTick(sym)]);
          if (!r.ok) return [id, { name, error: "HTTP " + r.status }];
          const m = ((((await r.json()) || {}).chart || {}).result || [])[0];
          const meta = (m && m.meta) || {}, q = (m && m.indicators && m.indicators.quote && m.indicators.quote[0]) || {}, stamps = (m && m.timestamp) || [];
          let price = Number(meta.regularMarketPrice), rm = Number(meta.regularMarketTime);
          const off = Number(meta.gmtoffset) || 0;
          let src = "intl", tvPrev = null;
          if (tw && (!Number.isFinite(rm) || tw.rm > rm)) { price = tw.price; rm = tw.rm; src = "tw"; }   // 台灣版比較新就用台灣版
          const tv = tvAll[id];
          if (tv && tv.time > (Number.isFinite(rm) ? rm : 0)) { price = tv.price; rm = tv.time; src = "tv:" + String(tv.mode || ""); if (Number.isFinite(tv.chg)) tvPrev = tv.price - tv.chg; }   // TradingView 比較新就用它（它的 change_abs 反推前一日收盤）
          if (!Number.isFinite(price) || !Number.isFinite(rm)) return [id, { name, error: "沒有報價" }];
          const closes = [];
          for (let i = 0; i < stamps.length; i++) { const c = q.close && q.close[i]; if (Number.isFinite(c)) closes.push({ day: new Date((stamps[i] + off) * 1000).toISOString().slice(0, 10), close: c }); }
          const rmDay = new Date((rm + off) * 1000).toISOString().slice(0, 10);
          const n = closes.length;
          // 最後一根日K跟最新報價同一天（正常）→ 前一日收盤＝倒數第二根；日K還沒接上今天（報價比較新）→ 前一日收盤＝最後一根
          const prev = n >= 2 && closes[n - 1].day === rmDay ? closes[n - 2].close : n >= 1 && closes[n - 1].day < rmDay ? closes[n - 1].close : Number(meta.chartPreviousClose);
          const reg = (meta.currentTradingPeriod && meta.currentTradingPeriod.regular) || {};
          const nowS = Math.floor(Date.now() / 1000);
          const tvFresh = src.indexOf("tv:") === 0 && nowS - rm < 120;   // TradingView 即時價 2 分鐘內有更新＝正在交易（公債殖利率不在 Yahoo 的時段裡也在跳）
          const live = tvFresh || (Number.isFinite(reg.start) && Number.isFinite(reg.end) && nowS >= reg.start && nowS <= reg.end);   // 正常交易時段內就算盤中；最新價落後多久由前端看 time 自己標
          const prevUse = Number.isFinite(tvPrev) && tvPrev > 0 ? tvPrev : prev;
          const change = Number.isFinite(prevUse) && prevUse > 0 ? price - prevUse : null;
          return [id, { name, price, prev: prevUse, change, pct: change !== null ? (change / prevUse) * 100 : null, time: rm, day: rmDay, live, src }];
        } catch (e) { return [id, { name, error: String((e && e.message) || e).slice(0, 80) }]; }
      };
      const rows = await Promise.all(LIST.map(one));
      const items = {};
      rows.forEach(([id, v]) => { items[id] = v; });
      return new Response(JSON.stringify({ status: rows.some(([, v]) => !v.error) ? "ok" : "error", items, generatedAt: new Date().toISOString() }),
        { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=3" } });
    }
    if (url.pathname === "/api/world-indices") {
      // 機器人代碼 70／71（2026-10-17 使用者：照對方機器人「亞洲股市／美國股市」）：Yahoo Finance 公開圖表 API，每檔一個請求、Cloudflare 快取 2 分鐘
      const LIST = [
        ["asia", "^TWII", "台股加權"], ["asia", "^N225", "日經 225"], ["asia", "^KS11", "韓國綜合"], ["asia", "^HSI", "香港恒生"],
        ["asia", "000001.SS", "上證指數"], ["asia", "399001.SZ", "深證成指"], ["asia", "^STI", "新加坡海峽"], ["asia", "^AXJO", "澳洲 200"],
        ["us", "^DJI", "道瓊工業"], ["us", "^GSPC", "標普 500"], ["us", "^IXIC", "那斯達克"], ["us", "^SOX", "費城半導體"], ["us", "^VIX", "VIX 恐慌指數"],
        ["us", "YM=F", "道瓊期貨"], ["us", "NQ=F", "那斯達克期貨"], ["us", "ES=F", "標普期貨"],
      ];
      const one = async ([zone, sym, name]) => {
        try {
          const r = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(sym) + "?range=1d&interval=1d", {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", Accept: "application/json" },
            cf: { cacheTtl: 120, cacheEverything: true }
          });
          if (!r.ok) return { zone, sym, name, error: "HTTP " + r.status };
          const m = ((((await r.json()) || {}).chart || {}).result || [])[0];
          const meta = m && m.meta ? m.meta : {};
          const price = Number(meta.regularMarketPrice), prev = Number(meta.chartPreviousClose ?? meta.previousClose);
          if (!Number.isFinite(price)) return { zone, sym, name, error: "沒有報價" };
          const change = Number.isFinite(prev) && prev > 0 ? price - prev : null;
          return { zone, sym, name, price, change, changePct: change !== null ? (change / prev) * 100 : null,
            time: Number.isFinite(meta.regularMarketTime) ? new Date(meta.regularMarketTime * 1000).toISOString() : null };
        } catch (e) { return { zone, sym, name, error: String(e && e.message || e).slice(0, 80) }; }
      };
      const rows = await Promise.all(LIST.map(one));
      return new Response(JSON.stringify({ status: rows.some((x) => !x.error) ? "ok" : "error", rows, generatedAt: new Date().toISOString() }),
        { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=60" } });
    }
    if (url.pathname === "/api/daytrade") {
      // 隔日沖分點（機器人 81／811／813，2026-10-17 使用者）：GitHub 排程 daytrade-brokers 每天算好放 data 分支，這裡直接讀；?date= 指定哪天
      const RAW = "https://raw.githubusercontent.com/thunghan1228-maker/tw-groups/data/tpex/";
      const get = async (name, ttl) => { const r = await fetch(RAW + name, { cf: { cacheTtl: ttl, cacheEverything: true } }); return r.ok ? r.json() : null; };
      try {
        const index = await get("daytrade-index.json", 300);
        const dates = (index && index.dates) || [];
        const want = String(url.searchParams.get("date") || "");
        const day = dates.includes(want) ? want : dates[0];
        if (!day) return Response.json({ status: "empty", message: "隔日沖資料還沒算好" });
        const data = await get("daytrade/" + day + ".json", day === dates[0] ? 300 : 86400);
        return new Response(JSON.stringify({ status: data ? "ok" : "error", dates, day: data }),
          { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=120" } });
      } catch (e) { return Response.json({ status: "error", message: String(e && e.message || e).slice(0, 120) }, { status: 502 }); }
    }
    if (url.pathname === "/api/zco") {
      // 機器人 2359m／m1／m9：某檔某天前 15 名買超、前 15 名賣超分點（富邦證券主力進出公開頁），標出隔日沖分點（組合跟 scripts/daytrade_mirror.py 同一份）
      const DT = { "9268": "凱基-台北", "5850": "統一", "1560": "港商野村", "9600": "富邦證券", "9100": "群益金鼎", "9227": "凱基-城中",
        "0037003700390063": "國票-敦北法人", "003700370039005a": "國票-安和", "9200": "凱基", "9300": "華南永昌", "5854": "統一-城中",
        "9666": "富邦-南屯", "9692": "富邦-嘉義", "0039003600310043": "富邦-南京", "9676": "富邦-仁愛", "9812": "元大-台中",
        "9672": "富邦-員林", "9658": "富邦-建國" };
      const code = String(url.searchParams.get("code") || "").trim().toUpperCase();
      const date = String(url.searchParams.get("date") || "");
      if (!/^[0-9A-Z]{4,6}$/.test(code) || !/^\\d{4}-\\d{2}-\\d{2}$/.test(date)) return Response.json({ status: "error", message: "代號或日期不對" }, { status: 422 });
      const today = new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
      try {
        const r = await fetch("https://fubon-ebrokerdj.fbs.com.tw/z/zc/zco/zco.djhtm?a=" + code + "&e=" + date + "&f=" + date, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", "Accept-Language": "zh-TW,zh;q=0.9" },
          cf: { cacheTtl: date >= today ? 600 : 43200, cacheEverything: true }
        });
        if (!r.ok) return Response.json({ status: "error", message: "HTTP " + r.status }, { status: 502 });
        const buf = await r.arrayBuffer();
        let text, named = true;
        try { text = new TextDecoder("big5").decode(buf); } catch (_) { text = new TextDecoder("utf-8").decode(buf); named = false; }
        const re = /<a href="\\/z\\/zc\\/zco\\/zco0\\/zco0\\.djhtm\\?a=\\w+&b=(\\w+)&BHID=\\w+">([^<]+)<\\/a><\\/TD>\\s*<TD[^>]*>([\\d,]+)<\\/TD>\\s*<TD[^>]*>([\\d,]+)<\\/TD>\\s*<TD[^>]*>([\\d,]+)<\\/TD>\\s*<TD[^>]*>([\\d.]+)%<\\/TD>/g;
        const n = (x) => Number(String(x).replace(/,/g, ""));
        const buy = [], sell = [];
        let m, i = 0, vol = 0;
        while ((m = re.exec(text))) {
          const row = { b: m[1], name: DT[m[1]] || (named ? m[2].trim() : m[1]), buy: n(m[3]), sell: n(m[4]), net: n(m[5]), dt: !!DT[m[1]] };
          if (!vol && n(m[6]) > 0) vol = Math.round(row.net / (n(m[6]) / 100));
          (i++ % 2 === 0 ? buy : sell).push(row);
        }
        const upd = /最後更新日：\\s*(\\d{4})\\/(\\d{2})\\/(\\d{2})/.exec(text);
        return new Response(JSON.stringify({ status: buy.length || sell.length ? "ok" : "empty", code, date, vol, buy, sell,
          updated: upd ? upd[1] + "-" + upd[2] + "-" + upd[3] : null }),
          { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=300" } });
      } catch (e) { return Response.json({ status: "error", message: String(e && e.message || e).slice(0, 120) }, { status: 502 }); }
    }
    if (url.pathname === "/api/open-vol") {
      // 機器人 813（隔日沖必殺）：今天開盤第一分鐘的成交量（Yahoo 1 分 K 第一根），?syms=2359.TW,6533.TWO（最多 40 檔）
      const syms = String(url.searchParams.get("syms") || "").split(",").map((x) => x.trim().toUpperCase()).filter((x) => /^[0-9A-Z]{4,6}\\.(TW|TWO)$/.test(x)).slice(0, 40);
      const one = async (sym) => {
        try {
          const r = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + sym + "?range=1d&interval=1m", {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", Accept: "application/json" },
            cf: { cacheTtl: 120, cacheEverything: true }
          });
          if (!r.ok) return { sym, error: "HTTP " + r.status };
          const res = ((((await r.json()) || {}).chart || {}).result || [])[0] || {};
          const ts = res.timestamp || [], q = ((res.indicators || {}).quote || [])[0] || {};
          const k = (q.volume || []).findIndex((v) => Number.isFinite(v) && v > 0);
          if (k < 0) return { sym, error: "還沒有成交" };
          return { sym, time: new Date(ts[k] * 1000).toISOString(), vol: Math.round(q.volume[k] / 1000), open: q.open ? q.open[k] : null };
        } catch (e) { return { sym, error: String(e && e.message || e).slice(0, 80) }; }
      };
      const rows = await Promise.all(syms.map(one));
      return new Response(JSON.stringify({ status: "ok", rows }), { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=60" } });
    }
    if (url.pathname === "/api/ipo") {
      // 研究室「抽籤股」（2026-10-17 使用者：照「警示股與抽籤股整理」的抽籤股那段放研究室）：證交所公開申購公告＋現價算獲利空間；
      // 新上市櫃（初上市／初上櫃）還沒掛牌，用櫃買興櫃最後成交價，增資用 Yahoo 現價
      const UA = { "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)", Accept: "application/json" };
      const today = new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
      const recentCut = new Date(Date.now() + 8 * 3600e3 - 14 * 86400e3).toISOString().slice(0, 10);
      const iso = (roc) => { const m = /^(\\d{2,3})\\/(\\d{2})\\/(\\d{2})$/.exec(String(roc || "").trim()); return m ? (Number(m[1]) + 1911) + "-" + m[2] + "-" + m[3] : null; };
      const num = (v) => { const t = String(v ?? "").replace(/,/g, "").trim(); const x = Number(t); return t && Number.isFinite(x) ? x : null; };
      const KINDS = ["初上市", "初上櫃", "上市增資", "上櫃增資"];
      if (ipoMemo && Date.now() - ipoMemo.at < 600e3) return new Response(ipoMemo.body, { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=300" } });
      try {
        const r = await fetch("https://www.twse.com.tw/rwd/zh/announcement/publicForm?response=json", { headers: UA, cf: { cacheTtl: 1800, cacheEverything: true }, signal: AbortSignal.timeout(15000) });
        if (!r.ok) throw new Error("證交所 HTTP " + r.status);
        const j = await r.json();
        const f = (j.fields || []).map((x) => String(x).trim());
        const at = (d, name) => d[f.indexOf(name)];
        let rows = (j.data || []).map((d) => ({
          code: String(at(d, "證券代號") || "").trim(), name: String(at(d, "證券名稱") || "").trim(), kind: String(at(d, "發行市場") || "").trim(),
          draw: iso(at(d, "抽籤日期")), start: iso(at(d, "申購開始日")), end: iso(at(d, "申購結束日")),
          lots: Math.round((num(at(d, "承銷股數")) || 0) / 1000), price: num(at(d, "承銷價(元)")), actual: num(at(d, "實際承銷價(元)")),
          list: iso(at(d, "撥券日期(上市、上櫃日期)")), broker: String(at(d, "主辦券商") || "").trim(),
          qualified: num(at(d, "總合格件")), rate: num(at(d, "中籤率(%)")), cancel: String(at(d, "取消公開抽籤") || "").trim()
        })).filter((x) => /^\\d{4}$/.test(x.code) && KINDS.includes(x.kind) && ((x.end && x.end >= today) || (x.draw && x.draw >= recentCut)));
        const yahoo = async (sym) => {
          try {
            const y = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + sym + "?range=1d&interval=1d", { headers: UA, cf: { cacheTtl: 600, cacheEverything: true }, signal: AbortSignal.timeout(5000) });
            if (!y.ok) return null;
            const m = ((((await y.json()) || {}).chart || {}).result || [])[0];
            const p = m && m.meta ? Number(m.meta.regularMarketPrice) : NaN;
            return Number.isFinite(p) ? p : null;
          } catch (_) { return null; }
        };
        rows = await Promise.all(rows.map(async (x) => {
          let ref = null, refSrc = "";
          if (x.kind.startsWith("初")) {
            // 興櫃價：Yahoo 的 .TWO 跟櫃買興櫃最後成交價一樣（10/17 對過 8 檔），櫃買從 Cloudflare 抓要等 25 秒以上，改用 Yahoo
            ref = await yahoo(x.code + ".TWO");
            refSrc = ref ? "興櫃" : "";
          } else if ((x.draw || "") >= today) {
            ref = await yahoo(x.code + (x.kind === "上市增資" ? ".TW" : ".TWO"));
            refSrc = ref ? "收盤" : "";
          }
          const base = x.actual || x.price;
          return { ...x, ref, refSrc, profit: ref && base ? Math.round((ref - base) / base * 1000) / 10 : null };
        }));
        rows.sort((a, b) => (a.draw || "").localeCompare(b.draw || "") || a.code.localeCompare(b.code));
        const body = JSON.stringify({ status: "ok", today, rows, generatedAt: new Date().toISOString() });
        ipoMemo = { at: Date.now(), body };
        return new Response(body, { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=300" } });
      } catch (e) { return Response.json({ status: "error", message: String(e && e.message || e).slice(0, 120) }, { status: 502 }); }
    }
    if (url.pathname === "/api/river-hit") {
      // 估值河流圖每查一檔記一筆（本週查詢排行，2026-10-16 使用者）：/api/river 有快取，後端看不到每一次；不快取
      const code = String(url.searchParams.get("code") || "").trim().toUpperCase();
      if (!/^[0-9A-Z]{4,6}$/.test(code)) return Response.json({ status: "error" }, { status: 422 });
      return await proxyHanstockBars("/api/hub/river/hit?code=" + encodeURIComponent(code), 0);
    }
    if (url.pathname === "/api/river-top") {
      // 估值河流圖的本週查詢排行，1 分鐘快取
      return await proxyHanstockBars("/api/hub/river/top", 60);
    }
    if (url.pathname === "/api/river-ma10") {
      // 估值河流圖的「均線≥10 × 便宜區」清單，5 分鐘快取
      return await proxyHanstockBars("/api/hub/river/ma10" + url.search, 300);
    }
    if (url.pathname === "/api/etf-radar") {
      // 主動式ETF持股雷達（2026-10-10 使用者：照老師 zhuang.tw/etf 做，併進籌碼日報）：五檔合計、共同持有、資金潮汐；投信晚上公告後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/etf-radar" + url.search, 300);
    }
    if (url.pathname === "/api/etf-radar-fund") {
      // 主動式ETF持股雷達的單一檔：最新一日、近 5 日、連續同向、權重榜，5 分鐘快取
      return await proxyHanstockBars("/api/hub/etf-radar/fund" + url.search, 300);
    }
    if (url.pathname === "/api/etf-radar-stock") {
      // 個股 × 全部主動式 ETF 的進出紀錄，5 分鐘快取
      return await proxyHanstockBars("/api/hub/etf-radar/stock" + url.search, 300);
    }
    if (url.pathname === "/api/macro-calendar") {
      // 國際大事行事曆（2026-10-10 使用者：照老師 zhuang.tw/calendar 做，放進「研究室」）：後端每小時更新公布值，10 分鐘快取
      return await proxyHanstockBars("/api/hub/macro-calendar", 600);
    }
    if (url.pathname === "/api/fund-umbrella") {
      // 資金保護傘（2026-10-10 使用者，放進「研究室」）：融資水位＋加權／櫃買多空轉折，後端每天晚上更新，10 分鐘快取
      return await proxyHanstockBars("/api/hub/fund-umbrella", 600);
    }
    if (url.pathname === "/api/futures-chips") {
      // 外資空單（2026-10-15 使用者，放進「研究室」）：期交所三大法人期貨／選擇權未平倉、散戶多空比、P/C、三大法人現貨，後端每個交易日 15:40 更新，10 分鐘快取
      return await proxyHanstockBars("/api/hub/futures-chips", 600);
    }
    if (url.pathname === "/api/insider") {
      // 內部人研究室（2026-10-10 使用者，放進「研究室」）：觀測站內部人持股異動月報，每月更新一次，30 分鐘快取
      return await proxyHanstockBars("/api/hub/insider" + url.search, 1800);
    }
    if (url.pathname === "/api/insider-stock") {
      // 個股內部人逐月紀錄，30 分鐘快取
      return await proxyHanstockBars("/api/hub/insider/stock" + url.search, 1800);
    }
    if (url.pathname === "/api/watch-digest") {
      // 自選股一頁看完（2026-10-10 使用者）：內部人、下次法說、季報摘要；季報補抓中會帶 r= 時間戳避開快取
      return await proxyHanstockBars("/api/hub/watch-digest" + url.search, 120);
    }
    if (url.pathname === "/api/stock-profile") {
      // 個股研究補強（2026-10-10 使用者）：產業白話、同業、季報；季報一季才變一次，1 小時快取
      return await proxyHanstockBars("/api/hub/stock-profile" + url.search, 3600);
    }
    if (url.pathname === "/api/chip-weekly") {
      // 籌碼週報（2026-10-10 使用者：照老師雷達頁的「籌碼週報・可回看 4 週」做）：每週一份摘要，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar/weekly" + url.search, 300);
    }
    if (url.pathname === "/api/chip-radar-latest") {
      // 最新一週每檔籌碼%（2026-10-15 使用者：首頁族群成分股視窗加「本週籌碼%」），集保一週才更新一次，10 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar/latest", 600);
    }
    if (url.pathname === "/api/chip-radar-stock") {
      // 籌碼暴增雷達的個股查詢（九週軌跡、同族群、三大法人），60 秒快取
      return await proxyHanstockBars("/api/hub/chip-radar/stock" + url.search, 60);
    }
    if (url.pathname === "/api/picker") {
      // 創高黑選股（2026-10-04 使用者：照老師 App「創高黑」做）：模組參數帶給後端算，60 秒快取
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
    if (url.pathname === "/api/open-volume") {
      // 隔日沖必殺(813)（2026-10-19）：今天的開盤量＝後端 1 分K 第一根（09:00，永豐逐筆，含開盤集合競價），一次最多 45 檔。
      // 以前用 Yahoo 1 分K 第一根：沒算集合競價（友威科 146 對 662、大眾控 778 對 2056）、又慢約 20 分鐘，09:15 還顯示「沒開盤」
      const codes = [...new Set(String(url.searchParams.get("codes") || "").split(",").map((c) => c.trim().toUpperCase()).filter((c) => /^[0-9A-Z]{4,6}$/.test(c)))].slice(0, 45);
      const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=60" };
      const today = new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
      const rows = {};
      await Promise.all(codes.map(async (code) => {
        try {
          // 每檔最多等 8 秒，慢的略過（一檔卡住不要拖住整批）
          const r = await Promise.race([proxyHanstockBars("/api/hub/bars1m/" + encodeURIComponent(code), 120), new Promise((resolve) => setTimeout(() => resolve(null), 8000))]);
          if (!r || !r.ok) return;
          const first = (((await r.json()) || {}).bars || [])[0];
          if (!first) return;
          const tw = new Date(Number(first.ts) + 8 * 3600e3).toISOString();
          if (tw.slice(0, 10) === today && tw.slice(11, 16) === "09:00") rows[code] = { vol: Math.round(Number(first.volume) || 0) };
        } catch (e) { /* 這檔先略過 */ }
      }));
      return new Response(JSON.stringify({ rows, date: today }), { headers });
    }
    if (url.pathname === "/api/open-quotes") {
      // 隔日沖黑龍(80)、股期黑龍(75)（2026-10-19）：要開盤價判斷今天收黑（現價 < 開盤）。首頁 /api/groups 的族群股沒有開盤價，
      // 名單裡還有不在族群裡的股票；這裡只問 HanStock 後端報價中心（各處共用快取，不直接打證交所），一次最多 200 檔
      const codes = [...new Set(String(url.searchParams.get("codes") || "").split(",").map((c) => c.trim().toUpperCase()).filter((c) => /^[0-9A-Z]{4,6}$/.test(c)))].slice(0, 200);
      const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" };
      if (!codes.length) return new Response(JSON.stringify({ quotes: {} }), { headers });
      try {
        const quotes = await fetchQuotesFromBackend(codes, 8000);
        const out = {};
        for (const code of codes) {
          const q = quotes[code];
          if (q && Number.isFinite(q.price)) out[code] = { name: q.name || null, price: q.price, open: Number.isFinite(q.open) ? q.open : null, prevClose: Number.isFinite(q.prevClose) ? q.prevClose : null, changePercent: q.changePercent };
        }
        return new Response(JSON.stringify({ quotes: out, quoteDate: quotes.__meta.quoteDate, quoteTime: quotes.__meta.quoteTime }), { headers });
      } catch (e) {
        return new Response(JSON.stringify({ error: "報價中心抓不到（" + String(e && e.message || e).slice(0, 40) + "）" }), { status: 502, headers });
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
    if (url.pathname === "/api/move-news") {
      // 個股問診「今天在漲／跌什麼」的新聞（2026-10-12 使用者）
      const code = String(url.searchParams.get("code") || "").trim().toUpperCase();
      const name = String(url.searchParams.get("name") || "").trim().slice(0, 20);
      const headers = { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" };
      if (!/^[0-9A-Z]{4,6}$/.test(code)) return new Response(JSON.stringify({ status: "error", error: "代號不對" }), { status: 400, headers });
      try {
        return new Response(JSON.stringify(await fetchMoveNews(code, name)), { headers });
      } catch (e) {
        return new Response(JSON.stringify({ status: "error", error: String((e && e.message) || e) }), { status: 502, headers });
      }
    }
    if (url.pathname === "/api/checkup") {
      // 每日持股健診（2026-09-28 使用者）：股號清單帶給後端，60 秒快取
      return await proxyHanstockBars("/api/hub/checkup" + url.search, 60);
    }
    if (url.pathname === "/api/dragon123") {
      // 123 黑龍戰法（2026-10-12 使用者）：K線圖日線標進場點，後端每天收盤後才會變，快取 5 分鐘
      return await proxyHanstockBars("/api/hub/dragon123" + url.search, 300);
    }
    if (url.pathname === "/api/diag") {
      // 個股問診（2026-09-28 使用者）：股號帶給後端，60 秒快取
      return await proxyHanstockBars("/api/hub/diag" + url.search, 60);
    }
    if (url.pathname === "/api/margin-call") {
      // 融資斷頭線名單（2026-10-23 使用者貼老師「斷頭線就在腳下」）：後端每天收盤後才會變，快取 1 分鐘
      return await proxyHanstockBars("/api/hub/margin-call" + url.search, 60);
    }
    if (url.pathname === "/api/patterns") {
      // 形態選股（2026-10-23 使用者：VCP 收斂、C 不破 A 的低、W 底、頭肩底）：日K算的，收盤後才變，快取 5 分鐘
      return await proxyHanstockBars("/api/hub/patterns" + url.search, 300);
    }
    if (url.pathname === "/api/margin-history") {
      // 單檔融資餘額每日序列（2026-10-23 使用者：K線圖融資副圖：每天增減、累計、使用率），每天晚上才更新，快取 5 分鐘
      return await proxyHanstockBars("/api/hub/margin-history" + url.search, 300);
    }
    if (url.pathname === "/api/margin-line") {
      // 單檔斷頭價 A／B（2026-10-23 使用者：K線圖日線畫線、5 分K 離線近才畫），每天收盤後才會變，快取 5 分鐘
      return await proxyHanstockBars("/api/hub/margin-line" + url.search, 300);
    }
    if (url.pathname === "/api/inst-rank") {
      // 研究室「外資買賣超」「投信買賣超」（2026-11-05 使用者）：全市場一般股票的外資、投信買賣超（張）；沒指定日期＝最新一天（收盤後上櫃常晚進來，快取 1 分鐘），往日不會再變，快取 5 分鐘
      return await proxyHanstockBars("/api/hub/inst-rank" + url.search, url.searchParams.get("date") ? 300 : 60);
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
    if (url.pathname.indexOf("/api/idx-bars/") === 0) {
      // 2026-10-29 使用者：加權指數、櫃買指數各點開 K 線圖（日線、5 分、1 分），即時行情；沒有即時就停在最後交易日收盤。
      // 加權：Yahoo ^TWII（日、5 分、1 分都有，盤中即時）；櫃買：5 分、1 分用後端櫃買 Hub（Shioaji，含前幾天），日線用 FinMind TPEx 日K＋今天用 Hub 的 5 分K 組一根。
      // 輸出格式跟個股 K 線圖用的 /api/bars* 一樣：{ status, bars: [{ ts, open, high, low, close, volume }] }（日線 ts 是 YYYY-MM-DDT00:00:00+00:00）
      const idxId = url.pathname.slice("/api/idx-bars/".length);
      const tf = url.searchParams.get("tf") || "5m";
      try {
        // 2026-11-05 使用者：右上角加日經 225、韓國 KOSPI、道瓊、那斯達克、費城半導體，點開也要有 K 線圖（日線、5 分、1 分）→ 都用 Yahoo（跟加權一樣的格式）
        const WORLD_IDX = { n225: "^N225", kospi: "^KS11", dji: "^DJI", ixic: "^IXIC", sox: "^SOX", tsm: "TSM", hsi: "^HSI", tnx: "^TNX" };   // tnx＝美國 10 年期公債殖利率（%）
        const FUT_NAVER = idxId === "futks";   // 韓國 KOSPI 200 期貨（Naver）
        const FUT_BAR = idxId.indexOf("fut") === 0 ? FUT_SINA[idxId.slice(3)] : null;   // futym／futnq／futnk／futhsi：期貨 K 線（新浪）   // tsm＝台積電在美國掛牌的 ADR（紐約證交所 TSM，1 ADR＝5 股）
        if ((idxId !== "taiex" && idxId !== "otc" && idxId !== "txf" && !WORLD_IDX[idxId] && !FUT_BAR && !FUT_NAVER) || (tf !== "1d" && tf !== "5m" && tf !== "1m")) return Response.json({ status: "error", error: "不支援的指數或週期" }, { status: 400 });
        const taipeiDay = (sec) => new Date((sec + 8 * 3600) * 1000).toISOString().slice(0, 10);
        const okBar = (b) => b && Number.isFinite(b.open) && Number.isFinite(b.high) && Number.isFinite(b.low) && Number.isFinite(b.close);
        const r2 = (v) => Math.round(v * 100) / 100;
        const upstreamJson = async (u, ttl) => {
          const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0", accept: "application/json" }, cf: { cacheTtlByStatus: { "200-299": ttl, "300-599": 0 }, cacheEverything: true } });
          if (!r.ok) throw new Error(u.slice(8, 40) + " HTTP " + r.status);
          return r.json();
        };
        let bars = [];
        if (idxId === "taiex") {
          const spec = tf === "1d" ? "interval=1d&range=1y" : tf === "5m" ? "interval=5m&range=1mo" : "interval=1m&range=5d";
          const y = await upstreamJson("https://query1.finance.yahoo.com/v8/finance/chart/%5ETWII?" + spec, tf === "1d" ? 30 : 15);
          const r0 = y && y.chart && y.chart.result && y.chart.result[0];
          if (!r0) throw new Error("Yahoo 沒有 ^TWII 資料");
          const q = (r0.indicators && r0.indicators.quote && r0.indicators.quote[0]) || {};
          const stamps = r0.timestamp || [];
          for (let i = 0; i < stamps.length; i++) {
            const b = { open: q.open && q.open[i], high: q.high && q.high[i], low: q.low && q.low[i], close: q.close && q.close[i] };
            if (!okBar(b)) continue;
            const bar = { ts: tf === "1d" ? taipeiDay(stamps[i]) + "T00:00:00+00:00" : stamps[i] * 1000, open: r2(b.open), high: r2(b.high), low: r2(b.low), close: r2(b.close), volume: (q.volume && q.volume[i]) || 0 };
            // 13:30 收盤集合競價那根（Yahoo 單獨一根平的）併進前一根：5 分K 最後一根 13:25～13:30 的收盤＝官方收盤，不多出一根
            const minOfDay = (Math.floor(stamps[i] / 60) + 480) % 1440;
            const prev = bars[bars.length - 1];
            if (tf !== "1d" && minOfDay >= 13 * 60 + 30 && prev && typeof prev.ts === "number" && taipeiDay(prev.ts / 1000) === taipeiDay(stamps[i])) {
              prev.high = Math.max(prev.high, bar.high); prev.low = Math.min(prev.low, bar.low); prev.close = bar.close;
              continue;
            }
            bars.push(bar);
          }
          // 2026-10-30 使用者：加權指數沒有及時更新。國際版 Yahoo 的分K慢約 20 分鐘，今天這一天的 K 棒改用台灣版 Yahoo 的 1 分K（跟盤；時間標籤是「那根的結束時間」，減 60 秒才是開始）蓋掉，5 分K 由 1 分K 合併；抓不到就維持國際版
          if (tf !== "1d") {
            try {
              const tw = await upstreamJson("https://tw.stock.yahoo.com/_td-stock/api/resource/FinanceChartService.ApacLibraCharts;symbols=%5B%22%5ETWII%22%5D;type=tick", 8);
              const c0 = tw && tw[0] && tw[0].chart;
              const tq = c0 && c0.indicators && c0.indicators.quote && c0.indicators.quote[0];
              const tst = (c0 && c0.timestamp) || [];
              if (tq && tst.length) {
                const step = tf === "5m" ? 300 : 60, merged = [];
                let twDay = null;
                for (let i = 0; i < tst.length; i++) {
                  const b = { open: tq.open && tq.open[i], high: tq.high && tq.high[i], low: tq.low && tq.low[i], close: tq.close && tq.close[i] };
                  if (!okBar(b)) continue;
                  let start = tst[i] - 60;
                  if ((Math.floor(start / 60) + 480) % 1440 >= 13 * 60 + 30) start -= 60;   // 13:30 收盤集合競價併進前一根
                  twDay = taipeiDay(start);
                  const key = Math.floor(start / step) * step * 1000;
                  const last = merged[merged.length - 1];
                  if (last && last.ts === key) { last.high = Math.max(last.high, b.high); last.low = Math.min(last.low, b.low); last.close = b.close; }
                  else merged.push({ ts: key, open: b.open, high: b.high, low: b.low, close: b.close, volume: 0 });
                }
                if (merged.length && twDay) {
                  bars = bars.filter((x) => !(typeof x.ts === "number" && taipeiDay(x.ts / 1000) === twDay));
                  merged.forEach((x) => bars.push({ ts: x.ts, open: r2(x.open), high: r2(x.high), low: r2(x.low), close: r2(x.close), volume: 0 }));
                  bars.sort((x, y) => x.ts - y.ts);
                }
              }
            } catch (twErr) { /* 台灣版抓不到就用國際版 */ }
          }
        } else if (FUT_NAVER) {
          bars = await naverKospiFutBars(tf);
          const nq = await naverKospiFut();
          if (nq && bars.length) {
            if (tf !== "1d") bars.forEach((b) => { if (b.ts > Date.now() - 24 * 3600000) b.ref = nq.prev; });
            else { const last = bars[bars.length - 1]; if (String(last.ts).slice(0, 10) === nq.date) last.ref = nq.prev; }
          }
        } else if (FUT_BAR) {
          // 期貨 K 線：新浪 1 分／5 分／日線（幾乎即時，最後一根就是正在走的）；新浪日線沒有的（日經）改用 Yahoo 的 NKD=F 日線。近 20 小時內的 K 棒帶 ref＝昨結算價，K 線圖標題的漲跌拿它算
          const fid = idxId.slice(3);
          try { bars = await sinaFutBars(FUT_BAR, tf); } catch (eS) { bars = []; }
          if (!bars.length && tf === "1d" && FUT_YAHOO[fid]) {
            const y = await upstreamJson("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(FUT_YAHOO[fid]) + "?interval=1d&range=1y", 30);
            const r0 = y && y.chart && y.chart.result && y.chart.result[0], q = (r0 && r0.indicators && r0.indicators.quote && r0.indicators.quote[0]) || {}, st = (r0 && r0.timestamp) || [];
            for (let i = 0; i < st.length; i++) { const b = { open: q.open && q.open[i], high: q.high && q.high[i], low: q.low && q.low[i], close: q.close && q.close[i] }; if (okBar(b)) bars.push({ ts: taipeiDay(st[i]) + "T00:00:00+00:00", open: r2(b.open), high: r2(b.high), low: r2(b.low), close: r2(b.close), volume: (q.volume && q.volume[i]) || 0, closeTime: "收盤" }); }
          }
          if (bars.length) {
            const qf = (await sinaFutQuotes())[fid];
            if (qf && tf !== "1d" && qf.prev) bars.forEach((b) => { if (b.ts > Date.now() - 20 * 3600000) b.ref = qf.prev; });
            if (qf && tf === "1d") {   // 日線最後一根（目前交易日）的開高低收換成即時報價的：新浪日經日線的開盤價不準
              const last = bars[bars.length - 1];
              if (Math.abs(last.close - qf.price) / qf.price < 0.03 && Number.isFinite(qf.open) && qf.open > 0 && Number.isFinite(qf.high) && qf.high > 0 && Number.isFinite(qf.low) && qf.low > 0) { last.open = qf.open; last.high = Math.max(qf.high, qf.price); last.low = Math.min(qf.low, qf.price); last.close = qf.price; if (qf.prev) last.ref = qf.prev; }
            }
          }
        } else if (WORLD_IDX[idxId]) {
          // 日經／韓國／道瓊／那斯達克／費半：Yahoo 公開圖表 API，日線一年、5 分 1 個月、1 分 5 天（沒有台股那套 13:30 集合競價併根、台灣版 Yahoo 覆蓋）。
          // 日線的 ts 用「台北時間的日期」：亞股、美股的日K開始時間換成台北都還在同一個日曆日
          const spec = tf === "1d" ? "interval=1d&range=1y" : tf === "5m" ? "interval=5m&range=1mo" : "interval=1m&range=5d";
          const y = await upstreamJson("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(WORLD_IDX[idxId]) + "?" + spec, tf === "1d" ? 30 : 5);
          const r0 = y && y.chart && y.chart.result && y.chart.result[0];
          if (!r0) throw new Error("Yahoo 沒有 " + WORLD_IDX[idxId] + " 資料");
          const q = (r0.indicators && r0.indicators.quote && r0.indicators.quote[0]) || {};
          const stamps = r0.timestamp || [];
          for (let i = 0; i < stamps.length; i++) {
            const b = { open: q.open && q.open[i], high: q.high && q.high[i], low: q.low && q.low[i], close: q.close && q.close[i] };
            if (!okBar(b)) continue;
            const nb = { ts: tf === "1d" ? taipeiDay(stamps[i]) + "T00:00:00+00:00" : stamps[i] * 1000, open: r2(b.open), high: r2(b.high), low: r2(b.low), close: r2(b.close), volume: (q.volume && q.volume[i]) || 0 };
            if (tf === "1d") nb.closeTime = "收盤";   // 日K 資訊列寫「2026/11/5 收盤」，不要套台股的 13:30
            bars.push(nb);   // 每天最後那根平的（收盤集合競價的官方收盤價）要留著，不然圖上的收盤跟官方差一截（韓國 5341 對 5383.8）
          }
          // 2026-11-05 使用者：要即時行情。分K 再問一次台灣版 Yahoo 的 1 分K（最近一個交易日），它的最後一根比國際版新的話，從它第一根開始換成台灣版的（5 分K 由 1 分K 合併）
          if (tf !== "1d" && bars.length) {
            try {
              const tw = await upstreamJson("https://tw.stock.yahoo.com/_td-stock/api/resource/FinanceChartService.ApacLibraCharts;symbols=" + encodeURIComponent(JSON.stringify([WORLD_IDX[idxId]])) + ";type=tick", 5);
              const c0 = tw && tw[0] && tw[0].chart, tq = c0 && c0.indicators && c0.indicators.quote && c0.indicators.quote[0], tst = (c0 && c0.timestamp) || [];
              if (tq && tst.length) {
                const step = tf === "5m" ? 300000 : 60000, merged = [];
                for (let i = 0; i < tst.length; i++) {
                  const b = { open: tq.open && tq.open[i], high: tq.high && tq.high[i], low: tq.low && tq.low[i], close: tq.close && tq.close[i] };
                  if (!okBar(b)) continue;
                  const key = Math.floor(tst[i] * 1000 / step) * step, last = merged[merged.length - 1], vol = Number(tq.volume && tq.volume[i]) || 0;
                  if (last && last.ts === key) { last.high = Math.max(last.high, b.high); last.low = Math.min(last.low, b.low); last.close = b.close; last.volume += vol; }
                  else merged.push({ ts: key, open: b.open, high: b.high, low: b.low, close: b.close, volume: vol });
                }
                if (merged.length && merged[merged.length - 1].ts > bars[bars.length - 1].ts) {
                  const first = merged[0].ts;
                  bars = bars.filter((x) => x.ts < first).concat(merged.map((x) => ({ ts: x.ts, open: r2(x.open), high: r2(x.high), low: r2(x.low), close: r2(x.close), volume: x.volume })));
                }
              }
            } catch (twErr) { /* 台灣版抓不到就用國際版 */ }
          }
          // 美債 10 年期：Yahoo ^TNX 只有芝加哥選擇權交易所時段的分K；日經／韓國／恒生：Yahoo 分K 慢約 15 分鐘。
          // 把 Worker 自己每 10 秒記錄的 1 分K（Durable Object）接在 Yahoo 最後一根後面
          if (REC_SYMS.indexOf(idxId) >= 0 && tf !== "1d") {
            const rec = (await recorderBars(env, idxId)).filter((b) => recInSession(idxId, b.ts));   // 收盤後記下的平 K 棒不要
            if (rec.length) {
              const step = tf === "5m" ? 300000 : 60000, bucket = new Map();
              for (const b of rec) {
                const k = Math.floor(b.ts / step) * step, g = bucket.get(k);
                if (!g) bucket.set(k, { ts: k, open: b.open, high: b.high, low: b.low, close: b.close, volume: 0 });
                else { g.high = Math.max(g.high, b.high); g.low = Math.min(g.low, b.low); g.close = b.close; }
              }
              const lastY = bars.length ? bars[bars.length - 1].ts : 0;
              const add = Array.from(bucket.values()).sort((x, y) => x.ts - y.ts).filter((b) => b.ts > lastY).map((b) => ({ ts: b.ts, open: r2(b.open), high: r2(b.high), low: r2(b.low), close: r2(b.close), volume: 0 }));
              bars = bars.concat(add);
            }
          }
          // TradingView 即時價（2 分鐘內有更新才算盤中）：分K 最後一根的收盤／高低換成它，過了這根的時間就接一根新的；日線今天那根的開高低收換成它的
          try {
            const tv = (await tvQuotes())[idxId];
            if (tv && Number.isFinite(tv.price) && bars.length && Date.now() / 1000 - tv.time < 120 && (tf === "1d" || recInSession(idxId, Date.now()))) {
              const p = r2(tv.price), last = bars[bars.length - 1];
              if (tf === "1d") {
                const lastDay = String(last.ts).slice(0, 10), day = tvExDay(tv.time, idxId);
                if (day === lastDay) { last.close = p; if (Number.isFinite(tv.high)) last.high = r2(tv.high); if (Number.isFinite(tv.low)) last.low = r2(tv.low); if (Number.isFinite(tv.open)) last.open = r2(tv.open); }
                else if (day > lastDay) bars.push({ ts: day + "T00:00:00+00:00", open: r2(Number.isFinite(tv.open) ? tv.open : p), high: r2(Number.isFinite(tv.high) ? tv.high : p), low: r2(Number.isFinite(tv.low) ? tv.low : p), close: p, volume: 0, closeTime: "收盤" });
              } else {
                const step = tf === "5m" ? 300 : 60, bk = Math.floor(tv.time / step) * step * 1000;
                if (bk === last.ts) { last.close = p; last.high = Math.max(last.high, p); last.low = Math.min(last.low, p); }
                else if (bk > last.ts && bk - last.ts <= step * 6000) bars.push({ ts: bk, open: last.close, high: Math.max(last.close, p), low: Math.min(last.close, p), close: p, volume: 0 });
              }
            }
          } catch (tvErr) { /* 抓不到就維持 Yahoo 的 */ }
        } else if (idxId === "txf") {
          // 台指期近月（2026-10-29 使用者）：近月合約自己會換（期交所 getQuoteList 的第一檔月合約，到期日收盤後下個月就變近月）。
          // 1 分K／5 分K＝今天日盤（08:45～13:45，沒開盤就是最後一個交易日）：期交所只給當天；日線＝期交所官方每日行情的日盤（一般交易時段）近月，今天還沒進官方資料就用即時報價補一根
          // 期交所抓不到（Worker 被擋 520、後端代打也失敗）就改用台灣版 Yahoo 的台指期近月：報價、夜盤＋日盤的 1 分K
          let yTx = null, near = null;
          try { near = await txfNearQuote(); } catch (e0) {
            yTx = await txfYahooTw();
            const tyd = new Date((yTx.sec + 8 * 3600) * 1000).toISOString().slice(0, 10).split("-").join("");
            const dayBars = yTx.bars.filter((x) => { const mm = (Math.floor(x.ts / 60000) + 480) % 1440; return mm >= 8 * 60 + 45 && mm < 13 * 60 + 45; });
            near = { CDate: tyd, COpenPrice: dayBars.length ? dayBars[0].open : null, CHighPrice: dayBars.length ? Math.max.apply(null, dayBars.map((x) => x.high)) : null, CLowPrice: dayBars.length ? Math.min.apply(null, dayBars.map((x) => x.low)) : null, CLastPrice: yTx.price, CTotalVolume: yTx.volume, CRefPrice: yTx.ref };
          }
          const num = (v) => { const n = Number(String(v == null ? "" : v).replace(/,/g, "")); return Number.isFinite(n) && String(v).trim() !== "" ? n : null; };
          const qd = String(near.CDate || "");
          const qDay = qd.slice(0, 4) + "-" + qd.slice(4, 6) + "-" + qd.slice(6, 8);
          // 2026-11-05 使用者：台指期近月 5 分K 變示範資料。getQuoteList 有後端代打、getChartData1M 沒有，期交所對 Worker 一直回 520 →
          // 抓分K 失敗（報價成功也一樣）就改用台灣版 Yahoo 的台指期近月 1 分K（跟期交所沒資料時同一條路）
          let chartJ = null;
          if (!yTx && (tf === "1m" || tf === "5m")) {
            try { chartJ = await txfMis("getChartData1M", { SymbolID: near.SymbolID, CID: "TXF", MarketType: "0", SymbolType: "F", KindID: "1" }, 8000); } catch (eC) { yTx = await txfYahooTw(); }
          }
          if (yTx && (tf === "1m" || tf === "5m")) {
            if (tf === "1m") bars = yTx.bars;
            else {
              const bucket5 = new Map();
              for (const b of yTx.bars) {
                const k = Math.floor(b.ts / 300000), g = bucket5.get(k);
                if (!g) bucket5.set(k, { ts: k * 300000, open: b.open, high: b.high, low: b.low, close: b.close, volume: b.volume, ref: b.ref });
                else { g.high = Math.max(g.high, b.high); g.low = Math.min(g.low, b.low); g.close = b.close; g.volume += b.volume; }
              }
              bars = Array.from(bucket5.keys()).sort((x, y) => x - y).map((k) => bucket5.get(k));
            }
          } else if (tf === "1m" || tf === "5m") {
            // 日盤（08:45～13:45）＋夜盤（15:00～隔天 05:00）接在一起，照時間排；期交所只給「最近一個」日盤、「最近一個」夜盤
            // （夜盤開著時：今天日盤＋今晚到現在；隔天早上 08:45 前：昨天日盤＋昨晚整個夜盤；08:45 後：今天日盤＋昨晚夜盤）。
            // 每根 K 棒帶 ref＝昨結算價（日盤＝日盤的參考價，夜盤＝夜盤的參考價＝當天日盤結算價），K 線圖標題的漲跌用它算（使用者 2026-10-29）
            const ticksToBars = (rt, dateOf) => {
              const out = [];
              for (const t of (rt.Ticks || [])) {
                const hh = Number(String(t[0]).slice(0, 2)), mm = Number(String(t[0]).slice(2, 4));
                const b = { open: num(t[1]), high: num(t[2]), low: num(t[3]), close: num(t[4]), volume: num(t[5]) || 0 };
                const base = dateOf(hh, mm);
                if (!okBar(b) || !base || !Number.isFinite(hh)) continue;
                // Ticks 的時間是那根 1 分K 的收盤時間（084600＝08:45～08:46），K 棒時間（ts）用開始時間，跟個股一樣
                b.ts = base + (hh * 60 + mm) * 60000 - 8 * 3600000 - 60000;
                out.push(b);
              }
              return out;
            };
            const cj = chartJ;
            const rt = (cj && cj.RtData) || {};
            const cd = String((rt.Quote && rt.Quote.CDate) || near.CDate || "");
            const dayBase = Date.UTC(Number(cd.slice(0, 4)), Number(cd.slice(4, 6)) - 1, Number(cd.slice(6, 8)));
            const dayRef = num(rt.Quote && rt.Quote.CRefPrice) !== null ? num(rt.Quote.CRefPrice) : num(near.CRefPrice);
            const dayBars = ticksToBars(rt, () => (Number.isFinite(dayBase) ? dayBase : null)).map((b) => Object.assign(b, { ref: dayRef }));
            let nightBars = [];
            try {
              const nj = await txfMis("getChartData1M", { SymbolID: near.SymbolID.replace("-F", "-M"), CID: "TXF", MarketType: "1", SymbolType: "F", KindID: "1" }, 8000);
              const nrt = (nj && nj.RtData) || {};
              // 夜盤 15:00 開始、隔天 05:00 結束：Ticks 只有時間沒有日期，開始那天用現在的台北時間推（15:00 以前＝前一個晚上開始的；週末往前找到星期五），
              // 15:00 以後的 K 棒算開始那天、凌晨的算隔天
              const nowT = new Date(Date.now() + 8 * 3600000);
              let sd = new Date(Date.UTC(nowT.getUTCFullYear(), nowT.getUTCMonth(), nowT.getUTCDate()));
              if (nowT.getUTCHours() * 60 + nowT.getUTCMinutes() < 15 * 60) sd = new Date(sd.getTime() - 86400000);
              while (sd.getUTCDay() === 0 || sd.getUTCDay() === 6) sd = new Date(sd.getTime() - 86400000);
              const nightRef = num(nrt.Quote && nrt.Quote.CRefPrice);
              nightBars = ticksToBars(nrt, (hh) => (hh >= 15 ? sd.getTime() : sd.getTime() + 86400000)).map((b) => Object.assign(b, { ref: nightRef }));
              const lastN = nightBars.length ? nightBars[nightBars.length - 1].ts : 0;
              if (lastN > Date.now() + 120000 || (lastN && Date.now() - lastN > 30 * 3600000)) nightBars = [];   // 日期推錯（還沒開始的新夜盤、或太舊）就不放
            } catch (e) { nightBars = []; }
            const m1 = dayBars.concat(nightBars).sort((a, c) => a.ts - c.ts);
            if (tf === "1m") bars = m1;
            else {
              const bucket = new Map();
              for (const b of m1) {
                const k = Math.floor(b.ts / 300000);   // 台北時間跟 UTC 差整數小時，5 分鐘的邊界一樣（日盤 08:45、夜盤 15:00 都對得上）
                const g = bucket.get(k);
                if (!g) bucket.set(k, { ts: k * 300000, open: b.open, high: b.high, low: b.low, close: b.close, volume: b.volume, ref: b.ref });
                else { g.high = Math.max(g.high, b.high); g.low = Math.min(g.low, b.low); g.close = b.close; g.volume += b.volume; }
              }
              bars = Array.from(bucket.keys()).sort((a, c) => a - c).map((k) => bucket.get(k));
            }
          } else {
            // 期交所官方每日行情（CSV、Big5，一次最多查一個月）：每天的「一般」（日盤）列裡，到期月份最小的那一檔＝近月
            const cache = (globalThis.__txfDaily = globalThis.__txfDaily || {});
            const today = new Date(Date.now() + 8 * 3600000);
            const months = [];
            for (let i = 0; i < 6; i++) {
              const first = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, 1));
              const last = i === 0 ? today : new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0));
              const f = (d) => d.getUTCFullYear() + "/" + String(d.getUTCMonth() + 1).padStart(2, "0") + "/" + String(d.getUTCDate()).padStart(2, "0");
              months.push({ key: first.getUTCFullYear() + "-" + (first.getUTCMonth() + 1), start: f(first), end: f(last), current: i === 0 });
            }
            const fetchMonth = async (m) => {
              const hit = cache[m.key];
              if (hit && Date.now() - hit.at < (m.current ? 300000 : 6 * 3600000)) return hit.rows;
              const r = await fetch("https://www.taifex.com.tw/cht/3/futDataDown", {
                method: "POST",
                headers: { "content-type": "application/x-www-form-urlencoded", referer: "https://www.taifex.com.tw/cht/3/dlFutDailyMarketView", "user-agent": "Mozilla/5.0" },
                body: "down_type=1&commodity_id=TX&commodity_id2=&queryStartDate=" + encodeURIComponent(m.start) + "&queryEndDate=" + encodeURIComponent(m.end)
              });
              if (!r.ok) throw new Error("期交所每日行情 HTTP " + r.status);
              const text = new TextDecoder("big5").decode(await r.arrayBuffer());
              const rows = [];
              for (const line of text.split(String.fromCharCode(10))) {
                const c = line.split(",");
                if (c.length < 10 || !/^[0-9]{4}[/][0-9]{2}[/][0-9]{2}$/.test(c[0])) continue;
                const month = String(c[2]).trim();
                if (!/^[0-9]{6}$/.test(month) || String(c[17]).trim() !== "一般") continue;
                const b = { open: num(c[3]), high: num(c[4]), low: num(c[5]), close: num(c[6]) };
                if (!okBar(b)) continue;
                rows.push({ day: c[0].replace(/[/]/g, "-"), month, open: b.open, high: b.high, low: b.low, close: b.close, volume: num(c[9]) || 0 });
              }
              cache[m.key] = { at: Date.now(), rows };
              return rows;
            };
            const results = await Promise.all(months.map((m) => fetchMonth(m).catch(() => fetchMonth(m)).catch(() => [])));   // 期交所偶爾單月失敗，重試一次
            const nearOf = new Map();
            for (const row of [].concat.apply([], results)) {
              const cur = nearOf.get(row.day);
              if (!cur || row.month < cur.month) nearOf.set(row.day, row);
            }
            bars = Array.from(nearOf.keys()).sort().map((d) => { const r = nearOf.get(d); return { ts: d + "T00:00:00+00:00", open: r.open, high: r.high, low: r.low, close: r.close, volume: r.volume }; });
            // 官方資料收盤後才有：今天還沒進來就用即時報價補今天這一根（日盤開高低現價、累計量）
            const lastDay = bars.length ? bars[bars.length - 1].ts.slice(0, 10) : "";
            const todayBar = { open: num(near.COpenPrice), high: num(near.CHighPrice), low: num(near.CLowPrice), close: num(near.CLastPrice) };
            if (qDay > lastDay && okBar(todayBar)) bars.push({ ts: qDay + "T00:00:00+00:00", open: todayBar.open, high: todayBar.high, low: todayBar.low, close: todayBar.close, volume: num(near.CTotalVolume) || 0 });
            // 日線標題的漲跌：最後一根（今天）用即時報價的昨結算價，前面的日子用前一根收盤；日K 的收盤時間是 13:45
            bars.forEach((b) => { b.closeTime = "13:45"; });
            if (bars.length && bars[bars.length - 1].ts.slice(0, 10) === qDay && num(near.CRefPrice) !== null) bars[bars.length - 1].ref = num(near.CRefPrice);
          }
        } else {
          const hub = "https://hanstock-production-b872.up.railway.app/api/hub/index/otc/";
          if (tf === "5m" || tf === "1m") {
            const d = await upstreamJson(hub + (tf === "5m" ? "bars?include_current=true" : "bars1m?include_current=true"), 10);
            bars = (d.bars || []).filter(okBar).map((b) => ({ ts: Number(b.ts), open: b.open, high: b.high, low: b.low, close: b.close, volume: b.volume || 0 }));
          } else {
            const since = new Date(Date.now() + 8 * 3600000 - 400 * 86400000).toISOString().slice(0, 10);
            const f = await upstreamJson("https://api.finmindtrade.com/api/v4/data?dataset=TaiwanStockPrice&data_id=TPEx&start_date=" + since, 120);
            for (const row of (f && f.data) || []) {
              const b = { open: Number(row.open), high: Number(row.max), low: Number(row.min), close: Number(row.close) };
              if (okBar(b)) bars.push({ ts: String(row.date) + "T00:00:00+00:00", open: b.open, high: b.high, low: b.low, close: b.close, volume: Math.round((Number(row.Trading_Volume) || 0) / 1000) });
            }
            // 今天還沒有 FinMind 日K（晚上才有）：用櫃買 Hub 的 5 分K 組今天這根
            try {
              const d5 = await upstreamJson(hub + "bars?include_current=true", 10);
              const m5 = (d5.bars || []).filter(okBar);
              const lastDay = bars.length ? bars[bars.length - 1].ts.slice(0, 10) : "";
              const byDay = {};
              for (const b of m5) { const k = taipeiDay(Number(b.ts) / 1000); (byDay[k] = byDay[k] || []).push(b); }
              const days = Object.keys(byDay).sort();
              const lastM5Day = days[days.length - 1];
              if (lastM5Day && lastM5Day > lastDay) {
                const g = byDay[lastM5Day];
                bars.push({ ts: lastM5Day + "T00:00:00+00:00", open: g[0].open, high: Math.max.apply(null, g.map((x) => x.high)), low: Math.min.apply(null, g.map((x) => x.low)), close: g[g.length - 1].close, volume: 0, live: true });
              }
            } catch (e) { /* 沒有今天的就算了，日K停在最後一個有資料的交易日 */ }
          }
        }
        if (!bars.length) return Response.json({ status: "empty", error: "沒有資料", bars: [] }, { status: 200, headers: { "cache-control": "no-store" } });
        return Response.json({ status: "ok", id: idxId, interval: tf, bars }, { headers: { "cache-control": "public, max-age=" + (FUT_BAR || FUT_NAVER ? 2 : WORLD_IDX[idxId] ? 3 : tf === "1d" ? 30 : 10) } });   // 國際指數要即時：瀏覽器只留 3 秒
      } catch (err) {
        return Response.json({ status: "error", error: String(err), bars: [] }, { status: 502, headers: { "cache-control": "no-store" } });
      }
    }
    if (url.pathname === "/api/txf-live") {
      // 2026-10-29 使用者：首頁加「台指期近月」的價位、漲跌點數、漲跌幅。期交所 MIS 近月合約（TXF 後面接月份代碼的第一檔）。
      // 2026-10-30 使用者：日盤時間顯示日盤、夜盤時間（15:00～隔天 08:45）切成夜盤價（標籤跟著換）；夜盤收盤後（05:00～08:45）停在夜盤最後一筆，
      // 週末也停在週五夜盤收盤；期交所日盤報價在 05:00 會清空，兩個盤都沒有價才退回官方每日行情最後一個交易日的日盤收盤。
      try {
        const num = (v) => { const n = Number(String(v == null ? "" : v).replace(/,/g, "")); return Number.isFinite(n) && String(v).trim() !== "" ? n : null; };
        const quotes = async (marketType) => {
          const j = await txfMis("getQuoteList", { MarketType: marketType, SymbolType: "F", KindID: "1", CID: "TXF", ExpireMonth: "", RowSize: "全部", PageNo: "", SortColumn: "", AscDesc: "A" }, 8000);
          return (j && j.RtData && j.RtData.QuoteList) || [];
        };
        const tp = new Date(Date.now() + 8 * 3600000);
        const hm = tp.getUTCHours() * 100 + tp.getUTCMinutes();
        const wantNight = hm >= 1500 || hm < 845;      // 夜盤（15:00～隔天 05:00）和夜盤收盤後到日盤開盤前，看夜盤
        const dayQ = (await quotes("0")).find((x) => /^TXF[A-L][0-9]-F$/.test(String(x.SymbolID || "")) && num(x.CLastPrice) !== null) || null;
        const nightQ = (wantNight || !dayQ) ? ((await quotes("1")).find((x) => /^TXF[A-L][0-9]-M$/.test(String(x.SymbolID || "")) && num(x.CLastPrice) !== null) || null) : null;
        const q = wantNight ? (nightQ || dayQ) : (dayQ || nightQ);
        if (!q) {
          const last = await txfLastDayClose();
          const chg = last.change !== null ? last.change : (last.settle !== null ? Math.round((last.close - last.settle) * 100) / 100 : 0);
          const pc = last.pct !== null ? last.pct : (last.close - chg ? Math.round(chg / (last.close - chg) * 10000) / 100 : 0);
          return Response.json({ status: "ok", session: "day", symbol: null, name: "臺指期", month: Number(last.month.slice(4)), price: last.close, ref: Math.round((last.close - chg) * 100) / 100, change: chg, pct: pc,
            open: last.open, high: last.high, low: last.low, volume: last.volume, date: last.day, time: "13:45", closed: true },
            { headers: { "cache-control": "public, max-age=30" } });
        }
        const night = String(q.SymbolID).endsWith("-M");
        const MONTHS = "ABCDEFGHIJKL";
        const price = num(q.CLastPrice), ref = num(q.CRefPrice);
        const change = num(q.CDiff) !== null ? num(q.CDiff) : (ref !== null ? Math.round((price - ref) * 100) / 100 : null);
        const pct = num(q.CDiffRate) !== null ? num(q.CDiffRate) : (ref ? Math.round(change / ref * 10000) / 100 : null);
        let d = String(q.CDate || "");
        const t = String(q.CTime || "");
        let date = d.slice(0, 4) + "-" + d.slice(4, 6) + "-" + d.slice(6, 8);
        // 夜盤的 CDate 是那個交易日（15:00 開盤那天），過了午夜的成交（00:00～05:00）日曆日期要加一天
        if (night && t && t < "060000") date = new Date(Date.parse(date + "T00:00:00Z") + 86400000).toISOString().slice(0, 10);
        return Response.json({ status: "ok", session: night ? "night" : "day", symbol: q.SymbolID, name: q.DispCName, month: MONTHS.indexOf(q.SymbolID.charAt(3)) + 1, price, ref, change, pct,
          open: num(q.COpenPrice), high: num(q.CHighPrice), low: num(q.CLowPrice), volume: num(q.CTotalVolume), date, time: t.slice(0, 2) + ":" + t.slice(2, 4) },
          { headers: { "cache-control": "public, max-age=8" } });
      } catch (err) {
        // 期交所直打（520）、後端代打都失敗：退台灣版 Yahoo 的台指期近月（即時價、昨結算、成交量）
        try {
          const y = await txfYahooTw();
          const tpNow = new Date(Date.now() + 8 * 3600000), hmNow = tpNow.getUTCHours() * 100 + tpNow.getUTCMinutes();
          const ty = new Date((y.sec + 8 * 3600) * 1000);
          const change = Math.round((y.price - y.ref) * 100) / 100;
          return Response.json({ status: "ok", session: (hmNow >= 1500 || hmNow < 845) ? "night" : "day", symbol: null, name: "台指期近月", month: y.month, price: y.price, ref: y.ref, change, pct: Math.round(change / y.ref * 10000) / 100,
            open: null, high: null, low: null, volume: y.volume, date: ty.toISOString().slice(0, 10), time: ty.toISOString().slice(11, 16), source: "yahoo tw WTX&" },
            { headers: { "cache-control": "public, max-age=8" } });
        } catch (err2) { /* 兩邊都失敗，下面回錯誤 */ }
        return Response.json({ status: "error", error: String(err) }, { status: 502, headers: { "cache-control": "no-store" } });
      }
    }
    if (url.pathname === "/api/taiex-live") {
      // 2026-10-29 使用者：首頁加權指數那格要顯示今天（後端加權日資料晚上才更新）。用 Yahoo ^TWII：盤中即時、收盤後就是收盤價，快取 15 秒
      try {
        // 2026-10-30 使用者：加權指數沒有跟著盤走。國際版 Yahoo 的 ^TWII 慢約 20 分鐘，先抓台灣版 Yahoo（1 分K、跟盤，meta 的價格、時間就是最新一分鐘），抓不到才退回國際版
        try {
          const twres = await fetch("https://tw.stock.yahoo.com/_td-stock/api/resource/FinanceChartService.ApacLibraCharts;symbols=%5B%22%5ETWII%22%5D;type=tick", {
            headers: { "user-agent": "Mozilla/5.0", accept: "application/json" },
            cf: { cacheTtlByStatus: { "200-299": 8, "300-599": 0 }, cacheEverything: true }
          });
          if (twres.ok) {
            const twbody = await twres.json();
            const tm = twbody && twbody[0] && twbody[0].chart && twbody[0].chart.meta;
            const tprice = tm ? Number(tm.regularMarketPrice) : NaN, tprev = tm ? Number(tm.previousClose) : NaN, tsec = tm ? Number(tm.regularMarketTime) : NaN;
            if (Number.isFinite(tprice) && Number.isFinite(tprev) && tprev > 0 && Number.isFinite(tsec)) {
              const tchange = Math.round((tprice - tprev) * 100) / 100;
              return Response.json({ status: "ok", date: new Date((tsec + 8 * 3600) * 1000).toISOString().slice(0, 10), price: tprice, prevClose: tprev, change: tchange, pct: Math.round(tchange / tprev * 10000) / 100, time: new Date(tsec * 1000).toISOString(), source: "yahoo tw ^TWII" },
                { headers: { "cache-control": "public, max-age=8" } });
            }
          }
        } catch (twErr) { /* 台灣版抓不到就用下面國際版 */ }
        const yres = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/%5ETWII?interval=1d&range=5d", {
          headers: { "user-agent": "Mozilla/5.0", accept: "application/json" },
          cf: { cacheTtlByStatus: { "200-299": 15, "300-599": 0 }, cacheEverything: true }
        });
        if (!yres.ok) throw new Error("Yahoo HTTP " + yres.status);
        const ybody = await yres.json();
        const r0 = ybody && ybody.chart && ybody.chart.result && ybody.chart.result[0];
        if (!r0 || !r0.meta) throw new Error("Yahoo 沒有 ^TWII 資料");
        const meta = r0.meta;
        const stamps = r0.timestamp || [];
        const closes = (r0.indicators && r0.indicators.quote && r0.indicators.quote[0] && r0.indicators.quote[0].close) || [];
        const day = (t) => new Date((t + 8 * 3600) * 1000).toISOString().slice(0, 10);
        const bars = [];
        for (let i = 0; i < stamps.length; i++) if (Number.isFinite(closes[i])) bars.push({ date: day(stamps[i]), close: closes[i] });
        const price = Number(meta.regularMarketPrice);
        const date = day(Number(meta.regularMarketTime));
        // 昨收：最後一根日K就是今天的話取它前一根，不是（還沒有今天的）就取最後一根
        let prevClose = null;
        if (bars.length) prevClose = bars[bars.length - 1].date === date ? (bars.length > 1 ? bars[bars.length - 2].close : null) : bars[bars.length - 1].close;
        if (!Number.isFinite(prevClose) && Number.isFinite(meta.fulldayChange)) prevClose = price - meta.fulldayChange;
        if (!Number.isFinite(price) || !Number.isFinite(prevClose)) throw new Error("Yahoo ^TWII 資料不完整");
        prevClose = Math.round(prevClose * 100) / 100;
        const change = Math.round((price - prevClose) * 100) / 100;
        return Response.json({ status: "ok", date, price, prevClose, change, pct: Math.round(change / prevClose * 10000) / 100, time: new Date(Number(meta.regularMarketTime) * 1000).toISOString(), source: "yahoo ^TWII" },
          { headers: { "cache-control": "public, max-age=15" } });
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502, headers: { "cache-control": "no-store" } });
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
    if (url.pathname === "/api/suggest13") {
      try {
        return await sg13Response(env, url);
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/usage") {
      if (!env || !env.USAGE_KV) return Response.json({ status: "missing", message: "沒有綁定 USAGE_KV" });
      const day = url.searchParams.get("date");
      if (day && !/^\\d{4}-\\d{2}-\\d{2}$/.test(day)) return Response.json({ status: "error", error: "date 要 YYYY-MM-DD" }, { status: 422 });
      try {
        return new Response(JSON.stringify(await usageToday(env, day)), { headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" } });
      } catch (err) {
        return Response.json({ status: "error", error: String(err) }, { status: 502 });
      }
    }
    if (url.pathname === "/api/version") {
      return new Response(JSON.stringify({ build: BUILD_STAMP }), {
        headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
      });
    }
    if (url.pathname === "/api/groups") {
      const age = groupsMemo ? Date.now() - groupsMemo.at : Infinity;
      const memoResp = (state) => new Response(groupsMemo.body, { headers: { "content-type": "application/json", "x-groups-memo": state, "x-groups-age": String(Math.round(age / 1000)) } });
      if (age < GROUPS_MEMO_MS) return memoResp("hit");
      if (age < GROUPS_STALE_MS) {
        ctx.waitUntil(refreshGroups().catch(() => {}));   // 背景抓新的；失敗就下次再抓，舊的照給
        return memoResp("stale");
      }
      try {
        const body = await refreshGroups();
        return new Response(body, { headers: { "content-type": "application/json", "x-groups-memo": "miss" } });
      } catch (err) {
        return Response.json({ error: String(err) }, { status: 502 });
      }
    }
    return new Response(HTML_PAGE, {
      headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
    });
  },
  async scheduled(event, env, ctx) {
    try { recPingAt = 0; recorderPing(env, ctx); } catch (err) { /* 叫醒記錄器失敗不影響下面的檢查 */ }
    try {
      const result = await checkUsageAnomaly(env);
      if (result && result.anomalous) {
        await notifyDiscordUsageAnomaly(env, result);
      }
    } catch (err) {
      // 排程檢查本身失敗時不重試；靠Cloudflare自己的Cron執行記錄追蹤即可。
    }
    try {
      const daily = await checkDailyUsage(env);   // 2026-11-10 全天累計超過 8 萬次發一次警報（兩個檢查各自 try，互不影響）
      if (daily && daily.anomalous) await notifyDiscordDailyUsage(env, daily);
    } catch (err) {
      // 同上：失敗就等下一輪。
    }
    try {
      await sg13Cron(env);   // 2026-11-10 13:00 建議：交易日 13:00～13:25 算一次存 KV（13:00 沒成功 13:15 再試）
    } catch (err) {
      // 算失敗就等下一輪（13:15）；網頁來問時也會補算。
    }
  }
};
export default WORKER_ENTRY;
`;

const finalSource = serverPrelude + serverTail;
const outPath = path.join(__dirname, '..', 'src', 'index.js');
fs.writeFileSync(outPath, finalSource, 'utf8');
console.log('Wrote', outPath, 'length', finalSource.length);
console.log('Contains stray backtick issues?', (finalSource.match(/`/g) || []).length, 'backticks total');
