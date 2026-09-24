const GROUPS = [
  {"name":"被動元件","stocks":[{"code":"6862","name":"三集瑞"},{"code":"6155","name":"鈞寶"},{"code":"3090","name":"日電貿"},{"code":"4760","name":"勤凱"},{"code":"6821","name":"聯寶"},{"code":"1595","name":"川寶"},{"code":"6449","name":"鈺邦"},{"code":"2478","name":"大毅"},{"code":"8043","name":"蜜望實"},{"code":"6175","name":"立敦"},{"code":"3236","name":"千如"},{"code":"2472","name":"立隆電"},{"code":"6834","name":"天二科技"},{"code":"6127","name":"九豪"},{"code":"8042","name":"金山電"},{"code":"2327","name":"國巨*"},{"code":"2375","name":"凱美"},{"code":"3026","name":"禾伸堂"},{"code":"2492","name":"華新科"},{"code":"5328","name":"華容"},{"code":"6173","name":"信昌電"},{"code":"3624","name":"光頡"},{"code":"3357","name":"臺慶科"},{"code":"3537","name":"堡達"},{"code":"2428","name":"興勤"}]},
  {"name":"記憶體","stocks":[{"code":"8271","name":"宇瞻"},{"code":"2344","name":"華邦電"},{"code":"4973","name":"廣穎電通"},{"code":"3260","name":"威剛"},{"code":"8088","name":"品安"},{"code":"3135","name":"凌航"},{"code":"4967","name":"十銓"},{"code":"2337","name":"旺宏"},{"code":"6265","name":"方土昶"},{"code":"2451","name":"創見"},{"code":"5289","name":"宜鼎"},{"code":"8110","name":"華東"},{"code":"5351","name":"鈺創"},{"code":"3006","name":"晶豪科"},{"code":"3060","name":"銘異"},{"code":"8299","name":"群聯"},{"code":"2408","name":"南亞科"},{"code":"8131","name":"福懋科"},{"code":"6770","name":"力積電"}]},
  {"name":"矽光子","stocks":[{"code":"8111","name":"立碁"},{"code":"4979","name":"華星光"},{"code":"6218","name":"豪勉"},{"code":"4977","name":"眾達-KY"},{"code":"4903","name":"聯光通"},{"code":"3234","name":"光環"},{"code":"6530","name":"創威"},{"code":"6715","name":"嘉基"},{"code":"3363","name":"上詮"},{"code":"8089","name":"康全電訊"},{"code":"3025","name":"星通"},{"code":"6451","name":"訊芯-KY"},{"code":"4909","name":"新復興"},{"code":"3447","name":"展達"},{"code":"4908","name":"前鼎"},{"code":"4971","name":"IET-KY"},{"code":"6830","name":"汎銓"},{"code":"3081","name":"聯亞"},{"code":"4991","name":"環宇-KY"},{"code":"6442","name":"光聖"},{"code":"3163","name":"波若威"},{"code":"3450","name":"聯鈞"},{"code":"6426","name":"統新"},{"code":"6197","name":"佳必琪"},{"code":"4949","name":"有成精密"}]},
  {"name":"摺疊手機","stocks":[{"code":"3548","name":"兆利"},{"code":"1582","name":"信錦"},{"code":"6805","name":"富世達"},{"code":"3376","name":"新日興"}]},
  {"name":"矽晶圓","stocks":[{"code":"5483","name":"中美晶"},{"code":"2342","name":"茂矽"},{"code":"3707","name":"漢磊"},{"code":"3016","name":"嘉晶"},{"code":"6488","name":"環球晶"},{"code":"6182","name":"合晶"},{"code":"3532","name":"台勝科"}]},
  {"name":"D電腦","stocks":[{"code":"6166","name":"凌華"},{"code":"6206","name":"飛捷"},{"code":"3022","name":"威強電"},{"code":"3479","name":"安勤"},{"code":"4916","name":"事欣科"},{"code":"6414","name":"樺漢"},{"code":"3213","name":"茂訊"},{"code":"2395","name":"研華"},{"code":"3594","name":"磐儀"}]},
  {"name":"化學","stocks":[{"code":"4716","name":"大立"},{"code":"4711","name":"永純"},{"code":"1708","name":"東鹼"},{"code":"1735","name":"日勝化"},{"code":"1717","name":"長興"},{"code":"1727","name":"中華化"},{"code":"1721","name":"三晃"},{"code":"3430","name":"奇鈦科"},{"code":"1711","name":"永光"},{"code":"4755","name":"三福化"},{"code":"4764","name":"雙鍵"}]},
  {"name":"軍工","stocks":[{"code":"2634","name":"漢翔"},{"code":"4541","name":"晟田"},{"code":"8383","name":"千附"},{"code":"6928","name":"攸泰科技"},{"code":"8222","name":"寶一"},{"code":"2630","name":"亞航"},{"code":"6753","name":"龍德造船"},{"code":"2231","name":"為升"},{"code":"4572","name":"駐龍"},{"code":"5371","name":"中光電"},{"code":"7402","name":"邑錡"},{"code":"4916","name":"事欣科"},{"code":"6829","name":"千附精密"},{"code":"2645","name":"長榮航太"},{"code":"2429","name":"銘旺科"},{"code":"1584","name":"精剛"},{"code":"8033","name":"雷虎"},{"code":"3230","name":"錦明"},{"code":"1810","name":"和成"},{"code":"6477","name":"安集"}]},
  {"name":"設備股","stocks":[{"code":"8028","name":"昇陽半導體"},{"code":"6438","name":"迅得"},{"code":"1785","name":"光洋科"},{"code":"5443","name":"均豪"},{"code":"2467","name":"志聖"},{"code":"6640","name":"均華"},{"code":"3131","name":"弘塑"},{"code":"3583","name":"辛耘"},{"code":"3455","name":"由田"},{"code":"8064","name":"東捷"},{"code":"6187","name":"萬潤"},{"code":"6207","name":"雷科"}]},
  {"name":"玻璃基板","stocks":[{"code":"3149","name":"正達"},{"code":"3673","name":"TPK-KY"},{"code":"8027","name":"鈦昇"},{"code":"8064","name":"東捷"},{"code":"6207","name":"雷科"}]},
  {"name":"重電","stocks":[{"code":"1519","name":"華城"},{"code":"1513","name":"中興電"},{"code":"1529","name":"樂事綠能"},{"code":"1514","name":"亞力"},{"code":"1503","name":"士電"}]},
  {"name":"神盾","stocks":[{"code":"6243","name":"迅杰"},{"code":"6462","name":"神盾"},{"code":"8054","name":"安國"},{"code":"6684","name":"安格"},{"code":"6695","name":"芯鼎"},{"code":"3041","name":"揚智"}]},
  {"name":"小電腦","stocks":[{"code":"6558","name":"興能高"},{"code":"3323","name":"加百裕"},{"code":"1569","name":"濱川"},{"code":"3211","name":"順達"},{"code":"6672","name":"騰輝電子-KY"},{"code":"6781","name":"AES-KY"},{"code":"5309","name":"系統電"},{"code":"4931","name":"新盛力"}]},
  {"name":"PCB","stocks":[{"code":"4958","name":"臻鼎-KY"},{"code":"3037","name":"欣興"},{"code":"3189","name":"景碩"},{"code":"8046","name":"南電"}]},
  {"name":"小電組","stocks":[{"code":"6234","name":"高僑"},{"code":"6191","name":"精成科"},{"code":"1717","name":"長興"},{"code":"2368","name":"金像電"},{"code":"8074","name":"鉅橡"},{"code":"3715","name":"定穎投控"},{"code":"6290","name":"良維"},{"code":"5340","name":"建榮"},{"code":"2316","name":"楠梓電"},{"code":"2313","name":"華通"},{"code":"5498","name":"凱崴"},{"code":"1802","name":"台玻"},{"code":"1815","name":"富喬"},{"code":"6274","name":"台燿"},{"code":"2383","name":"台光電"},{"code":"4989","name":"榮科"},{"code":"8021","name":"尖點"},{"code":"5475","name":"德宏"},{"code":"8358","name":"金居"},{"code":"6213","name":"聯茂"},{"code":"5439","name":"高技"}]},
  {"name":"特化","stocks":[{"code":"4763","name":"材料-KY"},{"code":"4768","name":"晶呈科技"},{"code":"4770","name":"上品"},{"code":"4772","name":"台特化"},{"code":"4722","name":"國精化"}]},
  {"name":"散熱","stocks":[{"code":"2241","name":"艾姆勒"},{"code":"3324","name":"雙鴻"},{"code":"3483","name":"力致"},{"code":"6230","name":"尼得科超眾"},{"code":"6125","name":"廣運"},{"code":"3017","name":"奇鋐"},{"code":"2421","name":"建準"},{"code":"3338","name":"泰碩"},{"code":"8996","name":"高力"},{"code":"2233","name":"宇隆"}]},
  {"name":"PA","stocks":[{"code":"2455","name":"全新"},{"code":"8086","name":"宏捷科"},{"code":"3105","name":"穩懋"}]},
  {"name":"二極體","stocks":[{"code":"5299","name":"杰力"},{"code":"7712","name":"博盛半導體"},{"code":"2481","name":"強茂"},{"code":"8255","name":"朋程"},{"code":"3317","name":"尼克森"},{"code":"5425","name":"台半"},{"code":"6435","name":"大中"},{"code":"8261","name":"富鼎"},{"code":"3675","name":"德微"}]},
  {"name":"石英","stocks":[{"code":"3221","name":"台嘉碩"},{"code":"2484","name":"希華"},{"code":"3042","name":"晶技"},{"code":"8289","name":"泰藝"},{"code":"8182","name":"加高"}]},
  {"name":"探針卡","stocks":[{"code":"7734","name":"印能科技"},{"code":"6683","name":"雍智科技"},{"code":"6515","name":"穎崴"},{"code":"6510","name":"精測"},{"code":"6223","name":"旺矽"},{"code":"6217","name":"中探針"}]},
  {"name":"低軌衛星","stocks":[{"code":"6485","name":"點序"},{"code":"3138","name":"耀登"},{"code":"2485","name":"兆赫"},{"code":"6285","name":"啟碁"},{"code":"2413","name":"環科"},{"code":"2367","name":"燿華"},{"code":"7717","name":"萊德光電"},{"code":"2313","name":"華通"},{"code":"3491","name":"昇達科"}]},
  {"name":"工具機","stocks":[{"code":"4583","name":"台灣精銳"},{"code":"4571","name":"鈞興-KY"},{"code":"2049","name":"上銀"},{"code":"1539","name":"巨庭"},{"code":"4576","name":"大銀微系統"},{"code":"1540","name":"喬福"},{"code":"6609","name":"瀧澤科"},{"code":"1597","name":"直得"},{"code":"4561","name":"健椿"},{"code":"4540","name":"全球傳動"},{"code":"4510","name":"高鋒"},{"code":"4533","name":"協易機"},{"code":"2233","name":"宇隆"},{"code":"4526","name":"東台"}]},
  {"name":"機器人","stocks":[{"code":"2359","name":"所羅門"},{"code":"2250","name":"IKKA-KY"},{"code":"2365","name":"昆盈"},{"code":"8374","name":"羅昇"},{"code":"6215","name":"和椿"},{"code":"6922","name":"宸曜"},{"code":"2464","name":"盟立"},{"code":"2453","name":"凌群"},{"code":"1536","name":"和大"},{"code":"5392","name":"能率"},{"code":"5484","name":"慧友"},{"code":"6188","name":"廣明"},{"code":"4562","name":"穎漢"},{"code":"8234","name":"新漢"},{"code":"8071","name":"能率網通"},{"code":"3048","name":"益登"},{"code":"2374","name":"佳能"},{"code":"3379","name":"彬台"}]},
  {"name":"光電","stocks":[{"code":"3714","name":"富采"},{"code":"2426","name":"鼎元"},{"code":"6426","name":"統新"},{"code":"5244","name":"弘凱"},{"code":"6419","name":"京晨科"},{"code":"3437","name":"榮創"},{"code":"2393","name":"億光"},{"code":"4956","name":"光鋐"},{"code":"3031","name":"佰鴻"},{"code":"8240","name":"華宏"},{"code":"3673","name":"TPK-KY"},{"code":"6706","name":"惠特"},{"code":"5234","name":"達興材料"},{"code":"3339","name":"泰谷"},{"code":"4960","name":"誠美材"},{"code":"6405","name":"悅城"},{"code":"2489","name":"瑞軒"},{"code":"4949","name":"有成精密"},{"code":"2486","name":"一詮"}]},
  {"name":"功率半導體","stocks":[{"code":"5425","name":"台半"},{"code":"2481","name":"強茂"},{"code":"6525","name":"捷敏-KY"},{"code":"8261","name":"富鼎"},{"code":"3016","name":"嘉晶"},{"code":"3105","name":"穩懋"},{"code":"3707","name":"漢磊"}]},
  {"name":"光學鏡頭","stocks":[{"code":"6209","name":"今國光"},{"code":"2374","name":"佳能"},{"code":"6668","name":"中揚光"},{"code":"3019","name":"亞光"},{"code":"3630","name":"新鉅科"},{"code":"3504","name":"揚明光"},{"code":"3362","name":"先進光"},{"code":"4974","name":"亞泰"},{"code":"6278","name":"台表科"},{"code":"3406","name":"玉晶光"},{"code":"3441","name":"聯一光"},{"code":"4976","name":"佳凌"},{"code":"3008","name":"大立光"}]},
  {"name":"上曜","stocks":[{"code":"1316","name":"上曜"},{"code":"4303","name":"信立"},{"code":"4714","name":"永捷"},{"code":"5314","name":"世紀"},{"code":"6418","name":"詠昇"},{"code":"3313","name":"斐成"}]},
  {"name":"金融股","stocks":[{"code":"2886","name":"兆豐金"},{"code":"2884","name":"玉山金"},{"code":"2885","name":"元大金"},{"code":"2838","name":"聯邦銀"},{"code":"2812","name":"台中銀"},{"code":"2881","name":"富邦金"},{"code":"2882","name":"國泰金"},{"code":"2890","name":"永豐金"},{"code":"2891","name":"中信金"},{"code":"2892","name":"第一金"},{"code":"2883","name":"凱基金"},{"code":"2887","name":"台新新光金"},{"code":"2889","name":"國票金"},{"code":"6005","name":"群益證"},{"code":"2801","name":"彰銀"},{"code":"2816","name":"旺旺保"},{"code":"2820","name":"華票"},{"code":"2832","name":"台產"},{"code":"2834","name":"臺企銀"},{"code":"2836","name":"高雄銀"},{"code":"2845","name":"遠東銀"},{"code":"2849","name":"安泰銀"},{"code":"2850","name":"新產"},{"code":"2851","name":"中再保"},{"code":"2852","name":"第一保"},{"code":"2855","name":"統一證"},{"code":"2867","name":"三商壽"},{"code":"2880","name":"華南金"},{"code":"2897","name":"王道銀行"},{"code":"5880","name":"合庫金"},{"code":"5876","name":"上海商銀"},{"code":"6024","name":"群益期"},{"code":"5864","name":"致和證"},{"code":"5878","name":"台名"},{"code":"6015","name":"宏遠證"},{"code":"6016","name":"康和證"},{"code":"6020","name":"大展證"},{"code":"6021","name":"美好證"},{"code":"6023","name":"元大期"},{"code":"6026","name":"福邦證"}]},
  {"name":"航運","stocks":[{"code":"2637","name":"慧洋-KY"},{"code":"2615","name":"萬海"},{"code":"2609","name":"陽明"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2603","name":"長榮"},{"code":"5608","name":"四維航"},{"code":"2641","name":"正德"},{"code":"2605","name":"新興"},{"code":"2613","name":"中櫃"}]},
  {"name":"空運","stocks":[{"code":"6757","name":"台灣虎航"},{"code":"2610","name":"華航"},{"code":"2618","name":"長榮航"}]},
  {"name":"散裝","stocks":[{"code":"2605","name":"新興"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2641","name":"正德"},{"code":"2637","name":"慧洋-KY"}]},
  {"name":"聯電股","stocks":[{"code":"2363","name":"矽統"},{"code":"2303","name":"聯電"},{"code":"5347","name":"世界"}]},
  {"name":"鴻家軍","stocks":[{"code":"3062","name":"建漢"},{"code":"3498","name":"陽程"},{"code":"5243","name":"乙盛-KY"},{"code":"3092","name":"鴻碩"},{"code":"2328","name":"廣宇"},{"code":"2354","name":"鴻準"},{"code":"2317","name":"鴻海"}]},
  {"name":"台塑四寶","stocks":[{"code":"6505","name":"台塑化"},{"code":"1301","name":"台塑"},{"code":"1303","name":"南亞"},{"code":"1326","name":"台化"}]},
  {"name":"AI","stocks":[{"code":"3231","name":"緯創"},{"code":"2356","name":"英業達"},{"code":"2376","name":"技嘉"},{"code":"2382","name":"廣達"},{"code":"2377","name":"微星"}]},
  {"name":"彬彬","stocks":[{"code":"3379","name":"彬台"},{"code":"3022","name":"威強電"},{"code":"1569","name":"濱川"},{"code":"2328","name":"廣宇"}]},
  {"name":"IP","stocks":[{"code":"3443","name":"創意"},{"code":"3661","name":"世芯-KY"},{"code":"6533","name":"晶心科"},{"code":"3228","name":"金麗科"},{"code":"3529","name":"力旺"},{"code":"8227","name":"巨有科技"},{"code":"6643","name":"M31"},{"code":"6415","name":"矽力-KY"}]},
  {"name":"AI眼鏡","stocks":[{"code":"6237","name":"驊訊"},{"code":"6672","name":"騰輝電子-KY"},{"code":"6742","name":"澤米"},{"code":"3294","name":"英濟"},{"code":"3645","name":"達邁"},{"code":"6456","name":"GIS-KY"}]},
  {"name":"面板","stocks":[{"code":"2409","name":"友達"},{"code":"6116","name":"彩晶"},{"code":"3481","name":"群創"}]},
  {"name":"扇形封裝","stocks":[{"code":"3580","name":"友威科"},{"code":"3535","name":"晶彩科"},{"code":"3663","name":"鑫科"},{"code":"8064","name":"東捷"}]},
  {"name":"千元","stocks":[{"code":"3324","name":"雙鴻"},{"code":"5289","name":"宜鼎"},{"code":"1519","name":"華城"},{"code":"3529","name":"力旺"},{"code":"3017","name":"奇鋐"},{"code":"6781","name":"AES-KY"},{"code":"6805","name":"富世達"},{"code":"2454","name":"聯發科"},{"code":"3665","name":"貿聯-KY"},{"code":"2404","name":"漢唐"},{"code":"2368","name":"金像電"},{"code":"6442","name":"光聖"},{"code":"8299","name":"群聯"},{"code":"2308","name":"台達電"},{"code":"3008","name":"大立光"},{"code":"6510","name":"精測"},{"code":"2383","name":"台光電"},{"code":"3443","name":"創意"},{"code":"3163","name":"波若威"},{"code":"3653","name":"健策"},{"code":"6187","name":"萬潤"},{"code":"3491","name":"昇達科"},{"code":"6223","name":"旺矽"}]},
  {"name":"太陽能","stocks":[{"code":"6477","name":"安集"},{"code":"2406","name":"國碩"},{"code":"3576","name":"聯合再生"},{"code":"6443","name":"元晶"},{"code":"3686","name":"達能"},{"code":"6244","name":"茂迪"},{"code":"3691","name":"碩禾"}]}
];
const ALL_CODES = [...new Set(GROUPS.flatMap((g) => g.stocks.map((s) => s.code)))];

const HTML_PAGE = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>台股族群強弱排行</title>
<style>
  :root{
    --bg:#12100f; --panel:#1c1815; --panel-2:#241f1a; --line:#3a322b;
    --text:#f1ece6; --muted:#a89c8f; --up:#e6675f; --down:#5fae6f; --accent:#c9a98c;
  }
  *{box-sizing:border-box;}
  [hidden]{display:none!important;}
  body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,"PingFang TC","Microsoft JhengHei",sans-serif;padding-inline:0;}
  header{padding:20px 16px 8px;}
  h1{font-size:20px;margin:0 0 4px;text-wrap:balance;}
  .sub{color:var(--muted);font-size:13px;}
  .updated{color:var(--muted);font-size:11px;text-align:center;padding:8px 0 28px;}
  /* 2026-09-24 使用者：搜尋框、櫃買強弱widget移到標題列（跟盤中訊號同一排）；
     強勢/弱勢族群統計移到強勢/弱勢分頁正上方，不再擠在「各族群前三強個股」標題旁邊。 */
  .stat-bar-row{padding:12px 16px 0;}
  .loading{color:var(--muted);text-align:center;padding:40px 0;}

  .layout{display:flex;gap:14px;padding:8px 16px 32px;align-items:flex-start;flex-wrap:wrap;}
  /* 右欄固定寬度、不再撐滿：兩張個股卡各約 430px，名稱跟數字之間不留大片空白；
     剩下的寬度全部給左欄的六大族群卡。 */
  .col-left{flex:1 1 360px;min-width:300px;}
  .col-right{flex:0 1 860px;min-width:320px;max-width:100%;}
  .section-title{font-size:16px;font-weight:800;margin:2px 0 8px;color:var(--text);}
  .section-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 8px;}
  .section-head .section-title{margin:0;}

  /* 強勢／弱勢 分頁與統計 */
  .tabs{display:flex;gap:24px;padding:16px 16px 0;}
  .tab-btn{background:none;border:none;color:var(--muted);font-size:16px;font-weight:800;padding:0 0 10px;cursor:pointer;border-bottom:3px solid transparent;font-family:inherit;transition:color .15s ease,border-color .15s ease;}
  .tab-btn:hover{color:var(--text);}
  .tab-btn:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px;}
  .tab-btn.active.strong{color:var(--up);border-bottom-color:var(--up);}
  .tab-btn.active.weak{color:var(--down);border-bottom-color:var(--down);}
  .stat-bar{display:flex;gap:18px;padding:6px 14px;margin:0;background:var(--panel);border:1px solid var(--line);border-radius:10px;}
  .stat-item{display:flex;align-items:baseline;gap:6px;}
  .stat-num{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;}
  .stat-label{font-size:12px;color:var(--muted);}

  /* 左側：前六大族群 */
  .top6-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
  .top6-card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:14px 16px;cursor:pointer;transition:background .12s ease;}
  .top6-card:hover{background:var(--panel-2);}
  .top6-card:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  .top6-head{display:flex;align-items:center;gap:10px;margin-bottom:6px;}
  .badge{width:30px;height:30px;border-radius:50%;background:var(--accent);color:#241f1a;font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .top6-name{font-weight:800;font-size:22px;}
  .top6-chg{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;}

  /* 右側：各族群前三強／前三弱個股。兩欄、由上往下排：第1~3在左欄、第4~6在右欄。 */
  .top-groups-row{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(3, auto);grid-auto-flow:column;gap:8px;}
  .top-group-col{background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden;}
  .top-group-head{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:#4a3d34;cursor:pointer;transition:background .12s ease;}
  .top-group-head:hover{background:#57483d;}
  .top-group-head:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;}

  /* 族群成分股彈窗 */
  .group-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:99;padding:16px;}
  .group-modal-inner{background:var(--bg);border:1px solid var(--line);border-radius:14px;width:100%;max-width:480px;max-height:85vh;overflow-y:auto;padding:14px;box-shadow:0 12px 40px rgba(0,0,0,0.5);}
  .group-modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;position:sticky;top:0;background:var(--bg);padding-bottom:6px;}
  .gm-title{font-weight:800;font-size:16px;}
  .gm-list{display:flex;flex-direction:column;border-top:1px solid var(--line);}
  .gm-list .stock-row{padding:11px 4px;}
  .top-group-rank{font-size:17px;font-weight:800;color:#241f1a;background:var(--accent);border-radius:6px;padding:3px 9px;margin-right:8px;}
  .top-group-name{font-weight:800;font-size:17px;color:var(--text);}
  .top-group-chg{font-size:17px;font-weight:800;font-variant-numeric:tabular-nums;}
  .stock-row{display:flex;justify-content:space-between;align-items:center;padding:7px 10px;border-top:1px solid var(--line);}
  .stock-row .sname{font-weight:700;font-size:13px;}
  .stock-row .scode{color:var(--muted);font-size:11px;margin-left:4px;font-variant-numeric:tabular-nums;}
  .stock-row .schg{font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;}

  .up{color:var(--up);}
  .down{color:var(--down);}
  .flat{color:var(--muted);}

  @media (max-width: 640px){
    .top-groups-row{grid-template-columns:1fr;grid-template-rows:none;grid-auto-flow:row;}
    .stat-bar{gap:12px;}
    /* 手機版寬度不夠並排：搜尋框、櫃買強弱widget、盤中訊號各自佔滿一整行 */
    .stock-search-bar,.market-strength-bar{flex-basis:100%;max-width:none;}
    .signal-controls{margin-left:0;width:100%;justify-content:flex-end;}
  }
  @media (prefers-reduced-motion: reduce){
    *{transition:none!important;}
  }

  /* 個股列（代號在前、名稱在後，含成交價／漲跌） */
  .stock-row{display:flex;justify-content:space-between;align-items:center;padding:7px 10px;border-top:1px solid var(--line);cursor:pointer;transition:background .12s ease;}
  .stock-row:hover{background:rgba(201,169,140,0.08);}
  .stock-row:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;}
  .srow-left{display:flex;align-items:baseline;gap:6px;min-width:0;}
  .srow-left .scode{color:var(--muted);font-size:12px;font-variant-numeric:tabular-nums;flex-shrink:0;}
  .srow-left .sname{font-weight:700;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .srow-right{display:flex;align-items:center;gap:8px;flex-shrink:0;}
  .srow-right span{font-variant-numeric:tabular-nums;text-align:right;}
  .srow-right .spct{width:60px;font-size:14px;font-weight:800;}
  .srow-right .schg{width:56px;font-size:13px;font-weight:700;}
  .srow-right .sprice{width:64px;font-size:13px;font-weight:700;color:var(--text);}
  .srow-right .sprice.up{color:var(--up);}
  .srow-right .sprice.down{color:var(--down);}
  .srow-right .svol{width:64px;font-size:12px;font-weight:700;color:var(--muted);}
  .stock-col-labels{display:flex;justify-content:space-between;align-items:center;padding:4px 12px 0;}
  .stock-col-labels .srow-right span{color:var(--muted);font-size:10px;font-weight:600;}

  /* K 線圖彈窗 */
  .chart-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:100;}
  .chart-modal-inner{
    /* 拖曳圖表平移時不要把標題、說明文字反白成白底黑字（使用者 2026-09-22 回報看不到字） */
    user-select:none;-webkit-user-select:none;
    position:absolute;background:var(--bg);border:1px solid var(--line);border-radius:14px;
    width:min(1180px,94vw);height:min(800px,88vh);min-width:340px;min-height:400px;
    max-width:98vw;max-height:96vh;overflow:auto;resize:both;padding:14px 14px 24px;
    box-shadow:0 12px 40px rgba(0,0,0,0.5);
  }
  .chart-modal-inner input,.chart-modal-inner textarea{user-select:text;-webkit-user-select:text;}
  .chart-modal.fullscreen .chart-modal-inner{left:0!important;top:0!important;right:0;bottom:0;width:auto!important;height:auto!important;max-width:none;max-height:none;border-radius:0;resize:none;}
  .chart-modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;cursor:move;touch-action:none;}
  .chart-modal-head .cm-actions{cursor:default;}
  .cm-code{font-variant-numeric:tabular-nums;color:var(--muted);font-size:13px;margin-right:8px;}
  .cm-name{font-weight:800;font-size:17px;}
  .cm-data-badge{margin-left:8px;font-size:10px;font-weight:700;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:999px;padding:2px 8px;vertical-align:middle;}
  .chart-info-bar{flex:1;text-align:center;padding:0 8px;font-size:20px;font-weight:700;color:#fff5e0;font-variant-numeric:tabular-nums;}
  .cm-actions{display:flex;gap:6px;align-items:center;}
  .cm-quick-search{width:120px;background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:8px;padding:6px 10px;font-size:12px;font-family:inherit;}
  .cm-quick-search:focus{outline:2px solid var(--accent);outline-offset:1px;}
  .cm-go-btn{flex-shrink:0;background:var(--accent);color:var(--bg);border:1px solid var(--accent);border-radius:8px;height:32px;padding:0 12px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;}
  .cm-go-btn:hover{opacity:0.88;}
  .cm-icon-btn{background:var(--panel);border:1px solid var(--line);color:var(--text);width:32px;height:32px;border-radius:50%;font-size:14px;cursor:pointer;line-height:1;}
  .cm-icon-btn:hover{background:var(--panel-2);}
  .cm-icon-btn.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .cm-icon-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  .chart-tabs{display:flex;gap:6px;margin-bottom:10px;align-items:center;flex-wrap:wrap;}
  .ma-legend{display:flex;gap:10px;flex-wrap:wrap;margin-left:6px;font-size:11px;font-variant-numeric:tabular-nums;}
  .ma-legend-item{font-weight:700;white-space:nowrap;}
  .chart-tab{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:13px;font-weight:700;padding:6px 14px;border-radius:8px;cursor:pointer;font-family:inherit;transition:background .12s ease,color .12s ease;}
  .chart-tab:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  .chart-tab.active{color:var(--bg);background:var(--accent);border-color:var(--accent);}
  .signal-tab.signal-tab-purple{color:#d946ef;}  /* 族群大戶力／族群綜合表／盤中333 分頁字（2026-09-24 使用者：紫紅色） */

  /* 指標設定面板（週期／顏色／粗細／顯示） */
  .ind-settings{display:flex;flex-direction:column;gap:6px;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:8px 10px;margin-bottom:8px;}
  .ind-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
  .ind-vis{display:flex;align-items:center;cursor:pointer;}
  .ind-vis input{margin:0;cursor:pointer;}
  .ind-dot{width:10px;height:10px;border-radius:50%;margin-left:6px;flex-shrink:0;}
  .ind-label{font-size:12px;color:var(--muted);width:34px;flex-shrink:0;}
  .ind-period{width:52px;background:var(--bg);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:3px 6px;font-size:12px;font-variant-numeric:tabular-nums;}
  .ind-fixed{width:52px;color:var(--muted);font-size:12px;text-align:center;}
  .ind-color{width:28px;height:24px;padding:0;border:1px solid var(--line);border-radius:6px;background:none;cursor:pointer;}
  .ind-width{width:44px;background:var(--bg);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:3px 6px;font-size:12px;}
  .ind-w-label{font-size:10px;color:var(--muted);}

  .chart-canvas-wrap{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:4px;}
  .chart-canvas-wrap.price-wrap{height:380px;}
  .chart-canvas-wrap.volume-wrap{height:80px;}
  .chart-canvas-wrap.force-wrap{height:110px;}
  .chart-canvas-wrap.macd-wrap{height:100px;}
  .chart-canvas-wrap.kd-wrap{height:100px;}
  .chart-modal.fullscreen .chart-canvas-wrap.price-wrap{height:56vh;}
  .chart-modal.fullscreen .chart-canvas-wrap.volume-wrap{height:110px;}
  .chart-modal.fullscreen .chart-canvas-wrap.force-wrap{height:140px;}
  .chart-modal.fullscreen .chart-canvas-wrap.macd-wrap{height:130px;}
  .chart-modal.fullscreen .chart-canvas-wrap.kd-wrap{height:130px;}
  #klineCanvas,#volumeCanvas,#forceCanvas,#macdCanvas,#kdCanvas{display:block;width:100%;height:100%;touch-action:none;}

  .ind-panel-block{margin-top:10px;}
  .ind-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;}
  .macd-toggle{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:11px;font-weight:700;padding:3px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .macd-toggle.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}

  /* 主力買賣力子面板 */
  .force-panel{margin-top:10px;}
  .force-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;flex-wrap:wrap;gap:4px;}
  .force-title{font-size:13px;font-weight:800;color:#fff;}
  .force-legend{display:flex;align-items:center;font-size:11px;color:#f1ece6;}
  .fl-dot{width:7px;height:7px;border-radius:2px;display:inline-block;margin-left:8px;margin-right:3px;}
  .fl-dot:first-child{margin-left:0;}
  .fl-buy{background:var(--up);}
  .fl-sell{background:var(--down);}
  .fl-cum{background:var(--accent);border-radius:50%;}
  .force-note{font-size:11px;color:#f1ece6;margin-bottom:6px;}

  /* 頂部：標題／搜尋框／櫃買盤勢／盤中訊號同一排（2026-09-24 使用者：搜尋框移到標題右邊、
     櫃買強弱widget移到搜尋框右邊，盤中訊號維持最右邊；空間不夠時各自換行）。 */
  .header-top{display:flex;justify-content:flex-start;align-items:flex-start;gap:12px;flex-wrap:wrap;}
  .signal-controls{display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:auto;}
  .signal-badge-btn{display:flex;align-items:center;gap:6px;background:var(--panel);border:1px solid var(--line);color:var(--text);font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .signal-badge-btn:hover{background:var(--panel-2);}
  .sb-count{background:var(--accent);color:var(--bg);border-radius:999px;min-width:18px;padding:0 5px;text-align:center;font-size:11px;}
  .alert-toggle{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .alert-toggle.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .market-strength-bar{display:flex;align-items:center;gap:14px;padding:10px 14px;background:var(--panel);border:1px solid var(--line);border-radius:10px;flex-wrap:wrap;flex:1 1 300px;max-width:420px;}
  .ms-badge{font-size:14px;font-weight:800;padding:6px 14px;border-radius:8px;background:var(--panel-2);flex-shrink:0;}
  .ms-badge.up{color:var(--up);}
  .ms-badge.down{color:var(--down);}
  .ms-lines{font-size:11px;color:var(--muted);line-height:1.6;}
  .ms-line.up{color:var(--up);}
  .ms-line.down{color:var(--down);}
  .ms-updated{color:var(--muted);opacity:.8;}

  /* 股票搜尋 */
  .stock-search-bar{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--panel);border:1px solid var(--line);border-radius:10px;flex:1 1 260px;max-width:360px;}
  .stock-search-bar input{flex:1;background:var(--bg);border:1px solid var(--line);color:var(--text);border-radius:8px;padding:8px 12px;font-size:13px;font-family:inherit;}
  .stock-search-bar input:focus{outline:2px solid var(--accent);outline-offset:1px;}
  .ssb-hint{color:var(--down);font-size:12px;flex-shrink:0;}
  .ssb-go-btn{flex-shrink:0;background:var(--panel-2);border:1px solid var(--line);color:var(--text);border-radius:8px;width:36px;height:36px;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;}
  .ssb-go-btn:hover{background:var(--accent);color:var(--bg);}

  /* 底部工具列 */
  body{padding-bottom:56px;}
  .toolbar-bottom{position:fixed;left:0;right:0;bottom:0;display:flex;background:#6b5541;border-top:1px solid #8a6f57;z-index:50;overflow-x:auto;}
  .tb-btn{flex:1 1 0;min-width:84px;background:none;border:none;border-right:1px solid rgba(255,255,255,0.16);color:#fff;font-size:11px;font-weight:700;padding:9px 4px 8px;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:3px;}
  .tb-btn:last-child{border-right:none;}
  .tb-btn:hover{background:rgba(255,255,255,0.14);color:#fff;}
  .tb-icon{width:20px;height:20px;border-radius:6px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;}
  .toast{position:fixed;left:50%;bottom:72px;transform:translateX(-50%) translateY(12px);background:var(--panel-2);border:1px solid var(--line);color:var(--text);font-size:12px;padding:8px 16px;border-radius:999px;opacity:0;pointer-events:none;transition:opacity .15s ease,transform .15s ease;z-index:200;white-space:nowrap;}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(0);}

  /* 盤中訊號中心：常駐浮動視窗，不擋住底下頁面（不是點開才出現的彈窗） */
  .signal-modal{position:fixed;inset:0;z-index:101;pointer-events:none;}
  /* 從訊號中心點進 K 線圖：視窗不關、退到 K 線圖後面，關掉 K 線圖就原地回來（分頁、捲動位置都不變）。 */
  .signal-modal.behind-chart{z-index:98;}
  /* 多視窗 K 線圖（桌機）：每個 K 線圖是獨立的浮動視窗（內嵌同一頁的圖表模式），可同時開很多個、
     互不影響，主畫面照樣能點；手機仍用原本的單一全螢幕視窗。 */
  #chartWindows{position:fixed;inset:0;z-index:102;pointer-events:none;}
  .chart-float{position:absolute;pointer-events:auto;background:var(--bg);border:1px solid var(--line);border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,0.55);display:flex;flex-direction:column;min-width:360px;min-height:320px;max-width:98vw;max-height:96vh;overflow:hidden;resize:both;padding-bottom:12px;}
  .chart-float.front{box-shadow:0 16px 48px rgba(0,0,0,0.75);border-color:var(--accent);}
  .chart-float-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 8px 6px 12px;background:var(--panel);border-bottom:1px solid var(--line);cursor:move;touch-action:none;user-select:none;flex-shrink:0;}
  .chart-float-title{font-weight:800;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .chart-float-title .cf-name{color:var(--muted);font-weight:600;margin-left:6px;}
  .chart-float-actions{display:flex;gap:4px;flex-shrink:0;}
  .chart-float-actions button{background:var(--panel-2);border:1px solid var(--line);color:var(--text);border-radius:6px;font-size:12px;padding:3px 8px;cursor:pointer;font-family:inherit;}
  .chart-float-actions button:hover{background:var(--accent);color:var(--bg);}
  .chart-float iframe{flex:1 1 auto;width:100%;min-height:0;border:0;background:var(--bg);}
  .chart-float.dragging iframe{pointer-events:none;}
  /* 最大化：貼齊版面四邊（不含主頁的捲軸）。之前用 100vw／100vh 會把視窗右邊那 15px 蓋到主頁捲軸
     底下，畫面上看得到的捲軸是主頁的、拉了只會捲後面的儀表板，K 線視窗自己的捲軸被壓在下面拉不到。 */
  .chart-float.maximized{left:0!important;top:0!important;right:0;bottom:0;width:auto!important;height:auto!important;max-width:none;max-height:none;border-radius:0;resize:none;}
  body.chart-maximized{overflow:hidden;}
  .chart-float.minimized{display:none;}
  /* 最小化的 K 線視窗縮成底部托盤的小標籤，點一下復原 */
  #chartTray{position:fixed;left:8px;right:8px;bottom:62px;z-index:103;display:flex;gap:6px;flex-wrap:wrap;pointer-events:none;}
  #chartTray button{pointer-events:auto;background:var(--panel);border:1px solid var(--accent);color:var(--text);border-radius:8px;font-size:12px;font-weight:700;padding:5px 10px;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(0,0,0,0.5);}
  #chartTray button:hover{background:var(--accent);color:var(--bg);}
  /* K 線圖標題列下方：這檔的可交易條件與處置狀態 */
  .cm-flags{display:flex;flex-wrap:wrap;gap:6px;margin:-2px 0 8px;}
  .flag-pill{font-size:11px;border-radius:10px;padding:2px 9px;border:1px solid var(--line);background:var(--panel-2);color:var(--text);white-space:nowrap;}
  .flag-pill.off{color:var(--muted);opacity:.7;}
  .flag-pill.futures{color:#93c5fd;border-color:#93c5fd66;}
  .flag-pill.disposition{background:#d4a017;border-color:#d4a017;color:#fff;font-weight:700;}
  /* 盤中打 333：33 賽馬多／34 河流多／188 做多族群／199 做空族群 */
  .race-block{margin:0 0 14px;}
  /* 族群跟族群之間畫兩條粗黑線區隔（2026-09-24 使用者：族群綜合表、族群大戶力），第一個族群上面不畫。 */
  .combo-block + .combo-block,.ghf-block + .ghf-block,.bl-block + .bl-block{border-top:8px double #111;padding-top:10px;}
  /* 醞釀／發動分頁：沿用族群綜合表的表格樣式，另外給 9 欄的欄寬；發動（2）紅底、醞釀（1）藍綠底的段落標題 */
  .bl-table{min-width:58em;}
  .bl-table col.b-code{width:8%;} .bl-table col.b-name{width:12%;} .bl-table col.b-score{width:10%;} .bl-table col.b-pct{width:10%;}
  .bl-table col.b-price{width:11%;} .bl-table col.b-box{width:12%;} .bl-table col.b-tobox{width:15%;} .bl-table col.b-turn{width:9%;} .bl-table col.b-ratio{width:13%;}
  .bl-table .bl-score{font-weight:800;white-space:nowrap;}
  .bl-table .bl-box,.bl-table .bl-turn,.bl-table .bl-ratio{white-space:nowrap;}
  .bl-table .bl-tobox.up{color:var(--up);font-weight:700;}
  .bl-star{color:#d97706;margin-left:3px;}
  .bl-tag{display:inline-block;font-size:10px;font-weight:700;border-radius:6px;padding:0 6px;margin-left:4px;background:#7c3aed;color:#fff;white-space:nowrap;}
  .bl-tag.warn{background:#d97706;}
  .bl-section{font-weight:800;font-size:15px;color:#fff;border-radius:8px;padding:6px 10px;margin:12px 0 8px;}
  .bl-section.bl-launch{background:#c0392b;}
  .bl-section.bl-brew{background:#0f766e;}
  .bl-backfill-note{background:#fef3c7;color:#92400e;border:1px solid #fcd34d;border-radius:8px;font-weight:700;margin:8px 0;}
  .race-head{font-weight:800;font-size:14px;color:#fff;margin:6px 0 4px;}
  .race-sub{font-size:11px;color:var(--muted);margin-bottom:6px;}
  .race-row{display:flex;flex-wrap:wrap;row-gap:4px;align-items:center;gap:8px;padding:5px 8px;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums;cursor:pointer;}
  /* .race-line2用margin-left:auto貼齊右邊，族群大戶力這排後面還接了交易條件標籤
     （2026-09-24 使用者移到最後面）；原本.race-row沒有flex-wrap，line2後面的東西沒地方放
     只能疊在一起、把成交價蓋掉。加flex-wrap讓放不下的部分換到下一行，不會疊在一起
     （盤中333等其他沒有這排東西的列不受影響，本來就排得下，不會觸發換行）。
     使用者實機（iPad/iPhone Safari）測過還是跑版：auto-margin flex item加flex-wrap
     這個組合在不同瀏覽器引擎判斷「放不放得下」時不夠可靠。改成不管放不放得下，交易
     條件標籤／處置股徽章都強制自己獨立一行（跟手機版.race-line2強制換行是同一招），
     不用依賴瀏覽器自己算有沒有空間，各家引擎行為才會一致。 */
  .race-row .sig-eligibility{flex:1 1 100%;}
  .race-row:hover{background:var(--panel-2);}
  .race-row .race-code{color:var(--muted);font-size:12px;min-width:44px;}
  .race-row .race-rank{color:var(--muted);font-size:12px;min-width:40px;}
  .race-row .race-name{font-weight:700;flex:0 1 auto;max-width:8em;min-width:3.5em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .race-row .sig-group{background:#7c3aed;color:#fff;font-weight:700;font-size:12px;border-radius:6px;padding:1px 8px;flex-shrink:0;white-space:nowrap;}  /* 盤中333個股列的族群標籤：紫底白字（2026-09-24 使用者） */
  .race-row .race-pct{font-weight:700;}
  /* 族群大戶力：漲跌幅／漲跌／成交價三欄固定寬、靠右，跟卡片頂端的欄位標籤對齊；漲停／處置警示留固定寬的格子在最後面 */
  .race-row .race-pct,.race-row .race-chg,.race-row .race-price{font-weight:700;flex:0 0 5em;text-align:right;white-space:nowrap;}
  .race-row .race-chg.up,.race-row .race-price.up{color:var(--up);} .race-row .race-chg.down,.race-row .race-price.down{color:var(--down);}
  /* 漲停／跌停直接顯示在成交價底色上（2026-09-24 使用者：紅底白字＝漲停、綠底白字＝跌停），漲跌幅只留數字、
     不要🔒跟「漲停」字。底色包在成交價數字外面那顆小膠囊上，不是整個固定寬的格子，才不會塗到沒有數字的地方。
     族群綜合表／盤中333／族群大戶力共用。 */
  .limit-pill{display:inline-block;color:#fff;padding:1px 5px;border-radius:5px;font-weight:700;line-height:1.35;}
  .limit-pill.limit-up{background:var(--up);}
  .limit-pill.limit-down{background:var(--down);}
  .race-row .race-warn-slot{flex:0 0 3.6em;text-align:right;}
  .race-col-labels{display:flex;align-items:center;gap:8px;padding:0 8px 2px;}
  .race-row:has(.race-holder),.race-col-labels:has(.race-holder){max-width:900px;}  /* 盤中333專用（2026-09-24 使用者：壓縮鬆散的空白） */
  /* 盤中333：族群後面加均線分數欄（2026-09-24 使用者），名稱欄改固定寬（太長「…」），族群標籤跟均線分數每一列才會對齊，
     不會像「昇陽半導體」這種長名字把族群標籤往右推；多一欄所以整列最寬放到 1000px，電腦版才不會被擠到換行。 */
  .r333-row,.r333-labels{max-width:1000px !important;}
  .race-row.r333-row .race-name,.race-col-labels.r333-labels .race-name{flex:0 0 5.5em;max-width:none;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  /* 首頁的 .stock-row 是 justify-content:space-between：盤中333 列（也掛 stock-row）換行時，第一行的代號／名稱／族群／均線分數
     會被拉開散到整行，跟欄位標題對不齊；這裡改回靠左排。 */
  .race-row.r333-row{justify-content:flex-start;}
  /* 標題列跟資料列要同一套：資料列 .race-row 本來就 flex-wrap，標題列沒有 → iPad 寬度資料列換行、標題列沒換，欄位就錯開；
     代號／族群兩格的 em 寬度要用跟資料列一樣的字級（12px）算，手機版才不會標題比資料寬。 */
  .race-col-labels.r333-labels{flex-wrap:wrap;row-gap:4px;}
  .race-col-labels.r333-labels .race-code,.race-col-labels.r333-labels .race-group-label{font-size:12px;}
  .race-row .race-rank,.race-col-labels .race-rank-slot{flex:0 0 3.4em;font-size:12px;white-space:nowrap;}
  .race-row .race-ma-score,.race-col-labels .race-ma-score{flex:0 0 3.5em;text-align:center;white-space:nowrap;}
  .race-row .race-ma-score .race-ma-val{font-weight:800;color:var(--muted);}
  .race-row .race-ma-score .race-ma-val.hi{color:var(--up);}
  .race-row .race-ma-none{color:var(--muted);}
  /* 外層格子不設字級：flex 的 5.2em 才會跟資料列的 5.2em 用同一個字級算、欄寬一致；只縮小裡面的字 */
  .race-col-labels span{flex:0 0 5em;text-align:right;}
  .race-col-labels span b{color:var(--muted);font-size:10px;font-weight:600;}
  /* 欄位標題加「代號」「名稱」（2026-09-24 使用者），寬度跟資料列的代號／名稱格子一致，靠左對齊、
     不套用上面泛用的5em/靠右樣式。數字那一群（大戶力／漲跌幅／漲跌／成交價／符號）包成.race-line2，
     用margin-left:auto整組貼齊右邊，取代原本個別元素各自margin-left:auto／justify-content:flex-end
     （手機版寬度不夠時，這一群會整個換到下一行，見下面mobile media query）。 */
  .race-col-labels .race-code{flex:0 0 auto;min-width:44px;text-align:left;}
  .race-col-labels .race-name{flex:0 1 auto;max-width:8em;min-width:3.5em;text-align:left;}
  .race-row .race-line2,.race-col-labels .race-line2{display:flex;align-items:center;gap:8px;margin-left:auto;}
  .race-col-labels .race-warn-slot{flex:0 0 3.6em;}
  .race-row .race-pct.up{color:var(--up);} .race-row .race-pct.down{color:var(--down);}
  /* 盤中333：族群標籤固定寬、置中對齊，不會被其他欄位擠到只剩一個字（2026-09-24 使用者：族群被遮到、
     要對齊）；盤中大戶力／漲跌幅／漲跌／成交價／符號都是固定寬、貼齊右邊，跟欄位標籤對齊 */
  .race-row .race-badge{font-size:14px;flex:0 0 6.5em;text-align:right;white-space:nowrap;}
  .race-row .sig-group{flex:0 0 7em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;}
  .race-col-labels .race-group-label{flex:0 0 7em;text-align:center;}
  /* 大戶力％跟金額改上下兩行放（2026-09-24 使用者：不要前後放一起、金額放下面），各自靠右對齊自己的
     格子，萬／億不同長度也不會看起來歪一邊；欄寬跟著縮窄。 */
  .race-row .race-holder{flex:0 0 6.5em;text-align:right;white-space:nowrap;overflow:hidden;}
  /* inline-flex：紅／綠底只包住％跟金額本身（2026-09-24 使用者：沒有數字的地方不要塗底色），靠格子的
     text-align:right 貼齊右邊；原本 display:flex 是區塊元素，會撐滿整個格子寬。 */
  .race-row .race-holder .sig-label{font-size:11px;padding:2px 6px;display:inline-flex;flex-direction:column;align-items:flex-end;line-height:1.25;gap:1px;}
  .race-row .race-holder .sig-label .hf-amt{font-size:.82em;font-weight:600;opacity:.92;}
  .race-row .race-holder-none{color:var(--muted);}
  .race-col-labels .race-holder{flex:0 0 6.5em;}
  .race-col-labels .race-badge-slot{flex:0 0 6.5em;white-space:nowrap;overflow:visible;}
  .race-row .pill-warn{background:#dc2626;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;flex-shrink:0;white-space:nowrap;}
  /* 族群大戶力卡片複用signal-row的大戶力顏色膠囊／資格標籤樣式，但外層是race-row */
  .race-row .sig-label{color:var(--text);opacity:.85;white-space:nowrap;flex-shrink:0;font-size:12px;}
  .race-row .sig-label.sig-bull{background:var(--up);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .race-row .sig-label.sig-bear{background:var(--down);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .race-row .sig-eligibility{display:inline-flex;gap:4px;flex:1 1 auto;min-width:0;overflow:hidden;}
  .race-row .sig-eligibility span{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;white-space:nowrap;}
  .race-row .sig-eligibility span.sig-futures{color:#93c5fd;border-color:#93c5fd66;}
  .race-row .sig-eligibility span.pill-disposition{background:#d4a017;color:#fff;border-color:#d4a017;font-weight:700;}
  .race-row .disp-clauses{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;white-space:nowrap;flex-shrink:0;}
  .race-row .pill-gap{background:#d97706;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;flex-shrink:0;white-space:nowrap;}
  .race-row .pill-live{background:#16a34a;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;flex-shrink:0;white-space:nowrap;}
  /* 族群綜合表：大戶力+處置/注意狀態合併成表格，欄位對齊，不是條列式一排排pill */
  /* 手機版（2026-09-24 使用者）：表格不要硬擠進螢幕寬度，漲跌幅／漲跌／成交價會疊在一起；
     表格最少 52em 寬（桌機 672px 視窗剛好放得下、不會多出橫向捲軸），手機上超出的部分讓整個
     訊號中心視窗往右滑動看（overflow 交給 .signal-modal-inner，不是每張表各自捲）。 */
  .combo-table-wrap{overflow-x:visible;margin-bottom:4px;}
  /* table-layout:fixed + 明確欄寬：欄寬由百分比決定、不被最長的那顆標籤撐開，表頭跟每一列的欄位才會對齊；
     太長的標籤文字在自己的格子裡換行，不會把整張表撐到超出視窗。 */
  .combo-table{width:100%;min-width:52em;table-layout:fixed;border-collapse:collapse;font-variant-numeric:tabular-nums;font-size:12px;}
  .combo-table col.c-code{width:9%;} .combo-table col.c-name{width:13%;} .combo-table col.c-pct{width:12%;}
  .combo-table col.c-chg{width:10%;} .combo-table col.c-price{width:11%;}
  .combo-table col.c-holder{width:21%;} .combo-table col.c-disp{width:24%;}
  /* 表頭：白字、字放大到 12px（原 10px 的 1.2 倍）、底色淺灰帶一點紫，跟資料列分開 */
  .combo-table th{text-align:left;color:#fff;background:#645a72;font-weight:600;font-size:12px;padding:4px 6px;border-bottom:1px solid var(--line);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .combo-table td{padding:4px 6px;border-bottom:1px solid var(--line);vertical-align:middle;white-space:normal;overflow-wrap:anywhere;}
  /* 表格列不掛 .stock-row：首頁那條 .stock-row{display:flex} 會把 <tr> 變 flex 容器、每格壓成一個字一行直排 */
  .combo-table tr.combo-row{display:table-row;cursor:pointer;}
  .combo-table tr.combo-row:hover{background:var(--panel-2);}
  .combo-table .combo-code{color:var(--muted);white-space:nowrap;}
  .combo-table .combo-name{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .combo-table .combo-pct{font-weight:700;}
  .combo-table .combo-pct.up{color:var(--up);} .combo-table .combo-pct.down{color:var(--down);}
  .combo-table .combo-chg,.combo-table .combo-price{font-weight:700;white-space:nowrap;}
  .combo-table .combo-chg.up,.combo-table .combo-price.up{color:var(--up);} .combo-table .combo-chg.down,.combo-table .combo-price.down{color:var(--down);}
  .combo-table .sig-bull{background:var(--up);color:#fff;padding:2px 6px;border-radius:6px;font-weight:700;display:inline-block;}
  .combo-table .sig-bear{background:var(--down);color:#fff;padding:2px 6px;border-radius:6px;font-weight:700;display:inline-block;}
  /* 大戶力格（2026-09-24 使用者：也要切起）跟盤中333／族群大戶力共用raceHolderCellHtml，
     %在上、金額在下兩行疊放，不要左右塞一行。 */
  .combo-table .combo-holder .sig-label{font-size:11px;padding:2px 6px;display:inline-flex;flex-direction:column;align-items:flex-end;line-height:1.25;gap:1px;}
  .combo-table .combo-holder .sig-label .hf-amt{font-size:.82em;font-weight:600;opacity:.92;}
  .combo-table .combo-holder .race-holder-none{color:var(--muted);}
  .combo-table .pill-warn{background:#dc2626;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;display:inline-block;}
  .combo-table .disp-clauses{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;display:inline-block;}
  .combo-table .pill-gap{background:#d97706;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;display:inline-block;}
  .combo-head.up{color:var(--up);} .combo-head.down{color:var(--down);}
  /* 族排名次：白底紫紅字的小標籤（2026-09-24 使用者），族群綜合表、族群大戶力共用；漲的、跌的族群都一樣 */
  .race-head .combo-rank{color:#d946ef;background:#fff;border-radius:6px;padding:1px 7px;font-weight:700;display:inline-block;line-height:1.35;}
  /* 族群名稱、今天平均漲跌幅：紫底白字的獨立色塊（2026-09-24 使用者），跟漲跌方向無關，族群大戶力、族群綜合表共用 */
  .race-head .head-pill{background:#7c3aed;color:#fff;border-radius:6px;padding:1px 8px;font-weight:700;display:inline-block;}
  .combo-filter-bar{display:flex;gap:6px;margin-bottom:6px;}
  .combo-filter-bar .combo-filter-btn,.combo-filter-bar .hf-filter-btn,.combo-filter-bar .hf-day-btn,.combo-filter-bar .race333-filter-btn{padding:4px 10px;font-size:12px;}
  .combo-filter-bar .hf-day-btn[disabled]{opacity:.45;cursor:default;}
  /* 大戶力≥10%／≤-10%篩選鈕改黑底白字（2026-09-24 使用者：「這兩項功能全部改成黑底白字」），
     族群大戶力／族群綜合表／盤中333三個分頁共用同一套樣式；選取中額外加紫色外框標示，
     不然黑底白字選取前後兩個狀態會分不出哪個正在篩選中。 */
  .hf-filter-btn,.combo-filter-btn,.race333-filter-btn{background:#000;color:#fff;border-color:#000;}
  .hf-filter-btn:hover,.combo-filter-btn:hover,.race333-filter-btn:hover{background:#2a2a2a;}
  .hf-filter-btn.active,.combo-filter-btn.active,.race333-filter-btn.active{background:#000;color:#c084fc;border-color:#000;font-weight:800;}  /* 按下去整個字變紫色（2026-09-24 使用者），不用外框 */
  .race-group{display:flex;align-items:center;gap:8px;padding:4px 8px;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums;}
  .race-group .race-gname{font-weight:700;}
  .race-group .race-gpct{color:var(--muted);font-size:12px;margin-left:auto;}
  .race-sep{text-align:center;color:var(--muted);font-size:12px;padding:4px 0;letter-spacing:1px;}
  .race-note{font-size:12px;color:var(--muted);padding:6px 8px;}
  .race-trailer{padding:6px 8px;font-weight:700;}
  .race-otc{display:inline-block;border:1px solid var(--line);border-radius:8px;padding:6px 12px;margin:2px 0 12px;font-weight:700;background:var(--panel-2);}
  .race-otc.up{color:var(--up);} .race-otc.down{color:var(--down);}
  /* 內嵌／獨立視窗的圖表模式：只顯示 K 線圖、填滿整個視窗 */
  body.chart-window-mode{padding-bottom:0;overflow:hidden;}
  body.chart-window-mode > *:not(.chart-modal){display:none!important;}
  body.chart-window-mode .chart-modal{background:none;}
  body.chart-window-mode .chart-modal-inner{left:0!important;top:0!important;right:0;bottom:0;width:auto!important;height:auto!important;max-width:none;max-height:none;border-radius:0;border:0;resize:none;}
  body.chart-window-mode .chart-modal-head{cursor:default;}
  body.chart-window-mode #cmMax{display:none;}
  .signal-modal-inner{position:absolute;background:var(--bg);border:1px solid var(--line);border-radius:14px;width:min(672px,94vw);height:min(768px,86vh);min-width:280px;min-height:320px;max-width:100vw;max-height:100vh;overflow:auto;resize:both;padding:14px;box-shadow:0 12px 40px rgba(0,0,0,0.5);pointer-events:auto;}
  /* 盤中訊號中心改成淺灰底、深色字（2026-09-24 使用者），只影響這個視窗，其他頁面（含K線圖）維持原本深色主題。
     面板／列表／表格幾乎都是用下面這組CSS變數畫的，在這裡重新定義同一組變數，視窗裡的東西會自動跟著換色；
     少數幾個沒有走變數、原本假設深色背景寫死淺色文字的地方（族群標題白字、「有股期」淡藍字）另外覆寫。 */
  #signalModalInner{
    --bg:#eef0f2; --panel:#e2e4e8; --panel-2:#d7d9de; --line:#c3c6cc;
    --text:#1a1c1f; --muted:#54585f; --accent:#8a6d3f; --up:#c0392b; --down:#15803d;
    color:var(--text);  /* body 本身也是用var(--text)畫字，但那是套用:root原本的深色主題值算出來的固定顏色，
      子層沒有另外設color的元素會直接繼承那個算好的顏色，不會因為這裡重新定義了--text就自動換色；
      這裡的元素要親自再宣告一次color:var(--text)，才會用新的淺色主題值重算、往下繼承。 */
  }
  #signalModalInner .race-head{color:var(--text);}
  #signalModalInner .sig-futures{color:#1d4ed8;border-color:#1d4ed866;}
  .signal-modal-inner.collapsed{height:auto!important;min-height:0;overflow:hidden;resize:none;padding:10px 14px;}
  /* 視窗四邊＋四角的伸縮把手（2026-09-24 使用者：要能上下左右伸展），放在覆蓋層上、用 JS 貼著視窗邊緣 */
  .sm-resize{position:absolute;z-index:2;pointer-events:auto;touch-action:none;}
  .sm-resize-n,.sm-resize-s{cursor:ns-resize;} .sm-resize-e,.sm-resize-w{cursor:ew-resize;}
  .sm-resize-ne,.sm-resize-sw{cursor:nesw-resize;} .sm-resize-nw,.sm-resize-se{cursor:nwse-resize;}
  body.signal-window-mode .sm-resize{display:none;}
  .signal-modal-inner.collapsed .signal-help,
  .signal-modal-inner.collapsed .signal-tabs-bar,
  .signal-modal-inner.collapsed .signal-body,
  .signal-modal-inner.collapsed .sm-sub{display:none;}
  /* 使用者 2026-09-24：標題列跟下面內容區塊都變淺灰後分不出來，改成深灰底、白字，
     跟下面淺灰底的內容區隔開；裡面的按鈕（交易日期／訊號教學／…）本來就有自己的淺色底、
     深色字，疊在深灰底上對比更清楚，不用另外調。 */
  .signal-modal-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px;cursor:move;touch-action:none;flex-wrap:wrap;background:#33333a;color:#fff;padding:10px 12px;border-radius:10px;}
  /* 拖曳標題列時不要選到標題文字：選到之後下一次按住拖曳會變成「拖曳選取的文字」，瀏覽器直接取消視窗拖曳，只動一下就停。 */
  .signal-modal-head{-webkit-user-select:none;user-select:none;}
  .signal-modal-head .sm-sub{color:#b8b8bf;}
  .sm-title{font-weight:800;font-size:16px;}
  .sm-sub{color:var(--muted);font-size:11px;margin-top:2px;max-width:320px;}
  .sm-actions{display:flex;gap:6px;align-items:center;cursor:default;flex-wrap:wrap;}
  .sm-date-pill{background:var(--bg);border:1px solid var(--line);color:var(--muted);font-size:11px;padding:6px 10px;border-radius:8px;display:flex;align-items:center;}
  .sm-btn{background:var(--panel);border:1px solid var(--line);color:var(--text);font-size:11px;font-weight:700;padding:6px 10px;border-radius:8px;cursor:pointer;font-family:inherit;}
  .sm-btn:hover{background:var(--panel-2);}
  .sm-btn.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .signal-help{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px 10px 8px 26px;font-size:11px;color:var(--muted);margin-bottom:8px;}
  /* 訊號教學改條列式（2026-09-24 使用者：不要全部擠在一起），每個分頁一條、清楚分開 */
  .signal-help ul{margin:0;padding:0;list-style:none;}
  .signal-help li{position:relative;margin-bottom:7px;}
  .signal-help li:last-child{margin-bottom:0;}
  .signal-help li::before{content:'•';position:absolute;left:-14px;color:var(--accent);font-weight:700;}
  .signal-help li b{color:var(--text);}
  /* 分頁按鈕列墊一塊灰底（2026-09-24 使用者：背景白白的，加灰色底色跳脫出層次感）：
     深灰標題列 → 灰底分頁列 → 淺色分頁按鈕，三層分得出來。 */
  .signal-tabs-bar{flex-wrap:wrap;background:#c4c8cf;padding:8px;border-radius:10px;}
  .sig-count{background:var(--panel-2);color:var(--muted);border-radius:999px;padding:0 6px;margin-left:4px;font-size:10px;}
  .signal-tab.active .sig-count{background:var(--bg);color:var(--accent);}
  .signal-history-bar{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin-bottom:8px;}
  .signal-history-bar input{background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:4px 8px;font-family:inherit;}
  .signal-list{display:flex;flex-direction:column;border-top:1px solid var(--line);}
  .signal-row{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:9px 4px;border-bottom:1px solid var(--line);font-size:12px;cursor:pointer;transition:background .12s ease;}
  /* 訊號條件明細（同秒幾筆/合計張數、A～D同步濾網各項數值等）另起一行，跟另一台工具一樣把條件寫出來。 */
  .signal-row .sig-note{flex-basis:100%;color:var(--muted);font-size:11px;line-height:1.4;padding-left:50px;white-space:normal;}
  .signal-row:hover{background:rgba(201,169,140,0.08);}
  .signal-row .sig-time{color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0;width:40px;}
  .signal-row .sig-code{color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0;}
  .signal-row .sig-group{color:#fff;font-size:11px;background:#7c3aed;font-weight:700;border-radius:6px;padding:1px 8px;flex-shrink:0;white-space:nowrap;}
  .signal-row .sig-name{font-weight:700;flex-shrink:0;}
  .signal-row .sig-label{color:var(--text);opacity:.85;white-space:nowrap;flex-shrink:0;}
  .signal-row .sig-label.sig-bull{background:var(--up);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .signal-row .sig-label.sig-bear{background:var(--down);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .signal-row .sig-eligibility{display:inline-flex;gap:4px;flex-shrink:0;}
  .signal-row .sig-eligibility span{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;white-space:nowrap;}
  .signal-row .sig-eligibility span.sig-futures{color:#93c5fd;border-color:#93c5fd66;}
  /* 處置股：黃底白字；族群名次：漲幅前10紅底白字、跌幅前10綠底白字，其餘灰色 */
  .signal-row .sig-eligibility span.pill-disposition{background:#d4a017;color:#fff;border-color:#d4a017;font-weight:700;}
  .signal-row .sig-note .sig-eligibility{margin-left:4px;vertical-align:middle;}
  /* 盤中大戶力排行（2026-09-24 使用者）：名稱／族群／大戶力買賣標籤固定寬、對齊，不會因為文字長短
     （有沒有「強力」二字、族群名長短）每一列的起始位置都不一樣；漲跌幅／漲跌／成交價貼齊最右邊。 */
  .signal-row .sig-name{flex:0 0 5.5em;max-width:5.5em;overflow:hidden;text-overflow:ellipsis;}
  .signal-row .sig-group{flex:0 0 7em;text-align:center;overflow:hidden;text-overflow:ellipsis;}
  .signal-row .sig-label.hf-tier{flex:0 0 12.5em;text-align:left;}
  .signal-row .srow-right{margin-left:auto;}
  .signal-row.signal-col-labels{cursor:default;padding-top:2px;padding-bottom:4px;}
  .signal-row.signal-col-labels:hover{background:none;}
  .signal-row.signal-col-labels b{color:var(--muted);font-size:10px;font-weight:600;}
  .rank-pill{display:inline-block;font-size:10px;border-radius:10px;padding:1px 7px;border:1px solid var(--line);background:var(--panel-2);color:var(--muted);white-space:nowrap;vertical-align:middle;}
  .rank-pill.top-up{background:var(--up);color:#fff;border-color:var(--up);font-weight:700;}
  .rank-pill.top-down{background:var(--down);color:#fff;border-color:var(--down);font-weight:700;}
  .signal-empty{padding:30px 10px;text-align:center;color:var(--muted);}
  .signal-note{padding:10px 12px;font-size:12px;color:var(--muted);background:var(--panel-2);border-bottom:1px solid var(--line);}
  .signal-section-title{padding:10px 12px 6px;font-size:12px;font-weight:700;color:var(--muted);}
  .se-title{font-size:13px;font-weight:700;margin-bottom:6px;}
  .se-sub{font-size:11px;}

  /* 訊號視窗被「移到另一螢幕」開成獨立瀏覽器視窗時：填滿整個視窗、不需要遮罩與拖曳 */
  body.signal-window-mode{padding-bottom:0;}
  body.signal-window-mode > *:not(.signal-modal):not(.chart-modal):not(.group-modal){display:none!important;}
  body.signal-window-mode .signal-modal{position:static;background:none;padding:0;}
  body.signal-window-mode .signal-modal-inner{position:static;width:100%;height:100vh;max-width:none;max-height:none;border-radius:0;box-shadow:none;}
  body.signal-window-mode .signal-modal-head{cursor:default;}
  body.signal-window-mode #smMoveWindow,body.signal-window-mode #smRecenter{display:none;}

  @media (max-width: 640px){
    .toolbar-bottom{justify-content:flex-start;}
    .tb-btn{min-width:72px;}
    /* 手機版K線圖視窗：標題列跟快速切換搜尋列擠不下，改成換行成兩列，
       避免搜尋框、進入分K按鈕被壓縮到點不到。 */
    .chart-modal-head{flex-wrap:wrap;row-gap:8px;}
    .cm-actions{width:100%;justify-content:flex-end;}
    /* 盤中333／族群大戶力的個股列（2026-09-24 使用者：漲跌幅/漲跌/成交價/大戶力手機上被擠到畫面外、
       對不齊）：代號、名稱（跟族群標籤/資格標籤）留在第一行；大戶力／漲跌幅／漲跌／成交價／符號這一群
       (.race-line2) 塞不下第一行剩餘空間時，整組換到自己獨立的第二行、貼齊右邊，不會被切在畫面外，
       欄位標題列也用同一顆.race-line2、同樣換行，兩者維持對齊。 */
    .race-row,.race-col-labels{flex-wrap:wrap;row-gap:4px;}
    /* 換到第二行還是塞不太下（8.5em+5em×3+6.5em 這種桌機欄寬，手機版寬度根本不夠）：字級跟固定欄寬
       一起縮小；真的還是放不下（例如族群大戶力那顆大戶力標籤文字特別長）就讓這一群自己橫向捲動，
       不會整個被切掉看不到，也不會拖著代號/名稱一起被推出畫面。 */
    .race-row .race-line2,.race-col-labels .race-line2{flex:1 1 100%;justify-content:flex-end;margin-left:0;font-size:14px;}
    .race-row .race-line2{overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:1px;}
    .race-row .race-holder,.race-col-labels .race-holder{flex:0 0 6.5em;}
    .race-row .race-pct,.race-row .race-chg,.race-row .race-price,.race-col-labels .race-line2 span{flex:0 0 4em;}
    .race-row .race-badge,.race-col-labels .race-badge-slot{flex:0 0 5em;}
    .race-row .race-warn-slot,.race-col-labels .race-warn-slot{flex:0 0 3em;}
  }
  /* 手機版族群大戶力改成跟族群綜合表一樣一檔一行（2026-09-24 使用者）：代號、名稱、大戶力、漲跌幅、漲跌、
     成交價排同一行，可融資／可融券等交易條件標籤放在股名下面。每一列跟欄位標題列各自是同一組固定欄寬的
     grid（字級也一樣，em 欄寬才算得一樣），名稱欄吃剩下的寬度、太長就「…」；.race-line2 用 display:contents
     攤平，讓裡面的四格直接當欄位。名次徽章手機版不顯示；處置股膠囊標籤列已經有，warn-slot 手機版也不重複放。
     放在上面手機版規則後面，同樣特殊性時這裡才會蓋過去。 */
  @media (max-width: 640px){
    .race-row.ghf-row,.race-col-labels.ghf-labels{display:grid;grid-template-columns:2.7em minmax(0,1fr) 4.4em 4.2em 3.9em 4.7em;column-gap:3px;row-gap:3px;align-items:center;font-size:12px;}
    .ghf-row .race-line2,.ghf-labels .race-line2{display:contents;font-size:inherit;}
    .ghf-row .race-badge,.ghf-row .race-warn-slot,.ghf-labels .race-warn-slot{display:none;}
    .ghf-row .race-code,.ghf-labels .race-code,.ghf-row .race-name,.ghf-labels .race-name{min-width:0;max-width:none;}
    .ghf-row .race-holder .sig-label{padding:2px 4px;}
    .ghf-row .limit-pill{padding:1px 3px;}
    .ghf-row .sig-eligibility{grid-column:2 / -1;flex-wrap:wrap;row-gap:3px;}
    /* 盤中333 手機版第二行（大戶力／漲跌幅／漲跌／成交價／名次）：原本 14px＋8px 間距總寬超過螢幕，靠右對齊時最左邊的
       大戶力被切掉；改 12px、6px 間距剛好放得下，標題列的大戶力／名次格子寬度也改成跟資料列一樣。 */
    .r333-row .race-line2,.r333-labels .race-line2{font-size:12px;gap:6px;}
    .r333-row .race-line2 .race-holder,.r333-labels .race-line2 .race-holder{flex:0 0 6.5em;}
    .r333-row .race-line2 .race-badge,.r333-labels .race-line2 .race-badge-slot{flex:0 0 5em;min-width:0;}
    /* 名次那格：資料列字級 14px，標題列也用 14px 算 5em 才一樣寬；「🚀高於前天收盤%」放不下一行就在格子裡換行，不要把整排撐寬 */
    .r333-labels .race-line2 .race-badge-slot{font-size:14px;white-space:normal;line-height:1.15;}
    .r333-row .race-line2 .race-pct,.r333-row .race-line2 .race-chg,.r333-row .race-line2 .race-price,
    .r333-labels .race-line2 span:not(.race-holder):not(.race-badge-slot){flex:0 0 4em;}
  }

  /* 平板(iPad)以上：盤中訊號中心視窗跟裡面文字放大約1.3倍，方便閱讀。
     原本用CSS zoom屬性做全域縮放，但zoom是非標準屬性，搭配這個視窗
     本身用的overflow:auto+resize:both，在iPadOS Safari上不可靠、
     實際體感沒有放大效果；改成把各元素font-size直接乘1.3寫死，所有
     瀏覽器行為一致。只加在#signalModalInner底下，不會連帶把K線圖
     共用的.chart-tab分頁也放大。 */
  @media (min-width: 768px){
    #signalModalInner{width:min(1180px,96vw);height:min(920px,92vh);}
    #signalModalInner .sm-title{font-size:21px;}
    #signalModalInner .sm-sub{font-size:14px;max-width:420px;}
    #signalModalInner .sm-date-pill{font-size:14px;padding:8px 13px;}
    #signalModalInner .sm-btn{font-size:14px;padding:8px 13px;}
    #signalModalInner .signal-help{font-size:14px;}
    #signalModalInner .chart-tab{font-size:17px;padding:8px 18px;}
    #signalModalInner .sig-count{font-size:13px;}
    #signalModalInner .signal-history-bar{font-size:16px;}
    /* 2026-09-24 使用者：篇幅多的分頁（盤中大戶力、特大買賣單、族群大戶力、族群綜合表、盤中333）
       名稱與數字再放大 1.2 倍、每一行的間距加大。欄位標籤列跟資料列字級要一樣，em 寬度才會對齊。 */
    #signalModalInner .signal-row{font-size:19px;gap:14px;padding:14px 6px;}
    #signalModalInner .signal-row .sig-time{width:60px;}
    #signalModalInner .signal-row .sig-group{font-size:17px;}
    #signalModalInner .signal-row .sig-note{font-size:15px;padding-left:74px;}
    #signalModalInner .signal-row .sig-eligibility span{font-size:12px;}
    #signalModalInner .signal-row .sig-label.sig-bull,
    #signalModalInner .signal-row .sig-label.sig-bear{padding:3px 10px;}
    #signalModalInner .signal-note{font-size:16px;}
    #signalModalInner .signal-section-title{font-size:16px;}
    #signalModalInner .se-title{font-size:17px;}
    #signalModalInner .se-sub{font-size:14px;}
    #signalModalInner .race-row,#signalModalInner .race-col-labels{font-size:19px;}
    #signalModalInner .race-row{gap:10px;padding:9px 8px;}
    #signalModalInner .race-row .race-code,#signalModalInner .race-row .race-rank,#signalModalInner .race-col-labels .race-code,#signalModalInner .race-col-labels .race-rank-slot{font-size:14px;}
    #signalModalInner .race-col-labels.r333-labels{gap:10px;}  /* 資料列在這個寬度 gap 是 10px，標題列要一樣，左邊固定寬的欄位才對得齊 */
    #signalModalInner .race-row .sig-group,#signalModalInner .race-col-labels .race-group-label{font-size:14px;}
    #signalModalInner .race-row .sig-label{font-size:14px;}
    #signalModalInner .race-row .race-holder .sig-label{font-size:13px;}
    #signalModalInner .race-row .pill-warn,#signalModalInner .race-row .pill-gap,#signalModalInner .race-row .pill-live{font-size:13px;}
    #signalModalInner .race-row .sig-eligibility span,#signalModalInner .race-row .disp-clauses{font-size:12px;}
    #signalModalInner .race-row .race-badge{font-size:17px;}
    #signalModalInner .race-col-labels .race-badge-slot{font-size:17px;}
    #signalModalInner .race-col-labels span b{font-size:12px;}
    #signalModalInner .race-head{font-size:17px;margin:8px 0 6px;}
    #signalModalInner .race-sub{font-size:13px;}
    #signalModalInner .race-note,#signalModalInner .race-sep{font-size:14px;}
    #signalModalInner .race-group{font-size:17px;padding:6px 8px;}
    #signalModalInner .race-block{margin-bottom:18px;}
    #signalModalInner .combo-table,#signalModalInner .combo-table th{font-size:14.5px;}
    #signalModalInner .combo-table th{padding:6px 8px;}
    #signalModalInner .combo-table td{padding:8px 8px;}
    #signalModalInner .combo-table .pill-warn,#signalModalInner .combo-table .pill-gap{font-size:13px;}
    #signalModalInner .combo-table .disp-clauses{font-size:12px;}
  }
  /* 桌機版（螢幕夠寬，>=1100px）大戶力%跟金額改回前後（同一行）排列；手機／iPad（<1100px，
     含1180px上限的視窗本身撐不到這麼寬時）維持%在上、金額在下的兩行疊放
     （2026-09-24 使用者：這個並排只有電腦版，手機跟iPad要維持上下）。 */
  @media (min-width:1100px){
    #signalModalInner .race-row .race-holder,#signalModalInner .race-col-labels .race-holder{flex:0 0 9em;}
    #signalModalInner .race-row .race-holder .sig-label,#signalModalInner .combo-table .combo-holder .sig-label{flex-direction:row;align-items:baseline;gap:0;}
    #signalModalInner .race-row .race-holder .sig-label .hf-amt,#signalModalInner .combo-table .combo-holder .sig-label .hf-amt{font-size:.82em;}
    #signalModalInner .race-row .race-holder .sig-label .hf-amt::before,#signalModalInner .combo-table .combo-holder .sig-label .hf-amt::before{content:'・';opacity:.7;}
  }
</style>
</head>
<body>

<header>
  <div class="header-top">
    <div class="brand">
      <h1>台股族群強弱排行</h1>
      <div class="sub">依族群平均漲跌幅排序，每 15 秒自動更新一次</div>
    </div>
    <div class="stock-search-bar">
      <input type="text" id="stockSearchInput" placeholder="輸入代號或名稱，按 Enter 或點右邊圖示開啟五分鐘K線圖">
      <button class="ssb-go-btn" id="stockSearchGoBtn" aria-label="開啟K線圖">🔍</button>
      <span class="ssb-hint" id="stockSearchHint" hidden>查無此股票</span>
    </div>
    <div class="market-strength-bar" id="otcStrengthBox"></div>
    <div class="signal-controls">
      <button class="signal-badge-btn" id="signalBadgeBtn"><span>⚠ 盤中訊號</span><span class="sb-count" id="signalBadgeCount">0</span></button>
      <button class="alert-toggle on" id="alertToggle" aria-pressed="true">提醒開啟</button>
    </div>
  </div>
</header>
<div class="stat-bar-row" id="groupStatBar"></div>
<div class="tabs">
  <button class="tab-btn strong active" id="tabStrong">強勢</button>
  <button class="tab-btn weak" id="tabWeak">弱勢</button>
</div>
<div id="app"><div class="loading">資料讀取中…</div></div>
<div class="updated" id="updatedAt"></div>

<div class="group-modal" id="groupModal" hidden>
  <div class="group-modal-inner">
    <div class="group-modal-head">
      <span class="gm-title" id="gmTitle"></span>
      <button class="cm-icon-btn" id="gmClose" aria-label="關閉">✕</button>
    </div>
    <div class="gm-list" id="gmList"></div>
  </div>
</div>

<div id="chartWindows"></div>
<div id="chartTray"></div>
<div class="chart-modal" id="chartModal" hidden>
  <div class="chart-modal-inner" id="chartModalInner">
    <div class="chart-modal-head" id="chartModalHead">
      <div><span class="cm-code" id="cmCode"></span><span class="cm-name" id="cmName"></span><span class="cm-data-badge" id="cmDataBadge" hidden>示範資料</span></div>
      <span class="chart-info-bar" id="chartInfoBar"></span>
      <div class="cm-actions">
        <input type="text" class="cm-quick-search" id="cmQuickSearch" placeholder="輸入代號切換">
        <button class="cm-go-btn" id="cmQuickSearchGoBtn" aria-label="進入分K">進入分K</button>
        <button class="cm-icon-btn" id="cmSettingsToggle" aria-label="指標設定" aria-pressed="false">⚙</button>
        <button class="cm-icon-btn" id="cmMax" aria-label="放大／還原視窗" aria-pressed="false">⛶</button>
        <button class="cm-icon-btn" id="cmClose" aria-label="關閉">✕</button>
      </div>
    </div>
    <div class="cm-flags" id="cmFlags" hidden></div>
    <div class="chart-tabs" id="chartTabs">
      <button class="chart-tab" data-tf="daily">日線</button>
      <button class="chart-tab active" data-tf="m5">5分鐘</button>
      <button class="chart-tab" data-tf="m1">1分鐘</button>
      <span class="ma-legend" id="maLegend"></span>
    </div>
    <div class="ind-settings" id="maControls" hidden></div>
    <div class="chart-canvas-wrap price-wrap">
      <canvas id="klineCanvas"></canvas>
    </div>
    <div class="force-panel" id="forcePanelWrap" hidden>
      <div class="force-panel-head">
        <span class="force-title">主力買賣力（大戶）</span>
        <span class="force-legend"><span class="fl-dot fl-buy"></span>買超<span class="fl-dot fl-sell"></span>賣超<span class="fl-dot fl-cum"></span>累計</span>
      </div>
      <div class="force-note" id="forceNote">大戶定義：單筆大單逐筆統計</div>
      <div class="chart-canvas-wrap force-wrap">
        <canvas id="forceCanvas"></canvas>
      </div>
    </div>
    <div class="ind-panel-block">
      <div class="ind-panel-head"><span class="force-title">成交量</span></div>
      <div class="chart-canvas-wrap volume-wrap"><canvas id="volumeCanvas"></canvas></div>
    </div>
    <div class="ind-panel-block">
      <div class="ind-panel-head">
        <span class="force-title">MACD (12,26,9)</span>
        <button class="macd-toggle" id="macdToggle" aria-pressed="false">開啟</button>
      </div>
      <div class="chart-canvas-wrap macd-wrap" id="macdPanelWrap" hidden>
        <canvas id="macdCanvas"></canvas>
      </div>
    </div>
    <div class="ind-panel-block">
      <div class="ind-panel-head"><span class="force-title">KD (9,3,3)．用5分K計算</span></div>
      <div class="chart-canvas-wrap kd-wrap" id="kdPanelWrap" hidden>
        <canvas id="kdCanvas"></canvas>
      </div>
    </div>
  </div>
</div>

<div class="toolbar-bottom" id="toolbarBottom">
  <button class="tb-btn" data-label="自選股"><span class="tb-icon">★</span>自選股</button>
  <button class="tb-btn" data-label="三角收斂"><span class="tb-icon">▲</span>三角收斂</button>
  <button class="tb-btn" data-label="疑似隔日沖大單籌碼"><span class="tb-icon">沖</span>隔日沖大單籌碼</button>
  <button class="tb-btn" data-label="個股研究中心"><span class="tb-icon">本</span>個股研究中心</button>
  <button class="tb-btn" data-label="每週籌碼分析"><span class="tb-icon">週</span>每週籌碼分析</button>
  <button class="tb-btn" data-label="今日盤後籌碼排行"><span class="tb-icon">籌</span>盤後籌碼排行</button>
  <button class="tb-btn" data-label="選股程式"><span class="tb-icon">選</span>選股程式</button>
  <button class="tb-btn" data-label="個股盤中訊號追蹤"><span class="tb-icon">追</span>個股訊號追蹤</button>
</div>

<div class="signal-modal" id="signalModal" hidden>
  <div class="signal-modal-inner" id="signalModalInner">
    <div class="signal-modal-head" id="signalModalHead">
      <div class="sm-title-wrap">
        <div class="sm-title">盤中訊號中心</div>
        <div class="sm-sub">拉住標題可在頁面內移動；各分類都是後端即時偵測的真實資料，只有連不上後端時才會標示示範資料。</div>
      </div>
      <div class="sm-actions">
        <span class="sm-date-pill" id="smDatePill"></span>
        <button class="sm-btn" id="smHelp">? 訊號教學</button>
        <button class="sm-btn" id="smMoveWindow">⧉ 移到另一螢幕</button>
        <button class="sm-btn" id="smRecenter">回到中央</button>
        <button class="cm-icon-btn" id="smCollapse" aria-label="收合">－</button>
        <button class="cm-icon-btn" id="smClose" aria-label="隱藏">✕</button>
      </div>
    </div>
    <div class="signal-help" id="signalHelp" hidden>
      <ul>
        <li><b>今日即時</b>：彙整下列各類訊號的即時清單。</li>
        <li><b>族群綜合表</b>：大戶力（大單淨額÷累計成交額）跟處置/注意狀態合併顯示，一個族群一個表格；只列出大戶力≥+10%或≤-10%、或有處置/注意資料的股票。</li>
        <li><b>族群大戶力</b>：今天漲幅前10大族群、跌幅前10大族群，各自取大戶力最強（或最負）的前5檔個股。</li>
        <li><b>盤中333</b>：馬火多(30)、賽馬多加河流多(33加34)、刀劍空(32)等多空條件篩出的個股與族群名單。</li>
        <li><b>盤中大戶力</b>：個股大戶買賣力道明顯轉強或轉弱。</li>
        <li><b>醞釀／發動</b>：老師的選股法，1＝醞釀（整理形態）、2＝發動（突破）。<b>醞釀</b>以前一個交易日收盤為準：均線分數≥10（5/10/20/60/120/240 日線兩兩比較共 15 組，短天期在長天期上面得 1 分）、收盤站上月線（20 日線）、近 10 天最高到最低相差≤20%、5/10/20 日線糾結（相差≤4%）；壓力多但突破會很強，適合不盯盤，每天買一點、分批加碼，站穩月線快突破再積極加碼。<b>發動</b>盤中即時判斷：價格衝過箱頂（近 10 天最高價）＝過高、均線分數>10、周轉高（預估全天周轉率≥5% 或預估量≥5 日均量 1.5 倍）；買黑拚隔日衝，破黑低要跑快。同族群依均線分數排序，★＝族群裡分數最高（族群多就挑分數最高的）。</li>
        <li><b>四項精選（強多/強空）</b>：四個條件同時成立才會出現。①分時資金強度：盤中累計大單買進（強多）或賣出（強空）金額達到前日大單淨買超金額的時段門檻（09:00-09:29≥50%／09:30-09:59≥70%／10:00-10:59≥90%／11:00-13:30≥120%，且前日淨買超須大於1億元才有候選資格）；②主力淨額比：當分鐘≥+50%（強多）或≤-50%（強空），且前一分鐘同方向；③VWAP：現價站上（強多）或跌破（強空）VWAP；④首五分鐘：突破（強多）或跌破（強空）開盤前5分鐘（09:00-09:04）K棒高低點。同一檔股票同一方向一天只提示一次，偵測時間09:00-13:30。</li>
        <li><b>1+2多</b>：5 分K收盤同時站上「905 高」（開盤第一根 5 分K、09:00～09:05 的最高價）與昨日最高價時成立，一天一次，沒有時間限制。</li>
        <li><b>創高黑龍</b>：11:00～13:30，5 分K最高價突破前 5 個交易日最高價（平高不算）、但這根收盤低於今天開盤價，且均線分數≥10（5/10/20/60/120/240 日線兩兩比較 15 組），一天一次。</li>
        <li><b>主力翻多空（主力累計翻多／翻空）</b>：A～D同步濾網，每根1分K收完評估。A主力零軸：當日主力累計淨額（大單買張−賣張）由負翻正（翻空反向）；B VWAP穿越：1分K收盤站上（翻空：跌破）VWAP，A、B要在5分鐘內同時發生且當下仍成立；C主力淨額率：累計淨額÷累計大單總張數 ≥ ±20%；D量比：今日成交量換算整天速度÷前5日平均 ≥ 1.5×。C、D都達強勢門檻（±40%、3×）標「強勢」。每檔每天多空各一次；明細列會寫出零軸、VWAP穿越時間、淨額率、距VWAP、量比、累計張數。</li>
        <li><b>盤中特大買單／賣單</b>：單筆超大額買進／賣出成交。</li>
        <li><b>處置股預測</b>：依證交所／櫃買中心的注意、處置規則，列出今天觸發注意的款別、已進入處置累積路徑（預計會被處置）的股票，以及差距預測（還差多少漲幅或成交量就會觸發注意）。</li>
        <li><b>歷史查詢</b>：選擇日期查看當天的訊號紀錄。</li>
      </ul>
    </div>
    <div class="chart-tabs signal-tabs-bar" id="signalTabsBar"></div>
    <div class="signal-body" id="signalBody"></div>
  </div>
</div>

<script>
const GROUPS = ${JSON.stringify(GROUPS)};
const ALL_CODES = [...new Set(GROUPS.flatMap((g) => g.stocks.map((s) => s.code)))];

// ---- 個股價格／K線／量能／主力力道／MACD（示範用模擬資料，非即時報價） ----
function hashCode(str){
  let h = 0;
  for (let i = 0; i < str.length; i++){ h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
  return h;
}
function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const priceCache = {};
function getBasePrice(code){
  if (lastData){
    for (const g of lastData.groups){
      const s = g.stocks.find((x) => x.code === code);
      if (s && s.price != null) return s.price;
    }
  }
  // 找不到即時報價（例如尚未載入、或該檔暫時沒有資料）時，退回示範用的穩定假價格
  if (priceCache[code] != null) return priceCache[code];
  const rnd = mulberry32(hashCode(code));
  const p = 18 + rnd() * 550;
  priceCache[code] = Math.round(p * 100) / 100;
  return priceCache[code];
}

function getStockQuote(code){
  if (!lastData) return null;
  for (const g of lastData.groups){
    const s = g.stocks.find((x) => x.code === code);
    if (s && s.price != null) return { price: s.price, changePercent: s.changePercent };
  }
  return null;
}

const DEFAULT_MA_COLORS = ['#7fb3e0', '#c9a98c', '#b48ee0', '#e0c458', '#6fd0c4'];
const VWAP_COLOR = '#f2c94c';
const PAD = { left: 8, right: 54 };
const TF_CONFIG = {
  daily: { label: '日線', maPeriods: [5, 20, 60, 120, 240], bars: 180, vwap: false, force: true },
  m5:    { label: '5分鐘', maPeriods: [5, 20], bars: 120, vwap: true, force: true },
  m1:    { label: '1分鐘', maPeriods: [5, 25, 100], bars: 150, vwap: true, force: true },
};

function generateTradingDayTimestamps(numDays, barsPerDay, stepMin, endDate){
  // 從 endDate 往前推 numDays 個交易日（跳過週末），每天從 09:00 開始產生 barsPerDay 根
  const days = [];
  const cursor = new Date(endDate);
  while (days.length < numDays){
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) days.unshift(new Date(cursor));
    cursor.setDate(cursor.getDate() - 1);
  }
  const timestamps = [];
  days.forEach((day) => {
    const dayStart = new Date(day); dayStart.setHours(9, 0, 0, 0);
    for (let i = 0; i < barsPerDay; i++) timestamps.push(dayStart.getTime() + i * stepMin * 60000);
  });
  return timestamps;
}

function generateOHLC(code, tf){
  const cfg = TF_CONFIG[tf];
  const rnd = mulberry32(hashCode(code + '_' + tf));
  const basePrice = getBasePrice(code);
  let price = basePrice * (0.94 + rnd() * 0.12);
  const bars = [];
  const vol = tf === 'daily' ? 0.018 : (tf === 'm5' ? 0.006 : 0.003);
  const reversion = 0.05; // 緩慢拉回目前價，避免隨機漫步走遠後產生跳空
  const now = new Date();

  // 5分鐘示範資料模擬多個交易日（跳過週末），這樣「昨日高低點」等跨日功能在示範模式下也能正常測試
  let timestamps = null;
  if (tf === 'm5') timestamps = generateTradingDayTimestamps(5, 54, 5, now);
  else if (tf === 'm1') timestamps = Array.from({ length: cfg.bars }, (_, i) => now.getTime() - (cfg.bars - 1 - i) * 60000);

  const total = timestamps ? timestamps.length : cfg.bars;
  for (let i = 0; i < total; i++){
    const open = price;
    const pull = (basePrice - open) * reversion;
    const drift = pull + (rnd() - 0.5) * vol * open;
    let close = Math.max(open + drift, basePrice * 0.3);
    const high = Math.max(open, close) + rnd() * vol * open * 0.6;
    const low = Math.min(open, close) - rnd() * vol * open * 0.6;
    const volume = Math.round(80 + rnd() * rnd() * 3000);
    let label, fullLabel, ts;
    if (tf === 'daily'){
      const idxFromEnd = total - 1 - i;
      const d = new Date(now); d.setDate(d.getDate() - idxFromEnd);
      label = (d.getMonth() + 1) + '/' + d.getDate();
      fullLabel = label;
      ts = d.getTime();
    } else {
      ts = timestamps[i];
      const d = new Date(ts);
      label = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
      fullLabel = (d.getMonth() + 1) + '/' + d.getDate() + ' ' + label;
    }
    bars.push({ ts, open, high, low, close: Math.max(close, 0.1), volume, label, fullLabel });
    price = close;
  }
  return bars;
}
function computeMA(bars, period){
  const out = new Array(bars.length).fill(null);
  let sum = 0;
  for (let i = 0; i < bars.length; i++){
    sum += bars[i].close;
    if (i >= period) sum -= bars[i - period].close;
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}
function computeVWAP(bars){
  let cumPV = 0, cumV = 0, curDay = null;
  const dayKey = (ts) => { const d = new Date(ts); return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(); };
  return bars.map((b) => {
    const dk = dayKey(b.ts);
    if (dk !== curDay){ curDay = dk; cumPV = 0; cumV = 0; } // 多日資料時，VWAP每天從開盤重新累計
    const typical = (b.high + b.low + b.close) / 3;
    cumPV += typical * b.volume;
    cumV += b.volume;
    return cumV > 0 ? cumPV / cumV : b.close;
  });
}
function computeEMA(values, period){
  const k = 2 / (period + 1);
  const out = new Array(values.length).fill(null);
  let prev = null;
  for (let i = 0; i < values.length; i++){
    prev = (prev == null) ? values[i] : (values[i] * k + prev * (1 - k));
    out[i] = prev;
  }
  return out;
}
function aggregateTo5mBuckets(bars1m){
  const buckets = [];
  let current = null;
  bars1m.forEach((b) => {
    const bucketTs = Math.floor(b.ts / 300000) * 300000;
    if (!current || current.bucketTs !== bucketTs){
      current = { bucketTs, high: b.high, low: b.low, close: b.close };
      buckets.push(current);
    } else {
      current.high = Math.max(current.high, b.high);
      current.low = Math.min(current.low, b.low);
      current.close = b.close;
    }
  });
  return buckets;
}
function computeKDSeries(buckets, period, smoothing){
  period = period || 9;
  const alpha = smoothing || (1 / 3);
  let prevK = 50, prevD = 50;
  return buckets.map((bar, i) => {
    const start = Math.max(0, i - period + 1);
    let hh = -Infinity, ll = Infinity;
    for (let j = start; j <= i; j++){ hh = Math.max(hh, buckets[j].high); ll = Math.min(ll, buckets[j].low); }
    const rsv = hh > ll ? (bar.close - ll) / (hh - ll) * 100 : 50;
    const k = prevK * (1 - alpha) + rsv * alpha;
    const d = prevD * (1 - alpha) + k * alpha;
    prevK = k; prevD = d;
    return { k, d };
  });
}
function computeKdFor1m(bars1m){
  if (!bars1m || !bars1m.length) return null;
  const buckets = aggregateTo5mBuckets(bars1m);
  const kdByBucket = computeKDSeries(buckets, 9, 1 / 3);
  const kdIndexByTs = new Map(buckets.map((b, i) => [b.bucketTs, i]));
  return bars1m.map((b) => {
    const idx = kdIndexByTs.get(Math.floor(b.ts / 300000) * 300000);
    return idx != null ? kdByBucket[idx] : { k: null, d: null };
  });
}
function computeMACD(bars){
  const closes = bars.map((b) => b.close);
  const ema12 = computeEMA(closes, 12);
  const ema26 = computeEMA(closes, 26);
  const macdLine = closes.map((_, i) => ema12[i] - ema26[i]);
  const signalLine = computeEMA(macdLine, 9);
  const hist = macdLine.map((v, i) => v - signalLine[i]);
  return { macdLine, signalLine, hist };
}
function generateForceFlow(code, tf, bars){
  const rnd = mulberry32(hashCode(code + '_force_' + tf));
  let bias = 0, cum = 0;
  return bars.map(() => {
    bias += (rnd() - 0.5) * 40;
    bias = Math.max(-260, Math.min(260, bias));
    const noise = (rnd() - 0.5) * 220;
    const net = Math.round(bias * 0.5 + noise);
    cum += net;
    return { net, cum };
  });
}

let currentChart = {
  code: null, name: null, tf: 'daily', bars: null, force: null, macd: null, kd: null,
  maLines: [], vwapOn: false, vwapColor: VWAP_COLOR, vwapWidth: 3, macdOn: false, hoverIndex: null,
  viewStart: 0, viewCount: null, isRealBars: false, requestToken: 0,
};

// 五分鐘K盤中訊號符號／顏色／白話解釋；規格來源見HANSTOCK策略定義備份文件。
// side='bull'畫在K棒上方，side='bear'畫在下方；顏色比照文件原本的符號顏色。
const KLINE_SIGNAL_INFO = {
  crossUp905: { symbol: '【5】', color: '#ef4444', side: 'bull', desc: '站上5MA過905高：905收盤上漲且漲幅<6%，之後突破905高且收盤站上5MA，可重複觸發。' },
  firstCross905High: { symbol: '⑨', color: '#ef4444', side: 'bull', desc: '首次過905高：當天第一次收盤突破早盤第一根K棒（905）高點，一天一次。' },
  crossUpPrevHigh: { symbol: '㊇', color: '#ef4444', side: 'bull', desc: '站上昨日高：收盤突破前一交易日最高價，可重複觸發。' },
  combo12Bull: { symbol: '1+2', color: '#ef4444', side: 'bull', desc: '1+2多：5分K收盤同時站上905高跟昨日高，一天一次。' },
  crossUp20ma: { symbol: '⑳↑', color: '#ef4444', side: 'bull', desc: '站上20MA：股價由20MA下方重新站回上方，可重複觸發。' },
  firstCrossUp20ma: { symbol: '⑳↑★', color: '#ef4444', side: 'bull', desc: '首次站上20MA：當日第一次站上20MA。' },
  ma520Up: { symbol: '520↑', color: '#ef4444', side: 'bull', desc: '五二零上：收盤同時站上5MA與20MA，形成多方均線確認。' },
  ma20turnUp: { symbol: '↑', color: '#dc2626', side: 'bull', desc: '20MA轉上彎：20MA方向由走平或下彎轉為上彎。' },
  a8short: { symbol: 'Ⓐ', color: '#047857', side: 'bear', desc: 'A8空：10:30前第一次跌破早盤第一根K棒的中間價(A8)，盤勢開始轉弱，一天一次。' },
  break905d: { symbol: 'Ⓓ', color: '#047857', side: 'bear', desc: '破905D：10:30前第一次跌破開盤第一根五分鐘K最低點，早盤結構遭破壞，一天一次。' },
  blackDragon: { symbol: '黑龍', color: '#374151', side: 'bear', desc: '創高黑龍(盤中版)：11:00~13:30限定，同一根5分K自己的最高價突破前5個完整交易日最高價(平高不算)，但收盤反而低於今日09:00開盤價，且六均線(5/10/20/60/120/240)排列分數≥10(滿分15)，一天一次。' },
  crossDown20ma: { symbol: '⑳↓', color: '#22c55e', side: 'bear', desc: '跌破20MA：股價由20MA上方跌到下方，可重複觸發。' },
  firstCrossDown20ma: { symbol: '⑳↓★', color: '#22c55e', side: 'bear', desc: '首次跌破20MA：當日第一次跌破20MA。' },
  ma520Down: { symbol: '520↓', color: '#22c55e', side: 'bear', desc: '五二零下：收盤同時跌到5MA與20MA下方，形成均線空方確認。' },
  ma20turnDown: { symbol: '↓', color: '#22c55e', side: 'bear', desc: '20MA轉下彎：20MA方向由上彎或走平轉為下彎。' },
};

function setupCanvas(canvas, cssW, cssH){
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, cssW * dpr); canvas.height = Math.max(1, cssH * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  return ctx;
}

// 滾輪縮放：目前可視的資料區間（依總筆數夾限，避免縮放狀態跨切換時框到超出範圍）
function visibleRange(len){
  const count = Math.max(1, Math.min(currentChart.viewCount ?? len, len));
  const start = Math.max(0, Math.min(len - count, currentChart.viewStart ?? 0));
  return { start, count };
}

function handleWheelZoom(e){
  const allBars = currentChart.bars;
  if (!allBars) return;
  e.preventDefault();
  const total = allBars.length;
  const { start: curStart, count: curCount } = visibleRange(total);

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const plotW = rect.width - PAD.left - PAD.right;
  const relFrac = Math.max(0, Math.min(1, (x - PAD.left) / plotW));
  const cursorIndex = curStart + relFrac * curCount;

  const zoomIn = e.deltaY < 0;
  const factor = zoomIn ? 0.85 : 1 / 0.85;
  let newCount = Math.round(curCount * factor);
  newCount = Math.max(15, Math.min(total, newCount));
  let newStart = Math.round(cursorIndex - relFrac * newCount);
  newStart = Math.max(0, Math.min(total - newCount, newStart));

  currentChart.viewCount = newCount;
  currentChart.viewStart = newStart;
  redrawAll();
}

// 手機雙指縮放（沒有滾輪可用，改用兩指距離變化來縮放）
// 用 on* 屬性指定（不是 addEventListener），這樣每次開圖表視窗重新綁定時是覆蓋、不會疊加重複監聽
function attachPinchZoom(canvasIds){
  canvasIds.forEach((id) => {
    const el = document.getElementById(id);
    let startDist = null, startViewStart = 0, startViewCount = 0, centerFrac = 0.5;
    let dragStartX = null, dragViewStart = 0, dragViewCount = 0, dragTotal = 0;

    el.ontouchstart = (e) => {
      const allBars = currentChart.bars;
      if (!allBars) return;
      if (e.touches.length === 2){
        e.preventDefault();
        const [t1, t2] = e.touches;
        startDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const { start, count } = visibleRange(allBars.length);
        startViewStart = start; startViewCount = count;
        const rect = el.getBoundingClientRect();
        const midX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const plotW = rect.width - PAD.left - PAD.right;
        centerFrac = Math.max(0, Math.min(1, (midX - PAD.left) / plotW));
        dragStartX = null; // 雙指縮放優先，取消單指拖曳狀態
      } else if (e.touches.length === 1){
        e.preventDefault();
        const { start, count } = visibleRange(allBars.length);
        dragStartX = e.touches[0].clientX;
        dragViewStart = start; dragViewCount = count; dragTotal = allBars.length;
        if (id === 'klineCanvas') updateChartTooltipAt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    el.ontouchmove = (e) => {
      const allBars = currentChart.bars;
      if (!allBars) return;
      if (e.touches.length === 2 && startDist){
        e.preventDefault();
        const [t1, t2] = e.touches;
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const scale = dist / startDist; // 手指分開(放大) > 1，手指靠攏(縮小) < 1
        const total = allBars.length;
        let newCount = Math.round(startViewCount / scale);
        newCount = Math.max(15, Math.min(total, newCount));
        const cursorIndex = startViewStart + centerFrac * startViewCount;
        let newStart = Math.round(cursorIndex - centerFrac * newCount);
        newStart = Math.max(0, Math.min(total - newCount, newStart));
        currentChart.viewCount = newCount;
        currentChart.viewStart = newStart;
        redrawAll();
      } else if (e.touches.length === 1 && dragStartX != null){
        // 單指按著左右滑動＝平移可視範圍（跟桌機滑鼠拖曳同一邏輯）
        e.preventDefault();
        const rect = el.getBoundingClientRect();
        const plotW = rect.width - PAD.left - PAD.right;
        if (plotW <= 0) return;
        const barsShifted = Math.round(-(e.touches[0].clientX - dragStartX) / plotW * dragViewCount);
        let newStart = dragViewStart + barsShifted;
        newStart = Math.max(0, Math.min(dragTotal - dragViewCount, newStart));
        if (newStart !== currentChart.viewStart){
          currentChart.viewStart = newStart;
          redrawAll();
        }
        if (id === 'klineCanvas') updateChartTooltipAt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    el.ontouchend = (e) => {
      if (e.touches.length < 2) startDist = null;
      if (e.touches.length < 1) dragStartX = null;
    };
    el.ontouchcancel = () => { startDist = null; dragStartX = null; };
  });
}

function updateChartInfoBar(ib){
  const el = document.getElementById('chartInfoBar');
  if (!el || !ib) return;
  const amplitude = ib.open ? (ib.high - ib.low) / ib.open * 100 : 0;
  let html = ib.fullLabel + '　開' + ib.open.toFixed(2) + ' 高' + ib.high.toFixed(2) +
    ' 低' + ib.low.toFixed(2) + ' 收' + ib.close.toFixed(2) +
    '　量' + Math.round(ib.volume) + '張　振幅' + amplitude.toFixed(2) + '%';
  if (Number.isFinite(ib.mainNet)){
    const color = ib.mainNet >= 0 ? '#e6675f' : '#5fae6f';
    html += '　<span style="color:' + color + '">主力' + (ib.mainNet >= 0 ? '+' : '') + Math.round(ib.mainNet) + '張</span>';
  }
  el.innerHTML = html;
}

function drawChart(){
  const canvas = document.getElementById('klineCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);

  const allBars = currentChart.bars;
  if (!allBars) return; // 圖表還沒開過時ResizeObserver可能提早觸發，這時還沒有bars資料
  const { start: vStart, count: vCount } = visibleRange(allBars.length);
  const bars = allBars.slice(vStart, vStart + vCount);
  const cfg = TF_CONFIG[currentChart.tf];
  const padTop = 10, padBottom = 22;
  const plotW = cssW - PAD.left - PAD.right, plotH = cssH - padTop - padBottom;

  const maSeries = currentChart.maLines.map((ma) => computeMA(allBars, ma.period).slice(vStart, vStart + vCount));
  const vwapSeries = (cfg.vwap && currentChart.vwapOn) ? computeVWAP(allBars).slice(vStart, vStart + vCount) : null;

  let lo = Infinity, hi = -Infinity;
  bars.forEach((b) => { lo = Math.min(lo, b.low); hi = Math.max(hi, b.high); });
  currentChart.maLines.forEach((ma, idx) => {
    if (!ma.on) return;
    maSeries[idx].forEach((v) => { if (v != null){ lo = Math.min(lo, v); hi = Math.max(hi, v); } });
  });
  if (vwapSeries) vwapSeries.forEach((v) => { lo = Math.min(lo, v); hi = Math.max(hi, v); });
  const range = (hi - lo) || 1;
  lo -= range * 0.06; hi += range * 0.06;

  const xAt = (i) => PAD.left + (plotW * (i + 0.5) / bars.length);
  const yAt = (v) => padTop + plotH * (1 - (v - lo) / (hi - lo));

  ctx.strokeStyle = 'rgba(168,156,143,0.15)';
  ctx.fillStyle = '#a89c8f';
  ctx.font = '10px -apple-system, sans-serif';
  ctx.lineWidth = 1;
  for (let s = 0; s <= 4; s++){
    const v = lo + (hi - lo) * s / 4;
    const y = yAt(v);
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(cssW - PAD.right, y); ctx.stroke();
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(v.toFixed(1), cssW - PAD.right + 6, y);
  }

  // 每天開盤第一根畫細的紅色虛線，10:30那根畫粗的紫色實線；整段已載入的多日範圍都畫，不隨縮放/平移消失
  // 5分線／1分線都適用；「今天第一根K高低點」只在5分線畫（1分線的第一根意義不大）
  if (currentChart.tf === 'm5' || currentChart.tf === 'm1'){
    const dayKey = (ts) => { const d = new Date(ts); return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(); };
    bars.forEach((b, i) => {
      const globalIdx = vStart + i;
      const prevBar = globalIdx > 0 ? allBars[globalIdx - 1] : null;
      const isDayOpen = !prevBar || dayKey(prevBar.ts) !== dayKey(b.ts);
      const d = new Date(b.ts);
      const is1030 = d.getHours() === 10 && d.getMinutes() === 30;
      if (!isDayOpen && !is1030) return;
      const x = xAt(i);
      ctx.save();
      if (isDayOpen){ ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]); }
      else { ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 2; ctx.setLineDash([]); }
      ctx.beginPath(); ctx.moveTo(x, padTop); ctx.lineTo(x, cssH - padBottom); ctx.stroke();
      ctx.restore();
    });

    // 今天第一根5分K高低點（延伸到10:30）＋ 昨日高低點（延伸到今天整個範圍）
    const dayKey2 = (ts) => { const d = new Date(ts); return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(); };
    const drawHRangeLine = (absStartIdx, absEndIdx, price, color, width, dash) => {
      let relStart = absStartIdx - vStart, relEnd = absEndIdx - vStart;
      if (relEnd < 0 || relStart > vCount - 1) return;
      relStart = Math.max(0, relStart); relEnd = Math.min(vCount - 1, relEnd);
      const x1 = xAt(relStart), x2 = xAt(relEnd), y = yAt(price);
      ctx.save();
      ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash || []);
      ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
      ctx.restore();
    };
    if (allBars.length){
      const lastDay = dayKey2(allBars[allBars.length - 1].ts);
      let todayStart = allBars.length - 1;
      while (todayStart > 0 && dayKey2(allBars[todayStart - 1].ts) === lastDay) todayStart--;
      const todayEnd = allBars.length - 1;

      let today1030Index = todayEnd;
      for (let i = todayStart; i <= todayEnd; i++){
        const d = new Date(allBars[i].ts);
        if (d.getHours() === 10 && d.getMinutes() === 30){ today1030Index = i; break; }
      }
      if (currentChart.tf === 'm5'){
        const todayFirstBar = allBars[todayStart];
        drawHRangeLine(todayStart, today1030Index, todayFirstBar.high, '#ef4444', 4.5, []);
        drawHRangeLine(todayStart, today1030Index, todayFirstBar.low, '#6366f1', 4.5, []);
      }

      const prevEnd = todayStart - 1;
      if (prevEnd >= 0){
        const prevDay = dayKey2(allBars[prevEnd].ts);
        let prevStart = prevEnd;
        while (prevStart > 0 && dayKey2(allBars[prevStart - 1].ts) === prevDay) prevStart--;
        let prevDayHigh = -Infinity, prevDayLow = Infinity;
        let prevDayHighIdx = prevStart, prevDayLowIdx = prevStart;
        for (let i = prevStart; i <= prevEnd; i++){
          if (allBars[i].high > prevDayHigh){ prevDayHigh = allBars[i].high; prevDayHighIdx = i; }
          if (allBars[i].low < prevDayLow){ prevDayLow = allBars[i].low; prevDayLowIdx = i; }
        }
        drawHRangeLine(prevDayHighIdx, todayEnd, prevDayHigh, '#f2c94c', 1, [2, 4]);
        drawHRangeLine(prevDayLowIdx, todayEnd, prevDayLow, '#f2c94c', 1, [2, 4]);
      }
    }
  }

  const candleW = Math.max(2, plotW / bars.length * 0.62);
  bars.forEach((b, i) => {
    const x = xAt(i);
    const up = b.close >= b.open;
    ctx.strokeStyle = ctx.fillStyle = up ? '#e6675f' : '#5fae6f';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, yAt(b.high)); ctx.lineTo(x, yAt(b.low)); ctx.stroke();
    const yO = yAt(b.open), yC = yAt(b.close);
    const top = Math.min(yO, yC), h = Math.max(1, Math.abs(yC - yO));
    ctx.fillRect(x - candleW / 2, top, candleW, h);
  });

  currentChart.maLines.forEach((ma, idx) => {
    if (!ma.on) return;
    ctx.strokeStyle = ma.color;
    ctx.lineWidth = ma.width;
    ctx.beginPath();
    let started = false;
    maSeries[idx].forEach((v, i) => {
      if (v == null) return;
      const x = xAt(i), y = yAt(v);
      if (!started){ ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    });
    ctx.stroke();
  });

  if (vwapSeries){
    ctx.strokeStyle = currentChart.vwapColor;
    ctx.lineWidth = currentChart.vwapWidth;
    ctx.beginPath();
    vwapSeries.forEach((v, i) => {
      const x = xAt(i), y = yAt(v);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  ctx.fillStyle = '#a89c8f';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  // 分K圖(m5/m1)常常一次帶出好幾個交易日的資料(例如bars5range)，X軸如果
  // 只顯示「時:分」，同一排標籤在跨日的地方時間會看起來像跳來跳去(例如
  // 13:20接著跳回09:00)，容易誤以為是資料錯亂甚至看到「未來」的時間。
  // 只有在這次的bars真的橫跨不只一天時才啟用「跨日改顯示日期」，單日
  // 資料(含demo回退)維持原樣、不無端在第一個標籤加上日期；日線圖每根
  // 本來就是不同天，也維持原本只顯示月/日不受影響。
  const sameCalendarDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const spansMultipleDays = currentChart.tf !== 'daily' && bars.length > 1 &&
    !sameCalendarDay(new Date(bars[0].ts), new Date(bars[bars.length - 1].ts));
  let prevAxisLabelDay = null;
  for (let k = 0; k <= 5; k++){
    const i = Math.round((bars.length - 1) * k / 5);
    const bar = bars[i];
    let text = bar.label;
    if (spansMultipleDays){
      const d = new Date(bar.ts);
      const dayKey = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
      if (dayKey !== prevAxisLabelDay) text = bar.fullLabel;
      prevAxisLabelDay = dayKey;
    }
    ctx.fillText(text, xAt(i), cssH - padBottom + 4);
  }

  // 右側價位標籤：滑鼠/手指移到哪一根就跟著顯示那一根的收盤價，沒有移動時預設顯示最後一根的收盤價
  {
    const tagIndex = currentChart.hoverIndex != null
      ? Math.max(0, Math.min(bars.length - 1, currentChart.hoverIndex))
      : bars.length - 1;
    const tagPrice = bars[tagIndex].close;
    const tagY = yAt(tagPrice);
    const tagH = 16;
    const tagW = PAD.right;
    const ty = Math.max(padTop, Math.min(cssH - padBottom - tagH, tagY - tagH / 2));
    ctx.save();
    ctx.fillStyle = '#c9a98c';
    ctx.fillRect(cssW - tagW, ty, tagW, tagH);
    ctx.fillStyle = '#12100f';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(tagPrice.toFixed(2), cssW - tagW / 2, ty + tagH / 2);
    ctx.restore();
  }

  // 游標移到K棒上時，標題列中間空位顯示該根的開高低收／成交量／主力買賣力／
  // 振幅，沒有游標時預設顯示最後一根。振幅用「這根自己的開盤價」當基準
  // （不是前一天收盤價），分K圖沒有現成的「前一交易日收盤」可以逐根對照。
  {
    const infoIndex = currentChart.hoverIndex != null
      ? Math.max(0, Math.min(bars.length - 1, currentChart.hoverIndex))
      : bars.length - 1;
    updateChartInfoBar(bars[infoIndex]);
  }

  if (currentChart.hoverIndex != null){
    const hi = Math.max(0, Math.min(bars.length - 1, currentChart.hoverIndex));
    const hb = bars[hi];
    const hx = xAt(hi);
    const hy = yAt(hb.close);
    ctx.save();
    ctx.strokeStyle = 'rgba(241,236,230,0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(hx, padTop); ctx.lineTo(hx, cssH - padBottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(PAD.left, hy); ctx.lineTo(cssW - PAD.right, hy); ctx.stroke();
    ctx.restore();

    ctx.font = '10px -apple-system, sans-serif';
    const label = hb.fullLabel;
    const tw = ctx.measureText(label).width + 10;
    const bx = Math.max(PAD.left, Math.min(cssW - PAD.right - tw, hx - tw / 2));
    const by = cssH - padBottom + 2;
    ctx.fillStyle = '#c9a98c';
    ctx.fillRect(bx, by, tw, 16);
    ctx.fillStyle = '#12100f';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, bx + tw / 2, by + 8);
  }
}

function drawVolumePanel(){
  const canvas = document.getElementById('volumeCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);
  const allBars = currentChart.bars;
  const { start: vStart, count: vCount } = visibleRange(allBars.length);
  const bars = allBars.slice(vStart, vStart + vCount);
  const padTop = 6, padBottom = 4;
  const plotW = cssW - PAD.left - PAD.right, plotH = cssH - padTop - padBottom;
  const xAt = (i) => PAD.left + plotW * (i + 0.5) / bars.length;
  const maxVol = Math.max(1, ...bars.map((b) => b.volume));
  const barW = Math.max(2, plotW / bars.length * 0.62);
  bars.forEach((b, i) => {
    const x = xAt(i);
    const h = (b.volume / maxVol) * plotH * 0.92;
    ctx.fillStyle = b.close >= b.open ? 'rgba(230,103,95,0.55)' : 'rgba(95,174,111,0.55)';
    ctx.fillRect(x - barW / 2, cssH - padBottom - h, barW, h);
  });
  ctx.fillStyle = '#f1ece6'; ctx.font = '10px -apple-system, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('量 上限' + Math.round(maxVol) + '張', PAD.left, 2);

  if (currentChart.hoverIndex != null){
    const hi = Math.max(0, Math.min(bars.length - 1, currentChart.hoverIndex));
    const hx = xAt(hi);
    ctx.save();
    ctx.strokeStyle = 'rgba(241,236,230,0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(hx, padTop); ctx.lineTo(hx, cssH - padBottom); ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#f1ece6'; ctx.font = '9px -apple-system, sans-serif';
    ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillText('量 ' + Math.round(bars[hi].volume) + '張', cssW - PAD.right, 2);
  }
}

function drawForcePanel(){
  const wrap = document.getElementById('forcePanelWrap');
  if (!currentChart.force){ wrap.hidden = true; return; }
  wrap.hidden = false;
  const canvas = document.getElementById('forceCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);

  const { start: vStart, count: vCount } = visibleRange(currentChart.force.length);
  const flow = currentChart.force.slice(vStart, vStart + vCount);
  const padTop = 8, padBottom = 6;
  const plotW = cssW - PAD.left - PAD.right, plotH = cssH - padTop - padBottom;
  const zeroY = padTop + plotH / 2;
  const xAt = (i) => PAD.left + plotW * (i + 0.5) / flow.length;

  // 多日一起顯示時，同一把尺會被單一天的極端量能(例如漲停爆量)撐開，
  // 蓋掉其他天原本存在的真實變化。改成每天各自用當天自己的最大值算
  // 尺度：每天都能看到自己完整的漲跌形狀。跨天的絕對量能比較已經有
  // 日線圖專屬的每日累積副圖可以看，這裡是看單日走勢用的。
  const dayScale = new Map();
  flow.forEach((f) => {
    const key = f.date ?? '__all__';
    const prev = dayScale.get(key) || { maxNet: 1, maxCum: 1 };
    if (Math.abs(f.net) > prev.maxNet) prev.maxNet = Math.abs(f.net);
    if (Math.abs(f.cum) > prev.maxCum) prev.maxCum = Math.abs(f.cum);
    dayScale.set(key, prev);
  });
  const scaleOf = (f) => dayScale.get(f.date ?? '__all__');

  ctx.strokeStyle = 'rgba(168,156,143,0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD.left, zeroY); ctx.lineTo(cssW - PAD.right, zeroY); ctx.stroke();

  const barW = Math.max(2, plotW / flow.length * 0.62);
  flow.forEach((f, i) => {
    const x = xAt(i);
    const barScale = (plotH / 2 * 0.85) / scaleOf(f).maxNet;
    const h = Math.abs(f.net) * barScale;
    ctx.fillStyle = f.net >= 0 ? '#e6675f' : '#5fae6f';
    if (f.net >= 0) ctx.fillRect(x - barW / 2, zeroY - h, barW, h);
    else ctx.fillRect(x - barW / 2, zeroY, barW, h);
  });

  ctx.strokeStyle = VWAP_COLOR;
  ctx.lineWidth = 2;
  ctx.beginPath();
  flow.forEach((f, i) => {
    const lineScale = (plotH / 2 * 0.85) / scaleOf(f).maxCum;
    const x = xAt(i), y = zeroY - f.cum * lineScale;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = '#a89c8f'; ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('0', cssW - PAD.right + 6, zeroY);

  if (currentChart.hoverIndex != null){
    const hi = Math.max(0, Math.min(flow.length - 1, currentChart.hoverIndex));
    const hx = xAt(hi);
    ctx.save();
    ctx.strokeStyle = 'rgba(241,236,230,0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(hx, padTop); ctx.lineTo(hx, cssH - padBottom); ctx.stroke();
    ctx.restore();
    const netHere = flow[hi].net, cumHere = flow[hi].cum;
    ctx.fillStyle = netHere >= 0 ? '#e6675f' : '#5fae6f';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    ctx.fillText(
      (netHere >= 0 ? '+' : '') + Math.round(netHere) + '張／累積' + (cumHere >= 0 ? '+' : '') + Math.round(cumHere) + '張',
      PAD.left, padTop - 6,
    );
  }
}

function drawMacdPanel(){
  const wrap = document.getElementById('macdPanelWrap');
  if (!currentChart.macdOn){ wrap.hidden = true; return; }
  wrap.hidden = false;
  const canvas = document.getElementById('macdCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);

  const { start: vStart, count: vCount } = visibleRange(currentChart.macd.hist.length);
  const macdLine = currentChart.macd.macdLine.slice(vStart, vStart + vCount);
  const signalLine = currentChart.macd.signalLine.slice(vStart, vStart + vCount);
  const hist = currentChart.macd.hist.slice(vStart, vStart + vCount);
  const padTop = 8, padBottom = 6;
  const plotW = cssW - PAD.left - PAD.right, plotH = cssH - padTop - padBottom;
  const zeroY = padTop + plotH / 2;
  const xAt = (i) => PAD.left + plotW * (i + 0.5) / hist.length;
  const allVals = [...hist, ...macdLine, ...signalLine].filter((v) => v != null).map(Math.abs);
  const maxAbs = Math.max(0.01, ...allVals);
  const scale = (plotH / 2 * 0.85) / maxAbs;

  ctx.strokeStyle = 'rgba(168,156,143,0.25)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD.left, zeroY); ctx.lineTo(cssW - PAD.right, zeroY); ctx.stroke();

  const barW = Math.max(2, plotW / hist.length * 0.62);
  hist.forEach((v, i) => {
    if (v == null) return;
    const x = xAt(i), h = Math.abs(v) * scale;
    ctx.fillStyle = v >= 0 ? '#e6675f' : '#5fae6f';
    if (v >= 0) ctx.fillRect(x - barW / 2, zeroY - h, barW, h); else ctx.fillRect(x - barW / 2, zeroY, barW, h);
  });
  function drawLine(series, color){
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath();
    let started = false;
    series.forEach((v, i) => {
      if (v == null) return;
      const x = xAt(i), y = zeroY - v * scale;
      if (!started){ ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    });
    ctx.stroke();
  }
  drawLine(macdLine, '#7fb3e0');
  drawLine(signalLine, '#e0c458');
  ctx.fillStyle = '#f1ece6'; ctx.font = '10px -apple-system, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('DIF/DEA', PAD.left, 2);
}

function drawKdPanel(){
  const wrap = document.getElementById('kdPanelWrap');
  if (currentChart.tf !== 'm1' || !currentChart.kd){ if (wrap) wrap.hidden = true; return; }
  wrap.hidden = false;
  const canvas = document.getElementById('kdCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);

  const { start: vStart, count: vCount } = visibleRange(currentChart.kd.length);
  const kd = currentChart.kd.slice(vStart, vStart + vCount);
  const padTop = 8, padBottom = 6;
  const plotW = cssW - PAD.left - PAD.right, plotH = cssH - padTop - padBottom;
  const xAt = (i) => PAD.left + plotW * (i + 0.5) / kd.length;
  const yAt = (v) => padTop + plotH * (1 - v / 100);

  ctx.strokeStyle = 'rgba(168,156,143,0.2)'; ctx.lineWidth = 1;
  [20, 50, 80].forEach((v) => {
    ctx.beginPath(); ctx.moveTo(PAD.left, yAt(v)); ctx.lineTo(cssW - PAD.right, yAt(v)); ctx.stroke();
  });

  function drawLine(key, color){
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath();
    let started = false;
    kd.forEach((v, i) => {
      if (v[key] == null) return;
      const x = xAt(i), y = yAt(v[key]);
      if (!started){ ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    });
    ctx.stroke();
  }
  drawLine('k', '#7fb3e0');
  drawLine('d', '#e0c458');

  // K/D交叉點：黃金交叉(K由下往上穿越D)標紅點、死亡交叉(K由上往下穿越D)標綠點
  for (let i = 1; i < kd.length; i++){
    const prev = kd[i - 1], cur = kd[i];
    if (prev.k == null || prev.d == null || cur.k == null || cur.d == null) continue;
    if (prev.k <= prev.d && cur.k > cur.d){
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(xAt(i), yAt(cur.k), 3, 0, Math.PI * 2); ctx.fill();
    } else if (prev.k >= prev.d && cur.k < cur.d){
      ctx.fillStyle = '#5fae6f';
      ctx.beginPath(); ctx.arc(xAt(i), yAt(cur.k), 3, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.fillStyle = '#a89c8f'; ctx.font = '9px -apple-system, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('K/D', PAD.left, 2);
}

function redrawAll(){
  if (document.getElementById('chartModal').hidden) return;
  // 視窗剛顯示、還在等非同步bars資料回來時，ResizeObserver可能已經先觸發一次；
  // 這時currentChart.bars還是null，所有draw*函式都還不能執行。
  if (!currentChart.bars) return;
  drawChart();
  drawVolumePanel();
  drawForcePanel();
  drawMacdPanel();
  drawKdPanel();
  const allBars = currentChart.bars;
  if (allBars && allBars.length){
    const { start: vStart } = visibleRange(allBars.length);
    updateMaLegend(currentChart.hoverIndex != null ? vStart + currentChart.hoverIndex : allBars.length - 1);
  }
}

function updateMaLegend(absIndex){
  const el = document.getElementById('maLegend');
  if (!el) return;
  const allBars = currentChart.bars;
  if (!allBars || !allBars.length){ el.innerHTML = ''; return; }
  const idx = Math.max(0, Math.min(allBars.length - 1, absIndex != null ? absIndex : allBars.length - 1));
  el.innerHTML = currentChart.maLines.filter((ma) => ma.on).map((ma) => {
    const v = computeMA(allBars, ma.period)[idx];
    return '<span class="ma-legend-item" style="color:' + ma.color + '">MA' + ma.period + (v != null ? ' ' + v.toFixed(2) : '') + '</span>';
  }).join('');
}
function updateChartTooltipAt(clientX, clientY){
  const canvas = document.getElementById('klineCanvas');
  const allBars = currentChart.bars;
  if (!allBars) return;
  const { start: vStart, count: vCount } = visibleRange(allBars.length);
  const bars = allBars.slice(vStart, vStart + vCount);
  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const plotW = rect.width - PAD.left - PAD.right;
  let i = Math.floor((x - PAD.left) / plotW * bars.length);
  i = Math.max(0, Math.min(bars.length - 1, i));
  const indexChanged = currentChart.hoverIndex !== i;
  currentChart.hoverIndex = i;
  // 十字線/資訊框畫的位置是xAt(hoverIndex)，量化到bar索引，游標還在同一根
  // K棒範圍內移動時，重畫canvas只會畫出像素完全一樣的結果。滑鼠在畫面上
  // 移動時mousemove觸發頻率很高，每次都整個canvas重繪會讓主執行緒忙不過來，
  // 連打字這種其他互動都跟著變遲鈍；只有真的換到不同K棒時才需要重繪。
  if (!indexChanged) return;
  updateMaLegend(vStart + i);
  redrawAll();
}

function attachChartInteraction(){
  const canvas = document.getElementById('klineCanvas');
  let isDragging = false, dragStartX = 0, dragViewStart = 0, dragViewCount = 0, dragTotal = 0;

  canvas.onmousemove = (e) => {
    if (isDragging) return;
    updateChartTooltipAt(e.clientX, e.clientY);
  };
  canvas.onmouseleave = () => {
    if (isDragging) return;
    currentChart.hoverIndex = null;
    redrawAll();
  };

  // 滑鼠左鍵按住橫拉＝拖曳平移可視範圍（不改變縮放比例，只左右移動）
  canvas.onmousedown = (e) => {
    if (e.button !== 0) return;
    const allBars = currentChart.bars;
    if (!allBars || !allBars.length) return;
    const { start, count } = visibleRange(allBars.length);
    isDragging = true;
    dragStartX = e.clientX;
    dragViewStart = start;
    dragViewCount = count;
    dragTotal = allBars.length;
    canvas.style.cursor = 'grabbing';
    e.preventDefault();
  };
  document.onmousemove = (e) => {
    if (!isDragging) return;
    const rect = canvas.getBoundingClientRect();
    const plotW = rect.width - PAD.left - PAD.right;
    if (plotW <= 0) return;
    const barsShifted = Math.round(-(e.clientX - dragStartX) / plotW * dragViewCount);
    let newStart = dragViewStart + barsShifted;
    newStart = Math.max(0, Math.min(dragTotal - dragViewCount, newStart));
    if (newStart !== currentChart.viewStart) {
      currentChart.viewStart = newStart;
      redrawAll();
    }
  };
  document.onmouseup = () => {
    if (!isDragging) return;
    isDragging = false;
    canvas.style.cursor = 'grab';
  };
  canvas.style.cursor = 'grab';

  // 滾輪縮放（桌機）：任一面板上滾都會一起縮放，維持時間軸對齊
  const zoomPanels = ['klineCanvas', 'volumeCanvas', 'forceCanvas', 'macdCanvas'];
  zoomPanels.forEach((id) => {
    const el = document.getElementById(id);
    el.onwheel = handleWheelZoom;
  });
  // 雙指縮放（手機）
  attachPinchZoom(zoomPanels);
}

function renderSettingsPanel(){
  const cfg = TF_CONFIG[currentChart.tf];
  const wrap = document.getElementById('maControls');
  let rows = currentChart.maLines.map((ma, idx) =>
    '<div class="ind-row">' +
      '<label class="ind-vis"><input type="checkbox" data-kind="ma-on" data-idx="' + idx + '" ' + (ma.on ? 'checked' : '') + '><span class="ind-dot" style="background:' + ma.color + '"></span></label>' +
      '<span class="ind-label">MA</span>' +
      '<input class="ind-period" type="number" min="1" max="999" value="' + ma.period + '" data-kind="ma-period" data-idx="' + idx + '">' +
      '<input class="ind-color" type="color" value="' + ma.color + '" data-kind="ma-color" data-idx="' + idx + '">' +
      '<input class="ind-width" type="number" min="0.5" max="6" step="0.5" value="' + ma.width + '" data-kind="ma-width" data-idx="' + idx + '"><span class="ind-w-label">px</span>' +
    '</div>'
  ).join('');
  if (cfg.vwap){
    rows += '<div class="ind-row">' +
      '<label class="ind-vis"><input type="checkbox" data-kind="vwap-on" ' + (currentChart.vwapOn ? 'checked' : '') + '><span class="ind-dot" style="background:' + currentChart.vwapColor + '"></span></label>' +
      '<span class="ind-label">VWAP</span><span class="ind-fixed">全日</span>' +
      '<input class="ind-color" type="color" value="' + currentChart.vwapColor + '" data-kind="vwap-color">' +
      '<input class="ind-width" type="number" min="0.5" max="8" step="0.5" value="' + currentChart.vwapWidth + '" data-kind="vwap-width"><span class="ind-w-label">px</span>' +
    '</div>';
  }
  wrap.innerHTML = rows;
  wrap.querySelectorAll('input').forEach((inp) => {
    inp.addEventListener('input', onSettingsChange);
    inp.addEventListener('change', onSettingsChange);
  });
}
function onSettingsChange(e){
  const t = e.target, kind = t.dataset.kind, idx = t.dataset.idx;
  if (kind === 'ma-on') currentChart.maLines[idx].on = t.checked;
  else if (kind === 'ma-period') currentChart.maLines[idx].period = Math.max(1, parseInt(t.value) || 1);
  else if (kind === 'ma-color'){ currentChart.maLines[idx].color = t.value; t.closest('.ind-row').querySelector('.ind-dot').style.background = t.value; }
  else if (kind === 'ma-width') currentChart.maLines[idx].width = Math.max(0.5, parseFloat(t.value) || 1.5);
  else if (kind === 'vwap-on') currentChart.vwapOn = t.checked;
  else if (kind === 'vwap-color'){ currentChart.vwapColor = t.value; t.closest('.ind-row').querySelector('.ind-dot').style.background = t.value; }
  else if (kind === 'vwap-width') currentChart.vwapWidth = Math.max(0.5, parseFloat(t.value) || 3);
  drawChart();
}

function tsToBar(b){
  const d = new Date(b.ts);
  const label = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  const fullLabel = (d.getMonth() + 1) + '/' + d.getDate() + ' ' + label;
  return {
    ts: b.ts, open: b.open, high: b.high, low: b.low, close: b.close,
    volume: b.volume ?? 0, label, fullLabel,
    mainNet: b.main_force_available !== false && Number.isFinite(b.main_net_volume) ? b.main_net_volume : null,
  };
}

async function fetchRealBars(code, tf){
  const path = tf === 'm1' ? ('/api/bars1m/' + code) : ('/api/bars/' + code);
  const res = await fetch(path);
  if (!res.ok) throw new Error('bars http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.bars) || !data.bars.length) throw new Error('bars empty');
  return data.bars.map(tsToBar);
}

// 後端主力大單的真正門檻（單筆成交 ≥ 幾張），從主力副圖 API 帶回來，副圖說明照這個寫，不再寫死示範文字。
let mainForceMinLots = null;
function forceNoteText(isReal){
  if (!isReal) return '示範資料：後端連不上或這檔還沒有主力資料，先用模擬數字展示介面';
  if (Number.isFinite(mainForceMinLots) && mainForceMinLots > 0) return '大戶定義：單筆成交 ≥ ' + mainForceMinLots + ' 張（永豐逐筆成交即時統計，買進為正、賣出為負）';
  return '大戶定義：單筆大單逐筆統計（永豐逐筆成交即時資料，門檻由後端設定）';
}
async function fetchMainForceRange(path){
  // 永久保存的主力進出副圖(多日)；抓不到或格式不對就當作沒有歷史主力資料，
  // 不影響K線本身的OHLC，只是mainNet保持null。
  try {
    const res = await fetch(path);
    if (!res.ok) return new Map();
    const data = await res.json();
    if (data && Number.isFinite(Number(data.mainForceMinLots)) && Number(data.mainForceMinLots) > 0) mainForceMinLots = Number(data.mainForceMinLots);
    if (!data || !Array.isArray(data.bars)) return new Map();
    return new Map(
      data.bars
        .filter((b) => b && Number.isFinite(b.ts) && b.main_force_available !== false && Number.isFinite(b.main_net_volume))
        .map((b) => [b.ts, b.main_net_volume])
    );
  } catch (e) {
    return new Map();
  }
}

function taipeiDateStr(ts){
  // 不依賴瀏覽器本身的時區設定，直接位移UTC+8再用UTC存取子，確保跟後端
  // 判斷交易日的方式一致，不管使用者電腦設的是哪個時區。
  const shifted = new Date(ts + 8 * 60 * 60 * 1000);
  const y = shifted.getUTCFullYear();
  const m = String(shifted.getUTCMonth() + 1).padStart(2, '0');
  const d = String(shifted.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + d;
}

function triggerMainForceBackfill(code, interval, bars){
  // 主力副圖的歷史資料只在那個交易日「當時有被即時追蹤」才會被收集器存下來；
  // 沒追蹤到的交易日要靠後端既有的背景回補機制(用Shioaji api.ticks()重建
  // 逐筆大單，每15秒處理一個交易日)補回來。這裡只負責把缺的交易日排進
  // 回補佇列，fire-and-forget不等結果，不拖慢K線圖顯示；補到的資料通常要
  // 等個一兩分鐘、重新開一次圖表才看得到。
  if (!bars || !bars.length) return;
  const today = taipeiDateStr(Date.now());
  const dates = new Set();
  bars.forEach((b) => {
    const d = taipeiDateStr(b.ts);
    if (d !== today) dates.add(d);
  });
  dates.forEach((d) => {
    fetch('/api/force-backfill/' + code + '?interval=' + interval + '&trade_date=' + d).catch(() => {});
  });
}

async function fetchRealBars5Range(code){
  // 5分K 補多天歷史：OHLC來自Shioaji kbars回補；主力淨量分兩層合併——
  // 永久保存的歷史逐日資料先墊底，今日即時Hub資料較新，覆蓋在最上層。
  const [rangeRes, historyForceByTs, todayBars] = await Promise.all([
    fetch('/api/bars5range/' + code),
    fetchMainForceRange('/api/force5range/' + code),
    fetchRealBars(code, 'm5').catch(() => []),
  ]);
  if (!rangeRes.ok) throw new Error('bars5range http ' + rangeRes.status);
  const rangeData = await rangeRes.json();
  if (!rangeData || !Array.isArray(rangeData.bars) || !rangeData.bars.length) throw new Error('bars5range empty');
  triggerMainForceBackfill(code, '5m', rangeData.bars);
  const todayByTs = new Map(todayBars.map((b) => [b.ts, b.mainNet]));
  return rangeData.bars.map((b) => {
    const bar = tsToBar(b);
    if (historyForceByTs.has(bar.ts)) bar.mainNet = historyForceByTs.get(bar.ts);
    if (todayByTs.has(bar.ts)) bar.mainNet = todayByTs.get(bar.ts);
    return bar;
  });
}

async function fetchRealBars1Range(code){
  // 1分K 補多天歷史（至少3天，含今天），主力淨量合併邏輯跟5分K相同。
  const [rangeRes, historyForceByTs, todayBars] = await Promise.all([
    fetch('/api/bars1mrange/' + code),
    fetchMainForceRange('/api/force1range/' + code),
    fetchRealBars(code, 'm1').catch(() => []),
  ]);
  if (!rangeRes.ok) throw new Error('bars1mrange http ' + rangeRes.status);
  const rangeData = await rangeRes.json();
  if (!rangeData || !Array.isArray(rangeData.bars) || !rangeData.bars.length) throw new Error('bars1mrange empty');
  triggerMainForceBackfill(code, '1m', rangeData.bars);
  const todayByTs = new Map(todayBars.map((b) => [b.ts, b.mainNet]));
  return rangeData.bars.map((b) => {
    const bar = tsToBar(b);
    if (historyForceByTs.has(bar.ts)) bar.mainNet = historyForceByTs.get(bar.ts);
    if (todayByTs.has(bar.ts)) bar.mainNet = todayByTs.get(bar.ts);
    return bar;
  });
}

function dailyBarToBar(b){
  const d = new Date(b.ts);
  const label = (d.getMonth() + 1) + '/' + d.getDate();
  const fullLabel = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
  return {
    ts: b.ts, open: b.open, high: b.high, low: b.low, close: b.close,
    volume: b.volume ?? 0, label, fullLabel, mainNet: b.mainNet ?? null,
  };
}

async function fetchRealDailyBars(code){
  const res = await fetch('/api/bars1d/' + code);
  if (!res.ok) throw new Error('bars1d http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.bars) || !data.bars.length) throw new Error('bars1d empty');
  return data.bars.map(dailyBarToBar);
}

async function switchTimeframe(tf){
  const requestToken = ++currentChart.requestToken;
  currentChart.tf = tf;
  document.querySelectorAll('.chart-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.tf === tf));
  const cfg = TF_CONFIG[tf];
  currentChart.maLines = cfg.maPeriods.map((p, idx) => ({
    period: p, color: DEFAULT_MA_COLORS[idx % DEFAULT_MA_COLORS.length], width: 1.5, on: true,
  }));
  currentChart.vwapOn = !!cfg.vwap;
  currentChart.vwapColor = VWAP_COLOR;
  currentChart.vwapWidth = 3;
  currentChart.hoverIndex = null;
  currentChart.viewStart = 0;
  currentChart.viewCount = null;

  let bars = null;
  let isReal = false;
  if (tf === 'm5'){
    try { bars = await fetchRealBars5Range(currentChart.code); isReal = true; } catch (e) { bars = null; }
  } else if (tf === 'm1'){
    try { bars = await fetchRealBars1Range(currentChart.code); isReal = true; } catch (e) { bars = null; }
  } else if (tf === 'daily'){
    try { bars = await fetchRealDailyBars(currentChart.code); isReal = true; } catch (e) { bars = null; }
  }
  if (requestToken !== currentChart.requestToken) return; // 使用者已切到別的分頁/個股，這次結果作廢
  if (!bars) bars = generateOHLC(currentChart.code, tf);
  currentChart.bars = bars;
  currentChart.isRealBars = isReal;

  document.getElementById('cmDataBadge').hidden = isReal;
  document.getElementById('forceNote').textContent = forceNoteText(isReal);

  if (isReal){
    // 累積線必須按交易日歸零：多日回補後bars橫跨好幾天，若不reset，
    // 只要有一天量能特別大(例如漲停爆量)，y軸尺度會被那天撐開，
    // 其他天原本存在的真實數字就會被壓成視覺上的一條平線。
    let cum = 0, cumDate = null;
    currentChart.force = cfg.force ? bars.map((b) => {
      const net = b.mainNet ?? 0;
      const d = taipeiDateStr(b.ts);
      if (d !== cumDate) { cum = 0; cumDate = d; }
      cum += net;
      return { net, cum, date: d };
    }) : null;
  } else {
    currentChart.force = cfg.force ? generateForceFlow(currentChart.code, tf, bars) : null;
  }
  currentChart.macd = computeMACD(bars);
  currentChart.kd = tf === 'm1' ? computeKdFor1m(bars) : null;
  currentChart.macdOn = false;
  const macdBtn = document.getElementById('macdToggle');
  macdBtn.textContent = '開啟'; macdBtn.classList.remove('on'); macdBtn.setAttribute('aria-pressed', 'false');
  renderSettingsPanel();
  redrawAll();
}

// ---- 多視窗 K 線圖（桌機） ----
// 使用者要求：畫面上任何個股點下去就開 K 線圖，而且可以同時開很多個、沒有上限，開著的時候
// 其他地方照樣能點。原本的 K 線圖是全螢幕蓋住的單一視窗，所以只能開一個。
// 做法：每個 K 線圖是一個可拖曳、可縮放的浮動視窗，裡面內嵌同一頁的「圖表模式」
// （?embed=chart&code=…，只顯示 K 線圖），每個視窗有自己獨立的狀態，互不影響。
const CHART_WINDOW_MODE = new URLSearchParams(location.search).get('embed') === 'chart';
const chartWindows = new Map();
let chartWindowSeq = 0;
let chartWindowZ = 0;
function useFloatingCharts(){
  return !CHART_WINDOW_MODE && !document.body.classList.contains('signal-window-mode') && window.innerWidth >= 768;
}
function chartEmbedUrl(code, name, tf){
  const params = new URLSearchParams({ embed: 'chart', code: code, name: name || '' });
  if (tf) params.set('tf', tf);
  return location.pathname + '?' + params.toString();
}
function bringChartWindowToFront(win){
  chartWindowZ += 1;
  win.el.style.zIndex = String(chartWindowZ);
  chartWindows.forEach((w) => w.el.classList.toggle('front', w === win));
}
// 有任何一個最大化（且沒縮到托盤）的 K 線視窗時鎖住主頁捲動：主頁的捲軸消失，右邊只剩視窗自己的捲軸。
function syncMaximizedBodyLock(){
  let any = false;
  chartWindows.forEach((w) => { if (!w.tray && w.el.classList.contains('maximized')) any = true; });
  document.body.classList.toggle('chart-maximized', any);
}
function closeChartWindow(id){
  const win = chartWindows.get(id);
  if (!win) return;
  if (win.tray) win.tray.remove();
  win.el.remove();
  chartWindows.delete(id);
  syncMaximizedBodyLock();
}
function minimizeChartWindow(id){
  const win = chartWindows.get(id);
  if (!win || win.tray) return;
  win.el.classList.add('minimized');
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.title = '還原 ' + win.code + ' K線圖';
  pill.textContent = '▲ ' + win.code + ' ' + (win.name || '');
  pill.addEventListener('click', () => restoreChartWindow(id));
  document.getElementById('chartTray').appendChild(pill);
  win.tray = pill;
  syncMaximizedBodyLock();
}
function restoreChartWindow(id){
  const win = chartWindows.get(id);
  if (!win) return;
  if (win.tray){ win.tray.remove(); win.tray = null; }
  win.el.classList.remove('minimized');
  bringChartWindowToFront(win);
  syncMaximizedBodyLock();
}
function toggleMaximizeChartWindow(id){
  const win = chartWindows.get(id);
  if (!win) return;
  const maximized = win.el.classList.toggle('maximized');
  const btn = win.el.querySelector('[data-act="max"]');
  if (btn){ btn.textContent = maximized ? '❐' : '▢'; btn.title = maximized ? '還原' : '最大化／還原'; }
  bringChartWindowToFront(win);
  syncMaximizedBodyLock();
}
function closeTopChartWindow(){
  let top = null;
  chartWindows.forEach((w) => { if (!w.tray && (!top || Number(w.el.style.zIndex) > Number(top.el.style.zIndex))) top = w; });
  if (!top) return false;
  closeChartWindow(top.id);
  return true;
}
function openChartWindow(code, name, tf){
  for (const win of chartWindows.values()){
    if (win.code === code){ bringChartWindowToFront(win); return win; }  // 同一檔已開著就拉到最前面
  }
  const layer = document.getElementById('chartWindows');
  const id = ++chartWindowSeq;
  const n = chartWindows.size;
  const w = Math.min(1000, Math.round(window.innerWidth * 0.7));
  const h = Math.min(720, Math.round(window.innerHeight * 0.82));
  const left = Math.max(0, Math.min(window.innerWidth - w - 8, 40 + (n % 8) * 36));
  const top = Math.max(0, Math.min(window.innerHeight - h - 8, 40 + (n % 8) * 28));
  const el = document.createElement('div');
  el.className = 'chart-float';
  el.style.cssText = 'left:' + left + 'px;top:' + top + 'px;width:' + w + 'px;height:' + h + 'px;';
  el.innerHTML = '<div class="chart-float-head">' +
      '<div class="chart-float-title">' + code + '<span class="cf-name">' + (name || '') + '</span></div>' +
      '<div class="chart-float-actions">' +
        '<button type="button" data-act="popout" title="移到另一螢幕">⧉ 另開視窗</button>' +
        '<button type="button" data-act="min" title="最小化" aria-label="最小化">－</button>' +
        '<button type="button" data-act="max" title="最大化／還原" aria-label="最大化／還原">▢</button>' +
        '<button type="button" data-act="close" aria-label="關閉">✕</button>' +
      '</div></div>' +
    '<iframe title="' + code + ' K線圖" src="' + chartEmbedUrl(code, name, tf) + '"></iframe>';
  layer.appendChild(el);
  const win = { id: id, el: el, code: code, name: name, iframe: el.querySelector('iframe') };
  chartWindows.set(id, win);
  bringChartWindowToFront(win);
  el.addEventListener('pointerdown', () => bringChartWindowToFront(win), true);
  el.querySelector('[data-act="close"]').addEventListener('click', () => closeChartWindow(id));
  el.querySelector('[data-act="min"]').addEventListener('click', () => minimizeChartWindow(id));
  el.querySelector('[data-act="max"]').addEventListener('click', () => toggleMaximizeChartWindow(id));
  el.querySelector('[data-act="popout"]').addEventListener('click', () => {
    const popup = window.open(chartEmbedUrl(code, name, tf), 'hanstockChart_' + code, 'width=1100,height=760');
    if (popup){ popup.focus(); closeChartWindow(id); }
  });
  const head = el.querySelector('.chart-float-head');
  let dragging = false, offX = 0, offY = 0;
  head.addEventListener('dblclick', (e) => { if (!e.target.closest('button')) toggleMaximizeChartWindow(id); });
  head.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button') || el.classList.contains('maximized')) return;
    dragging = true; offX = e.clientX - el.offsetLeft; offY = e.clientY - el.offsetTop;
    el.classList.add('dragging');
    head.setPointerCapture(e.pointerId);
  });
  head.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    el.style.left = Math.min(window.innerWidth - 80, Math.max(120 - el.offsetWidth, e.clientX - offX)) + 'px';
    el.style.top = Math.min(window.innerHeight - 40, Math.max(0, e.clientY - offY)) + 'px';
  });
  const stopDrag = () => { dragging = false; el.classList.remove('dragging'); };
  head.addEventListener('pointerup', stopDrag);
  head.addEventListener('pointercancel', stopDrag);
  return win;
}
// 內嵌圖表模式裡按 ✕ 或 Esc，會通知父頁關掉對應的浮動視窗。
window.addEventListener('message', (e) => {
  if (e.origin !== location.origin || !e.data) return;
  if (e.data.type === 'hanstockChartClose'){
    chartWindows.forEach((w) => { if (w.iframe.contentWindow === e.source) closeChartWindow(w.id); });
  } else if (e.data.type === 'hanstockChartFocus'){
    chartWindows.forEach((w) => { if (w.iframe.contentWindow === e.source) bringChartWindowToFront(w); });
  }
});

function openStockChart(code, name, tf){
  if (useFloatingCharts()){ openChartWindow(code, name, tf); return; }
  const overlay = document.getElementById('chartModal');
  const wasHidden = overlay.hidden;
  currentChart.code = code;
  currentChart.name = name;
  document.getElementById('cmCode').textContent = code;
  document.getElementById('cmName').textContent = name;
  renderChartFlags(code);
  if (wasHidden){
    const panel = document.getElementById('chartModalInner');
    overlay.hidden = false;
    overlay.classList.remove('fullscreen');
    document.body.style.overflow = 'hidden';
    const w = Math.min(1180, window.innerWidth * 0.94);
    const h = Math.min(800, window.innerHeight * 0.88);
    panel.style.width = w + 'px'; panel.style.height = h + 'px';
    panel.style.left = Math.max(0, (window.innerWidth - w) / 2) + 'px';
    panel.style.top = Math.max(10, (window.innerHeight - h) / 2) + 'px';
    attachChartInteraction();
  }
  switchTimeframe(tf || 'm5');
}
function closeStockChart(){
  if (CHART_WINDOW_MODE){
    if (window.parent !== window){ window.parent.postMessage({ type: 'hanstockChartClose' }, location.origin); return; }
    window.close();
    return;
  }
  document.getElementById('chartModal').hidden = true;
  document.body.style.overflow = '';
  // 若是從訊號中心點進來的，關圖後讓訊號中心回到最上層。
  document.getElementById('signalModal').classList.remove('behind-chart');
}

let openGroupName = null;
function openGroupDetail(groupName){
  if (!lastData) return;
  const g = lastData.groups.find((x) => x.name === groupName);
  if (!g) return;
  openGroupName = groupName;
  document.getElementById('gmTitle').textContent = groupName + '（' + g.stocks.length + ' 檔）';
  const sorted = g.stocks.slice().sort((a, b) => b.changePercent - a.changePercent);
  document.getElementById('gmList').innerHTML = STOCK_COL_LABELS_HTML + sorted.map((s) => {
    const price = getBasePrice(s.code);
    const prevClose = price / (1 + s.changePercent / 100);
    const changeAmt = price - prevClose;
    return '<div class="stock-row" data-code="' + s.code + '" data-name="' + s.name + '" tabindex="0" role="button">' +
      '<div class="srow-left"><span class="scode">' + s.code + '</span><span class="sname">' + s.name + '</span></div>' +
      stockValueColsHtml(price, changeAmt, s.changePercent) +
    '</div>';
  }).join('');
  document.getElementById('groupModal').hidden = false;
}
function closeGroupDetail(){
  document.getElementById('groupModal').hidden = true;
  openGroupName = null;
}

let savedGeometry = null;
function toggleFullscreen(){
  const overlay = document.getElementById('chartModal');
  const panel = document.getElementById('chartModalInner');
  const btn = document.getElementById('cmMax');
  const goingFull = !overlay.classList.contains('fullscreen');
  if (goingFull){
    savedGeometry = { left: panel.style.left, top: panel.style.top, width: panel.style.width, height: panel.style.height };
    overlay.classList.add('fullscreen');
  } else {
    overlay.classList.remove('fullscreen');
    if (savedGeometry){
      panel.style.left = savedGeometry.left; panel.style.top = savedGeometry.top;
      panel.style.width = savedGeometry.width; panel.style.height = savedGeometry.height;
    }
  }
  btn.classList.toggle('on', goingFull);
  btn.setAttribute('aria-pressed', String(goingFull));
}

function initWindowChrome(){
  const panel = document.getElementById('chartModalInner');
  const head = document.getElementById('chartModalHead');
  let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
  head.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.cm-icon-btn') || e.target.closest('.cm-quick-search') || e.target.closest('.cm-go-btn')) return;
    if (document.getElementById('chartModal').classList.contains('fullscreen')) return;
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    const rect = panel.getBoundingClientRect();
    startLeft = rect.left; startTop = rect.top;
    head.setPointerCapture(e.pointerId);
  });
  head.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    let left = startLeft + dx, top = startTop + dy;
    left = Math.max(-panel.offsetWidth + 100, Math.min(window.innerWidth - 100, left));
    top = Math.max(0, Math.min(window.innerHeight - 40, top));
    panel.style.left = left + 'px'; panel.style.top = top + 'px';
  });
  head.addEventListener('pointerup', () => { dragging = false; });
  head.addEventListener('pointercancel', () => { dragging = false; });

  const ro = new ResizeObserver(() => redrawAll());
  ro.observe(panel);
}

function fmt(n){ return (n>0?'+':'') + n.toFixed(2); }
function fmtAmountWan(n){
  // 大戶買賣超金額(元)換算成萬/億顯示，跟台股新聞慣例一致：不到1億用萬、達1億用億(2位小數)。
  if (n === null || n === undefined || !Number.isFinite(n)) return '';
  const sign = n >= 0 ? '+' : '-';
  const abs = Math.abs(n);
  return sign + (abs >= 100000000 ? (abs / 100000000).toFixed(2) + '億' : Math.round(abs / 10000).toLocaleString('zh-TW') + '萬');
}
const STOCK_COL_LABELS_HTML = '<div class="stock-col-labels"><span></span><span class="srow-right">' +
  '<span class="spct">漲跌幅</span><span class="schg">漲跌</span><span class="sprice">成交價</span></span></div>';
function stockValueColsHtml(price, changeAmt, changePercent){
  const cls = dirClass(changePercent);
  return '<div class="srow-right">' +
    '<span class="spct ' + cls + '">' + fmt(changePercent) + '%</span>' +
    '<span class="schg ' + cls + '">' + (changeAmt > 0 ? '+' : '') + changeAmt.toFixed(2) + '</span>' +
    '<span class="sprice ' + cls + '">' + price.toFixed(2) + '</span>' +
  '</div>';
}
function dirClass(n){ return n>0?'up':(n<0?'down':'flat'); }

function generateMockQuotes(){
  const quotes = {};
  ALL_CODES.forEach((code) => {
    const r1 = Math.random() || 1e-9, r2 = Math.random();
    const gauss = Math.sqrt(-2 * Math.log(r1)) * Math.cos(2 * Math.PI * r2);
    let pct = gauss * 2.2;
    pct = Math.max(-9.8, Math.min(9.8, pct));
    quotes[code] = pct;
  });
  return quotes;
}

function buildMockData(){
  const quotes = generateMockQuotes();
  const groups = GROUPS.map((g) => {
    const stocks = g.stocks.map((s) => ({
      code: s.code,
      name: s.name,
      changePercent: quotes[s.code] ?? 0,
    }));
    const avgChange = stocks.reduce((sum, s) => sum + s.changePercent, 0) / stocks.length;
    return { name: g.name, avgChange, stocks };
  });
  return { groups };
}

function buildOtcStrengthDemo(){
  const dayRnd = mulberry32(hashCode(new Date().toISOString().slice(0, 10) + '-otc'));
  const basePrice = 390 + dayRnd() * 20;
  const jitter = (Math.random() - 0.5) * 1.2;
  const otcPrice = Math.round((basePrice + jitter) * 100) / 100;
  const ma20 = Math.round((basePrice + (dayRnd() - 0.5) * 3) * 100) / 100;
  const barLow = Math.round((basePrice + (dayRnd() - 0.5) * 4) * 100) / 100;
  const aboveMa20 = otcPrice > ma20;
  const aboveRefLow = otcPrice > barLow;
  let label, badgeCls;
  if (aboveMa20 && aboveRefLow){ label = '強多'; badgeCls = 'up'; }
  else if (!aboveMa20 && !aboveRefLow){ label = '強空'; badgeCls = 'down'; }
  else { label = '個股震盪'; badgeCls = ''; }
  return {
    label, badgeCls,
    line1: (aboveMa20 ? '↑' : '↓') + ' 5K 20MA　即時 ' + otcPrice.toFixed(2) + '，在20MA ' + ma20.toFixed(2) + ' 之' + (aboveMa20 ? '上' : '下'),
    line1Cls: aboveMa20 ? 'up' : 'down',
    line2: (aboveRefLow ? '↑' : '↓') + ' 第三根5K低點　即時 ' + otcPrice.toFixed(2) + '，在第3根低點 ' + barLow.toFixed(2) + ' 之' + (aboveRefLow ? '上' : '下'),
    line2Cls: aboveRefLow ? 'up' : 'down',
  };
}
async function renderOtcStrengthWidget(){
  const el = document.getElementById('otcStrengthBox');
  if (!el) return;
  try {
    const res = await fetch('/api/otc-strength');
    if (!res.ok) throw new Error('otc-strength http ' + res.status);
    const data = await res.json();
    if (!data || data.status !== 'ok') throw new Error('otc-strength bad payload');
    otcStrengthLatest = data; // 盤中打 333 要用櫃買的漲跌幅與強多／強空
    if (!data.ready){
      el.innerHTML =
        '<div class="ms-badge">資料蒐集中</div>' +
        '<div class="ms-lines"><div>' + (data.reason || '尚未累積足夠的5分K資料') + '</div>' +
        '<div class="ms-updated">歷史5分K會自動補齊，通常一兩分鐘內就會有訊號；不是示範資料。</div></div>';
      return;
    }
    const badgeCls = data.label === '強多' ? 'up' : data.label === '強空' ? 'down' : '';
    const line1Cls = data.aboveMa20 ? 'up' : 'down';
    const line2Cls = data.aboveRefLow ? 'up' : 'down';
    el.innerHTML =
      '<div class="ms-badge' + (badgeCls ? ' ' + badgeCls : '') + '">' + data.label + '</div>' +
      '<div class="ms-lines"><div class="ms-line ' + line1Cls + '">' + (data.aboveMa20 ? '↑' : '↓') + ' 5K 20MA　即時 ' + data.price.toFixed(2) + '，在20MA ' + data.ma20.toFixed(2) + ' 之' + (data.aboveMa20 ? '上' : '下') + '</div>' +
      '<div class="ms-line ' + line2Cls + '">' + (data.aboveRefLow ? '↑' : '↓') + ' 第三根5K低點　即時 ' + data.price.toFixed(2) + '，在第3根低點 ' + data.refLow.toFixed(2) + ' 之' + (data.aboveRefLow ? '上' : '下') + '</div>' +
      '<div class="ms-updated">最新更新 ' + new Date(data.updatedAt).toLocaleTimeString('zh-TW') + '</div></div>';
  } catch (e) {
    const s = buildOtcStrengthDemo();
    el.innerHTML =
      '<div class="ms-badge' + (s.badgeCls ? ' ' + s.badgeCls : '') + '">' + s.label + '</div>' +
      '<div class="ms-lines"><div class="ms-line ' + s.line1Cls + '">' + s.line1 + '</div><div class="ms-line ' + s.line2Cls + '">' + s.line2 + '</div>' +
      '<div class="ms-updated">最新更新 ' + new Date().toLocaleTimeString('zh-TW') + '（示範資料，尚無真實回報）</div></div>';
  }
}

// 使用者 2026-09-24：族群大戶力／族群綜合表／盤中333 這三個移到今日即時後面（原本排在後段）。
const SIGNAL_KINDS = [
  { key: 'now', label: '今日即時' },
  { key: 'groupCombinedBoard', label: '族群綜合表' },
  { key: 'groupHolderForce', label: '族群大戶力' },
  { key: 'race333', label: '盤中333' },
  { key: 'bigHolderForce', label: '盤中大戶力' },
  { key: 'brewLaunch', label: '醞釀／發動' },
  { key: 'fourGate', label: '四項精選' },
  { key: 'combo12Bull', label: '1+2多' },
  { key: 'blackDragon', label: '創高黑龍' },
  { key: 'mainForceFlip', label: '主力翻多空' },
  { key: 'bigBuy', label: '盤中特大買單' },
  { key: 'bigSell', label: '盤中特大賣單' },
  { key: 'dispositionRisk', label: '處置股預測' },
  { key: 'history', label: '歷史查詢' },
];
// 5分鐘K策略訊號家族(MA交叉/520/A8空等)只在K線圖上用符號呈現，不進盤中
// 訊號中心；但這兩個是獨立的「結構性」訊號，使用者要求另外開專屬分頁。
const DEDICATED_KLINE_TABS = new Set(['combo12Bull', 'blackDragon']);
// 收盤後校正狀態（提供給下面兩個獨立結構性訊號分頁用，確認收盤後校正有沒有跑完）
let klineBackfillStatus = null;
let klineBackfillFetchedAt = 0;
async function refreshKlineBackfillStatus(){
  if (Date.now() - klineBackfillFetchedAt < 30000) return;
  klineBackfillFetchedAt = Date.now();
  try {
    const res = await fetch('/api/kline-backfill-status');
    if (!res.ok) throw new Error('http ' + res.status);
    klineBackfillStatus = await res.json();
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
  } catch (e) { /* 讀不到就沿用上一次 */ }
}
function klineBackfillNoteHtml(){
  const s = klineBackfillStatus;
  const now = new Date();
  const minute = now.getHours() * 60 + now.getMinutes();
  let text;
  if (!s) text = '收盤後校正：狀態讀取中';
  else if (s.running) text = '收盤後校正：進行中（用歷史K棒重算今天全部股票，約 20 分鐘，跑完名單會更新）';
  else if (!s.result) text = minute < 13 * 60 + 35 ? '收盤後校正：13:35 收盤後才會跑，盤中只有即時偵測' : '收盤後校正：這次啟動後還沒跑（背景每 10 分鐘檢查一次）';
  else if (s.result.error) text = '收盤後校正：失敗 ' + s.result.error;
  else text = '收盤後校正：完成 ' + s.result.tradeDate + '，重算 ' + s.result.codesProcessed + '／' + s.result.codeCount + ' 檔、' + s.result.barsReplayed + ' 根K、發出 ' + s.result.signalsEmitted + ' 個訊號' + (s.result.failures && s.result.failures.length ? '、失敗 ' + s.result.failures.length + ' 檔' : '');
  return '<div class="race-note">' + text + '</div>';
}
function pickDemoStocks(n, seedExtra){
  const rnd = mulberry32(hashCode('signal-pool-' + seedExtra));
  const pool = GROUPS.flatMap((g) => g.stocks.map((s) => ({ code: s.code, name: s.name, group: g.name })));
  const out = [], used = new Set();
  while (out.length < n && used.size < pool.length){
    const idx = Math.floor(rnd() * pool.length);
    if (used.has(idx)) continue;
    used.add(idx);
    out.push(pool[idx]);
  }
  return out;
}
function buildDemoSignalsForDate(dateStr){
  const rnd = mulberry32(hashCode('signals-' + dateStr));
  const stockPool = pickDemoStocks(20, dateStr);
  const counts = { fourGate: 1, bigBuy: 2, bigSell: 2, bigHolderForce: 2 };
  const events = [];
  let si = 0;
  Object.keys(counts).forEach((kind) => {
    for (let i = 0; i < counts[kind]; i++){
      const s = stockPool[si % stockPool.length]; si++;
      const hh = 9 + Math.floor(rnd() * 4);
      const mm = Math.floor(rnd() * 60);
      const timeLabel = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
      const qty = Math.round(500 + rnd() * 2500);
      let label = '';
      if (kind === 'fourGate') label = '四項條件同時成立';
      else if (kind === 'bigBuy') label = '單筆買進 ' + qty + ' 張';
      else if (kind === 'bigSell') label = '單筆賣出 ' + qty + ' 張';
      else if (kind === 'bigHolderForce') label = '大戶買賣力' + (rnd() > 0.5 ? '轉強' : '轉弱');
      events.push({ kind, time: timeLabel, code: s.code, name: s.name, group: s.group, label });
    }
  });
  events.sort((a, b) => (a.time < b.time ? 1 : -1));
  return events;
}

let alertsEnabled = true;
let signalCenterState = { activeTab: 'now', historyDate: null };
let todaySignalEvents = [];
let mainForceRanking = [];
let mainForceRankingLoaded = false; // 第一次抓/api/main-force-ranking成功後才true，且不會因為後面某次輪詢失敗而變回false；
                                     // 用來分辨「這個分頁/視窗根本還沒抓到過大戶力資料」跟「抓到了但目前真的是空的」，
                                     // 不然新開的彈出視窗(移到另一螢幕)一開始mainForceRanking是[]，族群大戶力／族群
                                     // 綜合表會在抓到資料前先顯示「目前沒有符合條件的個股」，看起來像是壞掉。
let signalDataIsReal = false;
const BIG_HOLDER_THRESHOLD = 500; // 累計買賣超達 500 張視為大戶力，跟K線圖大戶定義一致
function bigHolderRowsFrom(ranking){
  return ranking.filter((r) => Math.abs(r.netVolume) >= BIG_HOLDER_THRESHOLD);
}

function lookupStockName(code){
  for (const g of GROUPS){
    const s = g.stocks.find((x) => x.code === code);
    if (s) return s.name;
  }
  return code;
}
function lookupStockGroup(code){
  for (const g of GROUPS){
    if (g.stocks.some((x) => x.code === code)) return g.name;
  }
  return '';
}

function mapLargeOrderSignal(s){
  const kind = s.kind;
  const isFourGate = kind === 'fourGateBuy' || kind === 'fourGateSell';
  // 一般5分鐘K策略訊號(905/520/20MA系列等)跟瞬間大單共用同一張表、同一個
  // API，但不是大單事件，已經在fetchRealSignals先過濾掉，這裡只會看到
  // DEDICATED_KLINE_TABS這三個「結構性」訊號：多空判斷看KLINE_SIGNAL_INFO
  // 裡的side，歸進各自專屬分頁，不能套用大單的isBuy判斷、也不能歸進族群
  // 瞬間大單/特大買賣單分頁(那樣分頁會被污染成跟大單一樣的數字)。
  const klineInfo = KLINE_SIGNAL_INFO[kind];
  const isFlip = kind === 'mainForceFlipBull' || kind === 'mainForceFlipBear';
  const isBuy = klineInfo ? klineInfo.side === 'bull' : (kind === 'instantLargeBuy' || kind === 'fourGateBuy' || kind === 'mainForceFlipBull');
  const backendName = s.name && s.name !== s.ticker ? s.name : null;
  return {
    tabs: isFourGate ? ['now', 'fourGate'] : isFlip ? ['now', 'mainForceFlip'] : (DEDICATED_KLINE_TABS.has(kind) ? ['now', kind] : ['now', isBuy ? 'bigBuy' : 'bigSell']),
    time: new Date(s.barTs).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }),
    ts: s.barTs,
    code: s.ticker, name: backendName || lookupStockName(s.ticker), group: s.groupName, label: s.label, isBuy,
    note: s.note || '',
  };
}

// 只看 43 個族群的股票（2026-09-24 使用者：不在 43 個族群裡的不要掃；「股期標的」是股票期貨標的清單不是族群）。
// 後端已經不掃了，這裡把之前已經存下來的族群外訊號（例如達發、中華電的創高黑龍）也濾掉。
let industryCodeCache = { src: null, set: null };
function industryCodes(){
  const groups = lastData && Array.isArray(lastData.groups) ? lastData.groups : null;
  if (!groups || !groups.length) return null;
  if (industryCodeCache.src !== groups){
    const set = new Set();
    groups.forEach((g) => { if (g.name !== '股期標的') g.stocks.forEach((st) => set.add(String(st.code).toUpperCase())); });
    industryCodeCache = { src: groups, set };
  }
  return industryCodeCache.set;
}
async function fetchRealSignals(dateStr){
  // limit要跟後端load_latest_signals()真正的上限(5000)看齊：活躍盤勢
  // 一天全部kind種類加總很容易超過500，之前卡在500時只是把早盤訊號被
  // 砍掉的門檻往後推遲(09:55→09:35)，沒有真正解決。
  const res = await fetch('/api/intraday-signals?trade_date=' + dateStr + '&limit=5000');
  if (!res.ok) throw new Error('intraday-signals http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.signals)) throw new Error('bad payload');
  // 一般5分鐘K策略訊號(MA交叉/520/A8空等)只在K線圖上用符號呈現；只留下
  // 不是這個家族的訊號、以及兩個獨立的「結構性」訊號(1+2多/創高黑龍)。
  const inScope = industryCodes();
  return data.signals
    .filter((s) => !KLINE_SIGNAL_INFO[s.kind] || DEDICATED_KLINE_TABS.has(s.kind))
    .filter((s) => !inScope || inScope.has(String(s.ticker || s.code || '').toUpperCase()))
    .map(mapLargeOrderSignal);
}

// 後端排行回的資料日期：過午夜到下一個交易日 08:45 之前今天還沒資料時，後端會沿用上一個交易日
// 的最終排行（heldFrom＝替哪一天暫留），三個大戶力分頁要讓使用者知道看的是哪一天的資料。
let mainForceRankingInfo = { tradeDate: null, heldFrom: null };
function holderDataHeldNoteHtml(){
  if (!mainForceRankingInfo.heldFrom) return '';
  return '<div class="race-sub">目前顯示 ' + mainForceRankingInfo.tradeDate + ' 收盤時的最終大戶力資料（今天還沒開盤），保留到下一個交易日開盤前 15 分鐘（08:45）才清空重算。</div>';
}
// ---- 三個大戶力分頁（盤中大戶力／族群大戶力／族群綜合表）的「今天／昨天／前天」切換 ----
// 使用者 2026-09-24：資料要留著才能比較族群今天跟昨天、前天的強弱。昨天／前天＝那一天收盤時的
// 最終大戶力排行（後端 main_force_bars 依 trade_date 查），漲跌幅／漲跌／成交價則用後端日K
// （/api/group-daily-changes 的 stocks[code].pct/close/change）那一天的收盤值；處置／注意狀態只有
// 今天的資料，看過去的日子時不併入。offset 0＝今天（或後端暫留的最新一個交易日）、1＝昨天、2＝前天。
let holderDayOffset = 0;
const holderHistoryRanking = {};   // date -> ranking[]（抓過就留著，不重抓）
const holderHistoryLoading = {};   // date -> true（抓取中）
const holderHistoryFailedAt = {};  // date -> 最近一次抓失敗的時間，30 秒內不重試
function holderCurrentDate(){
  return mainForceRankingInfo.tradeDate || new Date().toISOString().slice(0, 10);
}
function holderPastDates(){
  const dates = groupDailyChanges && Array.isArray(groupDailyChanges.dates) ? groupDailyChanges.dates : [];
  const cur = holderCurrentDate();
  return dates.filter((d) => d < cur);
}
function holderViewDate(){
  if (holderDayOffset === 0) return holderCurrentDate();
  return holderPastDates()[holderDayOffset - 1] || null;
}
async function ensureHolderHistory(date){
  if (holderHistoryRanking[date] || holderHistoryLoading[date]) return;
  if (holderHistoryFailedAt[date] && Date.now() - holderHistoryFailedAt[date] < 30000) return;
  holderHistoryLoading[date] = true;
  try {
    const res = await fetch('/api/main-force-ranking?limit=1000&trade_date=' + encodeURIComponent(date));
    if (!res.ok) throw new Error('main-force-ranking http ' + res.status);
    const data = await res.json();
    if (!data || !Array.isArray(data.ranking)) throw new Error('bad payload');
    holderHistoryRanking[date] = data.ranking;
  } catch (e) {
    holderHistoryFailedAt[date] = Date.now();
  } finally {
    delete holderHistoryLoading[date];
  }
  if (!document.getElementById('signalModal').hidden) renderSignalCenter();
}
function holderPastQuote(code, date){
  if (!groupDailyChanges || !Array.isArray(groupDailyChanges.dates)) return null;
  const idx = groupDailyChanges.dates.indexOf(date);
  const d = idx >= 0 && groupDailyChanges.stocks ? groupDailyChanges.stocks[code] : null;
  if (!d) return null;
  const num = (arr) => (Array.isArray(arr) && arr[idx] !== null && arr[idx] !== undefined ? Number(arr[idx]) : NaN);
  const close = num(d.close);
  const pct = num(d.pct);
  if (!Number.isFinite(close) || !Number.isFinite(pct)) return null;
  const change = num(d.change);
  return { price: close, changePercent: pct, changeAmt: Number.isFinite(change) ? change : close - close / (1 + pct / 100) };
}
// 把首頁的族群結構套上那一天的日K收盤，做成跟 lastData.groups 一樣形狀的資料給族群模型用。
function holderSnapshotGroups(date){
  if (!lastData || !Array.isArray(lastData.groups) || !groupDailyChanges || !Array.isArray(groupDailyChanges.dates)) return null;
  const idx = groupDailyChanges.dates.indexOf(date);
  if (idx < 0) return null;
  const groupsDaily = groupDailyChanges.groups || {};
  return lastData.groups.map((g) => {
    const stocks = g.stocks.map((s) => {
      const q = holderPastQuote(s.code, date);
      return { code: s.code, name: s.name, price: q ? q.price : null, changePercent: q ? q.changePercent : null,
        changeAmt: q ? q.changeAmt : null, limitUp: false, limitDown: false, volume: null };
    });
    const gd = groupsDaily[g.name];
    let avg = gd && Array.isArray(gd.pct) && Number.isFinite(gd.pct[idx]) ? gd.pct[idx] : null;
    if (avg === null){
      const pcts = stocks.filter((s) => s.price !== null).map((s) => s.changePercent);
      if (!pcts.length) return null;
      avg = pcts.reduce((a, b) => a + b, 0) / pcts.length;
    }
    return { name: g.name, avgChange: avg, stocks };
  }).filter(Boolean);
}
function holderView(){
  if (holderDayOffset === 0){
    return { offset: 0, date: holderCurrentDate(), ranking: mainForceRanking || [], groups: lastData ? lastData.groups : null, loading: !mainForceRankingLoaded, isPast: false, unavailable: false };
  }
  const date = holderViewDate();
  if (!date) return { offset: holderDayOffset, date: null, ranking: [], groups: null, loading: false, isPast: true, unavailable: true };
  ensureHolderHistory(date);
  const ranking = holderHistoryRanking[date];
  return { offset: holderDayOffset, date, ranking: ranking || [], groups: holderSnapshotGroups(date), loading: !ranking, isPast: true, unavailable: false };
}
function holderDayBarHtml(){
  const past = holderPastDates();
  const mmdd = (d) => (d ? String(d).slice(5).replace('-', '/') : '');
  const cur = holderCurrentDate();
  const todayLabel = mainForceRankingInfo.heldFrom ? '今天（' + mmdd(cur) + ' 收盤）' : '今天';
  const btn = (offset, label, date) => '<button class="chart-tab hf-day-btn' + (holderDayOffset === offset ? ' active' : '') + '" data-offset="' + offset + '"' + (date ? '' : ' disabled') + '>' + label + '</button>';
  return '<div class="combo-filter-bar hf-day-bar">' +
    btn(0, todayLabel, cur) +
    btn(1, '昨天' + (past[0] ? ' ' + mmdd(past[0]) : ''), past[0]) +
    btn(2, '前天' + (past[1] ? ' ' + mmdd(past[1]) : ''), past[1]) +
    '</div>';
}
function holderPastNoteHtml(view){
  if (!view || !view.isPast) return holderDataHeldNoteHtml();
  if (view.unavailable) return '<div class="race-sub">後端日K還沒有那一天的資料，暫時沒辦法顯示。</div>';
  return '<div class="race-sub">目前顯示 ' + view.date + ' 收盤時的最終大戶力資料；漲跌幅／漲跌／成交價是那一天的日K收盤值，處置／注意狀態只在今天的頁面顯示。' + (view.loading ? '大戶力排行讀取中…' : '') + '</div>';
}
function holderEmptyHtml(view, title, sub){
  if (view && view.loading){ title = '讀取中…'; sub = '正在抓 ' + view.date + ' 收盤時的大戶力排行。'; }
  else if (view && view.unavailable){ title = '還沒有那一天的資料'; sub = '後端日K累積到那一天之後就會出現。'; }
  return '<div class="signal-empty"><div class="se-title">' + title + '</div><div class="se-sub">' + sub + '</div></div>';
}
async function fetchMainForceRanking(){
  // limit拉到1000(後端上限)：族群大戶力要從43個官方族群裡各挑前5名，
  // 只抓前200名很容易讓某些族群完全沒有股票入選，跟真正的全市場排行對不起來。
  const res = await fetch('/api/main-force-ranking?limit=1000');
  if (!res.ok) throw new Error('main-force-ranking http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.ranking)) throw new Error('bad payload');
  mainForceRankingInfo = { tradeDate: data.tradeDate || null, heldFrom: data.heldFrom || null };
  return data.ranking;
}

let signalRefreshInFlight = false;
async function refreshSignalData(){
  if (signalRefreshInFlight) return;
  signalRefreshInFlight = true;
  const today = new Date().toISOString().slice(0, 10);
  try {
    try {
      const [signals, ranking] = await Promise.all([fetchRealSignals(today), fetchMainForceRanking()]);
      todaySignalEvents = signals;
      mainForceRanking = ranking;
      mainForceRankingLoaded = true;
      signalDataIsReal = true;
    } catch (e) {
      todaySignalEvents = buildDemoSignalsForDate(today)
        .map((ev) => ({ ...ev, tabs: ['now', ev.kind] }));
      mainForceRanking = [];
      signalDataIsReal = false;
    }
    const countEl = document.getElementById('signalBadgeCount');
    // 跟「今日即時」分頁的數量算法要一致(事件訊號+盤中大戶力)，不然這裡
    // 少算大戶力筆數，右上角徽章數字就會比今日即時分頁裡的數字還小。
    if (countEl) countEl.textContent = String(todaySignalEvents.length + bigHolderRowsFrom(mainForceRanking).length);
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
  } finally {
    signalRefreshInFlight = false;
  }
}

// 瞬間大單/特大買賣單標籤的hover提示文字：門檻定義要跟後端
// intraday_large_order.py的MIN_BURST_LOTS/AMOUNT、EXTRA_BURST_LOTS/AMOUNT
// 一致(1秒內同方向成交量或金額任一達標即觸發，兩個門檻用OR不是AND)。
const LARGE_ORDER_TOOLTIPS = {
  '瞬間大單連續敲進': '1秒內同方向成交量 ≥ 100張 或 ≥ 3,000萬元',
  '瞬間大單連續賣出': '1秒內同方向成交量 ≥ 100張 或 ≥ 3,000萬元',
  '瞬間特大買單敲進': '1秒內同方向成交量 ≥ 300張 或 ≥ 5,000萬元',
  '瞬間特大賣單倒出': '1秒內同方向成交量 ≥ 300張 或 ≥ 5,000萬元',
  '主力累計翻多': 'A～D同步：主力累計淨額由負翻正(零軸)、1分K收盤站上VWAP，兩者5分鐘內發生；主力淨額率 ≥ +20%、量比 ≥ 1.5×',
  '主力累計強勢翻多': 'A～D同步：主力累計淨額由負翻正(零軸)、1分K收盤站上VWAP，兩者5分鐘內發生；主力淨額率 ≥ +40%、量比 ≥ 3×',
  '主力累計翻空': 'A～D同步：主力累計淨額由正翻負(零軸)、1分K收盤跌破VWAP，兩者5分鐘內發生；主力淨額率 ≤ -20%、量比 ≥ 1.5×',
  '主力累計強勢翻空': 'A～D同步：主力累計淨額由正翻負(零軸)、1分K收盤跌破VWAP，兩者5分鐘內發生；主力淨額率 ≤ -40%、量比 ≥ 3×',
};
function signalEventRowHtml(ev){
  const labelCls = ev.isBuy != null
    ? (ev.isBuy ? ' sig-bull' : ' sig-bear')
    : (/[買多]/.test(ev.label) ? ' sig-bull' : /[賣空]/.test(ev.label) ? ' sig-bear' : '');
  const group = lookupStockGroup(ev.code);
  const quote = getStockQuote(ev.code);
  const priceCols = quote ? stockValueColsHtml(quote.price, quote.price - quote.price / (1 + quote.changePercent / 100), quote.changePercent) : '';
  const labelTitle = LARGE_ORDER_TOOLTIPS[ev.label] || '';
  return '<div class="signal-row" data-code="' + ev.code + '" data-name="' + ev.name + '">' +
    '<span class="sig-time">' + ev.time + '</span>' +
    '<span class="sig-code">' + ev.code + '</span>' +
    '<span class="sig-name">' + ev.name + '</span>' +
    (group ? '<span class="sig-group">' + group + '</span>' : '') +
    '<span class="sig-label' + labelCls + '"' + (labelTitle ? ' title="' + labelTitle + '"' : '') + '>' + ev.label + '</span>' +
    priceCols +
    signalNoteHtml(ev.code, ev.note) +
  '</div>';
}
function signalRowsHtml(events){
  if (!events.length){
    return '<div class="signal-empty"><div class="se-title">目前沒有符合條件的訊號' + (signalDataIsReal ? '' : '（示範資料）') + '</div>' +
      '<div class="se-sub">' + (signalDataIsReal ? '全市場掃描中，符合條件才會出現。' : '後端暫時連不上，先用示範資料展示介面。') + '</div></div>';
  }
  return '<div class="signal-list">' + events.map(signalEventRowHtml).join('') + '</div>';
}

function holderStrengthLabelHtml(r){
  // strengthPct/holderLabel 是官方大戶力公式（大單淨額÷累計成交額×100%）；
  // total_amount資料剛接上，尚未累積的舊bar會是null，不是0%。
  if (r.strengthPct == null) {
    return '<span class="sig-label hf-tier" title="累計成交額尚未達最低門檻(1億元)，資料還在累積中">大戶力資料累積中</span>';
  }
  const pctText = (r.strengthPct > 0 ? '+' : '') + r.strengthPct.toFixed(1) + '%';
  if (r.holderLabel){
    const cls = r.holderLabel.indexOf('買') >= 0 ? 'sig-bull' : 'sig-bear';
    const tierTitle = r.holderLabel === '盤中大戶強力買進' ? '大戶力 ≥ +28%'
      : r.holderLabel === '盤中大戶偏買' ? '大戶力介於 +12%（含）~ +28%'
      : r.holderLabel === '盤中大戶強力賣出' ? '大戶力 ≤ -28%'
      : r.holderLabel === '盤中大戶偏賣' ? '大戶力介於 -28% ~ -12%（含）'
      : '';
    return '<span class="sig-label hf-tier ' + cls + '" title="' + tierTitle + '">' + r.holderLabel + ' ' + pctText + '</span>';
  }
  return '<span class="sig-label hf-tier" title="已符合大戶力資格門檻(累計成交額≥1億、淨額絕對值≥3,000萬)，但百分比未達正式訊號門檻±12%">大戶力 ' + pctText + '</span>';
}
// 全族群個股旗標（可融資／可融券／可現股當沖／有股期／處置股）：後端一次回全部，幾分鐘抓一次，
// 訊號中心每一列、大戶力排行都用同一份標。
let stockFlags = {};
async function refreshStockFlags(){
  try {
    const res = await fetch('/api/stock-flags');
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.stocks && typeof data.stocks === 'object'){
      stockFlags = data.stocks;
      if (!document.getElementById('signalModal').hidden) renderSignalCenter();
      if (!document.getElementById('chartModal').hidden) renderChartFlags(currentChart.code);
    }
  } catch (e) { /* 抓不到就先不標，下一輪再試 */ }
}
function renderChartFlags(code){
  // K 線圖標題列下方：這檔的可交易條件與處置狀態（資料同訊號中心的全族群旗標）。
  const el = document.getElementById('cmFlags');
  if (!el) return;
  const f = code ? stockFlags[code] : null;
  if (!f){ el.innerHTML = ''; el.hidden = true; return; }
  const yesNo = (value, yes, no) => value == null ? '' : '<span class="flag-pill' + (value ? '' : ' off') + '">' + (value ? yes : no) + '</span>';
  const pills = [
    yesNo(f.marginable, '可融資', '不可融資'),
    yesNo(f.shortable, '可融券', '不可融券'),
    yesNo(f.dayTradeEligible, '可現股當沖', '不可現股當沖'),
    '<span class="flag-pill' + (f.hasStockFutures ? ' futures' : ' off') + '">' + (f.hasStockFutures ? '有股期' : '無股期') + '</span>',
    f.disposition
      ? '<span class="flag-pill disposition" title="' + (f.dispositionReason || '處置股') + '">處置股' + (f.dispositionUntil ? '（至 ' + f.dispositionUntil + '）' : '') + '</span>'
      : '<span class="flag-pill off">非處置</span>',
  ].filter(Boolean);
  el.innerHTML = pills.join('');
  el.hidden = false;
}
function flagPillsHtml(code, opts){
  const f = stockFlags[code];
  if (!f) return '';
  const pills = [];
  if (!(opts && opts.dispositionOnly)){
    if (f.marginable) pills.push('<span>可融資</span>');
    if (f.shortable) pills.push('<span>可融券</span>');
    if (f.dayTradeEligible) pills.push('<span>可現股當沖</span>');
    if (f.hasStockFutures) pills.push('<span class="sig-futures">有股期</span>');
  }
  if (f.disposition){
    const title = '處置股' + (f.dispositionUntil ? '，處置至 ' + f.dispositionUntil : '') + (f.dispositionReason ? '：' + f.dispositionReason : '');
    // 訊號列直接寫出處置到幾號（月/日），不用滑鼠移上去才看得到
    const until = f.dispositionUntil ? ' 至' + String(f.dispositionUntil).slice(5).replace('-', '/') : '';
    pills.push('<span class="pill-disposition" title="' + title + '">處置股' + until + '</span>');
  }
  return pills.length ? '<span class="sig-eligibility">' + pills.join('') + '</span>' : '';
}
const NOTE_RANK_RE = /^族群同步\\s*(\\S+)\\s*(漲幅|跌幅)第\\s*(\\d+)\\s*名$/;
const NOTE_ELIGIBILITY_RE = /^(可融資|可融券|可現股當沖|有股期)(\\s+(可融資|可融券|可現股當沖|有股期))*$/;
function signalNoteHtml(code, note){
  // 後端註記是純文字、用「｜」分段：族群名次那段做成小標籤（漲幅前10紅底白字、跌幅前10綠底白字），
  // 融資券那段改由全市場旗標統一標（後端沒登入時註記裡可能沒有），其餘照原樣顯示。
  const parts = String(note || '').split(/｜|\\s\\|\\s/).map((s) => s.trim()).filter(Boolean);
  const hasFlags = !!stockFlags[code];
  const out = [];
  for (const part of parts){
    const m = NOTE_RANK_RE.exec(part);
    if (m){
      const rank = Number(m[3]);
      const cls = rank <= 10 ? (m[2] === '漲幅' ? ' top-up' : ' top-down') : '';
      out.push('<span class="rank-pill' + cls + '">' + m[1] + '・' + m[2] + '第 ' + rank + ' 名</span>');
      continue;
    }
    if (hasFlags && NOTE_ELIGIBILITY_RE.test(part)) continue;
    out.push(part);
  }
  const pills = flagPillsHtml(code);
  if (!out.length && !pills) return '';
  return '<span class="sig-note">' + out.join('｜') + (pills ? ' ' + pills : '') + '</span>';
}
function tradingEligibilityTagsHtml(r){
  // 融資/融券/可現股當沖/有股期抓不到(Shioaji未登入等)時後端回null，
  // 這裡就不顯示那個標籤，不是顯示「否」——避免看起來像確定不可以，
  // 其實只是還沒查到。
  const tags = [];
  if (r.marginable) tags.push('可融資');
  if (r.shortable) tags.push('可融券');
  if (r.dayTradeEligible) tags.push('可現股當沖');
  if (r.hasStockFutures) tags.push('<span class="sig-futures">有股期</span>');
  if (!tags.length) return '';
  return '<span class="sig-eligibility">' + tags.map((t) => t.startsWith('<span') ? t : '<span>' + t + '</span>').join('') + '</span>';
}
function rankingRowHtml(r, view){
  const past = !!(view && view.isPast);
  const backendName = r.name && r.name !== r.code ? r.name : null;
  const name = backendName || lookupStockName(r.code);
  const timeLabel = r.lastTs ? new Date(r.lastTs).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--';
  const group = lookupStockGroup(r.code);
  // 看昨天／前天時，成交價／漲跌用那一天的日K收盤值，不是首頁現在的即時報價。
  const quote = past ? holderPastQuote(r.code, view.date) : getStockQuote(r.code);
  const changeAmt = quote ? (Number.isFinite(quote.changeAmt) ? quote.changeAmt : quote.price - quote.price / (1 + quote.changePercent / 100)) : 0;
  const priceCols = quote ? stockValueColsHtml(quote.price, changeAmt, quote.changePercent) : '';
  return '<div class="signal-row" data-code="' + r.code + '" data-name="' + name + '">' +
      '<span class="sig-time">' + timeLabel + '</span>' +
      '<span class="sig-code">' + r.code + '</span>' +
      '<span class="sig-name">' + name + '</span>' +
      '<span class="sig-group">' + group + '</span>' +
      holderStrengthLabelHtml(r) +
      tradingEligibilityTagsHtml(r) +
      (past ? '' : flagPillsHtml(r.code, { dispositionOnly: true })) +
      priceCols +
    '</div>';
}
// 欄位標題（2026-09-24 使用者：漲跌幅／漲跌／成交價沒有標題，大戶力買賣標籤也要對齊）：
// 跟資料列共用.signal-row同一套固定欄寬規則，標題才會真的跟下面資料對齊。
function rankingColLabelsHtml(){
  return '<div class="signal-row signal-col-labels"><span class="sig-time"></span><span class="sig-code"></span>' +
    '<span class="sig-name"><b>名稱</b></span><span class="sig-group"><b>族群</b></span>' +
    '<span class="sig-label hf-tier"><b>大戶力</b></span>' +
    '<span class="srow-right"><span class="spct"><b>漲跌幅</b></span><span class="schg"><b>漲跌</b></span><span class="sprice"><b>成交價</b></span></span></div>';
}
function rankingRowsHtml(rows, view){
  const past = !!(view && view.isPast);
  if (!rows.length){
    return '<div class="signal-empty"><div class="se-title">目前沒有符合條件的排行資料</div>' +
      '<div class="se-sub">' + (past ? '那一天沒有主力資料，或沒有達門檻的個股。' : signalDataIsReal ? '今日主力資料尚未累積或尚無達門檻個股。' : '後端暫時連不上，稍後再試。') + '</div></div>';
  }
  return rankingColLabelsHtml() + '<div class="signal-list">' + rows.map((r) => rankingRowHtml(r, view)).join('') + '</div>';
}
function nowTabRowsHtml(events, rankingRows){
  if (!events.length && !rankingRows.length) return signalRowsHtml([]);
  // 使用者要求：全部訊號依實際發生時間新到舊排序，不要再分事件/排行
  // 兩段各自呈現。rankingRows的時間(lastTs)是那檔股票主力副圖最後一根
  // bar的時間，個股之間本來就不一樣，不是統一的「現在」，可以跟事件
  // 訊號的barTs放在同一個時間軸上比較、排序。
  const merged = [
    ...events.map((ev) => ({ sortTs: ev.ts || 0, html: signalEventRowHtml(ev) })),
    ...rankingRows.map((r) => ({ sortTs: r.lastTs || 0, html: rankingRowHtml(r) })),
  ];
  merged.sort((a, b) => b.sortTs - a.sortTs);
  return '<div class="signal-list">' + merged.map((m) => m.html).join('') + '</div>';
}

// 每5秒的自動更新不要把訊號列表整個砍掉重畫：歷史查詢原本先變成「讀取中…」再填回去，
// 內容一縮短，捲動位置就被夾回最上面——往上看早盤資料會一直跳回 14:30 那幾筆，而且
// 最上面幾筆每5秒閃一次。改成：內容沒變就完全不動 DOM；有變才換，而且把捲動位置固定
// 在原本看的那幾筆上（新訊號插在最上面時不會把畫面往下推）。
let signalBodyRendered = { key: null, html: null };
let signalTabsRenderedHtml = null;
let signalHistoryFetchedAt = 0;
function signalScroller(){
  const body = document.getElementById('signalBody');
  if (body && body.scrollHeight > body.clientHeight && /auto|scroll/.test(getComputedStyle(body).overflowY)) return body;
  return document.getElementById('signalModalInner') || body;
}
function replaceSignalHtml(el, key, html){
  if (!el) return;
  if (signalBodyRendered.key === key && signalBodyRendered.html === html) return;
  const scroller = signalScroller();
  const sameView = signalBodyRendered.key === key;
  const prevTop = scroller ? scroller.scrollTop : 0;
  const prevHeight = scroller ? scroller.scrollHeight : 0;
  el.innerHTML = html;
  if (scroller){
    if (sameView && prevTop > 0) scroller.scrollTop = prevTop + (scroller.scrollHeight - prevHeight);
    else if (!sameView) scroller.scrollTop = 0;
  }
  signalBodyRendered = { key: key, html: html };
}

// ---- 盤中打 333：33 賽馬多／34 河流多／188 做多族群／199 做空族群 ----
// 觀念：188 做多＝昨天跌最多的族群（今天可以買）、199 做空＝昨天漲最多的族群（今天可以空）；
// 強弱是「絕對」的比較（使用者 2026-09-23 訂正）：比昨天強＝現價高於昨收（今天漲跌幅 > 0）；比前天強＝
// 現價高於前天收盤（(1+今天%)(1+昨天%) > 1）。弱就反過來。不是今天漲幅跟昨天漲幅相減。
// 族群：🔪（刀）＝今天平均低於昨收（平均漲跌幅 < 0）、⚔️（劍）＝平均低於前天收盤（兩個各自看，都成立就都顯示）。
// 30 馬火多：🐎＝現價高於昨收、🚀＝現價高於前天收盤（數字＝高出前天收盤幾 %）；👑＝該族群今天第 1 名。
//   門檻（2026-09-23 使用者：名單太長看不完、漲停也買不到）：今天漲 FIRE_MIN_PCT%～FIRE_MAX_PCT%、不含漲停
//   鎖死、族群排名前 1/3、成交量 ≥ FIRE_MIN_VOLUME 張、最多 FIRE_MAX_ROWS 檔；漲停／接近漲停的另列一行。
// 32 刀劍空：馬火多的鏡像。今天下跌、不比櫃買強、族內後 1/3；🔪（刀）＝現價低於昨收、⚔️（劍）＝現價低於前天收盤（數字＝低幾 %），
//   都沒有就 〰️。門檻跟馬火多對稱（2026-09-23 使用者：名單太長）：今天跌 BLADE_MIN_PCT%～BLADE_MAX_PCT%、不含跌停
//   鎖死、族內後 1/3、成交量 ≥ BLADE_MIN_VOLUME 張、而且要 ⚔️（現價低於前天收盤，兩天都弱才算）。
//   正式名單＝強空積極（族群排名後半，方向一致），最多 BLADE_MAX_ROWS 檔、跌幅深的在前；多方打少（族群排名前半，
//   強族群裡逆勢走弱，空得保守）和收割區域（已經跌 BLADE_HARVEST_PCT% 以上，不追空）只用一行列名字。
// 族群昨天／前天的平均漲跌幅來自後端日K（/api/group-daily-changes），其餘都是首頁已經有的即時資料。
let otcStrengthLatest = null;
let groupDailyChanges = null;
let groupDailyFetchedAt = 0;
async function refreshGroupDailyChanges(force){
  if (!force && Date.now() - groupDailyFetchedAt < 600000) return;
  groupDailyFetchedAt = Date.now();
  try {
    const res = await fetch('/api/group-daily-changes');
    if (!res.ok) throw new Error('group-daily-changes http ' + res.status);
    const data = await res.json();
    if (data && data.status === 'ok' && data.groups) groupDailyChanges = data;
  } catch (e) { /* 抓不到就沿用上一次的 */ }
}
const RACE_NUM = ['', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
const BLADE_HARVEST_PCT = 5;  // 刀劍空：跌到這裡以上就算收割區
const BLADE_MIN_PCT = 2;      // 刀劍空：今天至少跌這麼多才算弱
const BLADE_MAX_PCT = 9.5;    // 刀劍空：跌到這裡以上（或跌停鎖死）放不到空，只在收割區那行列
const BLADE_MIN_VOLUME = 500; // 刀劍空：成交量（張）低於這個太冷門
const BLADE_MAX_ROWS = 10;    // 刀劍空：正式名單最多列這麼多檔
const FIRE_MIN_PCT = 2;       // 馬火多：今天至少漲這麼多才算有力道
const FIRE_MAX_PCT = 9.5;     // 馬火多：漲到這裡以上（或已漲停鎖死）買不到，另列
const FIRE_MIN_VOLUME = 500;  // 馬火多：成交量（張）低於這個太冷門
const FIRE_MAX_ROWS = 10;     // 馬火多：最多列這麼多檔
function race333Model(){
  if (!lastData || !Array.isArray(lastData.groups) || !lastData.groups.length) return null;
  const groups = lastData.groups.filter((g) => g.name !== '股期標的');
  const total = groups.length;
  const half = Math.ceil(total / 2);
  const ranked = groups.slice().sort((a, b) => b.avgChange - a.avgChange);
  const rankOf = new Map(ranked.map((g, i) => [g.name, i + 1]));
  const daily = groupDailyChanges && groupDailyChanges.groups ? groupDailyChanges.groups : {};
  const otcPct = otcStrengthLatest && Number.isFinite(otcStrengthLatest.changePct) ? otcStrengthLatest.changePct : null;
  const stockDaily = groupDailyChanges && groupDailyChanges.stocks ? groupDailyChanges.stocks : {};
  const holderByCode = new Map((mainForceRanking || []).map((r) => [r.code, r]));
  const info = ranked.map((g) => {
    const d = daily[g.name] || {};
    const pct = Array.isArray(d.pct) ? d.pct : [];
    const yesterday = Number.isFinite(pct[0]) ? pct[0] : null;
    const dayBefore = Number.isFinite(pct[1]) ? pct[1] : null;
    const prevRank = Array.isArray(d.rank) && Number.isFinite(d.rank[0]) ? d.rank[0] : null;
    const valid = g.stocks.filter((s) => s.price !== null && s.price !== undefined);
    const down = valid.filter((s) => s.changePercent < 0).length;
    // 對前天收盤：每檔 (1+今天%)(1+昨天%)−1，取族內有昨天日K的平均
    const twoDays = valid.map((s) => {
      const sd = stockDaily[s.code] && Array.isArray(stockDaily[s.code].pct) ? stockDaily[s.code].pct : [];
      return Number.isFinite(sd[0]) ? ((1 + s.changePercent / 100) * (1 + sd[0] / 100) - 1) * 100 : null;
    }).filter((v) => v !== null);
    const twoDayAvg = twoDays.length ? twoDays.reduce((a, b) => a + b, 0) / twoDays.length : null;
    const weakerThanYesterday = g.avgChange < 0;                          // 🔪 刀：平均低於昨收
    const weakerThanDayBefore = twoDayAvg !== null && twoDayAvg < 0;      // ⚔️ 劍：平均低於前天收盤
    return {
      name: g.name, avgChange: g.avgChange, rank: rankOf.get(g.name), prevRank, yesterday, dayBefore, twoDayAvg,
      weakerThanYesterday, weakerThanDayBefore, downRatio: valid.length ? down / valid.length : null,
    };
  });
  const withDaily = info.filter((g) => g.yesterday !== null);
  const third = Math.max(1, Math.ceil(withDaily.length / 3));
  const longGroups = withDaily.filter((g) => g.yesterday < 0).sort((a, b) => a.yesterday - b.yesterday).slice(0, third);   // 昨天跌最多
  const shortGroups = withDaily.filter((g) => g.yesterday > 0).sort((a, b) => b.yesterday - a.yesterday).slice(0, third);  // 昨天漲最多
  const listed = new Set([...longGroups, ...shortGroups].map((g) => g.name));
  const hasDaily = withDaily.length > 0;
  const stockRows = new Map(); // 同一檔在好幾個族群時，用族群名次最好的那個
  groups.forEach((g) => {
    const valid = g.stocks.filter((s) => s.price !== null && s.price !== undefined).slice().sort((a, b) => b.changePercent - a.changePercent);
    const cut = Math.ceil(valid.length / 3);
    valid.forEach((s, i) => {
      const sd = stockDaily[s.code] && Array.isArray(stockDaily[s.code].pct) ? stockDaily[s.code].pct : [];
      const y = Number.isFinite(sd[0]) ? sd[0] : null, y2 = Number.isFinite(sd[1]) ? sd[1] : null;
      const twoDay = y !== null ? ((1 + s.changePercent / 100) * (1 + y / 100) - 1) * 100 : null;
      const holderRow = holderByCode.get(s.code);
      const row = {
        code: s.code, name: s.name, pct: s.changePercent, groupName: g.name, groupRank: rankOf.get(g.name), inGroupRank: i + 1, inTopThird: i < cut,
        inBottomThird: i >= valid.length - cut, dailyKnown: y !== null || y2 !== null, yesterday: y, dayBefore: y2,
        limitUp: !!s.limitUp, limitDown: !!s.limitDown, volume: Number.isFinite(s.volume) ? s.volume : null,
        price: s.price,
        strengthPct: holderRow ? holderRow.strengthPct : null, netAmount: holderRow ? holderRow.netAmount : null, holderLabel: holderRow ? holderRow.holderLabel : null,
        twoDay,                                                   // 現價對前天收盤的 %
        horse: s.changePercent > 0,                               // 🐎 現價高於昨收
        rocket: twoDay !== null && twoDay > 0 ? twoDay : null,    // 🚀 現價高於前天收盤，數字＝高出幾 %
        belowYesterday: s.changePercent < 0,                            // 🔪 刀：現價低於昨收
        belowDayBefore: twoDay !== null && twoDay < 0 ? -twoDay : null, // ⚔️ 劍：現價低於前天收盤，數字＝低幾 %
      };
      const prev = stockRows.get(s.code);
      if (!prev || row.groupRank < prev.groupRank) stockRows.set(s.code, row);
    });
  });
  const rows = Array.from(stockRows.values());
  const inLists = (r) => !hasDaily || listed.has(r.groupName);  // 還沒拿到昨天的資料時先不拿這條擋
  const aboveOtc = (r) => otcPct === null || r.pct >= otcPct;
  const horseLimit = Math.max(1, Math.round(total * 20 / 67));  // 原本 67 個族群取前 20（約三成），43 個就是前 13
  const riverLimit = half;                                       // 前 1/2
  const horses = rows.filter((r) => r.groupRank <= horseLimit && r.inTopThird && aboveOtc(r) && inLists(r)).sort((a, b) => b.pct - a.pct);
  const riverAll = rows.filter((r) => r.groupRank <= riverLimit && r.inTopThird && r.pct >= 0 && aboveOtc(r) && inLists(r)).sort((a, b) => b.pct - a.pct);
  // 30 馬火多：族群排名前 1/3、族內前 1/3、比昨天或比前天強、今天漲 FIRE_MIN_PCT% 以上（≥ 櫃買%）、
  // 成交量夠；漲停鎖死或漲到 FIRE_MAX_PCT% 以上的買不到，另列；最多 FIRE_MAX_ROWS 檔，漲幅高的在前。
  const fireGroupTop = Math.max(1, Math.ceil(total / 3));
  const fireBase = rows.filter((r) => r.pct >= FIRE_MIN_PCT && aboveOtc(r) && r.inTopThird && r.groupRank <= fireGroupTop
    && (r.horse || r.rocket !== null) && (r.volume === null || r.volume >= FIRE_MIN_VOLUME)).sort((a, b) => b.pct - a.pct);
  const fireLocked = fireBase.filter((r) => r.limitUp || r.pct >= FIRE_MAX_PCT);
  const fireOpen = fireBase.filter((r) => !(r.limitUp || r.pct >= FIRE_MAX_PCT));  // 符合馬火多全部門檻、買得到的（不限檔數）
  const fires = fireOpen.slice(0, FIRE_MAX_ROWS);
  // 32 刀劍空：今天跌 BLADE_MIN_PCT% 以上（且 ≤ 櫃買%）、族內後 1/3、成交量夠、現價低於前天收盤（⚔️）；
  // 跌停鎖死或跌到 BLADE_MAX_PCT% 以上放不到空，跟已跌 BLADE_HARVEST_PCT% 以上的一起放收割區那一行。
  const belowOtc = (r) => otcPct === null || r.pct <= otcPct;
  const bladeBase = rows.filter((r) => r.pct <= -BLADE_MIN_PCT && belowOtc(r) && r.inBottomThird
    && (r.volume === null || r.volume >= BLADE_MIN_VOLUME)).sort((a, b) => a.pct - b.pct || a.groupRank - b.groupRank);
  const bladeHarvest = bladeBase.filter((r) => r.pct <= -BLADE_HARVEST_PCT || r.pct <= -BLADE_MAX_PCT || r.limitDown);
  const bladeLive = bladeBase.filter((r) => !bladeHarvest.includes(r) && r.belowDayBefore !== null);
  const bladeUpper = bladeLive.filter((r) => r.groupRank <= half);                       // 多方打少：只列名字
  const bladeLower = bladeLive.filter((r) => r.groupRank > half).slice(0, BLADE_MAX_ROWS);  // 強空積極：正式名單
  // 33 加 34：兩邊都有的才列（使用者 2026-09-23：只看交集）。
  const riverCodes = new Set(riverAll.filter((r) => r.pct <= 7).map((r) => r.code));
  const both = horses.filter((r) => riverCodes.has(r.code));
  // 30 加 33 加 34：三邊都有的才列（使用者 2026-09-23）。馬火多這邊用「符合全部門檻」的，不受最多 10 檔限制。
  const fireCodes = new Set(fireOpen.map((r) => r.code));
  const triple = both.filter((r) => fireCodes.has(r.code)).sort((a, b) => b.pct - a.pct);
  return {
    fires, fireLocked, fireGroupTop, bladeUpper, bladeLower, bladeHarvest, both, triple,
    total, half, otcPct, otcLabel: otcStrengthLatest ? otcStrengthLatest.label : null, hasDaily,
    dates: groupDailyChanges && groupDailyChanges.dates ? groupDailyChanges.dates : [],
    horseLimit, riverLimit, horses,
    rivers: riverAll.filter((r) => r.pct <= 7), riverOver: riverAll.filter((r) => r.pct > 7),
    longGroups: longGroups.slice().sort((a, b) => a.rank - b.rank),
    shortGroups: shortGroups.slice().sort((a, b) => a.rank - b.rank),
  };
}
function bladeBadge(r){
  const marks = (r.belowYesterday ? '🔪' : '') + (r.belowDayBefore !== null ? '⚔️' + r.belowDayBefore.toFixed(1) : '');
  return marks || (r.dailyKnown ? '〰️' : '');  // 有昨天資料但沒更弱＝〰️；沒資料就空白
}
// 盤中333 每個名單最上面的欄位標籤：跟每一列右邊那幾個固定寬的格子一一對齊（外層格子不設字級，
// flex 的 em 才會跟資料列用同一個字級算）。
// 最後那一格的符號依名單不同：馬火多系列 🚀 後面的數字＝現價高於前天收盤幾 %（🐎＝高於昨收）；
// 刀劍空 ⚔️（劍）後面的數字＝現價低於前天收盤幾 %（🔪 刀＝低於昨收）；其他名單是名次（👑＝第 1）。
function raceColLabelsHtml(opts){
  const badgeLabel = opts && opts.fire ? '🚀高於前天收盤%' : opts && opts.blade ? '⚔️低於前天收盤%' : '名次';
  // 使用者 2026-09-24：欄位標題要加「代號」「名稱」；數字那一群（大戶力／漲跌幅／漲跌／成交價／符號）
  // 包一層.race-line2，跟資料列一致——手機版塞不下時這一群整個換到下一行，不會被切在畫面外。
  // 族群標籤欄也留一個對應的標題格子，資料列的族群標籤才會跟標題對齊（2026-09-24 使用者）。
  // 族群後面加「均線分數」（2026-09-24 使用者：族群跟盤中大戶力中間那塊空白放均線分數，15 分那個比法）。
  return '<div class="race-col-labels r333-labels">' + (opts && opts.blade ? '<span class="race-rank-slot"><b>族排</b></span>' : '') + '<span class="race-code"><b>代號</b></span><span class="race-name"><b>名稱</b></span><span class="race-group-label"><b>族群</b></span>' +
    '<span class="race-ma-score"><b>均線分數</b></span>' +
    '<span class="race-line2"><span class="race-holder"><b>盤中大戶力</b></span><span><b>漲跌幅</b></span><span><b>漲跌</b></span><span><b>成交價</b></span><span class="race-badge-slot"><b>' + badgeLabel + '</b></span></span></div>';
}
function raceHolderCellHtml(r){
  if (r.strengthPct === null || r.strengthPct === undefined) return '<span class="race-holder-none" title="大戶力資料還在累積中或不在追蹤範圍">—</span>';
  const amt = fmtAmountWan(r.netAmount);
  // %跟金額改上下兩行（2026-09-24 使用者：不要前後放、金額放下面），各自靠右對齊，萬／億長度不一也整齊。
  return '<span class="sig-label ' + (r.strengthPct > 0 ? 'sig-bull' : 'sig-bear') + '" title="' + (r.holderLabel || '大戶力（大單淨額÷累計成交額）') + '">' +
    '<span class="hf-pct">' + (r.strengthPct > 0 ? '+' : '') + r.strengthPct.toFixed(1) + '%</span>' +
    (amt ? '<span class="hf-amt">' + amt + '</span>' : '') + '</span>';
}
function limitPriceHtml(r, text){
  if (r.limitUp) return '<span class="limit-pill limit-up" title="漲停">' + text + '</span>';
  if (r.limitDown) return '<span class="limit-pill limit-down" title="跌停">' + text + '</span>';
  return text;
}
function raceStockRowHtml(r, idx, opts){
  const badge = opts && opts.fire
    ? (r.inGroupRank === 1 ? '👑' : '') + (r.horse ? '🐎' : '') + (r.rocket !== null ? '🚀' + r.rocket.toFixed(1) : '')
    : opts && opts.blade ? bladeBadge(r)
    : idx === 0 ? '👑' : idx <= 10 ? RACE_NUM[idx] : '';
  const rank = opts && opts.blade ? '<span class="race-rank" title="族群第 ' + r.groupRank + ' 名">' + r.groupRank + (opts.zone || '') + '</span>' : '';
  const dates = (opts && opts.dates) || [];
  const dailyTitle = '現價對昨收 ' + fmt(r.pct) + '%'
    + (r.twoDay !== null && r.twoDay !== undefined ? '，對前天收盤 ' + fmt(r.twoDay) + '%' : '，對前天收盤：沒有昨天的日K')
    + (r.yesterday !== null && r.yesterday !== undefined ? '，昨天' + (dates[0] ? '(' + dates[0].slice(5) + ')' : '') + ' ' + fmt(r.yesterday) + '%' : '')
    + (r.dayBefore !== null && r.dayBefore !== undefined ? '，前天' + (dates[1] ? '(' + dates[1].slice(5) + ')' : '') + ' ' + fmt(r.dayBefore) + '%' : '');
  const star = stockFlags[r.code] && stockFlags[r.code].disposition ? '*' : '';
  const cls = dirClass(r.pct);
  const price = Number(r.price);
  const hasPrice = Number.isFinite(price);
  const chg = hasPrice ? price - price / (1 + r.pct / 100) : 0;
  return '<div class="race-row stock-row r333-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' + rank +
    '<span class="race-code">' + r.code + '</span><span class="race-name">' + r.name + star + '</span>' +
    '<span class="sig-group" title="族群第 ' + r.groupRank + ' 名，族內第 ' + r.inGroupRank + ' 名">' + r.groupName + '</span>' +
    '<span class="race-ma-score">' + maScoreCellHtml(r.code, hasPrice ? price : null) + '</span>' +
    '<span class="race-line2">' +
    '<span class="race-holder">' + raceHolderCellHtml(r) + '</span>' +
    '<span class="race-pct ' + cls + '">' + fmt(r.pct) + '%</span>' +
    '<span class="race-chg ' + cls + '">' + (hasPrice ? (chg > 0 ? '+' : '') + chg.toFixed(2) : '—') + '</span>' +
    '<span class="race-price ' + cls + '">' + (hasPrice ? limitPriceHtml(r, price.toFixed(2)) : '—') + '</span>' +
    '<span class="race-badge" title="' + dailyTitle + '">' + badge + '</span>' +
    '</span></div>';
}
function raceGroupRowHtml(g){
  const diff = g.prevRank !== null ? g.prevRank - g.rank : null;
  const move = diff === null ? '' : diff > 0 ? '🔺' + diff : diff < 0 ? '🔽' + (-diff) : '0';
  const marks = (g.weakerThanYesterday ? '🔪' : '') + (g.weakerThanDayBefore ? '⚔️' : '');
  const ratio = (g.weakerThanYesterday || g.weakerThanDayBefore) && g.downRatio !== null ? (g.downRatio >= 0.999 ? 'all' : g.downRatio.toFixed(1)) : '';
  const title = '今天平均 ' + fmt(g.avgChange) + '%（對昨收）' + (g.twoDayAvg !== null ? '，對前天收盤 ' + fmt(g.twoDayAvg) + '%' : '') + (g.yesterday !== null ? '，昨天 ' + fmt(g.yesterday) + '%' : '') + (g.dayBefore !== null ? '，前天 ' + fmt(g.dayBefore) + '%' : '');
  return '<div class="race-group" data-group="' + g.name + '" title="' + title + '"><span class="race-gname">' + g.name + '-(' + g.rank + ')</span>' +
    '<span>' + move + '</span><span>' + marks + (ratio ? ' ' + ratio : '') + '</span><span class="race-gpct">' + fmt(g.avgChange) + '%</span></div>';
}
function raceGroupListHtml(list, half, sepLabel){
  if (!list.length) return '<div class="race-note">沒有符合的族群</div>';
  const upper = list.filter((g) => g.rank <= half), lower = list.filter((g) => g.rank > half);
  let html = upper.map(raceGroupRowHtml).join('');
  if (upper.length && lower.length) html += '<div class="race-sep">' + sepLabel + '</div>';
  else if (!upper.length) html += '<div class="race-sep">' + sepLabel + '</div>';
  html += lower.map(raceGroupRowHtml).join('');
  return html;
}
function raceOtcBoxHtml(m){
  // 櫃買指數狀況只在最上面放一次（使用者 2026-09-23），不再每個區塊下面重複。
  if (!m.otcLabel) return '<div class="race-otc">櫃買指數狀況：資料尚未就緒</div>';
  const icon = m.otcLabel === '強空' ? '⚔️⚔️' : m.otcLabel === '強多' ? '👑👑' : '〰️';
  const label = m.otcLabel === '個股震盪' ? '個股震盪盤' : m.otcLabel;
  const pct = m.otcPct === null ? '' : '(' + fmt(m.otcPct) + '%)';
  return '<div class="race-otc ' + (m.otcLabel === '強空' ? 'down' : m.otcLabel === '強多' ? 'up' : '') + '">櫃買指數狀況：' + label + icon + pct + '</div>';
}
function raceStockListHtml(list, opts){
  if (!list.length) return '<div class="race-note">目前沒有符合條件的股票</div>';
  let html = raceColLabelsHtml(opts);
  list.forEach((r, i) => {
    if (opts && opts.holdLineAt7 && i > 0 && list[i - 1].pct >= 7 && r.pct < 7) html += '<div class="race-sep">----↑(續抱不追)↑----</div>';
    html += raceStockRowHtml(r, i, opts);
  });
  return html;
}
function raceBladeListHtml(m){
  const names = (list) => list.map((r) => r.code + ' ' + r.name + ' ' + fmt(r.pct) + '%').join('、');
  const bladeLower = race333FilterList(m.bladeLower);
  const bladeUpper = race333FilterList(m.bladeUpper);
  const bladeHarvest = race333FilterList(m.bladeHarvest);
  return '<div class="race-sep">----↓(強空積極)↓----</div>' +
    (bladeLower.length ? raceColLabelsHtml({ blade: true }) + bladeLower.map((r, i) => raceStockRowHtml(r, i, { blade: true, zone: '🔰', dates: m.dates })).join('') : '<div class="race-note">目前沒有符合條件的股票</div>') +
    (bladeUpper.length ? '<div class="race-note">多方打少（強族群裡逆勢走弱，空得保守）' + bladeUpper.length + ' 檔：' + names(bladeUpper) + '</div>' : '') +
    (bladeHarvest.length ? '<div class="race-note">收割區域（已跌 ' + BLADE_HARVEST_PCT + '% 以上或跌停，不追空）' + bladeHarvest.length + ' 檔：' + names(bladeHarvest) + '</div>' : '');
}
// 盤中333 大戶力篩選（2026-09-24 使用者）：null=不篩選；'up'=只留大戶力≥10%的個股；'down'=只留
// 大戶力≤-10%的個股；只套用在馬火多/賽馬多/河流多/刀劍空這幾個「個股」名單（30/33/34/32），
// 「條件>7%」跟188/199是族群層級的名單、沒有個股大戶力可篩，維持原樣不變（使用者明確要求）。
let race333HolderFilter = null;
function race333FilterList(list){
  if (!race333HolderFilter) return list;
  return list.filter((r) => r.strengthPct !== null && r.strengthPct !== undefined &&
    (race333HolderFilter === 'up' ? r.strengthPct >= 10 : r.strengthPct <= -10));
}
function race333FilterBarHtml(){
  return '<div class="combo-filter-bar">' +
    '<button class="chart-tab race333-filter-btn' + (race333HolderFilter === 'up' ? ' active' : '') + '" data-filter="up">大戶力≥10%</button>' +
    '<button class="chart-tab race333-filter-btn' + (race333HolderFilter === 'down' ? ' active' : '') + '" data-filter="down">大戶力≤-10%</button>' +
  '</div>';
}
function race333Html(){
  const m = race333Model();
  if (!m) return '<div class="signal-empty"><div class="se-title">族群行情還沒載入</div><div class="se-sub">首頁資料抓到後就會出現。</div></div>';
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const over7 = m.horses.filter((r) => r.pct > 7).length;
  const dailyNote = m.hasDaily
    ? '昨天＝' + (m.dates[0] || '') + (m.dates[1] ? '，前天＝' + m.dates[1] : '')
    : '還沒拿到族群昨天的資料，188／199 暫時無法判定，33／34 先不用「族群要在 188／199 裡」這條';
  const triple = race333FilterList(m.triple);
  const both = race333FilterList(m.both);
  const fires = race333FilterList(m.fires);
  const fireLocked = race333FilterList(m.fireLocked);
  return race333FilterBarHtml() + raceOtcBoxHtml(m) +
    '<div class="race-block"><div class="race-head">👑🐎🚀馬火多加賽馬多加河流多（30 加 33 加 34） ' + stamp + '</div>' +
      '<div class="race-sub">三邊都有的才列：同時符合 33 加 34 的族群條件（族群前 ' + m.horseLimit + '、族群在 188／199 裡、漲 0～7%）和馬火多的個股門檻（漲 ' + FIRE_MIN_PCT + '% 以上、成交量 ≥ ' + FIRE_MIN_VOLUME + ' 張、沒漲停、🐎🚀）・漲幅高的在前</div>' +
      raceStockListHtml(triple, { fire: true, dates: m.dates }) + '</div>' +
    '<div class="race-block"><div class="race-head">👑🌊賽馬多加河流多（33 加 34） ' + stamp + '</div>' +
      '<div class="race-sub">賽馬多、河流多兩邊都有的才列：族群排名前 ' + m.horseLimit + '（共 ' + m.total + ' 個）・族內前 1/3・漲幅 0～7% 且 ≥ 櫃買%・族群在 188／199 裡</div>' +
      raceStockListHtml(both, { dates: m.dates }) + '</div>' +
    '<div class="race-block"><div class="race-head">🐎🚀馬火多(30) ' + stamp + '</div>' +
      '<div class="race-sub">今天漲 ' + FIRE_MIN_PCT + '%～' + FIRE_MAX_PCT + '%（且 ≥ 櫃買%）・不含漲停鎖死・族群排名前 ' + m.fireGroupTop + '・族內前 1/3・成交量 ≥ ' + FIRE_MIN_VOLUME + ' 張・🐎 現價高於昨收、🚀 現價高於前天收盤（數字＝高出前天收盤幾 %）・👑 該族群第 1 名・最多 ' + FIRE_MAX_ROWS + ' 檔，漲幅高的在前・' + dailyNote + '・滑鼠移到符號上看三天的數字</div>' +
      raceStockListHtml(fires, { fire: true, dates: m.dates }) +
      (fireLocked.length ? '<div class="race-note">漲停／接近漲停買不到，另列 ' + fireLocked.length + ' 檔：' + fireLocked.map((r) => r.code + ' ' + r.name + ' ' + fmt(r.pct) + '%').join('、') + '</div>' : '') +
      '</div>' +
    '<div class="race-block"><div class="race-head">🔪⚔️刀劍空(32) ' + stamp + '</div>' +
      '<div class="race-sub">今天跌 ' + BLADE_MIN_PCT + '%～' + BLADE_MAX_PCT + '%（且 ≤ 櫃買%）・不含跌停鎖死・族群排名後半（強空積極）・族內後 1/3・成交量 ≥ ' + BLADE_MIN_VOLUME + ' 張・要有 ⚔️ 劍（現價低於前天收盤，數字＝低幾 %；🔪 刀＝低於昨收）・最多 ' + BLADE_MAX_ROWS + ' 檔，跌幅深的在前・前面數字＝族群排名・多方打少（族群排名前半）和收割區只列名字・' + dailyNote + '・滑鼠移到符號上看三天的數字</div>' +
      raceBladeListHtml(m) + '</div>' +
    '<div class="race-block"><div class="race-head">⚠️符合條件>7%有 ' + over7 + ' 檔　做多族群(188) ' + stamp + '</div>' +
      '<div class="race-sub">「符合條件>7%」＝賽馬多裡漲超過 7% 的（續抱不追），列在下面；再下面是昨天跌最多的前 1/3 族群（今天可以買）・' + dailyNote + '</div>' +
      (over7 ? raceStockListHtml(m.horses.filter((r) => r.pct > 7), { dates: m.dates }) + '<div class="race-sep">------↑(續抱勿追高)↑------</div>' : '') +
      raceGroupListHtml(m.longGroups, m.half, '------↑(多方)↑------') + '</div>' +
    '<div class="race-block"><div class="race-head">⚔️⚔️做空族群(199) ' + stamp + '</div>' +
      '<div class="race-sub">昨天漲最多的前 1/3 族群（今天可以空）・🔪 刀＝族群平均低於昨收、⚔️ 劍＝平均低於前天收盤、數字＝族內下跌檔數比例</div>' +
      raceGroupListHtml(m.shortGroups, m.half, '------↓(空方)↓------') + '</div>';
}

// ---- 族群大戶力：漲幅前10大族群各取大戶力最強前5名、跌幅前10大族群各取大戶力最負前5名 ----
// 族群排名跟333一樣用今天平均漲跌幅(g.avgChange)；大戶力用主力累計排行(mainForceRanking)的
// strengthPct(官方大戶力%公式)，正的挑最大的前5名、負的挑最小(最負)的前5名，
// strengthPct為null(大戶力資料還在累積中)的不列入候選。
// 族群大戶力的篩選：null=照舊（漲幅前10族群取大戶力>0前5名、跌幅前10取<0前5名）；
// 'up'=只看漲幅那一段、且大戶力>=+10%；'down'=只看跌幅那一段、且大戶力<=-10%。再點一次取消。
let groupHolderForceFilter = null;
function groupHolderForceModel(view){
  // view 來自 holderView()：今天＝首頁即時行情＋目前排行；昨天／前天＝那一天的日K收盤＋那一天的最終排行。
  const sourceGroups = view && Array.isArray(view.groups) ? view.groups : null;
  if (!sourceGroups || !sourceGroups.length) return null;
  const groups = sourceGroups.filter((g) => g.name !== '股期標的');
  if (!groups.length) return null;
  const isPast = !!view.isPast;
  const dayWord = isPast ? view.date + ' ' : '今天';
  const ranked = groups.slice().sort((a, b) => b.avgChange - a.avgChange);
  const total = ranked.length;
  const rankOf = new Map(ranked.map((g, i) => [g.name, i + 1]));
  const holderByCode = new Map((view.ranking || []).map((r) => [r.code, r]));
  const cardFor = (g, mode) => {
    const valid = g.stocks.filter((s) => s.price !== null && s.price !== undefined);
    const rows = valid.map((s) => {
      const h = holderByCode.get(s.code);
      if (!h || h.strengthPct === null || h.strengthPct === undefined) return null;
      const minAbs = groupHolderForceFilter ? 10 : 0;
      if (mode === 'up' ? !(h.strengthPct > 0 && h.strengthPct >= minAbs) : !(h.strengthPct < 0 && h.strengthPct <= -minAbs)) return null;
      return Object.assign({}, h, {
        pct: s.changePercent, price: s.price, changeAmt: s.changeAmt, groupName: g.name, groupRank: rankOf.get(g.name),
        limitUp: !!s.limitUp, limitDown: !!s.limitDown, isPast,
      });
    }).filter(Boolean);
    rows.sort((a, b) => mode === 'up' ? b.strengthPct - a.strengthPct : a.strengthPct - b.strengthPct);
    return { name: g.name, rank: rankOf.get(g.name), groupCount: total, avgChange: g.avgChange, groupTotal: valid.length, qualified: rows.length, rows: rows.slice(0, 5), dayWord };
  };
  const risingGroups = ranked.slice(0, 10).map((g) => cardFor(g, 'up'));
  const fallingGroups = ranked.slice(Math.max(0, total - 10)).reverse().map((g) => cardFor(g, 'down'));
  return { risingGroups, fallingGroups, total };
}
function groupHolderForceWarnPillHtml(r){
  // 使用者2026-09-24：漲停/跌停改直接顯示在成交價那格的底色（紅底白字/綠底白字），不用另外
  // 佔一格；這裡只留處置股警示（跟漲跌停無關，是另一件事，還是要單獨標示）。
  const f = stockFlags[r.code];
  if (!f || !f.disposition) return '';
  const until = f.dispositionUntil ? ' 至' + String(f.dispositionUntil).slice(5).replace('-', '/') : '';
  const title = f.dispositionReason || '';
  return '<span class="pill-warn"' + (title ? ' title="' + title + '"' : '') + '>' + '處置股' + until + '</span>';
}
function groupHolderForceStockRowHtml(r, idx){
  const backendName = r.name && r.name !== r.code ? r.name : lookupStockName(r.code);
  const price = Number(r.price);
  const hasPrice = Number.isFinite(price);
  const chg = Number.isFinite(r.changeAmt) ? r.changeAmt : hasPrice ? price - price / (1 + r.pct / 100) : 0;
  // 欄位順序（2026-09-24 使用者）：代號、名稱、盤中大戶力、漲跌幅、漲跌、成交價，可融資／可融券／
  // 可現股當沖／有股期這些交易條件標籤移到最後面（原本夾在名稱跟大戶力中間）。
  return '<div class="race-row stock-row ghf-row" data-code="' + r.code + '" data-name="' + backendName + '" tabindex="0" role="button">' +
    '<span class="race-badge">' + (RACE_NUM[idx + 1] || String(idx + 1)) + '</span>' +
    '<span class="race-code">' + r.code + '</span><span class="race-name">' + backendName + '</span>' +
    '<span class="race-line2">' +
    // 大戶力這格跟盤中333一樣改用.race-holder固定寬＋raceHolderCellHtml的%在上、金額在下兩行疊放
    // （2026-09-24 使用者：手機版最左邊的數字被螢幕截到——這格原本沒有固定寬度，.race-line2在手機版
    // justify-content:flex-end，內容一旦比可用寬度寬，最前面（最左邊）的這格就會被推出畫面外）。
    '<span class="race-holder">' + raceHolderCellHtml(r) + '</span>' +
    '<span class="race-pct ' + dirClass(r.pct) + '">' + fmt(r.pct) + '%</span>' +
    '<span class="race-chg ' + dirClass(r.pct) + '">' + (hasPrice ? (chg > 0 ? '+' : '') + chg.toFixed(2) : '—') + '</span>' +
    '<span class="race-price ' + dirClass(r.pct) + '">' + (hasPrice ? limitPriceHtml(r, price.toFixed(2)) : '—') + '</span>' +
    '<span class="race-warn-slot">' + (r.isPast ? '' : groupHolderForceWarnPillHtml(r)) + '</span>' +
    '</span>' +
    tradingEligibilityTagsHtml(r) + (r.isPast ? '' : flagPillsHtml(r.code, { dispositionOnly: true })) +
    '</div>';
}
function groupHolderForceCardHtml(card, mode){
  const icon = mode === 'up' ? '📈' : '📉';
  // 使用者 2026-09-24：族排名次搬到最前面（白底紫紅字）；族群名稱、今天平均漲跌幅這兩塊各自變成
  // 紫底白字的獨立色塊（跟漲跌方向無關，統一紫色），不再用紅字/綠字區分漲跌族群。
  // 使用者 2026-09-24：大戶力≤-10%篩選時（只剩跌幅段）名次改從最弱倒數（族排最弱第1名＝全體最弱），
  // 比「族排第43名」直覺；≥10%篩選或沒篩選時維持原本從最強數的「族排第N名」。
  const rankLabel = groupHolderForceFilter === 'down' ? '族排最弱第 ' + (card.groupCount - card.rank + 1) + ' 名' : '族排第 ' + card.rank + ' 名';
  const namePill = '<span class="head-pill">' + card.name + '（' + card.groupTotal + ' 檔）</span>';
  const avgPill = '<span class="head-pill">' + (card.dayWord || '今天') + '平均 ' + fmt(card.avgChange) + '%</span>';
  return '<div class="race-block ghf-block"><div class="race-head">' + icon + ' <span class="combo-rank">' + rankLabel + '</span> ' + namePill + ' ' + avgPill + '・大戶力命中 ' + card.qualified + ' / ' + card.groupTotal + '</div>' +
    '<div class="race-col-labels ghf-labels"><span class="race-code"><b>代號</b></span><span class="race-name"><b>名稱</b></span>' +
    '<span class="race-line2"><span class="race-holder"><b>盤中大戶力</b></span><span><b>漲跌幅</b></span><span><b>漲跌</b></span><span><b>成交價</b></span><span class="race-warn-slot"></span></span></div>' +
    (card.rows.length ? card.rows.map((r, i) => groupHolderForceStockRowHtml(r, i)).join('')
      : '<div class="race-note">目前沒有符合條件的個股（大戶力資料還在累積中，或沒有' + (mode === 'up' ? '偏買' : '偏賣') + '方向的大戶力）</div>') +
    '</div>';
}
function groupHolderForceFilterBarHtml(){
  return '<div class="combo-filter-bar">' +
    '<button class="chart-tab hf-filter-btn' + (groupHolderForceFilter === 'up' ? ' active' : '') + '" data-filter="up">大戶力≥10%</button>' +
    '<button class="chart-tab hf-filter-btn' + (groupHolderForceFilter === 'down' ? ' active' : '') + '" data-filter="down">大戶力≤-10%</button>' +
    '</div>';
}
function groupHolderForceHtml(){
  const view = holderView();
  const m = view.loading ? null : groupHolderForceModel(view);
  const filterBar = holderDayBarHtml() + groupHolderForceFilterBarHtml();
  if (!m) return filterBar + holderPastNoteHtml(view) + holderEmptyHtml(view, view.isPast ? view.date + ' 沒有可以顯示的資料' : '族群行情還沒載入', view.isPast ? '那一天的日K或大戶力排行還沒進資料庫。' : '首頁資料抓到後就會出現。');
  const dayWord = view.isPast ? view.date + ' ' : '今天';
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const f = groupHolderForceFilter;
  // 有篩選時只留有符合個股的族群卡片；沒篩選時照舊全部列出（含「目前沒有符合條件的個股」的卡片）。
  const rising = f === 'down' ? [] : m.risingGroups.filter((c) => !f || c.rows.length);
  const falling = f === 'up' ? [] : m.fallingGroups.filter((c) => !f || c.rows.length);
  const note = f === 'up' ? '目前只看大戶力≥+10%（偏買）的個股，只列漲幅前10大族群；' : f === 'down' ? '目前只看大戶力≤-10%（偏賣）的個股，只列跌幅前10大族群；' : '';
  const emptyNote = '<div class="race-note">這一段目前沒有符合篩選條件的個股（再點一次按鈕取消篩選）</div>';
  return filterBar + holderPastNoteHtml(view) +
    '<div class="race-sub">' + note + dayWord + '漲幅前10大族群，各取大戶力（大單淨額÷累計成交額）最強的前5名個股；跌幅前10大族群，各取大戶力最負(賣超)的前5名個股。族群依' + dayWord + '平均漲跌幅排名，共 ' + m.total + ' 個族群。' + stamp + '</div>' +
    (f === 'down' ? '' : '<div class="race-sep">------↑(漲幅前10大族群・大戶力Top5)↑------</div>' +
      (rising.length ? rising.map((c) => groupHolderForceCardHtml(c, 'up')).join('') : emptyNote)) +
    (f === 'up' ? '' : '<div class="race-sep">------↓(跌幅前10大族群・大戶力Top5)↓------</div>' +
      (falling.length ? falling.map((c) => groupHolderForceCardHtml(c, 'down')).join('') : emptyNote));
}

// ---- 族群綜合表：把大戶力（大單淨額÷累計成交額）跟處置/注意狀態合併成一個表格，
// 一個族群一個 block，只列出有大戶力資料或有處置/注意資料的股票 ----
// 使用者要求：可以只看大戶力>=+10%（偏買）或<=-10%（偏賣）其中一邊，把強弱兩邊分開看。
// null=兩邊都顯示（預設）；'up'/'down'=只顯示那一邊，再點一次同一個按鈕取消篩選。
let groupCombinedBoardFilter = null;
function groupCombinedBoardDispositionCell(code){
  const f = stockFlags[code];
  if (f && f.disposition){
    const until = f.dispositionUntil ? ' 至' + String(f.dispositionUntil).slice(5).replace('-', '/') : '';
    return '<span class="pill-warn" title="' + (f.dispositionReason || '') + '">處置中' + until + '</span>';
  }
  const d = dispositionRiskData;
  const row = d && Array.isArray(d.results) ? d.results.find((r) => r.code === code) : null;
  if (row && row.accumulation){
    const a = row.accumulation;
    const title = a.triggerPath + (a.durationCaveat ? '\\n' + a.durationCaveat : '');
    return '<span class="pill-warn" title="' + title + '">預計處置' + a.predictedDurationBusinessDays + '天</span>';
  }
  if (row && row.firedToday && row.firedToday.length){
    const clauseText = row.firedToday.map((c) => c.clause).join('・');
    const title = row.firedToday.map((c) => '第' + c.clause + '款：' + c.detail).join('\\n');
    return '<span class="disp-clauses" title="' + title + '">今天中' + clauseText + '款</span>';
  }
  if (row && row.gapPrediction){
    const g = row.gapPrediction;
    const title = '明天收盤價門檻約' + g.thresholdClose + '元；觸發只代表公布注意，不是處置';
    return '<span class="pill-gap" title="' + title + '">🔮' + g.detail + '</span>';
  }
  const vw = dispositionVolumeWatchData;
  const vrow = vw && Array.isArray(vw.results) ? vw.results.find((r) => r.code === code) : null;
  if (vrow){
    return '<span class="pill-gap" title="第' + vrow.clause + '款；觸發只代表公布注意，不是處置">🔮' + vrow.detail + '</span>';
  }
  const pw = d && Array.isArray(d.priceExtremeWatch) ? d.priceExtremeWatch.find((r) => r.code === code) : null;
  if (pw){
    return '<span class="pill-gap" title="明天收盤價門檻約' + pw.thresholdClose + '元；觸發只代表公布注意，不是處置">🔮' + pw.detail + '</span>';
  }
  return '';
}
function groupCombinedBoardModel(view){
  // view 來自 holderView()：今天＝首頁即時行情＋目前排行；昨天／前天＝那一天的日K收盤＋那一天的最終排行。
  const sourceGroups = view && Array.isArray(view.groups) ? view.groups : null;
  if (!sourceGroups || !sourceGroups.length) return null;
  const groups = sourceGroups.filter((g) => g.name !== '股期標的');
  if (!groups.length) return null;
  const isPast = !!view.isPast;
  const dayWord = isPast ? view.date + ' ' : '今天';
  // 偏賣篩選（大戶力<=-10%）時跌幅大的族群排前面（-5% 在 -4% 前面、負越多越上面）；
  // 沒篩選或偏買篩選時照舊漲幅大的在前。
  // 族排名次跟顯示順序都從同一份「由弱到強」的穩定排序衍生（強到弱用 .reverse() 做鏡像，不是另外再排序一次）：
  // 各自獨立排序在遇到平均漲跌幅完全相同的族群時，穩定排序不保證彼此互為鏡像，「族排第N名」跟下面
  // 「族排最弱第N名」的號碼會兜不起來；用同一份排序＋reverse就不會有這個問題。
  const weakToStrong = groups.slice().sort((a, b) => a.avgChange - b.avgChange);
  const groupCount = weakToStrong.length;
  const ranked = groupCombinedBoardFilter === 'down' ? weakToStrong : weakToStrong.slice().reverse();
  // 族排名次：那一天平均漲跌幅在全部族群裡的名次（第 1 名最強），跟族群大戶力分頁的「族排第 N 名」同一套；
  // 不受篩選影響——偏賣篩選只列出部分族群時名次照樣是全體的名次，所以數字可能跳號。
  const rankOf = new Map(weakToStrong.map((g, i) => [g.name, groupCount - i]));
  // 族排最弱名次：由弱到強倒數（第 1 名全體最弱），大戶力≤-10%篩選時用這個代替上面的族排第N名。
  const weakestRankOf = new Map(weakToStrong.map((g, i) => [g.name, i + 1]));
  const holderByCode = new Map((view.ranking || []).map((r) => [r.code, r]));
  // 處置／注意資料只有今天的：看昨天／前天時不併入，只列大戶力夠格（|大戶力| >= 10%）的股票。
  const d = isPast ? null : dispositionRiskData;
  const dispByCode = new Set();
  if (d && Array.isArray(d.results)) d.results.forEach((r) => { if (r.firedToday.length || r.accumulation || r.gapPrediction) dispByCode.add(r.code); });
  if (d && Array.isArray(d.priceExtremeWatch)) d.priceExtremeWatch.forEach((r) => dispByCode.add(r.code));
  const vw = isPast ? null : dispositionVolumeWatchData;
  if (vw && Array.isArray(vw.results)) vw.results.forEach((r) => dispByCode.add(r.code));
  if (!isPast) Object.keys(stockFlags).forEach((code) => { if (stockFlags[code] && stockFlags[code].disposition) dispByCode.add(code); });

  const blocks = ranked.map((g) => {
    const valid = g.stocks.filter((s) => s.price !== null && s.price !== undefined);
    const rowsAll = valid.map((s) => {
      const h = holderByCode.get(s.code);
      const hasDisp = dispByCode.has(s.code);
      // 使用者要求：大戶力要 |strengthPct| >= 10 才單獨夠格上榜；沒到10%的大戶力
      // 資料只在有處置/注意觸發時當附加資訊一起顯示，不能單獨讓那一列出現。
      const qualifiesHolder = h && h.strengthPct !== null && h.strengthPct !== undefined && Math.abs(h.strengthPct) >= 10;
      if (!qualifiesHolder && !hasDisp) return null;
      return {
        code: s.code, name: s.name, pct: s.changePercent, price: s.price, changeAmt: s.changeAmt, isPast,
        strengthPct: h ? h.strengthPct : null, netAmount: h ? h.netAmount : null, holderLabel: h ? h.holderLabel : null,
        limitUp: !!s.limitUp, limitDown: !!s.limitDown,
      };
    }).filter(Boolean);
    let rows = rowsAll;
    if (groupCombinedBoardFilter === 'up'){
      rows = rowsAll.filter((r) => r.strengthPct !== null && r.strengthPct !== undefined && r.strengthPct >= 10);
    } else if (groupCombinedBoardFilter === 'down'){
      rows = rowsAll.filter((r) => r.strengthPct !== null && r.strengthPct !== undefined && r.strengthPct <= -10);
    }
    rows.sort((a, b) => {
      const av = a.strengthPct === null || a.strengthPct === undefined ? -Infinity : Math.abs(a.strengthPct);
      const bv = b.strengthPct === null || b.strengthPct === undefined ? -Infinity : Math.abs(b.strengthPct);
      return bv - av;
    });
    return { name: g.name, rank: rankOf.get(g.name), weakestRank: weakestRankOf.get(g.name), avgChange: g.avgChange, groupTotal: valid.length, rows, dayWord, isPast };
  }).filter((b) => b.rows.length);
  return { blocks, total: blocks.reduce((sum, b) => sum + b.rows.length, 0) };
}
function groupCombinedBoardRowHtml(r){
  const backendName = r.name && r.name !== r.code ? r.name : lookupStockName(r.code);
  // 大戶力格跟盤中333／族群大戶力共用raceHolderCellHtml：%在上、金額在下兩行疊放，不要左右塞一行
  // （2026-09-24 使用者：大戶力也要切起）。
  const holderText = raceHolderCellHtml(r);
  const cls = dirClass(r.pct);
  const price = Number(r.price);
  const hasPrice = Number.isFinite(price);
  const changeAmt = Number.isFinite(r.changeAmt) ? r.changeAmt : hasPrice ? price - price / (1 + r.pct / 100) : 0;
  // 大戶力欄移到漲跌幅前面（2026-09-24 使用者：把大戶力移到漲跌幅的前面）。
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + backendName + '" tabindex="0" role="button">' +
    '<td class="combo-code">' + r.code + '</td>' +
    '<td class="combo-name">' + backendName + '</td>' +
    '<td class="combo-holder">' + holderText + '</td>' +
    '<td class="combo-pct ' + cls + '">' + fmt(r.pct) + '%</td>' +
    '<td class="combo-chg ' + cls + '">' + (hasPrice ? (changeAmt > 0 ? '+' : '') + changeAmt.toFixed(2) : '—') + '</td>' +
    '<td class="combo-price ' + cls + '">' + (hasPrice ? limitPriceHtml(r, price.toFixed(2)) : '—') + '</td>' +
    '<td class="combo-disp">' + (r.isPast ? '—' : groupCombinedBoardDispositionCell(r.code)) + '</td>' +
    '</tr>';
}
function groupCombinedBoardBlockHtml(block){
  // 使用者 2026-09-24：大戶力≤-10%篩選時名次改從最弱倒數（族排最弱第1名＝全體最弱），比「族排第43名」直覺；
  // ≥10%篩選或沒篩選時維持原本從最強數的「族排第N名」。
  const rankLabel = block.rank ? (groupCombinedBoardFilter === 'down' ? '族排最弱第 ' + block.weakestRank + ' 名' : '族排第 ' + block.rank + ' 名') : '';
  // 使用者 2026-09-24：族群名稱、今天平均漲跌幅這兩塊各自變成紫底白字的獨立色塊；標題其餘文字
  // （有大戶力或處置/注意資料N檔）仍照平均漲跌幅正負分紅/綠（combo-head這個外層class）。
  const namePill = '<span class="head-pill">' + block.name + '（' + block.groupTotal + ' 檔）</span>';
  const avgPill = '<span class="head-pill">' + (block.dayWord || '今天') + '平均 ' + fmt(block.avgChange) + '%</span>';
  return '<div class="race-block combo-block"><div class="race-head combo-head ' + dirClass(block.avgChange) + '">' + (rankLabel ? '<span class="combo-rank">' + rankLabel + '</span> ' : '') + namePill + ' ' + avgPill + (block.isPast ? '・大戶力≥+10%或≤-10% ' : '・有大戶力或處置/注意資料 ') + block.rows.length + ' 檔</div>' +
    '<div class="combo-table-wrap"><table class="combo-table">' +
    '<colgroup><col class="c-code"><col class="c-name"><col class="c-holder"><col class="c-pct"><col class="c-chg"><col class="c-price"><col class="c-disp"></colgroup>' +
    '<thead><tr>' +
    '<th>代號</th><th>名稱</th><th>大戶力</th><th>漲跌幅</th><th>漲跌</th><th>成交價</th><th>處置／注意</th>' +
    '</tr></thead><tbody>' + block.rows.map(groupCombinedBoardRowHtml).join('') + '</tbody></table></div></div>';
}
function groupCombinedBoardFilterBarHtml(){
  return '<div class="combo-filter-bar">' +
    '<button class="chart-tab combo-filter-btn' + (groupCombinedBoardFilter === 'up' ? ' active' : '') + '" data-filter="up">大戶力≥10%</button>' +
    '<button class="chart-tab combo-filter-btn' + (groupCombinedBoardFilter === 'down' ? ' active' : '') + '" data-filter="down">大戶力≤-10%</button>' +
    '</div>';
}
function groupCombinedBoardHtml(){
  const view = holderView();
  const m = view.loading ? null : groupCombinedBoardModel(view);
  const filterBar = holderDayBarHtml() + groupCombinedBoardFilterBarHtml();
  if (!m || !m.blocks.length){
    const reason = groupCombinedBoardFilter ? '目前沒有股票符合這個篩選條件' : (view.isPast ? view.date + ' 沒有大戶力≥+10%或≤-10%的股票' : '目前沒有族群有大戶力或處置/注意資料');
    const sub = view.isPast ? '那一天的日K或大戶力排行還沒進資料庫，或再點一次篩選按鈕取消篩選。' : '首頁資料或大戶力資料還在載入，或再點一次篩選按鈕取消篩選。';
    return filterBar + holderPastNoteHtml(view) + holderEmptyHtml(view, reason, sub);
  }
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dayWord = view.isPast ? view.date + ' ' : '今天';
  const scopeNote = view.isPast ? '只列出那一天大戶力≥+10%或≤-10%的股票（處置/注意只有今天的資料）' : '只列出大戶力≥+10%或≤-10%、或有處置/注意資料的股票';
  return filterBar + holderPastNoteHtml(view) +
    (groupCombinedBoardFilter === 'down'
      ? '<div class="race-sub">大戶力（大單淨額÷累計成交額）跟處置/注意狀態合併顯示，一個族群一個表格；' + scopeNote + '。族群標題前的「族排最弱第 N 名」是' + dayWord + '平均漲跌幅由弱到強倒數的名次（第 1 名全體最弱），標題依平均漲跌幅正負分紅/綠，並依跌幅大小排序（跌幅大的族群在前），共 ' + m.blocks.length + ' 個族群、' + m.total + ' 檔。' + stamp + '</div>'
      : '<div class="race-sub">大戶力（大單淨額÷累計成交額）跟處置/注意狀態合併顯示，一個族群一個表格；' + scopeNote + '。族群標題前的「族排第 N 名」是' + dayWord + '平均漲跌幅在全部族群裡的名次（第 1 名最強，篩選後可能跳號），標題依平均漲跌幅正負分紅/綠，並依漲跌幅排序，共 ' + m.blocks.length + ' 個族群、' + m.total + ' 檔。' + stamp + '</div>') +
    m.blocks.map(groupCombinedBoardBlockHtml).join('');
}

// ---- 處置股預測：43個官方族群股票，依證交所14款異常標準判定今天觸發哪些款、
// 以及依第六條累積規則是不是已經累積到會被處置（含5/7天處置期間預測）----
let dispositionRiskData = null;
let dispositionRiskFetchedAt = 0;
async function fetchDispositionRisk(){
  const res = await fetch('/api/disposition-risk');
  if (!res.ok) throw new Error('disposition-risk http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.results)) throw new Error('bad payload');
  return data;
}
async function refreshDispositionRisk(force){
  if (!force && Date.now() - dispositionRiskFetchedAt < 600000) return;
  dispositionRiskFetchedAt = Date.now();
  try {
    dispositionRiskData = await fetchDispositionRisk();
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
  } catch (e) { /* 抓不到就沿用上一次 */ }
}
// 第九/十款(成交量類)差距預測即時觀察版：門檻收盤後算好，比對用的成交量盡量即時。
// 門檻本身不太會變，但目前成交量會一直動，所以用比dispositionRisk(10分鐘)短很多的
// 過期時間(20秒)，靠renderSignalCenter()既有的5秒心跳(見refreshSignalData)自然帶動
// 重抓，不用另外開一個setInterval一直跑。
let dispositionVolumeWatchData = null;
let dispositionVolumeWatchFetchedAt = 0;
async function fetchDispositionVolumeWatch(){
  const res = await fetch('/api/disposition-volume-watch');
  if (!res.ok) throw new Error('disposition-volume-watch http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.results)) throw new Error('bad payload');
  return data;
}
async function refreshDispositionVolumeWatch(force){
  if (!force && Date.now() - dispositionVolumeWatchFetchedAt < 20000) return;
  dispositionVolumeWatchFetchedAt = Date.now();
  try {
    dispositionVolumeWatchData = await fetchDispositionVolumeWatch();
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
  } catch (e) { /* 抓不到就沿用上一次 */ }
}
function dispositionRiskStockRowHtml(r){
  const backendName = r.name && r.name !== r.code ? r.name : lookupStockName(r.code);
  const clauseText = r.firedToday.map((c) => c.clause).join('・');
  const clauseTitle = r.firedToday.map((c) => '第' + c.clause + '款：' + c.detail).join('\\n');
  const clausesHtml = r.firedToday.length
    ? '<span class="disp-clauses" title="' + clauseTitle + '">今天中：' + clauseText + '款</span>' : '';
  const accum = r.accumulation;
  const warnTitle = accum ? accum.triggerPath + (accum.durationCaveat ? '\\n' + accum.durationCaveat : '') : '';
  const warnHtml = accum
    ? '<span class="pill-warn" title="' + warnTitle + '">預計處置' + accum.predictedDurationBusinessDays + '個營業日</span>' : '';
  const gap = r.gapPrediction;
  const gapTitle = gap ? '明天收盤價門檻約' + gap.thresholdClose + '元（' + (gap.direction === 'up' ? '漲幅' : '跌幅') + (gap.changePctFromToday > 0 ? '+' : '') + gap.changePctFromToday.toFixed(2) + '%）；收盤後用官方定案資料反推，不是盤中即時值' : '';
  const gapHtml = gap ? '<span class="pill-gap" title="' + gapTitle + '">🔮 明天' + gap.detail + '</span>' : '';
  return '<div class="race-row stock-row" data-code="' + r.code + '" data-name="' + backendName + '" tabindex="0" role="button">' +
    '<span class="race-code">' + r.code + '</span><span class="race-name">' + backendName + '</span>' +
    clausesHtml + warnHtml + gapHtml + '</div>';
}
function dispositionPriceExtremeWatchRowHtml(r){
  const backendName = r.name && r.name !== r.code ? r.name : lookupStockName(r.code);
  const title = '明天收盤價門檻約' + r.thresholdClose + '元（' + (r.direction === 'up' ? '漲幅' : '跌幅') +
    (r.changePctFromToday > 0 ? '+' : '') + r.changePctFromToday.toFixed(2) +
    '%）；收盤後用官方定案資料反推，不是盤中即時值；觸發只代表公布注意，不計入處置累積路徑';
  return '<div class="race-row stock-row" data-code="' + r.code + '" data-name="' + backendName + '" tabindex="0" role="button">' +
    '<span class="race-code">' + r.code + '</span><span class="race-name">' + backendName + '</span>' +
    '<span class="disp-clauses">第十一款</span>' +
    '<span class="pill-gap" title="' + title + '">🔮 明天' + r.detail + '</span></div>';
}
function dispositionPriceExtremeWatchSectionHtml(){
  const data = dispositionRiskData;
  const list = data && Array.isArray(data.priceExtremeWatch) ? data.priceExtremeWatch : [];
  if (!list.length) return '';
  return '<div class="race-sep">------↓(收盤價接近第十一款門檻，創6日新高/新低觀察中)↓------</div>' +
    '<div class="race-sub">【注意】這裡達標只代表會觸發一次公布「注意交易資訊」，第十一款不計入處置累積路徑，跟是否會被處置無關。反推明天收盤價要達到多少才會創6日新高或新低，收盤後用官方定案資料算，不是盤中即時值；超過台股單日漲跌幅限制(±10%)的不會列出。</div>' +
    list.map(dispositionPriceExtremeWatchRowHtml).join('');
}
function dispositionVolumeWatchRowHtml(r){
  const backendName = r.name && r.name !== r.code ? r.name : lookupStockName(r.code);
  const liveHtml = r.liveData
    ? '<span class="pill-live" title="即時成交量（市場數據中樞，Shioaji逐筆餵入）">直播</span>'
    : '<span class="disp-clauses" title="這檔目前不在即時追蹤範圍內，用門檻計算那天(' + dispositionVolumeWatchData.tradeDate + ')收盤量估計">估計</span>';
  const volTitle = '門檻' + r.thresholdVolume.toFixed(0) + '張／目前' + r.currentVolume.toFixed(0) + '張';
  return '<div class="race-row stock-row" data-code="' + r.code + '" data-name="' + backendName + '" tabindex="0" role="button">' +
    '<span class="race-code">' + r.code + '</span><span class="race-name">' + backendName + '</span>' +
    '<span class="disp-clauses">第' + r.clause + '款</span>' + liveHtml +
    '<span class="pill-gap" title="' + volTitle + '">' + r.detail + '</span></div>';
}
function dispositionVolumeWatchSectionHtml(){
  const data = dispositionVolumeWatchData;
  if (!data || !data.results.length) return '';
  const liveNote = data.liveCount > 0 ? '目前 ' + data.liveCount + ' / ' + data.count + ' 檔有即時成交量。' : '目前沒有股票在即時追蹤範圍內，全部用收盤量估計。';
  return '<div class="race-sep">------↓(成交量接近第九/十款門檻，盤中觀察中)↓------</div>' +
    '<div class="race-sub">【注意】這裡達標只代表會觸發一次公布「注意交易資訊」，第九／十款不計入證交所第六條的處置累積路徑，跟是否會被處置無關——不會因為這裡達標就被限制交易。第九款(單日爆量)／第十款(週轉率)差距預測：門檻收盤後用官方定案資料算好，對整個下一個交易日都有效；' + liveNote + (data.liveSubscriptionCapNote || '') + '</div>' +
    data.results.map(dispositionVolumeWatchRowHtml).join('');
}
function dispositionRiskHtml(){
  const data = dispositionRiskData;
  const volumeSection = dispositionVolumeWatchSectionHtml();
  const priceSection = dispositionPriceExtremeWatchSectionHtml();
  if (!data) return '<div class="signal-empty"><div class="se-title">讀取中…</div><div class="se-sub">處置股預測資料還沒載入。</div></div>';
  if (!data.results.length && !volumeSection && !priceSection) return '<div class="signal-empty"><div class="se-title">今天沒有股票觸發任何處置股款別</div><div class="se-sub">交易日 ' + data.tradeDate + '</div></div>';
  const accumulating = data.results.filter((r) => r.accumulation);
  const firedOnly = data.results.filter((r) => !r.accumulation);
  return '<div class="race-sub">依證交所公布或通知注意交易資訊暨處置作業要點第四條14款異常標準，只算43個官方族群524檔（第五款需要券商分點資料、第八款限台灣存託憑證，這兩款沒有列入判定）；今天觸發款別的股票，以及依第六條累積規則已經累積到會被處置的股票。🔮 標籤是「連續2天中第一款、還差1次就觸發」的股票，收盤後用官方定案資料反推明天收盤價門檻（不是盤中即時值）。交易日 ' + data.tradeDate + '</div>' +
    (accumulating.length ? '<div class="race-sep">------↓(已進入處置累積路徑，預計會被處置)↓------</div>' +
      accumulating.map(dispositionRiskStockRowHtml).join('') : '') +
    (firedOnly.length ? '<div class="race-sep">------↓(今天觸發款別，尚未累積到處置門檻)↓------</div>' +
      firedOnly.map(dispositionRiskStockRowHtml).join('') : '') +
    volumeSection + priceSection;
}

// ---- 醞釀／發動（2026-09-24 使用者：老師的「1＝醞釀（整理形態）、2＝發動（突破）」）----
// 後端每天用日K算好箱子（近10天最高／最低）、均線、5日均量、發行張數，並判定前一個交易日收盤是否「醞釀」；
// 「發動」要看即時價量，這裡用首頁行情（/api/groups）即時判斷：過箱頂、均線分數（用即時價當今天收盤重算）、周轉高。
let brewLaunchData = null;
let brewLaunchFetchedAt = 0;
async function refreshBrewLaunch(force){
  if (!force && Date.now() - brewLaunchFetchedAt < 600000) return;
  brewLaunchFetchedAt = Date.now();
  try {
    const res = await fetch('/api/brew-launch');
    if (!res.ok) throw new Error('brew-launch http ' + res.status);
    const data = await res.json();
    if (!data || data.status !== 'ok' || !data.stocks || !data.rules) throw new Error('bad payload');
    brewLaunchData = data;
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
  } catch (e) {
    brewLaunchFetchedAt = Date.now() - 540000;  // 抓不到就一分鐘後再試，先沿用上一次的資料
  }
}
function twTodayStr(){ return new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10); }
function brewVolumeFactor(){
  // 盤中累積量換算全天預估量：09:00～13:30 共 270 分鐘，依已經過的時間等比放大（最多 4 倍，開盤頭幾分鐘
  // 不會放大過頭）；行情不是今天盤中的（週末、假日、收盤後、盤前）就是那一天的實際量，不放大。
  const qd = lastData && lastData.quoteDate;
  if (!qd || qd !== twTodayStr()) return 1;
  const m = /^(\\d{1,2}):(\\d{2})/.exec(String((lastData && lastData.quoteTime) || ''));
  if (!m) return 1;
  const elapsed = Number(m[1]) * 60 + Number(m[2]) - 540;
  if (elapsed <= 0 || elapsed >= 270) return 1;
  return Math.min(270 / elapsed, 4);
}
function maScoreFromSums(info, price, rules){
  // 均線分數：5/10/20/60/120/240 日線兩兩比較共 15 組，短天期在長天期上面得 1 分；今天的均線用現價當今天收盤：
  // MA_p = (最近 p-1 根收盤合計 + 現價) / p（合計由後端 /api/brew-launch 算好）。
  const periods = rules.maPeriods.slice().sort((a, b) => a - b);
  const mas = periods.map((p) => (Number(info.maSums[p]) + price) / p);
  let score = 0;
  for (let i = 0; i < mas.length; i++) for (let j = i + 1; j < mas.length; j++) if (mas[i] > mas[j]) score++;
  return score;
}
function maScoreCellHtml(code, price){
  const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null;
  if (!info || !(price > 0)){
    const bf = brewLaunchData && brewLaunchData.historyBackfill;
    const why = !brewLaunchData ? '均線資料讀取中' : bf && !bf.done ? '日K歷史回補中，補完就有' : '日K不足 240 天（新上市等）算不出 MA240';
    return '<span class="race-ma-none" title="' + why + '">—</span>';
  }
  const score = maScoreFromSums(info, price, brewLaunchData.rules);
  return '<b class="race-ma-val' + (score > 10 ? ' hi' : '') + '" title="均線分數（5/10/20/60/120/240 日線兩兩比較 15 組，短天期在上面得 1 分；用現價當今天收盤）">' + score + '</b>';
}
function brewLiveMetrics(info, s, factor, rules){
  const price = Number(s.price);
  if (!Number.isFinite(price) || price <= 0) return null;
  const score = maScoreFromSums(info, price, rules);
  const vol = Number(s.volume) || 0;
  const projVol = vol * factor;
  const shares = Number(info.sharesLots) > 0 ? Number(info.sharesLots) : null;
  const turnoverPct = shares ? vol / shares * 100 : null;
  const projTurnoverPct = shares ? projVol / shares * 100 : null;
  const volRatio = Number(info.avgVol5) > 0 ? projVol / Number(info.avgVol5) : null;
  const brokeOut = price > info.boxHigh;
  const scoreOk = score >= rules.launchMinScore;
  const volumeOk = (projTurnoverPct !== null && projTurnoverPct >= rules.turnoverMinPct) || (volRatio !== null && volRatio >= rules.volumeRatioMin);
  return { price, score, turnoverPct, projTurnoverPct, volRatio, brokeOut, scoreOk, volumeOk,
    launch: brokeOut && scoreOk && volumeOk, toBoxPct: (info.boxHigh / price - 1) * 100 };
}
function brewLaunchModel(){
  if (!brewLaunchData || !lastData || !Array.isArray(lastData.groups)) return null;
  const rules = brewLaunchData.rules;
  const factor = brewVolumeFactor();
  const groups = lastData.groups.filter((g) => g.name !== '股期標的');
  if (!groups.length) return null;
  // 族排：今天平均漲跌幅在全部族群裡的名次（第 1 名最強），跟族群綜合表同一套；族群也照這個順序排。
  const weakToStrong = groups.slice().sort((a, b) => a.avgChange - b.avgChange);
  const rankOf = new Map(weakToStrong.map((g, i) => [g.name, weakToStrong.length - i]));
  const launchBlocks = [], brewBlocks = [];
  const launchCodes = new Set(), brewCodes = new Set();
  const byLaunch = (a, b) => b.score - a.score || (b.projTurnoverPct || 0) - (a.projTurnoverPct || 0);
  const byBrew = (a, b) => b.score - a.score || a.toBoxPct - b.toBoxPct;  // 同分時離突破越近的越前面
  const blockOf = (g, rows, cmp) => {
    rows.sort(cmp);
    rows.forEach((r) => { r.topScore = r.score === rows[0].score; });  // 族群多就挑分數最高的：★
    return { name: g.name, rank: rankOf.get(g.name), avgChange: g.avgChange, groupTotal: g.stocks.length, rows };
  };
  weakToStrong.slice().reverse().forEach((g) => {
    const launchRows = [], brewRows = [];
    g.stocks.forEach((s) => {
      const info = brewLaunchData.stocks[s.code];
      if (!info) return;
      const live = brewLiveMetrics(info, s, factor, rules);
      if (!live) return;
      const row = Object.assign({ code: s.code, name: s.name, pct: s.changePercent, limitUp: !!s.limitUp, limitDown: !!s.limitDown, info }, live);
      if (live.launch){ launchRows.push(row); launchCodes.add(s.code); }
      else if (info.brewing){ brewRows.push(row); brewCodes.add(s.code); }
    });
    if (launchRows.length) launchBlocks.push(blockOf(g, launchRows, byLaunch));
    if (brewRows.length) brewBlocks.push(blockOf(g, brewRows, byBrew));
  });
  return { launchBlocks, brewBlocks, launchCount: launchCodes.size, brewCount: brewCodes.size, factor, rules };
}
function brewLaunchRowHtml(r, kind){
  const cls = dirClass(r.pct);
  const star = r.topScore ? '<span class="bl-star" title="族群裡均線分數最高">★</span>' : '';
  let tag = '';
  if (kind === 'launch' && r.info.brewing) tag = '<span class="bl-tag">醞釀→發動</span>';
  if (kind === 'brew' && r.brokeOut) tag = '<span class="bl-tag warn">' + (r.scoreOk ? '過箱頂・量能未到' : '過箱頂・分數未到') + '</span>';
  const toBox = r.toBoxPct <= 0 ? '已過 ' + (-r.toBoxPct).toFixed(2) + '%' : '差 ' + r.toBoxPct.toFixed(2) + '%';
  const turnTitle = r.projTurnoverPct === null ? '沒有發行股數資料' : '預估全天周轉率 ' + r.projTurnoverPct.toFixed(2) + '%';
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' +
    '<td class="combo-code">' + r.code + '</td>' +
    '<td class="combo-name">' + r.name + '</td>' +
    '<td class="bl-score" title="5/10/20/60/120/240 日線兩兩比較 15 組，短天期在上面得 1 分（用現價當今天收盤）">' + r.score + star + '</td>' +
    '<td class="combo-pct ' + cls + '">' + fmt(r.pct) + '%</td>' +
    '<td class="combo-price ' + cls + '">' + limitPriceHtml(r, r.price.toFixed(2)) + '</td>' +
    '<td class="bl-box" title="箱底 ' + r.info.boxLow.toFixed(2) + '，箱子高低差 ' + r.info.boxRangePct + '%">' + r.info.boxHigh.toFixed(2) + '</td>' +
    '<td class="bl-tobox' + (r.toBoxPct <= 0 ? ' up' : '') + '">' + toBox + tag + '</td>' +
    '<td class="bl-turn" title="' + turnTitle + '">' + (r.turnoverPct === null ? '—' : r.turnoverPct.toFixed(2) + '%') + '</td>' +
    '<td class="bl-ratio" title="預估全天量 ÷ 5 日均量">' + (r.volRatio === null ? '—' : r.volRatio.toFixed(2) + ' 倍') + '</td>' +
    '</tr>';
}
function brewLaunchBlockHtml(block, kind){
  const namePill = '<span class="head-pill">' + block.name + '（' + block.groupTotal + ' 檔）</span>';
  const avgPill = '<span class="head-pill">今天平均 ' + fmt(block.avgChange) + '%</span>';
  return '<div class="race-block bl-block"><div class="race-head combo-head ' + dirClass(block.avgChange) + '"><span class="combo-rank">族排第 ' + block.rank + ' 名</span> ' + namePill + ' ' + avgPill + '・' + (kind === 'launch' ? '發動 ' : '醞釀 ') + block.rows.length + ' 檔</div>' +
    '<div class="combo-table-wrap"><table class="combo-table bl-table">' +
    '<colgroup><col class="b-code"><col class="b-name"><col class="b-score"><col class="b-pct"><col class="b-price"><col class="b-box"><col class="b-tobox"><col class="b-turn"><col class="b-ratio"></colgroup>' +
    '<thead><tr><th>代號</th><th>名稱</th><th>均線分數</th><th>漲跌幅</th><th>成交價</th><th>箱頂(突破價)</th><th>距箱頂</th><th>周轉率</th><th>量比(預估)</th></tr></thead>' +
    '<tbody>' + block.rows.map((r) => brewLaunchRowHtml(r, kind)).join('') + '</tbody></table></div></div>';
}
function brewBackfillNoteHtml(bf){
  // 均線分數要 240 根日K；歷史日K還在回補（或上次沒補完）時講清楚，不要讓人以為是沒有訊號
  if (!bf || bf.done) return '';
  const p = bf.progress || {};
  const text = p.running
    ? '日K歷史回補中（已補 ' + (p.doneStocks || 0) + '／' + (p.totalStocks || 0) + ' 檔），均線分數要 240 天日K，補完就會出現醞釀／發動，約需幾分鐘。'
    : '日K歷史還沒補齊' + (bf.failures ? '（上次有 ' + bf.failures + ' 檔沒抓到，系統重啟時會再補）' : '') + '，均線分數要 240 天日K，補齊前大部分股票算不出來。';
  return '<div class="race-note bl-backfill-note">' + text + '</div>';
}
function brewLaunchHtml(){
  if (!brewLaunchData){
    return '<div class="signal-empty"><div class="se-title">醞釀／發動資料讀取中…</div><div class="se-sub">箱子、均線是每天收盤後用日K算好的，再加上即時價量判斷；讀不到的話稍後再試。</div></div>';
  }
  const m = brewLaunchModel();
  if (!m) return '<div class="signal-empty"><div class="se-title">首頁行情還在載入…</div></div>';
  const r = m.rules;
  const d = brewLaunchData;
  const skipped = (d.insufficient || []).length + (d.stale || []).length;
  const bf = d.historyBackfill;
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const note = '<div class="race-sub">老師的選股法：1＝醞釀（整理形態）、2＝發動（突破）。醞釀以前一個交易日（' + (d.asOf || '—') + '）收盤為準：均線分數≥' + r.brewMinScore +
    '、收盤站上月線、近 ' + r.boxDays + ' 天最高到最低相差≤' + r.boxRangeMaxPct + '%、5/10/20 日線相差≤' + r.maSpreadMaxPct + '%。發動看即時價量：價格衝過箱頂（近 ' + r.boxDays + ' 天最高價）、均線分數>' + (r.launchMinScore - 1) +
    '、預估全天周轉率≥' + r.turnoverMinPct + '% 或預估量≥5 日均量 ' + r.volumeRatioMin + ' 倍。同族群依均線分數排序，★＝族群裡分數最高。' +
    (skipped && !(bf && !bf.done) ? '另有 ' + skipped + ' 檔日K不足 240 天（新上市等）或停牌沒列入。' : '') + stamp + '</div>' + brewBackfillNoteHtml(bf);
  const launch = '<div class="bl-section bl-launch">2 發動（突破）・' + m.launchCount + ' 檔</div>' +
    (m.launchBlocks.length ? m.launchBlocks.map((b) => brewLaunchBlockHtml(b, 'launch')).join('') : '<div class="race-note">目前沒有股票發動（過箱頂、均線分數、周轉三個條件要同時到）</div>');
  const brew = '<div class="bl-section bl-brew">1 醞釀（整理）・' + m.brewCount + ' 檔</div>' +
    (m.brewBlocks.length ? m.brewBlocks.map((b) => brewLaunchBlockHtml(b, 'brew')).join('') : '<div class="race-note">目前沒有股票符合醞釀條件</div>');
  return note + launch + brew;
}

function renderSignalCenter(){
  const tabsEl = document.getElementById('signalTabsBar');
  refreshBrewLaunch(false);
  const bigHolderRows = bigHolderRowsFrom(mainForceRanking);
  const countFor = (key) => {
    if (key === 'now') return todaySignalEvents.length + bigHolderRows.length;
    if (key === 'history' || key === 'race333' || key === 'groupHolderForce' || key === 'groupCombinedBoard') return null;
    if (key === 'dispositionRisk') return dispositionRiskData ? dispositionRiskData.results.length + (dispositionVolumeWatchData ? dispositionVolumeWatchData.results.length : 0) + (Array.isArray(dispositionRiskData.priceExtremeWatch) ? dispositionRiskData.priceExtremeWatch.length : 0) : null;
    if (key === 'bigHolderForce') return bigHolderRows.length;
    if (key === 'brewLaunch'){ const bm = brewLaunchModel(); return bm ? bm.brewCount + '/' + bm.launchCount : null; }
    return todaySignalEvents.filter((e) => e.tabs.includes(key)).length;
  };
  // 使用者 2026-09-24：這三個分頁的分頁字改紫紅色，跟其他分頁的灰白字區隔開來。
  const PURPLE_TAB_KEYS = new Set(['groupHolderForce', 'groupCombinedBoard', 'race333', 'bigHolderForce']);
  const tabsHtml = SIGNAL_KINDS.map((k) => {
    const count = countFor(k.key);
    return '<button class="chart-tab signal-tab' + (signalCenterState.activeTab === k.key ? ' active' : '') + (PURPLE_TAB_KEYS.has(k.key) ? ' signal-tab-purple' : '') + '" data-kind="' + k.key + '">' +
      k.label + (count === null ? '' : ' <span class="sig-count">' + count + '</span>') +
    '</button>';
  }).join('');
  // 分頁列也只在數字或選取狀態有變時才重畫，免得使用者正要點的按鈕被換掉。
  if (tabsHtml !== signalTabsRenderedHtml){
    tabsEl.innerHTML = tabsHtml;
    signalTabsRenderedHtml = tabsHtml;
  }

  const body = document.getElementById('signalBody');
  const active = signalCenterState.activeTab;
  if (active === 'history'){
    const today = new Date().toISOString().slice(0, 10);
    const d = signalCenterState.historyDate || today;
    const key = 'history:' + d;
    if (signalBodyRendered.key !== key || !document.getElementById('signalHistoryBody')){
      // 剛切到這個分頁或換了日期才整個重畫、顯示讀取中；同一天的自動更新只換列表內容。
      replaceSignalHtml(body, key + ':loading',
        '<div class="signal-history-bar">交易日期 <input type="date" id="signalHistoryDate" value="' + d + '"></div>' +
        '<div id="signalHistoryBody"><div class="signal-empty"><div class="se-title">讀取中…</div></div></div>');
      document.getElementById('signalHistoryDate').addEventListener('change', (e) => {
        signalCenterState.historyDate = e.target.value;
        renderSignalCenter();
      });
      signalBodyRendered = { key: key, html: null };
    } else if (d !== today && signalBodyRendered.html !== null && Date.now() - signalHistoryFetchedAt < 60000){
      return; // 過去日期的紀錄幾乎不會變，一分鐘看一次就夠，不用每5秒重抓
    }
    signalHistoryFetchedAt = Date.now();
    fetchRealSignals(d).then((events) => {
      const stillOnSameDate = signalCenterState.activeTab === 'history' && (signalCenterState.historyDate || today) === d;
      if (stillOnSameDate) replaceSignalHtml(document.getElementById('signalHistoryBody'), key, signalRowsHtml(events));
    }).catch(() => {
      const el = document.getElementById('signalHistoryBody');
      if (el && !el.querySelector('.signal-list')) el.innerHTML = '<div class="signal-empty"><div class="se-title">讀取失敗</div><div class="se-sub">後端暫時連不上，稍後再試。</div></div>';
    });
  } else if (active === 'bigHolderForce'){
    // 昨天／前天的日期清單來自 group-daily-changes，三個大戶力分頁都要確保它有抓。
    refreshGroupDailyChanges(false);
    const view = holderView();
    const rows = view.offset === 0 ? bigHolderRows : bigHolderRowsFrom(view.ranking);
    replaceSignalHtml(body, 'bigHolderForce', holderDayBarHtml() + holderPastNoteHtml(view) +
      (view.loading || view.unavailable ? holderEmptyHtml(view, '', '') : rankingRowsHtml(rows, view)));
  } else if (active === 'race333'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'race333', race333Html());
  } else if (active === 'groupHolderForce'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'groupHolderForce', groupHolderForceHtml());
  } else if (active === 'groupCombinedBoard'){
    refreshGroupDailyChanges(false);
    refreshDispositionRisk(false);
    refreshDispositionVolumeWatch(false);
    replaceSignalHtml(body, 'groupCombinedBoard', groupCombinedBoardHtml());
  } else if (active === 'brewLaunch'){
    replaceSignalHtml(body, 'brewLaunch', brewLaunchHtml());
  } else if (active === 'dispositionRisk'){
    refreshDispositionRisk(false);
    refreshDispositionVolumeWatch(false);
    replaceSignalHtml(body, 'dispositionRisk', dispositionRiskHtml());
  } else if (active === 'now'){
    replaceSignalHtml(body, 'now', nowTabRowsHtml(todaySignalEvents, bigHolderRows));
  } else if (DEDICATED_KLINE_TABS.has(active)){
    refreshKlineBackfillStatus();
    const events = todaySignalEvents.filter((e) => e.tabs.includes(active));
    replaceSignalHtml(body, active, klineBackfillNoteHtml() + signalRowsHtml(events));
  } else {
    const events = todaySignalEvents.filter((e) => e.tabs.includes(active));
    replaceSignalHtml(body, active, signalRowsHtml(events));
  }
}
function positionSignalModal(){
  if (document.body.classList.contains('signal-window-mode')) return;
  const panel = document.getElementById('signalModalInner');
  // 跟CSS的@media(min-width:768px)斷點(iPad以上視窗放大)手動對齊：這裡
  // 為了置中要用JS算寬高、寫成inline style，inline style會蓋掉CSS的
  // width/height規則，所以斷點邏輯要跟CSS那邊保持一致，不然只有CSS
  // 改了、JS沒有跟著改，放大規則會被這裡蓋掉。
  const isLarge = window.innerWidth >= 768;
  const w = isLarge ? Math.min(1180, window.innerWidth * 0.96) : Math.min(672, window.innerWidth * 0.94);
  const h = isLarge ? Math.min(920, window.innerHeight * 0.92) : Math.min(768, window.innerHeight * 0.86);
  panel.style.width = w + 'px'; panel.style.height = h + 'px';
  panel.style.left = Math.max(0, (window.innerWidth - w) / 2) + 'px';
  panel.style.top = Math.max(10, (window.innerHeight - h) / 2) + 'px';
}
function recenterSignalModal(){ positionSignalModal(); }
function openSignalCenter(){
  const datePill = document.getElementById('smDatePill');
  if (datePill) datePill.textContent = '交易日期 ' + new Date().toISOString().slice(0, 10).replace(/-/g, '/');
  const overlay = document.getElementById('signalModal');
  overlay.hidden = false;
  positionSignalModal();
  renderSignalCenter();
}
function hideSignalModalPanel(){
  document.getElementById('signalModal').hidden = true;
}
function toggleSignalCollapse(){
  const panel = document.getElementById('signalModalInner');
  const collapsed = panel.classList.toggle('collapsed');
  const btn = document.getElementById('smCollapse');
  if (btn){ btn.textContent = collapsed ? '▢' : '－'; btn.setAttribute('aria-label', collapsed ? '展開' : '收合'); }
}
function closeSignalCenter(){
  if (document.body.classList.contains('signal-window-mode')){ window.close(); return; }
  hideSignalModalPanel();
}
function openSignalWindow(){
  const w = window.open(location.pathname + location.search + '#signal-center', 'hanstockSignalCenter', 'width=480,height=700');
  if (w) w.focus();
}
function initSignalWindowChrome(){
  if (document.body.classList.contains('signal-window-mode')) return;
  const panel = document.getElementById('signalModalInner');
  const head = document.getElementById('signalModalHead');
  let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
  head.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    const rect = panel.getBoundingClientRect();
    startLeft = rect.left; startTop = rect.top;
    head.setPointerCapture(e.pointerId);
  });
  head.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    let left = startLeft + dx, top = startTop + dy;
    // 左右不能拖出畫面（2026-09-24 使用者 iPad 截圖：整個視窗往左跑掉、左半邊被切掉——iPad 上視窗佔滿
    // 96% 寬，手指在深灰標題列上橫向一滑就把整個視窗拖走）。比畫面窄就整個留在畫面內；比畫面寬就只能在
    // 「左邊貼齊」到「右邊貼齊」之間移動。上下維持原本可以往下拖、露出後面頁面。
    const slack = document.documentElement.clientWidth - panel.offsetWidth;
    left = Math.max(Math.min(0, slack), Math.min(Math.max(0, slack), left));
    top = Math.max(0, Math.min(window.innerHeight - 40, top));
    panel.style.left = left + 'px'; panel.style.top = top + 'px';
  });
  head.addEventListener('pointerup', () => { dragging = false; });
  head.addEventListener('pointercancel', () => { dragging = false; });

  // 2026-09-24 使用者：視窗要能上下左右伸展。CSS 的 resize:both 只有右下角一個把手，這裡在覆蓋層上
  // 另外放 8 個把手（四邊＋四角）貼著視窗邊緣，拖哪一邊就往那一邊放大縮小；把手位置靠
  // ResizeObserver／MutationObserver 跟著視窗的移動、縮放、開關走。把手大部分在視窗外側
  // （外 8px、內 2px），不會壓到視窗裡的捲軸跟內容。
  const overlay = document.getElementById('signalModal');
  const DIRS = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
  const OUT = 8, IN = 2, CORNER = 8;
  const handles = DIRS.map((dir) => {
    const h = document.createElement('div');
    h.className = 'sm-resize sm-resize-' + dir;
    h.dataset.dir = dir;
    overlay.appendChild(h);
    return h;
  });
  function syncResizeHandles(){
    const hide = overlay.hidden || panel.classList.contains('collapsed');
    const r = panel.getBoundingClientRect();
    handles.forEach((h) => {
      h.hidden = hide;
      if (hide) return;
      const d = h.dataset.dir;
      let left, top, width, height;
      if (d.length === 2){  // 角落：以角為中心的 16px 方塊
        left = (d.includes('w') ? r.left : r.right) - CORNER;
        top = (d.includes('n') ? r.top : r.bottom) - CORNER;
        width = height = CORNER * 2;
      } else if (d === 'n' || d === 's'){
        left = r.left + CORNER; width = Math.max(0, r.width - CORNER * 2);
        top = d === 'n' ? r.top - OUT : r.bottom - IN; height = OUT + IN;
      } else {
        top = r.top + CORNER; height = Math.max(0, r.height - CORNER * 2);
        left = d === 'w' ? r.left - OUT : r.right - IN; width = OUT + IN;
      }
      h.style.left = left + 'px'; h.style.top = top + 'px';
      h.style.width = width + 'px'; h.style.height = height + 'px';
    });
  }
  const MIN_W = 280, MIN_H = 320;
  let resizing = null;
  handles.forEach((h) => {
    h.addEventListener('pointerdown', (e) => {
      const r = panel.getBoundingClientRect();
      resizing = { dir: h.dataset.dir, x: e.clientX, y: e.clientY, left: r.left, top: r.top, width: r.width, height: r.height };
      h.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    h.addEventListener('pointermove', (e) => {
      if (!resizing) return;
      const dx = e.clientX - resizing.x, dy = e.clientY - resizing.y;
      const d = resizing.dir;
      let { left, top, width, height } = resizing;
      if (d.includes('e')) width = Math.min(window.innerWidth - left, Math.max(MIN_W, resizing.width + dx));
      if (d.includes('s')) height = Math.min(window.innerHeight - top, Math.max(MIN_H, resizing.height + dy));
      if (d.includes('w')){
        const newLeft = Math.max(0, Math.min(resizing.left + dx, resizing.left + resizing.width - MIN_W));
        width = resizing.width + (resizing.left - newLeft); left = newLeft;
      }
      if (d.includes('n')){
        const newTop = Math.max(0, Math.min(resizing.top + dy, resizing.top + resizing.height - MIN_H));
        height = resizing.height + (resizing.top - newTop); top = newTop;
      }
      panel.style.left = left + 'px'; panel.style.top = top + 'px';
      panel.style.width = width + 'px'; panel.style.height = height + 'px';
      syncResizeHandles();
    });
    const stop = () => { resizing = null; };
    h.addEventListener('pointerup', stop);
    h.addEventListener('pointercancel', stop);
  });
  new ResizeObserver(syncResizeHandles).observe(panel);
  new MutationObserver(syncResizeHandles).observe(panel, { attributes: true, attributeFilter: ['class', 'style'] });
  new MutationObserver(syncResizeHandles).observe(overlay, { attributes: true, attributeFilter: ['hidden'] });
  window.addEventListener('resize', syncResizeHandles);
  // iPad 直橫切換或瀏覽器變窄後，視窗還是舊的寬度／位置，會凸出畫面左右邊；這時自動重新置中、套用新畫面的預設大小。
  window.addEventListener('resize', () => {
    if (overlay.hidden) return;
    const r = panel.getBoundingClientRect();
    if (r.left < -1 || r.right > document.documentElement.clientWidth + 1) positionSignalModal();
  });
  syncResizeHandles();
}

let toastTimer = null;
function showToast(msg){
  let el = document.getElementById('toastBox');
  if (!el){
    el = document.createElement('div');
    el.id = 'toastBox';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}

function findStockByQuery(query){
  const q = query.trim();
  if (!q) return null;
  for (const g of GROUPS){
    for (const s of g.stocks){
      if (s.code === q || s.name === q) return s;
    }
  }
  const ql = q.toLowerCase();
  for (const g of GROUPS){
    for (const s of g.stocks){
      if (s.code.toLowerCase().includes(ql) || s.name.includes(q)) return s;
    }
  }
  // 族群清單只收「概念股題材」，像台積電、中華電這類權值股本來就故意不收進
  // 任何族群（收了會蓋掉整個族群的漲跌幅比較），不代表這支股票不存在。只要
  // 格式像股票代號，一樣讓它能開圖；股票名稱交給K線圖那邊用真實資料補上。
  if (/^[0-9]{4,6}[A-Z]?$/i.test(q)) return { code: q.toUpperCase(), name: q.toUpperCase() };
  return null;
}

let currentTab = 'strong'; // 'strong' | 'weak'
let lastData = null;

function render(){
  const app = document.getElementById('app');
  if (!lastData) return;

  const groups = lastData.groups;
  const total = groups.length;
  const strongCount = groups.filter(g => g.avgChange > 0).length;
  const weakCount = total - strongCount;

  const rankedDesc = groups.slice().sort((a,b) => b.avgChange - a.avgChange); // 強→弱
  const rankedAsc = groups.slice().sort((a,b) => a.avgChange - b.avgChange);  // 弱→強

  const isStrong = currentTab === 'strong';
  const side6 = isStrong ? rankedDesc.slice(0, 6) : rankedAsc.slice(0, 6);
  const leftTitle = isStrong ? '漲幅前六大族群' : '跌幅前六大族群';
  const rankLabel = isStrong ? '強' : '弱';

  const side6Html = side6.map((g, idx) =>
    '<div class="top6-card" data-group="' + g.name + '" tabindex="0" role="button">' +
      '<div class="top6-head"><span class="badge">' + (idx+1) + '</span><span class="top6-name">' + g.name + '</span></div>' +
      '<div class="top6-chg ' + dirClass(g.avgChange) + '">' + fmt(g.avgChange) + '%</div>' +
    '</div>'
  ).join('');

  const sideGroupsHtml = side6.map((g, idx) => {
    const sortedStocks = g.stocks
      .filter(s => s.price !== null)
      .slice()
      .sort((a,b) => isStrong ? (b.changePercent - a.changePercent) : (a.changePercent - b.changePercent));
    const topStocks = sortedStocks.slice(0, 3);
    const stocksHtml = topStocks.length
      ? STOCK_COL_LABELS_HTML + topStocks.map(s => {
          const price = getBasePrice(s.code);
          const prevClose = price / (1 + s.changePercent / 100);
          const changeAmt = price - prevClose;
          return '<div class="stock-row" data-code="' + s.code + '" data-name="' + s.name + '" tabindex="0" role="button">' +
            '<div class="srow-left"><span class="scode">' + s.code + '</span><span class="sname">' + s.name + '</span></div>' +
            stockValueColsHtml(price, changeAmt, s.changePercent) +
          '</div>';
        }).join('')
      : '<div class="stock-row"><span class="flat">目前無資料</span></div>';

    return '<div class="top-group-col">' +
      '<div class="top-group-head" data-group="' + g.name + '" tabindex="0" role="button"><div><span class="top-group-rank">第' + (idx+1) + rankLabel + '</span>' +
      '<span class="top-group-name">' + g.name + '</span></div>' +
      '<div class="top-group-chg ' + dirClass(g.avgChange) + '">' + fmt(g.avgChange) + '%</div></div>' +
      stocksHtml +
    '</div>';
  }).join('');

  // 強勢/弱勢族群統計移到強勢/弱勢分頁正上方（2026-09-24 使用者），不再跟著#app一起
  // 重畫在「各族群前三強個股」標題旁邊——獨立更新到#groupStatBar這個固定位置。
  const statBarEl = document.getElementById('groupStatBar');
  if (statBarEl){
    statBarEl.innerHTML =
      '<div class="stat-bar">' +
        '<div class="stat-item"><div class="stat-num up">' + strongCount + ' / ' + total + '</div><div class="stat-label">強勢族群</div></div>' +
        '<div class="stat-item"><div class="stat-num down">' + weakCount + ' / ' + total + '</div><div class="stat-label">弱勢族群</div></div>' +
      '</div>';
  }
  app.innerHTML =
    '<div class="layout">' +
      '<div class="col-left">' +
        '<div class="section-title">' + leftTitle + '</div>' +
        '<div class="top6-grid">' + side6Html + '</div>' +
      '</div>' +
      '<div class="col-right">' +
        '<div class="section-head"><div class="section-title">各族群前三' + rankLabel + '個股</div></div>' +
        '<div class="top-groups-row">' + sideGroupsHtml + '</div>' +
      '</div>' +
    '</div>';
  // #updatedAt文字由refresh()統一負責(要能反映抓資料成功/失敗、是否過期)，
  // 這裡不再重複覆蓋——舊版這裡不管資料是真的還是demo都硬寫死「模擬資料」，
  // 本身就是誤導。
}

let lastDataFetchedAt = null;
// 之前抓失敗時只要lastData還有舊資料就整個靜默吞掉，畫面看起來像正常
// 在動、其實股價/漲跌早就凍結在上一次成功抓到的那筆——使用者根本沒有
// 辦法從畫面上分辨「現在真的沒變」跟「其實已經抓不到新資料」。改成
// 不論成功失敗都更新#updatedAt，抓失敗且已經超過~2個輪詢週期沒成功時
// 明確標示資料可能過期、以及最後一次真的成功更新是什麼時候。
const STALE_WARNING_MS = 40000;

async function refresh(){
  try {
    const res = await fetch('/api/groups');
    const data = await res.json();
    if (!data || !Array.isArray(data.groups)) throw new Error('bad payload');
    lastData = data;
    lastDataFetchedAt = new Date();
  } catch (e) {
    if (!lastData) lastData = buildMockData();
  }
  const updatedEl = document.getElementById('updatedAt');
  if (updatedEl){
    if (!lastDataFetchedAt){
      updatedEl.textContent = '⚠ 尚未成功取得即時報價';
    } else if (Date.now() - lastDataFetchedAt.getTime() > STALE_WARNING_MS){
      updatedEl.textContent = '⚠ 報價可能已過期（最後成功更新於 ' + lastDataFetchedAt.toLocaleTimeString('zh-TW') + '）';
    } else {
      updatedEl.textContent = '報價更新於 ' + lastDataFetchedAt.toLocaleTimeString('zh-TW');
    }
  }
  render();
  await renderOtcStrengthWidget();
  if (openGroupName && !document.getElementById('groupModal').hidden) openGroupDetail(openGroupName);
}

document.getElementById('tabStrong').addEventListener('click', () => {
  currentTab = 'strong';
  document.getElementById('tabStrong').classList.add('active');
  document.getElementById('tabWeak').classList.remove('active');
  render();
});
document.getElementById('tabWeak').addEventListener('click', () => {
  currentTab = 'weak';
  document.getElementById('tabWeak').classList.add('active');
  document.getElementById('tabStrong').classList.remove('active');
  render();
});

document.getElementById('app').addEventListener('click', (e) => {
  const row = e.target.closest('.stock-row[data-code]');
  if (row){ openStockChart(row.dataset.code, row.dataset.name); return; }
  const groupEl = e.target.closest('[data-group]');
  if (groupEl) openGroupDetail(groupEl.dataset.group);
});
document.getElementById('app').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const row = e.target.closest('.stock-row[data-code]');
  if (row){ e.preventDefault(); openStockChart(row.dataset.code, row.dataset.name); return; }
  const groupEl = e.target.closest('[data-group]');
  if (groupEl){ e.preventDefault(); openGroupDetail(groupEl.dataset.group); }
});
document.getElementById('gmList').addEventListener('click', (e) => {
  const row = e.target.closest('.stock-row[data-code]');
  if (row) openStockChart(row.dataset.code, row.dataset.name);
});
document.getElementById('gmList').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const row = e.target.closest('.stock-row[data-code]');
  if (row){ e.preventDefault(); openStockChart(row.dataset.code, row.dataset.name); }
});
document.getElementById('gmClose').addEventListener('click', closeGroupDetail);
document.getElementById('groupModal').addEventListener('click', (e) => {
  if (e.target.id === 'groupModal') closeGroupDetail();
});
document.getElementById('cmClose').addEventListener('click', closeStockChart);
document.getElementById('cmMax').addEventListener('click', toggleFullscreen);
document.getElementById('cmSettingsToggle').addEventListener('click', () => {
  const panel = document.getElementById('maControls');
  const btn = document.getElementById('cmSettingsToggle');
  panel.hidden = !panel.hidden;
  btn.classList.toggle('on', !panel.hidden);
  btn.setAttribute('aria-pressed', String(!panel.hidden));
});
document.getElementById('macdToggle').addEventListener('click', () => {
  currentChart.macdOn = !currentChart.macdOn;
  const btn = document.getElementById('macdToggle');
  btn.textContent = currentChart.macdOn ? '關閉' : '開啟';
  btn.classList.toggle('on', currentChart.macdOn);
  btn.setAttribute('aria-pressed', String(currentChart.macdOn));
  drawMacdPanel();
});
document.getElementById('chartModal').addEventListener('click', (e) => {
  if (e.target.id === 'chartModal') closeStockChart();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (chartWindows.size && closeTopChartWindow()) return;
  if (!document.getElementById('chartModal').hidden) closeStockChart();
  else if (!document.getElementById('groupModal').hidden) closeGroupDetail();
  else if (!document.getElementById('signalModal').hidden) closeSignalCenter();
});
document.getElementById('chartTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.chart-tab');
  if (btn) switchTimeframe(btn.dataset.tf);
});
window.addEventListener('resize', redrawAll);
initWindowChrome();

function triggerHomeStockSearch(){
  const input = document.getElementById('stockSearchInput');
  const hint = document.getElementById('stockSearchHint');
  const s = findStockByQuery(input.value);
  if (s){
    hint.hidden = true;
    openStockChart(s.code, s.name);
  } else {
    hint.hidden = false;
  }
}
document.getElementById('stockSearchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') triggerHomeStockSearch();
});
document.getElementById('stockSearchGoBtn').addEventListener('click', triggerHomeStockSearch);
function triggerChartQuickSearch(){
  const input = document.getElementById('cmQuickSearch');
  const s = findStockByQuery(input.value);
  if (s){
    input.value = '';
    openStockChart(s.code, s.name, currentChart.tf);
  } else {
    showToast('查無此股票');
  }
}
document.getElementById('cmQuickSearch').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') triggerChartQuickSearch();
});
document.getElementById('cmQuickSearchGoBtn').addEventListener('click', triggerChartQuickSearch);

document.getElementById('signalBadgeBtn').addEventListener('click', openSignalCenter);
document.getElementById('alertToggle').addEventListener('click', () => {
  alertsEnabled = !alertsEnabled;
  const btn = document.getElementById('alertToggle');
  btn.textContent = alertsEnabled ? '提醒開啟' : '提醒關閉';
  btn.classList.toggle('on', alertsEnabled);
  btn.setAttribute('aria-pressed', String(alertsEnabled));
});
document.querySelectorAll('.toolbar-bottom .tb-btn').forEach((btn) => {
  btn.addEventListener('click', () => showToast('「' + btn.dataset.label + '」功能開發中'));
});
document.getElementById('signalTabsBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.signal-tab');
  if (!btn) return;
  signalCenterState.activeTab = btn.dataset.kind;
  renderSignalCenter();
});
document.getElementById('signalBody').addEventListener('click', (e) => {
  const filterBtn = e.target.closest('.combo-filter-btn');
  if (filterBtn){
    const f = filterBtn.dataset.filter;
    groupCombinedBoardFilter = groupCombinedBoardFilter === f ? null : f;
    renderSignalCenter();
    return;
  }
  const dayBtn = e.target.closest('.hf-day-btn');
  if (dayBtn){
    if (dayBtn.disabled) return;
    holderDayOffset = Number(dayBtn.dataset.offset) || 0;
    renderSignalCenter();
    return;
  }
  const hfBtn = e.target.closest('.hf-filter-btn');
  if (hfBtn){
    const f = hfBtn.dataset.filter;
    groupHolderForceFilter = groupHolderForceFilter === f ? null : f;
    renderSignalCenter();
    return;
  }
  const r333Btn = e.target.closest('.race333-filter-btn');
  if (r333Btn){
    const f = r333Btn.dataset.filter;
    race333HolderFilter = race333HolderFilter === f ? null : f;
    renderSignalCenter();
    return;
  }
  const row = e.target.closest('.signal-row[data-code], .race-row[data-code], .combo-row[data-code]');
  if (!row) return;
  // 使用者要求：K 線圖關掉之後訊號中心要還在，不用再去右上角重開。
  // 所以不關視窗，只讓它退到 K 線圖後面；closeStockChart 會把它拉回來。
  if (!useFloatingCharts()) document.getElementById('signalModal').classList.add('behind-chart');
  openStockChart(row.dataset.code, row.dataset.name);
});
document.getElementById('smClose').addEventListener('click', closeSignalCenter);
document.getElementById('smCollapse').addEventListener('click', toggleSignalCollapse);
document.getElementById('smRecenter').addEventListener('click', recenterSignalModal);
document.getElementById('smMoveWindow').addEventListener('click', openSignalWindow);
document.getElementById('smHelp').addEventListener('click', () => {
  const help = document.getElementById('signalHelp');
  help.hidden = !help.hidden;
});
document.getElementById('signalModal').addEventListener('click', (e) => {
  if (e.target.id === 'signalModal') closeSignalCenter();
});

if (CHART_WINDOW_MODE){
  // 內嵌在浮動視窗裡、或「另開視窗」的圖表模式：只顯示這一檔的 K 線圖，不跑儀表板與訊號輪詢。
  const chartParams = new URLSearchParams(location.search);
  const embedCode = (chartParams.get('code') || '').trim().toUpperCase();
  const embedName = chartParams.get('name') || lookupStockName(embedCode) || embedCode;
  document.body.classList.add('chart-window-mode');
  document.title = embedCode + ' ' + embedName + ' K線圖';
  refresh(); // 抓一次報價給圖表用，不設輪詢
  refreshStockFlags(); // 可融資／可融券／當沖／股期／處置 那一排
  openStockChart(embedCode, embedName, chartParams.get('tf') || undefined);
  document.getElementById('chartModal').classList.add('fullscreen');
  if (window.parent !== window){
    document.addEventListener('pointerdown', () => window.parent.postMessage({ type: 'hanstockChartFocus' }, location.origin), true);
  }
} else {
  refreshSignalData();
  refreshStockFlags();
  setInterval(refreshStockFlags, 300000);
  refreshGroupDailyChanges(true);
  setInterval(() => refreshGroupDailyChanges(false), 600000);
  renderOtcStrengthWidget();
  setInterval(renderOtcStrengthWidget, 60000);
  if (location.hash === '#signal-center'){
    document.body.classList.add('signal-window-mode');
  }
  initSignalWindowChrome();
  openSignalCenter(); // 盤中訊號中心預設常駐顯示，不用點才出現；要隱藏就按✕，要收合成小條就按－

  refresh();
  setInterval(refresh, 15000);
  // 訊號要快：每5秒獨立輪詢(Worker端這幾個API也不快取)，不跟/api/groups綁在一起等。
  setInterval(refreshSignalData, 5000);
}
</script>

</body>
</html>`;

const CHUNK_SIZE = 80;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchQuoteChunk(codes) {
  const exCh = codes.flatMap((c) => [`tse_${c}.tw`, `otc_${c}.tw`]).join("|");
  const url = `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${exCh}&json=1&delay=0`;
  const resp = await fetch(url, {
    headers: {
      Referer: "https://mis.twse.com.tw/stock/index.jsp",
      "User-Agent": "Mozilla/5.0 (compatible; tw-groups/1.0)"
    }
  });
  if (!resp.ok) throw new Error(`TWSE API 回應錯誤: ${resp.status}`);
  const data = await resp.json();
  return data.msgArray || [];
}

async function fetchQuotes(codes) {
  const quotes = {};
  for (const code of codes) quotes[code] = { price: null, change: 0, changePercent: 0 };
  const chunks = chunk(codes, CHUNK_SIZE);
  const results = await Promise.all(chunks.map((c) => fetchQuoteChunk(c)));
  let quoteDate = "", quoteTime = "";
  for (const msgArray of results) {
    for (const item of msgArray) {
      const code = item.c;
      // d／t＝這筆報價的日期（YYYYMMDD）／時間（HH:MM:SS）；取最新的一筆，讓頁面知道行情是不是今天盤中的
      // （醞釀／發動用來把盤中累積量換算成全天預估量；週末、假日行情停在上一個交易日就不換算）。
      const d = String(item.d || ""), t = String(item.t || "");
      if (/^d{8}$/.test(d) && (d > quoteDate || (d === quoteDate && t > quoteTime))) { quoteDate = d; quoteTime = t; }
      if (!code || !(code in quotes)) continue;
      const price = parseFloat(item.z);
      const prevClose = parseFloat(item.y);
      // z 是「這一盤」的成交價，這一盤沒成交就是 "-"；漲停鎖死的股票常常好幾盤沒成交，
      // 以前退回開盤價會讓漲停的股票一直顯示開盤那個漲幅（2026-09-23 尼克森漲停卻顯示 +4.79%）。
      // 沒成交時改用委買／委賣推算：漲停鎖死只剩委買（＝漲停價）、跌停鎖死只剩委賣（＝跌停價）、
      // 兩邊都有就取中價；開盤前 b/a 也都是 "-" 時才退回開盤價／昨收。
      const bids = String(item.b || "").split("_").map((v) => parseFloat(v)).filter(Number.isFinite);
      const asks = String(item.a || "").split("_").map((v) => parseFloat(v)).filter(Number.isFinite);
      const quotePrice = bids.length && !asks.length ? bids[0]
        : asks.length && !bids.length ? asks[0]
        : bids.length && asks.length ? (bids[0] + asks[0]) / 2
        : NaN;
      const fallbackPrice = parseFloat(item.o) || parseFloat(item.h) || parseFloat(item.l) || prevClose;
      const finalPrice = Number.isFinite(price) ? price : Number.isFinite(quotePrice) ? quotePrice : fallbackPrice;
      if (Number.isFinite(finalPrice) && Number.isFinite(prevClose) && prevClose > 0) {
        // u／w＝當天漲停價／跌停價、v＝累積成交量（張）：盤中333 用來排除已經漲停買不到的股票、
        // 跌停放不到空的股票，以及成交量太小的冷門股。
        const limitUpPrice = parseFloat(item.u);
        const limitDownPrice = parseFloat(item.w);
        const volume = parseInt(item.v, 10);
        quotes[code] = {
          price: finalPrice,
          change: finalPrice - prevClose,
          changePercent: (finalPrice - prevClose) / prevClose * 100,
          limitUp: Number.isFinite(limitUpPrice) && finalPrice >= limitUpPrice - 1e-6,
          limitDown: Number.isFinite(limitDownPrice) && finalPrice <= limitDownPrice + 1e-6,
          volume: Number.isFinite(volume) ? volume : null
        };
      }
    }
  }
  Object.defineProperty(quotes, "__meta", {
    value: { quoteDate: quoteDate ? quoteDate.slice(0, 4) + "-" + quoteDate.slice(4, 6) + "-" + quoteDate.slice(6, 8) : null, quoteTime: quoteTime || null },
    enumerable: false
  });
  return quotes;
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
    cf: live ? { cacheTtl: 0, cacheEverything: false } : { cacheTtl: cacheSeconds, cacheEverything: true }
  });
  const body = await resp.text();
  return new Response(body, {
    status: resp.status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": live ? "no-store" : "public, max-age=" + cacheSeconds
    }
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
    if (url.pathname === "/api/brew-launch") {
      try {
        // 醞釀／發動選股：箱子、均線、5日均量等都是日K算的，收盤後才會變，快取 10 分鐘；發動用即時價由前端判斷。
        return await proxyHanstockBars("/api/hub/brew-launch", 600);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), stocks: {} }, { status: 502 });
      }
    }
    if (url.pathname === "/api/disposition-risk") {
      try {
        // 處置股預測：收盤後背景收集器算好才會變，快取 10 分鐘。
        return await proxyHanstockBars("/api/hub/disposition-risk" + url.search, 600);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), results: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/disposition-volume-watch") {
      try {
        // 第九/十款差距預測即時觀察版：門檻收盤後算好，但比對用的成交量盡量即時，不快取。
        return await proxyHanstockBars("/api/hub/disposition-risk/volume-watch" + url.search, 0);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), results: [] }, { status: 502 });
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
    if (url.pathname === "/api/groups") {
      try {
        const quotes = await fetchQuotes(ALL_CODES);
        const groups = GROUPS.map((g) => {
          const stocks = g.stocks.map((s) => ({
            code: s.code,
            name: s.name,
            price: quotes[s.code]?.price ?? null,
            changePercent: quotes[s.code]?.changePercent ?? 0,
            limitUp: quotes[s.code]?.limitUp ?? false,
            limitDown: quotes[s.code]?.limitDown ?? false,
            volume: quotes[s.code]?.volume ?? null
          }));
          const valid = stocks.filter((s) => s.price !== null);
          const avgChange = valid.length ? valid.reduce((sum, s) => sum + s.changePercent, 0) / valid.length : 0;
          return { name: g.name, avgChange, stocks };
        });
        const meta = quotes.__meta || {};
        return Response.json({ groups, quoteDate: meta.quoteDate || null, quoteTime: meta.quoteTime || null });
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
