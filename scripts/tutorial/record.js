// 教學影片錄影：node record.js <spec.json>
// spec＝{ key, out, scenes:[{ say, cap, tab, eval, click, scroll, target, settle, audio, dur }] }（build.py 產生，dur＝這段旁白秒數）
// 每段：做動作 → 等畫面穩定 → 字幕＋紅框 → 停旁白那麼久；記下每段旁白開始的秒數（timeline），build.py 用 ffmpeg 對齊配音。
const fs = require('fs'); const path = require('path'); const http = require('http'); const https = require('https');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const ROOT = path.resolve(__dirname, '..', '..');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const SITE = process.env.TUT_SITE || 'https://tw-groups.judystock.workers.dev';
const code = fs.readFileSync(path.join(ROOT, 'src', 'index.js'), 'utf8');
const { HTML_PAGE } = new Function(code.slice(0, code.indexOf('const CHUNK_SIZE')) + '\nreturn { GROUPS, HTML_PAGE };')();
const live = (p) => new Promise((resolve, reject) => https.get(SITE + p, { headers: { 'user-agent': 'Mozilla/5.0 tutorial-recorder' } }, (res) => {
  const cs = []; res.on('data', (c) => cs.push(c)); res.on('end', () => resolve([res.statusCode, res.headers['content-type'] || 'application/json', Buffer.concat(cs)]));
}).on('error', reject));
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/'){ res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(HTML_PAGE); }
  try { const [st, ct, body] = await live(req.url); res.writeHead(st, { 'content-type': ct }); res.end(body); } catch (e) { res.writeHead(502); res.end('{}'); }
});
const CSS = `
  #tutCap{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483000;max-width:90vw;background:rgba(15,15,22,.88);color:#fff;
    font:800 30px/1.4 "Noto Sans CJK TC","Noto Sans TC","PingFang TC",sans-serif;padding:12px 24px;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.45);text-align:center;}
  #tutBox{position:fixed;z-index:2147482999;border:5px solid #ff2d2d;border-radius:12px;box-shadow:0 0 0 9999px rgba(0,0,0,.25);pointer-events:none;transition:all .35s ease;}
  #tutTitle{position:fixed;inset:0;z-index:2147483001;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;
    background:linear-gradient(135deg,#3b0764,#7c3aed);color:#fff;font-family:"Noto Sans CJK TC","Noto Sans TC",sans-serif;}
  #tutTitle .t1{font-size:54px;font-weight:900;} #tutTitle .t2{font-size:26px;opacity:.9;}
  .toast,#toastBox,#obsAlertBox,#launchAlertBox,#tutModal{display:none!important;}`;
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, recordVideo: { dir: path.dirname(spec.out), size: { width: 1280, height: 720 } },
    timezoneId: 'Asia/Taipei', locale: 'zh-TW' });
  const t0 = Date.now();
  const page = await ctx.newPage();
  const warnings = [];
  page.on('pageerror', (e) => warnings.push('pageerror: ' + String(e).slice(0, 200)));
  await page.addInitScript(() => { try { localStorage.setItem('guideSeen', '1'); localStorage.setItem('brewHf', '{}'); localStorage.setItem('ghfHf', '{}'); localStorage.setItem('stHfOnly', '{}'); localStorage.setItem('bigOrderFilters', '{}'); } catch (_){} });
  await page.goto('http://127.0.0.1:' + port + '/');
  await page.waitForFunction(() => typeof lastData !== 'undefined' && lastData && lastData.groups && !lastData.mock && typeof mainForceRanking !== 'undefined' && mainForceRanking && mainForceRanking.length, null, { timeout: 90000 });
  await page.addStyleTag({ content: CSS });
  await page.evaluate(() => { try { closeSignalCenter(); } catch (_){} window.scrollTo(0, 0); });
  await page.waitForTimeout(2500);   // 讓訊號、族群資料都進來
  const timeline = [];
  // 片頭（標題卡）
  await page.evaluate(({ title, sub }) => {
    const d = document.createElement('div'); d.id = 'tutTitle'; d.innerHTML = '<div class="t1"></div><div class="t2"></div>';
    d.querySelector('.t1').textContent = title; d.querySelector('.t2').textContent = sub; document.body.appendChild(d);
  }, { title: spec.title, sub: spec.subtitle || '台股族群強弱排行・影片教學' });
  const startAt = (Date.now() - t0) / 1000;
  await page.waitForTimeout(2200);
  await page.evaluate(() => { const d = document.getElementById('tutTitle'); if (d) d.remove(); });
  for (const [i, sc] of spec.scenes.entries()){
    if (sc.tab) await page.evaluate((k) => { openSignalCenter(); signalCenterState.activeTab = k; renderSignalCenter(); }, sc.tab);
    if (sc.eval) await page.evaluate(sc.eval);
    if (sc.click){
      const ok = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return false; el.click(); return true; }, sc.click);
      if (!ok) warnings.push('scene ' + i + ' click not found: ' + sc.click);
    }
    await page.waitForTimeout(sc.settle || 900);
    if (sc.scroll){
      const ok = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return false; el.scrollIntoView({ block: 'center' }); return true; }, sc.scroll);
      if (!ok) warnings.push('scene ' + i + ' scroll not found: ' + sc.scroll);
      await page.waitForTimeout(500);
    }
    const found = await page.evaluate(({ cap, target }) => {
      let c = document.getElementById('tutCap'); if (!c){ c = document.createElement('div'); c.id = 'tutCap'; document.body.appendChild(c); }
      c.textContent = cap;
      let b = document.getElementById('tutBox');
      const el = target ? document.querySelector(target) : null;
      if (!el){ if (b) b.remove(); return !target; }
      if (!b){ b = document.createElement('div'); b.id = 'tutBox'; document.body.appendChild(b); }
      const r = el.getBoundingClientRect();
      const top = Math.max(4, r.top - 8), bottom = Math.min(window.innerHeight - 4, r.bottom + 8);
      Object.assign(b.style, { left: Math.max(4, r.left - 8) + 'px', top: top + 'px', width: Math.min(window.innerWidth - 8, r.width + 16) + 'px', height: Math.max(20, bottom - top) + 'px' });
      return true;
    }, { cap: sc.cap, target: sc.target || null });
    if (!found) warnings.push('scene ' + i + ' target not found: ' + sc.target);
    timeline.push({ at: (Date.now() - t0) / 1000, dur: sc.dur, audio: sc.audio });
    await page.waitForTimeout(Math.round(sc.dur * 1000) + 450);
  }
  await page.evaluate(() => { const c = document.getElementById('tutCap'); if (c) c.textContent = '影片裡的數字是錄影那時候的行情，以實際畫面為準'; const b = document.getElementById('tutBox'); if (b) b.remove(); });
  await page.waitForTimeout(1600);
  const total = (Date.now() - t0) / 1000;
  const raw = await page.video().path();
  await ctx.close(); await browser.close(); server.close();
  fs.writeFileSync(spec.out + '.timeline.json', JSON.stringify({ raw, startAt, total, timeline, warnings }, null, 1));
  console.log(JSON.stringify({ key: spec.key, total: +(total - startAt).toFixed(1), warnings }));
})().catch((e) => { console.error(e); process.exit(1); });
