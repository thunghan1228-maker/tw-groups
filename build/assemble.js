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
    data = { status: "ok", quotes: {}, quoteDate: null, quoteTime: null };
    for (const part of parts) {
      Object.assign(data.quotes, part.quotes);
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
    value: { quoteDate: data.quoteDate || null, quoteTime: data.quoteTime || null, missing, retried: 0, source: "backend" },
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
  const resp = await fetch("https://hanstock-production-b872.up.railway.app/api/hub/session-close", {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    cf: { cacheTtl: 120, cacheEverything: true }
  });
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
        volume: quotes[s.code]?.volume ?? null,
        // 今天到目前的最高價（2026-10-16 首頁終點戰法空(283)：盤中曾漲到 5% 以上的才列）；後端代抓那條沒有就是 null
        high: Number.isFinite(quotes[s.code]?.high) ? quotes[s.code].high : null
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
    quoteSource: held ? "close" : (meta.source || "mis")
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

// /api/usage（2026-10-12 使用者：今天開盤要檢查流量）：讀用量監控的抽樣計數，算台灣時間今天每小時的估計請求數。
// 只讀一天的 bucket（最多 96 個 KV 讀取），結果在同一個執行環境裡留 5 分鐘，不會把 KV 免費讀取額度用掉。
// ?date=YYYY-MM-DD 看前一天（2026-10-15 KV 警告信：要看昨天到底多少請求）；bucket 只留 2 天。
let usageMemo = {};
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
    freePlanDailyLimit: 100000,
    note: "每 " + Math.round(1 / USAGE_SAMPLE_RATE) + " 個請求抽樣記 1 次再乘回去，是估計值；時間是台灣時間；5 分鐘更新一次"
  };
  usageMemo[twDate] = { at: Date.now(), body };
  return body;
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

// 教學影片（2026-10-13 使用者：訊號教學、下方工具列各功能做影音教學）：mp4 放在 Workers 靜態檔案 public/tut-assets/，
// 網址用 /videos/<名字>.mp4 經過這裡：iPhone／iPad 的 Safari 播影片一定要 Range（206 分段），靜態檔案有沒有支援文件沒寫，這裡自己切。
async function serveTutorialVideo(request, env, url) {
  const name = url.pathname.slice("/videos/".length);
  if (!/^[a-z0-9_-]{1,60}[.]mp4$/.test(name) || !env.ASSETS) return new Response("not found", { status: 404 });
  const res = await env.ASSETS.fetch(new Request(new URL("/tut-assets/" + name, url.origin).toString()));
  if (!res.ok) return new Response("not found", { status: 404 });
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const headers = { "content-type": "video/mp4", "accept-ranges": "bytes", "cache-control": "public, max-age=600" };
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

export default {
  async fetch(request, env, ctx) {
    recordSampledRequest(env, ctx);
    const url = new URL(request.url);
    if (url.pathname.indexOf("/videos/") === 0) return await serveTutorialVideo(request, env, url);
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
      // 均線分數排行（2026-10-10 使用者：照老師 zhuang.tw/ma 做）：個股分數前 60＋族群分數前十大，收盤後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/ma-rank" + url.search, 300);
    }
    if (url.pathname === "/api/ma-strength") {
      // 今日強勢股／弱勢股（2026-10-12 使用者）：族群分數前十大（倒數十名）裡均線分數高（低）的股票，收盤後才變，5 分鐘快取
      return await proxyHanstockBars("/api/hub/ma-rank/strength" + url.search, 300);
    }
    if (url.pathname === "/api/ma-rank-hits") {
      // 均線分數排行的前十名常客（近 N 天每天取前 K 名，同分全算），5 分鐘快取
      return await proxyHanstockBars("/api/hub/ma-rank/hits" + url.search, 300);
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
