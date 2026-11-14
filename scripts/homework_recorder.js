// 雲端自動開網頁記錄（2026-11-14 使用者）
//
// 每日功課的「每 5 分鐘紀錄」（/api/homework-snapshot：刀劍空、12空、火多多名單）是網頁自己送的——誰的網頁開著誰就送。
// 沒人開網頁的時段就沒有紀錄：11/13 只記到 11:05，之後才進榜的（例如 777 的聯茂）就查不到時間，顯示「--:--」。
// 這支在 GitHub Actions 開一個看不見的瀏覽器，交易日從開盤前一直開到 13:41，網頁自己照常每 5 分鐘送紀錄，不靠有沒有人開網頁。
//
// 環境變數：SITE（網址）、END_HM（幾點收工，台北時間，預設 13:41）、MINUTES（測試用：只開幾分鐘）、FORCE=1（週末／收盤後也照開，測試用）
const { chromium } = require('playwright');

const SITE = process.env.SITE || 'https://tw-groups.judystock.workers.dev/';
const END_HM = process.env.END_HM || '13:41';
const MINUTES = Number(process.env.MINUTES) || 0;
const FORCE = process.env.FORCE === '1';
const RELOAD_EVERY_MS = 90 * 60e3;          // 開太久的分頁定期重開一次，免得記憶體越吃越多

const tpe = () => new Date(Date.now() + 8 * 3600e3);
const hm = () => tpe().toISOString().slice(11, 16);
const today = () => tpe().toISOString().slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[' + hm() + ']', ...a);

(async () => {
  const dow = tpe().getUTCDay();
  if (!FORCE && (dow === 0 || dow === 6)) { log('週末，不用記'); return; }
  if (!FORCE && hm() >= END_HM) { log('已經過 ' + END_HM + '，今天不用再記（可能是排程晚到，或前一班已經記完）'); return; }
  const stopAt = MINUTES ? Date.now() + MINUTES * 60e3 : null;
  const done = () => (stopAt ? Date.now() >= stopAt : hm() >= END_HM);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, timezoneId: 'Asia/Taipei', locale: 'zh-TW' });
  let posted = 0, rejected = 0, failed = 0;
  ctx.on('response', (res) => {
    if (!/\/api\/homework-snapshot$/.test(new URL(res.url()).pathname) || res.request().method() !== 'POST') return;
    if (res.ok()) { posted++; log('送出紀錄 OK'); } else if (res.status() === 422) { rejected++; log('紀錄 422（這個時段已經有人送過，或不是今天）'); } else { failed++; log('紀錄失敗 HTTP ' + res.status()); }
  });

  let page = null, openedAt = 0;
  async function open(why){
    if (page) await page.close().catch(() => {});
    page = await ctx.newPage();
    page.on('pageerror', (e) => log('網頁錯誤：' + String(e.message || e).slice(0, 200)));
    await page.addInitScript(() => { try { localStorage.setItem('guideSeen', '1'); } catch (_){} });
    try { await page.goto(SITE, { waitUntil: 'domcontentloaded', timeout: 90e3 }); } catch (e) { log('開網頁失敗：' + String(e).slice(0, 200)); }
    openedAt = Date.now();
    log('開網頁' + (why ? '（' + why + '）' : ''));
  }
  await open('第一次');

  let lastQt = '', stale = 0, notToday = 0;
  while (!done()){
    await sleep(60e3);
    let st;
    try {
      st = await page.evaluate(() => ({
        qd: typeof lastData !== 'undefined' && lastData ? lastData.quoteDate : null,
        qt: typeof lastData !== 'undefined' && lastData ? String(lastData.quoteTime || '') : '',
        held: !!(typeof lastData !== 'undefined' && lastData && lastData.heldClose),
        slot: typeof tdSlotNow === 'function' ? tdSlotNow() : null,
        rec: typeof tdRec !== 'undefined' ? tdRec.done.size : null,
      }));
    } catch (e) { st = { err: String(e).slice(0, 200) }; }
    log('狀態', JSON.stringify(st));
    const now = hm();
    if (st.err){ await open('讀不到網頁狀態'); continue; }
    // 盤中報價時間 5 分鐘沒動＝網頁卡住了，重開
    if (now >= '09:02' && now <= '13:30' && st.qd === today()){
      stale = st.qt && st.qt === lastQt ? stale + 1 : 0;
      if (stale >= 5){ stale = 0; await open('報價 5 分鐘沒更新'); continue; }
    }
    lastQt = st.qt;
    // 09:30 以後報價日期一直不是今天＝今天休市（颱風假、國定假日），收工
    if (!FORCE && now >= '09:30' && st.qd && st.qd !== today()){
      if (++notToday >= 10){ log('報價日期一直是 ' + st.qd + '，今天應該沒開盤，收工'); break; }
    } else notToday = 0;
    if (Date.now() - openedAt > RELOAD_EVERY_MS) await open('定期重開');
  }

  // 收工前看一下今天後端存了幾個時段（一天 09:05～13:30 共 54 個）
  try {
    const d = await page.evaluate(async (day) => (await fetch('/api/homework-snapshots?date=' + day)).json(), today());
    const slots = Object.keys((d && d.slots) || {}).sort();
    log('今天後端紀錄 ' + slots.length + ' 個時段' + (slots.length ? '（' + slots[0] + '～' + slots[slots.length - 1] + '）' : ''));
  } catch (e) { log('查今天紀錄失敗：' + String(e).slice(0, 200)); }
  log('這一班送出 ' + posted + ' 筆、422 ' + rejected + ' 筆、失敗 ' + failed + ' 筆');
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
