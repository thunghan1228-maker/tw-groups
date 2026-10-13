"""教學影片內容（2026-10-13 使用者：訊號教學的文字之外，每個功能一支影音教學）。

每支：key（檔名）、title、section（清單分組）、tab（對應的訊號中心分頁，訊號教學裡的「▶ 看影片」用）、scenes。
每段 scene：
  say    旁白（女聲唸的，照「? 訊號教學」的規則寫；規則改了兩邊一起改）
  cap    字幕（畫面下方大字，比旁白短，抓重點）
  tab    先切到訊號中心這個分頁（signalCenterState.activeTab）
  eval   先在網頁裡執行這段 JS
  click  先點這個元素（CSS 選擇器）
  scroll 捲到這個元素
  target 紅框框住這個元素（沒有就不框）
  settle 動作後等幾毫秒再上字幕（預設 900）
"""

SC = "盤中訊號中心"
ROW = "#signalBody .signal-row:not(.signal-col-labels)"
LABELS = "#signalBody .signal-col-labels"
TAB = '#signalTabsBar .signal-tab[data-kind="{}"]'

VIDEOS = [
    {
        "key": "sc-overview", "title": "盤中訊號中心怎麼用", "section": SC, "tab": None,
        "scenes": [
            {"say": "首頁右上角紫色的盤中訊號，可以打開盤中訊號中心，旁邊的數字是今天的訊號總數。",
             "cap": "右上角「盤中訊號」：打開盤中訊號中心", "eval": "closeSignalCenter(); window.scrollTo(0,0)", "target": "#signalBadgeBtn"},
            {"say": "上面這一排是各種訊號的分頁。紅色字偏多，綠色字偏空，紫色字是選股和綜合的名單；分頁旁邊的數字是目前的檔數或筆數。",
             "cap": "紅色＝偏多、綠色＝偏空、紫色＝選股和綜合名單", "tab": "now", "target": "#signalTabsBar", "settle": 2200},
            {"say": "每個分頁的詳細規則，按訊號教學可以看文字說明；按影片教學，就是現在看的這種影片。",
             "cap": "「? 訊號教學」看文字、「🎬 影片教學」看影片", "target": "#smHelp"},
            {"say": "按全螢幕可以把視窗放大到整個畫面。拉住標題可以移動視窗，四邊和四角都可以拉大縮小。",
             "cap": "「全螢幕」放大；拉標題移動、拉四邊四角改大小", "target": "#smMaximize"},
            {"say": "很多分頁上面有今天、昨天、前天，可以回頭看前兩個交易日的訊號，成交價和漲跌幅會換成那一天的收盤。",
             "cap": "今天／昨天／前天：回頭看前兩個交易日", "target": "#signalBody .combo-filter-bar"},
            {"say": "點任何一列股票，就會打開那一檔的K線圖，看完關掉就回到訊號中心。",
             "cap": "點一列股票 → 打開K線圖", "target": ROW},
            {"say": "示範一下，點了以後會跳出K線圖。", "cap": "點了以後跳出K線圖",
             "eval": "(() => { const r = document.querySelector('#signalBody .signal-row[data-code]:not(.signal-col-labels)'); if (r) r.click(); })()", "settle": 3500},
            {"say": "按右上角的叉叉關掉，就回到訊號中心。", "cap": "關掉K線圖回到訊號中心",
             "eval": "(() => { try { closeStockChart(); } catch (_) { const b = document.querySelector('#chartModal .cm-close, #chartClose'); if (b) b.click(); } })()", "settle": 1200},
        ],
    },
    {
        "key": "sc-now", "title": "今日即時多／今日即時空", "section": SC, "tab": "now",
        "scenes": [
            {"say": "今日即時多，把所有偏多的訊號集中在一頁。", "cap": "今日即時多：偏多的訊號集中在一頁", "tab": "now", "target": TAB.format("now"), "settle": 2500},
            {"say": "最上面這一塊是盤中大戶力多：今天累計大單淨買超過五百張的股票。第一欄是第一次進名單的時間，早進的在上面，新進的往下排；大戶力超過百分之十是紅底。",
             "cap": "最上面：盤中大戶力多（早進名單的在上面）", "target": "#signalBody .now-bull-holder"},
            {"say": "下面是其他偏多的訊號，像四項精選強多、主力翻多、盤中特大買單、發動、今日強勢股，依照發生的時間排，最新的在最上面。",
             "cap": "下面：其他偏多訊號，最新的在最上面", "scroll": "#signalBody .now-bull-holder ~ .signal-col-labels", "target": "#signalBody .now-bull-holder ~ .signal-col-labels"},
            {"say": "每一列從左到右是時間、股票、族群、均線分數、訊號名稱、盤中大戶力、漲跌幅、漲跌和成交價。漲停的漲跌幅是紅底白字，跌停是綠底白字。",
             "cap": "時間、股票、族群、均線分數、訊號、大戶力、漲跌幅…", "target": "#signalBody .now-bull-holder ~ .signal-list .signal-row"},
            {"say": "今日即時空是偏空的訊號，最上面是刀劍空的即時名單，早出現的在上面。",
             "cap": "今日即時空：偏空訊號，最上面是刀劍空", "tab": "nowBear", "target": "#signalBody .now-bear-blade", "settle": 2500},
            {"say": "刀劍空下面是盤中大戶力空、四項精選強空、主力翻空、盤中特大賣單，一樣依照時間排，最新的在上面。",
             "cap": "下面：其他偏空訊號，最新的在最上面", "scroll": "#signalBody .now-bear-blade ~ .signal-col-labels", "target": "#signalBody .now-bear-blade ~ .signal-col-labels"},
            {"say": "整頁最下面是多方打少和收割區域，只列名字，參考就好。",
             "cap": "最下面：多方打少、收割區域（只列名字）", "scroll": "#signalBody .now-bear-notes", "target": "#signalBody .now-bear-notes"},
        ],
    },
    {
        "key": "sc-strong", "title": "今日強勢股／今日弱勢股", "section": SC, "tab": "strongStocks",
        "scenes": [
            {"say": "今日強勢股，挑的是族群分數前十大的族群裡，均線分數十二分以上的股票。族群分數就是族群裡每一檔均線分數的平均。",
             "cap": "族群分數前十大裡、均線分數 ≥12 的股票", "tab": "strongStocks", "target": TAB.format("strongStocks"), "settle": 2500},
            {"say": "每一組標出族群的名次和平均分數；後面有星星，代表這個族群今天也有股票出現在形態觀察股。",
             "cap": "族群名次、平均分數；⭐＝也在形態觀察股", "target": "#signalBody .st-ghead"},
            {"say": "第一欄時間，是這一次盤中大戶力站上百分之十的時間；還沒站上的寫一槓。均線分數是昨天收盤算好的，現價和大戶力是即時的。",
             "cap": "時間＝這一次大戶力站上 +10% 的時間", "target": "#signalBody .signal-col-labels.st-row"},
            {"say": "按盤中大戶力大於等於百分之十，只看大戶正在買的股票；再按一次就全部顯示。",
             "cap": "「盤中大戶力 ≥ +10%」：只看大戶在買的", "click": "#signalBody .st-hf-btn", "target": "#signalBody .st-hf-btn", "settle": 1500},
            {"say": "今日弱勢股是倒過來，族群分數倒數十名、均線分數三分以下的股票；可以按大戶力小於等於負百分之十，只看大戶在賣的。",
             "cap": "今日弱勢股：倒數十名族群、均線分數 ≤3", "eval": "(() => { const b = document.querySelector('#signalBody .st-hf-btn.active'); if (b) b.click(); })()",
             "tab": "weakStocks", "target": TAB.format("weakStocks"), "settle": 2500},
        ],
    },
    {
        "key": "sc-ghf", "title": "十大多族群／十大空族群", "section": SC, "tab": "groupHolderBull",
        "scenes": [
            {"say": "十大多族群：今天漲幅前十大的族群，每個族群挑盤中大戶力最強的前五檔股票。",
             "cap": "漲幅前十大族群，各挑大戶力最強的前 5 檔", "tab": "groupHolderBull", "target": TAB.format("groupHolderBull"), "settle": 2500},
            {"say": "一個族群一塊，標出族群名次和今天的平均漲幅，下面是大戶力最強的股票。",
             "cap": "一個族群一塊：名次、平均漲幅、大戶力最強的股票", "target": "#signalBody .race-block"},
            {"say": "按大戶力大於等於百分之十，只留大戶力夠強的股票。",
             "cap": "「大戶力≥10%」：只留大戶力夠強的", "target": "#signalBody .hf-filter-btn"},
            {"say": "十大空族群倒過來：今天跌幅前十大的族群，各挑大戶力最負、也就是大戶在賣的前五檔。",
             "cap": "十大空族群：跌幅前十大，各挑大戶在賣的前 5 檔", "tab": "groupHolderBear", "target": TAB.format("groupHolderBear"), "settle": 2500},
        ],
    },
    {
        "key": "sc-bigorder", "title": "盤中特大買單／特大賣單", "section": SC, "tab": "bigBuy",
        "scenes": [
            {"say": "盤中特大買單：同一秒內大單連續買進，合計一百張以上、或三千萬以上，而且大戶力也偏買，才會出現。合計三百張或五千萬以上，標瞬間特大。",
             "cap": "同一秒大單連續買進：≥100 張或 ≥3,000 萬", "tab": "bigBuy", "target": TAB.format("bigBuy"), "settle": 2500},
            {"say": "訊號很多的時候，用上面的篩選按鈕：只看特大單、金額一億以上、族群前十名，或每檔只留最大一筆、最新一筆，可以同時開好幾個。",
             "cap": "篩選：只看特大單、金額≥1億、族群前10名…", "target": "#signalBody .bigorder-filter-btn"},
            {"say": "每一列下面一行，寫同一秒幾筆、合計多少張、大約多少金額、成交價範圍，還有這個族群今天的名次。",
             "cap": "第二行：同秒幾筆、合計張數、金額、族群名次", "target": "#signalBody .sig-note"},
            {"say": "盤中特大賣單是反過來，大單連續賣出。", "cap": "特大賣單：大單連續賣出",
             "tab": "bigSell", "target": TAB.format("bigSell"), "settle": 2500},
        ],
    },
    {
        "key": "sc-holder", "title": "盤中大戶力多／大戶力空", "section": SC, "tab": "bigHolderForceBull",
        "scenes": [
            {"say": "盤中大戶力多：今天開盤到現在，累計大單淨買超過五百張的股票。大單是單筆二十張以上的成交。",
             "cap": "累計大單淨買 ≥ 500 張（大單＝單筆 ≥20 張）", "tab": "bigHolderForceBull", "target": TAB.format("bigHolderForceBull"), "settle": 2500},
            {"say": "第一欄是第一次進名單的時間，最新進名單的在最上面。", "cap": "第一欄：第一次進名單的時間", "target": LABELS},
            {"say": "盤中大戶力的百分比，是大單買進金額減掉賣出金額，再除以今天的累計成交金額。超過百分之十是紅底；到偏買或強力買進的門檻，會直接寫出來。",
             "cap": "大戶力％＝大單買賣金額差 ÷ 累計成交額", "target": ROW + " .sig-label"},
            {"say": "第二行小字寫累計淨買幾張、大約多少錢、今天最高到多少，還有能不能融資融券、當沖。",
             "cap": "第二行：累計淨買張數、金額、今天最高", "target": "#signalBody .sig-note"},
            {"say": "早上進過名單、後來賣回去掉出名單的，列在最下面的曾進名單。",
             "cap": "最下面：曾進名單、後來掉出去的", "scroll": "#signalBody .hf-faded-head", "target": "#signalBody .hf-faded-head"},
            {"say": "盤中大戶力空就是反過來，累計大單淨賣超過五百張的股票。",
             "cap": "大戶力空：累計大單淨賣 ≥ 500 張", "tab": "bigHolderForceBear", "target": TAB.format("bigHolderForceBear"), "settle": 2500},
        ],
    },
    {
        "key": "sc-fourgate", "title": "四項精選強多／強空", "section": SC, "tab": "fourGateBuy",
        "scenes": [
            {"say": "四項精選強多，要四個條件同時成立才會出現，所以數量不多，但很精準。",
             "cap": "四個條件同時成立才出現", "tab": "fourGateBuy", "target": TAB.format("fourGateBuy"), "settle": 2500},
            {"say": "第一，分時資金強度：盤中累計大單買進金額，達到昨天大單淨買超的一定比例，越晚門檻越高，昨天淨買超也要超過一億。第二，主力淨額比：這一分鐘大單淨額比例超過正百分之五十，而且前一分鐘也是買方。",
             "cap": "①分時資金強度 ②主力淨額比 ≥ +50%"},
            {"say": "第三，現價站上平均成本線 VWAP。第四，突破開盤前五分鐘K棒的高點。同一檔股票一天只提示一次，時間是九點到一點半。",
             "cap": "③站上 VWAP ④突破開盤前 5 分鐘高點"},
            {"say": "四項精選強空就是反過來：大單賣出、淨額比負百分之五十、跌破 VWAP、跌破開盤前五分鐘的低點。",
             "cap": "強空：四個條件反過來", "tab": "fourGateSell", "target": TAB.format("fourGateSell"), "settle": 2500},
        ],
    },
    {
        "key": "sc-flip", "title": "主力翻多／主力翻空", "section": SC, "tab": "mainForceFlipBull",
        "scenes": [
            {"say": "主力翻多：每一根一分鐘K棒收完就檢查一次，四個條件都成立才出現。",
             "cap": "每根 1 分K收完檢查，四個條件都要成立", "tab": "mainForceFlipBull", "target": TAB.format("mainForceFlipBull"), "settle": 2500},
            {"say": "第一，今天主力累計淨額由負翻正。第二，一分鐘K棒收盤站上 VWAP，這兩件事要在五分鐘內一起發生。第三，累計淨額除以大單總張數，達到正百分之二十。第四，今天的量換算成整天，是前五天平均的一點五倍以上。",
             "cap": "①主力累計翻正 ②站上VWAP ③淨額率≥20% ④量比≥1.5倍"},
            {"say": "淨額率和量比都達到強勢門檻，會標強勢。每一檔每天多空各一次，明細寫零軸和 VWAP 穿越的時間、淨額率、量比。",
             "cap": "淨額率≥40%、量比≥3倍標「強勢」", "target": ROW},
            {"say": "主力翻空是反過來：主力累計由正翻負、跌破 VWAP。", "cap": "主力翻空：累計翻負、跌破 VWAP",
             "tab": "mainForceFlipBear", "target": TAB.format("mainForceFlipBear"), "settle": 2500},
        ],
    },
    {
        "key": "sc-obs", "title": "形態觀察股", "section": SC, "tab": "obsWatch",
        "scenes": [
            {"say": "形態觀察股：五十五個族群裡，最近十個交易日被創高黑龍選過至少兩次、均線分數十五分的股票，用即時報價分成五類。",
             "cap": "近 10 天黑龍 ≥2 次、均線分數 15 的股票，分五類", "tab": "obsWatch", "target": TAB.format("obsWatch"), "settle": 3500},
            {"say": "第一類黑K出現，黑龍系統符合，可以小量布局；第二類今天噴出，等黑再加碼；第三類已經噴在高檔，等黑；第四類右肩打底，觀察分批；第五類跌比較深，慢慢來。",
             "cap": "【1】黑K出現 【2】今天噴出 【3】已噴高檔 【4】右肩打底 【5】有點深", "target": "#signalBody .obs-panel"},
            {"say": "上面可以切昨天、前天，看那天收盤的選股結果，也可以按複製文字。盤中會在固定時間自動跳出來提醒。",
             "cap": "昨天／前天、複製文字；盤中定時自動跳出", "target": "#signalBody [data-obs-day]"},
        ],
    },
    {
        "key": "sc-launch", "title": "發動", "section": SC, "tab": "launchOnly",
        "scenes": [
            {"say": "發動是老師選股法的第二步，突破。盤中即時判斷三個條件：價格衝過箱頂，也就是近十天最高價；均線分數大於十；周轉率五趴以上，或量是五日均量的一點五倍。",
             "cap": "過箱頂（近10天最高）＋均線分數>10＋周轉高", "tab": "launchOnly", "target": TAB.format("launchOnly"), "settle": 3000},
            {"say": "上面是現在還站在箱頂上的發動，最新發動的在最上面。發動過、又跌回箱頂下的，列在下面的曾發動。",
             "cap": "發動中在上；跌回箱頂下的列「曾發動」", "target": "#signalBody .bl-section"},
            {"say": "按盤中大戶力大於等於百分之十，只看大戶力夠強的；沒過的不會消失，會列在其他發動中，並寫出原因。",
             "cap": "「盤中大戶力≥10%」：沒過的列在「其他發動中」", "target": "#signalBody .brew-hf-btn"},
            {"say": "有新的發動時，畫面會跳出提醒卡片，列出今天全部發動過的股票，剛發動的標新。",
             "cap": "新發動會跳提醒，列出今天全部發動過的", "target": "#signalBody .bl-day-bar"},
        ],
    },
    {
        "key": "sc-brew", "title": "醞釀", "section": SC, "tab": "brewOnly",
        "scenes": [
            {"say": "醞釀是老師選股法的第一步，整理形態，用前一個交易日收盤來算。條件是均線分數十分以上、收盤站上月線、近十天最高到最低相差兩成以內，五日、十日、二十日均線糾結在百分之四以內。",
             "cap": "均線分數≥10、站上月線、箱子≤20%、均線糾結≤4%", "tab": "brewOnly", "target": TAB.format("brewOnly"), "settle": 3000},
            {"say": "一個族群一塊，同族群照均線分數排，星號是族群裡分數最高的；距箱頂寫還差多少才突破。",
             "cap": "同族群照均線分數排；「距箱頂」＝還差多少突破", "target": "#signalBody .bl-block"},
            {"say": "醞釀的股票壓力多，但突破會很強，適合不盯盤，每天買一點分批加碼，站穩月線快突破時再積極加碼。",
             "cap": "適合不盯盤、分批加碼；快突破再積極"},
        ],
    },
    {
        "key": "sc-race333", "title": "盤中333", "section": SC, "tab": "race333",
        "scenes": [
            {"say": "盤中三三三，是馬火多、賽馬多、河流多這幾個多方條件篩出來的名單。",
             "cap": "馬火多(30)、賽馬多(33)、河流多(34)", "tab": "race333", "target": TAB.format("race333"), "settle": 3000},
            {"say": "最上面的續抱勿追高，是賽馬多裡已經漲超過百分之七的，不是進場名單，已經漲多了；這一區早出現的在上面。",
             "cap": "續抱勿追高：漲超過 7%，不追", "target": "#signalBody .race-block"},
            {"say": "下面依序是三邊都有的、賽馬多加河流多、賽馬多、河流多、馬火多。每一列最前面是第一次進這個名單的時間，新出現的在上面；名次欄是盤中大戶力的排名。",
             "cap": "出現時間（新的在上）；名次＝大戶力排名", "scroll": "#signalBody .race-block ~ .race-block", "target": "#signalBody .race-block ~ .race-block .race-col-labels"},
            {"say": "每一列下面一行列出門檻：族群排名、族內排名、距櫃買、昨天和前天的漲跌。上面的按鈕可以只看大戶力大於等於百分之十，或小於等於負百分之十。",
             "cap": "第二行：族排、族內、距櫃買、昨／前天％", "target": "#signalBody .race333-filter-btn"},
        ],
    },
    {
        "key": "sc-board", "title": "所有族群綜合表", "section": SC, "tab": "groupCombinedBoard",
        "scenes": [
            {"say": "所有族群綜合表，一個族群一個表格，把盤中大戶力跟處置、注意的狀態放在一起看。",
             "cap": "一個族群一個表：大戶力＋處置／注意", "tab": "groupCombinedBoard", "target": TAB.format("groupCombinedBoard"), "settle": 3000},
            {"say": "只列出大戶力大於等於正百分之十、或小於等於負百分之十，或是有處置、注意資料的股票。處置中是官方處置股，藍色注意股是交易所公布的注意股。",
             "cap": "只列大戶力 ≥+10% 或 ≤−10%、或處置／注意的", "target": "#signalBody .combo-table"},
        ],
    },
    {
        "key": "sc-combo12", "title": "1+2多", "section": SC, "tab": "combo12Bull",
        "scenes": [
            {"say": "一加二多：五分鐘K棒收盤，同時站上九零五高，也就是開盤第一根五分K的最高價，和昨天的最高價，就成立。一天一次，沒有時間限制。",
             "cap": "5分K收盤同時站上「905高」和昨日最高", "tab": "combo12Bull", "target": TAB.format("combo12Bull"), "settle": 2500},
            {"say": "每一列是成立的時間和股票，點一下可以打開K線圖確認。", "cap": "點一列打開K線圖確認", "target": ROW},
        ],
    },
    {
        "key": "sc-dragon", "title": "創高黑龍", "section": SC, "tab": "blackDragon",
        "scenes": [
            {"say": "創高黑龍：五分鐘K棒的最高價，突破前五個交易日的最高價，但這根收盤低於今天開盤價，而且均線分數十分以上。九點到一點半都算，一天一次。",
             "cap": "5分K創前5日新高、但收盤低於開盤（收黑）", "tab": "blackDragon", "target": TAB.format("blackDragon"), "settle": 2500},
            {"say": "每一列後面標一二三黑龍：圈圈裡的數字是這一波第幾次進場；紅色區一可以積極加碼，黃色區二等突破再加碼。K線圖的日線，也會在進場那根K棒上畫同樣的圈圈。",
             "cap": "①②③＝這一波第幾次進場；區1紅、區2黃", "target": ROW},
        ],
    },
    {
        "key": "sc-blade", "title": "刀劍空(32)", "section": SC, "tab": "bladeShort",
        "scenes": [
            {"say": "刀劍空是馬火多的鏡像，抓弱勢股：今天下跌、族群排名後半、族內後三分之一、不比櫃買強，而且現價低於前天收盤。",
             "cap": "今天跌、族群後半、族內後1/3、低於前天收盤", "tab": "bladeShort", "target": TAB.format("bladeShort"), "settle": 3000},
            {"say": "劍的符號是低於前天收盤，數字是低多少；刀是低於昨收。正式名單最多十檔，大戶力最負的在上面。",
             "cap": "⚔️劍＝低於前天收盤、🔪刀＝低於昨收", "target": "#signalBody .race-col-labels"},
            {"say": "每一列第一欄是第一次進名單的時間，第二行左邊標能不能融券、當沖，做空先確認這個。",
             "cap": "出現時間；第二行：能不能融券、當沖", "target": "#signalBody .race-row"},
            {"say": "多方打少和收割區域，已經跌超過百分之五的，不追空，只列名字。",
             "cap": "收割區域（已跌 5% 以上）不追空", "scroll": "#signalBody .race-note:last-child"},
        ],
    },
    {
        "key": "sc-history", "title": "歷史查詢", "section": SC, "tab": "history",
        "scenes": [
            {"say": "歷史查詢可以選一個日期，看那一天的訊號紀錄。", "cap": "選日期，看那一天的訊號紀錄",
             "tab": "history", "target": "#signalHistoryDate", "settle": 3000},
            {"say": "如果只是要看昨天或前天，很多分頁上面就有今天、昨天、前天可以直接切，成交價和漲跌幅會換成那一天的收盤。",
             "cap": "看昨天、前天：各分頁上方直接切", "tab": "fourGateBuy", "target": "#signalBody .combo-filter-bar", "settle": 2000},
        ],
    },
]
