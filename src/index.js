const GROUPS = [
  {"name":"被動元件","stocks":[{"code":"6862","name":"三集瑞"},{"code":"6155","name":"鈞寶"},{"code":"3090","name":"日電貿"},{"code":"4760","name":"勤凱"},{"code":"6821","name":"聯寶"},{"code":"1595","name":"川寶"},{"code":"6449","name":"鈺邦"},{"code":"2478","name":"大毅"},{"code":"8043","name":"蜜望實"},{"code":"6175","name":"立敦"},{"code":"3236","name":"千如"},{"code":"2472","name":"立隆電"},{"code":"6834","name":"天二科技"},{"code":"6127","name":"九豪"},{"code":"8042","name":"金山電"},{"code":"2327","name":"國巨"},{"code":"2375","name":"凱美"},{"code":"3026","name":"禾伸堂"},{"code":"2492","name":"華新科"},{"code":"5328","name":"華容"},{"code":"6173","name":"信昌電"},{"code":"3624","name":"光頡"},{"code":"3357","name":"台慶科"},{"code":"3537","name":"堡達"},{"code":"2428","name":"興勤"}]},
  {"name":"記憶體","stocks":[{"code":"8271","name":"宇瞻"},{"code":"2344","name":"華邦電"},{"code":"4973","name":"廣穎電通"},{"code":"3260","name":"威剛"},{"code":"8088","name":"品安"},{"code":"3135","name":"凌航"},{"code":"4967","name":"十銓"},{"code":"2337","name":"旺宏"},{"code":"6265","name":"方土苳"},{"code":"2451","name":"創見"},{"code":"5289","name":"宜鼎"},{"code":"8110","name":"華東"},{"code":"5351","name":"鈺創"},{"code":"3006","name":"晶豪科"},{"code":"3060","name":"銘異"},{"code":"8299","name":"群聯"},{"code":"2408","name":"南亞科"},{"code":"8131","name":"福懋科"},{"code":"6770","name":"力積電"},{"code":"4919","name":"新唐"},{"code":"8112","name":"至上"},{"code":"8150","name":"南茂"}]},
  {"name":"矽光子","stocks":[{"code":"8111","name":"立碁"},{"code":"4979","name":"華星光"},{"code":"6218","name":"豪勉"},{"code":"4977","name":"眾達-KY"},{"code":"4903","name":"聯光通"},{"code":"3234","name":"光環"},{"code":"6530","name":"創威"},{"code":"6715","name":"嘉基"},{"code":"3363","name":"上詮"},{"code":"8089","name":"康全電訊"},{"code":"3025","name":"星通"},{"code":"6451","name":"訊芯-KY"},{"code":"4909","name":"新復興"},{"code":"3447","name":"展達"},{"code":"4908","name":"前鼎"},{"code":"4971","name":"IET-KY"},{"code":"6830","name":"汎鑫"},{"code":"3081","name":"聯亞"},{"code":"4991","name":"環宇-KY"},{"code":"6442","name":"光聖"},{"code":"3163","name":"波若威"},{"code":"3450","name":"聯鈞"},{"code":"6426","name":"統新"},{"code":"6197","name":"佳必琪"},{"code":"4949","name":"有成精密"}]},
  {"name":"摺疊手機","stocks":[{"code":"3548","name":"兆利"},{"code":"1582","name":"信錦"},{"code":"6805","name":"富世達"},{"code":"3376","name":"新日興"}]},
  {"name":"矽晶圓","stocks":[{"code":"5483","name":"中美晶"},{"code":"2342","name":"茂矽"},{"code":"3707","name":"漢磊"},{"code":"3016","name":"嘉晶"},{"code":"6488","name":"環球晶"},{"code":"6182","name":"合晶"},{"code":"3532","name":"台勝科"}]},
  {"name":"D電腦","stocks":[{"code":"6166","name":"凌華"},{"code":"6206","name":"飛捷"},{"code":"3022","name":"威強電"},{"code":"3479","name":"安勤"},{"code":"4916","name":"事欣科"},{"code":"6414","name":"樺漢"},{"code":"3213","name":"茂訊"},{"code":"2395","name":"研華"},{"code":"3594","name":"磐儀"},{"code":"2364","name":"倫飛"}]},
  {"name":"化學","stocks":[{"code":"4716","name":"大立"},{"code":"4711","name":"永純"},{"code":"1708","name":"東鹼"},{"code":"1735","name":"日勝化"},{"code":"1717","name":"長興"},{"code":"1727","name":"中華化"},{"code":"1721","name":"三晃"},{"code":"3430","name":"奇鈺科"},{"code":"1711","name":"永光"},{"code":"4755","name":"三福化"},{"code":"4764","name":"雙鍵"}]},
  {"name":"軍工","stocks":[{"code":"2634","name":"漢翔"},{"code":"4541","name":"晟田"},{"code":"8383","name":"千附"},{"code":"6928","name":"新普科技"},{"code":"8222","name":"寶一"},{"code":"2630","name":"亞航"},{"code":"6753","name":"龍德造船"},{"code":"2231","name":"為升"},{"code":"4572","name":"駐龍"},{"code":"5371","name":"中光電"},{"code":"7402","name":"邰錩"},{"code":"4916","name":"事欣科"},{"code":"6829","name":"千附精密"},{"code":"2645","name":"長榮航太"},{"code":"2429","name":"銘旺科"},{"code":"1584","name":"精剛"},{"code":"8033","name":"雷虎"},{"code":"3230","name":"錦明"},{"code":"1810","name":"和成"},{"code":"6477","name":"安集"}]},
  {"name":"設備股","stocks":[{"code":"8028","name":"昇陽半導體"},{"code":"6438","name":"迅得"},{"code":"1785","name":"光洋科"},{"code":"5443","name":"均豪"},{"code":"2467","name":"志聖"},{"code":"6640","name":"均華"},{"code":"3131","name":"弘塑"},{"code":"3583","name":"辛耘"},{"code":"3455","name":"由田"},{"code":"8064","name":"東捷"},{"code":"6187","name":"萬潤"},{"code":"6207","name":"雷科"}]},
  {"name":"玻璃基板","stocks":[{"code":"3149","name":"正達"},{"code":"3673","name":"TPK-KY"},{"code":"8027","name":"鎧勝"},{"code":"8064","name":"東捷"},{"code":"6207","name":"雷科"}]},
  {"name":"重電","stocks":[{"code":"1519","name":"華城"},{"code":"1513","name":"中興電"},{"code":"1529","name":"樂事綠能"},{"code":"1514","name":"亞力"},{"code":"1503","name":"士電"}]},
  {"name":"神盾","stocks":[{"code":"6243","name":"迅杰"},{"code":"6462","name":"神盾"},{"code":"8054","name":"安國"},{"code":"6684","name":"安格"},{"code":"6695","name":"芯鼎"},{"code":"3041","name":"揚智"}]},
  {"name":"小電腦","stocks":[{"code":"6558","name":"興能高"},{"code":"3323","name":"加百裕"},{"code":"1569","name":"濱川"},{"code":"3211","name":"順達"},{"code":"6672","name":"騰輝電子-KY"},{"code":"6781","name":"AES-KY"},{"code":"5309","name":"系統電"},{"code":"4931","name":"新盛力"}]},
  {"name":"PCB","stocks":[{"code":"4958","name":"臻鼎-KY"},{"code":"3037","name":"欣興"},{"code":"3189","name":"景碩"},{"code":"8046","name":"南電"},{"code":"8155","name":"博智"}]},
  {"name":"小電組","stocks":[{"code":"6234","name":"高僑"},{"code":"6191","name":"精成科"},{"code":"1717","name":"長興"},{"code":"2368","name":"金像電"},{"code":"8074","name":"鋐橡"},{"code":"3715","name":"定穎投控"},{"code":"6290","name":"良維"},{"code":"5340","name":"建榮"},{"code":"2316","name":"楠梓電"},{"code":"2313","name":"華通"},{"code":"5498","name":"凱崴"},{"code":"1802","name":"台玻"},{"code":"1815","name":"富喬"},{"code":"6274","name":"台燿"},{"code":"2383","name":"台光電"},{"code":"4989","name":"榮科"},{"code":"8021","name":"尖點"},{"code":"5475","name":"德宏"},{"code":"8358","name":"金居"},{"code":"6213","name":"聯茂"},{"code":"5439","name":"高技"}]},
  {"name":"特化","stocks":[{"code":"4763","name":"材料-KY"},{"code":"4768","name":"晶呈科技"},{"code":"4770","name":"上品"},{"code":"4772","name":"台特化"},{"code":"4722","name":"國精化"}]},
  {"name":"散熱","stocks":[{"code":"2241","name":"艾姆勒"},{"code":"3324","name":"雙鴻"},{"code":"3483","name":"力致"},{"code":"6230","name":"尼得科超眾"},{"code":"6125","name":"廣運"},{"code":"3017","name":"奇鋐"},{"code":"2421","name":"建準"},{"code":"3338","name":"泰碩"},{"code":"8996","name":"高力"},{"code":"2233","name":"宇隆"}]},
  {"name":"PA","stocks":[{"code":"2455","name":"全新"},{"code":"8086","name":"宏捷科"},{"code":"3105","name":"穩懋"}]},
  {"name":"二極體","stocks":[{"code":"5299","name":"傑力"},{"code":"7712","name":"博盛半導體"},{"code":"2481","name":"強茂"},{"code":"8255","name":"朋程"},{"code":"3317","name":"尼克森"},{"code":"5425","name":"台半"},{"code":"6435","name":"大中"},{"code":"8261","name":"富鼎"},{"code":"3675","name":"德微"}]},
  {"name":"石英","stocks":[{"code":"3221","name":"台嘉碩"},{"code":"2484","name":"希華"},{"code":"3042","name":"晶技"},{"code":"8289","name":"泰藝"},{"code":"8182","name":"加高"}]},
  {"name":"探針卡","stocks":[{"code":"7734","name":"印能科技"},{"code":"6683","name":"雍智科技"},{"code":"6515","name":"穎崴"},{"code":"6510","name":"精測"},{"code":"6223","name":"旺矽"},{"code":"6217","name":"中探針"}]},
  {"name":"低軌衛星","stocks":[{"code":"6485","name":"點序"},{"code":"3138","name":"耀登"},{"code":"2485","name":"兆赫"},{"code":"6285","name":"啟碁"},{"code":"2413","name":"環科"},{"code":"2367","name":"燿華"},{"code":"7717","name":"萊德光電"},{"code":"2313","name":"華通"},{"code":"3491","name":"昇達科"}]},
  {"name":"工具機","stocks":[{"code":"4583","name":"台灣精銳"},{"code":"4571","name":"鼎興-KY"},{"code":"2049","name":"上銀"},{"code":"1539","name":"巨庭"},{"code":"4576","name":"大銀微系統"},{"code":"1540","name":"喬福"},{"code":"6609","name":"瓦特科"},{"code":"1597","name":"直得"},{"code":"4561","name":"健椿"},{"code":"4540","name":"全球傳動"},{"code":"4510","name":"高鋒"},{"code":"4533","name":"協易機"},{"code":"2233","name":"宇隆"},{"code":"4526","name":"東台"}]},
  {"name":"機器人","stocks":[{"code":"2359","name":"所羅門"},{"code":"2250","name":"IKKA-KY"},{"code":"2365","name":"昆盈"},{"code":"8374","name":"羅昇"},{"code":"6215","name":"和椿"},{"code":"6922","name":"宸曜"},{"code":"2464","name":"盟立"},{"code":"2453","name":"凌群"},{"code":"1536","name":"和大"},{"code":"5392","name":"能率"},{"code":"5484","name":"慧友"},{"code":"6188","name":"廣明"},{"code":"4562","name":"穎漢"},{"code":"8234","name":"新漢"},{"code":"8071","name":"能率網通"},{"code":"3048","name":"益登"},{"code":"2374","name":"佳能"},{"code":"3379","name":"彬台"}]},
  {"name":"光電","stocks":[{"code":"3714","name":"富采"},{"code":"2426","name":"鼎元"},{"code":"6426","name":"統新"},{"code":"5244","name":"弘凱"},{"code":"6419","name":"京晨科"},{"code":"3437","name":"榮創"},{"code":"2393","name":"億光"},{"code":"4956","name":"光鋐"},{"code":"3031","name":"佰鴻"},{"code":"8240","name":"華宏"},{"code":"3673","name":"TPK-KY"},{"code":"6706","name":"惠特"},{"code":"5234","name":"達興材料"},{"code":"3339","name":"泰谷"},{"code":"4960","name":"誠美材"},{"code":"6405","name":"悅城"},{"code":"2489","name":"瑞軒"},{"code":"4949","name":"有成精密"},{"code":"2486","name":"一詮"}]},
  {"name":"功率半導體","stocks":[{"code":"5425","name":"台半"},{"code":"2481","name":"強茂"},{"code":"6525","name":"捷敏-KY"},{"code":"8261","name":"富鼎"},{"code":"3016","name":"嘉晶"},{"code":"3105","name":"穩懋"},{"code":"3707","name":"漢磊"}]},
  {"name":"光學鏡頭","stocks":[{"code":"6209","name":"今國光"},{"code":"2374","name":"佳能"},{"code":"6668","name":"中揚光"},{"code":"3019","name":"亞光"},{"code":"3630","name":"新鉅科"},{"code":"3504","name":"揚明光"},{"code":"3362","name":"先進光"},{"code":"4974","name":"亞泰"},{"code":"6278","name":"台表科"},{"code":"3406","name":"玉晶光"},{"code":"3441","name":"聯一光"},{"code":"4976","name":"佳凌"},{"code":"3008","name":"大立光"}]},
  {"name":"上曜","stocks":[{"code":"1316","name":"上曜"},{"code":"4303","name":"信立"},{"code":"4714","name":"永捷"},{"code":"5314","name":"世紀"},{"code":"6418","name":"詠昇"},{"code":"3313","name":"斐成"}]},
  {"name":"金融股","stocks":[{"code":"2886","name":"兆豐金"},{"code":"2884","name":"玉山金"},{"code":"2885","name":"元大金"},{"code":"2838","name":"聯邦銀"},{"code":"2812","name":"台中銀"},{"code":"2881","name":"富邦金"},{"code":"2882","name":"國泰金"},{"code":"2890","name":"永豐金"},{"code":"2891","name":"中信金"},{"code":"2892","name":"第一金"},{"code":"2883","name":"凱基金"},{"code":"2887","name":"台新新光金"},{"code":"2889","name":"國票金"},{"code":"6005","name":"群益證"},{"code":"2801","name":"彰銀"},{"code":"2816","name":"旺旺保"},{"code":"2820","name":"華票"},{"code":"2832","name":"台產"},{"code":"2834","name":"臺企銀"},{"code":"2836","name":"高雄銀"},{"code":"2845","name":"遠東銀"},{"code":"2849","name":"安泰銀"},{"code":"2850","name":"新產"},{"code":"2851","name":"中再保"},{"code":"2852","name":"第一保"},{"code":"2855","name":"統一證"},{"code":"2867","name":"三商壽"},{"code":"2880","name":"華南金"},{"code":"2897","name":"王道銀行"},{"code":"5880","name":"合庫金"},{"code":"5876","name":"上海商銀"},{"code":"6024","name":"群益期"},{"code":"5864","name":"致和證"},{"code":"5878","name":"台名"},{"code":"6015","name":"宏遠證"},{"code":"6016","name":"康和證"},{"code":"6020","name":"大展證"},{"code":"6021","name":"美好證"},{"code":"6023","name":"元大期"}]},
  {"name":"航運","stocks":[{"code":"2637","name":"慧洋-KY"},{"code":"2615","name":"萬海"},{"code":"2609","name":"陽明"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2603","name":"長榮"},{"code":"2641","name":"正德"},{"code":"2605","name":"新興"},{"code":"2613","name":"中櫃"}]},
  {"name":"空運","stocks":[{"code":"6757","name":"台灣虎航"},{"code":"2610","name":"華航"},{"code":"2618","name":"長榮航"}]},
  {"name":"散裝","stocks":[{"code":"2605","name":"新興"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2641","name":"正德"},{"code":"2637","name":"慧洋-KY"}]},
  {"name":"聯電股","stocks":[{"code":"2363","name":"矽統"},{"code":"2303","name":"聯電"},{"code":"5347","name":"世界"},{"code":"8039","name":"台虹"}]},
  {"name":"鴻家軍","stocks":[{"code":"3062","name":"建漢"},{"code":"3498","name":"陽程"},{"code":"5243","name":"乙盛-KY"},{"code":"3092","name":"鴻碩"},{"code":"2328","name":"廣宇"},{"code":"2354","name":"鴻準"},{"code":"2317","name":"鴻海"}]},
  {"name":"台塑四寶","stocks":[{"code":"6505","name":"台塑化"},{"code":"1301","name":"台塑"},{"code":"1303","name":"南亞"},{"code":"1326","name":"台化"}]},
  {"name":"AI","stocks":[{"code":"3231","name":"緯創"},{"code":"2356","name":"英業達"},{"code":"2376","name":"技嘉"},{"code":"2382","name":"廣達"},{"code":"2377","name":"微星"},{"code":"2357","name":"華碩"}]},
  {"name":"彼彼","stocks":[{"code":"3379","name":"彬台"},{"code":"3022","name":"威強電"},{"code":"1569","name":"濱川"},{"code":"2328","name":"廣宇"}]},
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
  .draft-badge{display:inline-flex;align-items:center;gap:6px;margin:10px 16px 0;padding:5px 10px;background:var(--panel-2);border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:11px;font-weight:700;letter-spacing:.02em;}
  .draft-badge .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0;}
  .updated{color:var(--muted);font-size:11px;text-align:center;padding:8px 0 28px;}
  .loading{color:var(--muted);text-align:center;padding:40px 0;}

  .layout{display:flex;gap:16px;padding:12px 16px 40px;align-items:flex-start;flex-wrap:wrap;}
  .col-left{flex:1 1 320px;min-width:280px;}
  .col-right{flex:3 1 620px;min-width:320px;}
  .section-title{font-size:14px;font-weight:800;margin:4px 0 10px;color:var(--text);}

  /* 強勢／弱勢 分頁與統計 */
  .tabs{display:flex;gap:24px;padding:16px 16px 0;}
  .tab-btn{background:none;border:none;color:var(--muted);font-size:16px;font-weight:800;padding:0 0 10px;cursor:pointer;border-bottom:3px solid transparent;font-family:inherit;transition:color .15s ease,border-color .15s ease;}
  .tab-btn:hover{color:var(--text);}
  .tab-btn:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px;}
  .tab-btn.active.strong{color:var(--up);border-bottom-color:var(--up);}
  .tab-btn.active.weak{color:var(--down);border-bottom-color:var(--down);}
  .stat-bar{display:flex;gap:28px;padding:14px 16px;margin:14px 16px 4px;background:var(--panel);border:1px solid var(--line);border-radius:10px;}
  .stat-item{display:flex;flex-direction:column;align-items:center;flex:1;}
  .stat-num{font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;}
  .stat-label{font-size:12px;color:var(--muted);margin-top:2px;}

  /* 左側：前六大族群 */
  .top6-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
  .top6-card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px;cursor:pointer;transition:background .12s ease;}
  .top6-card:hover{background:var(--panel-2);}
  .top6-card:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  .top6-head{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
  .badge{width:20px;height:20px;border-radius:50%;background:var(--accent);color:#241f1a;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .top6-name{font-weight:800;font-size:14px;}
  .top6-chg{font-size:15px;font-weight:800;font-variant-numeric:tabular-nums;}

  /* 右側：各族群前三強／前三弱個股 */
  .top-groups-row{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;}
  .top-group-col{background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden;}
  .top-group-head{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#4a3d34;cursor:pointer;transition:background .12s ease;}
  .top-group-head:hover{background:#57483d;}
  .top-group-head:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;}

  /* 族群成分股彈窗 */
  .group-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:99;padding:16px;}
  .group-modal-inner{background:var(--bg);border:1px solid var(--line);border-radius:14px;width:100%;max-width:480px;max-height:85vh;overflow-y:auto;padding:14px;box-shadow:0 12px 40px rgba(0,0,0,0.5);}
  .group-modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;position:sticky;top:0;background:var(--bg);padding-bottom:6px;}
  .gm-title{font-weight:800;font-size:16px;}
  .gm-list{display:flex;flex-direction:column;border-top:1px solid var(--line);}
  .gm-list .stock-row{padding:11px 4px;}
  .top-group-rank{font-size:12px;font-weight:800;color:#241f1a;background:var(--accent);border-radius:6px;padding:2px 6px;margin-right:6px;}
  .top-group-name{font-weight:800;font-size:14px;color:var(--text);}
  .top-group-chg{font-size:14px;font-weight:800;font-variant-numeric:tabular-nums;}
  .stock-row{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;border-top:1px solid var(--line);}
  .stock-row .sname{font-weight:700;font-size:13px;}
  .stock-row .scode{color:var(--muted);font-size:11px;margin-left:4px;font-variant-numeric:tabular-nums;}
  .stock-row .schg{font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;}

  .up{color:var(--up);}
  .down{color:var(--down);}
  .flat{color:var(--muted);}

  @media (max-width: 900px){
    .top-groups-row{grid-template-columns:repeat(2, 1fr);}
  }
  @media (max-width: 640px){
    .top-groups-row{grid-template-columns:1fr;}
    .stat-bar{gap:12px;}
  }
  @media (prefers-reduced-motion: reduce){
    *{transition:none!important;}
  }

  /* 個股列（代號在前、名稱在後，含成交價／漲跌） */
  .stock-row{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;border-top:1px solid var(--line);cursor:pointer;transition:background .12s ease;}
  .stock-row:hover{background:rgba(201,169,140,0.08);}
  .stock-row:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;}
  .srow-left{display:flex;align-items:baseline;gap:6px;min-width:0;}
  .srow-left .scode{color:var(--muted);font-size:11px;font-variant-numeric:tabular-nums;flex-shrink:0;}
  .srow-left .sname{font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .srow-right{display:flex;align-items:center;gap:8px;flex-shrink:0;}
  .srow-right span{font-variant-numeric:tabular-nums;text-align:right;}
  .srow-right .spct{width:52px;font-size:13px;font-weight:800;}
  .srow-right .schg{width:50px;font-size:12px;font-weight:700;}
  .srow-right .sprice{width:54px;font-size:12px;font-weight:700;color:var(--text);}
  .stock-col-labels{display:flex;justify-content:space-between;align-items:center;padding:4px 12px 0;}
  .stock-col-labels .srow-right span{color:var(--muted);font-size:10px;font-weight:600;}

  /* K 線圖彈窗 */
  .chart-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:100;}
  .chart-modal-inner{
    position:absolute;background:var(--bg);border:1px solid var(--line);border-radius:14px;
    width:min(1180px,94vw);height:min(800px,88vh);min-width:340px;min-height:400px;
    max-width:98vw;max-height:96vh;overflow:auto;resize:both;padding:14px 14px 24px;
    box-shadow:0 12px 40px rgba(0,0,0,0.5);
  }
  .chart-modal.fullscreen .chart-modal-inner{left:0!important;top:0!important;width:100vw!important;height:100vh!important;max-width:100vw;max-height:100vh;border-radius:0;resize:none;}
  .chart-modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;cursor:move;touch-action:none;}
  .chart-modal-head .cm-actions{cursor:default;}
  .cm-code{font-variant-numeric:tabular-nums;color:var(--muted);font-size:13px;margin-right:8px;}
  .cm-name{font-weight:800;font-size:17px;}
  .cm-data-badge{margin-left:8px;font-size:10px;font-weight:700;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:999px;padding:2px 8px;vertical-align:middle;}
  .cm-actions{display:flex;gap:6px;align-items:center;}
  .cm-quick-search{width:120px;background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:8px;padding:6px 10px;font-size:12px;font-family:inherit;}
  .cm-quick-search:focus{outline:2px solid var(--accent);outline-offset:1px;}
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
  .chart-tooltip{position:absolute;background:var(--panel-2);border:1px solid var(--line);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--text);pointer-events:none;white-space:nowrap;font-variant-numeric:tabular-nums;}

  .ind-panel-block{margin-top:10px;}
  .ind-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;}
  .macd-toggle{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:11px;font-weight:700;padding:3px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .macd-toggle.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}

  /* 主力買賣力子面板 */
  .force-panel{margin-top:10px;}
  .force-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;flex-wrap:wrap;gap:4px;}
  .force-title{font-size:12px;font-weight:800;color:var(--text);}
  .force-legend{display:flex;align-items:center;font-size:10px;color:var(--muted);}
  .fl-dot{width:7px;height:7px;border-radius:2px;display:inline-block;margin-left:8px;margin-right:3px;}
  .fl-dot:first-child{margin-left:0;}
  .fl-buy{background:var(--up);}
  .fl-sell{background:var(--down);}
  .fl-cum{background:var(--accent);border-radius:50%;}
  .force-note{font-size:10px;color:var(--muted);margin-bottom:6px;}

  /* 頂部：櫃買盤勢／盤中訊號 */
  .header-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;}
  .signal-controls{display:flex;gap:8px;align-items:center;flex-shrink:0;}
  .signal-badge-btn{display:flex;align-items:center;gap:6px;background:var(--panel);border:1px solid var(--line);color:var(--text);font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .signal-badge-btn:hover{background:var(--panel-2);}
  .sb-count{background:var(--accent);color:var(--bg);border-radius:999px;min-width:18px;padding:0 5px;text-align:center;font-size:11px;}
  .alert-toggle{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .alert-toggle.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .market-strength-bar{display:flex;align-items:center;gap:14px;margin-top:12px;padding:10px 14px;background:var(--panel);border:1px solid var(--line);border-radius:10px;flex-wrap:wrap;}
  .ms-badge{font-size:14px;font-weight:800;padding:6px 14px;border-radius:8px;background:var(--panel-2);flex-shrink:0;}
  .ms-badge.up{color:var(--up);}
  .ms-badge.down{color:var(--down);}
  .ms-lines{font-size:11px;color:var(--muted);line-height:1.6;}
  .ms-line.up{color:var(--up);}
  .ms-line.down{color:var(--down);}
  .ms-updated{color:var(--muted);opacity:.8;}

  /* 股票搜尋 */
  .stock-search-bar{display:flex;align-items:center;gap:10px;margin:0 16px;padding:10px 14px;background:var(--panel);border:1px solid var(--line);border-radius:10px;}
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
  .signal-modal-inner{position:absolute;background:var(--bg);border:1px solid var(--line);border-radius:14px;width:min(672px,94vw);height:min(768px,86vh);min-width:280px;min-height:320px;max-width:98vw;max-height:96vh;overflow:auto;resize:both;padding:14px;box-shadow:0 12px 40px rgba(0,0,0,0.5);pointer-events:auto;}
  .signal-modal-inner.collapsed{height:auto!important;min-height:0;overflow:hidden;resize:none;padding:10px 14px;}
  .signal-modal-inner.collapsed .signal-help,
  .signal-modal-inner.collapsed .signal-tabs-bar,
  .signal-modal-inner.collapsed .signal-body,
  .signal-modal-inner.collapsed .sm-sub{display:none;}
  .signal-modal-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px;cursor:move;touch-action:none;flex-wrap:wrap;}
  .sm-title{font-weight:800;font-size:16px;}
  .sm-sub{color:var(--muted);font-size:11px;margin-top:2px;max-width:320px;}
  .sm-actions{display:flex;gap:6px;align-items:center;cursor:default;flex-wrap:wrap;}
  .sm-date-pill{background:var(--bg);border:1px solid var(--line);color:var(--muted);font-size:11px;padding:6px 10px;border-radius:8px;display:flex;align-items:center;}
  .sm-btn{background:var(--panel);border:1px solid var(--line);color:var(--text);font-size:11px;font-weight:700;padding:6px 10px;border-radius:8px;cursor:pointer;font-family:inherit;}
  .sm-btn:hover{background:var(--panel-2);}
  .sm-btn.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .signal-help{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:11px;color:var(--muted);margin-bottom:8px;display:flex;flex-direction:column;gap:3px;}
  .signal-tabs-bar{flex-wrap:wrap;}
  .sig-count{background:var(--panel-2);color:var(--muted);border-radius:999px;padding:0 6px;margin-left:4px;font-size:10px;}
  .signal-tab.active .sig-count{background:var(--bg);color:var(--accent);}
  .signal-history-bar{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin-bottom:8px;}
  .signal-history-bar input{background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:4px 8px;font-family:inherit;}
  .signal-list{display:flex;flex-direction:column;border-top:1px solid var(--line);}
  .signal-row{display:flex;align-items:center;gap:10px;padding:9px 4px;border-bottom:1px solid var(--line);font-size:12px;cursor:pointer;transition:background .12s ease;}
  .signal-row:hover{background:rgba(201,169,140,0.08);}
  .signal-row .sig-time{color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0;width:40px;}
  .signal-row .sig-code{color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0;}
  .signal-row .sig-group{color:var(--muted);font-size:11px;background:var(--panel-2);border-radius:6px;padding:1px 8px;flex-shrink:0;white-space:nowrap;}
  .signal-row .sig-name{font-weight:700;flex-shrink:0;}
  .signal-row .sig-label{color:var(--text);opacity:.85;}
  .signal-row .sig-label.sig-bull{background:var(--up);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .signal-row .sig-label.sig-bear{background:var(--down);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .signal-modal-inner > *{zoom:1.3;}
  .signal-empty{padding:30px 10px;text-align:center;color:var(--muted);}
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
    <div class="signal-controls">
      <button class="signal-badge-btn" id="signalBadgeBtn"><span>⚠ 盤中訊號</span><span class="sb-count" id="signalBadgeCount">0</span></button>
      <button class="alert-toggle on" id="alertToggle" aria-pressed="true">提醒開啟</button>
    </div>
  </div>
  <div class="market-strength-bar" id="otcStrengthBox"></div>
</header>
<div class="draft-badge"><span class="dot"></span>全部項目（含K線圖／主力買賣力／日線）皆為後端真實資料，連不上或該股尚無資料時自動退回示範資料</div>
<div class="stock-search-bar">
  <input type="text" id="stockSearchInput" placeholder="輸入代號或名稱，按 Enter 或點右邊圖示開啟五分鐘K線圖">
  <button class="ssb-go-btn" id="stockSearchGoBtn" aria-label="開啟K線圖">🔍</button>
  <span class="ssb-hint" id="stockSearchHint" hidden>查無此股票</span>
</div>
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

<div class="chart-modal" id="chartModal" hidden>
  <div class="chart-modal-inner" id="chartModalInner">
    <div class="chart-modal-head" id="chartModalHead">
      <div><span class="cm-code" id="cmCode"></span><span class="cm-name" id="cmName"></span><span class="cm-data-badge" id="cmDataBadge" hidden>示範資料</span></div>
      <div class="cm-actions">
        <input type="text" class="cm-quick-search" id="cmQuickSearch" placeholder="輸入代號切換">
        <button class="cm-icon-btn" id="cmSettingsToggle" aria-label="指標設定" aria-pressed="false">⚙</button>
        <button class="cm-icon-btn" id="cmMax" aria-label="放大／還原視窗" aria-pressed="false">⛶</button>
        <button class="cm-icon-btn" id="cmClose" aria-label="關閉">✕</button>
      </div>
    </div>
    <div class="chart-tabs" id="chartTabs">
      <button class="chart-tab" data-tf="daily">日線</button>
      <button class="chart-tab active" data-tf="m5">5分鐘</button>
      <button class="chart-tab" data-tf="m1">1分鐘</button>
      <span class="ma-legend" id="maLegend"></span>
    </div>
    <div class="ind-settings" id="maControls" hidden></div>
    <div class="chart-canvas-wrap price-wrap">
      <canvas id="klineCanvas"></canvas>
      <div class="chart-tooltip" id="chartTooltip" hidden></div>
    </div>
    <div class="force-panel" id="forcePanelWrap" hidden>
      <div class="force-panel-head">
        <span class="force-title">主力買賣力（大戶）</span>
        <span class="force-legend"><span class="fl-dot fl-buy"></span>買超<span class="fl-dot fl-sell"></span>賣超<span class="fl-dot fl-cum"></span>累計</span>
      </div>
      <div class="force-note">大戶定義：單筆成交量 ≥ 500 張（示範資料，門檻可調整）</div>
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
        <div class="sm-sub">拉住標題可在頁面內移動；訊號資料來源逐步替換為真實偵測，尚未完成的分類會標明示範資料。</div>
      </div>
      <div class="sm-actions">
        <span class="sm-date-pill" id="smDatePill"></span>
        <button class="sm-btn" id="smHelp">? 訊號教學</button>
        <button class="sm-btn" id="smMoveWindow">⧉ 移到另一螢幕</button>
        <button class="sm-btn" id="smRecenter">回到中央</button>
        <button class="sm-btn" id="smPin">訂閱</button>
        <button class="cm-icon-btn" id="smCollapse" aria-label="收合">－</button>
        <button class="cm-icon-btn" id="smClose" aria-label="隱藏">✕</button>
      </div>
    </div>
    <div class="signal-help" id="signalHelp" hidden>
      <div>今日即時：彙整下列各類訊號的即時清單。</div>
      <div>族群瞬間大單：同族群內短時間出現的大額單筆成交。</div>
      <div>兩項精選（強多/強空）：主力淨額比、價格位置兩項條件同時成立才會出現。強多＝當分鐘主力淨買超≥50%且前一分鐘同方向，且價格同時站上VWAP、突破開盤前5分鐘（09:00-09:04）K棒高點；強空＝主力淨賣超≥50%且前一分鐘同方向，且價格同時跌破VWAP、跌破開盤前5分鐘K棒低點。同一檔股票同一方向一天只提示一次，偵測時間09:00-13:30。</div>
      <div>盤中特大買單／賣單：單筆超大額買進／賣出成交。</div>
      <div>盤中大戶力：個股大戶買賣力道明顯轉強或轉弱。</div>
      <div>歷史查詢：選擇日期查看當天的訊號紀錄。</div>
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
        if (id === 'klineCanvas') updateChartTooltipAt(e.touches[0].clientX);
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
        if (id === 'klineCanvas') updateChartTooltipAt(e.touches[0].clientX);
      }
    };

    el.ontouchend = (e) => {
      if (e.touches.length < 2) startDist = null;
      if (e.touches.length < 1) dragStartX = null;
    };
    el.ontouchcancel = () => { startDist = null; dragStartX = null; };
  });
}

function drawChart(){
  const canvas = document.getElementById('klineCanvas');
  const cssW = canvas.parentElement.clientWidth, cssH = canvas.parentElement.clientHeight;
  const ctx = setupCanvas(canvas, cssW, cssH);

  const allBars = currentChart.bars;
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
        drawHRangeLine(todayStart, today1030Index, todayFirstBar.high, '#ef4444', 1.5, []);
        drawHRangeLine(todayStart, today1030Index, todayFirstBar.low, '#6366f1', 1.5, []);
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
  for (let k = 0; k <= 5; k++){
    const i = Math.round((bars.length - 1) * k / 5);
    ctx.fillText(bars[i].label, xAt(i), cssH - padBottom + 4);
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
  ctx.fillStyle = '#a89c8f'; ctx.font = '9px -apple-system, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('量 上限' + Math.round(maxVol) + '張', PAD.left, 2);
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

  const maxAbsNet = Math.max(1, ...flow.map((f) => Math.abs(f.net)));
  const barScale = (plotH / 2 * 0.85) / maxAbsNet;
  const maxAbsCum = Math.max(1, ...flow.map((f) => Math.abs(f.cum)));
  const lineScale = (plotH / 2 * 0.85) / maxAbsCum;

  ctx.strokeStyle = 'rgba(168,156,143,0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD.left, zeroY); ctx.lineTo(cssW - PAD.right, zeroY); ctx.stroke();

  const barW = Math.max(2, plotW / flow.length * 0.62);
  flow.forEach((f, i) => {
    const x = xAt(i);
    const h = Math.abs(f.net) * barScale;
    ctx.fillStyle = f.net >= 0 ? '#e6675f' : '#5fae6f';
    if (f.net >= 0) ctx.fillRect(x - barW / 2, zeroY - h, barW, h);
    else ctx.fillRect(x - barW / 2, zeroY, barW, h);
  });

  ctx.strokeStyle = VWAP_COLOR;
  ctx.lineWidth = 2;
  ctx.beginPath();
  flow.forEach((f, i) => {
    const x = xAt(i), y = zeroY - f.cum * lineScale;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = '#a89c8f'; ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('+' + Math.round(maxAbsCum) + '張', cssW - PAD.right + 6, padTop + 6);
  ctx.fillText('0', cssW - PAD.right + 6, zeroY);
  ctx.fillText('-' + Math.round(maxAbsCum) + '張', cssW - PAD.right + 6, cssH - padBottom - 6);
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
  ctx.fillStyle = '#a89c8f'; ctx.font = '9px -apple-system, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
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
function updateChartTooltipAt(clientX){
  const canvas = document.getElementById('klineCanvas');
  const tooltip = document.getElementById('chartTooltip');
  const allBars = currentChart.bars;
  if (!allBars) return;
  const { start: vStart, count: vCount } = visibleRange(allBars.length);
  const bars = allBars.slice(vStart, vStart + vCount);
  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const plotW = rect.width - PAD.left - PAD.right;
  let i = Math.floor((x - PAD.left) / plotW * bars.length);
  i = Math.max(0, Math.min(bars.length - 1, i));
  currentChart.hoverIndex = i;
  const b = bars[i];
  tooltip.hidden = false;
  tooltip.style.left = Math.min(rect.width - 190, Math.max(0, x + 8)) + 'px';
  tooltip.style.top = '8px';
  tooltip.innerHTML = b.fullLabel + '　開' + b.open.toFixed(2) + ' 高' + b.high.toFixed(2) + ' 低' + b.low.toFixed(2) + ' 收' + b.close.toFixed(2) + ' 量' + b.volume;
  updateMaLegend(vStart + i);
  drawChart();
}

function attachChartInteraction(){
  const canvas = document.getElementById('klineCanvas');
  const tooltip = document.getElementById('chartTooltip');
  let isDragging = false, dragStartX = 0, dragViewStart = 0, dragViewCount = 0, dragTotal = 0;

  canvas.onmousemove = (e) => {
    if (isDragging) return;
    updateChartTooltipAt(e.clientX);
  };
  canvas.onmouseleave = () => {
    if (isDragging) return;
    tooltip.hidden = true;
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
    tooltip.hidden = true;
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

async function fetchRealBars5Range(code){
  // 5分K 補多天歷史（今日以外的天沒有主力逐筆資料，mainNet 會是 null）
  const [rangeRes, todayBars] = await Promise.all([
    fetch('/api/bars5range/' + code),
    fetchRealBars(code, 'm5').catch(() => []),
  ]);
  if (!rangeRes.ok) throw new Error('bars5range http ' + rangeRes.status);
  const rangeData = await rangeRes.json();
  if (!rangeData || !Array.isArray(rangeData.bars) || !rangeData.bars.length) throw new Error('bars5range empty');
  const todayByTs = new Map(todayBars.map((b) => [b.ts, b.mainNet]));
  return rangeData.bars.map((b) => {
    const bar = tsToBar(b);
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
    try { bars = await fetchRealBars(currentChart.code, tf); isReal = true; } catch (e) { bars = null; }
  } else if (tf === 'daily'){
    try { bars = await fetchRealDailyBars(currentChart.code); isReal = true; } catch (e) { bars = null; }
  }
  if (requestToken !== currentChart.requestToken) return; // 使用者已切到別的分頁/個股，這次結果作廢
  if (!bars) bars = generateOHLC(currentChart.code, tf);
  currentChart.bars = bars;
  currentChart.isRealBars = isReal;
  document.getElementById('cmDataBadge').hidden = isReal;

  if (isReal){
    let cum = 0;
    currentChart.force = cfg.force ? bars.map((b) => { const net = b.mainNet ?? 0; cum += net; return { net, cum }; }) : null;
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

function openStockChart(code, name, tf){
  const overlay = document.getElementById('chartModal');
  const wasHidden = overlay.hidden;
  currentChart.code = code;
  currentChart.name = name;
  document.getElementById('cmCode').textContent = code;
  document.getElementById('cmName').textContent = name;
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
  document.getElementById('chartModal').hidden = true;
  document.body.style.overflow = '';
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
    if (e.target.closest('.cm-icon-btn') || e.target.closest('.cm-quick-search')) return;
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
const STOCK_COL_LABELS_HTML = '<div class="stock-col-labels"><span></span><span class="srow-right">' +
  '<span class="spct">漲跌幅</span><span class="schg">漲跌</span><span class="sprice">成交價</span></span></div>';
function stockValueColsHtml(price, changeAmt, changePercent){
  const cls = dirClass(changePercent);
  return '<div class="srow-right">' +
    '<span class="spct ' + cls + '">' + fmt(changePercent) + '%</span>' +
    '<span class="schg ' + cls + '">' + (changeAmt > 0 ? '+' : '') + changeAmt.toFixed(2) + '</span>' +
    '<span class="sprice">' + price.toFixed(2) + '</span>' +
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
    if (!data.ready){
      el.innerHTML =
        '<div class="ms-badge">資料蒐集中</div>' +
        '<div class="ms-lines"><div>' + (data.reason || '尚未累積足夠的5分K資料') + '</div>' +
        '<div class="ms-updated">開盤後約1小時40分（20根5分K）才會有第一個訊號，不是示範資料。</div></div>';
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

const SIGNAL_KINDS = [
  { key: 'now', label: '今日即時' },
  { key: 'groupBigOrder', label: '族群瞬間大單' },
  { key: 'fourGate', label: '兩項精選' },
  { key: 'bigBuy', label: '盤中特大買單' },
  { key: 'bigSell', label: '盤中特大賣單' },
  { key: 'bigHolderForce', label: '盤中大戶力' },
  { key: 'history', label: '歷史查詢' },
];
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
  const counts = { groupBigOrder: 3, fourGate: 1, bigBuy: 2, bigSell: 2, bigHolderForce: 2 };
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
      if (kind === 'groupBigOrder') label = s.group + '．單筆 ' + qty + ' 張大單';
      else if (kind === 'fourGate') label = '四項條件同時成立';
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
let signalCenterState = { activeTab: 'now', historyDate: null, pinned: false };
let todaySignalEvents = [];
let mainForceRanking = [];
let signalDataIsReal = false;
const BIG_HOLDER_THRESHOLD = 500; // 累計買賣超達 500 張視為大戶力，跟K線圖大戶定義一致

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
  const isBuy = kind === 'instantLargeBuy' || kind === 'fourGateBuy';
  const backendName = s.name && s.name !== s.ticker ? s.name : null;
  return {
    tabs: isFourGate ? ['now', 'fourGate'] : ['now', 'groupBigOrder', isBuy ? 'bigBuy' : 'bigSell'],
    time: new Date(s.barTs).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }),
    code: s.ticker, name: backendName || lookupStockName(s.ticker), group: s.groupName, label: s.label, isBuy,
  };
}

async function fetchRealSignals(dateStr){
  const res = await fetch('/api/intraday-signals?trade_date=' + dateStr + '&limit=500');
  if (!res.ok) throw new Error('intraday-signals http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.signals)) throw new Error('bad payload');
  return data.signals.map(mapLargeOrderSignal);
}

async function fetchMainForceRanking(){
  const res = await fetch('/api/main-force-ranking?limit=200');
  if (!res.ok) throw new Error('main-force-ranking http ' + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data.ranking)) throw new Error('bad payload');
  return data.ranking;
}

async function refreshSignalData(){
  const today = new Date().toISOString().slice(0, 10);
  try {
    const [signals, ranking] = await Promise.all([fetchRealSignals(today), fetchMainForceRanking()]);
    todaySignalEvents = signals;
    mainForceRanking = ranking;
    signalDataIsReal = true;
  } catch (e) {
    todaySignalEvents = buildDemoSignalsForDate(today)
      .map((ev) => ({ ...ev, tabs: ['now', ev.kind] }));
    mainForceRanking = [];
    signalDataIsReal = false;
  }
  const countEl = document.getElementById('signalBadgeCount');
  if (countEl) countEl.textContent = String(todaySignalEvents.length);
  if (!document.getElementById('signalModal').hidden) renderSignalCenter();
}

function signalRowsHtml(events){
  if (!events.length){
    return '<div class="signal-empty"><div class="se-title">目前沒有符合條件的訊號' + (signalDataIsReal ? '' : '（示範資料）') + '</div>' +
      '<div class="se-sub">' + (signalDataIsReal ? '全市場掃描中，符合條件才會出現。' : '後端暫時連不上，先用示範資料展示介面。') + '</div></div>';
  }
  return '<div class="signal-list">' + events.map((ev) => {
    const labelCls = ev.isBuy != null
      ? (ev.isBuy ? ' sig-bull' : ' sig-bear')
      : (/[買多]/.test(ev.label) ? ' sig-bull' : /[賣空]/.test(ev.label) ? ' sig-bear' : '');
    const group = lookupStockGroup(ev.code);
    const quote = getStockQuote(ev.code);
    const priceCols = quote ? stockValueColsHtml(quote.price, quote.price - quote.price / (1 + quote.changePercent / 100), quote.changePercent) : '';
    return '<div class="signal-row" data-code="' + ev.code + '" data-name="' + ev.name + '">' +
      '<span class="sig-time">' + ev.time + '</span>' +
      '<span class="sig-code">' + ev.code + '</span>' +
      '<span class="sig-name">' + ev.name + '</span>' +
      (group ? '<span class="sig-group">' + group + '</span>' : '') +
      '<span class="sig-label' + labelCls + '">' + ev.label + '</span>' +
      priceCols +
    '</div>';
  }).join('') + '</div>';
}

function rankingRowsHtml(rows){
  if (!rows.length){
    return '<div class="signal-empty"><div class="se-title">目前沒有符合條件的排行資料</div>' +
      '<div class="se-sub">' + (signalDataIsReal ? '今日主力資料尚未累積或尚無達門檻個股。' : '後端暫時連不上，稍後再試。') + '</div></div>';
  }
  return '<div class="signal-list">' + rows.map((r) => {
    const backendName = r.name && r.name !== r.code ? r.name : null;
    const name = backendName || lookupStockName(r.code);
    const total = (r.buyVolume || 0) + (r.sellVolume || 0);
    const pct = total > 0 ? Math.abs(r.netVolume) / total * 100 : 0;
    const timeLabel = r.lastTs ? new Date(r.lastTs).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--';
    const group = lookupStockGroup(r.code);
    const quote = getStockQuote(r.code);
    const priceCols = quote ? stockValueColsHtml(quote.price, quote.price - quote.price / (1 + quote.changePercent / 100), quote.changePercent) : '';
    return '<div class="signal-row" data-code="' + r.code + '" data-name="' + name + '">' +
        '<span class="sig-time">' + timeLabel + '</span>' +
        '<span class="sig-code">' + r.code + '</span>' +
        '<span class="sig-name">' + name + '</span>' +
        (group ? '<span class="sig-group">' + group + '</span>' : '') +
        '<span class="sig-label ' + (r.side === 'buy' ? 'sig-bull' : 'sig-bear') + '">' + (r.side === 'buy' ? '買超' : '賣超') + ' ' + pct.toFixed(0) + '%</span>' +
        priceCols +
      '</div>';
  }).join('') + '</div>';
}

function renderSignalCenter(){
  const tabsEl = document.getElementById('signalTabsBar');
  const bigHolderRows = mainForceRanking.filter((r) => Math.abs(r.netVolume) >= BIG_HOLDER_THRESHOLD);
  const countFor = (key) => {
    if (key === 'now') return todaySignalEvents.length;
    if (key === 'history') return null;
    if (key === 'bigHolderForce') return bigHolderRows.length;
    return todaySignalEvents.filter((e) => e.tabs.includes(key)).length;
  };
  tabsEl.innerHTML = SIGNAL_KINDS.map((k) => {
    const count = countFor(k.key);
    return '<button class="chart-tab signal-tab' + (signalCenterState.activeTab === k.key ? ' active' : '') + '" data-kind="' + k.key + '">' +
      k.label + (count === null ? '' : ' <span class="sig-count">' + count + '</span>') +
    '</button>';
  }).join('');

  const body = document.getElementById('signalBody');
  const active = signalCenterState.activeTab;
  if (active === 'history'){
    const d = signalCenterState.historyDate || new Date().toISOString().slice(0, 10);
    body.innerHTML =
      '<div class="signal-history-bar">交易日期 <input type="date" id="signalHistoryDate" value="' + d + '"></div>' +
      '<div id="signalHistoryBody"><div class="signal-empty"><div class="se-title">讀取中…</div></div></div>';
    document.getElementById('signalHistoryDate').addEventListener('change', (e) => {
      signalCenterState.historyDate = e.target.value;
      renderSignalCenter();
    });
    fetchRealSignals(d).then((events) => {
      const stillOnSameDate = active === signalCenterState.activeTab && (signalCenterState.historyDate || new Date().toISOString().slice(0, 10)) === d;
      const el = document.getElementById('signalHistoryBody');
      if (stillOnSameDate && el) el.innerHTML = signalRowsHtml(events);
    }).catch(() => {
      const el = document.getElementById('signalHistoryBody');
      if (el) el.innerHTML = '<div class="signal-empty"><div class="se-title">讀取失敗</div><div class="se-sub">後端暫時連不上，稍後再試。</div></div>';
    });
  } else if (active === 'bigHolderForce'){
    body.innerHTML = rankingRowsHtml(bigHolderRows);
  } else {
    const events = active === 'now' ? todaySignalEvents : todaySignalEvents.filter((e) => e.tabs.includes(active));
    body.innerHTML = signalRowsHtml(events);
  }
}
function positionSignalModal(){
  if (document.body.classList.contains('signal-window-mode')) return;
  const panel = document.getElementById('signalModalInner');
  const w = Math.min(672, window.innerWidth * 0.94);
  const h = Math.min(768, window.innerHeight * 0.86);
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
    left = Math.max(-panel.offsetWidth + 100, Math.min(window.innerWidth - 100, left));
    top = Math.max(0, Math.min(window.innerHeight - 40, top));
    panel.style.left = left + 'px'; panel.style.top = top + 'px';
  });
  head.addEventListener('pointerup', () => { dragging = false; });
  head.addEventListener('pointercancel', () => { dragging = false; });
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

  app.innerHTML =
    '<div class="stat-bar">' +
      '<div class="stat-item"><div class="stat-num up">' + strongCount + ' / ' + total + '</div><div class="stat-label">強勢族群</div></div>' +
      '<div class="stat-item"><div class="stat-num down">' + weakCount + ' / ' + total + '</div><div class="stat-label">弱勢族群</div></div>' +
    '</div>' +
    '<div class="layout">' +
      '<div class="col-left">' +
        '<div class="section-title">' + leftTitle + '</div>' +
        '<div class="top6-grid">' + side6Html + '</div>' +
      '</div>' +
      '<div class="col-right">' +
        '<div class="section-title">各族群前三' + rankLabel + '個股</div>' +
        '<div class="top-groups-row">' + sideGroupsHtml + '</div>' +
      '</div>' +
    '</div>';

  document.getElementById('updatedAt').textContent = '更新於 ' + new Date().toLocaleTimeString('zh-TW') + '（模擬資料）';
}

async function refresh(){
  try {
    const res = await fetch('/api/groups');
    const data = await res.json();
    if (!data || !Array.isArray(data.groups)) throw new Error('bad payload');
    lastData = data;
  } catch (e) {
    if (!lastData) lastData = buildMockData();
  }
  render();
  await Promise.all([renderOtcStrengthWidget(), refreshSignalData()]);
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
document.getElementById('cmQuickSearch').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const s = findStockByQuery(e.target.value);
  if (s){
    e.target.value = '';
    openStockChart(s.code, s.name, currentChart.tf);
  } else {
    showToast('查無此股票');
  }
});

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
  const row = e.target.closest('.signal-row[data-code]');
  if (!row) return;
  hideSignalModalPanel();
  openStockChart(row.dataset.code, row.dataset.name);
});
document.getElementById('smClose').addEventListener('click', closeSignalCenter);
document.getElementById('smCollapse').addEventListener('click', toggleSignalCollapse);
document.getElementById('smRecenter').addEventListener('click', recenterSignalModal);
document.getElementById('smMoveWindow').addEventListener('click', openSignalWindow);
document.getElementById('smPin').addEventListener('click', () => {
  signalCenterState.pinned = !signalCenterState.pinned;
  const btn = document.getElementById('smPin');
  btn.classList.toggle('on', signalCenterState.pinned);
  btn.textContent = signalCenterState.pinned ? '已訂閱' : '訂閱';
});
document.getElementById('smHelp').addEventListener('click', () => {
  const help = document.getElementById('signalHelp');
  help.hidden = !help.hidden;
});
document.getElementById('signalModal').addEventListener('click', (e) => {
  if (e.target.id === 'signalModal') closeSignalCenter();
});

refreshSignalData();
renderOtcStrengthWidget();
if (location.hash === '#signal-center'){
  document.body.classList.add('signal-window-mode');
}
initSignalWindowChrome();
openSignalCenter(); // 盤中訊號中心預設常駐顯示，不用點才出現；要隱藏就按✕，要收合成小條就按－

refresh();
setInterval(refresh, 15000);
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
  for (const msgArray of results) {
    for (const item of msgArray) {
      const code = item.c;
      if (!code || !(code in quotes)) continue;
      const price = parseFloat(item.z);
      const prevClose = parseFloat(item.y);
      // 開盤前 z/o/h/l 都還沒有值（TWSE 回傳 "-"）時，退回昨收價：讓開盤前畫面顯示
      // 最近一個交易日的收盤價（漲跌 0%），而不是整檔空白「目前無資料」。
      const fallbackPrice = parseFloat(item.o) || parseFloat(item.h) || parseFloat(item.l) || prevClose;
      const finalPrice = Number.isFinite(price) ? price : fallbackPrice;
      if (Number.isFinite(finalPrice) && Number.isFinite(prevClose) && prevClose > 0) {
        quotes[code] = {
          price: finalPrice,
          change: finalPrice - prevClose,
          changePercent: (finalPrice - prevClose) / prevClose * 100
        };
      }
    }
  }
  return quotes;
}

async function proxyHanstockBars(pathname) {
  // 代理到 Railway 上 HanStock 主要服務自己的 Hub API（用 Railway 專屬網址，
  // 不依賴 hanstock.xyz 這個要續約的自訂網域，到期也不受影響）。
  // 這裡做短暫快取，避免 tw-groups 流量直接反映成後端服務的負載。
  const upstream = "https://hanstock-production-b872.up.railway.app" + pathname;
  const resp = await fetch(upstream, {
    headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
    cf: { cacheTtl: 20, cacheEverything: true }
  });
  const body = await resp.text();
  return new Response(body, {
    status: resp.status,
    headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "public, max-age=20" }
  });
}

export default {
  async fetch(request) {
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
    if (url.pathname === "/api/main-force-ranking") {
      try {
        return await proxyHanstockBars("/api/hub/main-force/ranking" + url.search);
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ranking: [] }, { status: 502 });
      }
    }
    if (url.pathname === "/api/intraday-signals") {
      try {
        return await proxyHanstockBars("/api/hub/intraday-signals" + url.search);
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
    if (url.pathname === "/api/otc-strength") {
      try {
        return await proxyHanstockBars("/api/hub/index/otc/strength");
      } catch (err) {
        return Response.json({ status: "error", error: String(err), ready: false }, { status: 502 });
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
            changePercent: quotes[s.code]?.changePercent ?? 0
          }));
          const valid = stocks.filter((s) => s.price !== null);
          const avgChange = valid.length ? valid.reduce((sum, s) => sum + s.changePercent, 0) / valid.length : 0;
          return { name: g.name, avgChange, stocks };
        });
        return Response.json({ groups });
      } catch (err) {
        return Response.json({ error: String(err) }, { status: 502 });
      }
    }
    return new Response(HTML_PAGE, {
      headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
    });
  }
};
