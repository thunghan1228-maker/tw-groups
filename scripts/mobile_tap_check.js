// 在 GitHub runner 用 Playwright（預設 WebKit＋iPhone 模擬）對線上頁面做「盤後籌碼排行點列開K線圖」的實機檢查。
// 沙盒裡沒有 WebKit，也連不到線上網址，所以用 mobile-check.yml 在 runner 上跑，結果印在 log 裡讀回來。
const { webkit, chromium, devices } = require('playwright');
const url = process.env.TARGET_URL || 'https://tw-groups.judystock.workers.dev/';
const deviceName = process.env.DEVICE || 'iPhone 13';
const engine = process.env.ENGINE || 'webkit';
const log = (label, obj) => console.log('## ' + label + ' ' + (obj === undefined ? '' : JSON.stringify(obj)));

(async () => {
  const browserType = engine === 'chromium' ? chromium : webkit;
  const browser = await browserType.launch();
  const context = await browser.newContext({ ...devices[deviceName], timezoneId: 'Asia/Taipei', locale: 'zh-TW' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + (e.stack || e.message)));
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push('console.' + m.type() + ': ' + m.text()); });
  log('config', { engine, deviceName, url, ua: devices[deviceName].userAgent });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => typeof openChipsPanel === 'function' && !!document.querySelector('[data-label="今日盤後籌碼排行"]'), null, { timeout: 30000 });
  await page.waitForTimeout(2500);

  const state = () => page.evaluate(() => {
    const z = (id) => { const el = document.getElementById(id); return el ? getComputedStyle(el).zIndex : null; };
    const cm = document.getElementById('chartModal');
    const inner = document.getElementById('chartModalInner');
    const r = inner ? inner.getBoundingClientRect() : null;
    let topAtChart = null;
    if (r && !cm.hidden){
      const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      topAtChart = el ? (el.id || el.className || el.tagName) : null;
    }
    return {
      innerWidth: window.innerWidth, innerHeight: window.innerHeight, floating: useFloatingCharts(),
      chartHidden: cm.hidden, chartZ: z('chartModal'),
      chartRect: r && !cm.hidden ? [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)] : null,
      topAtChart,
      code: currentChart.code, tf: currentChart.tf, bars: currentChart.bars ? currentChart.bars.length : null,
      chipsHidden: document.getElementById('chipsModal').hidden, chipsZ: z('chipsModal'),
      chipsBehind: document.getElementById('chipsModal').classList.contains('behind-chart'),
      signalHidden: document.getElementById('signalModal').hidden, signalZ: z('signalModal'),
      signalBehind: document.getElementById('signalModal').classList.contains('behind-chart'),
      chartWindows: document.querySelectorAll('#chartWindows .chart-float').length,
      bodyOverflow: document.body.style.overflow,
    };
  });
  log('initial', await state());

  await page.tap('[data-label="今日盤後籌碼排行"]');
  await page.waitForFunction(() => !document.getElementById('chipsModal').hidden, null, { timeout: 10000 });
  const gotRows = await page.waitForFunction(() => document.querySelectorAll('#chipsBody .chips-row[data-code]').length > 0, null, { timeout: 45000 }).then(() => true).catch(() => false);
  log('panel', {
    gotRows,
    rows: await page.evaluate(() => document.querySelectorAll('#chipsBody .chips-row[data-code]').length),
    text: await page.evaluate(() => document.getElementById('chipsBody').innerText.replace(/\s+/g, ' ').slice(0, 240)),
  });
  const shot = async (name) => {
    const buf = await page.screenshot({ type: 'jpeg', quality: 55 });
    console.log('## screenshot ' + name + ' base64 ' + buf.length);
    console.log('SHOT:' + name + ':' + buf.toString('base64'));
  };
  await shot('panel');

  if (gotRows){
    await page.evaluate(() => {
      window.__tapLog = [];
      const rec = (ev) => window.__tapLog.push(ev.type + '@' + (ev.target.id || ev.target.className || ev.target.tagName));
      ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'mousedown', 'mouseup', 'click'].forEach((t) => document.getElementById('chipsBody').addEventListener(t, rec, true));
      const orig = window.openStockChart;
      window.openStockChart = function(){ window.__tapLog.push('openStockChart(' + [].slice.call(arguments).join(',') + ')'); return orig.apply(this, arguments); };
      window.addEventListener('error', (e) => window.__tapLog.push('error:' + e.message));
    });
    log('first row', await page.evaluate(() => { const r = document.querySelector('#chipsBody .chips-row[data-code]'); return { code: r.dataset.code, name: r.dataset.name }; }));

    await page.tap('#chipsBody .chips-row[data-code] td.combo-code');
    await page.waitForTimeout(3000);
    log('after tap code cell', await state());
    log('tapLog', await page.evaluate(() => window.__tapLog));
    await shot('after-tap-code');

    await page.evaluate(() => { closeStockChart(); window.__tapLog = []; });
    await page.waitForTimeout(400);
    await page.tap('#chipsBody .chips-row[data-code] td.combo-name');
    await page.waitForTimeout(3000);
    log('after tap name cell', await state());
    log('tapLog', await page.evaluate(() => window.__tapLog));
    await shot('after-tap-name');
  }
  log('errors', errors);
  await browser.close();
})().catch((e) => { console.error('FATAL', e); process.exit(1); });
