// 教學影片的圖解畫面（放到主畫面／桌面那幾支用）：手機、平板、電腦的瀏覽器操作沒辦法直接錄，
// 用網站真的截圖（record.js 錄影前先拍，/__tut/shots/*.png）＋畫出來的瀏覽器按鈕、選單，紅框框要點的地方。
// 用法（videos.py 的 eval）：tutIllus('iphone', 'share') → 畫面換成 iPhone Safari、分享鈕那一步；要框的元素都有 id（#ilShare…）。
// 按鈕的字照 2026 年 iOS／Android／Chrome／Edge 繁體中文介面寫，版本不同可能差幾個字，旁白有提醒。
(() => {
  const CSS = `
  #tutIllus{position:fixed;inset:0;z-index:2147482000;background:radial-gradient(circle at 30% 20%,#3b2a1e,#140e0a 70%);color:#f1ece6;
    font-family:"Noto Sans CJK TC","Noto Sans TC","PingFang TC",sans-serif;overflow:hidden;}
  #tutIllus *{box-sizing:border-box;}
  .il-title{position:absolute;left:60px;top:34px;font-size:30px;font-weight:900;}
  .il-title small{display:block;font-size:17px;font-weight:600;opacity:.75;margin-top:6px;}
  .il-steps{position:absolute;left:700px;top:120px;width:520px;display:flex;flex-direction:column;gap:14px;}
  .il-step{display:flex;gap:14px;align-items:center;font-size:23px;font-weight:700;opacity:.45;}
  .il-step b{flex:0 0 44px;height:44px;border-radius:50%;background:#4a3a2c;display:flex;align-items:center;justify-content:center;font-size:21px;}
  .il-step.on{opacity:1;} .il-step.on b{background:#f5b301;color:#1a1a1a;}
  .il-step.done{opacity:.8;} .il-step.done b{background:#22a35a;color:#fff;}
  .il-note{position:absolute;left:700px;top:520px;width:520px;font-size:17px;line-height:1.5;opacity:.75;}
  .il-note.big{top:150px;font-size:24px;line-height:1.7;opacity:1;font-weight:700;}
  /* 手機 */
  .il-phone{position:absolute;left:300px;top:38px;width:280px;height:592px;border-radius:42px;background:#0b0b0d;padding:11px;box-shadow:0 20px 60px rgba(0,0,0,.6),inset 0 0 0 2px #2b2b30;}
  .il-screen{position:relative;width:100%;height:100%;border-radius:32px;overflow:hidden;background:#12100f;}
  .il-status{position:absolute;left:0;right:0;top:0;height:30px;display:flex;align-items:center;justify-content:space-between;padding:0 22px;font-size:12px;font-weight:700;color:#fff;z-index:3;}
  .il-shot{position:absolute;left:0;top:30px;width:100%;}
  .il-sbar{position:absolute;left:0;right:0;bottom:0;height:84px;background:rgba(248,248,250,.97);color:#111;z-index:4;padding:8px 10px 0;}
  .il-pill{height:30px;border-radius:10px;background:#e4e4ea;display:flex;align-items:center;justify-content:center;font-size:11.5px;color:#222;gap:4px;}
  .il-icons{display:flex;justify-content:space-around;align-items:center;height:40px;font-size:20px;color:#0a64d8;}
  .il-icons > span{width:34px;height:34px;display:flex;align-items:center;justify-content:center;}
  .il-cbar{position:absolute;left:0;right:0;top:30px;height:48px;background:#202124;display:flex;align-items:center;gap:8px;padding:0 8px;z-index:4;color:#e8eaed;}
  .il-cbar .il-pill{flex:1;background:#303134;color:#e8eaed;justify-content:flex-start;padding-left:12px;border-radius:16px;}
  .il-cbar .il-shot{top:78px;}
  .il-tabs{width:22px;height:22px;border:2px solid #e8eaed;border-radius:5px;font-size:11px;display:flex;align-items:center;justify-content:center;}
  .il-dots{width:26px;height:34px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;}
  /* 分享選單（iPhone） */
  .il-sheet{position:absolute;left:0;right:0;bottom:0;height:72%;background:#f2f2f6;color:#111;border-radius:16px 16px 0 0;z-index:6;padding:12px 12px 0;box-shadow:0 -10px 30px rgba(0,0,0,.4);}
  .il-sheet-head{display:flex;align-items:center;gap:10px;background:#fff;border-radius:12px;padding:8px 10px;font-size:12px;}
  .il-sheet-head img{width:34px;height:34px;border-radius:8px;}
  .il-apps{display:flex;gap:12px;margin:10px 2px;font-size:10px;text-align:center;color:#444;}
  .il-apps div{width:46px;} .il-apps i{display:block;width:46px;height:46px;border-radius:12px;margin-bottom:4px;}
  .il-list{background:#fff;border-radius:12px;overflow:hidden;font-size:14px;}
  .il-list div{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid #e6e6ea;}
  .il-list div:last-child{border-bottom:none;}
  .il-list span{color:#666;font-size:15px;}
  /* 加入主畫面對話框 */
  .il-addpage{position:absolute;inset:0;background:#f2f2f6;color:#111;z-index:7;}
  .il-addtop{display:flex;justify-content:space-between;align-items:center;padding:40px 14px 10px;font-size:15px;}
  .il-addtop b{font-size:15px;} .il-blue{color:#0a64d8;font-weight:700;}
  .il-addcard{margin:8px 12px;background:#fff;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;}
  .il-addcard img{width:58px;height:58px;border-radius:13px;}
  .il-input{flex:1;border-bottom:1px solid #ddd;padding:6px 2px;font-size:16px;}
  .il-addnote{margin:6px 16px;font-size:11.5px;color:#666;line-height:1.5;}
  /* 主畫面 */
  .il-home{position:absolute;inset:0;background:linear-gradient(160deg,#4f6fae,#7b4d9b 55%,#c26d6d);z-index:8;padding:52px 14px 0;}
  .il-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px 6px;justify-items:center;}
  .il-app{width:54px;text-align:center;font-size:10.5px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.6);}
  .il-app i,.il-app img{display:block;width:54px;height:54px;border-radius:13px;margin-bottom:4px;}
  /* Android 選單、對話框 */
  .il-amenu{position:absolute;right:6px;top:34px;width:190px;background:#2d2e31;color:#e8eaed;border-radius:10px;z-index:6;font-size:13px;padding:6px 0;box-shadow:0 10px 30px rgba(0,0,0,.5);}
  .il-amenu div{padding:8px 14px;}
  .il-dialog{position:absolute;left:12px;right:12px;top:30%;background:#2d2e31;color:#e8eaed;border-radius:18px;z-index:7;padding:18px;box-shadow:0 10px 40px rgba(0,0,0,.6);}
  .il-dialog h4{margin:0 0 14px;font-size:17px;}
  .il-dialog .il-row{display:flex;gap:10px;align-items:center;}
  .il-dialog img{width:44px;height:44px;border-radius:10px;}
  .il-dialog .il-input{color:#e8eaed;border-color:#8ab4f8;}
  .il-btns{display:flex;justify-content:flex-end;gap:22px;margin-top:18px;font-weight:700;color:#8ab4f8;font-size:15px;}
  .il-btns span{padding:4px 6px;}
  /* iPad */
  .il-ipad{position:absolute;left:150px;top:44px;width:500px;height:590px;border-radius:30px;background:#0b0b0d;padding:14px;box-shadow:0 20px 60px rgba(0,0,0,.6),inset 0 0 0 2px #2b2b30;}
  .il-ipad .il-screen{border-radius:18px;}
  .il-itop{position:absolute;left:0;right:0;top:0;height:46px;background:rgba(248,248,250,.97);color:#0a64d8;display:flex;align-items:center;gap:10px;padding:0 10px;z-index:4;font-size:18px;}
  .il-itop .il-pill{flex:1;font-size:12px;}
  .il-ipad .il-shot{top:46px;}
  .il-pop{position:absolute;right:46px;top:52px;width:250px;background:#f2f2f6;color:#111;border-radius:14px;z-index:6;padding:10px;box-shadow:0 12px 40px rgba(0,0,0,.5);}
  .il-ipad .il-home{padding:40px 30px 0;} .il-ipad .il-grid{grid-template-columns:repeat(6,1fr);gap:22px 10px;}
  .il-ipad .il-addpage{left:60px;right:60px;top:90px;bottom:auto;border-radius:16px;padding-bottom:20px;box-shadow:0 12px 40px rgba(0,0,0,.5);}
  .il-ipad .il-addtop{padding-top:14px;}
  /* 電腦 */
  .il-pc{position:absolute;left:40px;top:104px;width:640px;height:560px;border-radius:12px;background:#202124;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.6);}
  .il-tabstrip{height:34px;background:#202124;display:flex;align-items:flex-end;padding-left:10px;}
  .il-tab{height:28px;background:#35363a;border-radius:8px 8px 0 0;padding:0 12px;display:flex;align-items:center;gap:6px;font-size:12px;color:#e8eaed;}
  .il-tab img{width:14px;height:14px;}
  .il-toolbar{height:38px;background:#35363a;display:flex;align-items:center;gap:10px;padding:0 10px;color:#e8eaed;font-size:15px;}
  .il-toolbar .il-pill{flex:1;background:#202124;color:#e8eaed;justify-content:flex-start;padding-left:12px;border-radius:16px;font-size:12px;height:28px;}
  .il-pc .il-shot{top:72px;}
  .il-pcmenu{position:absolute;right:8px;top:70px;width:250px;background:#2d2e31;color:#e8eaed;border-radius:8px;z-index:6;font-size:13px;padding:6px 0;box-shadow:0 10px 30px rgba(0,0,0,.6);}
  .il-pcmenu div{padding:6px 14px;display:flex;justify-content:space-between;}
  .il-pcmenu hr{border:none;border-top:1px solid #45464a;margin:4px 0;}
  .il-sub{position:absolute;right:262px;width:210px;}
  .il-hl{background:#45464a;}
  .il-pcdlg{position:absolute;left:150px;top:120px;width:340px;background:#2d2e31;color:#e8eaed;border-radius:10px;z-index:7;padding:18px;box-shadow:0 10px 40px rgba(0,0,0,.6);font-size:14px;}
  .il-pcdlg h4{margin:0 0 12px;font-size:16px;}
  .il-check{display:flex;align-items:center;gap:8px;margin-top:14px;}
  .il-check i{width:16px;height:16px;border-radius:3px;background:#8ab4f8;color:#202124;font-size:12px;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:900;}
  .il-pbtn{display:flex;justify-content:flex-end;gap:10px;margin-top:18px;}
  .il-pbtn span{padding:6px 16px;border-radius:16px;border:1px solid #5f6368;color:#8ab4f8;}
  .il-pbtn .pri{background:#8ab4f8;color:#202124;border-color:#8ab4f8;font-weight:700;}
  .il-desk{position:absolute;inset:0;background:linear-gradient(135deg,#1e4a8a,#2f7ab8 60%,#6aa6d6);z-index:8;}
  .il-dicons{position:absolute;left:24px;top:20px;display:grid;grid-template-rows:repeat(4,86px);grid-auto-flow:column;gap:6px 18px;}
  .il-dicon{width:72px;text-align:center;font-size:11.5px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.7);}
  .il-dicon i,.il-dicon img{display:block;width:48px;height:48px;margin:0 auto 4px;border-radius:8px;}
  .il-task{position:absolute;left:0;right:0;bottom:0;height:40px;background:rgba(20,24,32,.92);display:flex;align-items:center;justify-content:center;gap:14px;}
  .il-task i,.il-task img{width:26px;height:26px;border-radius:6px;display:block;}
  .il-keys{position:absolute;left:150px;top:200px;display:flex;flex-direction:column;gap:30px;align-items:center;z-index:9;}
  .il-keyrow{display:flex;align-items:center;gap:16px;font-size:26px;font-weight:800;}
  .il-key{min-width:86px;height:70px;padding:0 16px;border-radius:12px;background:#f1ece6;color:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;box-shadow:0 6px 0 #9c8f82;}
  .il-line{position:absolute;left:0;right:0;top:30px;height:44px;background:#fff;color:#111;display:flex;align-items:center;justify-content:space-between;padding:0 12px;z-index:4;font-size:13px;font-weight:700;}
  .il-lmenu{position:absolute;right:8px;top:76px;width:200px;background:#fff;color:#111;border-radius:12px;z-index:6;font-size:13px;box-shadow:0 10px 30px rgba(0,0,0,.4);overflow:hidden;}
  .il-lmenu div{padding:10px 14px;border-bottom:1px solid #eee;}
  `;
  const URL_TXT = 'tw-groups.judystock.workers.dev';
  const ICON = '/icons/apple-touch-icon.png';
  const FAV = '/icons/favicon-32.png';
  const SHARE = '<svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8H4v12h12V8h-3"/><path d="M10 14V2M6 5.5 10 2l4 3.5"/></svg>';
  const ADDSQ = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1.5" y="1.5" width="15" height="15" rx="4"/><path d="M9 5v8M5 9h8"/></svg>';
  const STEPS = {
    iphone: ['用 Safari 打開網站', '點下方「分享」', '點「加入主畫面」', '點右上角「新增」', '主畫面多一個圖示'],
    ipad: ['用 Safari 打開網站', '點網址列右邊「分享」', '點「加入主畫面」', '點「新增」', '主畫面多一個圖示'],
    android: ['用 Chrome 打開網站', '點右上角「⋮」', '點「加到主畫面」', '點「新增」', '桌面多一個圖示'],
    ioschrome: ['用 Chrome 打開網站', '點網址列右邊「分享」', '點「加入主畫面」', '點「新增」', '主畫面多一個圖示'],
    pc: ['用 Chrome 打開網站', '點右上角「⋮」', '「投放、儲存及分享」→「建立捷徑」', '勾「在視窗中開啟」→「建立」', '桌面多一個圖示'],
  };
  const TITLES = { line: ['LINE 開的網頁', '要先改用瀏覽器開'], iphone: ['iPhone', 'Safari'], ioschrome: ['iPhone', 'Chrome'], ipad: ['iPad', 'Safari'], android: ['Android 手機', 'Chrome'], pc: ['電腦', 'Chrome（Edge、Mac 也差不多）'] };
  const apps = (n, extra) => {
    const colors = ['#f59e0b', '#22c55e', '#3b82f6', '#ef4444', '#a855f7', '#14b8a6', '#64748b', '#eab308', '#f97316', '#0ea5e9', '#84cc16', '#ec4899'];
    const names = ['時鐘', '天氣', '相機', '相簿', '日曆', '地圖', '設定', '備忘錄', '計算機', '音樂', '健康', '錢包'];
    let h = '';
    for (let i = 0; i < n; i++) h += '<div class="il-app"><i style="background:' + colors[i % colors.length] + '"></i>' + names[i % names.length] + '</div>';
    return h + (extra || '');
  };
  const ourApp = '<div class="il-app" id="ilIcon"><img src="' + ICON + '">族群強弱</div>';
  function steps(dev, idx){
    return '<div class="il-steps">' + STEPS[dev].map((t, i) => '<div class="il-step' + (i === idx ? ' on' : i < idx ? ' done' : '') + '"><b>' + (i < idx ? '✓' : i + 1) + '</b>' + t + '</div>').join('') + '</div>';
  }
  function title(dev){ return '<div class="il-title">' + TITLES[dev][0] + '<small>' + TITLES[dev][1] + '</small></div>'; }
  const STEP_IDX = { site: 0, share: 1, menu: 1, sheet: 2, add: 3, create: 3, home: 4, desk: 4 };
  function iphone(step){
    let s = '<div class="il-status"><span>13:30</span><span>●●● 5G ▮</span></div><img class="il-shot" src="/__tut/shots/phone.png">' +
      '<div class="il-sbar"><div class="il-pill" id="ilUrl">🔒 ' + URL_TXT + '</div><div class="il-icons"><span>‹</span><span>›</span><span id="ilShare">' + SHARE + '</span><span>📖</span><span>⧉</span></div></div>';
    if (step === 'sheet') s += '<div class="il-sheet"><div class="il-sheet-head"><img src="' + ICON + '"><div><b>台股族群強弱排行</b><br>' + URL_TXT + '</div></div>' +
      '<div class="il-apps"><div><i style="background:#22c55e"></i>訊息</div><div><i style="background:#3b82f6"></i>郵件</div><div><i style="background:#eab308"></i>備忘錄</div><div><i style="background:#a855f7"></i>更多</div></div>' +
      '<div class="il-list"><div>拷貝<span>⧉</span></div><div>加入閱讀列表<span>👓</span></div><div>加入書籤<span>📖</span></div><div>加入喜好項目<span>☆</span></div><div id="ilAddHome">加入主畫面<span>' + ADDSQ + '</span></div><div>尋找頁面內容<span>🔍</span></div></div></div>';
    if (step === 'add') s += '<div class="il-addpage"><div class="il-addtop"><span class="il-blue" style="font-weight:400">取消</span><b>加入主畫面</b><span class="il-blue" id="ilAddBtn">新增</span></div>' +
      '<div class="il-addcard"><img src="' + ICON + '"><div style="flex:1"><div class="il-input">族群強弱</div><div style="font-size:11px;color:#888;margin-top:6px">' + URL_TXT + '</div></div></div>' +
      '<div class="il-addnote">主畫面會加入一個圖像，方便你快速打開這個網站。</div></div>';
    if (step === 'home') s += '<div class="il-home"><div class="il-grid">' + apps(10, ourApp) + '</div></div>';
    return '<div class="il-phone"><div class="il-screen">' + s + '</div></div>';
  }
  function ipad(step){
    let s = '<div class="il-itop"><span>▤</span><span>‹</span><span>›</span><div class="il-pill" id="ilUrl">🔒 ' + URL_TXT + '</div><span id="ilShare">' + SHARE + '</span><span>＋</span><span>⧉</span></div>' +
      '<img class="il-shot" src="/__tut/shots/ipad.png">';
    if (step === 'sheet') s += '<div class="il-pop"><div class="il-sheet-head"><img src="' + ICON + '"><div><b>台股族群強弱排行</b><br>' + URL_TXT + '</div></div>' +
      '<div class="il-list" style="margin-top:10px"><div>拷貝<span>⧉</span></div><div>加入書籤<span>📖</span></div><div>加入喜好項目<span>☆</span></div><div id="ilAddHome">加入主畫面<span>' + ADDSQ + '</span></div><div>尋找頁面內容<span>🔍</span></div></div></div>';
    if (step === 'add') s += '<div class="il-addpage"><div class="il-addtop"><span class="il-blue" style="font-weight:400">取消</span><b>加入主畫面</b><span class="il-blue" id="ilAddBtn">新增</span></div>' +
      '<div class="il-addcard"><img src="' + ICON + '"><div style="flex:1"><div class="il-input">族群強弱</div><div style="font-size:11px;color:#888;margin-top:6px">' + URL_TXT + '</div></div></div></div>';
    if (step === 'home') s += '<div class="il-home"><div class="il-grid">' + apps(16, ourApp) + '</div></div>';
    return '<div class="il-ipad"><div class="il-screen">' + s + '</div></div>';
  }
  function android(step){
    let s = '<div class="il-status"><span>13:30</span><span>▼ 5G ▮</span></div>' +
      '<div class="il-cbar"><span>⌂</span><div class="il-pill" id="ilUrl">' + URL_TXT + '</div><span class="il-tabs">1</span><span class="il-dots" id="ilMenu">⋮</span></div>' +
      '<img class="il-shot" src="/__tut/shots/phone.png" style="top:78px">';
    if (step === 'sheet') s += '<div class="il-amenu"><div>新增分頁</div><div>新增無痕式分頁</div><div>記錄</div><div>下載</div><div>書籤</div><div>分享…</div><div>在網頁中尋找</div><div>翻譯…</div>' +
      '<div id="ilAddHome">加到主畫面</div><div>電腦版網站</div><div>設定</div></div>';
    if (step === 'add') s += '<div class="il-dialog"><h4>加到主畫面</h4><div class="il-row"><img src="' + ICON + '"><div class="il-input">族群強弱</div></div>' +
      '<div class="il-btns"><span>取消</span><span id="ilAddBtn">新增</span></div></div>';
    if (step === 'home') s += '<div class="il-home" style="background:linear-gradient(160deg,#1f4e5f,#2e7d6b 60%,#9ccf8f)"><div class="il-grid">' + apps(10, ourApp) + '</div></div>';
    return '<div class="il-phone"><div class="il-screen">' + s + '</div></div>';
  }
  function ioschrome(){   // iPhone 的 Chrome：分享鈕在網址列右邊（之後的步驟跟 Safari 一樣）
    return '<div class="il-phone"><div class="il-screen"><div class="il-status"><span>13:30</span><span>●●● 5G ▮</span></div>' +
      '<div class="il-cbar" style="background:#f1f3f4;color:#202124"><span>⌂</span><div class="il-pill" id="ilUrl" style="background:#e3e5e8;color:#202124">' + URL_TXT + '</div><span id="ilShare" style="color:#1a73e8">' + SHARE + '</span></div>' +
      '<img class="il-shot" src="/__tut/shots/phone.png" style="top:78px"></div></div>';
  }
  function pc(step){
    let s = '<div class="il-tabstrip"><div class="il-tab"><img src="' + FAV + '">台股族群強弱排行　✕</div></div>' +
      '<div class="il-toolbar"><span>‹</span><span>›</span><span>⟳</span><div class="il-pill" id="ilUrl">🔒 ' + URL_TXT + '</div><span id="ilInstall" title="安裝">⊕</span><span>☆</span><span class="il-dots" id="ilMenu" style="height:28px">' + (step === 'edge' ? '⋯' : '⋮') + '</span></div>' +
      '<img class="il-shot" src="/__tut/shots/pc.png" style="top:72px">';
    if (step === 'sheet' || step === 'edge') {
      const edge = step === 'edge';
      s += '<div class="il-pcmenu">' + (edge
        ? '<div>新增索引標籤</div><div>新增視窗</div><div>新增 InPrivate 視窗</div><hr><div>我的最愛</div><div>歷程記錄</div><div>下載</div><div class="il-hl" id="ilApps">應用程式<span>▸</span></div><div>延伸模組</div><hr><div>列印</div><div>在頁面上尋找</div><div>設定</div>'
        : '<div>新分頁</div><div>新視窗</div><div>新增無痕視窗</div><hr><div>記錄</div><div>下載</div><div>書籤和清單</div><hr><div>縮放</div><div>列印…</div><div>搜尋這個頁面…</div><div>翻譯…</div><div class="il-hl" id="ilCast">投放、儲存及分享<span>▸</span></div><hr><div>設定</div>') + '</div>' +
        '<div class="il-pcmenu il-sub" style="top:' + (edge ? 262 : 400) + 'px">' + (edge
          ? '<div id="ilShortcut">將此網站安裝為應用程式</div><div>管理應用程式</div>'
          : '<div>安裝頁面為應用程式…</div><div id="ilShortcut">建立捷徑…</div><hr><div>投放…</div><div>另存網頁為…</div><div>複製連結</div>') + '</div>';
    }
    if (step === 'create') s += '<div class="il-pcdlg"><h4>建立捷徑？</h4><div style="display:flex;gap:10px;align-items:center"><img src="' + ICON + '" style="width:40px;height:40px;border-radius:8px"><div class="il-input" style="color:#e8eaed;border-color:#8ab4f8">族群強弱</div></div>' +
      '<div class="il-check" id="ilWindow"><i>✓</i>在視窗中開啟</div><div class="il-pbtn"><span class="pri" id="ilCreate">建立</span><span>取消</span></div></div>';
    if (step === 'keys') s += '<div class="il-desk" style="background:rgba(10,8,6,.82)"></div><div class="il-keys" id="ilKeys"><div class="il-keyrow">Windows<span class="il-key">Ctrl</span>＋<span class="il-key">D</span></div>' +
      '<div class="il-keyrow">Mac<span class="il-key">⌘</span>＋<span class="il-key">D</span></div></div>';
    if (step === 'desk') s += '<div class="il-desk"><div class="il-dicons"><div class="il-dicon"><i style="background:#94a3b8"></i>文件</div><div class="il-dicon"><i style="background:#f59e0b"></i>相片</div>' +
      '<div class="il-dicon"><i style="background:#22c55e"></i>試算表</div><div class="il-dicon" id="ilIcon"><img src="' + ICON + '">族群強弱</div></div>' +
      '<div class="il-task"><i style="background:#3b82f6"></i><i style="background:#f59e0b"></i><i style="background:#22c55e"></i><img id="ilTask" src="' + ICON + '"></div></div>';
    return '<div class="il-pc">' + s + '</div>';
  }
  function line(){
    return '<div class="il-phone"><div class="il-screen"><div class="il-status" style="color:#111;background:#fff"><span>13:30</span><span>●●● 5G ▮</span></div>' +
      '<div class="il-line"><span>✕</span><span>台股族群強弱排行</span><span id="ilMenu" style="font-size:20px">⋯</span></div>' +
      '<img class="il-shot" src="/__tut/shots/phone.png" style="top:74px">' +
      '<div class="il-lmenu"><div>分享</div><div>複製連結</div><div id="ilOpen">用瀏覽器開啟</div><div>重新整理</div></div></div></div>';
  }
  window.tutIllus = (dev, step) => {
    let el = document.getElementById('tutIllus');
    if (!dev){ if (el) el.remove(); return; }
    if (!document.getElementById('tutIllusCss')){ const st = document.createElement('style'); st.id = 'tutIllusCss'; st.textContent = CSS; document.head.appendChild(st); }
    if (!el){ el = document.createElement('div'); el.id = 'tutIllus'; document.body.appendChild(el); }
    const devKey = dev;
    const idx = (dev === 'line' || step === 'edge' || step === 'keys') ? -1 : (STEP_IDX[step] ?? 0);
    const body = dev === 'iphone' ? iphone(step) : dev === 'ioschrome' ? ioschrome() : dev === 'ipad' ? ipad(step) : dev === 'android' ? android(step) : dev === 'pc' ? pc(step) : line();
    let note = '';
    if (dev === 'line') note = '<div class="il-note big">從 LINE 點連結進來的，網頁開在 LINE 裡面，沒辦法加到主畫面：先點右上角「⋯」，選「用瀏覽器開啟」，再照前面的步驟做。</div>';
    if (step === 'edge') note = '<div class="il-note big">Edge：右上角「⋯」→「應用程式」→「將此網站安裝為應用程式」。</div>';
    if (step === 'keys') note = '<div class="il-note big">只想存書籤：按 Ctrl＋D（Mac 是 ⌘＋D），存到書籤列，下次點書籤就開。</div>';
    el.innerHTML = title(devKey) + body + (idx >= 0 ? steps(devKey, idx) : '') + note;
  };
})();
