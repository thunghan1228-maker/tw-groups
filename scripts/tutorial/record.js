// 教學影片錄影：node record.js <spec.json>
// spec＝{ key, out, scenes:[{ say, cap, tab, eval, click, scroll, target, settle, audio, dur }] }（build.py 產生，dur＝這段旁白秒數）
// 每段：做動作 → 等畫面穩定 → 字幕＋紅框 → 停旁白那麼久；記下每段旁白開始的秒數（timeline），build.py 用 ffmpeg 對齊配音。
const fs = require('fs'); const path = require('path'); const http = require('http'); const https = require('https');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const ROOT = path.resolve(__dirname, '..', '..');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const SITE = process.env.TUT_SITE || 'https://tw-groups.judystock.workers.dev';
const SHOTS = path.join(__dirname, '.cache', 'shots');
const code = fs.readFileSync(path.join(ROOT, 'src', 'index.js'), 'utf8');
const { HTML_PAGE } = new Function(code.slice(0, code.indexOf('const CHUNK_SIZE')) + '\nreturn { GROUPS, HTML_PAGE };')();
const live = (p) => new Promise((resolve, reject) => https.get(SITE + p, { headers: { 'user-agent': 'Mozilla/5.0 tutorial-recorder' } }, (res) => {
  const cs = []; res.on('data', (c) => cs.push(c)); res.on('end', () => resolve([res.statusCode, res.headers['content-type'] || 'application/json', Buffer.concat(cs)]));
}).on('error', reject));
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/'){ res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(HTML_PAGE); }
  // 圖解（illus.js）跟錄影前拍的網站截圖（放到主畫面那幾支用）
  if (url.pathname === '/__tut/illus.js'){ res.writeHead(200, { 'content-type': 'text/javascript; charset=utf-8' }); return res.end(fs.readFileSync(path.join(__dirname, 'illus.js'))); }
  const shot = url.pathname.match(/^\/__tut\/shots\/([a-z]+)\.png$/);
  if (shot){ const f = path.join(SHOTS, shot[1] + '.png'); if (fs.existsSync(f)){ res.writeHead(200, { 'content-type': 'image/png' }); return res.end(fs.readFileSync(f)); } res.writeHead(404); return res.end(); }
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
  const ready = (p) => p.waitForFunction(() => typeof lastData !== 'undefined' && lastData && lastData.groups && !lastData.mock && typeof mainForceRanking !== 'undefined' && mainForceRanking && mainForceRanking.length, null, { timeout: 90000 });
  if (spec.shots){   // 放到主畫面那幾支：先拍手機、iPad、電腦大小的網站截圖，圖解裡用
    fs.mkdirSync(SHOTS, { recursive: true });
    for (const [name, vp, mobile] of [['phone', { width: 390, height: 844 }, true], ['ipad', { width: 820, height: 1180 }, true], ['pc', { width: 1280, height: 980 }, false]]){
      const c = await browser.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile, timezoneId: 'Asia/Taipei', locale: 'zh-TW' });
      const p = await c.newPage();
      await p.addInitScript(() => { try { localStorage.setItem('guideSeen', '1'); } catch (_){} });
      await p.goto('http://127.0.0.1:' + port + '/');
      await ready(p);
      await p.addStyleTag({ content: '.toast,#toastBox,#obsAlertBox,#launchAlertBox,#tutModal{display:none!important;}' });
      await p.evaluate(() => { try { closeSignalCenter(); } catch (_){} window.scrollTo(0, 0); });
      await p.waitForTimeout(2500);
      await p.screenshot({ path: path.join(SHOTS, name + '.png') });
      await c.close();
    }
  }
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, recordVideo: { dir: path.dirname(spec.out), size: { width: 1280, height: 720 } },
    timezoneId: 'Asia/Taipei', locale: 'zh-TW' });
  const t0 = Date.now();
  const page = await ctx.newPage();
  const warnings = [];
  page.on('pageerror', (e) => warnings.push('pageerror: ' + String(e).slice(0, 200)));
  // 用文字找元素：sel 裡面、看得到、文字含 text 的，取文字最短的那個（最貼近那顆按鈕／那個標題）
  await page.addInitScript(() => {
    window.__tutFind = (sel, text) => {
      const all = [...document.querySelectorAll(sel)].filter((e) => e.offsetParent !== null && (e.textContent || '').includes(text));
      all.sort((a, b) => a.textContent.length - b.textContent.length);
      return all[0] || null;
    };
    // K線圖是開在視窗裡的 iframe：__tutIn 找 iframe 裡的元素（點它用）；__tutBoxIn 在外面蓋一個一樣大的透明框（紅框框它用）
    window.__tutIn = (sel, text) => {
      const frames = [...document.querySelectorAll('#chartWindows iframe')];
      const f = frames[frames.length - 1];
      const doc = f && f.contentDocument;
      if (!doc) return null;
      if (!text) return doc.querySelector(sel);
      const all = [...doc.querySelectorAll(sel)].filter((e) => (e.textContent || '').includes(text));
      all.sort((a, b) => a.textContent.length - b.textContent.length);
      return all[0] || null;
    };
    window.__tutBoxIn = (sel, text) => {
      const el = window.__tutIn(sel, text);
      if (!el) return null;
      el.scrollIntoView({ block: 'nearest' });
      const fr = el.ownerDocument.defaultView.frameElement.getBoundingClientRect(), r = el.getBoundingClientRect();
      let p = document.getElementById('tutProxy');
      if (!p){ p = document.createElement('div'); p.id = 'tutProxy'; document.body.appendChild(p); }
      Object.assign(p.style, { position: 'fixed', pointerEvents: 'none', left: (fr.left + r.left) + 'px', top: (fr.top + r.top) + 'px', width: r.width + 'px', height: r.height + 'px' });
      return p;
    };
  });
  await page.addInitScript(() => { try { localStorage.setItem('guideSeen', '1'); localStorage.setItem('brewHf', '{}'); localStorage.setItem('ghfHf', '{}'); localStorage.setItem('stHfOnly', '{}'); localStorage.setItem('bigOrderFilters', '{}'); } catch (_){} });
  await page.goto('http://127.0.0.1:' + port + '/');
  await ready(page);
  await page.addStyleTag({ content: CSS });
  await page.addScriptTag({ url: '/__tut/illus.js' });
  // 今日提醒每天第一次會自己跳出來：錄影時不要跳（今日提醒那支自己打開）
  await page.evaluate(() => { try { window.remindUnseen = () => false; closeRemindPanel(); } catch (_){} try { closeSignalCenter(); } catch (_){} window.scrollTo(0, 0); });
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
    if (sc.clickPick){   // JS 運算式，回傳要點的元素（例如 __tutFind('#swingTabs .signal-tab', '籌碼面')）
      const ok = await page.evaluate((js) => { let el = null; try { el = eval(js); } catch (_){} if (!el) return false; el.click(); return true; }, sc.clickPick);
      if (!ok) warnings.push('scene ' + i + ' clickPick not found: ' + sc.clickPick);
    }
    if (sc.click){
      const ok = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return false; el.click(); return true; }, sc.click);
      if (!ok) warnings.push('scene ' + i + ' click not found: ' + sc.click);
    }
    await page.waitForTimeout(sc.settle || 900);
    if (sc.pick){   // JS 運算式，回傳要框的元素：標上 data-tutmark，紅框框它（也會捲過去）
      const ok = await page.evaluate((js) => {
        document.querySelectorAll('[data-tutmark]').forEach((e) => e.removeAttribute('data-tutmark'));
        let el = null; try { el = eval(js); } catch (_){}   // 找不到（例如 null.parentElement）當作沒找到，記警告，不要整支中斷
        if (!el) return false;
        el.setAttribute('data-tutmark', '1'); el.scrollIntoView({ block: 'center' }); return true;
      }, sc.pick);
      if (!ok) warnings.push('scene ' + i + ' pick not found: ' + sc.pick);
      else {
        sc.target = '[data-tutmark="1"]'; await page.waitForTimeout(500);
        // 每日功課這類面板每 15～20 秒會整塊重畫，標記跟著不見：框之前確認標記還在，不在就重標一次
        const still = await page.evaluate(() => !!document.querySelector('[data-tutmark="1"]'));
        if (!still){
          await page.evaluate((js) => { let el = null; try { el = eval(js); } catch (_){} if (el){ el.setAttribute('data-tutmark', '1'); el.scrollIntoView({ block: 'center' }); } }, sc.pick);
          await page.waitForTimeout(300);
        }
      }
    }
    if (sc.scroll){
      const ok = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return false; el.scrollIntoView({ block: 'center' }); return true; }, sc.scroll);
      if (!ok) warnings.push('scene ' + i + ' scroll not found: ' + sc.scroll);
      await page.waitForTimeout(500);
    }
    const found = await page.evaluate(({ cap, target }) => {
      let c = document.getElementById('tutCap'); if (!c){ c = document.createElement('div'); c.id = 'tutCap'; document.body.appendChild(c); }
      c.textContent = cap;
      Object.assign(c.style, { top: '', bottom: '' });   // 預設在下方
      let b = document.getElementById('tutBox');
      const el = target ? document.querySelector(target) : null;
      if (!el){ if (b) b.remove(); return !target; }
      if (!b){ b = document.createElement('div'); b.id = 'tutBox'; document.body.appendChild(b); }
      const r = el.getBoundingClientRect();
      const top = Math.max(4, r.top - 8), bottom = Math.min(window.innerHeight - 4, r.bottom + 8);
      Object.assign(b.style, { left: Math.max(4, r.left - 8) + 'px', top: top + 'px', width: Math.min(window.innerWidth - 8, r.width + 16) + 'px', height: Math.max(20, bottom - top) + 'px' });
      // 字幕會蓋住框起來的東西（例如下方工具列中間那幾顆按鈕）：字幕改放上方。大區塊（表格）本來就蓋不完，照舊放下方
      const cr = c.getBoundingClientRect();
      const overlap = r.right > cr.left && r.left < cr.right && r.bottom > cr.top && r.top < cr.bottom;
      if (overlap && r.height < window.innerHeight * 0.4) Object.assign(c.style, { top: '18px', bottom: 'auto' });
      return true;
    }, { cap: sc.cap, target: sc.target || null });
    if (!found) warnings.push('scene ' + i + ' target not found: ' + sc.target);
    timeline.push({ at: (Date.now() - t0) / 1000, dur: sc.dur, audio: sc.audio });
    await page.waitForTimeout(Math.round(sc.dur * 1000) + 450);
  }
  await page.evaluate(() => { const c = document.getElementById('tutCap'); if (c){ c.textContent = '影片裡的數字是錄影那時候的行情，以實際畫面為準'; Object.assign(c.style, { top: '', bottom: '' }); } const b = document.getElementById('tutBox'); if (b) b.remove(); });
  await page.waitForTimeout(1600);
  const total = (Date.now() - t0) / 1000;
  const raw = await page.video().path();
  await ctx.close(); await browser.close(); server.close();
  fs.writeFileSync(spec.out + '.timeline.json', JSON.stringify({ raw, startAt, total, timeline, warnings }, null, 1));
  console.log(JSON.stringify({ key: spec.key, total: +(total - startAt).toFixed(1), warnings }));
})().catch((e) => { console.error(e); process.exit(1); });
