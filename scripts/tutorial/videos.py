"""教學影片內容（2026-10-13 使用者：訊號教學的文字之外，每個功能一支影音教學）。

每支：key（檔名）、title、section（清單分組）、tab（對應的訊號中心分頁，訊號教學裡的「▶ 看影片」用）、scenes。
每段 scene：
  say    旁白（女聲唸的，照「? 訊號教學」的規則寫；規則改了兩邊一起改）
  cap    字幕（畫面下方大字，比旁白短，抓重點）
  tab    先切到訊號中心這個分頁（signalCenterState.activeTab）
  eval   先在網頁裡執行這段 JS
  clickPick 先點這個元素（JS 運算式，回傳元素；例如 __tutFind('#swingModal .chart-tab', '籌碼面')）
  click  先點這個元素（CSS 選擇器）
  pick   紅框框住這個元素（JS 運算式，回傳元素，會捲過去）
  scroll 捲到這個元素
  target 紅框框住這個元素（沒有就不框）
  settle 動作後等幾毫秒再上字幕（預設 900）
__tutFind(sel, text)：sel 裡面看得到、文字含 text 的元素，取文字最短的（record.js 注入）。
"""

SC = "盤中訊號中心"
ROW = "#signalBody .signal-row:not(.signal-col-labels)"
LABELS = "#signalBody .signal-col-labels"
TAB = '#signalTabsBar .signal-tab[data-kind="{}"]'

TB = "下方工具列"
CLOSE_ALL = "document.querySelectorAll('.chips-modal').forEach((m) => { m.hidden = true; }); try { closeSignalCenter(); } catch (_) {} window.scrollTo(0, 0)"


def tb_btn(label: str) -> str:
    return f'.toolbar-bottom .tb-btn[data-label="{label}"]'


def tb_intro(label: str, say: str, cap: str) -> dict:
    """第一段：關掉所有視窗，紅框框住下方工具列那顆按鈕。"""
    return {"say": say, "cap": cap, "eval": CLOSE_ALL, "target": tb_btn(label), "settle": 1200}


def tb_open(fn: str, say: str, cap: str, settle: int = 5000, **kw) -> dict:
    """第二段：打開面板（跟按下工具列那顆一樣）。"""
    return {"say": say, "cap": cap, "eval": f"{CLOSE_ALL}; {fn}()", "settle": settle, **kw}


def find(sel: str, text: str) -> str:
    return f"__tutFind({sel!r}, {text!r})"


def visible(sel: str) -> str:
    return f"[...document.querySelectorAll({sel!r})].find((e) => e.offsetParent !== null)"

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
             "eval": "(() => { try { while (chartWindows.size && closeTopChartWindow()) {} } catch (_) {} try { closeStockChart(); } catch (_) {} })()", "settle": 1200},
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
            {"say": "每一組標出族群的名次和平均分數；後面有星星，代表這個族群今天也有股票出現在盤中形態觀察股。",
             "cap": "族群名次、平均分數；⭐＝也在盤中形態觀察股", "target": "#signalBody .st-ghead"},
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
             "cap": "篩選：只看特大單、金額≥1億、族群前10名…", "pick": "document.querySelector('#signalBody .bigorder-filter-btn').parentElement"},
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
             "cap": "大戶力％＝大單買賣金額差 ÷ 累計成交額", "target": ROW + " .sig-hold"},
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
             "cap": "①分時資金強度 ②主力淨額比 ≥ +50%", "target": "#signalBody .sig-note"},
            {"say": "第三，現價站上平均成本線 VWAP。第四，突破開盤前五分鐘K棒的高點。同一檔股票一天只提示一次，時間是九點到一點半。",
             "cap": "③站上 VWAP ④突破開盤前 5 分鐘高點", "target": "#signalBody .sig-note"},
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
             "cap": "①主力累計翻正 ②站上VWAP ③淨額率≥20% ④量比≥1.5倍", "target": "#signalBody .sig-note"},
            {"say": "淨額率和量比都達到強勢門檻，會標強勢。每一檔每天多空各一次，明細寫零軸和 VWAP 穿越的時間、淨額率、量比。",
             "cap": "淨額率≥40%、量比≥3倍標「強勢」", "target": ROW},
            {"say": "主力翻空是反過來：主力累計由正翻負、跌破 VWAP。", "cap": "主力翻空：累計翻負、跌破 VWAP",
             "tab": "mainForceFlipBear", "target": TAB.format("mainForceFlipBear"), "settle": 2500},
        ],
    },
    {
        "key": "sc-obs", "title": "盤中形態觀察股", "section": SC, "tab": "obsWatch",
        "scenes": [
            {"say": "盤中形態觀察股：五十五個族群裡，最近十個交易日被創高黑龍選過至少兩次、均線分數十五分的股票，用即時報價分成五類。",
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
             "cap": "出現時間（新的在上）；名次＝大戶力排名", "pick": "document.querySelector('#signalBody .race-block ~ .race-block .race-col-labels')"},
            {"say": "每一列下面一行列出門檻：族群排名、族內排名、距櫃買、昨天和前天的漲跌。上面的按鈕可以只看大戶力大於等於百分之十，或小於等於負百分之十。",
             "cap": "第二行：族排、族內、距櫃買、昨／前天％", "pick": "document.querySelector('#signalBody .race-block ~ .race-block .race-row')"},
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
             "cap": "⚔️劍＝低於前天收盤、🔪刀＝低於昨收", "pick": "document.querySelector('#signalBody .race-col-labels')"},
            {"say": "每一列第一欄是第一次進名單的時間，第二行左邊標能不能融券、當沖，做空先確認這個。",
             "cap": "出現時間；第二行：能不能融券、當沖", "pick": "document.querySelector('#signalBody .race-row')"},
            {"say": "多方打少和收割區域，已經跌超過百分之五的，不追空，只列名字。",
             "cap": "收割區域（已跌 5% 以上）不追空", "pick": "document.querySelector('#signalBody .race-note:last-child')"},
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

# 下方工具列 15 顆（2026-10-13 使用者：接著做下方工具列的影片）；旁白照各面板上方的說明、新手教學 GUIDE_TOOLS 寫
VIDEOS += [
    {
        "key": "tb-homework", "title": "每日功課", "section": TB, "tab": None,
        "scenes": [
            tb_intro("每日功課", "下方工具列的每日功課，是系統自動幫你做好的盯盤功課。", "下方工具列「每日功課」：自動做好的盯盤功課"),
            tb_open("openHomeworkPanel", "裡面有四個分頁：空觀察、當沖多、多觀察和盤中形態觀察股。系統自己把刀劍空、即將入獄、出獄、賽馬多、河流多、馬火多、族群名次這幾份清單交叉比對，只留下該盯的那幾檔，盤中每二十秒跟著首頁報價重算。",
                    "四份功課：自動交叉比對清單，盤中每 20 秒重算", target="#hwBody .hw-tabs"),
            {"say": "空觀察是做空的功課：刀劍空、即將入獄、今天出獄、做空族群，同一檔出現在越多份清單，排越前面。族群後面的數字是今天的族群名次，有新手符號的，族群排越後面越安全；紅色三角形代表族群還很強，慢一點再打。",
             "cap": "空觀察：重疊越多份越優先；🔰越後面越安全、🔺族群還強", "click": '#hwBody [data-hw-tab="short"]', "target": "#hwBody .sw-rule", "settle": 1500},
            {"say": "當沖多交叉賽馬多、河流多、馬火多，三份都有的標星星，中兩份的標火。族群要在多方區，也就是今天排名前半、平均上漲，同族群至少兩檔才成立，漲停的不列。",
             "cap": "當沖多：賽馬、河流、馬火交叉；⭐三份都有、🔥中兩份", "click": '#hwBody [data-hw-tab="long"]', "target": "#hwBody .sw-rule", "settle": 1500},
            {"say": "上面的按鈕可以只看漲二到六趴的進場帶、只看均線分數七分以上，或把漲超過七趴、六趴的藏起來。",
             "cap": "篩選：2～6% 進場帶、均線 ≥7、過 7%／6% 不追", "target": "#hwBody .hw-flts"},
            {"say": "多觀察挑三個重點族群，預設是今天族群排名前三，也可以自己換。每一檔標出在族群裡是多方還是空方，再對照三日低和月線，看有沒有跌破防守價。",
             "cap": "多觀察：挑 3 個族群，對照三日低／月線防守價", "click": '#hwBody [data-hw-tab="watch"]', "target": "#hwBody .hw-picks", "settle": 3000},
            {"say": "族群那一列會標打法：平均漲三趴以上是噴出等黑，零到三趴是收盤分批買黑，下跌就是拉回分批買黑。",
             "cap": "🔥噴出等黑・🛒收盤分批買黑・🛒拉回分批買黑", "target": "#hwBody .hw-ghead"},
            {"say": "盤中形態觀察股跟盤中訊號中心裡的是同一份，分成五類，訊號中心的影片有詳細介紹。",
             "cap": "盤中形態觀察股：跟訊號中心同一份", "click": '#hwBody [data-hw-tab="obs"]', "target": "#hwBody .hw-tabs", "settle": 9000},
        ],
    },
    {
        "key": "tb-swing", "title": "籌碼日報", "section": TB, "tab": None,
        "scenes": [
            tb_intro("籌碼日報", "籌碼日報是收盤後的一份整理，適合隔天盤前讀。", "「籌碼日報」：收盤後整理、隔天盤前讀"),
            tb_open("openSwingPanel", "上面一排是分頁：今日摘要、處置動態、主動式ETF持股雷達、營收面、產業觀察、籌碼面、技術面和體質轉強。",
                    "分頁：摘要、處置、ETF雷達、營收、產業、籌碼、技術、體質", pick=find("#swingModal .chart-tab", "今日摘要") + ".parentElement"),
            {"say": "下面一排是日期，可以回看最近十個交易日的日報。", "cap": "日期：可回看近 10 個交易日",
             "pick": find("#swingModal .chart-tab", "最新") + ".parentElement"},
            {"say": "今日摘要最上面寫這份是哪一天的盤前讀、用哪一天收盤的資料。三個大數字：今天真正穿過月線的、明天入獄和出獄的、問診判強勢的。",
             "cap": "盤前讀日期；三個大數字：真穿月線、入獄／出獄、判強勢", "pick": "document.querySelector('#swingBody .sw-tiles')"},
            {"say": "下面照六個重點整理：資金主軸在哪些族群、籌碼進來但法人還沒跟的、籌碼面和技術面首選、體質和均線、月營收，最後是風險提示。",
             "cap": "六個重點：資金主軸、籌碼醞釀、首選、體質均線、月營收、風險", "pick": "document.querySelector('#swingBody .sw-summary')"},
            {"say": "處置動態是全市場的：明天開始處置、明天出獄、處置中、剛出獄五天內的觀察名單，還有明天再觸發就會被關的高機率處置股。",
             "cap": "處置動態（全市場）：入獄、出獄、處置中、觀察、高機率處置", "clickPick": find("#swingModal .chart-tab", "處置動態"), "pick": find("#swingModal .chart-tab", "處置動態"), "settle": 2500},
            {"say": "籌碼面、技術面、體質轉強，各挑最多五檔，附上防守價和風險提示；籌碼面下面還有剛出獄、籌碼在進的觀察名單。點股票可以開K線圖。",
             "cap": "籌碼／技術／體質：各挑最多 5 檔，附防守價", "clickPick": find("#swingModal .chart-tab", "籌碼面"), "pick": find("#swingModal .chart-tab", "籌碼面"), "settle": 2500},
            {"say": "主動式ETF持股雷達，看五檔主動式ETF每天買賣什麼、哪幾檔被同步加碼、連續同向，還有資金潮汐。",
             "cap": "主動式ETF雷達：五檔主動式ETF每天買賣什麼", "clickPick": find("#swingModal .chart-tab", "主動式ETF"), "pick": find("#swingModal .chart-tab", "主動式ETF"), "settle": 3000},
            {"say": "營收面先列前一個交易日之後新公布的那批，下面是整個月累計、營收大增、均線分數和成交值都夠的前十檔。",
             "cap": "營收面：先看新公布的，再看整月累計前 10 檔", "clickPick": find("#swingModal .chart-tab", "營收面"), "pick": find("#swingModal .chart-tab", "營收面"), "settle": 2500},
        ],
    },
    {
        "key": "tb-checkup", "title": "每日持股健診", "section": TB, "tab": None,
        "scenes": [
            tb_intro("健診", "每日持股健診，把手上的股票貼進來，看每一檔的體質和明天要守的價位。", "「每日持股健診」：持股體質＋明天防守價"),
            tb_open("openCheckupPanel", "第一步，貼上你的股票清單。股號用斜線、逗號、空白或換行隔開都可以，族群表裡的股票打名字也行。",
                    "① 貼上股票清單（斜線、逗號、空白、換行都可以）", settle=3000, pick=find("#checkupModal *", "① 貼上你的股票清單")),
            {"say": "示範一下，按範例帶入幾檔股票，再按開始健診。每一檔會算基本面、籌碼面、技術面三個零到一百分，再合成綜合分數。",
             "cap": "每檔算基本面／籌碼面／技術面 0～100 分，再合成綜合", "eval": "document.getElementById('ckExample').click()", "click": "#ckRun", "settle": 6000,
             "pick": visible("#checkupModal table")},
            {"say": "第二步，勾選要用的面向，勾起來的才算進綜合分數；權重可以自己調，點方塊可以改用那一項排序。",
             "cap": "② 勾選面向、調權重；點方塊改排序", "pick": find("#checkupModal *", "② 勾選要用的面向")},
            {"say": "結果每一檔附上明天的防守價：三日低、月線、紅半，還有判定。資料是收盤後跟籌碼日報一起更新，不是即時報價。",
             "cap": "附明天防守價：三日低、月線、紅半＋判定", "pick": visible("#checkupModal table")},
            {"say": "清單可以存起來，下次直接選；換裝置的話按複製清單，把整串代號帶過去。",
             "cap": "💾 存成清單；換裝置按 📋 複製清單", "pick": "document.getElementById('ckSave').parentElement"},
        ],
    },
    {
        "key": "tb-grail", "title": "盤中K棒組合選股", "section": TB, "tab": None,
        "scenes": [
            tb_intro("K棒組合選股", "盤中K棒組合選股，在每日持股健診的右邊。十五個選股邏輯，盤中在固定的時間點自動掃全市場，把符合的名單抓出來。", "「盤中K棒組合選股」：15 個邏輯盤中定時掃全市場"),
            tb_open("openGrailPanel", "盤中照各個邏輯的時間點，用證交所即時報價算，收盤後再用官方日K算一次收盤版。到時間進來看就好，不用自己設定。",
                    "盤中定時用即時報價算，收盤後再算一次", settle=6000, pick=find("#grailModal *", "最新一輪")),
            {"say": "最新一輪列出每個邏輯選到哪些股票，像波段穿惡、即將突破惡、三日飛龍；點邏輯名稱跳到那張卡片，點股票開K線圖。",
             "cap": "最新一輪：每個邏輯選到哪些股票", "pick": visible("#grailModal .gr-latest")},
            {"say": "上面可以選日期回看，也可以用族群、波段均線、隔日沖均線、成交量來篩，或照均線、漲跌、量、市值排序。",
             "cap": "日期回看；族群、均線、成交量篩選；排序", "pick": visible("#grailModal .gr-controls")},
            {"say": "每個邏輯旁邊有對答案的結果。名單只是符合條件，不是買賣指令。",
             "cap": "名單＝符合條件，不是買賣指令", "pick": visible("#grailModal table")},
        ],
    },
    {
        "key": "tb-chips", "title": "盤後籌碼排行", "section": TB, "tab": None,
        "scenes": [
            tb_intro("今日盤後籌碼排行", "盤後籌碼排行，看大戶手上的股票是變多還是變少。", "「盤後籌碼排行」：大戶手上的股票變多還變少"),
            tb_open("openChipsPanel", "分頁有籌碼週報、主力大單、外資、投信、自營商、三大法人，還有法人連買、主力大單跟醞釀發動的交叉，以及放空籌碼。",
                    "週報、主力大單、三大法人、∩醞釀發動、放空籌碼", pick=find("#chipsModal .chart-tab", "籌碼週報") + ".parentElement"),
            {"say": "籌碼週報用集保的週資料：四百張以上的大戶，這週持股比上週多了總股數的幾趴。每週五結算、週六公布，整個下一週看到的都是同一份。",
             "cap": "集保 400 張以上大戶的週增減（每週五結算）", "pick": find("#chipsModal .rd-sec-title", "本週籌碼暴增榜")},
            {"say": "籌碼暴增代表主力在收貨。紅色是增加、綠色是減少，星星是連續兩週上榜；每一列最後的方塊是均線分數，十二分以上是實心金色。",
             "cap": "紅＝增加、綠＝減少；⭐連兩週上榜；方塊＝均線分數", "pick": visible("#chipsModal .rd-grid2")},
            {"say": "往下還有上榜累積榜、族群排名比較、連續增排行，和熱門股籌碼分析。",
             "cap": "往下：累積榜、族群比較、連續增排行、熱門股", "pick": find("#chipsModal .rd-sec-title", "連續增排行")},
            {"say": "上面的輸入框打股號，可以查那一檔的籌碼軌跡和同族群。", "cap": "打股號：查籌碼軌跡＋族群",
             "pick": "document.getElementById('rdInput').parentElement"},
            {"say": "其他分頁是每個交易日收盤後更新的主力大單和三大法人買賣超，只列五十五個族群的股票，點股票可以開K線圖。",
             "cap": "主力大單、三大法人：每個交易日收盤後更新", "clickPick": find("#chipsModal .chart-tab", "主力大單"), "settle": 8000,
             "pick": "document.querySelector('#chipsBody .bl-section') || document.querySelector('#chipsBody .signal-empty')"},
        ],
    },
    {
        "key": "tb-watch", "title": "自選股", "section": TB, "tab": None,
        "scenes": [
            tb_intro("自選股", "自選股，把常看的股票收起來，分組追蹤。", "「自選股」：常看的股票分組追蹤"),
            tb_open("openWatchPanel", "在這裡輸入代號或名稱按加入，可以一次貼好幾檔。首頁、盤中三三三、醞釀發動、K線圖名稱旁邊的星星，也可以直接加進來。",
                    "輸入代號加入；各列表的 ☆ 也能直接加", settle=3000, pick="document.getElementById('wlAddInput').parentElement"),
            {"say": "加進來以後，可以看即時報價、盤中大戶力、均線分數、漲跌停、處置和注意，還有能不能融資融券、當沖，有沒有股期。",
             "cap": "即時報價、大戶力、均線分數、處置／注意、融資券／當沖",
             "eval": "(() => { const i = document.getElementById('wlAddInput'); i.value = '2330 2317 2454 3017 6505'; document.getElementById('wlAddBtn').click(); })()",
             "settle": 3500, "pick": visible("#watchModal table") + " || document.getElementById('wlAddInput').parentElement"},
            {"say": "上面一排是分組，按加分組可以新增，也可以改名、刪除；有鬧鐘符號的，是盤中形態觀察股自動帶進來的分組。",
             "cap": "分組：＋分組、改名、刪除；⏰＝盤中形態觀察股自動分組", "pick": "document.getElementById('wlGroupAdd').parentElement"},
            {"say": "這一排可以切換：即時報價；持股損益，填成本和張數算損益；盤後籌碼，看法人、主力、大戶、創高天數；或是一頁看完。",
             "cap": "即時報價／持股損益／盤後籌碼／一頁看完", "pick": find("#watchModal .wl-view", "持股損益") + ".parentElement"},
            {"say": "排序可以照自訂順序、漲跌幅、盤中大戶力或均線分數；按這組送去健診，就把整組帶去每日持股健診。",
             "cap": "排序；🩺 這組送去健診", "pick": find("#watchModal .wl-sort", "漲跌幅") + ".parentElement"},
            {"say": "最上面是同步碼。按幫我產生，會給一組隨機的碼，在手機或另一台電腦輸入同一組，就會看到同一份清單。每個人用自己的碼，不會跟別人混在一起；同步碼就像密碼，不要給別人。",
             "cap": "同步碼：幫我產生 → 其他裝置輸入同一組；像密碼，不要給別人", "pick": "document.getElementById('wlKeyGen').parentElement"},
        ],
    },
    {
        "key": "tb-jail", "title": "處置監獄", "section": TB, "tab": None,
        "scenes": [
            tb_intro("處置監獄", "處置監獄，看哪些股票被處置、什麼時候出獄、哪些快被關。", "「處置監獄」：被關、出獄、快被關"),
            tb_open("openJailPanel", "一檔股票短期漲跌太兇、週轉太高，交易所會列注意股，累積多次就會被處置，改成分盤集合競價，大約兩分鐘撮合一次，進出很不順。處置期間五個營業日，期滿下一個交易日出獄。",
                    "處置＝分盤集合競價（約 2 分鐘撮合一次），關 5 個營業日", pick=find("#jailModal *", "什麼是處置")),
            {"say": "一週出獄時間表，列出每天有哪些股票處置期滿、恢復正常交易，可以看到下週、下下週。", "cap": "🗓 一週出獄時間表",
             "pick": find("#jailModal .jl-h", "一週出獄時間表")},
            {"say": "犯罪集團：同一個族群兩檔以上被關、或快被關，代表資金集中在這個題材，整族可能一起關、也一起出獄。", "cap": "🏴 犯罪集團：同族群 ≥2 檔被關＝資金熱區",
             "pick": find("#jailModal .jl-h", "犯罪集團")},
            {"say": "今日入獄是今天剛被處置的；嫌疑名單是明天可能被關的，每天更新，寫出明天的門檻。", "cap": "🔒 今日入獄、🔍 嫌疑名單（明天門檻）",
             "pick": find("#jailModal .jl-h", "嫌疑名單")},
            {"say": "最上面打股號按查前科，看它以前被關過幾次、最近一次是什麼時候，還有明天會不會達到處置門檻。", "cap": "🔎 查前科：被關幾次、明天判定",
             "pick": find("#jailModal .jl-h", "個股前科查詢")},
        ],
    },
    {
        "key": "tb-revenue", "title": "營收成長榜", "section": TB, "tab": None,
        "scenes": [
            tb_intro("營收成長榜", "營收成長榜。每個月十號以前，公司會陸續公布上個月的營收，這裡把全市場排好。", "「營收成長榜」：每月營收公布後的全市場排行"),
            tb_open("openRevenuePanel", "上面可以切月份，寫出已經公布幾檔、年增為正的有幾檔，一天更新三次。",
                    "切月份；已公布幾檔、年增為正幾檔", pick=find("#revModal .rv-mbtn", "營收") + ".parentElement"),
            {"say": "火箭是年增比上個月加速十個百分點以上，烏龜是放緩十個百分點以上；按這兩顆可以只看火箭或只看烏龜。",
             "cap": "🚀＝年增加速、🐢＝年增放緩（10 點以上）", "pick": find("#revModal .rv-mark", "火箭") + ".parentElement"},
            {"say": "族群分析把每個族群年增的中位數排出來，只列年增三成以上的上榜成員。顏色是年增幅度，隔日是公布後下一個交易日的漲跌。",
             "cap": "🧭 族群分析：族群年增中位數排行；隔日＝公布後隔天漲跌", "pick": "[...document.querySelectorAll('#revModal .rv-h')].find((e) => e.offsetParent !== null && e.textContent.includes('族群分析'))"},
            {"say": "往下還有多觀察分析、火箭烏龜數據分析、懸賞榜和全部公司總表。", "cap": "往下：多觀察、火箭烏龜、懸賞榜、全部公司",
             "pick": find("#revModal .rv-h", "懸賞榜")},
            {"say": "查個股營收，打股號就看到這一檔每個月的年增、月增、累計年增、公布日和公布隔日的漲跌。", "cap": "🔎 查個股營收：每月年增、月增、公布隔日漲跌",
             "pick": find("#revModal .rv-h", "查個股營收")},
        ],
    },
    {
        "key": "tb-ma", "title": "均線分數排行", "section": TB, "tab": None,
        "scenes": [
            tb_intro("均線分數排行", "均線分數排行，幫每一檔股票打分數，滿分十五分。", "「均線分數排行」：每一檔打分數，滿分 15"),
            tb_open("openMaPanel", "分數越高，代表這檔股票的位置越強、均線排得越整齊；分數低多半是還在整理、或已經走弱。分數講的是位置強不強，不是買賣點。每個交易日收盤後更新。",
                    "分數高＝位置強、均線排列整齊；不是買賣點", pick=find("#maModal *", "這頁幫每一檔股票打分數")),
            {"say": "個股分數前六十名，看總分、昨天名次、連續上榜幾天；這一排可以改成名次進步、連續上榜、新進榜，或站上全部均線來排。",
             "cap": "前 60 名：依總分／名次進步／連續上榜／新進榜", "pick": find("#maModal .ma-vbtn", "依總分") + ".parentElement"},
            {"say": "表格裡的小方塊是站上了哪幾條均線、創了哪幾個天期的新高，選股日期可以回看之前的排行。",
             "cap": "方塊：站上哪幾條均線、創哪幾個天期新高", "pick": visible("#maModal table")},
            {"say": "下面還有前十名常客，看最近誰最常擠進前十名；還有族群分數前十大，看哪一整群的底子最硬。",
             "cap": "前十名常客、族群分數前十大", "pick": find("#maModal *", "族群分數前十大")},
            {"say": "上面輸入股號，會列出那一檔所屬族群的全部成員；輸入族群名，就列出那個族群。",
             "cap": "查詢：打股號或族群名", "pick": "document.getElementById('maQ').parentElement"},
        ],
    },
    {
        "key": "tb-heilong", "title": "創高黑龍（自動）", "section": TB, "tab": None,
        "scenes": [
            tb_intro("創高黑龍", "創高黑龍自動版，收盤後依均線分數加上收黑K挑出名單，附上過去的績效回測；中午十二點會先給一份暫定名單。", "「創高黑龍（自動）」：收盤後名單＋績效回測"),
            tb_open("openHeilongPanel", "第一步是選股參數。官網創高黑龍的預設是均線分數十分以上、收黑K、漲跌幅負十趴到三趴、族群表內；還可以加上週籌碼、族群平均分、成交值這些條件。",
                    "① 選股參數：預設＝均線分數≥10、黑K、漲跌 −10%～3%", pick=find("#heilongModal *", "① 選股參數")),
            {"say": "下面設定出場方式：停利三、五、八趴或自訂，跌破黑K最低價停損；回測可以選近十天、二十天、六十天，改完按重新計算。",
             "cap": "停利、破黑低停損；回測近 10／20／60 天", "pick": "document.getElementById('hlRun').parentElement"},
            {"say": "按官網創高黑龍預設，就回到原本的參數；調好的參數可以存成我的參數。",
             "cap": "「官網創高黑龍預設」還原；💾 存成我的參數", "pick": "document.getElementById('hlReset')"},
            {"say": "下面是回測結果：選股日收盤進場，之後一到三個交易日的盤中最高，還有各種出場方式的勝率和報酬。",
             "cap": "② 爆發力＋各種出場方式的勝率、報酬", "pick": find("#heilongModal *", "② 爆發力")},
        ],
    },
    {
        "key": "tb-picker", "title": "創高黑選股（手動）", "section": TB, "tab": None,
        "scenes": [
            tb_intro("創高黑選股", "創高黑選股手動版，自己設定模組規則挑股，模擬帳戶照規則分批加減碼，看實際跑起來的績效。", "「創高黑選股（手動）」：自己設規則，模擬帳戶跑績效"),
            tb_open("openPickerPanel", "使用順序是：先在模組設規則，再到選股勾名單，最後在今天看模組照規則怎麼進出。全部是試算，不是買賣建議。",
                    "① 模組設規則 → ② 選股勾名單 → ③ 今天照規則進出", pick=find("#pickerModal .pk-step", "模組") + ".parentElement"),
            {"say": "今天這一頁是模擬帳戶：額度、投入、現金、市值和損益，還會跟同樣額度買零零五零比較。",
             "cap": "模擬帳戶：額度、投入、市值、損益（對照 0050）", "clickPick": find("#pickerModal .chart-tab", "今天"), "pick": find("#pickerModal *", "模組損益"), "settle": 2500},
            {"say": "已進場的股票列出批數、進場日、報酬，還有減碼線和出場線；觀察中的股票等收黑才買第一批，再收黑加碼，破五日線、十日線減碼出場。",
             "cap": "① 已進場：減碼線、出場線　② 觀察中：等收黑", "pick": find("#pickerModal *", "① 已進場的股票")},
            {"say": "每天一點會提醒今天要做的動作，可以按這顆先模擬看看。",
             "cap": "🔔 下午提醒今天要做的動作", "pick": find("#pickerModal .pk-btn-big", "模擬")},
            {"say": "選股分頁看每週名單、每日新進和條件池；實績分頁比較各種出場方式的績效。",
             "cap": "選股：每週名單、每日新進　實績：比較出場方式", "clickPick": find("#pickerModal .chart-tab", "選股"), "pick": find("#pickerModal .chart-tab", "選股") + ".parentElement", "settle": 3000},
        ],
    },
    {
        "key": "tb-diag", "title": "選股・個股研究", "section": TB, "tab": None,
        "scenes": [
            tb_intro("問診", "選股和個股研究，上面是條件選股，下面是個股研究。", "「選股・個股研究」：條件選股＋個股研究"),
            tb_open("openDiagPanel", "系統選股：勾要用的條件、拉一下門檻，像均線分數、籌碼暴增、主動式ETF持有、法人買超，選出同時符合的名單。條件勾越多，名單越少、也越嚴格。",
                    "勾條件、拉門檻，選出同時符合的名單", settle=4000, pick=find("#diagModal *", "均線分數 ≥")),
            {"say": "懶得自己勾，可以直接按這一排的範本，像創高黑龍、強勢紅K、法人認養、籌碼暴增、河流便宜，一鍵帶入條件。",
             "cap": "範本一鍵帶入：創高黑龍、法人認養、籌碼暴增…", "pick": find("#diagModal .scr-pre", "創高黑龍") + ".parentElement"},
            {"say": "按開始篩選，下面就列出符合的股票；點名單任一列，會帶到下面的個股研究。",
             "cap": "開始篩選 → 點一列帶到個股研究", "clickPick": find("#diagModal .scr-pre", "創高黑龍"), "click": "#diagModal .scr-go", "pick": visible("#diagModal table") + " || document.querySelector('#diagModal .scr-go')", "settle": 4000},
            {"say": "個股研究打股號，一頁看完這一檔的強弱、七科體檢、三日低月線紅半這些防守線、日線圖、同族群對照、族群強度榜，還有一句結論。",
             "cap": "個股研究：強弱、七科體檢、防守線、同族對照、結論",
             "eval": "(() => { const i = document.getElementById('dgInput'); i.value = '2330'; const b = document.getElementById('dgRun'); if (b) b.click(); })()", "pick": "document.getElementById('dgInput').parentElement", "settle": 6000},
            {"say": "下面還有這家公司在做什麼的白話說明、近八季的財報，盤中十點以後還會整理今天在漲跌什麼。",
             "cap": "公司在做什麼、近 8 季財報、盤中今天在漲跌什麼", "pick": find("#diagModal *", "在做什麼")},
        ],
    },
    {
        "key": "tb-track", "title": "個股訊號追蹤", "section": TB, "tab": None,
        "scenes": [
            tb_intro("個股盤中訊號追蹤", "個股訊號追蹤，只看你的自選股今天出現了哪些訊號，不用在一堆名單裡找。", "「個股訊號追蹤」：只看自選股今天的訊號"),
            {"say": "上面一排是自選股的分組，跟自選股面板同一份，選一組就只看那一組。", "cap": "分組：跟自選股同一份",
             # 錄影的瀏覽器是空的自選股：先加幾檔今天有訊號的（只存在錄影的瀏覽器，沒設同步碼不會上傳）
             "eval": CLOSE_ALL + "; openWatchPanel(); document.getElementById('wlAddInput').value = '1303 6505 2480 3287 3406 6834 1301 8046';"
                     " document.getElementById('wlAddBtn').click(); document.getElementById('watchModal').hidden = true; openTrackPanel()",
             "settle": 9000, "pick": find("#trackModal .wl-gtab", "全部") + ".parentElement"},
            {"say": "現況表列出每一檔的漲跌幅、狀態，像發動中、漲停、盤中大戶偏買、處置股，還有今天出了幾個訊號、最新是哪一個。",
             "cap": "① 現況：漲跌幅、狀態、今天訊號數、最新訊號", "pick": visible("#trackModal table")},
            {"say": "今日訊號照時間列出：發動、特大買賣單、四項精選、主力翻多翻空、創高黑龍、一加二多，上面的按鈕可以只看其中一種。",
             "cap": "② 今日訊號：照時間列，可只看一種", "pick": find("#trackModal .wl-sort", "特大買單") + ".parentElement"},
            {"say": "提醒可以設到價、跌破均線，自選股一出現新訊號，就跳通知加響聲。網頁要開著才收得到。",
             "cap": "🔔 提醒：到價、跌破均線、出現訊號（網頁要開著）", "clickPick": find("#trackModal .wl-sort", "提醒"), "pick": find("#trackModal .wl-sort", "提醒"), "settle": 2000},
        ],
    },
    {
        "key": "tb-river", "title": "估值河流圖", "section": TB, "tab": None,
        "scenes": [
            tb_intro("估值河流圖", "估值河流圖，把股價放進本益比河道裡，看現在是便宜、合理還是貴。", "「估值河流圖」：現在便宜還是貴"),
            tb_open("openRiverPanel", "輸入股號或股名，或按下面的範例，就畫出這一檔的河流圖。",
                    "輸入股號或股名，畫出河流圖", settle=3000, pick="document.getElementById('rivQ').parentElement"),
            {"say": "紅線是股價，彩色河道由下而上是特價、便宜、貴、昂貴；中間的虛線是分水嶺，等於近四季EPS乘上同族群本益比的中位數。股價在分水嶺下面，代表相對同族群偏便宜。",
             "cap": "紅線＝股價；河道：特價→便宜→貴→昂貴；虛線＝分水嶺",
             "clickPick": find("#rivModal .scr-pre", "2492"), "pick": visible("#rivModal svg") + " || " + visible("#rivModal canvas"), "settle": 5000},
            {"say": "河道會隨公司每季的體質上下移動，同樣的股價，體質變好時會從貴變便宜。虧損或本益比超過兩百倍的不畫。",
             "cap": "河道跟著每季 EPS 移動；虧損、本益比 >200 不畫", "pick": find("#rivModal *", "這張圖怎麼看")},
            {"say": "最下面這張清單，是均線分數十分以上、又落在便宜區以下的股票：位置強，價格又不貴。",
             "cap": "⭐ 均線分數 ≥10 × 便宜區：位置強又不貴", "pick": find("#rivModal *", "均線分數 ≥10 × 便宜區")},
        ],
    },
    {
        "key": "tb-lab", "title": "研究室", "section": TB, "tab": None,
        "scenes": [
            tb_intro("研究室", "研究室看的是盤勢以外的大方向，有三個分頁。", "「研究室」：盤勢以外的大方向"),
            tb_open("openLabPanel", "國際大事行事曆：非農、CPI、聯準會這些數據，台灣時間幾點公布，前值、預期和公布值；最上面寫下一件大事是什麼時候。",
                    "🌐 國際大事行事曆：台灣時間幾點公布、前值／預期／公布值", pick=find("#labModal *", "下一件大事")),
            {"say": "行事曆依週排列，紅底是三顆星的大事，數字公布後大約一小時內補上；法說會每天一筆，紫色是你的自選股。名詞看不懂，點書本符號到小學堂。",
             "cap": "紅底＝★★★大事；紫色＝你的自選股；📖 小學堂", "pick": find("#labModal .mc-h", "① 行事曆")},
            {"say": "資金保護傘看融資水位、加權指數和櫃買指數有沒有跌破月線、季線，合成收傘、備傘、半開、全開四種狀態。",
             "cap": "🛡 資金保護傘：收傘／備傘／半開／全開", "clickPick": find("#labModal .chart-tab", "資金保護傘"), "pick": find("#labModal .chart-tab", "資金保護傘") + ".parentElement", "settle": 4000},
            {"say": "內部人看董監事、經理人每個月加碼還是減碼，疊上四百張大戶的持股比例。",
             "cap": "👥 內部人：董監、經理人每月加減碼＋400 張大戶比", "clickPick": find("#labModal .chart-tab", "內部人"), "pick": find("#labModal .chart-tab", "內部人") + ".parentElement", "settle": 4000},
        ],
    },
]

# 新手入門（2026-10-13 使用者：首頁、K線圖，還有怎麼放到 iPhone／iPad／Android／電腦桌面）；放在清單最前面
BASIC = "新手入門"
CLOSE_CHARTS = "try { while (chartWindows.size && closeTopChartWindow()) {} } catch (_) {} try { closeStockChart(); } catch (_) {} try { closeGroupDetail(); } catch (_) {}"
BASIC_VIDEOS = [
    {
        "key": "basic-home", "title": "首頁怎麼看", "section": BASIC, "tab": None,
        "scenes": [
            {"say": "首頁把五十五個族群，依照今天的平均漲跌幅排好，每十五秒自動更新一次。", "cap": "55 個族群依平均漲跌幅排好，每 15 秒更新",
             "eval": CLOSE_ALL + "; " + CLOSE_CHARTS, "target": "header .brand", "settle": 1200},
            {"say": "這一行寫今天有幾個族群在漲、幾個在跌。強勢族群比較多，下面會自動切到強勢；弱勢比較多，就自動切到弱勢。",
             "cap": "強勢／弱勢族群數；多的那邊自動切過去", "target": "#groupStatBar"},
            {"say": "也可以自己按強勢或弱勢切換。", "cap": "自己按「強勢／弱勢」切換", "target": ".tabs"},
            {"say": "左邊是漲幅，或跌幅前六大的族群；右邊是這六個族群裡，漲最多或跌最多的前三檔股票。",
             "cap": "左：前六大族群　右：每族前三檔", "target": "#app .col-left"},
            {"say": "每一檔有漲跌幅、漲跌和成交價；漲停是紅底白字，跌停是綠底白字。名字旁邊的星星，點一下就加進自選股；點股票會打開K線圖。",
             "cap": "漲停紅底、跌停綠底；☆ 加自選股；點股票開 K 線圖", "target": "#app .top-group-col"},
            {"say": "點族群卡片，會列出這個族群的全部股票，每一檔的漲跌一次看完。", "cap": "點族群卡片 → 這個族群全部股票",
             "click": "#app .top6-card", "target": "#groupModal .group-modal-inner", "settle": 2500},
            {"say": "上面這一塊是櫃買指數的盤勢：站上五分K的二十均線、又在第三根五分K低點之上，是強多；兩個都跌破是強空；一上一下就是個股震盪盤。",
             "cap": "櫃買盤勢：強多／強空／個股震盪", "eval": "closeGroupDetail()", "target": "#otcStrengthBox"},
            {"say": "右上角紫色的盤中訊號，是盤中所有訊號的集中地，旁邊的數字是今天的訊號數。", "cap": "「⚠ 盤中訊號」：盤中訊號集中地", "target": "#signalBadgeBtn"},
            {"say": "新手教學是文字說明，影片教學就是這裡的影片。提醒開啟以後，有重要訊號網頁會跳通知，網頁要開著才收得到。",
             "cap": "📖 新手教學、🎬 影片教學、提醒開啟", "pick": "document.getElementById('guideBtn').parentElement"},
            {"say": "最下面這一排是十五個工具，每個工具都有自己的影片。", "cap": "最下面：15 個工具（每個都有影片）", "target": "#toolbarBottom"},
        ],
    },
    {
        "key": "basic-chart", "title": "K線圖怎麼用", "section": BASIC, "tab": None,
        "scenes": [
            {"say": "右上角這個框，輸入股票代號或名稱，例如二六零三，或長榮，按Enter或放大鏡，就會打開這一檔的K線圖。",
             "cap": "輸入代號或名稱 → Enter 開 K 線圖", "eval": CLOSE_ALL + "; " + CLOSE_CHARTS, "target": "header .stock-search-bar", "settle": 1200},
            {"say": "K線圖會開成一個視窗，拉住標題可以移動，四邊可以拉大小，也可以同時開好幾檔。", "cap": "K 線圖視窗：拉標題移動、拉四邊改大小",
             "eval": "(() => { const i = document.getElementById('stockSearchInput'); i.value = '2603'; document.getElementById('stockSearchGoBtn').click();"
                     " setTimeout(() => { const w = document.querySelector('#chartWindows .chart-float.front'); if (w) Object.assign(w.style, { left: '30px', top: '16px', width: '1060px', height: '610px' }); }, 3000); })()",
             "pick": "document.querySelector('#chartWindows .chart-float.front')", "settle": 8000},
            {"say": "標題列右邊可以另開視窗，把圖拉到另一個螢幕；也可以縮小、放大，或關掉。", "cap": "⧉ 另開視窗、縮小、放大、關閉",
             "pick": "document.querySelector('#chartWindows .chart-float.front .chart-float-head')"},
            {"say": "上面寫這一根K棒的時間、開高低收、成交量和漲跌；滑鼠移到K棒上，就換成那一根的數字。", "cap": "K 棒的時間、開高低收、量、漲跌",
             "pick": "__tutBoxIn('#chartInfoBar')"},
            {"say": "這裡可以切日線、五分鐘和一分鐘，預設是五分鐘K；旁邊寫目前的五日、二十日均線。", "cap": "日線／5 分鐘／1 分鐘；MA5、MA20",
             "pick": "__tutBoxIn('#chartTabs')"},
            {"say": "時間軸下面的小三角形是扣底：今天這根不算，往前數五根、二十根的位置，顏色跟那條均線一樣；一分鐘K是五根和二十五根。上面也寫出扣底值。",
             "cap": "▲ 扣底：今天不算往前數 5、20 根（1 分 K：5、25 根）", "pick": "__tutBoxIn('#klineCanvas')"},
            {"say": "切到日線，看得到比較長的走勢；有創高黑龍的那根K棒，會標出圈圈數字。", "cap": "日線：長期走勢；黑龍進場標 ①②③",
             "clickPick": "__tutIn('#chartTabs .chart-tab', '日線')", "pick": "__tutBoxIn('#klineCanvas')", "settle": 5000},
            {"say": "齒輪是設定，可以開關均線、VWAP，還有明天要守的價：明日紅半、三日低和月線；防守線只畫在日線上。", "cap": "⚙ 設定：均線、VWAP、明日防守線",
             "clickPick": "__tutIn('#cmSettingsToggle')", "pick": "__tutBoxIn('#maControls')", "settle": 1500},
            {"say": "下面的副圖是主力買賣力，也就是單筆二十張以上的大單：紅色是買超，綠色是賣超，線是累計。", "cap": "主力買賣力：大單買超紅、賣超綠、累計線",
             "clickPick": "__tutIn('#cmSettingsToggle')", "pick": "__tutBoxIn('#forcePanelWrap')"},
            {"say": "圖上的輸入框可以直接換另一檔，打完按進入分K；名稱旁的星星，點一下就加進自選股。", "cap": "在圖上直接換股；☆ 加自選股",
             "pick": "__tutBoxIn('#cmQuickSearch')"},
            {"say": "看完按右上角的叉叉關掉。任何列表點股票，也都會打開K線圖。", "cap": "✕ 關掉；任何列表點股票也會開 K 線圖",
             "pick": "document.querySelector('#chartWindows .chart-float.front .chart-float-head')"},
        ],
    },
    {
        "key": "basic-ios", "title": "iPhone／iPad 放到主畫面", "section": BASIC, "tab": None, "shots": True,
        "scenes": [
            {"say": "把網站放到主畫面，以後像App一樣一點就開，不用再找網址。先看iPhone：用Safari打開我們的網站。", "cap": "iPhone：用 Safari 打開網站",
             "eval": "tutIllus('iphone', 'site')", "target": "#ilUrl", "settle": 1500},
            {"say": "點下方的分享按鈕，就是一個方框加上向上的箭頭。", "cap": "② 點下方「分享」（方框＋向上箭頭）", "eval": "tutIllus('iphone', 'share')", "target": "#ilShare"},
            {"say": "選單往下滑，找到加入主畫面，點它。", "cap": "③ 往下滑，點「加入主畫面」", "eval": "tutIllus('iphone', 'sheet')", "target": "#ilAddHome"},
            {"say": "名字可以改短一點，例如族群強弱，再點右上角的新增。", "cap": "④ 名字可以改短，點右上角「新增」", "eval": "tutIllus('iphone', 'add')", "target": "#ilAddBtn"},
            {"say": "主畫面就會多一個族群強弱的圖示，以後點它就直接打開網站。", "cap": "⑤ 主畫面多一個圖示，一點就開", "eval": "tutIllus('iphone', 'home')", "target": "#ilIcon"},
            {"say": "iPad也一樣用Safari，分享按鈕在上面網址列的右邊。", "cap": "iPad：「分享」在網址列右邊", "eval": "tutIllus('ipad', 'share')", "target": "#ilShare"},
            {"say": "點了以後選加入主畫面，再按新增，就完成了。", "cap": "點「加入主畫面」→「新增」", "eval": "tutIllus('ipad', 'sheet')", "target": "#ilAddHome"},
            {"say": "iPad的主畫面一樣會多一個圖示。", "cap": "iPad 主畫面多一個圖示", "eval": "tutIllus('ipad', 'home')", "target": "#ilIcon"},
            {"say": "如果是從LINE點連結進來的，網頁是開在LINE裡面，沒辦法加到主畫面。先點右上角的選單，選用瀏覽器開啟，再照前面的步驟做。",
             "cap": "從 LINE 進來：先「用瀏覽器開啟」", "eval": "tutIllus('line')", "target": "#ilOpen"},
            {"say": "用iPhone的Chrome也可以：點網址列右邊的分享，選加入主畫面；找不到的話往下滑，點編輯動作把它加進來。手機版本不同，按鈕的字可能差一點，位置都差不多。",
             "cap": "iPhone Chrome：分享 →「加入主畫面」", "eval": "tutIllus('ioschrome', 'share')", "target": "#ilShare"},
        ],
    },
    {
        "key": "basic-android", "title": "Android 放到主畫面", "section": BASIC, "tab": None, "shots": True,
        "scenes": [
            {"say": "Android手機用Chrome打開我們的網站，可以放到桌面，以後像App一樣一點就開。", "cap": "Android：用 Chrome 打開網站",
             "eval": "tutIllus('android', 'site')", "target": "#ilUrl", "settle": 1500},
            {"say": "點右上角三個點的選單。", "cap": "② 點右上角「⋮」", "eval": "tutIllus('android', 'menu')", "target": "#ilMenu"},
            {"say": "點加到主畫面；有的手機寫的是安裝應用程式，點那個也可以。", "cap": "③ 點「加到主畫面」（或「安裝應用程式」）", "eval": "tutIllus('android', 'sheet')", "target": "#ilAddHome"},
            {"say": "名字可以改短，點新增；如果又問要不要加到主畫面，點自動新增，或新增。", "cap": "④ 點「新增」", "eval": "tutIllus('android', 'add')", "target": "#ilAddBtn"},
            {"say": "桌面就會多一個族群強弱的圖示，一點就開。手機品牌不同，選單的字可能差一點，位置都差不多。", "cap": "⑤ 桌面多一個圖示，一點就開",
             "eval": "tutIllus('android', 'home')", "target": "#ilIcon"},
        ],
    },
    {
        "key": "basic-pc", "title": "電腦建立桌面捷徑", "section": BASIC, "tab": None, "shots": True,
        "scenes": [
            {"say": "電腦用Chrome打開我們的網站，可以在桌面建立捷徑，以後點兩下就開。", "cap": "電腦：用 Chrome 打開網站",
             "eval": "tutIllus('pc', 'site')", "target": "#ilUrl", "settle": 1500},
            {"say": "點右上角三個點的選單。", "cap": "② 點右上角「⋮」", "eval": "tutIllus('pc', 'menu')", "target": "#ilMenu"},
            {"say": "選投放、儲存及分享，右邊再點建立捷徑。", "cap": "③「投放、儲存及分享」→「建立捷徑…」", "eval": "tutIllus('pc', 'sheet')", "target": "#ilShortcut"},
            {"say": "名字可以改，勾在視窗中開啟，打開時就像一個獨立的程式，再按建立。", "cap": "④ 勾「在視窗中開啟」→「建立」", "eval": "tutIllus('pc', 'create')", "target": "#ilWindow"},
            {"say": "桌面就會多一個族群強弱的圖示，點兩下就開。", "cap": "⑤ 桌面多一個圖示，點兩下就開", "eval": "tutIllus('pc', 'desk')", "target": "#ilIcon"},
            {"say": "打開以後，在下面工作列的圖示按右鍵，選釘選到工作列，以後點一下就開。", "cap": "工作列圖示按右鍵 →「釘選到工作列」", "target": "#ilTask"},
            {"say": "用Edge的話，點右上角三個點，選應用程式，再點將此網站安裝為應用程式。", "cap": "Edge：「⋯」→「應用程式」→「安裝為應用程式」",
             "eval": "tutIllus('pc', 'edge')", "target": "#ilShortcut"},
            {"say": "如果只想存書籤，按鍵盤的Ctrl加D，Mac是Command加D，就會存到書籤列。瀏覽器版本不同，選單的字可能差一點，位置都差不多。",
             "cap": "存書籤：Ctrl＋D（Mac ⌘＋D）", "eval": "tutIllus('pc', 'keys')", "target": "#ilKeys"},
        ],
    },
]
VIDEOS = BASIC_VIDEOS + VIDEOS
