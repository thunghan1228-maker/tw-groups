const BUILD_STAMP = "2026-10-10 13:13:34";
const GROUPS = [
  {"name":"被動元件","stocks":[{"code":"6862","name":"三集瑞"},{"code":"6155","name":"鈞寶"},{"code":"3090","name":"日電貿"},{"code":"4760","name":"勤凱"},{"code":"6821","name":"聯寶"},{"code":"1595","name":"川寶"},{"code":"6449","name":"鈺邦"},{"code":"2478","name":"大毅"},{"code":"8043","name":"蜜望實"},{"code":"6175","name":"立敦"},{"code":"3236","name":"千如"},{"code":"2472","name":"立隆電"},{"code":"6834","name":"天二科技"},{"code":"6127","name":"九豪"},{"code":"8042","name":"金山電"},{"code":"2327","name":"國巨*"},{"code":"2375","name":"凱美"},{"code":"3026","name":"禾伸堂"},{"code":"2492","name":"華新科"},{"code":"5328","name":"華容"},{"code":"6173","name":"信昌電"},{"code":"3624","name":"光頡"},{"code":"3357","name":"臺慶科"},{"code":"3537","name":"堡達"},{"code":"2428","name":"興勤"}]},
  {"name":"記憶體","stocks":[{"code":"8271","name":"宇瞻"},{"code":"2344","name":"華邦電"},{"code":"4973","name":"廣穎電通"},{"code":"3260","name":"威剛"},{"code":"8088","name":"品安"},{"code":"3135","name":"凌航"},{"code":"4967","name":"十銓"},{"code":"2337","name":"旺宏"},{"code":"6265","name":"方土昶"},{"code":"2451","name":"創見"},{"code":"5289","name":"宜鼎"},{"code":"8110","name":"華東"},{"code":"5351","name":"鈺創"},{"code":"3006","name":"晶豪科"},{"code":"3060","name":"銘異"},{"code":"8299","name":"群聯"},{"code":"2408","name":"南亞科"},{"code":"8131","name":"福懋科"},{"code":"6770","name":"力積電"}]},
  {"name":"矽光子","stocks":[{"code":"8111","name":"立碁"},{"code":"4979","name":"華星光"},{"code":"6218","name":"豪勉"},{"code":"4977","name":"眾達-KY"},{"code":"4903","name":"聯光通"},{"code":"3234","name":"光環"},{"code":"6530","name":"創威"},{"code":"6715","name":"嘉基"},{"code":"3363","name":"上詮"},{"code":"8089","name":"康全電訊"},{"code":"3025","name":"星通"},{"code":"6451","name":"訊芯-KY"},{"code":"4909","name":"新復興"},{"code":"3447","name":"展達"},{"code":"4908","name":"前鼎"},{"code":"4971","name":"IET-KY"},{"code":"6830","name":"汎銓"},{"code":"3081","name":"聯亞"},{"code":"4991","name":"環宇-KY"},{"code":"6442","name":"光聖"},{"code":"3163","name":"波若威"},{"code":"3450","name":"聯鈞"}]},
  {"name":"摺疊手機","stocks":[{"code":"3548","name":"兆利"},{"code":"1582","name":"信錦"},{"code":"6805","name":"富世達"},{"code":"3376","name":"新日興"}]},
  {"name":"矽晶圓","stocks":[{"code":"5483","name":"中美晶"},{"code":"2342","name":"茂矽"},{"code":"3707","name":"漢磊"},{"code":"3016","name":"嘉晶"},{"code":"6488","name":"環球晶"},{"code":"6182","name":"合晶"},{"code":"3532","name":"台勝科"}]},
  {"name":"D電腦","stocks":[{"code":"6166","name":"凌華"},{"code":"6206","name":"飛捷"},{"code":"3022","name":"威強電"},{"code":"3479","name":"安勤"},{"code":"4916","name":"事欣科"},{"code":"6414","name":"樺漢"},{"code":"3213","name":"茂訊"},{"code":"2395","name":"研華"},{"code":"3594","name":"磐儀"}]},
  {"name":"化學","stocks":[{"code":"4716","name":"大立"},{"code":"4711","name":"永純"},{"code":"1708","name":"東鹼"},{"code":"1735","name":"日勝化"},{"code":"1717","name":"長興"},{"code":"1727","name":"中華化"},{"code":"1721","name":"三晃"},{"code":"3430","name":"奇鈦科"},{"code":"1711","name":"永光"},{"code":"4755","name":"三福化"},{"code":"4764","name":"雙鍵"}]},
  {"name":"軍工","stocks":[{"code":"2634","name":"漢翔"},{"code":"4541","name":"晟田"},{"code":"8383","name":"千附"},{"code":"6928","name":"攸泰科技"},{"code":"8222","name":"寶一"},{"code":"2630","name":"亞航"},{"code":"6753","name":"龍德造船"},{"code":"2231","name":"為升"},{"code":"4572","name":"駐龍"},{"code":"7402","name":"邑錡"},{"code":"4916","name":"事欣科"},{"code":"6829","name":"千附精密"},{"code":"2645","name":"長榮航太"},{"code":"2429","name":"銘旺科"},{"code":"1584","name":"精剛"},{"code":"8033","name":"雷虎"},{"code":"3230","name":"錦明"},{"code":"1810","name":"和成"},{"code":"6477","name":"安集"}]},
  {"name":"設備股","stocks":[{"code":"8028","name":"昇陽半導體"},{"code":"6438","name":"迅得"},{"code":"1785","name":"光洋科"},{"code":"5443","name":"均豪"},{"code":"2467","name":"志聖"},{"code":"6640","name":"均華"},{"code":"3131","name":"弘塑"},{"code":"3583","name":"辛耘"},{"code":"3455","name":"由田"},{"code":"8064","name":"東捷"},{"code":"6187","name":"萬潤"},{"code":"6207","name":"雷科"}]},
  {"name":"玻璃基板","stocks":[{"code":"3149","name":"正達"},{"code":"3673","name":"TPK-KY"},{"code":"8027","name":"鈦昇"},{"code":"8064","name":"東捷"},{"code":"6207","name":"雷科"}]},
  {"name":"重電","stocks":[{"code":"1519","name":"華城"},{"code":"1513","name":"中興電"},{"code":"1529","name":"樂事綠能"},{"code":"1514","name":"亞力"},{"code":"1503","name":"士電"}]},
  {"name":"神盾","stocks":[{"code":"6243","name":"迅杰"},{"code":"6462","name":"神盾"},{"code":"8054","name":"安國"},{"code":"6684","name":"安格"},{"code":"6695","name":"芯鼎"},{"code":"3041","name":"揚智"}]},
  {"name":"小電腦","stocks":[{"code":"6558","name":"興能高"},{"code":"3323","name":"加百裕"},{"code":"1569","name":"濱川"},{"code":"3211","name":"順達"},{"code":"6781","name":"AES-KY"},{"code":"5309","name":"系統電"},{"code":"4931","name":"新盛力"}]},
  {"name":"PCB","stocks":[{"code":"4958","name":"臻鼎-KY"},{"code":"3037","name":"欣興"},{"code":"3189","name":"景碩"},{"code":"8046","name":"南電"}]},
  {"name":"小電組","stocks":[{"code":"6234","name":"高僑"},{"code":"6191","name":"精成科"},{"code":"2368","name":"金像電"},{"code":"8074","name":"鉅橡"},{"code":"3715","name":"定穎投控"},{"code":"6290","name":"良維"},{"code":"5340","name":"建榮"},{"code":"2316","name":"楠梓電"},{"code":"5498","name":"凱崴"},{"code":"1802","name":"台玻"},{"code":"1815","name":"富喬"},{"code":"6274","name":"台燿"},{"code":"2383","name":"台光電"},{"code":"4989","name":"榮科"},{"code":"8021","name":"尖點"},{"code":"5475","name":"德宏"},{"code":"8358","name":"金居"},{"code":"6213","name":"聯茂"},{"code":"5439","name":"高技"},{"code":"3167","name":"大量"}]},
  {"name":"特化","stocks":[{"code":"4763","name":"材料-KY"},{"code":"4768","name":"晶呈科技"},{"code":"4770","name":"上品"},{"code":"4772","name":"台特化"},{"code":"4722","name":"國精化"}]},
  {"name":"散熱","stocks":[{"code":"2241","name":"艾姆勒"},{"code":"3324","name":"雙鴻"},{"code":"3483","name":"力致"},{"code":"6230","name":"尼得科超眾"},{"code":"6125","name":"廣運"},{"code":"3017","name":"奇鋐"},{"code":"2421","name":"建準"},{"code":"3338","name":"泰碩"},{"code":"8996","name":"高力"},{"code":"2233","name":"宇隆"}]},
  {"name":"PA","stocks":[{"code":"2455","name":"全新"},{"code":"8086","name":"宏捷科"},{"code":"3105","name":"穩懋"}]},
  {"name":"二極體","stocks":[{"code":"5299","name":"杰力"},{"code":"7712","name":"博盛半導體"},{"code":"2481","name":"強茂"},{"code":"8255","name":"朋程"},{"code":"3317","name":"尼克森"},{"code":"5425","name":"台半"},{"code":"6435","name":"大中"},{"code":"8261","name":"富鼎"},{"code":"3675","name":"德微"}]},
  {"name":"石英","stocks":[{"code":"3221","name":"台嘉碩"},{"code":"2484","name":"希華"},{"code":"3042","name":"晶技"},{"code":"8289","name":"泰藝"},{"code":"8182","name":"加高"},{"code":"6174","name":"安碁"}]},
  {"name":"探針卡","stocks":[{"code":"7734","name":"印能科技"},{"code":"6683","name":"雍智科技"},{"code":"6515","name":"穎崴"},{"code":"6510","name":"精測"},{"code":"6223","name":"旺矽"},{"code":"6217","name":"中探針"}]},
  {"name":"低軌衛星","stocks":[{"code":"6485","name":"點序"},{"code":"3138","name":"耀登"},{"code":"2485","name":"兆赫"},{"code":"6285","name":"啟碁"},{"code":"2413","name":"環科"},{"code":"2367","name":"燿華"},{"code":"7717","name":"萊德光電"},{"code":"2313","name":"華通"},{"code":"3491","name":"昇達科"}]},
  {"name":"工具機","stocks":[{"code":"4583","name":"台灣精銳"},{"code":"4571","name":"鈞興-KY"},{"code":"2049","name":"上銀"},{"code":"1539","name":"巨庭"},{"code":"4576","name":"大銀微系統"},{"code":"1540","name":"喬福"},{"code":"6609","name":"瀧澤科"},{"code":"1597","name":"直得"},{"code":"4561","name":"健椿"},{"code":"4540","name":"全球傳動"},{"code":"4510","name":"高鋒"},{"code":"4533","name":"協易機"},{"code":"2233","name":"宇隆"},{"code":"4526","name":"東台"}]},
  {"name":"機器人","stocks":[{"code":"2359","name":"所羅門"},{"code":"2250","name":"IKKA-KY"},{"code":"2365","name":"昆盈"},{"code":"8374","name":"羅昇"},{"code":"6215","name":"和椿"},{"code":"6922","name":"宸曜"},{"code":"2464","name":"盟立"},{"code":"2453","name":"凌群"},{"code":"1536","name":"和大"},{"code":"5392","name":"能率"},{"code":"5484","name":"慧友"},{"code":"6188","name":"廣明"},{"code":"4562","name":"穎漢"},{"code":"8234","name":"新漢"},{"code":"8071","name":"能率網通"},{"code":"3048","name":"益登"},{"code":"2374","name":"佳能"},{"code":"3379","name":"彬台"}]},
  {"name":"光電","stocks":[{"code":"3714","name":"富采"},{"code":"2426","name":"鼎元"},{"code":"6426","name":"統新"},{"code":"5244","name":"弘凱"},{"code":"6419","name":"京晨科"},{"code":"3437","name":"榮創"},{"code":"2393","name":"億光"},{"code":"4956","name":"光鋐"},{"code":"3031","name":"佰鴻"},{"code":"8240","name":"華宏"},{"code":"3673","name":"TPK-KY"},{"code":"6706","name":"惠特"},{"code":"5234","name":"達興材料"},{"code":"3339","name":"泰谷"},{"code":"4960","name":"誠美材"},{"code":"6405","name":"悅城"},{"code":"2489","name":"瑞軒"},{"code":"4949","name":"有成精密"},{"code":"2486","name":"一詮"}]},
  {"name":"功率半導體","stocks":[{"code":"5425","name":"台半"},{"code":"2481","name":"強茂"},{"code":"6525","name":"捷敏-KY"},{"code":"8261","name":"富鼎"},{"code":"3016","name":"嘉晶"},{"code":"3105","name":"穩懋"},{"code":"3707","name":"漢磊"}]},
  {"name":"光學鏡頭","stocks":[{"code":"6209","name":"今國光"},{"code":"2374","name":"佳能"},{"code":"6668","name":"中揚光"},{"code":"3019","name":"亞光"},{"code":"3630","name":"新鉅科"},{"code":"3504","name":"揚明光"},{"code":"3362","name":"先進光"},{"code":"4974","name":"亞泰"},{"code":"6278","name":"台表科"},{"code":"3406","name":"玉晶光"},{"code":"3441","name":"聯一光"},{"code":"4976","name":"佳凌"},{"code":"3008","name":"大立光"}]},
  {"name":"上曜","stocks":[{"code":"1316","name":"上曜"},{"code":"4303","name":"信立"},{"code":"4714","name":"永捷"},{"code":"5314","name":"世紀"},{"code":"6418","name":"詠昇"},{"code":"3313","name":"斐成"}]},
  {"name":"金融股","stocks":[{"code":"2886","name":"兆豐金"},{"code":"2884","name":"玉山金"},{"code":"2885","name":"元大金"},{"code":"2838","name":"聯邦銀"},{"code":"2812","name":"台中銀"},{"code":"2881","name":"富邦金"},{"code":"2882","name":"國泰金"},{"code":"2890","name":"永豐金"},{"code":"2891","name":"中信金"},{"code":"2892","name":"第一金"},{"code":"2883","name":"凱基金"},{"code":"2887","name":"台新新光金"},{"code":"2889","name":"國票金"},{"code":"6005","name":"群益證"},{"code":"2801","name":"彰銀"},{"code":"2816","name":"旺旺保"},{"code":"2820","name":"華票"},{"code":"2832","name":"台產"},{"code":"2834","name":"臺企銀"},{"code":"2836","name":"高雄銀"},{"code":"2845","name":"遠東銀"},{"code":"2849","name":"安泰銀"},{"code":"2850","name":"新產"},{"code":"2851","name":"中再保"},{"code":"2852","name":"第一保"},{"code":"2855","name":"統一證"},{"code":"2880","name":"華南金"},{"code":"2897","name":"王道銀行"},{"code":"5880","name":"合庫金"},{"code":"5876","name":"上海商銀"},{"code":"6024","name":"群益期"},{"code":"5864","name":"致和證"},{"code":"5878","name":"台名"},{"code":"6015","name":"宏遠證"},{"code":"6016","name":"康和證"},{"code":"6020","name":"大展證"},{"code":"6021","name":"美好證"},{"code":"6023","name":"元大期"},{"code":"6026","name":"福邦證"}]},
  {"name":"航運","stocks":[{"code":"2637","name":"慧洋-KY"},{"code":"2615","name":"萬海"},{"code":"2609","name":"陽明"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2603","name":"長榮"},{"code":"5608","name":"四維航"},{"code":"2641","name":"正德"},{"code":"2605","name":"新興"},{"code":"2613","name":"中櫃"}]},
  {"name":"空運","stocks":[{"code":"6757","name":"台灣虎航"},{"code":"2610","name":"華航"},{"code":"2618","name":"長榮航"}]},
  {"name":"散裝","stocks":[{"code":"2605","name":"新興"},{"code":"2612","name":"中航"},{"code":"2606","name":"裕民"},{"code":"2641","name":"正德"},{"code":"2637","name":"慧洋-KY"}]},
  {"name":"聯電股","stocks":[{"code":"2363","name":"矽統"},{"code":"2303","name":"聯電"},{"code":"5347","name":"世界"}]},
  {"name":"鴻家軍","stocks":[{"code":"3062","name":"建漢"},{"code":"3498","name":"陽程"},{"code":"5243","name":"乙盛-KY"},{"code":"3092","name":"鴻碩"},{"code":"2328","name":"廣宇"},{"code":"2354","name":"鴻準"},{"code":"2317","name":"鴻海"}]},
  {"name":"台塑四寶","stocks":[{"code":"6505","name":"台塑化"},{"code":"1301","name":"台塑"},{"code":"1303","name":"南亞"},{"code":"1326","name":"台化"}]},
  {"name":"AI","stocks":[{"code":"3231","name":"緯創"},{"code":"2356","name":"英業達"},{"code":"2376","name":"技嘉"},{"code":"2382","name":"廣達"},{"code":"2377","name":"微星"}]},
  {"name":"彬彬","stocks":[{"code":"3379","name":"彬台"},{"code":"1569","name":"濱川"},{"code":"2328","name":"廣宇"}]},
  {"name":"IP","stocks":[{"code":"3443","name":"創意"},{"code":"3661","name":"世芯-KY"},{"code":"6533","name":"晶心科"},{"code":"3228","name":"金麗科"},{"code":"3529","name":"力旺"},{"code":"8227","name":"巨有科技"},{"code":"6643","name":"M31"},{"code":"6415","name":"矽力-KY"}]},
  {"name":"AI眼鏡","stocks":[{"code":"6237","name":"驊訊"},{"code":"6672","name":"騰輝電子-KY"},{"code":"6742","name":"澤米"},{"code":"3294","name":"英濟"},{"code":"3645","name":"達邁"},{"code":"6456","name":"GIS-KY"}]},
  {"name":"面板","stocks":[{"code":"2409","name":"友達"},{"code":"6116","name":"彩晶"},{"code":"3481","name":"群創"}]},
  {"name":"扇形封裝","stocks":[{"code":"3580","name":"友威科"},{"code":"3535","name":"晶彩科"},{"code":"3663","name":"鑫科"},{"code":"8064","name":"東捷"}]},
  {"name":"千元","stocks":[{"code":"3324","name":"雙鴻"},{"code":"5289","name":"宜鼎"},{"code":"1519","name":"華城"},{"code":"3529","name":"力旺"},{"code":"3017","name":"奇鋐"},{"code":"6781","name":"AES-KY"},{"code":"6805","name":"富世達"},{"code":"2454","name":"聯發科"},{"code":"3665","name":"貿聯-KY"},{"code":"2404","name":"漢唐"},{"code":"2368","name":"金像電"},{"code":"6442","name":"光聖"},{"code":"8299","name":"群聯"},{"code":"2308","name":"台達電"},{"code":"3008","name":"大立光"},{"code":"6510","name":"精測"},{"code":"2383","name":"台光電"},{"code":"3443","name":"創意"},{"code":"3163","name":"波若威"},{"code":"3653","name":"健策"},{"code":"6187","name":"萬潤"},{"code":"3491","name":"昇達科"},{"code":"6223","name":"旺矽"}]},
  {"name":"太陽能","stocks":[{"code":"6477","name":"安集"},{"code":"2406","name":"國碩"},{"code":"3576","name":"聯合再生"},{"code":"6443","name":"元晶"},{"code":"3686","name":"達能"},{"code":"6244","name":"茂迪"},{"code":"3691","name":"碩禾"}]},
  {"name":"電零組","stocks":[{"code":"3597","name":"映興"},{"code":"6156","name":"松上"},{"code":"2413","name":"環科"},{"code":"3689","name":"湧德"},{"code":"2431","name":"聯昌"},{"code":"3015","name":"全漢"},{"code":"6134","name":"萬旭"},{"code":"3605","name":"宏致"},{"code":"3078","name":"僑威"},{"code":"6913","name":"鴻呈"},{"code":"4912","name":"聯德控股-KY"}]},
  {"name":"化學二","stocks":[{"code":"4720","name":"德淵"},{"code":"1718","name":"中纖"},{"code":"1714","name":"和桐"},{"code":"1709","name":"和益"},{"code":"4707","name":"磐亞"},{"code":"1409","name":"新纖"},{"code":"1708","name":"東鹼"}]},
  {"name":"小光電","stocks":[{"code":"3128","name":"昇銳"},{"code":"8072","name":"陞泰"},{"code":"5489","name":"彩富"},{"code":"3434","name":"哲固"},{"code":"3356","name":"奇偶"},{"code":"3297","name":"杭特"},{"code":"5251","name":"天鉞電"}]},
  {"name":"鋼鐵","stocks":[{"code":"2027","name":"大成鋼"},{"code":"2025","name":"千興"},{"code":"2023","name":"燁輝"},{"code":"2014","name":"中鴻"},{"code":"2022","name":"聚亨"},{"code":"8415","name":"大國鋼"},{"code":"2038","name":"海光"},{"code":"2034","name":"允強"},{"code":"2007","name":"燁興"},{"code":"2009","name":"第一銅"},{"code":"2032","name":"新鋼"},{"code":"2028","name":"威致"},{"code":"2020","name":"美亞"},{"code":"2033","name":"佳大"},{"code":"1605","name":"華新"},{"code":"2030","name":"彰源"}]},
  {"name":"機殼","stocks":[{"code":"3013","name":"晟銘電"},{"code":"8210","name":"勤誠"},{"code":"6669","name":"緯穎"},{"code":"3032","name":"偉訓"},{"code":"5465","name":"富驊"},{"code":"6117","name":"迎廣"},{"code":"5426","name":"振發"}]},
  {"name":"資訊","stocks":[{"code":"3147","name":"大綜"},{"code":"5201","name":"凱衛"},{"code":"6811","name":"宏碁資訊"},{"code":"6214","name":"精誠"},{"code":"6112","name":"邁達特"},{"code":"3570","name":"大塚"},{"code":"6140","name":"訊達"},{"code":"5203","name":"訊連"},{"code":"6752","name":"叡揚"},{"code":"6148","name":"驊宏資"},{"code":"6874","name":"倍力"},{"code":"6689","name":"伊雲谷"},{"code":"2427","name":"三商電"},{"code":"2453","name":"凌群"},{"code":"2471","name":"資通"},{"code":"4953","name":"緯致"},{"code":"3029","name":"零壹"},{"code":"2480","name":"敦陽科"},{"code":"6791","name":"虎門科技"},{"code":"5202","name":"力新"},{"code":"2468","name":"華經"}]},
  {"name":"電纜","stocks":[{"code":"1617","name":"榮星"},{"code":"1616","name":"億泰"},{"code":"2009","name":"第一銅"},{"code":"1608","name":"華榮"},{"code":"1609","name":"大亞"},{"code":"1612","name":"宏泰"},{"code":"1605","name":"華新"},{"code":"1618","name":"合機"}]},
  {"name":"電腦周邊","stocks":[{"code":"3287","name":"廣寰科"},{"code":"3709","name":"鑫聯大投控"},{"code":"6228","name":"全譜"},{"code":"6276","name":"安鈦克"}]},
  {"name":"便宜電腦","stocks":[{"code":"5386","name":"青雲"},{"code":"3515","name":"華擎"},{"code":"2399","name":"映泰"},{"code":"6150","name":"撼訊"},{"code":"2425","name":"承啟"},{"code":"2465","name":"麗臺"}]},
  {"name":"電通","stocks":[{"code":"3528","name":"安馳"},{"code":"8096","name":"擎亞"},{"code":"6113","name":"亞矽"},{"code":"3036","name":"文曄"},{"code":"6227","name":"茂綸"}]}
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
  .chart-info-bar .cib-item{white-space:nowrap;display:inline-block;margin:0 3px;}
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
  .signal-tab.signal-tab-purple{color:#d946ef;}  /* 族群大戶力／族群綜合表／盤中333 分頁字（2026-09-24 使用者：紫紅色）；2026-10-08 今日即時多也用這個紫 */
  .signal-tab.signal-tab-green{color:#15803d;}  /* 2026-09-30 使用者：刀劍空(32) 分頁字改綠色（不要紅色） */
  .signal-tab.signal-tab-red{color:#dc2626;}  /* 2026-10-08 使用者：多方六個分頁（特大買單、大戶力多、四項精選強多、1+2多、創高黑龍、主力翻多）字都改同一個紅色 */

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
  /* 盤中訊號按鈕（2026-09-25 使用者）：紫底白字、字放大、按鈕加寬加高；手機、平板、桌機都一樣，沒有另外的媒體查詢 */
  .signal-badge-btn{display:flex;align-items:center;gap:10px;background:#7c3aed;border:1px solid #7c3aed;color:#fff;font-size:17px;font-weight:800;padding:10px 22px;border-radius:999px;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(124,58,237,.35);white-space:nowrap;}
  .signal-badge-btn:hover{background:#6d28d9;border-color:#6d28d9;}
  .sb-count{background:#fff;color:#5b21b6;border-radius:999px;min-width:28px;padding:1px 9px;text-align:center;font-size:15px;font-weight:800;}
  .alert-toggle{background:var(--panel);border:1px solid var(--line);color:var(--muted);font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;cursor:pointer;font-family:inherit;}
  .alert-toggle.on{background:var(--accent);color:var(--bg);border-color:var(--accent);}
  .market-strength-bar{display:flex;align-items:center;gap:14px;padding:10px 14px;background:var(--panel);border:1px solid var(--line);border-radius:10px;flex-wrap:wrap;flex:1 1 360px;max-width:640px;}
  .ms-badge{font-size:20px;font-weight:900;padding:8px 16px;border-radius:8px;background:var(--panel-2);flex-shrink:0;}
  .ms-badge.up{color:var(--up);}
  .ms-badge.down{color:var(--down);}
  .ms-lines{font-size:16px;font-weight:800;color:var(--text);line-height:1.5;}
  .ms-line.up{color:#ff5a5a;}
  .ms-line.down{color:#3ddc84;}
  .ms-badge.up{color:#ff5a5a;}
  .ms-badge.down{color:#3ddc84;}
  .ms-updated{font-size:13px;font-weight:700;color:var(--text);opacity:.85;}

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
  .tb-sub{white-space:nowrap;}
  .tb-icon{width:20px;height:20px;border-radius:6px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;}
  .toast{position:fixed;left:50%;bottom:72px;transform:translateX(-50%) translateY(12px);background:var(--panel-2);border:1px solid var(--line);color:var(--text);font-size:12px;padding:8px 16px;border-radius:999px;opacity:0;pointer-events:none;transition:opacity .15s ease,transform .15s ease;z-index:200;white-space:nowrap;}
  /* 版本戳記（右上角小字）與「有新版本」提示：加到主畫面的網頁沒有重新整理鈕，靠這個知道自己在跑哪一版。 */
  #buildStamp{position:fixed;top:calc(env(safe-area-inset-top,0px) + 2px);right:6px;font-size:10px;line-height:1;color:var(--muted);opacity:.75;z-index:120;pointer-events:none;font-variant-numeric:tabular-nums;white-space:nowrap;}
  #updateBanner{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 10px);transform:translateX(-50%);z-index:121;background:#e6675f;color:#fff;border:0;border-radius:999px;font-size:14px;font-weight:800;padding:10px 18px;box-shadow:0 6px 20px rgba(0,0,0,.5);cursor:pointer;font-family:inherit;white-space:nowrap;}
  #updateBanner[hidden]{display:none;}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
  /* 2026-09-29 使用者：發動跳出來的提醒要大一點、停留住不要自己消失，按掉才消失（跟小小的 toast 分開一個元件）。 */
  .launch-alert{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 16px);transform:translateX(-50%);z-index:210;background:#c0392b;color:#fff;border-radius:14px;box-shadow:0 10px 32px rgba(0,0,0,.5);max-width:min(92vw,560px);padding:14px 18px;}
  /* 2026-09-30 使用者：卡片擋住後面內容時要能拖到別的地方，不要釘死在正中間。 */
  .launch-alert-head{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:20px;font-weight:800;cursor:move;touch-action:none;-webkit-user-select:none;user-select:none;}
  .launch-alert-close{flex:0 0 auto;width:32px;height:32px;border-radius:999px;background:rgba(255,255,255,.22);border:0;color:#fff;font-size:18px;font-weight:800;line-height:1;cursor:pointer;font-family:inherit;}
  .launch-alert-close:hover{background:rgba(255,255,255,.34);}
  .launch-alert-body{margin-top:8px;font-size:15px;font-weight:600;line-height:1.6;}
  .launch-alert-time{display:inline-block;min-width:2.6em;font-variant-numeric:tabular-nums;font-weight:800;color:#ffd8d3;}

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
  .flag-pill.attention{background:#2563eb;border-color:#2563eb;color:#fff;font-weight:700;}
  /* 盤中打 333：33 賽馬多／34 河流多／188 做多族群／199 做空族群 */
  .race-block{margin:0 0 14px;}
  /* 族群跟族群之間畫兩條粗黑線區隔（2026-09-24 使用者：族群綜合表、族群大戶力），第一個族群上面不畫。 */
  .combo-block + .combo-block,.ghf-block + .ghf-block,.bl-block + .bl-block{border-top:8px double #111;padding-top:10px;}
  /* 2026-10-05 使用者：今日即時空上面的刀劍空(32)跟下面依時間排的訊號列表之間，也用同樣粗細的兩條黑線隔開 */
  .now-bear-blade{border-bottom:8px double #111;padding-bottom:10px;}
  /* 醞釀／發動分頁：沿用族群綜合表的表格樣式，另外給 9 欄的欄寬；發動（2）紅底、醞釀（1）藍綠底的段落標題 */
  .bl-table{min-width:68em;}
  .bl-table col.b-time{width:18%;}
  .bl-table col.b-code{width:9%;} .bl-table col.b-name{width:12%;} .bl-table col.b-score{width:9%;} .bl-table col.b-holder{width:13%;} .bl-table col.b-pct{width:9%;}
  .bl-table col.b-price{width:9%;} .bl-table col.b-box{width:8%;} .bl-table col.b-tobox{width:10%;}
  .bl-table col.b-group{width:9%;} .bl-table col.b-prev{width:9%;}
  /* 2026-10-03 使用者：欄位太窄時表頭文字被省略號吃掉看不到，改成可以換成兩行 */
  .combo-table.bl-table th{white-space:normal;overflow:visible;text-overflow:clip;line-height:1.25;}
  .bl-table .bl-score{font-weight:800;white-space:nowrap;}
  .bl-table .bl-time{white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--muted);font-weight:700;}
  .bl-table .bl-box,.bl-table .bl-turn,.bl-table .bl-ratio{white-space:nowrap;}
  .bl-table .bl-tobox.up{color:var(--up);font-weight:700;}
  .bl-star{color:#d97706;margin-left:3px;}
  .bl-eod{color:var(--muted);font-weight:700}
.bl-prev{white-space:nowrap;font-variant-numeric:tabular-nums}
.bl-tag{display:inline-block;font-size:10px;font-weight:700;border-radius:6px;padding:0 6px;margin-left:4px;background:#7c3aed;color:#fff;white-space:nowrap;}
  .bl-tag.warn{background:#d97706;}
  .bl-relaunch{display:inline-block;font-size:10px;font-weight:800;border-radius:999px;padding:0 6px;margin-left:2px;background:#7c3aed;color:#fff;white-space:nowrap;vertical-align:1px;}
  .bl-section{font-weight:800;font-size:15px;color:#fff;border-radius:8px;padding:6px 10px;margin:12px 0 8px;}
  .bl-section.bl-launch{background:#c0392b;}
  .bl-section.bl-brew{background:#0f766e;}
  .bl-section.bl-fallen{background:#7c2d12;}
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
  .race-row .race-cond{flex:1 1 100%;font-size:11px;color:var(--muted);white-space:normal;}  /* 2026-09-28 使用者：33/34/32/30 之前算了沒顯示的門檻比例，每列多一行列出來 */
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
  /* 2026-09-30 使用者：刀劍空名單多一欄「圖」，明顯可以按（雖然點整列本身就會開K線圖，這裡是額外多一個明顯的按鈕）。 */
  .race-row .race-chart-slot,.race-col-labels .race-chart-slot{flex:0 0 3.8em;text-align:center;}
  .race-row .race-chart-btn{display:inline-block;background:var(--accent);color:#fff;font-size:11px;font-weight:700;border-radius:6px;padding:2px 6px;white-space:nowrap;}
  /* 2026-10-06 使用者：刀劍空每列第二行左邊空白處放交易條件（可融資／可融券／可現股當沖／有股期，或停資／停券）。
     交易條件＋（數字那一群＋「圖」＝.race-l2nums，綁在一起不拆開）包成 .race-l2wrap 自己一整行（flex 100%），交易條件吃掉左邊
     剩下的寬度，數字那一群照舊貼齊右邊；左邊放不下一整排標籤（iPad、標籤多的）就交易條件自己一行、數字＋圖整組換到下一行，
     不會把標籤擠成直的一長條，也不會只有「圖」掉下去。標題列同一套（「交易條件」標題），欄位才對得齊。手機版見下面 media query。 */
  .race-row .race-l2wrap,.race-col-labels .race-l2wrap{display:flex;flex-wrap:wrap;align-items:center;gap:inherit;flex:1 1 100%;min-width:0;text-align:left;}
  .race-row .race-flags,.race-col-labels .race-flags-slot{flex:1 1 auto;min-width:0;display:flex;flex-wrap:wrap;align-items:center;gap:4px;text-align:left;}
  .race-row .race-l2nums,.race-col-labels .race-l2nums{display:flex;align-items:center;gap:inherit;flex:0 0 auto;margin-left:auto;}
  .race-row .race-flags span{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;white-space:nowrap;}
  .race-row .race-flags span.sig-futures{color:#93c5fd;border-color:#93c5fd66;}
  .race-row .race-flags span.stop{background:#c2410c;color:#fff;border-color:#c2410c;font-weight:700;}
  .race-row .race-flags span.pill-disposition{background:#d4a017;color:#fff;border-color:#d4a017;font-weight:700;}
  .race-row .race-flags span.pill-attention{background:#2563eb;color:#fff;border-color:#2563eb;font-weight:700;}
  .race-row .pill-warn{background:#dc2626;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;flex-shrink:0;white-space:nowrap;}
  /* 族群大戶力卡片複用signal-row的大戶力顏色膠囊／資格標籤樣式，但外層是race-row */
  .race-row .sig-label{color:var(--text);opacity:.85;white-space:nowrap;flex-shrink:0;font-size:12px;}
  .race-row .sig-label.sig-bull{background:var(--up);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .race-row .sig-label.sig-bear{background:var(--down);color:#fff;opacity:1;padding:2px 8px;border-radius:6px;font-weight:700;}
  .race-row .sig-eligibility{display:inline-flex;gap:4px;flex:1 1 auto;min-width:0;overflow:hidden;}
  .race-row .sig-eligibility span{font-size:10px;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 7px;white-space:nowrap;}
  .race-row .sig-eligibility span.sig-futures{color:#93c5fd;border-color:#93c5fd66;}
  .race-row .sig-eligibility span.pill-disposition{background:#d4a017;color:#fff;border-color:#d4a017;font-weight:700;}
  .race-row .sig-eligibility span.pill-attention{background:#2563eb;color:#fff;border-color:#2563eb;font-weight:700;}
  .race-row .pill-attention{background:#2563eb;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;flex-shrink:0;white-space:nowrap;}
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
  /* 2026-09-30 使用者：醞釀／發動的發動列表要看得到融資融券／現股當沖／股期；使用者回報放名稱欄裡
     會跟旁邊的族群欄文字重疊糊在一起，改成獨立一整行（colspan 整個表格寬度），接在該股票那一列
     下面，不會動到任何欄位本身的寬度／溢出設定，不可能再疊到別的欄位。 */
  .combo-table tr.bl-elig-row{cursor:default;}
  .combo-table tr.bl-elig-row:hover{background:inherit;}
  .combo-table tr.bl-elig-row td{padding:2px 8px 6px;}
  .combo-table tr.combo-row:has(+ tr.bl-elig-row) td{border-bottom:none;}
  .combo-table .sig-eligibility{display:flex;flex-wrap:wrap;gap:4px;}
  .combo-table .sig-eligibility span{font-size:10px;font-weight:400;color:var(--muted);background:var(--panel-2);border:1px solid var(--line);border-radius:10px;padding:1px 6px;white-space:nowrap;}
  .combo-table .sig-eligibility span.sig-futures{color:#93c5fd;border-color:#93c5fd66;}
  .combo-table .combo-pct{font-weight:700;white-space:nowrap;}
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
  .combo-table .pill-attention{background:#2563eb;color:#fff;font-weight:700;font-size:11px;border-radius:6px;padding:2px 8px;display:inline-block;margin:0 4px 2px 0;}
  .combo-head.up{color:var(--up);} .combo-head.down{color:var(--down);}
  /* 族排名次：白底紫紅字的小標籤（2026-09-24 使用者），族群綜合表、族群大戶力共用；漲的、跌的族群都一樣 */
  .race-head .combo-rank{color:#d946ef;background:#fff;border-radius:6px;padding:1px 7px;font-weight:700;display:inline-block;line-height:1.35;}
  /* 族群名稱、今天平均漲跌幅：紫底白字的獨立色塊（2026-09-24 使用者），跟漲跌方向無關，族群大戶力、族群綜合表共用 */
  .race-head .head-pill{background:#7c3aed;color:#fff;border-radius:6px;padding:1px 8px;font-weight:700;display:inline-block;}
  .combo-filter-bar{display:flex;gap:6px;margin-bottom:6px;}
  .bigorder-filter-note{font-size:12px;color:var(--muted);align-self:center;margin-left:4px;}
  .combo-filter-bar .combo-filter-btn,.combo-filter-bar .hf-filter-btn,.combo-filter-bar .hf-day-btn,.combo-filter-bar .race333-filter-btn,.combo-filter-bar .bigorder-filter-btn,.combo-filter-bar .bl-day-btn,.combo-filter-bar .sig-day-btn,.combo-filter-bar .chips-btn{padding:4px 10px;font-size:12px;}
  .combo-filter-bar .hf-day-btn[disabled]{opacity:.45;cursor:default;}
  /* 大戶力≥10%／≤-10%篩選鈕改黑底白字（2026-09-24 使用者：「這兩項功能全部改成黑底白字」），
     族群大戶力／族群綜合表／盤中333三個分頁共用同一套樣式；選取中額外加紫色外框標示，
     不然黑底白字選取前後兩個狀態會分不出哪個正在篩選中。 */
  .hf-filter-btn,.combo-filter-btn,.race333-filter-btn,.bigorder-filter-btn,.bl-day-btn,.sig-day-btn,.chips-btn{background:#000;color:#fff;border-color:#000;}
  .combo-filter-bar .bl-day-btn[disabled],.combo-filter-bar .sig-day-btn[disabled],.combo-filter-bar .chips-btn[disabled]{opacity:.45;cursor:default;}
  .hf-filter-btn:hover,.combo-filter-btn:hover,.race333-filter-btn:hover,.bigorder-filter-btn:hover{background:#2a2a2a;}
  .hf-filter-btn.active,.combo-filter-btn.active,.race333-filter-btn.active,.bigorder-filter-btn.active,.bl-day-btn.active,.sig-day-btn.active,.chips-btn.active{background:#000;color:#c084fc;border-color:#000;font-weight:800;}  /* 按下去整個字變紫色（2026-09-24 使用者），不用外框 */
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
  /* 訊號中心右上角的「收合」「隱藏」（2026-09-25 使用者）：紅底白色符號；手機、平板、桌機都一樣，沒有另外的媒體查詢 */
  #signalModalInner #smCollapse,#signalModalInner #smClose{background:#dc2626;border-color:#dc2626;color:#fff;font-weight:800;}
  #signalModalInner #smCollapse:hover,#signalModalInner #smClose:hover{background:#b91c1c;border-color:#b91c1c;}
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
  /* 盤後籌碼排行（2026-09-25 使用者：底部「盤後籌碼排行」先做） */
  .chips-modal{position:fixed;inset:0;z-index:102;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:10px;}
  .chips-modal[hidden]{display:none;}
  .chips-modal.behind-chart{z-index:98;}  /* 手機／iPad 直式開K線圖（z-index 100）時退到後面，關圖再回來 */
  .chips-inner{background:var(--bg);border:1px solid var(--line);border-radius:14px;width:min(1120px,96vw);height:min(920px,92vh);overflow:auto;padding:14px;box-shadow:0 12px 40px rgba(0,0,0,.5);}
  .chips-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;background:#33333a;color:#fff;padding:10px 12px;border-radius:10px;margin-bottom:10px;}
  .chips-title{font-weight:800;font-size:18px;}
  .chips-sub{font-size:12px;color:#d5d5d5;margin-top:2px;}
  .chips-controls{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;margin:8px 0;}
  .chips-controls .combo-filter-bar{margin-bottom:0;flex-wrap:wrap;}
  .chips-table th.num,.chips-table td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}
  .chips-table td.chips-active,.chips-table th.chips-active{font-weight:800;background:rgba(192,132,252,.14);}
  .chips-table .chips-rank{color:var(--muted);width:2.4em;}
  .chips-streak-buy{color:#ff5a5a;font-weight:700;white-space:nowrap;}
  .chips-streak-sell{color:#3ddc84;font-weight:700;white-space:nowrap;}
  .chips-more{margin:8px 0 4px;}
  .chips-brew-tag{display:inline-block;font-size:10px;font-weight:700;border-radius:6px;padding:0 6px;background:#0f766e;color:#fff;white-space:nowrap;}
  /* 名稱欄原本單行截斷（…），標記放在名稱後面會被切掉：籌碼表的名稱欄改可換行，標記接在名稱後、放不下就換到下一行 */
  .chips-table td.combo-name{white-space:normal;overflow:visible;text-overflow:clip;}
  .chips-flag{display:inline-block;font-size:10px;font-weight:700;line-height:16px;border-radius:6px;padding:0 5px;margin:1px 0 1px 4px;vertical-align:middle;white-space:nowrap;}
  .chips-flag.stop{background:#c2410c;color:#fff;}      /* 停資／停券／不可當沖 */
  .chips-flag.futures{background:#1d4ed8;color:#fff;}   /* 有股票期貨 */
  /* 放空籌碼分頁鈕（2026-09-25 使用者）：綠底白字；選到時用亮一點的綠加白框，手機、平板、桌機都一樣 */
  #chipsTabs .signal-tab[data-measure="short"]{background:#15803d;border-color:#15803d;color:#fff;}
  #chipsTabs .signal-tab[data-measure="short"]:hover{background:#166534;border-color:#166534;}
  #chipsTabs .signal-tab[data-measure="short"].active{background:#22c55e;border-color:#fff;color:#fff;box-shadow:0 0 0 2px #22c55e;}
  /* 籌碼暴增雷達（2026-10-04 使用者：照莊爸 zhuang.tw/radar 做，盤後籌碼排行第一個分頁）：集保週資料的大戶增減；
     紅＝大戶增加、綠＝減少；金色方塊＝均線分數（12 分以上實心、8～11 半填、7 以下只描邊）；圓圈＝當週買超榜名次 */
  #chipsTabs .signal-tab[data-measure="radar"]{background:#9f1239;border-color:#9f1239;color:#fff;}
  #chipsTabs .signal-tab[data-measure="radar"]:hover{background:#881337;border-color:#881337;}
  #chipsTabs .signal-tab[data-measure="radar"].active{background:#e11d48;border-color:#fff;color:#fff;box-shadow:0 0 0 2px #e11d48;}
  .rd-wrap{display:flex;flex-direction:column;gap:16px;padding-bottom:10px;}
  .rd-headrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
  .rd-weekly-btn{display:inline-flex;flex-direction:column;align-items:flex-start;gap:1px;border:0;border-radius:12px;padding:8px 16px;background:linear-gradient(135deg,#b23a2f,#8c2a22);color:#fff;font-weight:900;font-size:16px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35);font-family:inherit;letter-spacing:1px;}
  .rd-weekly-btn small{font-size:11px;font-weight:700;opacity:.9;letter-spacing:0;}
  .rd-outside{margin-top:8px;font-size:12px;}
  .rd-outside-btn{border:1px dashed var(--line);background:transparent;color:var(--muted);border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer;font-family:inherit;}
  .rd-outside-list{display:flex;flex-wrap:wrap;gap:4px 10px;margin-top:6px;color:var(--muted);}
  .rd-outside-list span{cursor:pointer;white-space:nowrap;}
  .rd-out-badge{border-color:#8a7a5a !important;color:#cbbd9b !important;}
  .rw-back{border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:999px;padding:4px 12px;font-size:12px;cursor:pointer;font-family:inherit;}
  .rw-nav{display:flex;flex-wrap:wrap;gap:6px;}
  .rw-nav button{border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:999px;padding:3px 12px;font-size:12px;cursor:pointer;font-family:inherit;}
  .rw-def{font-size:13px;line-height:1.85;color:var(--text);}
  .rw-def b{color:#f08a7e;}
  .rw-sum{margin:0;padding-left:22px;font-size:14px;line-height:1.95;}
  .rw-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px;}
  .rw-stat{background:var(--panel);border:1px solid var(--line);border-top:3px solid #b23a2f;border-radius:10px;padding:10px;text-align:center;}
  .rw-stat b{display:block;font-size:26px;color:#f08a7e;font-weight:900;font-family:"Noto Serif TC","Songti TC",serif;}
  .rw-stat span{font-size:12px;color:var(--muted);}
  .rw-recon-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:10px;}
  .rw-rtable{width:100%;border-collapse:collapse;font-size:13px;}
  .rw-rtable td{padding:5px 4px;border-bottom:1px solid rgba(255,255,255,.06);}
  .rw-rtable td:last-child{text-align:right;font-weight:700;}
  .rw-rtable tr.rw-gap td{border-top:2px solid var(--line);}
  .rw-rank{display:flex;flex-direction:column;gap:6px;}
  .rw-grow{display:grid;grid-template-columns:28px minmax(70px,1fr) 70px 54px minmax(0,2.4fr);align-items:center;gap:8px;background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:7px 10px;font-size:13px;}
  .rw-grow.rw-hit{border-color:#e6675f;box-shadow:inset 0 0 0 1px #e6675f;}
  .rw-grow .rw-n{font-weight:800;}
  .rw-grow.rw-hit .rw-n{color:#f08a7e;}
  .rw-grow .rw-l{color:var(--muted);font-size:12px;min-width:0;}
  .rw-mv.up{color:#ff6b6b;} .rw-mv.down{color:#4ade80;} .rw-mv.new{color:#f08a7e;} .rw-mv.same{color:var(--muted);}
  .rw-ghead{display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:var(--panel);border:1px solid var(--line);border-left:4px solid #b23a2f;border-radius:8px;padding:8px 12px;margin-top:10px;}
  .rw-ghead b{font-size:17px;color:#f08a7e;font-family:"Noto Serif TC","Songti TC",serif;}
  .rw-tagc{border:1px solid #e6675f;color:#f08a7e;border-radius:999px;padding:1px 8px;font-size:11px;}
  .rw-tagc.dark{border-color:var(--text);color:var(--text);}
  .rw-card{display:grid;grid-template-columns:minmax(110px,1fr) minmax(130px,1.1fr) minmax(0,1.6fr);gap:10px;align-items:center;background:var(--panel);border:1px solid var(--line);border-left:4px solid #b23a2f;border-radius:8px;padding:8px 12px;margin-top:6px;font-size:13px;}
  .rw-code{color:#f08a7e;font-weight:800;font-size:15px;cursor:pointer;}
  .rw-name{font-weight:800;cursor:pointer;}
  .rw-grp{font-size:11px;color:var(--muted);margin-top:2px;}
  .rw-pill{display:inline-block;border-radius:999px;padding:1px 10px;font-size:12px;font-weight:800;background:rgba(167,139,250,.18);color:#c4b5fd;border:1px solid rgba(167,139,250,.45);}
  .rw-px{font-size:12px;color:var(--muted);margin-top:3px;}
  .rw-c3{font-size:12.5px;line-height:1.7;}
  .rw-star{color:#facc15;font-weight:800;}
  .rw-after{font-size:12px;color:var(--muted);}
  .rw-notebox{border:1px dashed var(--line);border-radius:8px;padding:8px 12px;font-size:12.5px;line-height:1.8;margin-top:8px;color:var(--text);}
  .rw-banner{border:1px solid var(--line);border-radius:8px;padding:8px 12px;text-align:center;color:#f08a7e;font-weight:700;font-size:13px;margin-top:8px;}
  .rw-read{margin:0;padding-left:20px;font-size:13.5px;line-height:1.95;}
  .rw-read b{color:#f08a7e;}
  @media (max-width:640px){
    .rw-card{grid-template-columns:1fr;gap:4px;}
    .rw-recon-tables{grid-template-columns:1fr;}
    .rw-grow{grid-template-columns:22px minmax(60px,1fr) 62px 44px;}
    .rw-grow .rw-l{grid-column:1 / -1;}
    .rw-stat b{font-size:21px;}
  }
  .rd-tag{display:inline-block;border:1px solid #e6675f;color:#f08a7e;border-radius:4px;padding:1px 8px;font-size:11px;letter-spacing:1px;}
  .rd-title{font-size:28px;font-weight:900;color:#f08a7e;margin:6px 0 2px;letter-spacing:3px;font-family:"Noto Serif TC","Songti TC",serif;}
  .rd-sub{font-size:12px;color:var(--muted);}
  .rd-pill{display:inline-flex;align-items:center;gap:6px;border:1px solid #6b5b3e;background:rgba(227,179,65,.10);color:#e3c27a;border-radius:999px;padding:3px 12px;font-size:12px;margin-top:8px;line-height:1.5;}
  .rd-intro{border-left:3px solid #e6675f;background:var(--panel);border-radius:8px;padding:10px 14px;font-size:13px;line-height:1.85;}
  .rd-intro p{margin:0 0 4px;}
  .rd-intro b.rd-up{color:#ff6b6b;} .rd-intro b.rd-down{color:#4ade80;}
  .rd-search{display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
  .rd-search input{flex:1 1 150px;max-width:240px;background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:8px 10px;font-size:16px;font-family:inherit;}
  .rd-search button{background:#2a2420;border:1px solid #e6675f;color:#fff;border-radius:6px;padding:8px 14px;font-weight:800;cursor:pointer;font-family:inherit;font-size:14px;}
  .rd-hint{font-size:11px;color:var(--muted);line-height:1.7;margin-top:4px;}
  .rd-grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;align-items:start;}
  .rd-card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px;min-width:0;}
  .rd-card-head{display:flex;align-items:center;gap:6px 8px;flex-wrap:wrap;margin-bottom:8px;}
  .rd-name{font-size:18px;font-weight:800;cursor:pointer;}
  .rd-code{font-size:12px;color:var(--muted);}
  .rd-badge{display:inline-flex;align-items:center;gap:4px;border:1px solid #e6675f;color:#f08a7e;border-radius:999px;padding:0 8px;font-size:11px;line-height:20px;}
  .rd-big{margin-left:auto;font-size:21px;font-weight:800;font-variant-numeric:tabular-nums;}
  .rd-up{color:#ff6b6b;} .rd-down{color:#4ade80;}
  .rd-circle{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border:1.5px solid #e6675f;border-radius:50%;font-size:10px;color:#f08a7e;font-weight:800;flex:0 0 auto;}
  .rd-trow{display:grid;grid-template-columns:42px 1fr 62px 20px;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:12px;}
  .rd-track{position:relative;height:10px;background:rgba(255,255,255,.08);border-radius:999px;}
  .rd-track::after{content:'';position:absolute;left:50%;top:-2px;bottom:-2px;width:1px;background:rgba(255,255,255,.35);}
  .rd-fill{position:absolute;top:0;bottom:0;border-radius:999px;}
  .rd-fill.up{left:50%;background:linear-gradient(90deg,#b4233c,#ff6b81);}
  .rd-fill.down{right:50%;background:linear-gradient(90deg,#4ade80,#16a34a);}
  .rd-val{text-align:right;font-variant-numeric:tabular-nums;font-weight:700;white-space:nowrap;}
  .rd-note{font-size:11px;color:var(--muted);margin-top:6px;line-height:1.7;}
  .rd-ma{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:18px;border-radius:4px;font-size:11px;font-weight:800;padding:0 3px;box-sizing:border-box;}
  .rd-ma.full{background:#e3b341;color:#1a1408;}
  .rd-ma.half{background:rgba(227,179,65,.30);color:#f1d48a;border:1px solid rgba(227,179,65,.65);}
  .rd-ma.line{border:1px solid #8a7a5a;color:#cbbd9b;}
  .rd-ma.none{visibility:hidden;}
  .rd-sec-title{font-size:21px;font-weight:900;letter-spacing:1px;display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 10px;margin:2px 0 8px;font-family:"Noto Serif TC","Songti TC",serif;}
  .rd-sec-title small{font-size:12px;color:var(--muted);font-weight:600;letter-spacing:0;font-family:inherit;}
  .rd-weeks{display:flex;flex-wrap:wrap;gap:4px;margin:0 0 10px;}
  .rd-week{border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:999px;padding:3px 10px;font-size:12px;cursor:pointer;font-family:inherit;}
  .rd-week.active{border-color:#e6675f;color:#fff;background:rgba(230,103,95,.25);font-weight:800;}
  .rd-list-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;}
  .rd-list-title{font-size:16px;font-weight:800;}
  .rd-date-pill{border:1px solid var(--line);border-radius:999px;padding:1px 8px;font-size:11px;color:var(--muted);white-space:nowrap;}
  .rd-lrow{display:grid;grid-template-columns:40px minmax(60px,1.1fr) minmax(50px,1.3fr) 54px 24px;align-items:center;gap:6px;padding:5px 2px;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px;cursor:pointer;}
  .rd-lrow:hover,.rd-grow:hover,.rd-srow:hover{background:var(--panel-2);}
  .rd-c{color:var(--muted);font-size:12px;font-variant-numeric:tabular-nums;}
  .rd-n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;}
  .rd-bar{height:10px;border-radius:999px;background:rgba(255,255,255,.08);position:relative;overflow:hidden;}
  .rd-bar i{position:absolute;left:0;top:0;bottom:0;border-radius:999px;}
  .rd-bar i.up{background:linear-gradient(90deg,#b4233c,#ff6b81);}
  .rd-bar i.down{background:linear-gradient(90deg,#15803d,#4ade80);}
  .rd-star{color:#facc15;margin-left:3px;font-size:12px;}
  .rd-empty-list{font-size:12px;color:var(--muted);padding:8px 2px;}
  .rd-select{background:var(--panel);border:1px solid var(--line);color:var(--text);border-radius:6px;padding:3px 6px;font-size:12px;font-family:inherit;}
  .rd-ctl{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;font-size:12px;color:var(--muted);margin-bottom:8px;}
  .rd-legend{border:1px dashed var(--line);border-radius:8px;padding:8px 10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:11px;color:var(--muted);margin:0 0 8px;line-height:1.7;}
  .rd-cell{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;width:54px;height:54px;border-radius:6px;border:1px solid var(--line);background:rgba(255,255,255,.03);font-size:10px;line-height:1.3;flex:0 0 auto;}
  .rd-cell.gold{background:#e3b341;color:#1a1408;border-color:#e3b341;}
  .rd-cell b{font-size:14px;}
  .rd-cells{display:flex;flex-wrap:wrap;gap:4px;padding:4px 0;}
  .rd-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line);border-radius:10px;background:var(--panel);}
  .rd-table{width:100%;border-collapse:collapse;font-size:13px;}
  .rd-table th{font-size:11px;color:#f08a7e;text-align:left;padding:7px 6px;border-bottom:1px solid var(--line);white-space:nowrap;font-weight:700;}
  .rd-table th small{display:block;color:var(--muted);font-weight:500;}
  .rd-table td{padding:7px 6px;border-bottom:1px solid rgba(255,255,255,.06);white-space:nowrap;font-variant-numeric:tabular-nums;}
  .rd-table tr.rd-crow{cursor:pointer;}
  .rd-table tr.rd-crow:hover td{background:var(--panel-2);}
  .rd-table tr.rd-open td{background:rgba(227,179,65,.08);}
  .rd-table tr.rd-gridrow td{white-space:normal;background:rgba(255,255,255,.02);}
  .rd-count{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;font-weight:800;font-size:12px;}
  .rd-count.gold{background:#e3b341;color:#1a1408;}
  .rd-count.line{border:1.5px solid #e6675f;color:#f08a7e;}
  .rd-share{display:inline-block;width:46px;height:8px;border-radius:999px;background:rgba(255,255,255,.08);vertical-align:middle;margin-right:6px;position:relative;overflow:hidden;}
  .rd-share i{position:absolute;left:0;top:0;bottom:0;background:#e3b341;border-radius:999px;}
  .rd-muted{color:var(--muted);}
  .rd-groups{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;align-items:start;}
  .rd-grow{display:grid;grid-template-columns:22px minmax(64px,1fr) minmax(50px,1.2fr) 60px;gap:6px;align-items:center;padding:6px 4px;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px;cursor:pointer;border-radius:4px;}
  .rd-grow.active{background:rgba(230,103,95,.18);}
  .rd-srow{display:grid;grid-template-columns:40px minmax(60px,1fr) minmax(40px,1.2fr) 30px 58px 24px;gap:6px;align-items:center;padding:5px 2px;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px;cursor:pointer;}
  .rd-srow.rd-three{grid-template-columns:40px minmax(60px,1fr) minmax(40px,1.4fr) 58px 24px;}
  .rd-range{border:1px solid var(--line);border-radius:999px;padding:1px 8px;font-size:11px;color:var(--muted);white-space:nowrap;}
  .rd-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px;align-items:center;font-size:12px;color:var(--muted);}
  .rd-chip{border:1px solid var(--line);background:var(--panel);border-radius:6px;padding:3px 8px;font-size:12px;color:var(--text);cursor:pointer;font-family:inherit;}
  .rd-hot{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;}
  .rd-kbox{border:1px solid var(--line);border-radius:8px;padding:6px 6px 2px;margin:6px 0 8px;background:rgba(0,0,0,.18);}
  .rd-kbox.closed{cursor:pointer;padding:6px;}
  .rd-khead{font-size:11px;color:var(--muted);display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:2px;}
  .rd-kbox svg{display:block;width:100%;height:auto;}
  .rd-ma5{color:#60a5fa;} .rd-ma20{color:#f59e0b;} .rd-ma60{color:#c084fc;}
  .rd-inst-wrap{display:flex;gap:6px;align-items:stretch;margin:6px 0 2px;}
  .rd-inst-cols{flex:1;display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:6px;}
  .rd-inst-col{display:flex;flex-direction:column;align-items:center;min-width:0;}
  .rd-inst-plot{position:relative;width:100%;max-width:44px;height:96px;background:rgba(255,255,255,.06);border-radius:4px;}
  .rd-inst-plot::after{content:'';position:absolute;left:-3px;right:-3px;top:50%;height:1px;background:rgba(255,255,255,.35);}
  .rd-inst-plot i{position:absolute;left:0;right:0;border-radius:3px;}
  .rd-inst-plot i.up{bottom:50%;background:linear-gradient(0deg,#b4233c,#ff6b81);}
  .rd-inst-plot i.down{top:50%;background:linear-gradient(180deg,#16a34a,#4ade80);}
  .rd-inst-axis{display:flex;flex-direction:column;justify-content:space-between;height:96px;font-size:10px;color:var(--muted);text-align:right;white-space:nowrap;}
  .rd-inst-lab{font-size:10px;color:var(--muted);margin-top:3px;white-space:nowrap;}
  .rd-inst-pct{font-size:10px;font-weight:700;}
  .rd-itable{width:100%;border-collapse:collapse;font-size:12px;margin-top:4px;}
  .rd-itable th{font-size:11px;color:var(--muted);font-weight:600;text-align:right;padding:4px 3px;border-bottom:1px solid var(--line);}
  .rd-itable th:first-child,.rd-itable td:first-child{text-align:left;}
  .rd-itable td{text-align:right;padding:5px 3px;border-bottom:1px solid rgba(255,255,255,.06);font-variant-numeric:tabular-nums;}
  .rd-sel{outline:1.5px solid #e6675f;background:rgba(230,103,95,.14);border-radius:4px;}
  .rd-cap{display:inline-block;font-size:10px;line-height:15px;border:1px solid #8b5cf6;color:#c4b5fd;border-radius:4px;padding:0 4px;margin-left:4px;vertical-align:middle;white-space:nowrap;}
  .rd-cap-short{display:none;}
  @media (max-width:640px){ .rd-lrow .rd-cap-long{display:none;} .rd-lrow .rd-cap-short{display:inline;} }
  .rd-btn-sm{background:transparent;border:1px solid var(--line);color:var(--text);border-radius:6px;padding:2px 8px;font-size:12px;cursor:pointer;font-family:inherit;}
  @media (max-width:640px){
    .rd-title{font-size:23px;}
    .rd-groups{grid-template-columns:1fr;}
    .rd-lrow{grid-template-columns:36px minmax(56px,1.2fr) minmax(36px,1fr) 50px 22px;font-size:12px;}
    .rd-srow{grid-template-columns:36px minmax(56px,1fr) minmax(30px,1fr) 28px 52px 22px;font-size:12px;}
    .rd-srow.rd-three{grid-template-columns:36px minmax(56px,1fr) minmax(30px,1.2fr) 52px 22px;}
    .rd-hot{grid-template-columns:1fr;}
  }
  /* 波段日報（2026-09-26 使用者：照波段精選日報做）：數字方塊、摘要、族群卡、個股卡 */
  .sw-basis{font-size:12px;color:var(--muted);margin:6px 0 8px;line-height:1.6;}
  .sw-tiles{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 12px;}
  .sw-tile{flex:1 1 120px;background:var(--panel);border:1px solid var(--line);border-top:3px solid #e6675f;border-radius:10px;padding:10px 8px;text-align:center;}
  .sw-tile b{display:block;font-size:26px;line-height:1.1;color:#e6675f;font-variant-numeric:tabular-nums;}
  .sw-tile span{font-size:12px;color:var(--muted);}
  .sw-summary{list-style:decimal;padding-left:24px;margin:8px 0 12px;font-size:14px;line-height:1.7;}
  .sw-summary li{margin:4px 0;}
  .sw-quote{border:1px solid var(--line);border-radius:10px;padding:8px 12px;text-align:center;color:#e6675f;font-weight:800;margin:10px 0;}
  .sw-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;margin:8px 0;}
  .sw-card{background:var(--panel);border:1px solid var(--line);border-left:4px solid #e6675f;border-radius:12px;padding:12px 14px;cursor:pointer;}
  .sw-card:hover{background:var(--panel-2);}
  .sw-card.green{border-left-color:#5fae6f;}
  .sw-card .sw-code{font-size:22px;font-weight:800;color:#e6675f;line-height:1.1;}
  .sw-card .sw-name{font-size:17px;font-weight:700;margin-top:2px;}
  .sw-card .sw-group{font-size:12px;color:var(--muted);margin-top:2px;}
  .sw-hot{color:#e6675f;font-weight:700;margin-left:6px;}
  .sw-pill{display:inline-block;border:1px solid #7c3aed;color:#7c3aed;background:rgba(124,58,237,.08);border-radius:999px;padding:2px 10px;font-size:12px;font-weight:700;margin:6px 0 4px;}
  .sw-line{font-size:14px;margin:3px 0;line-height:1.6;}
  .sw-line .muted{color:var(--muted);}
  .sw-def{font-size:14px;margin-top:4px;}
  .sw-def b{color:#e6675f;}
  .sw-risk{color:#e6675f;font-size:13px;margin-top:4px;font-weight:700;}
  .sw-health{display:inline-block;font-size:12px;border-radius:6px;padding:0 6px;background:#0f766e;color:#fff;font-weight:700;margin-left:6px;}
  .sw-gcard{background:var(--panel);border:1px solid var(--line);border-left:4px solid #5fae6f;border-radius:12px;padding:12px 14px;}
  .sw-gcard.cold{border-left-color:#e6675f;}
  .sw-gcard .sw-gname{font-size:20px;font-weight:800;color:#e6675f;}
  .sw-gbadge{display:inline-block;border:1px solid #e6675f;color:#e6675f;border-radius:999px;padding:1px 10px;font-size:12px;font-weight:700;margin-left:6px;}
  .sw-gline{font-size:14px;margin:4px 0;}
  .sw-gjudge{font-size:13px;color:var(--muted);margin-top:4px;line-height:1.5;}
  .sw-noteBox{border:1px dashed var(--line);border-radius:10px;padding:8px 12px;font-size:13px;line-height:1.6;color:var(--text);margin:8px 0;}
  .sw-foot{font-size:12px;color:var(--muted);border-top:1px solid var(--line);padding-top:8px;margin-top:14px;line-height:1.6;}
  .sw-rule{font-size:12px;color:var(--muted);border-left:3px solid var(--line);padding:4px 10px;margin:8px 0;line-height:1.6;}
  /* 第二階段（2026-09-26）：基本面那一行、處置動態的列 */
  .sw-fund{font-size:13px;}
  .sw-dlist{display:flex;flex-direction:column;gap:6px;margin:6px 0 10px;}
  .sw-drow{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 10px;background:var(--panel);border:1px solid var(--line);border-left:4px solid #e6675f;border-radius:10px;padding:8px 12px;cursor:pointer;font-size:14px;line-height:1.5;}
  .sw-drow:hover{background:var(--panel-2);}
  .sw-drow .sw-dcode{font-size:18px;font-weight:800;color:#e6675f;}
  .sw-drow .sw-dname{font-size:16px;font-weight:700;}
  .sw-drow .sw-dgroup{font-size:12px;color:var(--muted);}
  .sw-drow .sw-dextra{flex-basis:100%;font-size:13px;}
  .sw-verdict{display:inline-block;margin-top:6px;border-radius:6px;padding:2px 8px;font-size:13px;font-weight:700;background:#0f766e;color:#fff;}
  .sw-tile.etf b{font-size:18px;}
  .sw-tile.etf span{display:block;}
  .sw-etf-issuer{font-size:12px;font-weight:400;margin-left:6px;opacity:.85;}
  .sw-etf-kind{font-size:13px;font-weight:700;margin:8px 0 2px;color:var(--muted);}
  .sw-drow.etf{border-left-color:#7c3aed;}
  .sw-verdict.bad{background:#b91c1c;}
  /* 飆股雷達（2026-10-07 使用者：照莊爸 App 的飆股雷達做）：聖杯分組、邏輯卡片、時間點膠囊、名單 */
  .gr-controls{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;margin:2px 0 8px;font-size:13px;}
  .gr-controls select{background:var(--panel);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:3px 6px;font-family:inherit;font-size:13px;}
  .gr-controls label{display:inline-flex;align-items:center;gap:4px;color:var(--muted);}
  .gr-controls button{background:var(--panel);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:3px 10px;font-family:inherit;font-size:13px;cursor:pointer;}
  .gr-updated{font-size:12px;color:var(--muted);}
  .gr-saint{margin:12px 0 6px;font-size:16px;font-weight:800;display:flex;align-items:baseline;gap:8px;}
  .gr-saint small{font-size:12px;color:var(--muted);font-weight:400;}
  .gr-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:8px;}
  .gr-card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:8px 10px;min-width:0;}
  .gr-card-head{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin-bottom:2px;}
  .gr-card-head b{font-size:15px;}
  .gr-kind{font-size:11px;border-radius:999px;padding:0 7px;border:1px solid var(--line);color:var(--muted);}
  .gr-kind.swing{border-color:#60a5fa;color:#60a5fa;}
  .gr-kind.overnight{border-color:#f59e0b;color:#f59e0b;}
  .gr-cal{font-size:11px;color:var(--muted);margin-left:auto;}
  .gr-info{background:none;border:1px solid var(--line);color:var(--muted);border-radius:999px;font-size:11px;padding:0 7px;cursor:pointer;font-family:inherit;}
  .gr-desc{font-size:12px;color:var(--muted);background:var(--panel-2);border-radius:8px;padding:6px 8px;margin:4px 0;line-height:1.55;}
  .gr-slots{display:flex;flex-wrap:wrap;gap:4px;margin:4px 0 6px;}
  .gr-slot{font-size:12px;border-radius:999px;padding:1px 8px;border:1px dashed var(--line);color:var(--muted);background:none;cursor:pointer;font-family:inherit;}
  .gr-slot.has{border-style:solid;color:var(--text);}
  .gr-slot.sel{border-color:#eab308;color:#eab308;background:rgba(234,179,8,.14);font-weight:700;}
  .gr-slot b{font-weight:800;margin-left:3px;}
  .gr-list{width:100%;border-collapse:collapse;font-size:13px;}
  .gr-list th{font-size:11px;color:var(--muted);font-weight:400;padding:2px 4px;white-space:nowrap;}
  .gr-list td{padding:3px 4px;border-top:1px solid var(--line);white-space:nowrap;}
  .gr-list tr.gr-row{cursor:pointer;}
  .gr-list tr.gr-row:hover td{background:var(--panel-2);}
  .gr-list .l{text-align:left;} .gr-list .r{text-align:right;}
  .gr-name b{font-weight:700;} .gr-name small{color:var(--muted);margin-left:4px;}
  .gr-grp{font-size:11px;color:#c4b5fd;margin-left:4px;}
  .gr-new{font-size:10px;background:#dc2626;color:#fff;border-radius:4px;padding:0 4px;margin-left:4px;}
  .gr-ma{display:inline-block;min-width:22px;text-align:center;border-radius:6px;font-weight:800;font-size:12px;}
  .gr-ma.hi{background:#eab308;color:#111;} .gr-ma.mid{background:rgba(234,179,8,.22);color:#eab308;} .gr-ma.lo{color:var(--muted);}
  .gr-list tr.gone td{opacity:.5;}
  .gr-list tr.gone .gr-name b,.gr-list tr.gone .gr-name small{text-decoration:line-through;}
  .gr-none{font-size:12px;color:var(--muted);padding:4px 2px;}
  .gr-up{color:var(--up);} .gr-down{color:var(--down);}
  @media(max-width:640px){ .gr-grid{grid-template-columns:1fr;} .gr-list .gr-mcap{display:none;} }
  /* 處置監獄（2026-10-09 使用者：照莊爸「處置股・出獄與嫌疑名單」做）：說明框、出獄週表、犯罪集團、入獄／嫌疑卡片、門檻、前科查詢 */
  .jl-meta{font-size:12px;color:var(--muted);margin:2px 0 6px;}
  .jl-pill{display:inline-block;font-size:12px;border:1px solid var(--line);background:var(--panel-2);border-radius:999px;padding:3px 10px;margin-bottom:8px;color:var(--muted);}
  .jl-box{background:var(--panel);border:1px solid var(--line);border-left:4px solid #b91c1c;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;line-height:1.7;}
  .jl-box b{color:#dc2626;}
  .jl-faq-q{display:inline;margin-right:4px;}
  .jl-h{font-size:18px;font-weight:800;margin:18px 0 6px;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;}
  .jl-h small{font-size:12px;font-weight:400;color:var(--muted);}
  .jl-note{font-size:12px;color:var(--muted);margin:4px 0;}
  .jl-q{display:flex;gap:8px;margin:8px 0;}
  .jl-q input{flex:0 1 260px;min-width:0;background:var(--panel);color:var(--text);border:1px solid var(--line);border-radius:10px;padding:8px 12px;font-size:15px;font-family:inherit;}
  .jl-q button{background:#b91c1c;color:#fff;border:0;border-radius:10px;padding:8px 18px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;white-space:nowrap;}
  .jl-week{border:1px solid var(--line);border-radius:10px;padding:8px;margin:6px 0;background:var(--panel);}
  .jl-week-h{font-weight:800;color:#dc2626;margin:0 0 6px;}
  .jl-week-h small{font-weight:400;color:var(--muted);margin-left:6px;}
  .jl-days{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;}
  .jl-day{border:1px solid var(--line);border-radius:10px;padding:6px 8px;min-height:64px;background:var(--panel-2);}
  .jl-day.past{opacity:.75;}
  .jl-day-h{font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:4px;}
  .jl-day-h small{color:var(--muted);font-weight:400;}
  .jl-cnt{margin-left:auto;border:1px solid #dc2626;color:#dc2626;border-radius:999px;font-size:11px;padding:0 6px;font-weight:700;}
  .jl-cnt.big{font-size:12px;padding:1px 8px;}
  .jl-closed{color:#3b82f6;font-size:12px;}
  .jl-empty{color:var(--muted);}
  .jl-stk{background:none;border:0;padding:1px 0;color:var(--text);font-family:inherit;font-size:13px;cursor:pointer;text-align:left;}
  .jl-stk:hover{text-decoration:underline;}
  .jl-code{color:#dc2626;font-variant-numeric:tabular-nums;}
  .jl-stk small{color:var(--muted);}
  .jl-newtag{font-size:10px;border:1px solid #dc2626;color:#dc2626;border-radius:4px;padding:0 3px;margin-left:4px;}
  .jl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:8px;}
  .jl-card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:8px 10px;min-width:0;}
  .jl-card-h{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin-bottom:4px;}
  .jl-card-h > b{font-size:15px;}
  .jl-card-h .jl-stk{font-size:15px;font-weight:700;}
  .jl-row{display:flex;align-items:center;gap:6px;border-top:1px solid var(--line);padding:3px 0;}
  .jl-rel{margin-left:auto;font-size:12px;color:var(--muted);}
  .jl-badge{margin-left:auto;font-size:12px;border-radius:999px;padding:1px 9px;border:1px solid var(--line);white-space:nowrap;}
  .jl-badge.jail{border-color:#dc2626;color:#dc2626;}
  .jl-badge.hi{border-color:#dc2626;color:#dc2626;background:rgba(220,38,38,.08);}
  .jl-badge.lo{border-color:#16a34a;color:#16a34a;background:rgba(22,163,74,.08);}
  .jl-badge.first{border-color:#b45309;color:#b45309;}
  .jl-sub{font-size:12px;color:var(--muted);}
  .jl-why{font-size:11px;color:var(--muted);margin-top:2px;}
  .jl-status{font-size:13px;margin:2px 0 4px;}
  .jl-th{border-top:1px dashed var(--line);padding-top:4px;}
  .jl-th-h{font-size:12px;color:var(--muted);margin-bottom:2px;}
  .jl-line{font-size:13px;line-height:1.6;}
  .jl-line b{color:#dc2626;font-size:14px;}
  .jl-line.note{color:var(--muted);font-size:12px;}
  .jl-today{color:var(--muted);font-size:12px;}
  .jl-today.ok{color:#16a34a;}
  .jl-copy{border:1px solid var(--line);border-radius:10px;padding:8px;margin:8px 0;background:var(--panel);}
  .jl-copy-h{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:6px;}
  .jl-copy-h button{margin-left:auto;border:1px solid #dc2626;color:#dc2626;background:none;border-radius:999px;padding:2px 12px;cursor:pointer;font-family:inherit;}
  .jl-copy textarea{width:100%;box-sizing:border-box;background:var(--panel-2);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:6px 8px;font-family:inherit;font-size:13px;line-height:1.6;}
  .jl-index{border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:var(--panel);}
  .jl-index summary{cursor:pointer;color:#dc2626;font-size:13px;}
  .jl-index-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:2px 8px;margin-top:6px;}
  .jl-qcard{margin:6px 0;}
  .jl-tier{font-size:12px;border-radius:999px;padding:1px 8px;border:1px solid var(--line);}
  .jl-tier.boss{border-color:#b45309;color:#b45309;} .jl-tier.prior{border-color:#dc2626;color:#dc2626;} .jl-tier.new{border-color:#16a34a;color:#16a34a;}
  .jl-chart{margin-left:auto;font-size:12px;border:1px solid var(--line);background:none;color:var(--text);border-radius:8px;padding:1px 8px;cursor:pointer;font-family:inherit;}
  .jl-sec-t{font-size:12px;font-weight:700;margin:8px 0 2px;}
  .jl-verdict{font-size:14px;font-weight:700;}
  .jl-verdict.hi,.jl-verdict.jail{color:#dc2626;} .jl-verdict.lo{color:#16a34a;} .jl-verdict.ok{color:var(--muted);font-weight:400;}
  .jl-table{width:100%;border-collapse:collapse;font-size:12px;}
  .jl-table th{color:var(--muted);font-weight:400;text-align:left;padding:2px 4px;}
  .jl-table td{border-top:1px solid var(--line);padding:3px 4px;vertical-align:top;}
  .jl-att{display:flex;flex-wrap:wrap;gap:4px;}
  .jl-att span{font-size:12px;border:1px solid var(--line);border-radius:8px;padding:1px 6px;background:var(--panel-2);}
  .jl-foot{font-size:11px;color:var(--muted);border-top:1px solid var(--line);margin-top:16px;padding-top:8px;line-height:1.6;}
  @media(max-width:640px){ .jl-days{grid-template-columns:repeat(2,minmax(0,1fr));} .jl-grid{grid-template-columns:1fr;} .jl-table th:nth-child(4),.jl-table td:nth-child(4){display:none;} }
  /* 營收成長榜（2026-10-09 使用者：照莊爸「每月營收成長榜 學員版」做一模一樣的）：族群卡片、多觀察、火箭烏龜統計、散點圖、懸賞榜、總表 */
  .rv-top{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;margin:2px 0 4px;}
  .rv-month{font-size:15px;color:var(--muted);}
  .rv-meta{font-size:12px;color:var(--muted);margin:2px 0 8px;line-height:1.6;}
  .rv-months{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0;}
  .rv-mbtn{border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:8px;padding:4px 12px;font-family:inherit;font-size:13px;cursor:pointer;}
  .rv-mbtn.active{background:#b91c1c;border-color:#b91c1c;color:#fff;font-weight:700;}
  .rv-sec{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin:12px 0;}
  .rv-h{font-size:18px;font-weight:800;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin:0 0 6px;}
  .rv-h small{font-size:12px;font-weight:400;color:var(--muted);}
  .rv-h .rv-fold{margin-left:auto;}
  .rv-ctl{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font-size:13px;color:var(--muted);margin:4px 0 6px;}
  .rv-ctl select,.rv-ctl input{background:var(--panel-2);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:3px 8px;font-family:inherit;font-size:13px;}
  .rv-ctl input{width:150px;}
  .rv-btn{background:#7c3aed;color:#fff;border:0;border-radius:999px;padding:4px 12px;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;}
  .rv-btn.red{background:#b91c1c;}
  .rv-btn.ghost{background:var(--panel-2);color:var(--text);border:1px solid var(--line);}
  .rv-legend{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;font-size:12px;color:var(--muted);margin:4px 0 8px;}
  .rv-chip{border-radius:6px;padding:1px 7px;color:#fff;font-weight:700;font-size:11px;}
  .rv-chip.t100,.rv-card.t100{background:linear-gradient(135deg,#f0506e,#dc2626);}
  .rv-chip.t50,.rv-card.t50{background:linear-gradient(135deg,#fb923c,#f97316);}
  .rv-chip.t30,.rv-card.t30{background:linear-gradient(135deg,#a78bfa,#7c3aed);}
  .rv-chip.t0,.rv-card.t0{background:var(--panel-2);color:var(--text);border:1px solid var(--line);}
  .rv-chip.tneg,.rv-card.tneg{background:var(--panel-2);color:var(--text);border:1.5px solid #16a34a;}
  .rv-card.tnone{background:transparent;color:var(--muted);border:1.5px dashed var(--line);}
  .rv-grp{display:grid;grid-template-columns:200px 92px 1fr;gap:10px;align-items:center;border:1px solid var(--line);border-left:5px solid #b45309;border-radius:12px;padding:8px 10px;margin:8px 0;background:var(--panel-2);}
  .rv-grp.r1{border-left-color:#eab308;} .rv-grp.r2{border-left-color:#94a3b8;} .rv-grp.r3{border-left-color:#c2410c;}
  .rv-gname{display:flex;gap:8px;align-items:center;min-width:0;}
  .rv-rank{flex:0 0 30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;background:#7c3aed;}
  .rv-grp.r1 .rv-rank{background:linear-gradient(135deg,#fde047,#eab308);color:#713f12;}
  .rv-grp.r2 .rv-rank{background:linear-gradient(135deg,#e2e8f0,#94a3b8);color:#1e293b;}
  .rv-grp.r3 .rv-rank{background:linear-gradient(135deg,#fdba74,#c2410c);}
  .rv-grp.star .rv-rank{background:linear-gradient(135deg,#fde047,#f59e0b);}
  .rv-gname b{font-size:15px;}
  .rv-gsub{font-size:11px;color:var(--muted);line-height:1.5;}
  .rv-med{text-align:center;}
  .rv-med span{display:inline-block;border-radius:999px;color:#fff;font-weight:800;padding:4px 10px;font-size:13px;}
  .rv-med small{display:block;font-size:10px;color:var(--muted);margin-top:2px;}
  .rv-cards{display:flex;flex-wrap:wrap;gap:6px;}
  .rv-card{width:92px;border-radius:8px;padding:4px 6px;color:#fff;cursor:pointer;line-height:1.25;border:0;font-family:inherit;text-align:left;}
  .rv-card .n{font-size:11px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .rv-card .y{font-size:19px;font-weight:800;}
  .rv-card .d{font-size:10px;opacity:.95;white-space:nowrap;}
  .rv-new{display:inline-block;background:#fff;color:#4c1d95;border-radius:4px;padding:0 3px;font-size:9px;font-weight:700;margin-left:2px;}
  .rv-card.t0 .rv-new,.rv-card.tneg .rv-new{background:#4c1d95;color:#fff;}
  .rv-up{color:var(--up);} .rv-down{color:var(--down);}
  .rv-card .rv-up,.rv-card .rv-down{color:inherit;}
  .rv-card.t0 .rv-up,.rv-card.tneg .rv-up{color:var(--up);} .rv-card.t0 .rv-down,.rv-card.tneg .rv-down{color:var(--down);}
  .rv-tables{display:flex;flex-wrap:wrap;gap:12px;}
  .rv-table{border-collapse:collapse;font-size:13px;margin:4px 0;}
  .rv-table th{background:#5b21b6;color:#fff;padding:5px 8px;font-weight:700;white-space:nowrap;}
  .rv-table td{border-bottom:1px solid var(--line);padding:4px 8px;text-align:right;white-space:nowrap;}
  .rv-table td:first-child{text-align:left;}
  .rv-table tr.pink td{background:rgba(236,72,153,.10);} .rv-table tr.mint td{background:rgba(22,163,74,.10);}
  .rv-table td.pink{background:rgba(236,72,153,.10);} .rv-table td.mint{background:rgba(22,163,74,.10);}
  .rv-table th.pink{background:#db2777;} .rv-table th.mint{background:#15803d;}
  .rv-table small{display:block;font-size:10px;color:var(--muted);}
  .rv-scroll{overflow-x:auto;max-width:100%;}
  .rv-tables > .rv-scroll{min-width:0;}
  .rv-note{font-size:12px;color:var(--muted);line-height:1.6;margin:4px 0;}
  .rv-svg{width:100%;max-width:720px;height:auto;display:block;}
  .rv-svg text{font-size:11px;fill:var(--muted);}
  .rv-gold{font-size:12px;line-height:1.8;}
  .rv-list details{border-radius:8px;margin:6px 0;padding:6px 10px;}
  .rv-list details.pink{background:rgba(236,72,153,.12);} .rv-list details.mint{background:rgba(22,163,74,.12);}
  .rv-list summary{cursor:pointer;font-weight:700;font-size:13px;}
  .rv-li{display:grid;grid-template-columns:150px 1fr 70px;gap:6px;font-size:12px;border-top:1px dashed var(--line);padding:3px 0;}
  .rv-li small{color:var(--muted);}
  .rv-board{border:2px solid #b91c1c;outline:1px solid #b91c1c;outline-offset:3px;border-radius:12px;padding:10px 12px;margin:16px 0;position:relative;background:var(--panel);}
  .rv-bgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 18px;}
  .rv-bi{display:grid;grid-template-columns:44px 1fr auto;gap:6px;align-items:center;border-bottom:1px dashed var(--line);padding:6px 0;cursor:pointer;}
  .rv-bi .c{color:var(--muted);font-size:12px;}
  .rv-bi .nm{font-weight:700;font-size:14px;}
  .rv-bi .nm small{display:block;font-weight:400;font-size:11px;color:var(--muted);}
  .rv-bi .y{color:var(--up);font-weight:700;font-size:15px;}
  .rv-gtag{display:inline-block;font-size:10px;border:1px solid #b45309;color:#b45309;border-radius:4px;padding:0 4px;margin-left:4px;font-weight:400;vertical-align:1px;}
  .rv-stamp{position:absolute;right:16px;bottom:10px;border:2px solid #dc2626;color:#dc2626;border-radius:6px;padding:1px 8px;font-weight:800;letter-spacing:2px;transform:rotate(-8deg);opacity:.75;font-size:12px;}
  .rv-tabs{display:inline-flex;border:1px solid #b91c1c;border-radius:8px;overflow:hidden;}
  .rv-tabs button{background:var(--panel);color:var(--text);border:0;padding:4px 10px;font-family:inherit;font-size:13px;cursor:pointer;}
  .rv-tabs button.active{background:#b91c1c;color:#fff;font-weight:700;}
  .rv-full{width:100%;}
  .rv-full th{position:sticky;top:0;cursor:pointer;background:#33333a;}
  .rv-full td:nth-child(2){text-align:left;}
  .rv-full tr:hover td{background:var(--panel-2);}
  .rv-qcard{border:1px solid var(--line);border-radius:10px;padding:8px 10px;margin:6px 0;background:var(--panel-2);}
  .rv-qrow{flex-wrap:wrap;align-items:center;}
  .jl-q .rv-mark{background:var(--panel-2);border:1.5px solid var(--line);color:var(--text);}
  .jl-q .rv-mark.accel{border-color:#db2777;color:#db2777;} .jl-q .rv-mark.decel{border-color:#16a34a;color:#16a34a;}
  .jl-q .rv-mark.accel.active{background:#db2777;color:#fff;} .jl-q .rv-mark.decel.active{background:#16a34a;color:#fff;}
  .rv-foot{font-size:11px;color:var(--muted);border-top:1px solid var(--line);margin-top:16px;padding-top:8px;line-height:1.6;}
  @media(max-width:760px){
    .rv-grp{grid-template-columns:1fr;}
    .rv-med{text-align:left;}
    .rv-bgrid{grid-template-columns:1fr;}
    .rv-li{grid-template-columns:1fr 1fr;}
    .rv-tables .rv-table td:first-child{white-space:normal;min-width:110px;}
    .rv-full th:nth-child(3),.rv-full td:nth-child(3),.rv-full th:nth-child(7),.rv-full td:nth-child(7),.rv-full th:nth-child(9),.rv-full td:nth-child(9){display:none;}
  }
  /* 創高黑選股（2026-10-04 使用者：照莊爸 App「創高黑」做選股程式，跟創高黑龍分開放）：流程列、帳戶卡、持股／觀察／要做清單、模組設定 */
  .pk-flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:6px 0 10px;}
  .pk-step{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--line);background:var(--panel);border-radius:10px;padding:6px 10px;font-size:13px;cursor:pointer;color:var(--text);font-family:inherit;}
  .pk-step b{font-weight:800;}
  .pk-step.active{border-color:#eab308;background:rgba(234,179,8,.14);color:#eab308;}
  .pk-arrow{color:var(--muted);font-size:12px;}
  .pk-card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin:8px 0;}
  .pk-card-head{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;font-size:14px;margin-bottom:6px;}
  .pk-card-head b{font-size:16px;}
  .pk-pill{display:inline-block;border:1px solid var(--line);border-radius:999px;padding:1px 10px;font-size:12px;color:var(--muted);}
  .pk-pill.gold{border-color:#eab308;color:#eab308;}
  .pk-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:6px 0;}
  .pk-tile{background:var(--panel-2);border-radius:8px;padding:6px 8px;}
  .pk-tile span{display:block;font-size:11px;color:var(--muted);}
  .pk-tile b{font-size:18px;font-variant-numeric:tabular-nums;}
  .pk-bar{display:flex;height:10px;border-radius:6px;overflow:hidden;background:var(--panel-2);margin:6px 0;}
  .pk-bar i{display:block;height:100%;}
  .pk-sum{font-size:13px;line-height:1.6;}
  .pk-sec{font-size:16px;font-weight:800;margin:14px 0 4px;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;}
  .pk-sec small{font-size:12px;font-weight:400;color:var(--muted);}
  .pk-steps{display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:6px 0;}
  .pk-steps span.box{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:4px 8px;font-size:12px;text-align:center;line-height:1.3;}
  .pk-steps span.box em{display:block;font-style:normal;color:var(--muted);font-size:11px;}
  .pk-table td.l,.pk-table th.l{text-align:left;}
  .pk-table tr.pk-click{cursor:pointer;}
  .pk-table tr.pk-click:hover td{background:var(--panel-2);}
  .pk-table .pk-name b{font-size:13px;}
  .pk-table .pk-name small{color:var(--muted);margin-left:4px;}
  .pk-src{display:inline-block;font-size:11px;border-radius:6px;padding:0 6px;border:1px solid var(--line);}
  .pk-src.list{border-color:#eab308;color:#eab308;}
  .pk-src.daily{border-color:#38bdf8;color:#38bdf8;}
  .pk-src.week{border-color:#a78bfa;color:#a78bfa;}
  .pk-black{display:inline-block;width:8px;height:14px;border-radius:2px;background:#5fae6f;vertical-align:middle;margin-right:4px;}
  .pk-red{display:inline-block;width:8px;height:14px;border-radius:2px;background:#e6675f;vertical-align:middle;margin-right:4px;}
  .pk-todo{display:flex;flex-direction:column;gap:6px;margin:6px 0;}
  .pk-act{display:flex;align-items:center;gap:10px;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:13px;line-height:1.5;}
  .pk-act input{width:20px;height:20px;flex-shrink:0;}
  .pk-badge{display:inline-block;border-radius:8px;padding:3px 10px;font-size:12px;font-weight:800;white-space:nowrap;flex-shrink:0;}
  .pk-badge.exit{background:rgba(95,174,111,.16);color:#5fae6f;border:1px solid #5fae6f;}
  .pk-badge.buy{background:rgba(230,103,95,.16);color:#e6675f;border:1px solid #e6675f;}
  .pk-badge.add{background:rgba(234,179,8,.16);color:#eab308;border:1px solid #eab308;}
  .pk-badge.reduce{background:rgba(56,189,248,.14);color:#38bdf8;border:1px solid #38bdf8;}
  .pk-badge.skip{background:transparent;color:var(--muted);border:1px solid var(--line);}
  .pk-why{font-size:12.5px;font-weight:700;color:var(--accent);}
  .pk-act .pk-act-main{flex:1;min-width:0;}
  .pk-act .pk-act-pnl{font-weight:800;white-space:nowrap;}
  .pk-log-day{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:13px;}
  .pk-log-day b{min-width:76px;color:#eab308;}
  .pk-chip{display:inline-block;border-radius:8px;padding:2px 8px;font-size:12px;border:1px solid var(--line);}
  .pk-chip.exit{border-color:#5fae6f;color:#5fae6f;}
  .pk-chip.buy{border-color:#e6675f;color:#e6675f;}
  .pk-chip.add{border-color:#eab308;color:#eab308;}
  .pk-chip.reduce{border-color:#38bdf8;color:#38bdf8;}
  .pk-btn-big{display:block;width:100%;margin:8px 0;padding:10px;border-radius:10px;border:0;background:#eab308;color:#111;font-weight:800;font-size:15px;cursor:pointer;font-family:inherit;}
  .pk-btn-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0;}
  .pk-btn-row button{padding:10px;border-radius:10px;border:0;background:#eab308;color:#111;font-weight:800;font-size:14px;cursor:pointer;font-family:inherit;}
  .pk-pickcard{border:1px solid #eab308;border-radius:10px;padding:8px 12px;margin:6px 0;background:rgba(234,179,8,.08);font-size:13px;line-height:1.6;}
  .pk-pickcard b.big{font-size:18px;}
  .pk-fold{display:flex;justify-content:space-between;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:8px 12px;margin:8px 0;cursor:pointer;font-weight:700;font-size:14px;}
  .pk-funnel{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:4px;align-items:center;margin:8px 0;}
  .pk-funnel .pk-tile{text-align:center;cursor:pointer;}
  .pk-funnel .pk-tile b{font-size:22px;}
  .pk-funnel .pk-tile.gold{border:1px solid #eab308;}
  .pk-funnel .pk-tile.gold b{color:#eab308;}
  .pk-nav{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0;}
  .pk-nav button{min-width:36px;}
  .pk-mod{border:1px solid var(--line);border-radius:12px;padding:8px 12px;margin:10px 0;background:var(--panel);}
  .pk-mod h4{margin:4px 0 8px;font-size:15px;}
  .pk-opt{margin:8px 0;font-size:13px;}
  .pk-opt > div:first-child{color:var(--muted);margin-bottom:4px;}
  .pk-opt .chips-btn{padding:4px 10px;font-size:12px;margin:2px 4px 2px 0;}
  .pk-opt input[type=range]{width:min(320px,70vw);vertical-align:middle;}
  .pk-opt label{display:inline-flex;align-items:center;gap:6px;cursor:pointer;}
  .pk-opt input[type=checkbox]{width:18px;height:18px;}
  .pk-best{outline:2px solid #eab308;outline-offset:-2px;}
  .pk-table tr.pk-mine td{background:rgba(234,179,8,.14);}
  .pk-alert{position:fixed;left:50%;top:70px;transform:translateX(-50%);z-index:150;background:#1f1a12;color:#fff;border:2px solid #eab308;border-radius:14px;padding:10px 14px;width:min(420px,92vw);box-shadow:0 12px 40px rgba(0,0,0,.6);font-size:14px;line-height:1.6;}
  .pk-alert-head{display:flex;justify-content:space-between;align-items:center;font-weight:800;color:#eab308;margin-bottom:4px;}
  .pk-alert-head button{background:none;border:0;color:#fff;font-size:18px;cursor:pointer;}
  @media (max-width:640px){
    .pk-tiles{grid-template-columns:repeat(2,1fr);}
    .pk-funnel{grid-template-columns:1fr 1fr;}
    .pk-funnel .pk-arrow{display:none;}
    .pk-act{flex-wrap:wrap;}
  }
  /* 黑龍回測（2026-09-28 使用者：照學員專區「創高黑龍・績效分析」做在下午報裡）：參數列、爆發力、出場方式表、曲線、名單表、每日明細 */
  .hl-form{border:1px solid var(--line);border-radius:12px;padding:8px 12px;margin:8px 0;background:var(--panel);}
  .hl-line{display:flex;flex-wrap:wrap;gap:6px 16px;align-items:center;margin:4px 0;font-size:13px;}
  .hl-line label,.hl-field{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;}
  .hl-in{width:64px;padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:13px;}
  .hl-sel{padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:13px;}
  .hl-actions{margin-top:6px;}
  .hl-form .chips-btn{padding:3px 9px;font-size:12px;}
  .hl-bursts{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;margin:8px 0;}
  .hl-burst{background:var(--panel);border:1px solid var(--line);border-top:3px solid #7c3aed;border-radius:10px;padding:8px 10px;}
  .hl-bhead{font-weight:800;font-size:14px;margin-bottom:4px;}
  .hl-bgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(64px,1fr));gap:4px;text-align:center;}
  .hl-bgrid b{display:block;font-size:20px;line-height:1.2;font-variant-numeric:tabular-nums;}
  .hl-bgrid span{font-size:11px;color:var(--muted);}
  .hl-bfoot{font-size:12px;color:var(--muted);margin-top:4px;}
  .hl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:6px 0;}
  .hl-table{border-collapse:collapse;font-size:12px;white-space:nowrap;min-width:100%;}
  .hl-table th,.hl-table td{border-bottom:1px solid var(--line);padding:4px 6px;text-align:right;font-variant-numeric:tabular-nums;}
  .hl-table th{color:var(--muted);font-weight:700;background:var(--panel);}
  .hl-table th.l,.hl-table td.l{text-align:left;}
  .hl-table tr.hl-mine td{background:rgba(124,58,237,.10);font-weight:700;}
  .hl-table tr.hl-row{cursor:pointer;}
  .hl-table tr.hl-row:hover td{background:var(--panel-2);}
  .hl-table td.ok{color:#0f766e;font-weight:800;}
  .hl-table td.bad{color:#b91c1c;font-weight:800;}
  .hl-table td.muted{color:var(--muted);}
  .hl-table td.hl-use{font-weight:800;color:#e6675f;}
  .hl-chart{margin:8px 0;}
  .hl-chart-title{font-size:13px;font-weight:700;margin:4px 0;}
  .hl-legend{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12px;margin:2px 0 4px;}
  .hl-legend i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:4px;vertical-align:middle;}
  .hl-chart svg{display:block;font-size:10px;}
  .hl-day{border:1px solid var(--line);border-radius:10px;margin:6px 0;background:var(--panel);}
  .hl-day-head{display:flex;flex-wrap:wrap;gap:4px 12px;align-items:baseline;padding:8px 12px;cursor:pointer;font-size:14px;}
  .hl-day-head b{font-size:16px;color:#e6675f;}
  .hl-day-head .muted{font-size:12px;color:var(--muted);}
  .hl-caret{margin-left:auto;color:var(--muted);}
  .hl-day .hl-scroll{padding:0 8px 8px;}
  .hl-rules{font-size:12px;color:var(--muted);line-height:1.7;padding-left:20px;margin:6px 0;}
  .sw-tile.hl b{font-size:22px;}
  /* 每日持股健診（2026-09-28 使用者：照學員專區「每日持股健診」做）：清單、權重、表格、明細 */
  .ck-form{border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin:8px 0;background:var(--panel);}
  .ck-ta{width:100%;box-sizing:border-box;min-height:64px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--panel-2);color:var(--text);font-size:14px;font-family:inherit;resize:vertical;}
  .ck-line{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;margin:6px 0;font-size:13px;}
  .ck-line label{display:inline-flex;align-items:center;gap:4px;}
  .ck-line .chips-btn{padding:4px 10px;font-size:13px;}
  .ck-in{width:56px;padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:13px;}
  .ck-sel{padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:13px;max-width:160px;}
  .ck-dims{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin:8px 0;}
  .ck-dim{border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:var(--panel);cursor:pointer;}
  .ck-dim.active{border-color:#e6675f;box-shadow:inset 0 0 0 1px #e6675f;}
  .ck-dim.off{opacity:.55;}
  .ck-dim b{display:block;font-size:14px;}
  .ck-dim span{display:block;font-size:12px;color:var(--muted);}
  .ck-dim label{margin-top:4px;font-size:12px;}
  .ck-dim .ck-w{display:inline-flex;align-items:center;gap:4px;margin-top:4px;font-size:12px;}
  .ck-tags{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0;}
  .ck-tag{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:999px;padding:2px 10px;font-size:13px;background:var(--panel);}
  .ck-tag b{color:#e6675f;}
  .ck-tag .ck-x{cursor:pointer;color:var(--muted);font-weight:800;}
  .ck-table{border-collapse:collapse;font-size:13px;white-space:nowrap;min-width:100%;}
  .ck-table th,.ck-table td{border-bottom:1px solid var(--line);padding:6px 8px;text-align:right;font-variant-numeric:tabular-nums;vertical-align:middle;}
  .ck-table th{color:var(--muted);font-weight:700;background:var(--panel);cursor:pointer;}
  .ck-table th.on{color:#e6675f;}
  .ck-table th.l,.ck-table td.l{text-align:left;}
  .ck-table tr.ck-row td.ck-stock{cursor:pointer;}
  .ck-table tr.ck-row:hover td{background:var(--panel-2);}
  .ck-table .ck-code{font-size:16px;font-weight:800;color:#e6675f;}
  .ck-table .ck-name{font-size:14px;font-weight:700;margin-left:4px;}
  .ck-table .ck-grp{font-size:11px;color:var(--muted);display:block;}
  .ck-score{display:inline-block;min-width:36px;text-align:center;border-radius:6px;padding:2px 6px;font-weight:800;color:#fff;background:#6b7280;}
  .ck-score.s4{background:#b91c1c;}.ck-score.s3{background:#e6675f;}.ck-score.s2{background:#a16207;}.ck-score.s1{background:#0f766e;}.ck-score.s0{background:#15803d;}
  .ck-score.none{background:transparent;color:var(--muted);border:1px dashed var(--line);font-weight:400;}
  .ck-lab{font-size:12px;margin-left:4px;}
  .ck-def{font-size:12px;line-height:1.4;}
  .ck-def b{font-size:13px;}
  .ck-judge{font-weight:700;}
  .ck-judge.bad{color:#15803d;}
  .ck-judge.ok{color:#e6675f;}
  .ck-btn{cursor:pointer;color:var(--muted);font-weight:800;padding:0 4px;}
  /* 自選股（2026-10-05 使用者） */
  .wl-sync{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:var(--panel-2);margin-bottom:10px;font-size:13px;}
  .wl-sync input{flex:1 1 220px;min-width:0;padding:5px 8px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text);font-size:14px;font-family:inherit;}
  .wl-sync-ops{margin-left:auto;display:inline-flex;gap:6px;flex-wrap:wrap;}
  .wl-key{font-family:monospace;font-size:14px;padding:2px 6px;border-radius:6px;background:var(--bg);}
  .wl-hint{flex-basis:100%;font-size:12px;color:var(--muted);margin:2px 0 6px;}
  .wl-status{font-size:12px;color:var(--muted);}
  .wl-status.ok{color:#4ade80;}
  .wl-status.err{color:#f87171;font-weight:700;}
  .wl-btn{padding:4px 10px;border-radius:8px;border:1px solid var(--line);background:#33333a;color:#fff;font-weight:700;cursor:pointer;font-size:13px;font-family:inherit;white-space:nowrap;}
  .wl-btn:hover{filter:brightness(1.2);}
  .wl-btn.primary{background:#7c3aed;border-color:#7c3aed;}
  .wl-groups{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:8px;}
  .wl-gtab{padding:5px 12px;border-radius:999px;border:1px solid var(--line);background:var(--panel-2);color:var(--text);font-weight:700;cursor:pointer;font-size:14px;font-family:inherit;}
  .wl-gtab.active{background:#f5b301;border-color:#f5b301;color:#1a1a1a;}
  .wl-gtab.add{border-style:dashed;color:var(--muted);}
  .wl-gcount{display:inline-block;margin-left:6px;font-size:12px;opacity:.75;}
  .wl-gops{margin-left:auto;display:inline-flex;gap:6px;}
  .wl-add{display:flex;gap:6px;margin-bottom:6px;}
  .wl-add input{flex:1;min-width:0;padding:7px 10px;border:1px solid var(--line);border-radius:8px;background:var(--panel-2);color:var(--text);font-size:14px;font-family:inherit;}
  .wl-sorts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:13px;color:var(--muted);margin:6px 0 8px;}
  .wl-sort{padding:3px 10px;border-radius:999px;border:1px solid var(--line);background:none;color:var(--text);cursor:pointer;font-size:13px;font-family:inherit;}
  .wl-sort.active{background:#7c3aed;border-color:#7c3aed;color:#fff;}
  .wl-table-wrap{overflow-x:auto;}
  .wl-table{width:100%;border-collapse:collapse;font-size:14px;min-width:900px;font-variant-numeric:tabular-nums;}
  .wl-table th,.wl-table td{padding:7px 8px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;vertical-align:middle;}
  .wl-table th{color:var(--muted);font-size:12px;font-weight:700;}
  .wl-table .l{text-align:left;}
  .wl-table tbody tr:hover{background:rgba(255,255,255,.04);}
  .wl-stock{cursor:pointer;font-weight:700;}
  .wl-stock:hover .wl-name{text-decoration:underline;}
  .wl-name{margin-right:6px;}
  .wl-note{max-width:200px;overflow:hidden;text-overflow:ellipsis;color:var(--muted);cursor:pointer;}
  .wl-note-empty{opacity:.45;font-size:12px;}
  .wl-ops{display:inline-flex;gap:4px;justify-content:flex-end;align-items:center;}
  .wl-op{background:none;border:1px solid var(--line);border-radius:6px;color:var(--muted);cursor:pointer;font-size:12px;padding:2px 6px;font-family:inherit;}
  .wl-op.del:hover{color:#f87171;border-color:#f87171;}
  .wl-gsel{padding:2px 4px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:12px;max-width:90px;}
  .wl-summary{font-size:13px;color:var(--muted);margin-top:8px;}
  .wl-table .sig-label{font-size:11px;padding:2px 6px;display:inline-flex;flex-direction:column;align-items:flex-end;line-height:1.25;gap:1px;}
  .wl-table .sig-label .hf-amt{font-size:.82em;font-weight:600;opacity:.92;}
  .wl-table .sig-bull{background:var(--up);color:#fff;border-radius:6px;font-weight:700;}
  .wl-table .sig-bear{background:var(--down);color:#fff;border-radius:6px;font-weight:700;}
  .wl-table .chips-flag,.wl-table .sig-eligibility{margin-left:4px;}
  @media (max-width: 640px){
    /* 手機：留代號、名稱、均線分數、大戶力、漲跌幅、成交價、分組／移除；族群、漲跌、成交量、備註、標籤、上下移收起來 */
    .wl-table{min-width:0;font-size:13px;}
    .wl-table th,.wl-table td{padding:6px 4px;}
    .wl-table.v-live th:nth-child(3),.wl-table.v-live td:nth-child(3),.wl-table.v-live th:nth-child(7),.wl-table.v-live td:nth-child(7),
    .wl-table.v-live th:nth-child(9),.wl-table.v-live td:nth-child(9),.wl-table.v-live th:nth-child(10),.wl-table.v-live td:nth-child(10){display:none;}
    /* 持股損益：留代號、名稱、成交價、成本、張數、損益、報酬率；漲跌幅、市值、今日損益、防守收起來 */
    .wl-table.v-pnl tr:not(.wl-edit-row) > :nth-child(4),.wl-table.v-pnl tr:not(.wl-edit-row) > :nth-child(7),
    .wl-table.v-pnl tr:not(.wl-edit-row) > :nth-child(10),.wl-table.v-pnl tr:not(.wl-edit-row) > :nth-child(11){display:none;}
    /* 盤後籌碼：族群、法人今日、防守收起來，其他可以左右滑 */
    .wl-table.v-chips{min-width:600px;}
    .wl-table.v-chips tr > :nth-child(3),.wl-table.v-chips tr > :nth-child(5),.wl-table.v-chips tr > :nth-child(12){display:none;}
    .wl-edit label{flex-basis:100%;}
    .wl-table .chips-flag,.wl-table .sig-eligibility,.wl-table .wl-op[data-op="up"],.wl-table .wl-op[data-op="down"]{display:none;}
    .wl-table .wl-name{display:inline-block;max-width:5.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom;margin-right:0;}
    .wl-gsel{max-width:64px;}
    .wl-gops{margin-left:0;}
  }
  .wl-views{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:8px 0 2px;}
  .wl-view{padding:5px 14px;border-radius:8px;border:1px solid var(--line);background:var(--panel-2);color:var(--text);font-weight:800;cursor:pointer;font-size:14px;font-family:inherit;}
  .wl-view.active{background:#7c3aed;border-color:#7c3aed;color:#fff;}
  .wl-views #wlToCheckup{margin-left:auto;}
  .wl-pos{cursor:pointer;text-decoration:underline dotted var(--muted);text-underline-offset:3px;}
  .wl-pos:hover{background:rgba(124,58,237,.12);}
  .wl-table tr.wl-editing td{background:rgba(124,58,237,.10);}
  .wl-edit-row td{background:var(--panel-2);text-align:left;white-space:normal;}
  .wl-edit{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;font-size:13px;}
  .wl-edit input{width:110px;padding:5px 8px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text);font-size:15px;font-family:inherit;}
  .wl-edit-ops{display:inline-flex;gap:6px;}
  .wl-feebar{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;font-size:13px;color:var(--muted);margin:4px 0 6px;}
  .wl-feebar input[type=number]{width:64px;padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text);font-size:13px;font-family:inherit;}
  .wl-pnl-sum{font-size:14px;margin:4px 0 8px;line-height:1.7;}
  .wl-def{line-height:1.35;font-size:12.5px;}
  .wl-warn{display:inline-block;background:var(--down);color:#fff;border-radius:6px;padding:0 6px;font-weight:800;}
  .wl-streak{font-size:11.5px;font-weight:700;}
  .wl-table.v-chips td,.wl-table.v-pnl td{line-height:1.35;}
  .wl-star{background:none;border:none;cursor:pointer;color:#8b8178;font-size:15px;padding:0 3px;line-height:1;vertical-align:middle;font-family:inherit;}
  .wl-star:hover{color:#f5b301;}
  .wl-star.on{color:#f5b301;}
  .race-row .race-star-slot,.race-col-labels .race-star-slot{flex:0 0 20px;text-align:center;}  /* 要蓋過 .race-col-labels span 的 5em */
  /* 個股訊號追蹤（2026-10-05 使用者） */
  .trk-table{min-width:720px;}
  .trk-badge{display:inline-block;font-size:11px;font-weight:700;padding:1px 6px;border-radius:6px;margin:1px 4px 1px 0;background:#3a3a44;color:#fff;}
  .trk-badge.bull{background:var(--up);}
  .trk-badge.bear{background:var(--down);}
  .trk-badge.brew{background:#7c3aed;}
  .trk-sig{font-weight:700;}
  .trk-sig.bull{color:var(--up);}
  .trk-sig.bear{color:var(--down);}
  .trk-note{color:var(--muted);font-size:12px;white-space:normal !important;min-width:200px;}
  .trk-ma{font-size:12px;}
  .trk-in{width:90px;padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--panel-2);color:var(--text);font-size:13px;font-family:inherit;text-align:right;}
  .trk-chk{display:inline-flex;align-items:center;gap:4px;font-size:13px;cursor:pointer;white-space:nowrap;flex:0 0 auto;}
  .trk-alert{border-color:#f5b301;}
  .trk-alert-foot{margin-top:6px;text-align:right;}
  @media (max-width: 640px){ .trk-table{min-width:560px;} }
  .ck-detail td{background:var(--panel-2);white-space:normal;text-align:left;font-size:12px;line-height:1.6;padding:8px 12px;}
  /* 2026-09-28 使用者：健診表要能照族群看（像學員專區的族群籤），也能整張表分族群排 */
  .ck-gchip{display:inline-flex;align-items:center;gap:4px;cursor:pointer;border:1px solid var(--line);border-radius:999px;padding:3px 10px;font-size:13px;background:var(--panel);user-select:none;}
  .ck-gchip b{font-weight:700;}
  .ck-gchip .ck-gn{color:var(--muted);font-size:12px;}
  .ck-gchip.on{border-color:#e6675f;background:rgba(230,103,95,.16);color:#e6675f;}
  .ck-gchip.on .ck-gn{color:#e6675f;}
  .ck-table tr.ck-ghead td{background:var(--panel-2);text-align:left;font-weight:800;font-size:13px;color:#e6675f;border-top:2px solid #e6675f;padding:6px 8px;}
  .ck-table tr.ck-ghead td .muted{font-weight:400;margin-left:8px;}
  .ck-dgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:6px 16px;}
  .ck-dgrid b{color:#e6675f;}
  .ck-sub{display:inline-block;border-radius:6px;padding:1px 6px;margin:1px 2px;font-size:12px;border:1px solid var(--line);}
  .ck-sub.s2{background:#e6675f;color:#fff;border-color:#e6675f;}
  .ck-sub.s0{background:#15803d;color:#fff;border-color:#15803d;}
  .ck-compact{white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px dashed var(--line);border-radius:10px;padding:8px 12px;margin:8px 0;line-height:1.6;}
  .ck-rules{font-size:12px;color:var(--muted);line-height:1.7;padding-left:20px;margin:6px 0;}
  /* 個股問診（2026-09-28 使用者：照學員專區「個股問診・完整版」做）：總評、防守線表、日線圖、七科、同族、強度榜、今日名單、穿惡 */
  .dg-search{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;margin:8px 0;}
  .dg-in{width:180px;padding:6px 10px;border:1px solid var(--line);border-radius:8px;background:var(--panel-2);color:var(--text);font-size:15px;}
  .dg-recent{display:inline-flex;flex-wrap:wrap;gap:4px;align-items:center;font-size:12px;color:var(--muted);}
  .dg-recent .ck-tag{cursor:pointer;}
  .dg-head{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:baseline;margin:8px 0 4px;}
  .dg-head .dg-code{font-size:26px;font-weight:800;color:#e6675f;}
  .dg-head .dg-name{font-size:20px;font-weight:800;}
  .dg-head .dg-grp{font-size:13px;color:var(--muted);}
  .dg-head .dg-px{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;}
  .dg-pill{display:inline-block;border-radius:999px;padding:2px 10px;font-size:13px;font-weight:800;color:#fff;background:#6b7280;}
  .dg-pill.strong{background:#b91c1c;}.dg-pill.mid{background:#a16207;}.dg-pill.weak{background:#15803d;}
  .dg-lines{list-style:none;padding:0;margin:6px 0 10px;font-size:14px;line-height:1.8;}
  .dg-lines li{border-bottom:1px dashed var(--line);padding:2px 0;}
  .dg-lines b{color:#e6675f;}
  .dg-chart{margin:8px 0;}
  .dg-chart svg{display:block;font-size:10px;}
  .dg-legend{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12px;margin:2px 0 4px;}
  .dg-legend i{display:inline-block;width:14px;height:0;border-top:2px solid;margin-right:4px;vertical-align:middle;}
  .dg-spark svg{display:inline-block;vertical-align:middle;overflow:visible;}  /* 最後一個數值標籤可以超出框，不被切掉 */
  .ck-table tr.dg-cur td{background:rgba(230,103,95,.12);}
  .ck-table tr.dg-grp td{background:var(--panel-2);font-weight:800;text-align:left;color:#e6675f;}
  .ck-table tr.dg-link{cursor:pointer;}
  .ck-table tr.dg-link:hover td{background:var(--panel-2);}
  .dg-filter{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0;}
  .dg-filter .chips-btn{padding:3px 9px;font-size:12px;}
  .dg-sub{font-size:12px;color:var(--muted);}
  .dg-defrow b{font-size:14px;}
  .dg-ok{color:#e6675f;font-weight:800;}
  .dg-bad{color:#15803d;font-weight:800;}
  .chips-weak-tag{display:inline-block;font-size:10px;font-weight:700;border-radius:6px;padding:0 5px;margin-left:4px;background:#166534;color:#fff;white-space:nowrap;}  /* 放空籌碼：弱勢型態 */
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
  .signal-row .sig-eligibility span.pill-attention{background:#2563eb;color:#fff;border-color:#2563eb;font-weight:700;}
  .signal-row .sig-note .sig-eligibility{margin-left:4px;vertical-align:middle;}
  /* 盤中大戶力排行（2026-09-24 使用者）：名稱／族群／大戶力買賣標籤固定寬、對齊，不會因為文字長短
     （有沒有「強力」二字、族群名長短）每一列的起始位置都不一樣；漲跌幅／漲跌／成交價貼齊最右邊。 */
  .signal-row .sig-name{flex:0 0 5.5em;max-width:5.5em;overflow:hidden;text-overflow:ellipsis;}
  .signal-row .sig-group{flex:0 0 7em;text-align:center;overflow:hidden;text-overflow:ellipsis;}
  .signal-row .sig-label.hf-tier{flex:0 0 12.5em;text-align:left;}
  /* 均線分數欄（2026-10-08 使用者：特大買賣單、大戶力、四項精選、1+2多、創高黑龍、主力翻多空都加均線分數）：族群後面固定寬 */
  .signal-row .sig-ma{flex:0 0 3.2em;text-align:center;white-space:nowrap;}
  .signal-row .sig-ma .race-ma-val{font-weight:800;color:var(--muted);}
  .signal-row .sig-ma .race-ma-val.hi{color:var(--up);}
  .signal-row .sig-ma .race-ma-none{color:var(--muted);}
  .signal-row .sig-group.sig-group-empty{background:none;}
  .signal-row .srow-right{margin-left:auto;}
  .signal-row.signal-col-labels{cursor:default;padding-top:2px;padding-bottom:4px;}
  .signal-row.signal-col-labels:hover{background:none;}
  .signal-row.signal-col-labels b{color:var(--muted);font-size:10px;font-weight:600;}
  .signal-row.signal-col-labels .sig-group{background:none;}   /* 標題列的「族群」不要紫色底 */
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
  body.signal-window-mode #signalModalInner{width:100%;height:100vh;}   /* 蓋過寬螢幕的 92vh：獨立視窗、釘選視窗都要填滿 */
  body.signal-window-mode .signal-modal-head{cursor:default;}
  body.signal-window-mode #smMoveWindow,body.signal-window-mode #smRecenter,body.signal-window-mode #smPinWindow{display:none!important;}
  #smPinWindow.on{background:#f5b301;border-color:#f5b301;color:#1a1a1a;}

  @media (max-width: 640px){
    .toolbar-bottom{justify-content:flex-start;}
    .tb-btn{min-width:53px;}
    .tb-sub{display:block;}
    .race-row .race-star-slot,.race-col-labels .race-star-slot{display:none;}  /* 盤中333 手機一行塞不下，☆ 只在電腦／平板顯示（K線圖標題一樣有 ☆） */  /* 手機窄：（自動）（手動）換到下一行，不要把名字從中間折斷 */  /* 2026-09-28：拿掉「個股研究中心」後剩七顆，在 375px 的手機也要一排放得下（7×53=371） */
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
    /* 刀劍空交易條件：.race-l2wrap 攤平（display:contents），交易條件接在均線分數後面那塊空白（手機那一行原本只有均線分數），
       放不下才自己換一行；數字那一群照上面規則自己一整行。 */
    .race-row .race-l2wrap,.race-col-labels .race-l2wrap,.race-row .race-l2nums,.race-col-labels .race-l2nums{display:contents;}
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
  /* 2026-10-08 使用者（iPad 截圖）：精選十大多空族群 iPad／電腦版價位沒對齊、很亂。原本是 flex 一列排，名稱長短不一、
     交易條件標籤只有一個時會被擠進數字那排（Safari 判斷放得下），每一列的大戶力／漲跌幅／漲跌／成交價位置都不一樣，
     右邊還會被切掉。改成跟手機版同一招：每一列跟標題列都是同一組固定欄寬的 grid（名次、代號、名稱吃剩下的寬度、
     大戶力、漲跌幅、漲跌、成交價），交易條件標籤固定在下一行；處置／注意股標籤列已經有，warn-slot 不重複放。
     標題列沒有名次那格，代號直接指定放第 2 欄，後面幾格自動接著排。 */
  @media (min-width: 641px){
    .race-row.ghf-row,.race-col-labels.ghf-labels{display:grid;grid-template-columns:1.7em 3.4em minmax(0,1fr) 6.6em 4.8em 4.8em 5.2em;column-gap:8px;row-gap:4px;align-items:center;}
    #signalModalInner .race-row.ghf-row,#signalModalInner .race-col-labels.ghf-labels{column-gap:10px;row-gap:4px;}
    .ghf-row .race-line2,.ghf-labels .race-line2{display:contents;}
    .ghf-row .race-warn-slot,.ghf-labels .race-warn-slot{display:none;}
    .ghf-labels .race-code{grid-column:2;}
    .ghf-row .race-badge{text-align:center;}
    .ghf-row .race-code,.ghf-labels .race-code,.ghf-row .race-name,.ghf-labels .race-name{min-width:0;max-width:none;}
    .ghf-row .sig-eligibility{grid-column:2 / -1;flex-wrap:wrap;row-gap:3px;}
  }
  /* 電腦版大戶力%跟金額同一行（見下面 1100px 那段），這一欄要放寬到 9em */
  @media (min-width: 1100px){
    .race-row.ghf-row,.race-col-labels.ghf-labels{grid-template-columns:1.7em 3.4em minmax(0,1fr) 9em 4.8em 4.8em 5.2em;}
  }
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
    #signalModalInner .race-row .pill-warn,#signalModalInner .race-row .pill-attention{font-size:13px;}
    #signalModalInner .race-row .sig-eligibility span{font-size:12px;}
    #signalModalInner .race-row .race-flags span{font-size:12px;}
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
    #signalModalInner .combo-table .pill-warn,#signalModalInner .combo-table .pill-attention{font-size:13px;}
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
  /* 2026-10-03 使用者：醞釀／發動這張表欄位本來就多，手機版大戶力欄太窄，%跟金額堆兩行還各自
     再換行、數字擠成一團——這張表的大戶力欄不受上面>=1100px才橫排的限制，全尺寸都跟桌機版一樣
     %跟金額同一行左右排、不換行，並把欄寬加大到放得下（放在最後面、選擇器權重打平時靠後蓋掉
     上面.combo-table .combo-holder .sig-label 的直排規則）。 */
  .bl-table .combo-holder{min-width:7.5em;}
  .bl-table .combo-holder .sig-label{flex-direction:row;align-items:baseline;gap:3px;white-space:nowrap;}
  .bl-table .combo-holder .sig-label .hf-amt{font-size:.82em;}
  .bl-table .combo-holder .sig-label .hf-amt::before{content:'・';opacity:.7;}
  /* 2026-10-03 使用者：醞釀／發動這張表的盤中大戶力欄只留百分比，金額拿掉 */
  .bl-table .combo-holder .sig-label .hf-amt{display:none;}
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

<div class="chips-modal" id="chipsModal" hidden>
  <div class="chips-inner" id="chipsInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">盤後籌碼排行</div>
        <div class="chips-sub">籌碼週報＝集保週資料的大戶增減（每週五結算）；其他分頁是主力大單（永豐逐筆算的大單淨額）＋三大法人買賣超（證交所、櫃買中心公開資料），每個交易日收盤後更新，只列 53 個族群的股票，點股票可開K線圖。</div>
      </div>
      <button class="cm-icon-btn" id="chipsClose" aria-label="關閉">✕</button>
    </div>
    <div class="chart-tabs signal-tabs-bar" id="chipsTabs"></div>
    <div id="chipsBody"></div>
  </div>
</div>
<div class="chips-modal" id="swingModal" hidden>
  <div class="chips-inner" id="swingInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">下午報</div>
        <div class="chips-sub">隔天盤前讀：籌碼、技術、均線三面向各挑最多 5 檔，附防守價與風險提示；每個交易日收盤後整理，法人資料齊了會再更新，可回看近 10 個交易日。點股票可開K線圖。</div>
      </div>
      <button class="cm-icon-btn" id="swingClose" aria-label="關閉">✕</button>
    </div>
    <div class="chart-tabs signal-tabs-bar" id="swingTabs"></div>
    <div id="swingBody"></div>
  </div>
</div>
<!-- 2026-10-04 使用者：黑龍回測從下午報分離成獨立面板（下方導覽列「創高黑龍」） -->
<div class="chips-modal" id="heilongModal" hidden>
  <div class="chips-inner" id="heilongInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">創高黑龍・績效分析</div>
        <div class="chips-sub">出發點＝官網選股系統「創高黑龍」（均線分數高＋當天收黑）。自訂參數 → 看歷史 D+1 各種出場方式的績效 → 每天收盤挑自己的名單 → 隔天回來看要不要出場；每個交易日收盤後整理，可回測近 60 個交易日。</div>
      </div>
      <button class="cm-icon-btn" id="heilongClose" aria-label="關閉">✕</button>
    </div>
    <div id="heilongBody"></div>
  </div>
</div>
<!-- 2026-10-07 使用者：照莊爸 App 的「飆股雷達」做一個（下方導覽列「飆股雷達」），條件我們自己算；同日使用者：說明開頭講來源和「近似條件」那段拿掉 -->
<div class="chips-modal" id="grailModal" hidden>
  <div class="chips-inner" id="grailInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">飆股雷達</div>
        <div class="chips-sub">每個邏輯旁邊有對答案的結果。盤中照各邏輯的時間點用證交所即時報價算，收盤後再用官方日K算一次「收盤」。點股票開K線圖；不是買賣建議。</div>
      </div>
      <button class="cm-icon-btn" id="grailClose" aria-label="關閉">✕</button>
    </div>
    <div id="grailBody"></div>
  </div>
</div>
<!-- 2026-10-09 使用者：照莊爸「處置股・出獄與嫌疑名單」zhuang.tw/prison 做一模一樣的（下方導覽列「處置監獄」），資料用證交所／櫃買公開公告 -->
<div class="chips-modal" id="jailModal" hidden>
  <div class="chips-inner" id="jailInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">處置股・出獄與嫌疑名單</div>
        <div class="chips-sub">處置監獄：每日出獄時間表、犯罪集團、今日入獄、嫌疑名單（明天門檻）、個股前科查詢。點股票看前科，卡片裡可開K線圖。</div>
      </div>
      <button class="cm-icon-btn" id="jailClose" aria-label="關閉">✕</button>
    </div>
    <div id="jailBody"></div>
  </div>
</div>
<!-- 2026-10-09 使用者：照莊爸「每月營收成長榜 學員版」做一模一樣的（下方導覽列「營收成長榜」），資料用公開資訊觀測站每月營收彙總表 -->
<div class="chips-modal" id="revModal" hidden>
  <div class="chips-inner" id="revInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">每月營收成長榜</div>
        <div class="chips-sub">族群分析、多觀察（自選股）、火箭烏龜（營收公布後隔日漲跌統計）、懸賞榜、全部公司總表。點股票看該股每月營收。</div>
      </div>
      <button class="cm-icon-btn" id="revClose" aria-label="關閉">✕</button>
    </div>
    <div id="revBody"></div>
  </div>
</div>
<!-- 2026-10-04 使用者：照莊爸 App「創高黑」做的選股程式（下方導覽列「創高黑選股」），跟創高黑龍分開放 -->
<div class="chips-modal" id="pickerModal" hidden>
  <div class="chips-inner" id="pickerInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">創高黑選股</div>
        <div class="chips-sub">先在「模組」設規則 → 「選股」看每週名單、每日新進、條件池 → 「今天」看模組照規則怎麼進出（模擬帳戶、今天要做、13:00 提醒）→ 「實績」比較各種出場方式。全市場三年還原日線，每個交易日收盤後更新；全部是試算，不是買賣建議。點股票可開K線圖。</div>
      </div>
      <button class="cm-icon-btn" id="pickerClose" aria-label="關閉">✕</button>
    </div>
    <div class="chart-tabs signal-tabs-bar" id="pickerTabs"></div>
    <div id="pickerBody"></div>
  </div>
</div>
<div class="chips-modal" id="checkupModal" hidden>
  <div class="chips-inner" id="checkupInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">每日持股健診</div>
        <div class="chips-sub">貼上手上的股票，每檔算基本面／籌碼面／技術面三個 0～100 分再合成綜合，附明天的防守價（三日低／月線／紅半）與判定。收盤後跟下午報一起更新，非即時報價。點股票可開K線圖。</div>
      </div>
      <button class="cm-icon-btn" id="checkupClose" aria-label="關閉">✕</button>
    </div>
    <div id="checkupBody"></div>
  </div>
</div>
<div class="chips-modal" id="diagModal" hidden>
  <div class="chips-inner" id="diagInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">個股問診</div>
        <div class="chips-sub">打股號一次看那檔的強弱、七科體檢、防守線（三日低／月線／紅半）、日線圖、同族對照、族群強度榜、今日名單與穿惡名單。收盤後跟下午報一起更新，非即時報價。</div>
      </div>
      <button class="cm-icon-btn" id="diagClose" aria-label="關閉">✕</button>
    </div>
    <div id="diagBody"></div>
  </div>
</div>
<div class="chips-modal" id="watchModal" hidden>
  <div class="chips-inner" id="watchInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">自選股</div>
        <div class="chips-sub">自己挑的股票分組追蹤：即時報價、盤中大戶力、均線分數、漲跌停、處置／注意、融資券／當沖／股期；「持股損益」填成本張數算損益，「盤後籌碼」看法人、主力、大戶、創高天數。點股票開K線圖。設定同步碼後，兩台電腦＋手機看到同一份清單。</div>
      </div>
      <button class="cm-icon-btn" id="watchClose" aria-label="關閉">✕</button>
    </div>
    <div id="watchBody"></div>
  </div>
</div>
<div class="chips-modal" id="trackModal" hidden>
  <div class="chips-inner" id="trackInner">
    <div class="chips-head">
      <div>
        <div class="chips-title">個股訊號追蹤</div>
        <div class="chips-sub">自選股今天出現的盤中訊號（發動、特大買賣單、四項精選、主力翻多空、創高黑龍、1+2多）照時間列，加上提醒：到價、跌破均線、自選股出現訊號就跳通知＋響聲。</div>
      </div>
      <button class="cm-icon-btn" id="trackClose" aria-label="關閉">✕</button>
    </div>
    <div id="trackBody"></div>
  </div>
</div>
<div id="buildStamp"></div>
<button type="button" id="updateBanner" hidden>網頁有新版本，點一下更新</button>
<div id="chartWindows"></div>
<div id="chartTray"></div>
<div class="chart-modal" id="chartModal" hidden>
  <div class="chart-modal-inner" id="chartModalInner">
    <div class="chart-modal-head" id="chartModalHead">
      <div><span class="cm-code" id="cmCode"></span><span class="cm-name" id="cmName"></span><button type="button" class="wl-star" id="cmStar" data-code="" data-name="" title="加入自選股">☆</button><span class="cm-data-badge" id="cmDataBadge" hidden>示範資料</span></div>
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
  <button class="tb-btn" data-label="飆股雷達"><span class="tb-icon">雷</span>飆股雷達</button>  <!-- 2026-10-07 使用者：照莊爸 App 的飆股雷達做 -->
  <button class="tb-btn" data-label="處置監獄"><span class="tb-icon">獄</span>處置監獄</button>  <!-- 2026-10-09 使用者：照莊爸處置監獄頁做 -->
  <button class="tb-btn" data-label="營收成長榜"><span class="tb-icon">營</span>營收成長榜</button>  <!-- 2026-10-09 使用者：照莊爸每月營收成長榜做 -->
  <!-- 2026-09-26 使用者：下方導覽列的「三角收斂」「隔日沖大單籌碼」不用再留著（本來就是開發中的空位）；2026-09-28 再拿掉「個股研究中心」；
       2026-10-05 再拿掉「每週籌碼分析」（開發中的空位）。「個股訊號追蹤」拿掉後使用者又要加回來，要放自選股的今日訊號與提醒。 -->
  <button class="tb-btn" data-label="今日盤後籌碼排行"><span class="tb-icon">籌</span>盤後籌碼排行</button>
  <button class="tb-btn" data-label="下午報"><span class="tb-icon">午</span>下午報</button>
  <button class="tb-btn" data-label="創高黑龍"><span class="tb-icon">龍</span><span>創高黑龍<span class="tb-sub">（自動）</span></span></button>  <!-- 2026-10-04 使用者：黑龍回測從下午報分離成獨立面板；2026-10-05 名字後面加（自動），跟創高黑選股（手動）分開 -->
  <button class="tb-btn" data-label="創高黑選股"><span class="tb-icon">選</span><span>創高黑選股<span class="tb-sub">（手動）</span></span></button>  <!-- 2026-10-04 使用者：照莊爸 App「創高黑」做的選股程式；2026-10-05 名字後面加（手動） -->
  <button class="tb-btn" data-label="健診"><span class="tb-icon">診</span>每日持股健診</button>  <!-- 2026-09-28 使用者：鈕的名字改成「每日持股健診」 -->
  <button class="tb-btn" data-label="問診"><span class="tb-icon">研</span>個股研究</button>  <!-- 2026-09-28 使用者：鈕的名字改成「個股研究」 -->
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
        <button class="sm-btn" id="smPinWindow" hidden title="開一個永遠浮在最上層的小視窗（可以拖到另一個螢幕），操作別的程式時也不會被蓋住">📌 釘選最上層</button>
        <button class="sm-btn" id="smRecenter">回到中央</button>
        <button class="cm-icon-btn" id="smCollapse" aria-label="收合">－</button>
        <button class="cm-icon-btn" id="smClose" aria-label="隱藏">✕</button>
      </div>
    </div>
    <div class="signal-help" id="signalHelp" hidden>
      <ul>
        <li><b>今日即時多</b>：彙整多方向訊號的即時清單：盤中大戶力多、四項精選強多、1+2多、創高黑龍、主力翻多、盤中特大買單，依發生時間新到舊排序。</li>
        <li><b>今日即時空</b>：彙整空方向訊號的即時清單：最上面一塊是刀劍空(32)的即時名單（沒有發生時間，只有今天有），下面是盤中大戶力空、四項精選強空、主力翻空、盤中特大賣單依發生時間新到舊排序；跟今日即時多完全不重複。捲到刀劍空下面那兩條黑線時，畫面會固定在線上：自動更新後線不會跑掉，最新的訊號從線的正下方冒出來、舊的往下推。</li>
        <li><b>所有族群綜合表</b>：大戶力（大單淨額÷累計成交額）跟處置/注意狀態合併顯示，一個族群一個表格；只列出大戶力≥+10%或≤-10%、或有處置/注意資料的股票。處置／注意欄：「處置中」是官方處置股名單，藍色「注意股」是交易所已公布的官方注意股（都是官方現成資料）。</li>
        <li><b>精選十大多空族群</b>（原族群大戶力）：今天漲幅前10大族群、跌幅前10大族群，各自取大戶力最強（或最負）的前5檔個股。</li>
        <li><b>盤中333</b>：馬火多(30)、賽馬多加河流多(33加34)等多方條件篩出的個股與族群名單（刀劍空(32)已經拆到獨立分頁）。<b>排序</b>：個股名單預設照盤中大戶力排，值大的在上、小的在下，沒有大戶力資料的排最後。名單怎麼挑（漲幅前 10 檔等）不變，只改順序。</li>
        <li><b>刀劍空(32)</b>：馬火多的鏡像，抓的是弱勢股。今天跌、族內後 1/3、不比櫃買強，且現價低於前天收盤（⚔️劍）；🔪（刀）＝現價低於昨收。正式名單（強空積極）最多 10 檔，跌幅深的在前，大戶力最負的在上；多方打少（強族群裡逆勢走弱）和收割區域（已跌 5% 以上，不追空）只列名字。點列或按「圖」欄可以開該檔的K線圖。每列第二行左邊標出交易條件：可融資／可融券／可現股當沖／有股期，不行的寫停資／停券／不可當沖（橘底），處置股、注意股也會標；某一項還沒查到就不標。</li>
        <li><b>醞釀／發動</b>：老師的選股法，1＝醞釀（整理形態）、2＝發動（突破）。<b>醞釀</b>以前一個交易日收盤為準：均線分數≥10（5/10/20/60/120/240 日線兩兩比較共 15 組，短天期在長天期上面得 1 分）、收盤站上月線（20 日線）、近 10 天最高到最低相差≤20%、5/10/20 日線糾結（相差≤4%）；壓力多但突破會很強，適合不盯盤，每天買一點、分批加碼，站穩月線快突破再積極加碼。<b>發動</b>盤中即時判斷：價格衝過箱頂（近 10 天最高價）＝過高、均線分數>10、周轉高（盤中累積周轉率≥5% 或盤中累積量≥5 日均量 1.5 倍，不換算成全天預估量）；買黑拚隔日衝，破黑低要跑快。同族群依均線分數排序，★＝族群裡分數最高（族群多就挑分數最高的）。金融股不列入醞釀／發動（均線分數仍照算，盤中333 看得到）。<b>發動通知</b>：頁面開著時出現新的發動會跳瀏覽器通知並響提示音（右上角「提醒開啟」控制，第一次要允許通知；剛打開頁面時已經在名單上的不會再跳）。網頁要開著才會通知，關掉就收不到。<b>每日保存</b>：後端每個交易日存下醞釀名單與盤中第一次發動的紀錄（時間、價格、分數、周轉），分頁上可切「昨天／前天」看；今天盤中曾發動、現在回落的股票也會列在「今天曾發動、現在已回落」；同一檔回落又重新發動只列一列（時間＝第一次，×N＝總共發動 N 次，昨天／前天也一樣）；這台電腦當下抓不到報價的股票判斷不了有沒有回落，不算進去，另外列名字。「今天∩昨天」「昨天∩前天」列出連續兩天都出現的股票（兩天都發動、兩天都醞釀各一段），表格多一欄前一天的數字。保存功能上線前的日子、或程式那天沒在跑，後端用那天的日K回推：醞釀名單照當天盤前的算法補，發動只補「收盤時仍符合」的（發動時間欄寫「收盤」），盤中曾發動又回落的補不回來。發動列表名稱下面會標出可融資／可融券／可現股當沖／有股期，跟盤中大戶力排行同一份資料，查不到（不在追蹤範圍等）就不顯示，不是代表沒有。</li>
        <li><b>盤中大戶力</b>：個股大戶買賣力道明顯轉強或轉弱。每列最前面的時間是「這檔主力副圖最後更新到幾點」，不是「資料只算到這個時間點」——大戶力%一直都是當天開盤到現在整天累加；越接近收盤，越多股票這欄會顯示接近的時間（因為大家幾乎都還在更新），不代表比較早的資料不見了。</li>
        <li><b>四項精選（強多/強空）</b>：四個條件同時成立才會出現。①分時資金強度：盤中累計大單買進（強多）或賣出（強空）金額達到前日大單淨買超金額的時段門檻（09:00-09:29≥50%／09:30-09:59≥70%／10:00-10:59≥90%／11:00-13:30≥120%，且前日淨買超須大於1億元才有候選資格）；②主力淨額比：當分鐘≥+50%（強多）或≤-50%（強空），且前一分鐘同方向；③VWAP：現價站上（強多）或跌破（強空）VWAP；④首五分鐘：突破（強多）或跌破（強空）開盤前5分鐘（09:00-09:04）K棒高低點。同一檔股票同一方向一天只提示一次，偵測時間09:00-13:30。</li>
        <li><b>1+2多</b>：5 分K收盤同時站上「905 高」（開盤第一根 5 分K、09:00～09:05 的最高價）與昨日最高價時成立，一天一次，沒有時間限制。</li>
        <li><b>創高黑龍</b>：09:00 開盤～13:30 收盤（2026-10-05 起，以前 11:00 後才算；第一根 5 分K 也算），5 分K最高價突破前 5 個交易日最高價（平高不算）、但這根收盤低於今天開盤價，且均線分數≥10（5/10/20/60/120/240 日線兩兩比較 15 組），一天一次。</li>
        <li><b>主力翻多／主力翻空（主力累計翻多／翻空）</b>：A～D同步濾網，每根1分K收完評估。A主力零軸：當日主力累計淨額（大單買張−賣張）由負翻正（翻空反向）；B VWAP穿越：1分K收盤站上（翻空：跌破）VWAP，A、B要在5分鐘內同時發生且當下仍成立；C主力淨額率：累計淨額÷累計大單總張數 ≥ ±20%；D量比：今日成交量換算整天速度÷前5日平均 ≥ 1.5×。C、D都達強勢門檻（±40%、3×）標「強勢」。每檔每天多空各一次；明細列會寫出零軸、VWAP穿越時間、淨額率、距VWAP、量比、累計張數。</li>
        <li><b>盤中特大買單／賣單</b>：同一秒內大單連續敲進／倒出（同秒合計 ≥100 張或 ≥3,000 萬，觸發時大戶力要同向）；合計 ≥300 張或 ≥5,000 萬標「瞬間特大」。訊號很多時用上方篩選鈕縮減（可同時開幾個）：只看特大單、金額≥1億、族群前10名（族群同步漲幅／跌幅前 10 名）、每檔只留最大一筆（同一檔一天觸發好幾次，只留到目前為止金額最大的，之後有更大的會換成新的）、每檔只留最新一筆（只留最近發生的那筆，看誰剛剛有大單進來；跟最大一筆二選一）；分頁上的數字會跟著篩選變。</li>
        <li><b>歷史查詢</b>：選擇日期查看當天的訊號紀錄。今日即時／四項精選強多／四項精選強空／1+2多／創高黑龍／主力翻多／主力翻空／盤中特大買單／盤中特大賣單這幾個分頁上方也有「今天／昨天／前天」可以直接切，看昨天、前天的訊號來檢查（成交價／漲跌幅是那一天的收盤值）。休市日或開盤前 08:45 今天還沒有訊號時，「今天」會沿用上一個交易日的訊號，按鈕寫「今天（mm/dd 收盤）」，跟大戶力分頁一樣。</li>
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
  viewStart: 0, viewCount: null, isRealBars: false, requestToken: 0, dailyBars: null,
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
  blackDragon: { symbol: '黑龍', color: '#374151', side: 'bear', desc: '創高黑龍(盤中版)：09:00開盤~13:30收盤(第一根5分K也算)，同一根5分K自己的最高價突破前5個完整交易日最高價(平高不算)，但收盤反而低於今日09:00開盤價，且六均線(5/10/20/60/120/240)排列分數≥10(滿分15)，一天一次。' },
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

function chartDayKey(ts){
  const d = new Date(ts);
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
function chartPrevClose(bars, index){
  // 漲跌的基準＝前一個交易日收盤。日線：前一根；分K：先查日線（開圖時載過、或切分K時背景補抓）裡
  // 那天之前最後一根的收盤，沒有就用這批分K裡前一天最後一根；都沒有（只載到一天）就不顯示。
  const bar = bars[index];
  if (!bar) return null;
  if (currentChart.tf === 'daily') return index > 0 ? bars[index - 1].close : null;
  const day = chartDayKey(bar.ts);
  const daily = currentChart.dailyBars;
  if (Array.isArray(daily)){
    for (let i = daily.length - 1; i >= 0; i--){ if (chartDayKey(daily[i].ts) < day) return daily[i].close; }
  }
  for (let i = index - 1; i >= 0; i--){ if (chartDayKey(bars[i].ts) < day) return bars[i].close; }
  return null;
}
function updateChartInfoBar(bars, index){
  // 使用者 2026-09-25：順序改成 開、高、低 → 量 → 漲跌／漲跌幅 → 成交價（收）→ 主力；原本的振幅拿掉，換成漲跌幅。
  // 每一項自己不換行，窄螢幕就整項跳下一行，不會「量」在上一行、「309張」在下一行。
  const el = document.getElementById('chartInfoBar');
  const ib = bars && bars[index];
  if (!el || !ib) return;
  const item = (text, color) => '<span class="cib-item"' + (color ? ' style="color:' + color + '"' : '') + '>' + text + '</span>';
  const prevClose = chartPrevClose(bars, index);
  let change = '—';
  let changeColor = null;
  if (prevClose > 0){
    const amt = ib.close - prevClose;
    const sign = amt > 0 ? '+' : '';
    change = sign + amt.toFixed(2) + '（' + sign + (amt / prevClose * 100).toFixed(2) + '%）';
    changeColor = amt > 0 ? '#e6675f' : amt < 0 ? '#5fae6f' : null;
  }
  const parts = [
    item(ib.fullLabel + (ib.liveNote ? '（' + ib.liveNote + '）' : '')), item('開' + ib.open.toFixed(2)), item('高' + ib.high.toFixed(2)), item('低' + ib.low.toFixed(2)),
    item('量' + Math.round(ib.volume) + '張'), item('漲跌' + change, changeColor), item('收' + ib.close.toFixed(2), changeColor),
  ];
  if (Number.isFinite(ib.mainNet)){
    parts.push(item('主力' + (ib.mainNet >= 0 ? '+' : '') + Math.round(ib.mainNet) + '張', ib.mainNet >= 0 ? '#e6675f' : '#5fae6f'));
  }
  el.innerHTML = parts.join(' ');
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

  // 游標移到K棒上時，標題列中間空位顯示該根的開高低／成交量／漲跌（對前一個交易日收盤）／
  // 收／主力買賣力，沒有游標時預設顯示最後一根。
  {
    const infoIndex = currentChart.hoverIndex != null
      ? Math.max(0, Math.min(bars.length - 1, currentChart.hoverIndex))
      : bars.length - 1;
    updateChartInfoBar(allBars, vStart + infoIndex);
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
// 2026-10-06 使用者：日線圖盤中沒更新（最後一根停在昨天）。日K是後端官方盤後資料，證交所／櫃買收盤後公布才寫今天
// 那根；今天還沒有官方日K時，改用證交所即時報價（開盤、最高、最低、現價、累積量）組今天這根接在最後面，
// 標題寫「盤中 HH:MM」，主力淨量加總今天的 5 分K；圖開著的時候盤中每 20 秒更新一次。
// 開盤前（還沒有開盤價）不接；收盤後官方日K進來，就改用官方那根（日期一樣的話不再接即時的）。
const LIVE_DAILY_REFRESH_MS = 20000;
function dailyBarDay(bar){
  return typeof bar.ts === 'string' ? bar.ts.slice(0, 10) : taipeiDateStr(bar.ts);
}
function withTimeout(promise, ms, fallback){
  return Promise.race([promise, new Promise((resolve) => setTimeout(() => resolve(fallback), ms))]);
}
async function fetchLiveDailyBar(code){
  try {
    const [data, m5] = await Promise.all([
      withTimeout(fetch('/api/watch-quotes?codes=' + encodeURIComponent(code)).then((res) => (res.ok ? res.json() : null)), 6000, null),
      withTimeout(fetchRealBars(code, 'm5'), 6000, []).catch(() => []),
    ]);
    const q = data && data.quotes && data.quotes[code];
    const day = String((data && data.quoteDate) || '');
    if (!q || !Number.isFinite(q.price) || !Number.isFinite(q.open) || !/^\\d{4}-\\d{2}-\\d{2}$/.test(day)) return null;
    const prices = [q.open, q.price, q.high, q.low].filter(Number.isFinite);
    const nets = (m5 || []).filter((b) => Number.isFinite(b.mainNet) && taipeiDateStr(typeof b.ts === 'number' ? b.ts : Date.parse(b.ts)) === day);
    const bar = dailyBarToBar({
      ts: day + 'T00:00:00+00:00', open: q.open, high: Math.max(...prices), low: Math.min(...prices), close: q.price,
      volume: Number.isFinite(q.volume) ? q.volume : 0,
      mainNet: nets.length ? nets.reduce((sum, b) => sum + b.mainNet, 0) : null,
    });
    bar.live = true;
    bar.liveNote = '盤中' + (data.quoteTime ? ' ' + String(data.quoteTime).slice(0, 5) : '');
    return bar;
  } catch (e) {
    return null;
  }
}
function mergeLiveDailyBar(bars, live){
  // 回傳 { bars, appended }：今天還沒有官方日K才接；已經接過今天的即時K棒就換成新的。
  if (!live || !bars.length) return { bars, appended: false };
  const last = bars[bars.length - 1];
  const lastDay = dailyBarDay(last), liveDay = dailyBarDay(live);
  if (last.live && lastDay === liveDay) return { bars: bars.slice(0, -1).concat([live]), appended: false };
  if (liveDay > lastDay) return { bars: bars.concat([live]), appended: true };
  return { bars, appended: false };
}
function chartForceSeries(bars){
  // 累積線必須按交易日歸零：多日回補後bars橫跨好幾天，若不reset，
  // 只要有一天量能特別大(例如漲停爆量)，y軸尺度會被那天撐開，
  // 其他天原本存在的真實數字就會被壓成視覺上的一條平線。
  let cum = 0, cumDate = null;
  return bars.map((b) => {
    const net = b.mainNet ?? 0;
    const d = taipeiDateStr(b.ts);
    if (d !== cumDate) { cum = 0; cumDate = d; }
    cum += net;
    return { net, cum, date: d };
  });
}
function twMarketLiveNow(){
  // 台北時間平日 09:00～13:40（收盤 13:30，多留幾分鐘拿到最後一盤）
  const t = new Date(Date.now() + 8 * 3600000);
  const day = t.getUTCDay(), minutes = t.getUTCHours() * 60 + t.getUTCMinutes();
  return day >= 1 && day <= 5 && minutes >= 9 * 60 && minutes <= 13 * 60 + 40;
}
async function refreshLiveDailyBar(){
  if (currentChart.tf !== 'daily' || !currentChart.isRealBars || !Array.isArray(currentChart.bars) || !currentChart.bars.length) return;
  if (document.visibilityState === 'hidden' || !twMarketLiveNow()) return;
  if (!CHART_WINDOW_MODE && document.getElementById('chartModal').hidden) return;
  const code = currentChart.code, token = currentChart.requestToken;
  applyLiveDailyBar(code, token, await fetchLiveDailyBar(code));
}
function applyLiveDailyBar(code, token, live){
  // 同一檔、同一次開圖、還在日線才套用（中途換股票／換週期就丟掉）
  if (!live || code !== currentChart.code || token !== currentChart.requestToken || currentChart.tf !== 'daily') return;
  if (!currentChart.isRealBars || !Array.isArray(currentChart.bars) || !currentChart.bars.length) return;
  const before = currentChart.bars.length;
  const { start, count } = visibleRange(before);
  const merged = mergeLiveDailyBar(currentChart.bars, live);
  if (merged.bars === currentChart.bars) return;
  currentChart.bars = merged.bars;
  currentChart.dailyBars = merged.bars;
  // 放大看最右邊（最新）那段的時候，多一根就跟著往右移一根，不會把新的那根擠到畫面外
  if (merged.appended && currentChart.viewCount != null && start + count >= before) currentChart.viewStart = start + 1;
  currentChart.force = TF_CONFIG.daily.force ? chartForceSeries(merged.bars) : null;
  currentChart.macd = computeMACD(merged.bars);
  redrawAll();
}
setInterval(() => { refreshLiveDailyBar().catch(() => {}); }, LIVE_DAILY_REFRESH_MS);

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
  let livePromise = null;
  if (tf === 'm5'){
    try { bars = await fetchRealBars5Range(currentChart.code); isReal = true; } catch (e) { bars = null; }
  } else if (tf === 'm1'){
    try { bars = await fetchRealBars1Range(currentChart.code); isReal = true; } catch (e) { bars = null; }
  } else if (tf === 'daily'){
    // 官方日K先畫出來（不等即時報價，切到日線不會卡住幾秒）；即時報價同時去抓，回來後把今天盤中那根接上去
    // （見 fetchLiveDailyBar／applyLiveDailyBar）。
    livePromise = fetchLiveDailyBar(currentChart.code);
    try { bars = await fetchRealDailyBars(currentChart.code); isReal = true; } catch (e) { bars = null; }
  }
  if (requestToken !== currentChart.requestToken) return; // 使用者已切到別的分頁/個股，這次結果作廢
  if (!bars) bars = generateOHLC(currentChart.code, tf);
  currentChart.bars = bars;
  currentChart.isRealBars = isReal;
  if (tf === 'daily') currentChart.dailyBars = isReal ? bars : null;
  else if (!currentChart.dailyBars){
    // 分K的漲跌要對前一個交易日收盤：沒載過日線就背景抓一次（同一檔才用）
    const code = currentChart.code;
    fetchRealDailyBars(code).then((daily) => {
      if (code === currentChart.code && currentChart.tf !== 'daily'){ currentChart.dailyBars = daily; drawChart(); }
    }).catch(() => {});
  }

  document.getElementById('cmDataBadge').hidden = isReal;
  document.getElementById('forceNote').textContent = forceNoteText(isReal);

  if (isReal){
    currentChart.force = cfg.force ? chartForceSeries(bars) : null;
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
  if (livePromise && isReal){
    const code = currentChart.code;
    livePromise.then((live) => applyLiveDailyBar(code, requestToken, live)).catch(() => {});
  }
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
  // 手機／iPad 直式：從任何面板點進來，面板一律退到K線圖後面、關圖再回來（2026-10-09 使用者：營收成長榜的「K線圖」按了沒出來
  // ——處置監獄、飆股雷達、營收成長榜沒有自己加 behind-chart，K線圖其實開了但被面板蓋住）
  document.querySelectorAll('.chips-modal, #signalModal').forEach((el) => el.classList.add('behind-chart'));
  const overlay = document.getElementById('chartModal');
  const wasHidden = overlay.hidden;
  if (currentChart.code !== code) currentChart.dailyBars = null;  // 換股票：漲跌用的日線快取要重抓
  currentChart.code = code;
  currentChart.name = name;
  document.getElementById('cmCode').textContent = code;
  document.getElementById('cmName').textContent = name;
  const cmStar = document.getElementById('cmStar');
  if (cmStar){ cmStar.dataset.code = code; cmStar.dataset.name = name || ''; wlRefreshStars(); }
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
  // 若是從訊號中心／盤後籌碼排行／下午報／健診／問診點進來的，關圖後讓它們回到最上層。
  document.querySelectorAll('.behind-chart').forEach((el) => el.classList.remove('behind-chart'));
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
      '<div class="srow-left"><span class="scode">' + s.code + '</span><span class="sname">' + s.name + '</span>' + wlStarHtml(s.code, s.name) + '</div>' +
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
  // 報價不合理（價格不是正數、漲跌或漲跌幅不是數字）就顯示「—」，不要印出 -100.00%／NaN 這種假數字
  // （2026-10-04 週末 TWSE 測試盤回了成交價 0 的資料，漲跌幅算成 -100%、漲跌推算成 NaN）。
  if (!(price > 0) || !Number.isFinite(changeAmt) || !Number.isFinite(changePercent)){
    return '<div class="srow-right"><span class="spct flat">—</span><span class="schg flat">—</span>' +
      '<span class="sprice flat">' + (price > 0 ? price.toFixed(2) : '—') + '</span></div>';
  }
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
  // mock：還沒拿到任何一次真的報價時墊著首頁用的示範資料（沒有價格）；醞釀／發動、盤中333 這些要價格的名單
  // 看到它就顯示「還在載入」，不能拿示範資料去算（2026-10-05 使用者：整頁 0/0、29 檔都說抓不到報價）
  return { groups, mock: true };
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
      '<div class="ms-updated">' + (data.heldFrom
        ? String(data.tradeDate || '').slice(5).replace('-', '/') + ' 收盤時的判斷，下一個交易日開盤前（08:45）沿用'
        : '最新更新 ' + new Date(data.updatedAt).toLocaleTimeString('zh-TW')) + '</div></div>';
  } catch (e) {
    const s = buildOtcStrengthDemo();
    el.innerHTML =
      '<div class="ms-badge' + (s.badgeCls ? ' ' + s.badgeCls : '') + '">' + s.label + '</div>' +
      '<div class="ms-lines"><div class="ms-line ' + s.line1Cls + '">' + s.line1 + '</div><div class="ms-line ' + s.line2Cls + '">' + s.line2 + '</div>' +
      '<div class="ms-updated">最新更新 ' + new Date().toLocaleTimeString('zh-TW') + '（示範資料，尚無真實回報）</div></div>';
  }
}

// 使用者 2026-09-24：族群大戶力／族群綜合表／盤中333 這三個移到今日即時後面（原本排在後段）。
// 2026-09-30 使用者：醞釀／發動要排第二個位置，在今日即時右邊，方便盯著看；其餘順序不變。
const SIGNAL_KINDS = [
  { key: 'now', label: '今日即時多' },      // 2026-10-04 使用者：拆成多／空兩頁，多方向留在這裡
  { key: 'nowBear', label: '今日即時空' },  // 2026-10-04 使用者：刀劍空＋盤中大戶力空＋四項精選強空＋主力翻空＋盤中特大賣單集中這一頁
  { key: 'brewLaunch', label: '醞釀／發動' },
  { key: 'groupCombinedBoard', label: '所有族群綜合表' },     // 2026-09-26 使用者：改名
  { key: 'groupHolderForce', label: '精選十大多空族群' },   // 2026-09-26 使用者：原「族群大戶力」改名
  { key: 'race333', label: '盤中333' },
  { key: 'bigBuy', label: '盤中特大買單' },  // 2026-10-05 使用者：排到盤中333 右邊；2026-10-08 字改紅色（跟其他多方分頁同色）
  // 2026-10-01 使用者：盤中大戶力、四項精選也都拆成多／空各一個分頁，不要放在一起。
  { key: 'bigHolderForceBull', label: '盤中大戶力多' },
  { key: 'fourGateBuy', label: '四項精選強多' },
  { key: 'combo12Bull', label: '1+2多' },
  { key: 'blackDragon', label: '創高黑龍' },
  // 2026-10-01 使用者：主力翻多空原本混在一起，拆成主力翻多／主力翻空各一個分頁，不要放在一起。
  { key: 'mainForceFlipBull', label: '主力翻多' },
  // 2026-10-04 使用者：「空」方向的分頁(刀劍空／盤中大戶力空／四項精選強空／主力翻空／盤中特大賣單)
  // 移到這裡集中放在一起、排在歷史查詢前面，字改綠色跟「多」方向區隔開；
  // 刀劍空(32)（2026-09-30 從盤中333拆出來的）也是空方向，排在盤中大戶力空左邊。
  { key: 'bladeShort', label: '刀劍空(32)' },
  { key: 'bigHolderForceBear', label: '盤中大戶力空' },
  { key: 'fourGateSell', label: '四項精選強空' },
  { key: 'mainForceFlipBear', label: '主力翻空' },
  { key: 'bigSell', label: '盤中特大賣單' },
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
  const counts = { fourGateBuy: 1, bigBuy: 2, bigSell: 2, bigHolderForce: 2 };
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
      if (kind === 'fourGateBuy') label = '四項條件同時成立';
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
try { alertsEnabled = localStorage.getItem('alertsEnabled') !== '0'; } catch (e) { /* 讀不到就預設開 */ }
let signalCenterState = { activeTab: 'now', historyDate: null };
let todaySignalEvents = [];
let mainForceRanking = [];
let mainForceRankingLoaded = false; // 第一次抓/api/main-force-ranking成功後才true，且不會因為後面某次輪詢失敗而變回false；
                                     // 用來分辨「這個分頁/視窗根本還沒抓到過大戶力資料」跟「抓到了但目前真的是空的」，
                                     // 不然新開的彈出視窗(移到另一螢幕)一開始mainForceRanking是[]，族群大戶力／族群
                                     // 綜合表會在抓到資料前先顯示「目前沒有符合條件的個股」，看起來像是壞掉。
let signalDataIsReal = false;
const BIG_HOLDER_THRESHOLD = 500; // 累計買賣超達 500 張視為大戶力，跟K線圖大戶定義一致
// 2026-10-01 使用者：盤中大戶力偏買跟偏賣原本混在同一個列表，要拆成兩個分頁；netVolume（大單淨額）
// 正負號就是買賣方向，strengthPct／holderLabel是它換算出來的百分比／門檻標籤，符號一定同向，
// 用netVolume判斷才每一列都有得判斷（strengthPct可能因為資料還在累積是null）。
const holderRowIsBull = (r) => Number(r.netVolume) >= 0;
function bigHolderRowsFrom(ranking, dir){
  const rows = ranking.filter((r) => Math.abs(r.netVolume) >= BIG_HOLDER_THRESHOLD);
  if (dir === 'bull') return rows.filter(holderRowIsBull);
  if (dir === 'bear') return rows.filter((r) => !holderRowIsBull(r));
  return rows;
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
    // 2026-10-04 使用者：今日即時拆成多／空兩頁，空方向的訊號（四項精選強空／主力翻空／特大賣單）進「今日即時空」，不再混在一起。
    tabs: isFourGate ? [isBuy ? 'now' : 'nowBear', kind] : isFlip ? [isBuy ? 'now' : 'nowBear', isBuy ? 'mainForceFlipBull' : 'mainForceFlipBear'] : (DEDICATED_KLINE_TABS.has(kind) ? ['now', kind] : [isBuy ? 'now' : 'nowBear', isBuy ? 'bigBuy' : 'bigSell']),
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
  return '<div class="race-sub">目前顯示 ' + mainForceRankingInfo.tradeDate + ' 收盤時的最終大戶力資料（今天還沒開盤），漲跌幅／漲跌／成交價是那一天的日K收盤值，保留到下一個交易日開盤前 15 分鐘（08:45）才清空重算。</div>';
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
  return mainForceRankingInfo.tradeDate || twTodayStr();
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
// 訊號列／排行列的成交價、漲跌：看昨天／前天（isPast）或休市日／開盤前沿用上一個交易日（held）時，
// 用那一天的日K收盤值，不是首頁現在的即時報價（2026-10-04 週日 TWSE 跑測試盤，即時報價不是 0 就是
// 測試用的假價，「今天（10/02 收盤）」的大戶力列全部顯示 -100%／NaN／0.00）。日K還沒有那一天時，
// 沿用上一個交易日的情況才退回即時報價（跟以前一樣）；看昨天／前天本來就只用日K。
function viewStockQuote(code, view){
  if (view && (view.isPast || view.held)){
    const q = holderPastQuote(code, view.date);
    if (q || view.isPast) return q;
  }
  return getStockQuote(code);
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
    const date = holderCurrentDate();
    // 後端暫留上一個交易日（heldFrom）時，族群表也改套那一天的日K收盤（跟昨天／前天同一套），
    // 不用首頁的即時報價；日K還沒有那一天時才退回即時報價。
    const held = !!mainForceRankingInfo.heldFrom;
    const liveGroups = lastData ? lastData.groups : null;
    const groups = held ? (holderSnapshotGroups(date) || liveGroups) : liveGroups;
    return { offset: 0, date, ranking: mainForceRanking || [], groups, loading: !mainForceRankingLoaded, isPast: false, held, unavailable: false };
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
// ---- 訊號分頁（今日即時／四項精選強多／強空／1+2多／創高黑龍／主力翻多／翻空／盤中特大買賣單）的「今天／昨天／前天」----
// 使用者 2026-09-25：訊號為零的分頁昨天的都沒留下來，要能看昨天、前天的資料來檢查。往日的訊號後端本來就
// 每天保存（跟歷史查詢分頁同一條路），這裡讓每個訊號分頁都能直接切；休市日或開盤前 08:45 今天還沒有訊號時，
// 比照大戶力分頁沿用上一個交易日（後端排行帶 heldFrom），按鈕寫「今天（mm/dd 收盤）」。
const SIGNAL_DAY_TABS = new Set(['now', 'nowBear', 'fourGateBuy', 'fourGateSell', 'combo12Bull', 'blackDragon', 'mainForceFlipBull', 'mainForceFlipBear', 'bigBuy', 'bigSell']);
let sigDayOffset = 0;
const sigHistoryEvents = {};   // date -> events[]（抓過就留著）
const sigHistoryLoading = {};
const sigHistoryFailedAt = {}; // 30 秒內不重試
function sigCurrentDate(){
  const today = twTodayStr();
  if (todaySignalEvents.length) return today;
  return mainForceRankingInfo.heldFrom && mainForceRankingInfo.tradeDate ? mainForceRankingInfo.tradeDate : today;
}
function sigPastDates(){
  const dates = groupDailyChanges && Array.isArray(groupDailyChanges.dates) ? groupDailyChanges.dates : [];
  const cur = sigCurrentDate();
  return dates.filter((d) => d < cur);
}
function sigViewDate(){ return sigDayOffset === 0 ? sigCurrentDate() : (sigPastDates()[sigDayOffset - 1] || null); }
async function ensureSigHistory(date){
  if (sigHistoryEvents[date] || sigHistoryLoading[date]) return;
  if (sigHistoryFailedAt[date] && Date.now() - sigHistoryFailedAt[date] < 30000) return;
  sigHistoryLoading[date] = true;
  try {
    sigHistoryEvents[date] = await fetchRealSignals(date);
  } catch (e) {
    sigHistoryFailedAt[date] = Date.now();
  } finally {
    delete sigHistoryLoading[date];
  }
  if (!document.getElementById('signalModal').hidden) renderSignalCenter();
}
function sigCurrentEvents(){
  const date = sigCurrentDate();
  if (date === twTodayStr()) return todaySignalEvents;
  ensureSigHistory(date);  // 沿用上一個交易日：那天的訊號另外抓
  return sigHistoryEvents[date] || [];
}
function sigView(){
  const today = twTodayStr();
  if (sigDayOffset === 0){
    const date = sigCurrentDate();
    const held = date !== today;
    return { offset: 0, date, events: sigCurrentEvents(), loading: held && !sigHistoryEvents[date], isPast: false, held, unavailable: false,
      rankingRows: bigHolderRowsFrom(mainForceRanking || []) };
  }
  const date = sigViewDate();
  if (!date) return { offset: sigDayOffset, date: null, events: [], loading: false, isPast: true, held: false, unavailable: true, rankingRows: [] };
  ensureSigHistory(date);
  ensureHolderHistory(date);  // 今日即時分頁要合併那一天的大戶力
  return { offset: sigDayOffset, date, events: sigHistoryEvents[date] || [], loading: !sigHistoryEvents[date], isPast: true, held: false, unavailable: false,
    rankingRows: bigHolderRowsFrom(holderHistoryRanking[date] || []) };
}
function sigDayBarHtml(){
  const past = sigPastDates();
  const mmdd = (d) => (d ? String(d).slice(5).replace('-', '/') : '');
  const cur = sigCurrentDate();
  const todayLabel = cur !== twTodayStr() ? '今天（' + mmdd(cur) + ' 收盤）' : '今天';
  const btn = (offset, label, date) => '<button class="chart-tab sig-day-btn' + (sigDayOffset === offset ? ' active' : '') + '" data-offset="' + offset + '"' + (date ? '' : ' disabled') + '>' + label + '</button>';
  return '<div class="combo-filter-bar sig-day-bar">' +
    btn(0, todayLabel, cur) +
    btn(1, '昨天' + (past[0] ? ' ' + mmdd(past[0]) : ''), past[0]) +
    btn(2, '前天' + (past[1] ? ' ' + mmdd(past[1]) : ''), past[1]) +
    '</div>';
}
function sigDayNoteHtml(view){
  if (view.unavailable) return '<div class="race-sub">後端還沒有那一天的資料，暫時沒辦法顯示。</div>';
  if (view.held) return '<div class="race-sub">目前顯示 ' + view.date + ' 的訊號（今天還沒開盤或休市），保留到下一個交易日開盤前 15 分鐘（08:45）才清空。' + (view.loading ? '讀取中…' : '') + '</div>';
  if (view.isPast) return '<div class="race-sub">目前顯示 ' + view.date + ' 的訊號紀錄（後端每日保存）；時間是那天訊號發生的時間，成交價／漲跌幅是那一天的日K收盤值。' + (view.loading ? '讀取中…' : '') + '</div>';
  return '';
}
function sigLoadingHtml(view){
  return '<div class="signal-empty"><div class="se-title">讀取中…</div><div class="se-sub">正在抓 ' + view.date + ' 的訊號紀錄。</div></div>';
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
  const today = twTodayStr();
  try {
    try {
      const [signals, ranking] = await Promise.all([fetchRealSignals(today), fetchMainForceRanking()]);
      todaySignalEvents = signals;
      mainForceRanking = ranking;
      mainForceRankingLoaded = true;
      try { renderWatchTable(); } catch (e) { /* 自選股重畫失敗不影響畫面 */ }
      trkTick();
      signalDataIsReal = true;
    } catch (e) {
      todaySignalEvents = buildDemoSignalsForDate(today)
        .map((ev) => ({ ...ev, tabs: [ev.kind === 'bigSell' || /轉弱|賣/.test(ev.label) ? 'nowBear' : 'now', ev.kind] }));
      mainForceRanking = [];
      signalDataIsReal = false;
    }
    const countEl = document.getElementById('signalBadgeCount');
    // 跟「今日即時」分頁的數量算法要一致(事件訊號+盤中大戶力)，不然這裡
    // 少算大戶力筆數，右上角徽章數字就會比今日即時分頁裡的數字還小。
    if (countEl) countEl.textContent = String(sigCurrentEvents().length + bigHolderRowsFrom(mainForceRanking).length);
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
function signalEventRowHtml(ev, view){
  const labelCls = ev.isBuy != null
    ? (ev.isBuy ? ' sig-bull' : ' sig-bear')
    : (/[買多]/.test(ev.label) ? ' sig-bull' : /[賣空]/.test(ev.label) ? ' sig-bear' : '');
  const group = lookupStockGroup(ev.code);
  // 看昨天／前天或沿用上一個交易日時，成交價／漲跌用那一天的日K收盤值，不是首頁現在的即時報價（跟大戶力分頁一樣）。
  const quote = viewStockQuote(ev.code, view);
  const changeAmt = quote ? (Number.isFinite(quote.changeAmt) ? quote.changeAmt : quote.price - quote.price / (1 + quote.changePercent / 100)) : 0;
  const priceCols = quote ? stockValueColsHtml(quote.price, changeAmt, quote.changePercent) : '';
  const labelTitle = LARGE_ORDER_TOOLTIPS[ev.label] || '';
  return '<div class="signal-row" data-code="' + ev.code + '" data-name="' + ev.name + '">' +
    '<span class="sig-time">' + ev.time + '</span>' +
    '<span class="sig-code">' + ev.code + '</span>' +
    '<span class="sig-name">' + ev.name + '</span>' +
    (group ? '<span class="sig-group">' + group + '</span>' : '<span class="sig-group sig-group-empty"></span>') +
    sigMaCellHtml(ev.code, view) +
    '<span class="sig-label' + labelCls + '"' + (labelTitle ? ' title="' + labelTitle + '"' : '') + '>' + ev.label + '</span>' +
    priceCols +
    signalNoteHtml(ev.code, ev.note) +
  '</div>';
}
// ---- 盤中特大買單／賣單篩選（2026-09-24 使用者：一天 175／254 筆太多，要一個過濾器把數量降下來）----
// 條件可以同時開好幾個，一起生效：
//   只看特大單：後端標「瞬間特大買單敲進／賣單倒出」的（同秒合計 ≥300 張或 ≥5,000 萬）；一般「瞬間大單連續」的不看
//   金額≥1億：同秒合計金額 ≥ 1 億元
//   族群前10名：族群同步排名（漲幅／跌幅第 N 名）前 10 名的族群
//   每檔只留最大一筆：同一檔股票一天可能觸發好幾次，只留「到目前為止」合計金額最大的那筆（之後有更大的會換成新的）
//   每檔只留最新一筆：同一檔只留最近發生的那筆（誰剛剛有大單進來）；跟「最大一筆」二選一
const BIG_ORDER_FILTER_DEFS = [
  { key: 'extraOnly', label: '只看特大單', title: '只看同秒合計 ≥300 張或 ≥5,000 萬的「瞬間特大」訊號' },
  { key: 'amount1e8', label: '金額≥1億', title: '同秒合計金額 1 億元以上' },
  { key: 'top10', label: '族群前10名', title: '族群同步排名（漲幅或跌幅）前 10 名的族群' },
  { key: 'onePerStock', label: '每檔只留最大一筆', title: '同一檔股票只留到目前為止合計金額最大的那一筆；之後出現更大的會換成新的' },
  { key: 'onePerStockLatest', label: '每檔只留最新一筆', title: '同一檔股票只留最近發生的那一筆（誰剛剛有大單進來）' },
];
const BIG_ORDER_EXCLUSIVE = { onePerStock: 'onePerStockLatest', onePerStockLatest: 'onePerStock' };  // 這兩個二選一
let bigOrderFilters = {};
try { bigOrderFilters = JSON.parse(localStorage.getItem('bigOrderFilters') || '{}') || {}; } catch (e) { bigOrderFilters = {}; }
function bigOrderFilterActive(){ return BIG_ORDER_FILTER_DEFS.some((d) => bigOrderFilters[d.key]); }
function largeOrderFacts(note){
  // 後端 note：「同秒 N 筆｜合計 X 張｜約 Y 億／萬｜成交價 …｜族群同步 G 漲幅第 R 名…」
  const text = String(note || '');
  const lots = /合計\\s*([\\d,]+)\\s*張/.exec(text);
  const amt = /約\\s*([\\d,.]+)\\s*(億|萬|元)/.exec(text);
  const rank = /第\\s*(\\d+)\\s*名/.exec(text);
  const unit = amt ? { '億': 1e8, '萬': 1e4, '元': 1 }[amt[2]] : 1;
  return {
    lots: lots ? Number(lots[1].replace(/,/g, '')) : null,
    amount: amt ? Number(amt[1].replace(/,/g, '')) * unit : null,
    rank: rank ? Number(rank[1]) : null,
  };
}
function filterLargeOrderEvents(events){
  if (!bigOrderFilterActive()) return events;
  let out = events.filter((e) => {
    const f = largeOrderFacts(e.note);
    if (bigOrderFilters.extraOnly && !/特大/.test(e.label || '')) return false;
    if (bigOrderFilters.amount1e8 && !(f.amount >= 1e8)) return false;
    if (bigOrderFilters.top10 && !(f.rank !== null && f.rank <= 10)) return false;
    return true;
  });
  if (bigOrderFilters.onePerStock || bigOrderFilters.onePerStockLatest){
    const latest = !!bigOrderFilters.onePerStockLatest;
    const best = new Map();
    out.forEach((e) => {
      const amount = largeOrderFacts(e.note).amount || 0;
      const cur = best.get(e.code);
      // 最新一筆：時間最晚的；最大一筆：金額最大的（同金額取較晚的）
      const better = !cur || (latest ? e.ts > cur.e.ts : (amount > cur.amount || (amount === cur.amount && e.ts > cur.e.ts)));
      if (better) best.set(e.code, { amount, e });
    });
    const keep = new Set([...best.values()].map((v) => v.e));
    out = out.filter((e) => keep.has(e));
  }
  return out;
}
function bigOrderFilterBarHtml(total, shown){
  const btns = BIG_ORDER_FILTER_DEFS.map((d) =>
    '<button class="chart-tab bigorder-filter-btn' + (bigOrderFilters[d.key] ? ' active' : '') + '" data-filter="' + d.key + '" title="' + d.title + '">' + d.label + '</button>'
  ).join('');
  const note = bigOrderFilterActive() ? '<span class="bigorder-filter-note">篩選後 ' + shown + ' 筆（原本 ' + total + ' 筆）</span>' : '';
  return '<div class="combo-filter-bar bigorder-filter-bar">' + btns + note + '</div>';
}
function signalRowsHtml(events, view){
  if (!events.length){
    if (view && view.isPast) return '<div class="signal-empty"><div class="se-title">那一天沒有這類訊號</div><div class="se-sub">' + view.date + ' 的紀錄裡沒有符合這個分頁的訊號。</div></div>';
    return '<div class="signal-empty"><div class="se-title">目前沒有符合條件的訊號' + (signalDataIsReal ? '' : '（示範資料）') + '</div>' +
      '<div class="se-sub">' + (signalDataIsReal ? '全市場掃描中，符合條件才會出現。' : '後端暫時連不上，先用示範資料展示介面。') + '</div></div>';
  }
  return signalColLabelsHtml() + '<div class="signal-list">' + events.map((ev) => signalEventRowHtml(ev, view)).join('') + '</div>';
}
// 訊號列表的欄位標題（2026-10-08 使用者加均線分數欄時一起加，數字才知道是什麼）
function signalColLabelsHtml(){
  return '<div class="signal-row signal-col-labels"><span class="sig-time"><b>時間</b></span><span class="sig-code"></span>' +
    '<span class="sig-name"><b>名稱</b></span><span class="sig-group"><b>族群</b></span><span class="sig-ma"><b>均線分數</b></span>' +
    '<span class="sig-label"><b>訊號</b></span>' +
    '<span class="srow-right"><span class="spct"><b>漲跌幅</b></span><span class="schg"><b>漲跌</b></span><span class="sprice"><b>成交價</b></span></span></div>';
}
// 每一列的均線分數（5/10/20/60/120/240 日線兩兩比較 15 組，跟盤中333 同一套）：今天用現價當今天收盤即時算；
// 看昨天／沿用上一個交易日時用那天收盤的分數（醞釀資料的 score，只有前一個交易日），更早的日子沒有資料顯示「—」。
function sigMaCellHtml(code, view){
  let inner;
  if (view && (view.isPast || view.held)){
    const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null;
    inner = info && info.asOf === view.date && Number.isFinite(info.score)
      ? '<b class="race-ma-val' + (info.score > 10 ? ' hi' : '') + '" title="均線分數（' + view.date + ' 收盤）">' + info.score + '</b>'
      : '<span class="race-ma-none" title="只留前一個交易日收盤的均線分數，更早的日子沒有">—</span>';
  } else {
    const q = getStockQuote(code);
    inner = maScoreCellHtml(code, q ? Number(q.price) : NaN);
  }
  return '<span class="sig-ma">' + inner + '</span>';
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
      try { renderWatchTable(); } catch (e) { /* 自選股重畫失敗不影響畫面 */ }
      if (!document.getElementById('signalModal').hidden) renderSignalCenter();
      if (!document.getElementById('chartModal').hidden) renderChartFlags(currentChart.code);
      if (!document.getElementById('chipsModal').hidden) renderChips();
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
    f.attention && !f.disposition ? '<span class="flag-pill attention" title="' + ATTENTION_TITLE + '">注意股</span>' : '',
  ].filter(Boolean);
  el.innerHTML = pills.join('');
  el.hidden = false;
}
const ATTENTION_TITLE = '交易所公布的注意股（官方資料，來自永豐個股資訊）';
function attentionPillHtml(code){
  // 官方注意股（2026-09-24 使用者：不續訂 FinMind、不靠預測也要看得到現成的注意股）；已經是處置股就不重複標。
  const f = stockFlags[code];
  return f && f.attention && !f.disposition ? '<span class="pill-attention" title="' + ATTENTION_TITLE + '">注意股</span>' : '';
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
  const attention = attentionPillHtml(code);
  if (attention) pills.push(attention);
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
  // 看昨天／前天或沿用上一個交易日時，成交價／漲跌用那一天的日K收盤值，不是首頁現在的即時報價。
  const quote = viewStockQuote(r.code, view);
  const changeAmt = quote ? (Number.isFinite(quote.changeAmt) ? quote.changeAmt : quote.price - quote.price / (1 + quote.changePercent / 100)) : 0;
  const priceCols = quote ? stockValueColsHtml(quote.price, changeAmt, quote.changePercent) : '';
  return '<div class="signal-row" data-code="' + r.code + '" data-name="' + name + '">' +
      '<span class="sig-time" title="主力副圖最後更新到' + timeLabel + '；大戶力%是今天開盤到現在整天累加，不是只算這個時間點以後">' + timeLabel + '</span>' +
      '<span class="sig-code">' + r.code + '</span>' +
      '<span class="sig-name">' + name + '</span>' +
      '<span class="sig-group">' + group + '</span>' +
      sigMaCellHtml(r.code, view) +
      holderStrengthLabelHtml(r) +
      tradingEligibilityTagsHtml(r) +
      (past ? '' : flagPillsHtml(r.code, { dispositionOnly: true })) +
      priceCols +
    '</div>';
}
// 欄位標題（2026-09-24 使用者：漲跌幅／漲跌／成交價沒有標題，大戶力買賣標籤也要對齊）：
// 跟資料列共用.signal-row同一套固定欄寬規則，標題才會真的跟下面資料對齊。
function rankingColLabelsHtml(){
  return '<div class="signal-row signal-col-labels"><span class="sig-time" title="這檔主力副圖最後更新到幾點；大戶力%是當天開盤到現在整天累加，不是只算這個時間點以後"><b>更新</b></span><span class="sig-code"></span>' +
    '<span class="sig-name"><b>名稱</b></span><span class="sig-group"><b>族群</b></span><span class="sig-ma"><b>均線分數</b></span>' +
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
function nowTabRowsHtml(events, rankingRows, view){
  if (!events.length && !rankingRows.length) return signalRowsHtml([], view);
  // 使用者要求：全部訊號依實際發生時間新到舊排序，不要再分事件/排行
  // 兩段各自呈現。rankingRows的時間(lastTs)是那檔股票主力副圖最後一根
  // bar的時間，個股之間本來就不一樣，不是統一的「現在」，可以跟事件
  // 訊號的barTs放在同一個時間軸上比較、排序。
  const merged = [
    ...events.map((ev) => ({ sortTs: ev.ts || 0, html: signalEventRowHtml(ev, view) })),
    ...rankingRows.map((r) => ({ sortTs: r.lastTs || 0, html: rankingRowHtml(r, view) })),
  ];
  merged.sort((a, b) => b.sortTs - a.sortTs);
  return '<div class="signal-list">' + merged.map((m) => m.html).join('') + '</div>';
}
// 2026-10-04 使用者：「今日即時」拆成多／空兩頁。空的這一頁集中放刀劍空（即時算出來的名單，沒有發生時間，當一個
// 區塊放最上面，只有今天有）＋盤中大戶力空、四項精選強空、主力翻空、盤中特大賣單（依發生時間新到舊合併排序，
// 跟多的那頁同一套）；兩頁內容完全不重複。
function nowBearTabHtml(view){
  const events = view.events.filter((e) => e.tabs.includes('nowBear'));
  const rows = view.rankingRows.filter((r) => !holderRowIsBull(r));
  let blade = '';
  if (!view.isPast){
    const m = race333Model();
    blade = '<div class="race-block now-bear-blade"><div class="race-head">🔪⚔️刀劍空(32)</div>' +
      '<div class="race-sub">跟「刀劍空(32)」分頁同一份即時名單（只有今天有；昨天／前天沒有紀錄）。下面才是依發生時間排序的空方向訊號。</div>' +
      (m ? raceBladeListHtml(m) : '<div class="race-note">族群行情還沒載入，刀劍空名單稍後才會出現。</div>') + '</div>';
  }
  return blade + nowTabRowsHtml(events, rows, view);
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
// 2026-10-06 使用者：今日即時空捲到刀劍空下面那兩條黑線時，畫面就固定在那條線——自動更新後黑線留在畫面同一個位置，
// 最新的訊號從線的正下方冒出來、舊的往下推，畫面不再跳開。原本的算法是「總高度變多少就往下捲多少」，線下面每多一筆
// 新訊號，線就被往上推出畫面（少一筆又往下掉）。現在：線在畫面上面 2/3 以內＝固定這條線；線在畫面下面 1/3（主要在看
// 刀劍空名單）＝維持原本捲到的位置；已經捲過線、在看下面較早的訊號＝照舊固定在正在看的那幾筆。
const SIGNAL_PIN_SELECTOR = '.now-bear-blade';
function signalPinState(el, scroller){
  const line = el.querySelector(SIGNAL_PIN_SELECTOR);
  if (!line) return null;
  const top = scroller.getBoundingClientRect().top + scroller.clientTop;
  const y = line.getBoundingClientRect().bottom;
  if (y < top - 24) return null;                                   // 捲過線了：固定正在看的那幾筆（原本的算法）
  if (y <= top + scroller.clientHeight * 2 / 3) return { mode: 'line', y: y };
  return { mode: 'keep' };
}
function replaceSignalHtml(el, key, html){
  if (!el) return;
  if (signalBodyRendered.key === key && signalBodyRendered.html === html) return;
  const scroller = signalScroller();
  const sameView = signalBodyRendered.key === key;
  const prevTop = scroller ? scroller.scrollTop : 0;
  const prevHeight = scroller ? scroller.scrollHeight : 0;
  const pin = scroller && sameView && prevTop > 0 ? signalPinState(el, scroller) : null;
  el.innerHTML = html;
  if (scroller){
    const line = pin && pin.mode === 'line' ? el.querySelector(SIGNAL_PIN_SELECTOR) : null;
    if (line) scroller.scrollTop += line.getBoundingClientRect().bottom - pin.y;
    else if (pin && pin.mode === 'keep') scroller.scrollTop = prevTop;
    else if (sameView && prevTop > 0) scroller.scrollTop = prevTop + (scroller.scrollHeight - prevHeight);
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
  if (!lastData || lastData.mock || !Array.isArray(lastData.groups) || !lastData.groups.length) return null;
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
        groupTotal: valid.length, groupCut: cut,
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
// 2026-09-28 使用者：33／34／30／32 各自的門檻（族排要在前幾名、族內前後 1/3、要不要贏過櫃買%）之前只寫在
// 上面 race-sub 的說明文字裡，個股列本身看不出離門檻多近。這裡把同一批數字換算成這一列自己的比例，
// 顯示在每列下面獨立一行（跟 .sig-eligibility 同招，flex:1 1 100% 整行換行，不擠原本那排欄位）。
function raceConditionsHtml(r, m, opts){
  const dist = m.otcPct === null ? null : r.pct - m.otcPct;
  const otcPart = dist === null ? '距櫃買 —（尚無資料）' : '距櫃買 ' + (dist >= 0 ? '+' : '') + dist.toFixed(1) + '%';
  const inGroupPart = '族內第 ' + r.inGroupRank + '/' + r.groupTotal + '（' + (opts && opts.blade ? '後 1/3 內' : '前 1/3 內') + '）';
  let groupPart;
  if (opts && opts.blade){
    groupPart = '族排 ' + r.groupRank + '/' + m.total + '（32 門檻：後半，即 >' + m.half + '）';
  } else if (opts && opts.both3334){
    groupPart = '族排 ' + r.groupRank + '/' + m.total + '（33 門檻 ≤' + m.horseLimit + '・34 門檻 ≤' + m.riverLimit + '）';
  } else if (opts && opts.limit !== undefined){
    groupPart = '族排 ' + r.groupRank + '/' + m.total + '（' + (opts.limitLabel || '30') + ' 門檻 ≤' + opts.limit + '）';
  } else {
    groupPart = '族排 ' + r.groupRank + '/' + m.total;
  }
  const days = [];
  if (r.yesterday !== null && r.yesterday !== undefined) days.push('昨 ' + fmt(r.yesterday) + '%');
  if (r.dayBefore !== null && r.dayBefore !== undefined) days.push('前天 ' + fmt(r.dayBefore) + '%');
  return '<span class="race-cond">' + groupPart + '・' + inGroupPart + '・' + otcPart + (days.length ? '・' + days.join('・') : '') + '</span>';
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
  return '<div class="race-col-labels r333-labels">' + (opts && opts.blade ? '<span class="race-rank-slot"><b>族排</b></span>' : '') + '<span class="race-code"><b>代號</b></span><span class="race-name"><b>名稱</b></span><span class="race-star-slot"></span><span class="race-group-label"><b>族群</b></span>' +
    '<span class="race-ma-score"><b>均線分數</b></span>' +
    (opts && opts.blade ? '<span class="race-l2wrap"><span class="race-flags-slot"><b>交易條件</b></span><span class="race-l2nums">' : '') +
    '<span class="race-line2"><span class="race-holder"><b>盤中大戶力</b></span><span><b>漲跌幅</b></span><span><b>漲跌</b></span><span><b>成交價</b></span><span class="race-badge-slot"><b>' + badgeLabel + '</b></span></span>' +
    (opts && opts.blade ? '<span class="race-chart-slot"><b>圖</b></span></span></span>' : '') + '</div>';
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
    '<span class="race-star-slot">' + wlStarHtml(r.code, r.name) + '</span>' +
    '<span class="sig-group" title="族群第 ' + r.groupRank + ' 名，族內第 ' + r.inGroupRank + ' 名">' + r.groupName + '</span>' +
    '<span class="race-ma-score">' + maScoreCellHtml(r.code, hasPrice ? price : null) + '</span>' +
    // 刀劍空：第二行左邊原本空白，放這檔的交易條件（2026-10-06 使用者）；交易條件＋（數字那一群＋「圖」）包成同一行（.race-l2wrap）。
    (opts && opts.blade ? '<span class="race-l2wrap"><span class="race-flags">' + raceFlagsHtml(r.code) + '</span><span class="race-l2nums">' : '') +
    '<span class="race-line2">' +
    '<span class="race-holder">' + raceHolderCellHtml(r) + '</span>' +
    '<span class="race-pct ' + cls + '">' + fmt(r.pct) + '%</span>' +
    '<span class="race-chg ' + cls + '">' + (hasPrice ? (chg > 0 ? '+' : '') + chg.toFixed(2) : '—') + '</span>' +
    '<span class="race-price ' + cls + '">' + (hasPrice ? limitPriceHtml(r, price.toFixed(2)) : '—') + '</span>' +
    '<span class="race-badge" title="' + dailyTitle + '">' + badge + '</span>' +
    '</span>' + (opts && opts.blade ? '<span class="race-chart-slot"><span class="race-chart-btn" title="開' + r.code + ' K線圖">📈圖</span></span></span></span>' : '') +
    (opts && opts.conditions ? raceConditionsHtml(r, opts.m, opts) : '') + '</div>';
}
// 刀劍空每列的交易條件（2026-10-06 使用者：第二行左邊空白處放融資／融券／當沖／股期，或停資／停券）：
// 可以的寫「可融資／可融券／可現股當沖／有股期」，不行的寫「停資／停券／不可當沖」（橘底白字，做空最在意能不能融券），
// 處置股、注意股也標。資料同訊號中心的全族群旗標（永豐個股資訊）；某一項抓不到（null）就不標那項，不是「不行」。
function raceFlagsHtml(code){
  const f = stockFlags[code];
  if (!f) return '';
  const out = [];
  if (f.marginable === false && f.shortable === false) out.push('<span class="stop" title="目前不可融資、不可融券">停資停券</span>');
  else {
    if (f.marginable === true) out.push('<span>可融資</span>');
    else if (f.marginable === false) out.push('<span class="stop" title="目前不可融資">停資</span>');
    if (f.shortable === true) out.push('<span>可融券</span>');
    else if (f.shortable === false) out.push('<span class="stop" title="目前不可融券">停券</span>');
  }
  if (f.dayTradeEligible === true) out.push('<span>可現股當沖</span>');
  else if (f.dayTradeEligible === false) out.push('<span class="stop" title="不可現股當沖">不可當沖</span>');
  if (f.hasStockFutures) out.push('<span class="sig-futures" title="有股票期貨">有股期</span>');
  if (f.disposition){
    const title = '處置股' + (f.dispositionUntil ? '，處置至 ' + f.dispositionUntil : '') + (f.dispositionReason ? '：' + f.dispositionReason : '');
    const until = f.dispositionUntil ? ' 至' + String(f.dispositionUntil).slice(5).replace('-', '/') : '';
    out.push('<span class="pill-disposition" title="' + title + '">處置股' + until + '</span>');
  }
  out.push(attentionPillHtml(code));
  return out.join('');
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
  const bladeLower = race333SortByHolder(race333FilterList(m.bladeLower), true);
  const bladeUpper = race333FilterList(m.bladeUpper);
  const bladeHarvest = race333FilterList(m.bladeHarvest);
  return '<div class="race-sep">----↓(強空積極)↓----</div>' +
    (bladeLower.length ? raceColLabelsHtml({ blade: true }) + bladeLower.map((r, i) => raceStockRowHtml(r, i, { blade: true, zone: '🔰', dates: m.dates, conditions: true, m })).join('') : '<div class="race-note">目前沒有符合條件的股票</div>') +
    (bladeUpper.length ? '<div class="race-note">多方打少（強族群裡逆勢走弱，空得保守）' + bladeUpper.length + ' 檔：' + names(bladeUpper) + '</div>' : '') +
    (bladeHarvest.length ? '<div class="race-note">收割區域（已跌 ' + BLADE_HARVEST_PCT + '% 以上或跌停，不追空）' + bladeHarvest.length + ' 檔：' + names(bladeHarvest) + '</div>' : '');
}
// 盤中333 大戶力篩選（2026-09-24 使用者）：null=不篩選；'up'=只留大戶力≥10%的個股；'down'=只留
// 大戶力≤-10%的個股；只套用在馬火多/賽馬多/河流多/刀劍空這幾個「個股」名單（30/33/34/32），
// 「條件>7%」跟188/199是族群層級的名單、沒有個股大戶力可篩，維持原樣不變（使用者明確要求）。
let race333HolderFilter = null;
// 盤中333 個股名單的顯示順序（2026-09-26 使用者）：照盤中大戶力（strengthPct）排，預設大的在上；刀劍空用最負的在上；
// 沒有大戶力資料的排最後；同值再照漲跌幅。
function race333SortByHolder(list, mostNegativeFirst){
  const val = (r) => (r.strengthPct === null || r.strengthPct === undefined ? null : r.strengthPct);
  const byPct = (a, b) => (mostNegativeFirst ? a.pct - b.pct : b.pct - a.pct);
  return list.slice().sort((a, b) => {
    const va = val(a), vb = val(b);
    if (va === null && vb === null) return byPct(a, b);
    if (va === null) return 1;
    if (vb === null) return -1;
    return (mostNegativeFirst ? va - vb : vb - va) || byPct(a, b);
  });
}
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
function raceNotReadyHtml(){
  if (lastData && lastData.mock){
    return '<div class="signal-empty"><div class="se-title">族群行情暫時抓不到，正在自動重試…</div>' +
      '<div class="se-sub">刀劍空、盤中333 要用首頁的族群報價來算；證交所報價這一輪沒回來（開盤前後最常見），每幾秒會自動再抓，抓到就會出現。一直這樣的話按 F5 重新整理。' +
      (groupsLastError ? '<br>上次失敗原因：' + wlEsc(groupsLastError) : '') + '</div></div>';
  }
  return '<div class="signal-empty"><div class="se-title">族群行情載入中…</div>' +
    '<div class="se-sub">刀劍空、盤中333 要用首頁的族群報價來算；開盤前後證交所比較慢，通常 10～20 秒內就會出現。</div></div>';
}
function race333Html(){
  const m = race333Model();
  if (!m) return raceNotReadyHtml();
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const over7 = m.horses.filter((r) => r.pct > 7).length;
  const dailyNote = m.hasDaily
    ? '昨天＝' + (m.dates[0] || '') + (m.dates[1] ? '，前天＝' + m.dates[1] : '')
    : '還沒拿到族群昨天的資料，33／34 先不用「族群昨天要跌最多／漲最多的前 1/3」這條';
  // 2026-09-26 使用者：個股名單預設照盤中大戶力排，值大的在上面、小的在下面（沒有大戶力資料的排最後），不再照漲幅；
  // 名單的挑法（漲幅前 N 檔等）不變，只改顯示順序。
  const triple = race333SortByHolder(race333FilterList(m.triple));
  const both = race333SortByHolder(race333FilterList(m.both));
  const fires = race333SortByHolder(race333FilterList(m.fires));
  const fireLocked = race333FilterList(m.fireLocked);
  const horses = race333SortByHolder(race333FilterList(m.horses));
  const rivers = race333SortByHolder(race333FilterList(m.rivers));
  const condsNote = '每列下面多一行列出門檻比例（族排、族內、距櫃買%、昨／前天%），之前只寫在這行說明文字裡的數字。';
  return race333FilterBarHtml() + raceOtcBoxHtml(m) +
    // 2026-09-28 使用者：符合條件>7%放最上面，抬頭改「續抱勿追高」（不是「漲幅最高」）；裡面把 33／34 的門檻比例列出來。
    '<div class="race-block"><div class="race-head">🚀續抱勿追高・賽馬多(33)>7%有 ' + over7 + ' 檔 ' + stamp + '</div>' +
      '<div class="race-sub">「續抱勿追高」＝賽馬多裡漲超過 7% 的（不是可進場名單，已經漲多了）・' + condsNote + '・' + dailyNote + '</div>' +
      (over7 ? raceStockListHtml(m.horses.filter((r) => r.pct > 7), { dates: m.dates, conditions: true, m, both3334: true }) + '<div class="race-sep">------↑(續抱勿追高)↑------</div>' : '<div class="race-note">賽馬多裡沒有漲超過 7% 的</div>') + '</div>' +
    '<div class="race-block"><div class="race-head">👑🐎🚀馬火多加賽馬多加河流多（30 加 33 加 34） ' + stamp + '</div>' +
      '<div class="race-sub">三邊都有的才列：同時符合 33 加 34 的族群條件（族群前 ' + m.horseLimit + '、漲 0～7%）和馬火多的個股門檻（漲 ' + FIRE_MIN_PCT + '% 以上、成交量 ≥ ' + FIRE_MIN_VOLUME + ' 張、沒漲停、🐎🚀）・大戶力高的在上（沒有大戶力資料的排最後）・' + condsNote + '</div>' +
      raceStockListHtml(triple, { fire: true, dates: m.dates, conditions: true, m, both3334: true }) + '</div>' +
    '<div class="race-block"><div class="race-head">👑🌊賽馬多加河流多（33 加 34） ' + stamp + '</div>' +
      '<div class="race-sub">賽馬多、河流多兩邊都有的才列：族群排名前 ' + m.horseLimit + '（共 ' + m.total + ' 個）・族內前 1/3・漲幅 0～7% 且 ≥ 櫃買%・大戶力高的在上（沒有大戶力資料的排最後）・' + condsNote + '</div>' +
      raceStockListHtml(both, { dates: m.dates, conditions: true, m, both3334: true }) + '</div>' +
    // 2026-09-28 使用者：33／34 各自單獨也要列出來（之前只有跟別的條件合在一起才看得到）。
    '<div class="race-block"><div class="race-head">🐎賽馬多(33) ' + stamp + '</div>' +
      '<div class="race-sub">族群排名前 ' + m.horseLimit + '（共 ' + m.total + ' 個）・族內前 1/3・現價 ≥ 櫃買%・大戶力高的在上（沒有大戶力資料的排最後）・不限漲幅（超過 7% 的另外放最上面「續抱勿追高」，這裡兩邊都列）・' + condsNote + '</div>' +
      raceStockListHtml(horses, { dates: m.dates, conditions: true, m, limit: m.horseLimit, limitLabel: '33' }) + '</div>' +
    '<div class="race-block"><div class="race-head">🌊河流多(34) ' + stamp + '</div>' +
      '<div class="race-sub">族群排名前 ' + m.riverLimit + '（共 ' + m.total + ' 個、比 33 的門檻寬）・族內前 1/3・漲幅 0～7% 且 ≥ 櫃買%・大戶力高的在上（沒有大戶力資料的排最後）・' + condsNote + '</div>' +
      raceStockListHtml(rivers, { dates: m.dates, conditions: true, m, limit: m.riverLimit, limitLabel: '34' }) +
      (m.riverOver.length ? '<div class="race-note">漲超過 7% 的另外 ' + m.riverOver.length + ' 檔（不一定符合 33 的門檻，沒算進「續抱勿追高」）：' + m.riverOver.map((r) => r.code + ' ' + r.name + ' ' + fmt(r.pct) + '%').join('、') + '</div>' : '') +
      '</div>' +
    '<div class="race-block"><div class="race-head">🐎🚀馬火多(30) ' + stamp + '</div>' +
      '<div class="race-sub">今天漲 ' + FIRE_MIN_PCT + '%～' + FIRE_MAX_PCT + '%（且 ≥ 櫃買%）・不含漲停鎖死・族群排名前 ' + m.fireGroupTop + '・族內前 1/3・成交量 ≥ ' + FIRE_MIN_VOLUME + ' 張・🐎 現價高於昨收、🚀 現價高於前天收盤（數字＝高出前天收盤幾 %）・👑 該族群第 1 名・最多 ' + FIRE_MAX_ROWS + ' 檔（取漲幅前 ' + FIRE_MAX_ROWS + ' 檔），大戶力高的在上・' + dailyNote + '・' + condsNote + '・滑鼠移到符號上看三天的數字</div>' +
      raceStockListHtml(fires, { fire: true, dates: m.dates, conditions: true, m, limit: m.fireGroupTop, limitLabel: '30' }) +
      (fireLocked.length ? '<div class="race-note">漲停／接近漲停買不到，另列 ' + fireLocked.length + ' 檔：' + fireLocked.map((r) => r.code + ' ' + r.name + ' ' + fmt(r.pct) + '%').join('、') + '</div>' : '') +
      '</div>';
}
// 2026-09-30 使用者：「刀劍空(32)」拿出來另外做一個獨立的盤中訊號分頁，不要再放在盤中333裡面混在一起；
// 選股邏輯完全不變，還是共用 race333Model() 算出來的 bladeUpper/bladeLower/bladeHarvest，只是單獨一個分頁呈現。
function bladeShortHtml(){
  const m = race333Model();
  if (!m) return raceNotReadyHtml();
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dailyNote = m.hasDaily
    ? '昨天＝' + (m.dates[0] || '') + (m.dates[1] ? '，前天＝' + m.dates[1] : '')
    : '還沒拿到族群昨天的資料';
  const condsNote = '每列下面多一行列出門檻比例（族排、族內、距櫃買%、昨／前天%）。';
  return race333FilterBarHtml() + raceOtcBoxHtml(m) +
    '<div class="race-block"><div class="race-head">🔪⚔️刀劍空(32) ' + stamp + '</div>' +
      '<div class="race-sub">今天跌 ' + BLADE_MIN_PCT + '%～' + BLADE_MAX_PCT + '%（且 ≤ 櫃買%）・不含跌停鎖死・族群排名後半（強空積極）・族內後 1/3・成交量 ≥ ' + BLADE_MIN_VOLUME + ' 張・要有 ⚔️ 劍（現價低於前天收盤，數字＝低幾 %；🔪 刀＝低於昨收）・最多 ' + BLADE_MAX_ROWS + ' 檔（取跌幅前 ' + BLADE_MAX_ROWS + ' 檔），大戶力最負的在上・前面數字＝族群排名・多方打少（族群排名前半）和收割區只列名字・' + dailyNote + '・' + condsNote + '・滑鼠移到符號上看三天的數字・點列或按「圖」開K線圖</div>' +
      raceBladeListHtml(m) + '</div>';
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
  if (!f) return '';
  if (!f.disposition) return attentionPillHtml(r.code);
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
  // 2026-09-24 使用者拿掉處置股預測：這格只剩官方資料——處置中（官方處置股名單）或注意股（交易所公布的注意股）。
  const f = stockFlags[code];
  if (f && f.disposition){
    const until = f.dispositionUntil ? ' 至' + String(f.dispositionUntil).slice(5).replace('-', '/') : '';
    return '<span class="pill-warn" title="' + (f.dispositionReason || '') + '">處置中' + until + '</span>';
  }
  return attentionPillHtml(code);
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
  // 處置／注意（官方名單）只有今天的：看昨天／前天時不併入，只列大戶力夠格（|大戶力| >= 10%）的股票。
  const dispByCode = new Set();
  if (!isPast) Object.keys(stockFlags).forEach((code) => { if (stockFlags[code] && (stockFlags[code].disposition || stockFlags[code].attention)) dispByCode.add(code); });

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
    '<td class="combo-name">' + backendName + wlStarHtml(r.code, backendName) + '</td>' +
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
    try { checkLaunchNotifications(); } catch (e) { /* 通知失敗不影響畫面 */ }
    try { renderWatchTable(); } catch (e) { /* 自選股重畫失敗不影響畫面 */ }
    if (!document.getElementById('signalModal').hidden) renderSignalCenter();
    if (!document.getElementById('chipsModal').hidden) renderChips();  // 放空籌碼的均線資料
  } catch (e) {
    brewLaunchFetchedAt = Date.now() - 540000;  // 抓不到就一分鐘後再試，先沿用上一次的資料
  }
}
function twTodayStr(){ return new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10); }
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
function brewLiveMetrics(info, s, rules){
  const price = Number(s.price);
  if (!Number.isFinite(price) || price <= 0) return null;
  const score = maScoreFromSums(info, price, rules);
  // 2026-10-04 使用者：周轉率／量比直接用盤中實際累積量，不再依已過時間換算成全天預估量（後端掃描同步關掉）；
  // projTurnoverPct 這個欄位名沿用後端永久紀錄的 key，內容已是實際累積周轉率。
  const vol = Number(s.volume) || 0;
  const shares = Number(info.sharesLots) > 0 ? Number(info.sharesLots) : null;
  const projTurnoverPct = shares ? vol / shares * 100 : null;
  const volRatio = Number(info.avgVol5) > 0 ? vol / Number(info.avgVol5) : null;
  const brokeOut = price > info.boxHigh;
  const scoreOk = score >= rules.launchMinScore;
  const volumeOk = (projTurnoverPct !== null && projTurnoverPct >= rules.turnoverMinPct) || (volRatio !== null && volRatio >= rules.volumeRatioMin);
  return { price, score, projTurnoverPct, volRatio, brokeOut, scoreOk, volumeOk,
    launch: brokeOut && scoreOk && volumeOk, toBoxPct: (info.boxHigh / price - 1) * 100 };
}
function brewLaunchModel(){
  if (!brewLaunchData || !lastData || lastData.mock || !Array.isArray(lastData.groups)) return null;
  const rules = brewLaunchData.rules;
  // 使用者 2026-09-24：金融股不列入醞釀／發動（醞釀一次 14 檔金融股太多）；後端把這些股票標 skipped、族群名放在 rules.skipGroups
  const skipGroups = new Set(rules.skipGroups || []);
  const groups = lastData.groups.filter((g) => g.name !== '股期標的' && !skipGroups.has(g.name));
  if (!groups.length) return null;
  // 族排：今天平均漲跌幅在全部族群裡的名次（第 1 名最強），跟族群綜合表同一套；族群也照這個順序排。
  const weakToStrong = groups.slice().sort((a, b) => a.avgChange - b.avgChange);
  const rankOf = new Map(weakToStrong.map((g, i) => [g.name, weakToStrong.length - i]));
  // 2026-09-29 使用者：正在發動中的也要看得到「第一次發動是幾點」，不是只有回落之後才看得到；
  // 第一次發動的時間要永久保留、不能被蓋掉——同一檔今天可以分好幾次發動（發動→回落→再發動），
  // 後端每次都另外存一筆（不覆蓋），這裡按時間排序後只取每檔股票「最早」那筆當作顯示的時間；
  // 剛觸發、後端這次掃描還沒記到的（brewHistoryData 還沒更新）先當作「盤中」。
  // 2026-09-29 使用者：光看第一次時間看不出來它今天有沒有重新發動過，另外算一份「今天總共發動幾次」給時間欄標記用。
  // 2026-09-30 使用者：滑鼠移到「×N次」旁邊要看得到每一次發動分別是幾點，所以把每一筆的時間都留著，不是只留次數。
  const launchRecordByCode = new Map(), launchTimesByCode = new Map();
  (brewHistoryDay(brewSessionDate()).launch || []).forEach((r) => {
    if (!launchRecordByCode.has(r.code)) launchRecordByCode.set(r.code, r);
    if (!launchTimesByCode.has(r.code)) launchTimesByCode.set(r.code, []);
    launchTimesByCode.get(r.code).push(r.recordedAt);
  });
  // 2026-09-30 使用者：發動列表要看得到融資融券／現股當沖／股期這些交易資訊；跟盤中大戶力排行
  // 共用同一份 mainForceRanking（後端 get_trading_eligibility 查到的），不用另外打 API。
  const eligByCode = new Map((mainForceRanking || []).map((r) => [r.code, r]));
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
      if (!info || info.skipped) return;
      const live = brewLiveMetrics(info, s, rules);
      if (!live) return;
      const elig = eligByCode.get(s.code);
      // 2026-10-03 使用者：醞釀/發動表格的漲跌幅欄前面要加一欄「盤中大戶力」，跟所有族群綜合表
      // 那張表2026-09-24已經做過的一樣（combo-holder + raceHolderCellHtml，直接共用同一份大戶力排行）。
      const row = Object.assign({ code: s.code, name: s.name, groupName: g.name, pct: s.changePercent, limitUp: !!s.limitUp, limitDown: !!s.limitDown, info,
        marginable: elig ? elig.marginable : null, shortable: elig ? elig.shortable : null,
        dayTradeEligible: elig ? elig.dayTradeEligible : null, hasStockFutures: elig ? elig.hasStockFutures : null,
        strengthPct: elig ? elig.strengthPct : null, netAmount: elig ? elig.netAmount : null, holderLabel: elig ? elig.holderLabel : null }, live);
      if (live.launch){
        const rec = launchRecordByCode.get(s.code);
        row.recordedAt = rec ? rec.recordedAt : null; row.live = !rec;
        const times = (launchTimesByCode.get(s.code) || []).slice().sort();  // ISO字串字典排序就是時間排序
        row.launchCount = times.length;
        row.launchTimes = times;
        launchRows.push(row); launchCodes.add(s.code);
      }
      else if (info.brewing){ brewRows.push(row); brewCodes.add(s.code); }
    });
    if (launchRows.length) launchBlocks.push(blockOf(g, launchRows, byLaunch));
    if (brewRows.length) brewBlocks.push(blockOf(g, brewRows, byBrew));
  });
  return { launchBlocks, brewBlocks, launchCount: launchCodes.size, brewCount: brewCodes.size, rules };
}
function brewLaunchRowHtml(r, kind){
  const cls = dirClass(r.pct);
  const star = r.topScore ? '<span class="bl-star" title="族群裡均線分數最高">★</span>' : '';
  let tag = '';
  if (kind === 'launch' && r.info.brewing) tag = '<span class="bl-tag">醞釀→發動</span>';
  if (kind === 'brew' && r.brokeOut) tag = '<span class="bl-tag warn">' + (r.scoreOk ? '過箱頂・量能未到' : '過箱頂・分數未到') + '</span>';
  const toBox = r.toBoxPct <= 0 ? '已過 ' + (-r.toBoxPct).toFixed(2) + '%' : '差 ' + r.toBoxPct.toFixed(2) + '%';
  // 2026-09-29 使用者：發動要能查到第一次是幾點發動的（後端永久記錄，不會因為回落就找不到）。
  const timeCell = kind === 'launch' ? '<td class="bl-time" title="第一次符合發動條件的時間（後端永久記錄）；剛觸發、下次掃描才會定案的先用現在時間顯示，定案後會換成正式時間">' + brewWhen(r) + '</td>' : '';
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' +
    timeCell +
    '<td class="combo-code">' + r.code + '</td>' +
    '<td class="combo-name">' + r.name + wlStarHtml(r.code, r.name) + '</td>' +
    '<td class="bl-score" title="5/10/20/60/120/240 日線兩兩比較 15 組，短天期在上面得 1 分（用現價當今天收盤）">' + r.score + star + '</td>' +
    '<td class="combo-holder">' + raceHolderCellHtml(r) + '</td>' +
    '<td class="combo-pct ' + cls + '">' + limitPriceHtml(r, fmt(r.pct) + '%') + '</td>' +
    '<td class="combo-price ' + cls + '">' + limitPriceHtml(r, r.price.toFixed(2)) + '</td>' +
    '<td class="bl-box" title="箱底 ' + r.info.boxLow.toFixed(2) + '，箱子高低差 ' + r.info.boxRangePct + '%">' + r.info.boxHigh.toFixed(2) + '</td>' +
    '<td class="bl-tobox' + (r.toBoxPct <= 0 ? ' up' : '') + '">' + toBox + tag + '</td>' +
    '</tr>';
}
function brewLaunchFlatRowHtml(r){
  const cls = dirClass(r.pct);
  const star = r.topScore ? '<span class="bl-star" title="族群裡均線分數最高">★</span>' : '';
  const tag = r.info.brewing ? '<span class="bl-tag">醞釀→發動</span>' : '';
  const toBox = r.toBoxPct <= 0 ? '已過 ' + (-r.toBoxPct).toFixed(2) + '%' : '差 ' + r.toBoxPct.toFixed(2) + '%';
  // 2026-09-29 使用者：只看第一次時間看不出來它今天有沒有重新發動過，時間旁邊加個「×N」標記。
  // 2026-09-30 使用者：滑鼠移到「×N次」旁邊要看得到每一次發動分別是幾點。
  const relaunchTimes = (r.launchTimes || []).map(fmtTime).filter(Boolean).join('、');
  const relaunchBadge = r.launchCount > 1 ? ' <span class="bl-relaunch" title="今天發動過 ' + r.launchCount + ' 次（含回落又重新發動）：' + relaunchTimes + '">×' + r.launchCount + '</span>' : '';
  // 2026-09-30 使用者：要看得到融資融券／現股當沖／股期這些交易資訊。原本放名稱欄裡讓那一列自己變高，
  // 使用者回報在手機上會跟旁邊的族群欄文字重疊糊在一起——改成獨立一整列（橫跨全部欄位，接在該股票
  // 那一列下面），不會動到任何欄位本身的寬度／溢出設定，不會再疊到別的欄位。沒有資料就不多這一列。
  const eligTags = tradingEligibilityTagsHtml(r);
  const eligRow = eligTags ? '<tr class="bl-elig-row" data-code="' + r.code + '" data-name="' + r.name + '"><td colspan="10">' + eligTags + '</td></tr>' : '';
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' +
    '<td class="bl-time" title="第一次符合發動條件的時間（後端永久記錄）；剛觸發、下次掃描才會定案的先用現在時間顯示，定案後會換成正式時間">' + brewWhen(r) + relaunchBadge + '</td>' +
    '<td class="combo-code">' + r.code + '</td>' +
    '<td class="combo-name">' + r.name + wlStarHtml(r.code, r.name) + '</td>' +
    '<td><span class="sig-group">' + r.groupNames.join('、') + '</span></td>' +
    '<td class="bl-score" title="5/10/20/60/120/240 日線兩兩比較 15 組，短天期在上面得 1 分（用現價當今天收盤）">' + r.score + star + '</td>' +
    '<td class="combo-holder">' + raceHolderCellHtml(r) + '</td>' +
    '<td class="combo-pct ' + cls + '">' + limitPriceHtml(r, fmt(r.pct) + '%') + '</td>' +
    '<td class="combo-price ' + cls + '">' + limitPriceHtml(r, r.price.toFixed(2)) + '</td>' +
    '<td class="bl-box" title="箱底 ' + r.info.boxLow.toFixed(2) + '，箱子高低差 ' + r.info.boxRangePct + '%">' + r.info.boxHigh.toFixed(2) + '</td>' +
    '<td class="bl-tobox' + (r.toBoxPct <= 0 ? ' up' : '') + '">' + toBox + tag + '</td>' +
    '</tr>' + eligRow;
}
function brewLaunchFlatTableHtml(rows){
  // 2026-09-29 使用者：同一檔股票同時屬於好幾個官方族群時，攤平後會重複出現好幾列（內容一模一樣）；
  // 改成同一檔股票只顯示一列，族群欄把它屬於的族群全部列出來。
  const byCode = new Map();
  rows.forEach((r) => {
    const existing = byCode.get(r.code);
    if (existing){ existing.groupNames.push(r.groupName); return; }
    byCode.set(r.code, Object.assign({}, r, { groupNames: [r.groupName] }));
  });
  // 2026-09-29 使用者：發動列表不要照族群排，照發動時間排，最新發動的排最上面，比較久的排下面。
  const sorted = [...byCode.values()].sort((a, b) => String(b.recordedAt).localeCompare(String(a.recordedAt)));
  return '<div class="race-block bl-block"><div class="combo-table-wrap"><table class="combo-table bl-table">' +
    '<colgroup><col class="b-time"><col class="b-code"><col class="b-name"><col class="b-group"><col class="b-score"><col class="b-holder"><col class="b-pct"><col class="b-price"><col class="b-box"><col class="b-tobox"></colgroup>' +
    '<thead><tr><th>發動時間</th><th>代號</th><th>名稱</th><th>族群</th><th>均線分數</th><th>盤中大戶力</th><th>漲跌幅</th><th>成交價</th><th>箱頂(突破價)</th><th>距箱頂</th></tr></thead>' +
    '<tbody>' + sorted.map(brewLaunchFlatRowHtml).join('') + '</tbody></table></div></div>';
}
function brewLaunchBlockHtml(block, kind){
  const namePill = '<span class="head-pill">' + block.name + '（' + block.groupTotal + ' 檔）</span>';
  const avgPill = '<span class="head-pill">今天平均 ' + fmt(block.avgChange) + '%</span>';
  const timeCol = kind === 'launch' ? '<col class="b-time">' : '';
  const timeHead = kind === 'launch' ? '<th>發動時間</th>' : '';
  return '<div class="race-block bl-block"><div class="race-head combo-head ' + dirClass(block.avgChange) + '"><span class="combo-rank">族排第 ' + block.rank + ' 名</span> ' + namePill + ' ' + avgPill + '・' + (kind === 'launch' ? '發動 ' : '醞釀 ') + block.rows.length + ' 檔</div>' +
    '<div class="combo-table-wrap"><table class="combo-table bl-table">' +
    '<colgroup>' + timeCol + '<col class="b-code"><col class="b-name"><col class="b-score"><col class="b-holder"><col class="b-pct"><col class="b-price"><col class="b-box"><col class="b-tobox"></colgroup>' +
    '<thead><tr>' + timeHead + '<th>代號</th><th>名稱</th><th>均線分數</th><th>盤中大戶力</th><th>漲跌幅</th><th>成交價</th><th>箱頂(突破價)</th><th>距箱頂</th></tr></thead>' +
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
// ---- 醞釀／發動每日保存（2026-09-25 使用者：訊號要永久保存，不能明天就不見）----
// 後端每個交易日存醞釀名單快照、盤中第一次發動的紀錄；這裡讓分頁可以切「昨天／前天」看那天的名單，
// 今天的發動也把「盤中曾經發動、現在回落」的一起列出來（後端紀錄）。
let brewDayOffset = 0;
let brewHistoryData = null;
let brewHistoryFetchedAt = 0;
async function refreshBrewHistory(force){
  if (!force && Date.now() - brewHistoryFetchedAt < 60000) return;
  brewHistoryFetchedAt = Date.now();
  try {
    const res = await fetch('/api/brew-launch-history?days=10');
    if (!res.ok) throw new Error('brew-launch-history http ' + res.status);
    const data = await res.json();
    if (!data || data.status !== 'ok' || !data.days) throw new Error('bad payload');
    brewHistoryData = data;
    if (!document.getElementById('signalModal').hidden && signalCenterState.activeTab === 'brewLaunch') renderSignalCenter();
  } catch (e) {
    brewHistoryFetchedAt = Date.now() - 45000;  // 抓不到 15 秒後再試
  }
}
function brewSessionDate(){ return brewLaunchData ? brewLaunchData.session : null; }
function brewPastDates(){
  const session = brewSessionDate();
  const dates = brewHistoryData && Array.isArray(brewHistoryData.dates) ? brewHistoryData.dates : [];
  return dates.filter((d) => !session || d < session);
}
function brewViewDate(){
  if (typeof brewDayOffset === 'string') return null;  // 'x01'／'x12'＝兩天交集，不是單一天
  return brewDayOffset === 0 ? brewSessionDate() : (brewPastDates()[brewDayOffset - 1] || null);
}
// 週末、國定假日（2026-09-25 中秋節，使用者：「今天沒有交易啊」）後端的交易日停在最後一個交易日：
// 「今天」那顆按鈕改寫成「最近交易日 mm/dd」，才不會以為是今天的行情。
function brewTodayName(){ const s = brewSessionDate(); return s && s !== twTodayStr() ? '最近交易日' : '今天'; }
function brewTodayLabel(){ const s = brewSessionDate(); return s && s !== twTodayStr() ? '最近交易日 ' + String(s).slice(5).replace('-', '/') : '今天'; }
function brewDayBarHtml(){
  const past = brewPastDates();
  const mmdd = (d) => (d ? String(d).slice(5).replace('-', '/') : '');
  const btn = (offset, label, date) => '<button class="chart-tab bl-day-btn' + (brewDayOffset === offset ? ' active' : '') + '" data-offset="' + offset + '"' + (date || offset === 0 ? '' : ' disabled') + '>' + label + '</button>';
  return '<div class="combo-filter-bar bl-day-bar">' +
    btn(0, brewTodayLabel(), brewSessionDate()) +
    btn(1, '昨天' + (past[0] ? ' ' + mmdd(past[0]) : ''), past[0]) +
    btn(2, '前天' + (past[1] ? ' ' + mmdd(past[1]) : ''), past[1]) +
    btn('x01', brewTodayName() + '∩昨天', past[0]) +
    btn('x12', '昨天∩前天', past[1]) +
    '</div>';
}
function brewHistoryDay(date){
  const days = brewHistoryData && brewHistoryData.days ? brewHistoryData.days : {};
  return (date && days[date]) || { brew: [], launch: [] };
}
// 2026-10-05 使用者：兩台電腦「今天曾發動」一台 2 檔、一台 35 檔。後端同一檔每次「回落→再發動」都另存一筆
// （鼎元今天 10 筆、9/30 聯合再生 56 筆），列表一筆一列就變成同一檔重複出現、檔數灌水（35 筆其實 13 檔）。
// 一檔只列一次：時間＝第一次發動，旁邊標 ×N（滑鼠移上去看每一次的時間），跟上面正在發動的列表一樣。
function brewLaunchByStock(rows){
  const byCode = new Map();
  (rows || []).slice().sort((a, b) => String(a.recordedAt).localeCompare(String(b.recordedAt))).forEach((r) => {
    const cur = byCode.get(r.code);
    if (cur){ cur.launchTimes.push(r.recordedAt); cur.launchCount += 1; return; }
    byCode.set(r.code, Object.assign({}, r, { launchTimes: [r.recordedAt], launchCount: 1 }));
  });
  return [...byCode.values()];
}
// 這台電腦現在有報價（價格 > 0）的代號；證交所那段沒抓到、停牌的就沒有
function brewQuotedCodes(){
  const out = new Set();
  ((lastData && lastData.groups) || []).forEach((g) => (g.stocks || []).forEach((st) => { if (Number(st.price) > 0) out.add(st.code); }));
  return out;
}
const fmtTime = (iso) => { const m = /T(\\d{2}):(\\d{2})/.exec(String(iso || '')); return m ? m[1] + ':' + m[2] : ''; };
const num2 = (v) => (Number.isFinite(Number(v)) && v !== null ? Number(v).toFixed(2) : '—');
// 2026-09-30 使用者：「盤中」看不懂，要直接秀時間——剛觸發、後端還沒記到的先用現在的時間顯示，
// 後端這次掃描記到之後（brewHistoryData 更新）會自動換成正式時間，畫面上一律是時間、不會出現文字。
const brewWhen = (r) => (r.live ? new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }) : r.eod ? '<span class="bl-eod" title="那天沒有盤中紀錄，用收盤價回推">收盤</span>' : fmtTime(r.recordedAt));
// 交集表多一欄「前一天」：發動＝前一天的發動時間、發動價、漲幅；醞釀＝前一天的均線分數、收盤
function brewPrevCellHtml(kind, prev){
  if (!prev) return '<td class="bl-prev">—</td>';
  if (kind === 'launch') return '<td class="bl-prev">' + brewWhen(prev) + ' ' + num2(prev.price) + ' <span class="' + dirClass(prev.changePct) + '">' + (prev.changePct === null || prev.changePct === undefined ? '—' : fmt(prev.changePct) + '%') + '</span></td>';
  return '<td class="bl-prev">分' + prev.score + '・收' + num2(prev.prevClose) + '</td>';
}
function brewPastLaunchRowHtml(r, opts){
  const cls = dirClass(r.changePct);
  const relaunchTimes = (r.launchTimes || []).map(fmtTime).filter(Boolean).join('、');
  const relaunchBadge = r.launchCount > 1 ? ' <span class="bl-relaunch" title="這天發動過 ' + r.launchCount + ' 次（含回落又重新發動）：' + relaunchTimes + '">×' + r.launchCount + '</span>' : '';
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' +
    '<td class="combo-code">' + brewWhen(r) + relaunchBadge + '</td>' +
    '<td class="combo-code">' + r.code + '</td><td class="combo-name">' + r.name + wlStarHtml(r.code, r.name) + '</td>' +
    '<td><span class="sig-group">' + (r.group || '—') + '</span></td>' +
    (opts && opts.prev ? brewPrevCellHtml('launch', opts.prev.get(r.code)) : '') +
    '<td class="bl-score">' + r.score + '</td>' +
    '<td class="combo-holder">' + raceHolderCellHtml(r) + '</td>' +
    '<td class="combo-pct ' + cls + '">' + (r.changePct === null || r.changePct === undefined ? '—' : limitPriceHtml(r, fmt(r.changePct) + '%')) + '</td>' +
    '<td class="combo-price ' + cls + '">' + limitPriceHtml(r, num2(r.price)) + '</td>' +
    '<td class="bl-box">' + num2(r.boxHigh) + (r.brewing ? ' <span class="bl-tag">醞釀→發動</span>' : '') + '</td>' +
    '</tr>';
}
function brewPastBrewRowHtml(r, opts){
  return '<tr class="combo-row" data-code="' + r.code + '" data-name="' + r.name + '" tabindex="0" role="button">' +
    '<td class="combo-code">' + r.code + '</td><td class="combo-name">' + r.name + wlStarHtml(r.code, r.name) + '</td>' +
    '<td><span class="sig-group">' + (r.group || '—') + '</span></td>' +
    (opts && opts.prev ? brewPrevCellHtml('brew', opts.prev.get(r.code)) : '') +
    '<td class="bl-score">' + r.score + '</td>' +
    '<td class="combo-price">' + num2(r.prevClose) + '</td>' +
    '<td class="bl-box">' + num2(r.boxHigh) + '</td>' +
    '<td class="bl-turn">' + (r.boxRangePct === null || r.boxRangePct === undefined ? '—' : Number(r.boxRangePct).toFixed(2) + '%') + '</td>' +
    '<td class="bl-ratio">' + (r.maSpreadPct === null || r.maSpreadPct === undefined ? '—' : Number(r.maSpreadPct).toFixed(2) + '%') + '</td>' +
    '</tr>';
}
function brewPastTableHtml(kind, rows, opts){
  // 2026-09-29 使用者：發動要照時間排，最新發生的排最上面，比較久的排下面。
  const sorted = rows.slice().sort((a, b) => kind === 'launch'
    ? String(b.recordedAt).localeCompare(String(a.recordedAt)) || b.score - a.score
    : String(a.group).localeCompare(String(b.group), 'zh-Hant') || b.score - a.score);
  const prevHead = opts && opts.prevLabel ? '<th>' + opts.prevLabel + '</th>' : '';
  const prevCol = opts && opts.prevLabel ? '<col class="b-prev">' : '';
  const head = kind === 'launch'
    ? '<th>發動時間</th><th>代號</th><th>名稱</th><th>族群</th>' + prevHead + '<th>均線分數</th><th>盤中大戶力</th><th>漲跌幅</th><th>發動價</th><th>箱頂</th>'
    : '<th>代號</th><th>名稱</th><th>族群</th>' + prevHead + '<th>均線分數</th><th>收盤</th><th>箱頂(突破價)</th><th>箱子高低差</th><th>均線糾結</th>';
  const colgroup = kind === 'launch'
    ? '<colgroup><col class="b-time"><col class="b-code"><col class="b-name"><col class="b-group">' + prevCol + '<col class="b-score"><col class="b-holder"><col class="b-pct"><col class="b-price"><col class="b-box"></colgroup>'
    : '';
  return '<div class="race-block bl-block"><div class="combo-table-wrap"><table class="combo-table bl-table bl-past-table">' + colgroup + '<thead><tr>' + head + '</tr></thead><tbody>' +
    sorted.map((r) => (kind === 'launch' ? brewPastLaunchRowHtml(r, opts) : brewPastBrewRowHtml(r, opts))).join('') + '</tbody></table></div></div>';
}
// 今天的名單轉成跟往日紀錄一樣的欄位：發動＝後端今天記到的 ∪ 盤中現在正在發動的；醞釀＝今天的醞釀名單
function brewTodayRows(){
  const m = brewLaunchModel();
  const recorded = brewHistoryDay(brewSessionDate());
  // 發動同一檔今天可能有好幾筆（分好幾次發動），只取最早（第一次）那筆；recorded.launch 已經照時間由舊到新排好。
  const launch = new Map();
  brewLaunchByStock(recorded.launch).forEach((r) => launch.set(r.code, r));
  const brew = new Map(recorded.brew.map((r) => [r.code, r]));
  if (m){
    m.launchBlocks.forEach((b) => b.rows.forEach((r) => {
      if (!launch.has(r.code)) launch.set(r.code, { code: r.code, name: r.name, group: r.groupName, recordedAt: null, live: true, price: r.price, score: r.score, changePct: r.pct, boxHigh: r.info.boxHigh, projTurnoverPct: r.projTurnoverPct, volRatio: r.volRatio, brewing: !!r.info.brewing });
    }));
    m.brewBlocks.forEach((b) => b.rows.forEach((r) => {
      if (!brew.has(r.code)) brew.set(r.code, { code: r.code, name: r.name, group: r.groupName, recordedAt: null, price: r.info.prevClose, score: r.info.score, prevClose: r.info.prevClose, boxHigh: r.info.boxHigh, boxLow: r.info.boxLow, boxRangePct: r.info.boxRangePct, maSpreadPct: r.info.maSpreadPct });
    }));
  }
  return { launch: [...launch.values()], brew: [...brew.values()] };
}
// 使用者 2026-09-25：多「昨天∩前天」（跟「今天∩昨天」）——連續兩天都出現的股票，發動、醞釀各一段，表格多一欄前一天的數字
function brewOverlapHtml(mode){
  const past = brewPastDates();
  const mmdd = (d) => String(d).slice(5).replace('-', '/');
  const later = mode === 'x01'
    ? { name: brewTodayName(), label: brewTodayLabel(), date: brewSessionDate(), rows: brewTodayRows() }
    : { name: '昨天', label: '昨天 ' + mmdd(past[0]), date: past[0], rows: brewHistoryDay(past[0]) };
  const earlier = mode === 'x01'
    ? { name: '昨天', label: '昨天 ' + mmdd(past[0]), date: past[0], rows: brewHistoryDay(past[0]) }
    : { name: '前天', label: '前天 ' + mmdd(past[1]), date: past[1], rows: brewHistoryDay(past[1]) };
  if (!later.date || !earlier.date) return '<div class="signal-empty"><div class="se-title">還沒有可以比對的兩天紀錄</div></div>';
  const byStock = (kind, rows) => (kind === 'launch' ? brewLaunchByStock(rows[kind]) : rows[kind]);
  const pick = (kind) => {
    const prev = new Map(byStock(kind, earlier.rows).map((r) => [r.code, r]));
    return { rows: byStock(kind, later.rows).filter((r) => prev.has(r.code)), prev };
  };
  const launch = pick('launch'), brew = pick('brew');
  const laterName = later.name, earlierName = earlier.name;
  return '<div class="race-sub">' + later.label + ' ∩ ' + earlier.label + '：兩天都出現的股票。表格數字是' + laterName + '的，「' + earlier.label + '」那欄是前一天的（發動：時間、發動價、漲幅；醞釀：均線分數、收盤）。' +
    '發動＝兩天都符合發動、醞釀＝兩天都在醞釀名單。</div>' +
    '<div class="bl-section bl-launch">發動（突破）' + laterName + '、' + earlierName + '都有・' + launch.rows.length + ' 檔</div>' +
    (launch.rows.length ? brewPastTableHtml('launch', launch.rows, { prevLabel: earlier.label, prev: launch.prev }) : '<div class="race-note">沒有兩天都發動的股票</div>') +
    '<div class="bl-section bl-brew">醞釀（整理）' + laterName + '、' + earlierName + '都有・' + brew.rows.length + ' 檔</div>' +
    (brew.rows.length ? brewPastTableHtml('brew', brew.rows, { prevLabel: earlier.label, prev: brew.prev }) : '<div class="race-note">沒有兩天都醞釀的股票</div>');
}
function brewPastDayHtml(){
  const date = brewViewDate();
  if (!date) return '<div class="signal-empty"><div class="se-title">還沒有那一天的紀錄</div><div class="se-sub">後端每個交易日都會留下醞釀名單與發動紀錄，上線前幾天的用日K回推；資料還沒進來時稍後再看。</div></div>';
  const day = brewHistoryDay(date);
  const launchRows = brewLaunchByStock(day.launch);
  const mmdd = String(date).slice(5).replace('-', '/');
  const eod = day.launch.some((r) => r.eod);
  return '<div class="race-sub">' + mmdd + ' 的紀錄（後端每日保存）：發動＝那天盤中第一次符合發動條件的時間與價格（一檔一列，×N＝那天回落又重新發動、總共發動 N 次）；醞釀＝那天盤前算出來的醞釀名單。' +
    (eod ? '發動時間寫「收盤」的＝那天沒有盤中紀錄（保存功能上線前，或那天程式沒在跑），用收盤價回推：收盤過箱頂、收盤均線分數>10、全天周轉率≥5% 或量≥5 日均量 1.5 倍；盤中曾發動又回落的補不回來。' : '') + '</div>' +
    '<div class="bl-section bl-launch">發動（突破）・' + launchRows.length + ' 檔</div>' +
    (launchRows.length ? brewPastTableHtml('launch', launchRows) : '<div class="race-note">那天沒有股票發動</div>') +
    '<div class="bl-section bl-brew">醞釀（整理）・' + day.brew.length + ' 檔</div>' +
    (day.brew.length ? brewPastTableHtml('brew', day.brew) : '<div class="race-note">那天沒有醞釀名單紀錄</div>');
}
function brewDismissedKey(){ return 'brewDismissed:' + (brewSessionDate() || ''); }
function brewDismissedCodes(){
  try { return new Set(JSON.parse(localStorage.getItem(brewDismissedKey()) || '[]')); } catch (e) { return new Set(); }
}
function brewDismissAll(codes){
  try {
    const cur = brewDismissedCodes();
    codes.forEach((c) => cur.add(c));
    localStorage.setItem(brewDismissedKey(), JSON.stringify([...cur]));
  } catch (e) { /* 存不了就算了，畫面還是看得到 */ }
}
function brewRestoreDismissed(){
  try { localStorage.removeItem(brewDismissedKey()); } catch (e) { /* 忽略 */ }
}
function brewFallenTodayHtml(m){
  // 今天盤中曾經發動（後端紀錄）、現在已經回落不符合發動條件的：一起列出來，訊號才不會「不見」
  const live = new Set(m.launchBlocks.flatMap((b) => b.rows.map((r) => r.code)));
  const notLive = brewLaunchByStock(brewHistoryDay(brewSessionDate()).launch).filter((r) => !live.has(r.code));
  // 2026-10-05 使用者：35 檔那台是族群表後半段的報價整段沒抓到——沒有價格就判斷不了還在不在發動，
  // 不能當成「已回落」，另外列名字說明（下次報價抓到就會回到上面的發動列表或這裡）。
  const quoted = brewQuotedCodes();
  const all = notLive.filter((r) => quoted.has(r.code));
  const unknown = notLive.filter((r) => !quoted.has(r.code));
  const unknownNote = unknown.length ? '<div class="race-note">另有 ' + unknown.length + ' 檔今天發動過、但這台電腦現在抓不到它的報價，判斷不了還有沒有在發動，先不列進「今天曾發動」：' +
    unknown.map((r) => r.name).join('、') + '</div>' : '';
  if (!all.length) return unknownNote ? '<div class="bl-section bl-fallen">今天曾發動・0 檔</div>' + unknownNote : '';
  const dismissed = brewDismissedCodes();
  const rows = all.filter((r) => !dismissed.has(r.code));
  const hiddenCount = all.length - rows.length;
  const restoreBtn = hiddenCount ? '<button class="chart-tab chips-btn bl-restore-btn">顯示已隱藏的 ' + hiddenCount + ' 檔</button>' : '';
  if (!rows.length){
    return '<div class="bl-section bl-fallen">今天曾發動・已全部隱藏（' + all.length + ' 檔）</div>' +
      '<div class="race-note">紀錄還在，明天切到「昨天」還是查得到。' + restoreBtn + '</div>' + unknownNote;
  }
  return '<div class="bl-section bl-fallen">今天曾發動・' + rows.length + ' 檔</div>' +
    '<div class="race-sub">回落後訊號不會消失，這裡永遠找得到；按右邊「全部隱藏」只是這台瀏覽器不再顯示，紀錄還在，明天用「昨天」查得到。' +
    '<button class="chart-tab chips-btn bl-dismiss-btn" data-codes="' + rows.map((r) => r.code).join(',') + '">全部隱藏</button></div>' +
    brewPastTableHtml('launch', rows) + (hiddenCount ? '<div class="race-note">' + restoreBtn + '</div>' : '') + unknownNote;
}
function brewLaunchHtml(){
  if (!brewLaunchData){
    return '<div class="signal-empty"><div class="se-title">醞釀／發動資料讀取中…</div><div class="se-sub">箱子、均線是每天收盤後用日K算好的，再加上即時價量判斷；讀不到的話稍後再試。</div></div>';
  }
  if (typeof brewDayOffset === 'string') return brewDayBarHtml() + brewOverlapHtml(brewDayOffset);
  if (brewDayOffset > 0) return brewDayBarHtml() + brewPastDayHtml();
  const m = brewLaunchModel();
  if (!m) return '<div class="signal-empty"><div class="se-title">首頁行情還在載入…</div><div class="se-sub">還沒拿到證交所的即時報價（剛打開頁面、或第一次抓報價失敗），幾秒後會自動重抓，拿到就會出現。' +
    (groupsLastError ? '<br>上次失敗原因：' + wlEsc(groupsLastError) : '') + '</div></div>';
  const r = m.rules;
  const d = brewLaunchData;
  const skipped = (d.insufficient || []).length + (d.stale || []).length;
  const bf = d.historyBackfill;
  const stamp = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
  const note = '<div class="race-sub">老師的選股法：1＝醞釀（整理形態）、2＝發動（突破）。醞釀以前一個交易日（' + (d.asOf || '—') + '）收盤為準：均線分數≥' + r.brewMinScore +
    '、收盤站上月線、近 ' + r.boxDays + ' 天最高到最低相差≤' + r.boxRangeMaxPct + '%、5/10/20 日線相差≤' + r.maSpreadMaxPct + '%。發動看即時價量：價格衝過箱頂（近 ' + r.boxDays + ' 天最高價）、均線分數>' + (r.launchMinScore - 1) +
    '、盤中累積周轉率≥' + r.turnoverMinPct + '% 或盤中累積量≥5 日均量 ' + r.volumeRatioMin + ' 倍（不換算全天預估）。同族群依均線分數排序，★＝族群裡分數最高。' +
    (r.skipGroups && r.skipGroups.length ? r.skipGroups.join('、') + '不列入。' : '') +
    (skipped && !(bf && !bf.done) ? '另有 ' + skipped + ' 檔日K不足 240 天（新上市等）或停牌沒列入。' : '') + stamp + '</div>' + brewBackfillNoteHtml(bf);
  const launch = '<div class="bl-section bl-launch">發動（突破）・' + m.launchCount + ' 檔</div>' +
    (m.launchBlocks.length ? brewLaunchFlatTableHtml(m.launchBlocks.flatMap((b) => b.rows)) : '<div class="race-note">目前沒有股票發動（過箱頂、均線分數、周轉三個條件要同時到）</div>');
  const brew = '<div class="bl-section bl-brew">醞釀（整理）・' + m.brewCount + ' 檔</div>' +
    (m.brewBlocks.length ? m.brewBlocks.map((b) => brewLaunchBlockHtml(b, 'brew')).join('') : '<div class="race-note">目前沒有股票符合醞釀條件</div>');
  return brewDayBarHtml() + note + launch + brewFallenTodayHtml(m) + brew;
}

// ---- 盤後籌碼排行（2026-09-25 使用者：底部「盤後籌碼排行」先做，只用免費資料）----
// 後端 /api/chips-daily：每個交易日收盤後的主力大單淨額（永豐逐筆）＋三大法人買賣超（上市＝證交所 T86，
// 上櫃＝櫃買中心開放資料經排程主機鏡像），連續買超／賣超天數，收盤與漲跌幅。這裡只做排序、篩選、切日期。
const CHIPS_MEASURES = [
  { key: 'radar', label: '籌碼週報' },   // 2026-10-04 使用者：照莊爸 zhuang.tw/radar 做（集保週資料），放第一個；2026-10-10 改名「籌碼週報」
  { key: 'mf', label: '主力大單' }, { key: 'foreign', label: '外資' }, { key: 'trust', label: '投信' },
  { key: 'dealer', label: '自營商' }, { key: 'total', label: '三大法人' }, { key: 'brewx', label: '法人連買∩醞釀發動' },
  { key: 'mfx', label: '主力大單∩醞釀發動' }, { key: 'short', label: '放空籌碼' },
];
const CHIPS_PAGE = 30;
let chipsState = { measure: 'radar', side: 'buy', dayIndex: 0, market: 'all', limit: CHIPS_PAGE, inst: 'total', minStreak: 2, list: 'all', mfMinStreak: 1,
  shortMode: 'inst', shortInst: 'total', shortMin: 2, shortMfMin: 1, shortTech: 'weak', shortFlag: 'all' };
// 主力大單∩醞釀發動（2026-09-25 使用者：再多一個跟主力大單的交集）：同一套交集，只是「連續」改看主力大單連續買超天數、
// 欄位改成主力淨額／淨額金額／佔成交額；那天沒有主力大單資料的股票不算。
const chipsBrewMfMode = () => chipsState.measure === 'mfx';
const chipsBrewTabs = () => chipsState.measure === 'brewx' || chipsState.measure === 'mfx';
// 法人連買∩醞釀發動（2026-09-25 使用者）：那一天的醞釀名單快照／發動紀錄（後端每日保存）跟那天收盤的法人連續買超天數做交集
const chipsBrewCache = {};   // date -> {brew: [...], launch: [...]}
const chipsBrewLoading = {};
const chipsBrewFailedAt = {};
async function ensureChipsBrew(date){
  if (!date || chipsBrewCache[date] || chipsBrewLoading[date]) return;
  if (chipsBrewFailedAt[date] && Date.now() - chipsBrewFailedAt[date] < 30000) return;
  chipsBrewLoading[date] = true;
  try {
    const res = await fetch('/api/brew-launch-history?date=' + encodeURIComponent(date));
    if (!res.ok) throw new Error('brew-launch-history http ' + res.status);
    const data = await res.json();
    if (!data || data.status !== 'ok' || !data.days) throw new Error('bad payload');
    chipsBrewCache[date] = data.days[date] || { brew: [], launch: [] };
  } catch (e) {
    chipsBrewFailedAt[date] = Date.now();
  } finally {
    delete chipsBrewLoading[date];
  }
  if (!document.getElementById('chipsModal').hidden) renderChips();
}
// 名稱旁的標記（2026-09-25 使用者）：停資／停券／不可當沖（永豐個股資訊：目前不可融資、不可融券、不可現股當沖）與有股期；
// 旗標還沒進來或四項都沒有就不標，維持原樣。
function chipsFlagPillsHtml(code){
  const f = stockFlags[code];
  if (!f) return '';
  const out = [];
  if (f.marginable === false && f.shortable === false) out.push('<span class="chips-flag stop" title="目前不可融資、不可融券">停資停券</span>');
  else if (f.marginable === false) out.push('<span class="chips-flag stop" title="目前不可融資">停資</span>');
  else if (f.shortable === false) out.push('<span class="chips-flag stop" title="目前不可融券">停券</span>');
  if (f.dayTradeEligible === false) out.push('<span class="chips-flag stop" title="不可現股當沖">不可當沖</span>');
  if (f.hasStockFutures) out.push('<span class="chips-flag futures" title="有股票期貨">有股期</span>');
  return out.join('');
}
const CHIPS_INST_LABEL = { total: '三大法人', foreign: '外資', trust: '投信', dealer: '自營商' };
function chipsBrewRows(data, day){
  const mfMode = chipsBrewMfMode();
  const inst = chipsState.inst, minStreak = mfMode ? chipsState.mfMinStreak : chipsState.minStreak;
  const want = chipsState.market === 'all' ? null : (chipsState.market === 'tse' ? 'TSE' : 'OTC');
  const byCode = {};
  (day.brew || []).forEach((r) => { byCode[r.code] = Object.assign(byCode[r.code] || {}, { brew: r }); });
  (day.launch || []).forEach((r) => { byCode[r.code] = Object.assign(byCode[r.code] || {}, { launch: r }); });
  const rows = [];
  Object.keys(byCode).forEach((code) => {
    const s = data.stocks[code];
    if (!s || !s.streak) return;
    if (mfMode && !s.mf) return;
    const streak = (mfMode ? s.streak.mf : s.streak[inst]) || 0;
    if (streak < minStreak) return;
    if (want && s.market !== want) return;
    const kind = byCode[code].launch ? (byCode[code].brew || byCode[code].launch.brewing ? 'both' : 'launch') : 'brew';
    if (chipsState.list === 'brew' && !byCode[code].brew) return;
    if (chipsState.list === 'launch' && !byCode[code].launch) return;
    rows.push({ code, s, streak, net: mfMode ? s.mf.net : s[inst], kind, brew: byCode[code].brew, launch: byCode[code].launch });
  });
  rows.sort((a, b) => b.streak - a.streak || (b.net || 0) - (a.net || 0));
  return rows;
}
function chipsBrewRowHtml(r, rank){
  const s = r.s;
  const lots = (key) => '<td class="num ' + dirClass(s[key] || 0) + (key === chipsState.inst ? ' chips-active' : '') + '">' + fmtLots(s[key]) + '</td>';
  const launch = r.launch;
  const listCell = launch
    ? '<span class="bl-tag">' + (r.kind === 'both' ? '醞釀→發動' : '發動') + '</span> ' + (launch.eod ? '收盤' : launch.live ? '盤中' : fmtTime(launch.recordedAt)) + ' ' + num2(launch.price)
    : '<span class="chips-brew-tag">醞釀</span> 箱頂 ' + num2(r.brew.boxHigh);
  const score = launch ? launch.score : r.brew.score;
  const chg = s.changePct === null || s.changePct === undefined ? '—' : fmt(s.changePct) + '%';
  return '<tr class="combo-row chips-row" data-code="' + r.code + '" data-name="' + s.name + '" tabindex="0" role="button">' +
    '<td class="chips-rank">' + rank + '</td><td class="combo-code">' + r.code + '</td><td class="combo-name">' + s.name + wlStarHtml(r.code, s.name) + chipsFlagPillsHtml(r.code) + '</td>' +
    '<td><span class="sig-group">' + (s.group || '—') + '</span></td>' +
    '<td>' + listCell + '</td>' +
    '<td>' + chipsStreakHtml(r.streak) + '</td>' +
    (chipsBrewMfMode()
      ? '<td class="num ' + dirClass(s.mf.net) + ' chips-active">' + fmtLots(s.mf.net) + '</td><td class="num ' + dirClass(s.mf.netAmount) + '">' + fmtAmount(s.mf.netAmount) + '</td>' +
        '<td class="num">' + (s.mf.pct !== null && s.mf.pct !== undefined ? s.mf.pct.toFixed(1) + '%' : '—') + '</td>' +
        '<td class="num ' + dirClass(s.total || 0) + '">' + fmtLots(s.total) + '</td>'
      : lots('foreign') + lots('trust') + lots('dealer') + lots('total') + '<td class="num">' + (s.mf ? fmtLots(s.mf.net) : '—') + '</td>') +
    '<td class="bl-score">' + (score === null || score === undefined ? '—' : score) + '</td>' +
    '<td class="num ' + dirClass(s.changePct || 0) + '">' + chg + '</td>' +
    '<td class="num">' + (s.close === null || s.close === undefined ? '—' : num2(s.close)) + '</td></tr>';
}
function chipsBrewTableHtml(rows){
  const cls = (key) => (key === chipsState.inst ? ' class="chips-active num"' : ' class="num"');
  const head = '<th>名次</th><th>代號</th><th>名稱</th><th>族群</th><th>名單</th><th>連續</th>' +
    (chipsBrewMfMode()
      ? '<th class="chips-active num">主力淨額(張)</th><th class="num">淨額金額</th><th class="num">佔成交額</th><th class="num">三大法人</th>'
      : '<th' + cls('foreign') + '>外資</th><th' + cls('trust') + '>投信</th><th' + cls('dealer') + '>自營商</th><th' + cls('total') + '>三大法人</th><th class="num">主力</th>') +
    '<th>均線分數</th><th class="num">漲跌幅</th><th class="num">收盤</th>';
  const shown = rows.slice(0, chipsState.limit);
  return '<div class="race-block bl-block"><div class="combo-table-wrap"><table class="combo-table bl-table chips-table"><thead><tr>' + head + '</tr></thead><tbody>' +
    shown.map((r, i) => chipsBrewRowHtml(r, i + 1)).join('') + '</tbody></table></div></div>' +
    (rows.length > shown.length ? '<div class="chips-more"><button class="chart-tab chips-btn" id="chipsMore">再顯示 ' + Math.min(CHIPS_PAGE, rows.length - shown.length) + ' 檔（共 ' + rows.length + ' 檔）</button></div>' : '');
}
function chipsBrewControlsHtml(){
  const btn = (cls, attr, value, label, active) => '<button class="chart-tab chips-btn ' + cls + (active ? ' active' : '') + '" data-' + attr + '="' + value + '">' + label + '</button>';
  const mfMode = chipsBrewMfMode();
  const minStreak = mfMode ? chipsState.mfMinStreak : chipsState.minStreak;
  return '<div class="chips-controls">' +
    (mfMode ? '' : '<div class="combo-filter-bar">' + Object.keys(CHIPS_INST_LABEL).map((k) => btn('chips-inst-btn', 'inst', k, CHIPS_INST_LABEL[k], chipsState.inst === k)).join('') + '</div>') +
    '<div class="combo-filter-bar">' + [1, 2, 3, 5].map((n) => btn('chips-streak-btn', 'streak', n, (mfMode ? '主力連買≥' : '連買≥') + n + '天', minStreak === n)).join('') + '</div>' +
    '<div class="combo-filter-bar">' + btn('chips-list-btn', 'list', 'all', '醞釀＋發動', chipsState.list === 'all') + btn('chips-list-btn', 'list', 'brew', '只看醞釀', chipsState.list === 'brew') + btn('chips-list-btn', 'list', 'launch', '只看發動', chipsState.list === 'launch') + '</div>' +
    '</div>';
}
function chipsBrewSectionHtml(data){
  const date = data.date;
  ensureChipsBrew(date);
  const day = chipsBrewCache[date];
  const mmdd = String(date || '').slice(5).replace('-', '/');
  const mfMode = chipsBrewMfMode();
  const listNote = '名單欄：醞釀＝在醞釀名單、發動＝那天發動（時間、發動價）、醞釀→發動＝從醞釀名單發動。';
  const note = mfMode
    ? '<div class="race-sub">' + mmdd + '：那天盤前的醞釀名單（快照）與那天的發動紀錄，跟那天的主力大單淨額做交集（只算那天有主力大單資料的股票）；「連續」＝主力大單連續買超的交易日數（到 ' + mmdd + ' 為止）；佔成交額＝主力淨額金額 ÷ 當天成交額。' + listNote + '</div>'
    : '<div class="race-sub">' + mmdd + '：那天盤前的醞釀名單（快照）與那天的發動紀錄，跟那天收盤的法人買賣超做交集；「連續」＝所選法人連續買超的交易日數（到 ' + mmdd + ' 為止）。' + listNote + '</div>';
  if (!day){
    return chipsBrewControlsHtml() + note + '<div class="signal-empty"><div class="se-title">' + (chipsBrewFailedAt[date] ? '醞釀／發動名單讀取失敗' : '讀取中…') + '</div><div class="se-sub">正在抓 ' + mmdd + ' 的醞釀名單快照與發動紀錄。</div></div>';
  }
  const rows = chipsBrewRows(data, day);
  const title = (mfMode ? '主力大單連買≥' + chipsState.mfMinStreak : CHIPS_INST_LABEL[chipsState.inst] + '連買≥' + chipsState.minStreak) + '天 ∩ ' + (chipsState.list === 'brew' ? '醞釀' : chipsState.list === 'launch' ? '發動' : '醞釀／發動') + '・' + rows.length + ' 檔';
  return chipsBrewControlsHtml() + note + '<div class="bl-section bl-launch">' + title + '</div>' +
    (rows.length ? chipsBrewTableHtml(rows) : '<div class="race-note">沒有同時符合的股票（那天醞釀 ' + (day.brew || []).length + ' 檔、發動 ' + (day.launch || []).length + ' 檔' + (mfMode ? '、主力大單 ' + (data.mainForceRows || 0) + ' 檔' : '') + '）</div>');
}
// 放空籌碼（2026-09-25 使用者：這頁都是做多的，要一個做空的頁面、可以選做空標的）：
// 法人連續賣超、主力大單連續賣超（可交集），再限定「弱勢」型態（均線分數≤5 且收盤在月線下；均線資料來自
// /api/brew-launch，只對最新一天準，往日只列籌碼）與「可放空」（可融券／有股期）。
const CHIPS_SHORT_MODE_LABEL = { inst: '只看法人連賣', mf: '只看主力連賣', both: '法人∩主力連賣' };
const CHIPS_WEAK_MAX_SCORE = 5;
function chipsTechStocks(data){
  return brewLaunchData && brewLaunchData.stocks && brewLaunchData.asOf && data && brewLaunchData.asOf === data.date ? brewLaunchData.stocks : null;
}
function chipsIsWeak(t){
  if (!t) return false;
  const ma20 = t.ma ? Number(t.ma['20']) : NaN;
  return Number(t.score) <= CHIPS_WEAK_MAX_SCORE && Number.isFinite(ma20) && Number(t.prevClose) < ma20;
}
function chipsShortRows(data){
  const st = chipsState, inst = st.shortInst;
  const want = st.market === 'all' ? null : (st.market === 'tse' ? 'TSE' : 'OTC');
  const tech = chipsTechStocks(data);
  const rows = [];
  Object.keys(data.stocks || {}).forEach((code) => {
    const s = data.stocks[code];
    if (!s || !s.streak) return;
    if (want && s.market !== want) return;
    const instStreak = s.streak[inst] || 0, mfStreak = s.streak.mf || 0;
    const instOk = -instStreak >= st.shortMin;
    const mfOk = !!s.mf && -mfStreak >= st.shortMfMin;
    if (st.shortMode === 'inst' && !instOk) return;
    if (st.shortMode === 'mf' && !mfOk) return;
    if (st.shortMode === 'both' && !(instOk && mfOk)) return;
    const t = tech ? tech[code] : null;
    if (st.shortTech === 'weak' && tech && !chipsIsWeak(t)) return;
    const f = stockFlags[code];
    if (st.shortFlag === 'short' && !(f && f.shortable === true)) return;
    if (st.shortFlag === 'futures' && !(f && f.hasStockFutures)) return;
    rows.push({ code, s, instStreak, mfStreak, net: s[inst], tech: t });
  });
  rows.sort((a, b) => st.shortMode === 'mf'
    ? (a.mfStreak - b.mfStreak) || ((a.s.mf ? a.s.mf.net : 0) - (b.s.mf ? b.s.mf.net : 0))
    : (a.instStreak - b.instStreak) || ((a.net || 0) - (b.net || 0)));
  return rows;
}
function chipsShortRowHtml(r, rank){
  const s = r.s, inst = chipsState.shortInst;
  const lots = (key) => '<td class="num ' + dirClass(s[key] || 0) + (key === inst ? ' chips-active' : '') + '">' + fmtLots(s[key]) + '</td>';
  const chg = s.changePct === null || s.changePct === undefined ? '—' : fmt(s.changePct) + '%';
  const t = r.tech;
  const techCell = t ? '<td class="bl-score">' + t.score + (chipsIsWeak(t) ? '<span class="chips-weak-tag">弱勢</span>' : '') + '</td>' : '<td class="muted">—</td>';
  return '<tr class="combo-row chips-row" data-code="' + r.code + '" data-name="' + s.name + '" tabindex="0" role="button">' +
    '<td class="chips-rank">' + rank + '</td><td class="combo-code">' + r.code + '</td><td class="combo-name">' + s.name + wlStarHtml(r.code, s.name) + chipsFlagPillsHtml(r.code) + '</td>' +
    '<td><span class="sig-group">' + (s.group || '—') + '</span>' + (s.market ? ' <span class="muted">' + (s.market === 'OTC' ? '櫃' : '市') + '</span>' : '') + '</td>' +
    '<td>' + chipsStreakHtml(r.instStreak) + '</td>' +
    lots('foreign') + lots('trust') + lots('dealer') + lots('total') +
    '<td>' + chipsStreakHtml(r.mfStreak) + '</td>' +
    '<td class="num ' + (s.mf ? dirClass(s.mf.net) : '') + '">' + (s.mf ? fmtLots(s.mf.net) : '—') + '</td>' +
    '<td class="num ' + (s.mf ? dirClass(s.mf.netAmount) : '') + '">' + (s.mf ? fmtAmount(s.mf.netAmount) : '—') + '</td>' +
    techCell +
    '<td class="num ' + dirClass(s.changePct || 0) + '">' + chg + '</td>' +
    '<td class="num">' + (s.close === null || s.close === undefined ? '—' : num2(s.close)) + '</td></tr>';
}
function chipsShortTableHtml(rows){
  const cls = (key) => (key === chipsState.shortInst ? ' class="chips-active num"' : ' class="num"');
  const head = '<th>名次</th><th>代號</th><th>名稱</th><th>族群</th><th>法人連賣</th>' +
    '<th' + cls('foreign') + '>外資</th><th' + cls('trust') + '>投信</th><th' + cls('dealer') + '>自營商</th><th' + cls('total') + '>三大法人</th>' +
    '<th>主力連賣</th><th class="num">主力淨額(張)</th><th class="num">淨額金額</th><th>均線分數</th><th class="num">漲跌幅</th><th class="num">收盤</th>';
  const shown = rows.slice(0, chipsState.limit);
  return '<div class="race-block bl-block"><div class="combo-table-wrap"><table class="combo-table bl-table chips-table"><thead><tr>' + head + '</tr></thead><tbody>' +
    shown.map((r, i) => chipsShortRowHtml(r, i + 1)).join('') + '</tbody></table></div></div>' +
    (rows.length > shown.length ? '<div class="chips-more"><button class="chart-tab chips-btn" id="chipsMore">再顯示 ' + Math.min(CHIPS_PAGE, rows.length - shown.length) + ' 檔（共 ' + rows.length + ' 檔）</button></div>' : '');
}
function chipsShortControlsHtml(data){
  const btn = (cls, attr, value, label, active, disabled) => '<button class="chart-tab chips-btn ' + cls + (active ? ' active' : '') + '" data-' + attr + '="' + value + '"' + (disabled ? ' disabled' : '') + '>' + label + '</button>';
  const st = chipsState;
  const techOk = !!chipsTechStocks(data);
  return '<div class="chips-controls">' +
    '<div class="combo-filter-bar">' + Object.keys(CHIPS_SHORT_MODE_LABEL).map((k) => btn('chips-smode-btn', 'smode', k, CHIPS_SHORT_MODE_LABEL[k], st.shortMode === k)).join('') + '</div>' +
    (st.shortMode === 'mf' ? '' : '<div class="combo-filter-bar">' + Object.keys(CHIPS_INST_LABEL).map((k) => btn('chips-sinst-btn', 'sinst', k, CHIPS_INST_LABEL[k], st.shortInst === k)).join('') + '</div>' +
      '<div class="combo-filter-bar">' + [1, 2, 3, 5].map((n) => btn('chips-sstreak-btn', 'sstreak', n, '連賣≥' + n + '天', st.shortMin === n)).join('') + '</div>') +
    (st.shortMode === 'inst' ? '' : '<div class="combo-filter-bar">' + [1, 2, 3, 5].map((n) => btn('chips-smf-btn', 'smf', n, '主力連賣≥' + n + '天', st.shortMfMin === n)).join('') + '</div>') +
    '<div class="combo-filter-bar">' + btn('chips-stech-btn', 'stech', 'weak', techOk ? '只看弱勢（均線分數≤5、月線下）' : '只看弱勢（那天沒有均線資料）', st.shortTech === 'weak', !techOk) + btn('chips-stech-btn', 'stech', 'all', '型態不限', st.shortTech === 'all') + '</div>' +
    '<div class="combo-filter-bar">' + btn('chips-sflag-btn', 'sflag', 'all', '全部', st.shortFlag === 'all') + btn('chips-sflag-btn', 'sflag', 'short', '只看可融券', st.shortFlag === 'short') + btn('chips-sflag-btn', 'sflag', 'futures', '只看有股期', st.shortFlag === 'futures') + '</div>' +
    '</div>';
}
function chipsShortSectionHtml(data){
  const mmdd = String(data.date || '').slice(5).replace('-', '/');
  refreshBrewLaunch(false);  // 均線資料（十分鐘內不重抓）
  const tech = chipsTechStocks(data);
  const st = chipsState;
  const rows = chipsShortRows(data);
  const chipsDesc = st.shortMode === 'mf' ? '主力大單連賣≥' + st.shortMfMin + '天'
    : CHIPS_INST_LABEL[st.shortInst] + '連賣≥' + st.shortMin + '天' + (st.shortMode === 'both' ? ' ∩ 主力連賣≥' + st.shortMfMin + '天' : '');
  const techDesc = st.shortTech === 'weak' ? (tech ? '・弱勢' : '・（那天沒有均線資料，型態不限）') : '';
  const flagDesc = st.shortFlag === 'short' ? '・可融券' : st.shortFlag === 'futures' ? '・有股期' : '';
  const title = '放空籌碼：' + chipsDesc + techDesc + flagDesc + '・' + rows.length + ' 檔';
  const note = '<div class="race-sub">' + mmdd + '：做空用的籌碼名單。法人連賣＝所選法人連續賣超的交易日數（到 ' + mmdd + ' 為止）；主力連賣＝主力大單連續淨賣超的天數（只算那天有主力大單資料的股票）；弱勢＝均線分數≤' + CHIPS_WEAK_MAX_SCORE + '（5/10/20/60/120/240 日線兩兩比較 15 組，短天期在上面得 1 分）且收盤在月線（20 日線）之下，均線資料只有最新一天有，往日只列籌碼；可融券／有股期＝能用融券或股票期貨放空（停券的不能融券）。排序：連賣天數多的在前，再看賣超張數。</div>';
  const src = data.sources || {};
  return chipsShortControlsHtml(data) + note + '<div class="bl-section bl-brew">' + title + '</div>' +
    (rows.length ? chipsShortTableHtml(rows) : '<div class="race-note">那天沒有符合的股票' + (!src.TSE && !src.OTC ? '（法人資料還沒進來）' : '') + '</div>');
}
const chipsCache = {};        // date('' = 最新) -> payload
const chipsLoading = {};
const chipsFailedAt = {};
let chipsDates = [];          // 有資料的交易日（新的在前），第一次抓最新那份時填
function chipsCurrentDate(){ return chipsDates[chipsState.dayIndex] || (chipsState.dayIndex === 0 ? '' : null); }
async function ensureChips(date){
  const key = date || '';
  if (chipsCache[key] || chipsLoading[key]) return;
  if (chipsFailedAt[key] && Date.now() - chipsFailedAt[key] < 30000) return;
  chipsLoading[key] = true;
  try {
    const res = await fetch('/api/chips-daily' + (date ? '?date=' + encodeURIComponent(date) : ''));
    if (!res.ok) throw new Error('chips-daily http ' + res.status);
    const data = await res.json();
    if (!data || !data.status) throw new Error('bad payload');
    chipsCache[key] = data;
    if (data.date) chipsCache[data.date] = data;
    if (Array.isArray(data.dates) && data.dates.length) chipsDates = data.dates;
  } catch (e) {
    chipsFailedAt[key] = Date.now();
  } finally {
    delete chipsLoading[key];
  }
  if (!document.getElementById('chipsModal').hidden) renderChips();
}
function chipsData(){
  const date = chipsCurrentDate();
  if (date === null) return null;
  ensureChips(date);
  return chipsCache[date || ''] || null;
}
function chipsValue(s, measure){ return measure === 'mf' ? (s.mf ? s.mf.net : null) : s[measure]; }
function chipsRows(data){
  const sign = chipsState.side === 'buy' ? 1 : -1;
  const want = chipsState.market === 'all' ? null : (chipsState.market === 'tse' ? 'TSE' : 'OTC');
  const rows = [];
  Object.keys(data.stocks || {}).forEach((code) => {
    const s = data.stocks[code];
    const v = chipsValue(s, chipsState.measure);
    if (v === null || v === undefined || v === 0 || (v > 0 ? 1 : -1) !== sign) return;
    if (want && s.market !== want) return;
    rows.push({ code, s, v });
  });
  rows.sort((a, b) => sign * (b.v - a.v));
  return rows;
}
const fmtLots = (v) => (v === null || v === undefined ? '—' : (v > 0 ? '+' : '') + Math.round(v).toLocaleString('zh-TW'));
function fmtAmount(v){
  if (v === null || v === undefined) return '—';
  const abs = Math.abs(v);
  const sign = v > 0 ? '+' : v < 0 ? '-' : '';
  return abs >= 1e8 ? sign + (abs / 1e8).toFixed(2) + '億' : sign + Math.round(abs / 1e4).toLocaleString('zh-TW') + '萬';
}
function chipsStreakHtml(n){
  if (!n) return '<span class="muted">—</span>';
  return n > 0 ? '<span class="chips-streak-buy">連買 ' + n + ' 天</span>' : '<span class="chips-streak-sell">連賣 ' + (-n) + ' 天</span>';
}
function chipsRowHtml(r, rank){
  const s = r.s, m = chipsState.measure;
  const cls = (key) => (key === m ? ' chips-active' : '');
  const lotsCell = (key) => '<td class="num ' + dirClass(s[key] || 0) + cls(key) + '">' + fmtLots(s[key]) + '</td>';
  const volPct = m === 'mf'
    ? (s.mf && s.mf.pct !== null && s.mf.pct !== undefined ? s.mf.pct.toFixed(1) + '%' : '—')
    : (s.volume && r.v !== null ? (Math.abs(r.v) / s.volume * 100).toFixed(1) + '%' : '—');
  const chg = s.changePct === null || s.changePct === undefined ? '—' : fmt(s.changePct) + '%';
  return '<tr class="combo-row chips-row" data-code="' + r.code + '" data-name="' + s.name + '" tabindex="0" role="button">' +
    '<td class="chips-rank">' + rank + '</td><td class="combo-code">' + r.code + '</td><td class="combo-name">' + s.name + wlStarHtml(r.code, s.name) + chipsFlagPillsHtml(r.code) + '</td>' +
    '<td><span class="sig-group">' + (s.group || '—') + '</span>' + (s.market ? ' <span class="muted">' + (s.market === 'OTC' ? '櫃' : '市') + '</span>' : '') + '</td>' +
    (m === 'mf'
      ? '<td class="num ' + dirClass(r.v) + ' chips-active">' + fmtLots(r.v) + '</td><td class="num ' + dirClass(s.mf.netAmount) + '">' + fmtAmount(s.mf.netAmount) + '</td>'
      : lotsCell('foreign') + lotsCell('trust') + lotsCell('dealer') + lotsCell('total')) +
    '<td>' + chipsStreakHtml(s.streak ? s.streak[m] : 0) + '</td>' +
    '<td class="num">' + volPct + '</td>' +
    '<td class="num ' + dirClass(s.changePct || 0) + '">' + chg + '</td>' +
    '<td class="num">' + (s.close === null || s.close === undefined ? '—' : num2(s.close)) + '</td></tr>';
}
function chipsTableHtml(rows){
  const m = chipsState.measure;
  const cls = (key) => (key === m ? ' class="chips-active num"' : ' class="num"');
  const head = '<th>名次</th><th>代號</th><th>名稱</th><th>族群</th>' +
    (m === 'mf' ? '<th class="num chips-active">主力淨額(張)</th><th class="num">淨額金額</th>' : '<th' + cls('foreign') + '>外資</th><th' + cls('trust') + '>投信</th><th' + cls('dealer') + '>自營商</th><th' + cls('total') + '>三大法人</th>') +
    '<th>連續</th><th class="num">' + (m === 'mf' ? '佔成交額' : '佔成交量') + '</th><th class="num">漲跌幅</th><th class="num">收盤</th>';
  const shown = rows.slice(0, chipsState.limit);
  return '<div class="race-block bl-block"><div class="combo-table-wrap"><table class="combo-table bl-table chips-table"><thead><tr>' + head + '</tr></thead><tbody>' +
    shown.map((r, i) => chipsRowHtml(r, i + 1)).join('') + '</tbody></table></div></div>' +
    (rows.length > shown.length ? '<div class="chips-more"><button class="chart-tab chips-btn" id="chipsMore">再顯示 ' + Math.min(CHIPS_PAGE, rows.length - shown.length) + ' 檔（共 ' + rows.length + ' 檔）</button></div>' : '');
}
function chipsControlsHtml(data){
  const mmdd = (d) => (d ? String(d).slice(5).replace('-', '/') : '');
  const btn = (cls, attr, value, label, active, disabled) => '<button class="chart-tab chips-btn ' + cls + (active ? ' active' : '') + '" data-' + attr + '="' + value + '"' + (disabled ? ' disabled' : '') + '>' + label + '</button>';
  const dates = chipsDates.length ? chipsDates : (data && data.date ? [data.date] : []);
  return '<div class="chips-controls">' +
    (chipsBrewTabs() || chipsState.measure === 'short' ? '' : '<div class="combo-filter-bar">' + btn('chips-side-btn', 'side', 'buy', '買超', chipsState.side === 'buy') + btn('chips-side-btn', 'side', 'sell', '賣超', chipsState.side === 'sell') + '</div>') +
    '<div class="combo-filter-bar">' + [0, 1, 2].map((i) => btn('chips-day-btn', 'day', i, (i === 0 ? '最新 ' : '') + (dates[i] ? mmdd(dates[i]) : (i === 1 ? '前一日' : '前二日')), chipsState.dayIndex === i, !dates[i])).join('') + '</div>' +
    '<div class="combo-filter-bar">' + btn('chips-mkt-btn', 'market', 'all', '全部', chipsState.market === 'all') + btn('chips-mkt-btn', 'market', 'tse', '上市', chipsState.market === 'tse') + btn('chips-mkt-btn', 'market', 'otc', '上櫃', chipsState.market === 'otc') + '</div>' +
    '</div>';
}
function chipsSourceNoteHtml(data){
  const src = data.sources || {};
  const mmdd = String(data.date || '').slice(5).replace('-', '/');
  const tse = src.TSE ? '上市法人 ✓' : '上市法人：還沒進來（證交所收盤後約 15:00 公布）';
  const otc = src.OTC ? '上櫃法人 ✓' + (src.OTC.source === 'mirror' ? '（鏡像）' : '') : '上櫃法人：還沒進來（排程主機每個交易日 16:40 抓）';
  const mf = data.mainForceRows ? '主力大單 ' + data.mainForceRows + ' 檔' : '主力大單：那天沒有資料';
  return '<div class="race-sub">' + mmdd + '：' + tse + '・' + otc + '・' + mf + '。單位：張；「連續」＝連續買超或賣超的交易日數；佔成交量＝當天買賣超張數 ÷ 當天成交量（主力大單看佔成交額）。分點資料沒有免費來源，主力大單是我們自己用永豐逐筆算的大單淨額。名稱旁的標記：停資／停券／不可當沖＝目前不可融資、不可融券、不可現股當沖，有股期＝有股票期貨；都沒有就不標。</div>';
}
function renderChips(){
  const tabs = document.getElementById('chipsTabs');
  tabs.innerHTML = CHIPS_MEASURES.map((mm) => '<button class="chart-tab signal-tab' + (chipsState.measure === mm.key ? ' active' : '') + '" data-measure="' + mm.key + '">' + mm.label + '</button>').join('');
  const body = document.getElementById('chipsBody');
  if (chipsState.measure === 'radar'){
    const active = document.activeElement;
    const hadFocus = !!(active && active.id === 'rdInput');
    const caret = hadFocus ? (active.selectionStart || 0) : 0;
    body.innerHTML = radarHtml();
    radarAfterRender(hadFocus, caret);
    return;
  }
  const data = chipsData();
  if (!data){
    const date = chipsCurrentDate();
    body.innerHTML = chipsControlsHtml(null) + '<div class="signal-empty"><div class="se-title">' + (date === null ? '還沒有那一天的資料' : (chipsFailedAt[date || ''] ? '讀取失敗' : '讀取中…')) + '</div><div class="se-sub">' + (date === null ? '後端累積到那一天之後就會出現。' : '後端每個交易日收盤後才有資料；讀不到的話稍後再試。') + '</div></div>';
    return;
  }
  if (data.status !== 'ok' || !data.date){
    body.innerHTML = chipsControlsHtml(data) + '<div class="signal-empty"><div class="se-title">還沒有盤後籌碼資料</div><div class="se-sub">第一個交易日收盤後（約 15:00 起）會開始累積。</div></div>';
    return;
  }
  if (chipsState.measure === 'short'){
    body.innerHTML = chipsControlsHtml(data) + chipsSourceNoteHtml(data) + chipsShortSectionHtml(data);
    return;
  }
  if (chipsBrewTabs()){
    body.innerHTML = chipsControlsHtml(data) + chipsSourceNoteHtml(data) + chipsBrewSectionHtml(data);
    return;
  }
  const rows = chipsRows(data);
  const label = CHIPS_MEASURES.find((mm) => mm.key === chipsState.measure).label;
  body.innerHTML = chipsControlsHtml(data) + chipsSourceNoteHtml(data) +
    '<div class="bl-section ' + (chipsState.side === 'buy' ? 'bl-launch' : 'bl-brew') + '">' + label + (chipsState.side === 'buy' ? '買超' : '賣超') + '排行・' + rows.length + ' 檔</div>' +
    (rows.length ? chipsTableHtml(rows) : '<div class="race-note">那天沒有符合的股票' + (chipsState.measure !== 'mf' && !(data.sources || {})[chipsState.market === 'otc' ? 'OTC' : 'TSE'] ? '（法人資料還沒進來）' : '') + '</div>');
}
function openChipsPanel(){
  document.getElementById('chipsModal').hidden = false;
  renderChips();
}
function closeChipsPanel(){ document.getElementById('chipsModal').hidden = true; }
document.getElementById('chipsClose').addEventListener('click', closeChipsPanel);
document.getElementById('chipsModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeChipsPanel(); });
document.getElementById('chipsTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-measure]');
  if (!btn) return;
  chipsState.measure = btn.dataset.measure; chipsState.limit = CHIPS_PAGE;
  renderChips();
});
document.getElementById('chipsBody').addEventListener('click', (e) => {
  if (chipsState.measure === 'radar'){ radarClick(e); return; }
  const side = e.target.closest('.chips-side-btn');
  if (side){ chipsState.side = side.dataset.side; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const day = e.target.closest('.chips-day-btn');
  if (day && !day.disabled){ chipsState.dayIndex = Number(day.dataset.day) || 0; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const mkt = e.target.closest('.chips-mkt-btn');
  if (mkt){ chipsState.market = mkt.dataset.market; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  if (e.target.closest('#chipsMore')){ chipsState.limit += CHIPS_PAGE; renderChips(); return; }
  const inst = e.target.closest('.chips-inst-btn');
  if (inst){ chipsState.inst = inst.dataset.inst; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const streak = e.target.closest('.chips-streak-btn');
  if (streak){ const n = Number(streak.dataset.streak) || 1; if (chipsBrewMfMode()) chipsState.mfMinStreak = n; else chipsState.minStreak = n; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const list = e.target.closest('.chips-list-btn');
  if (list){ chipsState.list = list.dataset.list; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const smode = e.target.closest('.chips-smode-btn');
  if (smode){ chipsState.shortMode = smode.dataset.smode; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const sinst = e.target.closest('.chips-sinst-btn');
  if (sinst){ chipsState.shortInst = sinst.dataset.sinst; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const sstreak = e.target.closest('.chips-sstreak-btn');
  if (sstreak){ chipsState.shortMin = Number(sstreak.dataset.sstreak) || 1; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const smf = e.target.closest('.chips-smf-btn');
  if (smf){ chipsState.shortMfMin = Number(smf.dataset.smf) || 1; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const stech = e.target.closest('.chips-stech-btn');
  if (stech){ if (!stech.disabled){ chipsState.shortTech = stech.dataset.stech; chipsState.limit = CHIPS_PAGE; renderChips(); } return; }
  const sflag = e.target.closest('.chips-sflag-btn');
  if (sflag){ chipsState.shortFlag = sflag.dataset.sflag; chipsState.limit = CHIPS_PAGE; renderChips(); return; }
  const row = e.target.closest('.chips-row[data-code]');
  if (row){
    // 使用者 2026-09-25（手機截圖）：點代號、名稱沒反應——K線圖視窗（z-index 100）開在面板（102）後面被蓋住。
    // 窄螢幕走K線圖視窗時先把面板退到後面，關圖時 closeStockChart 會拉回來；桌機另開的視窗本來就在最上層。
    // 訊號中心（z-index 101）頁面一打開就預設開著，也會蓋住K線圖視窗（100）：一起退到後面。
    if (!useFloatingCharts()){
      document.getElementById('chipsModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(row.dataset.code, row.dataset.name);
  }
});

// ---- 籌碼暴增雷達（2026-10-04 使用者：照莊爸 zhuang.tw/radar「籌碼暴增雷達」做，放在盤後籌碼排行第一個分頁）----
// 後端 /api/chip-radar：集保股權分散表（每週五結算）算「大戶手上的股票變多還是變少」。
// x＝（這週 400 張以上大戶持股股數 − 上週）÷ 這週總股數 ×100；籌碼%＝3√x（大戶增加）或 x（減少）——跟莊爸截圖逐一比對過。
// 個股查詢 /api/chip-radar-stock（九週軌跡、同族群、三大法人）；迷你 K 線用 /api/bars1d。
const RD_WINDOWS = [0, 6, 4];      // 0＝全部（06/18 起，跟莊爸的「全部／近 6 週／近 4 週」一樣）
const RD_TOPS = [10, 15, 20, 30];
let radarState = { view: 'radar', rwWeek: '', outOpen: {}, listWeek: '', window: 0, top: 15, group: '', code: '', query: '', expanded: {}, kOpen: {}, scrollTo: '' };
let radarData = null, radarLoading = false, radarFailedAt = 0, radarLoadedAt = 0, radarError = '';
const radarStockCache = {}, radarStockLoading = {}, radarStockFailedAt = {}, radarStockError = {};
const rdBarsCache = {}, rdBarsLoading = {}, rdBarsFailed = {};
function rdEsc(s){ return String(s === null || s === undefined ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
const rdHas = (v) => v !== null && v !== undefined && Number.isFinite(Number(v));
const rdCls = (v) => (rdHas(v) ? (v > 0 ? 'rd-up' : (v < 0 ? 'rd-down' : '')) : 'rd-muted');
function rdPct(v, digits){
  // 跟莊爸一樣去掉尾巴的 0：+0.6%、+4%、0%
  if (!rdHas(v)) return '—';
  let t = Number(v).toFixed(digits === undefined ? 2 : digits);
  if (t.indexOf('.') >= 0) t = t.replace(/0+$/, '').replace(/\\.$/, '');
  if (t === '-0') t = '0';
  return (Number(t) > 0 ? '+' : '') + t + '%';
}
const rdMd = (d) => (d ? String(d).slice(5, 10).replace('-', '/') : '');
// 那週總股數變動（增資、減資、轉換公司債）：增資照算（跟莊爸一樣）；總股數減少 ≥5% 而且籌碼% 絕對值 ≥15（減資、股份轉換）後端不列入排行
function rdCapTag(v, excluded){
  if (!rdHas(v)) return '';
  return '<span class="rd-cap" title="那週總股數' + (v > 0 ? '增加' : '減少') + ' ' + Math.abs(v) + '%（增資、減資或轉換公司債），籌碼% 有一部分是股本變動造成的' + (excluded ? '；減資／股份轉換，不列入排行' : '') + '"><span class="rd-cap-long">股本' + (v > 0 ? '+' : '') + v + '%' + (excluded ? '・不列入' : '') + '</span><span class="rd-cap-short">股</span></span>';
}
// 上一週集保沒有這檔（減資、停止過戶那週集保不出資料），改跟更早那週比
function rdVsTag(vs){
  if (!vs) return '';
  return '<span class="rd-cap" title="上一週集保沒有這檔的資料（減資、停止過戶），這週改跟 ' + rdMdShort(vs) + ' 比"><span class="rd-cap-long">比 ' + rdMdShort(vs) + '</span><span class="rd-cap-short">比</span></span>';
}
const rdMdShort = (d) => (d ? Number(String(d).slice(5, 7)) + '/' + Number(String(d).slice(8, 10)) : '');
function rdMa(score){
  if (!rdHas(score)) return '<span class="rd-ma none">0</span>';
  const s = Number(score);
  return '<span class="rd-ma ' + (s >= 12 ? 'full' : (s >= 8 ? 'half' : 'line')) + '" title="均線分數 ' + s + '/15">' + s + '</span>';
}
function rdLots(v){
  if (!rdHas(v)) return '—';
  return (v > 0 ? '+' : '') + Math.round(v).toLocaleString('en-US');
}
async function ensureRadar(force){
  if (radarLoading) return;
  if (!force && radarData && Date.now() - radarLoadedAt < 10 * 60 * 1000) return;
  if (!force && radarFailedAt && Date.now() - radarFailedAt < 30000) return;
  radarLoading = true;
  try {
    const res = await fetch('/api/chip-radar');
    if (res.status === 404) throw new Error('後端還沒更新，合併部署後幾分鐘就會出現');
    if (!res.ok) throw new Error('chip-radar http ' + res.status);
    const data = await res.json();
    if (!data || !data.status) throw new Error('資料格式不對');
    radarData = data; radarLoadedAt = Date.now(); radarError = '';
  } catch (e) {
    radarFailedAt = Date.now(); radarError = e && e.message ? e.message : String(e);
  } finally {
    radarLoading = false;
  }
  if (radarVisible()) renderChips();
}
async function ensureRadarStock(code){
  if (!code || radarStockCache[code] || radarStockLoading[code]) return;
  if (radarStockFailedAt[code] && Date.now() - radarStockFailedAt[code] < 20000) return;
  radarStockLoading[code] = true;
  try {
    const res = await fetch('/api/chip-radar-stock?code=' + encodeURIComponent(code));
    if (res.status === 404){
      let msg = '找不到 ' + code;
      try { const j = await res.json(); if (j && j.detail && String(j.detail).indexOf('Not Found') < 0) msg = j.detail; else if (j && j.detail) msg = '後端還沒更新，合併部署後幾分鐘就會出現'; } catch (e2) { /* 沒有內容 */ }
      throw new Error(msg);
    }
    if (!res.ok) throw new Error('chip-radar-stock http ' + res.status);
    radarStockCache[code] = await res.json();
    delete radarStockError[code];
  } catch (e) {
    radarStockFailedAt[code] = Date.now(); radarStockError[code] = e && e.message ? e.message : String(e);
  } finally {
    delete radarStockLoading[code];
  }
  if (radarVisible()) renderChips();
}
async function ensureRdBars(code){
  if (!code || rdBarsCache[code] || rdBarsLoading[code] || rdBarsFailed[code]) return;
  rdBarsLoading[code] = true;
  try {
    const res = await fetch('/api/bars1d/' + encodeURIComponent(code));
    if (!res.ok) throw new Error('bars1d http ' + res.status);
    const data = await res.json();
    if (!data || !Array.isArray(data.bars) || !data.bars.length) throw new Error('沒有日K');
    rdBarsCache[code] = data.bars;
  } catch (e) {
    rdBarsFailed[code] = true;
  } finally {
    delete rdBarsLoading[code];
  }
  if (radarVisible()) renderChips();
}
function radarVisible(){ return !document.getElementById('chipsModal').hidden && chipsState.measure === 'radar'; }
// 迷你日K（近 70 日，MA5／MA20／MA60，底下成交量）
function rdKlineSvg(bars){
  const N = 70, W = 300, PH = 112, VH = 26, GAP = 4, PADR = 36, H = PH + GAP + VH;
  const closes = bars.map((b) => Number(b.close));
  const maAt = (p, i) => {
    if (i + 1 < p) return null;
    let s = 0;
    for (let j = i + 1 - p; j <= i; j++) s += closes[j];
    return s / p;
  };
  const start = Math.max(0, bars.length - N);
  const view = bars.slice(start);
  if (!view.length) return '';
  const mas = { 5: [], 20: [], 60: [] };
  let hi = -Infinity, lo = Infinity, vmax = 0;
  view.forEach((b, k) => {
    const i = start + k;
    hi = Math.max(hi, Number(b.high)); lo = Math.min(lo, Number(b.low)); vmax = Math.max(vmax, Number(b.volume) || 0);
    [5, 20, 60].forEach((p) => { const m = maAt(p, i); mas[p].push(m); if (m !== null){ hi = Math.max(hi, m); lo = Math.min(lo, m); } });
  });
  const span = hi - lo || 1;
  const cw = (W - PADR) / N;
  const y = (v) => (3 + (hi - v) / span * (PH - 6)).toFixed(1);
  const xOf = (k) => (k + (N - view.length)) * cw + cw / 2;
  let out = '';
  view.forEach((b, k) => {
    const o = Number(b.open), c = Number(b.close), up = c >= o;
    const color = up ? '#ef4444' : '#22c55e';
    const x = xOf(k);
    out += '<line x1="' + x.toFixed(1) + '" x2="' + x.toFixed(1) + '" y1="' + y(Number(b.high)) + '" y2="' + y(Number(b.low)) + '" stroke="' + color + '" stroke-width="0.8"/>';
    const top = Math.min(Number(y(o)), Number(y(c))), hgt = Math.max(0.8, Math.abs(Number(y(o)) - Number(y(c))));
    out += '<rect x="' + (x - cw * 0.32).toFixed(1) + '" y="' + top.toFixed(1) + '" width="' + Math.max(0.8, cw * 0.64).toFixed(1) + '" height="' + hgt.toFixed(1) + '" fill="' + color + '"/>';
    const vh = vmax ? (Number(b.volume) || 0) / vmax * VH : 0;
    out += '<rect x="' + (x - cw * 0.32).toFixed(1) + '" y="' + (H - vh).toFixed(1) + '" width="' + Math.max(0.8, cw * 0.64).toFixed(1) + '" height="' + vh.toFixed(1) + '" fill="' + color + '" opacity="0.35"/>';
  });
  const line = (arr, color) => {
    const pts = [];
    arr.forEach((m, k) => { if (m !== null) pts.push(xOf(k).toFixed(1) + ',' + y(m)); });
    return pts.length > 1 ? '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + color + '" stroke-width="1.1"/>' : '';
  };
  out += line(mas[5], '#60a5fa') + line(mas[20], '#f59e0b') + line(mas[60], '#c084fc');
  const last = view[view.length - 1];
  const lastUp = Number(last.close) >= (view.length > 1 ? Number(view[view.length - 2].close) : Number(last.open));
  const tx = W - PADR + 3;
  out += '<line x1="0" x2="' + (W - PADR) + '" y1="' + y(hi) + '" y2="' + y(hi) + '" stroke="rgba(255,255,255,.12)" stroke-dasharray="2,2"/>';
  out += '<text x="' + tx + '" y="' + (Number(y(hi)) + 4) + '" fill="#a89c8f" font-size="9">' + num2(hi).replace(/\\.00$/, '') + '</text>';
  out += '<text x="' + tx + '" y="' + (Number(y(lo)) + 1) + '" fill="#a89c8f" font-size="9">' + num2(lo).replace(/\\.00$/, '') + '</text>';
  const ly = Math.min(PH - 12, Math.max(14, Number(y(Number(last.close))) + 3));
  out += '<text x="' + tx + '" y="' + ly + '" fill="' + (lastUp ? '#ff6b6b' : '#4ade80') + '" font-size="10" font-weight="700">' + num2(last.close).replace(/\\.00$/, '') + '</text>';
  const ticks = [0, Math.floor((view.length - 1) / 2), view.length - 1];
  const labels = ticks.map((k, j) => '<text x="' + Math.min(W - PADR - 12, Math.max(12, xOf(k))).toFixed(1) + '" y="' + (H + 11) + '" fill="#a89c8f" font-size="9" text-anchor="' + (j === 0 ? 'start' : (j === 2 ? 'end' : 'middle')) + '">' + rdMd(String(view[k].ts || '').slice(0, 10)) + '</text>').join('');
  return '<svg viewBox="0 0 ' + W + ' ' + (H + 14) + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近 70 日日K">' + out + labels + '</svg>';
}
function rdKlineBox(code, open){
  if (!open){
    return '<div class="rd-kbox closed" data-rd-kopen="' + code + '"><div class="rd-khead">📈 日線 K 棒<span>點一下看最近 70 日</span></div></div>';
  }
  ensureRdBars(code);
  const bars = rdBarsCache[code];
  const lastDay = bars && bars.length ? rdMd(String(bars[bars.length - 1].ts || '').slice(0, 10)) : '';
  const head = '<div class="rd-khead">📈 日線 K 棒<span>近 70 日' + (lastDay ? '・' + lastDay + ' 收' : '') + '</span><span class="rd-ma5">MA5</span><span class="rd-ma20">MA20</span><span class="rd-ma60">MA60</span></div>';
  const body = bars ? rdKlineSvg(bars) : '<div class="rd-note">' + (rdBarsFailed[code] ? '日K讀不到' : '讀取中…') + '</div>';
  return '<div class="rd-kbox" data-rd-chart="' + code + '" title="點一下開大圖">' + head + body + '</div>';
}
// 九週籌碼軌跡（新→舊），條長照這幾週最大的值
function rdTrailHtml(trail){
  const rows = (trail || []).filter((t) => t);
  const max = Math.max(0.01, ...rows.map((t) => (rdHas(t.chip) ? Math.abs(t.chip) : 0)));
  return rows.map((t) => {
    const v = t.chip;
    const w = rdHas(v) ? Math.min(50, Math.abs(v) / max * 50) : 0;
    return '<div class="rd-trow"><span class="rd-c">' + rdMd(t.date) + '</span>' +
      '<span class="rd-track">' + (w ? '<i class="rd-fill ' + (v > 0 ? 'up' : 'down') + '" style="width:' + w.toFixed(1) + '%"></i>' : '') + '</span>' +
      '<span class="rd-val ' + rdCls(v) + '"' + (rdHas(t.capital) ? ' title="那週股本' + (t.capital > 0 ? '+' : '') + t.capital + '%' + (t.excluded ? '，不列入排行' : '') + '"' : '') + '>' +
      (rdHas(t.capital) ? '<span class="rd-cap" style="margin:0 3px 0 0">股' + (t.excluded ? '✕' : '') + '</span>' : '') + (rdHas(v) ? (v === 0 ? '0%' : rdPct(v)) : '—') + '</span>' +
      (t.rank ? '<span class="rd-circle">' + t.rank + '</span>' : '<span></span>') + '</div>';
  }).join('') + '<div class="rd-note">近 ' + rows.length + ' 週籌碼增減（新→舊）・紅＝週增、綠＝週減・<span class="rd-circle" style="width:14px;height:14px;font-size:9px">n</span>＝當週買超榜名次（前 10）' +
    (rows.some((t) => rdHas(t.capital)) ? '・<span class="rd-cap" style="margin:0">股</span>＝那週股本有變動（✕＝減資或股份轉換、總股數少 5% 以上而且籌碼% 超過 ±15，不列入排行）' : '') + '</div>';
}
function rdInstHtml(inst){
  if (!inst || ((!inst.weeks || !inst.weeks.length) && (!inst.days || !inst.days.length))){
    return '<div class="rd-note">三大法人：還沒有這檔的資料。</div>';
  }
  const weeks = inst.weeks || [];
  const max = Math.max(1, ...weeks.map((w) => Math.abs(w.total || 0)));
  const nice = (() => { const p = Math.pow(10, Math.floor(Math.log10(max))); const m = max / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; })();
  const fmtAxis = (v) => (Math.abs(v) >= 10000 ? (v / 10000).toFixed(1).replace(/\\.0$/, '') + '萬' : String(Math.round(v)));
  const cols = weeks.map((w) => {
    const h = Math.min(50, Math.abs(w.total || 0) / nice * 50);
    return '<div class="rd-inst-col"><div class="rd-inst-plot" title="' + rdMd(w.date) + ' 那週合計 ' + rdLots(w.total) + ' 張（' + w.days + ' 天）">' +
      (h ? '<i class="' + (w.total > 0 ? 'up' : 'down') + '" style="height:' + h.toFixed(1) + '%"></i>' : '') + '</div>' +
      '<div class="rd-inst-lab">' + rdMd(w.date) + '</div><div class="rd-inst-pct ' + rdCls(w.pct) + '">' + (rdHas(w.pct) ? rdPct(w.pct, 1) : '—') + '</div></div>';
  }).join('');
  const axis = '<div class="rd-inst-axis"><span>+' + fmtAxis(nice) + '</span><span>+' + fmtAxis(nice / 2) + '</span><span>0</span><span>-' + fmtAxis(nice / 2) + '</span><span>-' + fmtAxis(nice) + '</span></div>';
  const days = (inst.days || []).map((d) => '<tr><td>' + rdMd(d.date) + '</td><td class="' + rdCls(d.foreign) + '">' + rdLots(d.foreign) + '</td><td class="' + rdCls(d.trust) + '">' + rdLots(d.trust) + '</td><td class="' + rdCls(d.dealer) + '">' + rdLots(d.dealer) + '</td><td class="' + rdCls(d.total) + '"><b>' + rdLots(d.total) + '</b></td><td class="' + rdCls(d.pct) + '">' + (rdHas(d.pct) ? rdPct(d.pct, 1) : '—') + '</td></tr>').join('');
  return (weeks.length ? '<div class="rd-note" style="margin-top:0">週加總（合計買賣超，張）・柱下 %＝佔那週成交量</div><div class="rd-inst-wrap"><div class="rd-inst-cols">' + cols + '</div>' + axis + '</div>' : '') +
    (days ? '<div class="rd-note">近 5 日明細</div><table class="rd-itable"><thead><tr><th>日期</th><th>外資</th><th>投信</th><th>自營</th><th>合計</th><th>佔量%</th></tr></thead><tbody>' + days + '</tbody></table>' : '') +
    '<div class="rd-note">資料源：證交所／櫃買中心官方日資料（收盤後更新）</div>';
}
function rdStockCardHtml(s){
  const market = s.market === 'OTC' ? '上櫃' : (s.market === 'TSE' ? '上市' : '');
  return '<div class="rd-card" id="rdStockCard"><div class="rd-card-head"><span class="rd-name" data-rd-chart="' + s.code + '">' + rdEsc(s.name) + '</span><span class="rd-code">' + s.code + '</span>' +
    (s.rank ? '<span class="rd-badge">本週榜 <span class="rd-circle">' + s.rank + '</span></span>' : '') + rdMa(s.score) + rdCapTag(s.capital, !!s.excluded) + (s.outside ? '<span class="rd-badge rd-out-badge" title="不在莊爸追蹤的範圍（族群表＋他列過的族群外股票），籌碼% 照算、不進排行">範圍外</span>' : '') +
    '<span class="rd-big ' + rdCls(s.chip) + '">' + rdPct(s.chip) + '</span></div>' +
    rdKlineBox(s.code, true) + rdTrailHtml(s.trail) +
    '<div class="rd-sec-title" style="font-size:16px;margin-top:12px">三大法人 <small>' + (market ? market + '・' : '') + '張</small></div>' + rdInstHtml(s.inst) + '</div>';
}
function rdGroupCardHtml(s){
  if (!s.group){
    return '<div class="rd-card"><div class="rd-list-title">族群</div><div class="rd-note">' + rdEsc(s.name) + ' 不在我們的 43 個族群裡，沒有同族群可以比。</div></div>';
  }
  const members = s.groupMembers || [];
  const max = Math.max(0.01, ...members.map((m) => Math.abs(m.chip || 0)));
  const rows = members.map((m) => '<div class="rd-lrow' + (m.code === s.code ? ' rd-sel' : '') + '" data-rd-code="' + m.code + '"><span class="rd-c">' + m.code + '</span><span class="rd-n">' + rdEsc(m.name) + '</span>' +
    '<span class="rd-bar"><i class="' + (m.chip >= 0 ? 'up' : 'down') + '" style="width:' + Math.min(100, Math.abs(m.chip) / max * 100).toFixed(1) + '%"></i></span>' +
    '<span class="rd-val ' + rdCls(m.chip) + '">' + rdPct(m.chip) + '</span>' + rdMa(m.score) + '</div>').join('');
  return '<div class="rd-card"><div class="rd-list-head"><span class="rd-list-title">' + rdEsc(s.group) + ' 族群（籌碼暴增）</span>' +
    (rdHas(s.groupAvg) ? '<span class="rd-date-pill">前 5 檔平均 ' + rdPct(s.groupAvg) + '</span>' : '') + '</div>' +
    (rows || '<div class="rd-empty-list">這週同族群沒有集保資料。</div>') + '<div class="rd-note">資料週：' + String(s.groupWeek || s.week || '').replace(/-/g, '/') + '</div></div>';
}
function rdSearchHtml(){
  const code = radarState.code;
  let result = '';
  if (code){
    ensureRadarStock(code);
    const s = radarStockCache[code];
    if (s && s.status === 'ok') result = '<div class="rd-grid2">' + rdStockCardHtml(s) + rdGroupCardHtml(s) + '</div>';
    else if (s) result = '<div class="rd-card"><div class="rd-note">' + rdEsc(s.message || '還沒有資料') + '</div></div>';
    else if (radarStockError[code]) result = '<div class="rd-card"><div class="rd-note">' + rdEsc(radarStockError[code]) + '</div></div>';
    else result = '<div class="rd-card"><div class="rd-note">讀取 ' + rdEsc(code) + '…</div></div>';
  }
  return '<div><form class="rd-search" id="rdSearch" autocomplete="off"><input id="rdInput" inputmode="numeric" placeholder="輸入股號，例如 3094" value="' + rdEsc(radarState.query) + '" aria-label="股號">' +
    '<button type="submit">查詢（軌跡＋族群）</button>' + (code ? '<button type="button" class="rd-btn-sm" data-rd-clear="1">收起</button>' : '') + '</form>' +
    '<div class="rd-hint">輸入股號帶出「九週籌碼軌跡＋三大法人＋當週族群排名」；名單上的股票點一下也會帶到這裡，點股名或 K 線開大圖。</div>' +
    (result ? '<div style="margin-top:10px">' + result + '</div>' : '') + '</div>';
}
// 榜單一位小數用後端給的 chip1（還沒取兩位的值直接取一位，跟莊爸一樣：眾達 6.148 → 6.1，不是 6.15 → 6.2）
function rdListRows(rows, side){
  if (!rows.length) return '<div class="rd-empty-list">這週沒有' + (side === 'buy' ? '籌碼% ≥ 4' : '籌碼% ≤ −1.5') + ' 的股票。</div>';
  const max = Math.max(0.01, ...rows.map((r) => Math.abs(r.chip)));
  return rows.map((r) => '<div class="rd-lrow" data-rd-code="' + r.code + '"><span class="rd-c">' + r.code + '</span><span class="rd-n">' + rdEsc(r.name) + (r.star ? '<span class="rd-star" title="連續兩週上榜">★</span>' : '') + rdCapTag(r.capital) + rdVsTag(r.vs) + '</span>' +
    '<span class="rd-bar"><i class="' + (side === 'buy' ? 'up' : 'down') + '" style="width:' + Math.min(100, Math.abs(r.chip) / max * 100).toFixed(1) + '%"></i></span>' +
    '<span class="rd-val ' + (side === 'buy' ? 'rd-up' : 'rd-down') + '">' + rdPct(rdHas(r.chip1) ? r.chip1 : r.chip, 1) + '</span>' + rdMa(r.score) + '</div>').join('');
}
function rdListsHtml(d){
  const lists = d.lists || [];
  if (!lists.length) return '';
  const pick = lists.find((w) => w.date === radarState.listWeek) || lists[0];
  const chips = lists.map((w, i) => '<button class="rd-week' + (w.date === pick.date ? ' active' : '') + '" data-rd-week="' + w.date + '">' + (i === 0 && w.date === d.latest ? '本週 ' : '') + rdMdShort(w.date) + '</button>').join('');
  return '<section><div class="rd-sec-title">本週籌碼暴增榜<small>買超・賣超 排序・⭐＝連續兩週上榜</small></div><div class="rd-weeks">' + chips + '</div><div class="rd-grid2">' +
    '<div class="rd-card"><div class="rd-list-head"><span class="rd-list-title rd-up">▲ 買超榜（' + pick.buy.length + ' 檔）</span><span class="rd-date-pill">結算日 ' + rdMdShort(pick.date) + '</span></div>' + rdListRows(pick.buy, 'buy') + rdOutsideHtml(pick.outside && pick.outside.buy, 'buy') + '</div>' +
    '<div class="rd-card"><div class="rd-list-head"><span class="rd-list-title rd-down">▼ 賣超榜（' + pick.sell.length + ' 檔）</span><span class="rd-date-pill">結算日 ' + rdMdShort(pick.date) + '</span></div>' + rdListRows(pick.sell, 'sell') + rdOutsideHtml(pick.outside && pick.outside.sell, 'sell') + '</div>' +
    '</div></section>';
}
// 累積榜：後端給「全部」（06/18 起，allWeeks 週；不足 16 週時給 16 週）每週前十名的格子（舊到新），這裡照選的週數加總；n＝0 是全部
function rdCumAll(cum){ return Math.min(cum.allWeeks || cum.dates.length, cum.dates.length); }
function rdCumRows(d, n){
  const cum = d.cumulative || { dates: [], rows: [] };
  const k = Math.min(n || rdCumAll(cum), cum.dates.length);
  const dates = cum.dates.slice(cum.dates.length - k);
  const rows = [];
  (cum.rows || []).forEach((r) => {
    const grid = r.grid.slice(r.grid.length - k);
    const hits = grid.filter((g) => g[0] > 0);
    if (!hits.length) return;
    const sum = hits.reduce((a, g) => a + (Number(g[1]) || 0), 0);
    const recent = grid.slice(-4).filter((g) => g[0] > 0).length;
    rows.push({ r, grid, count: hits.length, avg: sum / hits.length, sum, best: Math.min(...hits.map((g) => g[0])), recent });
  });
  rows.sort((a, b) => b.sum - a.sum || b.count - a.count || a.best - b.best);
  return { dates, rows, weeks: k };
}
function rdCumHtml(d){
  const cum = d.cumulative || { dates: [] };
  if (!cum.dates.length) return '';
  const res = rdCumRows(d, radarState.window);
  const k = res.weeks;
  const shown = res.rows.slice(0, radarState.top);
  const all = rdCumAll(cum);
  const winOpts = RD_WINDOWS.filter((w) => w === 0 || w < all).map((w) => '<option value="' + w + '"' + (w === radarState.window ? ' selected' : '') + '>' + (w === 0 ? '全部 ' + all + ' 週' : '近 ' + w + ' 週') + '</option>').join('');
  const topOpts = RD_TOPS.map((t) => '<option value="' + t + '"' + (t === radarState.top ? ' selected' : '') + '>前 ' + t + ' 檔</option>').join('');
  const body = shown.map((x, i) => {
    const r = x.r, open = !!radarState.expanded[r.code];
    const share = x.count / k * 100;
    let html = '<tr class="rd-crow' + (open ? ' rd-open' : '') + '" data-rd-expand="' + r.code + '"><td class="rd-muted">' + (i + 1) + ' ' + (open ? '▾' : '▸') + '</td><td>' + r.code + '</td><td><span data-rd-code="' + r.code + '" style="cursor:pointer;text-decoration:underline dotted">' + rdEsc(r.name) + '</span></td>' +
      '<td><span class="rd-count ' + (x.count >= 3 ? 'gold' : 'line') + '">' + x.count + '</span></td>' +
      '<td><span class="rd-share"><i style="width:' + share.toFixed(0) + '%"></i></span>' + share.toFixed(0) + '%</td>' +
      '<td class="' + (x.recent ? '' : 'rd-muted') + '">' + x.recent + '/' + Math.min(4, k) + '</td><td>' + rdMa(r.score) + '</td>' +
      '<td>' + x.avg.toFixed(2) + '%</td><td><b>' + x.sum.toFixed(2) + '</b></td><td>#' + x.best + '</td><td class="rd-muted">' + rdEsc(r.group || '') + '</td></tr>';
    if (open){
      const cells = x.grid.map((g, j) => '<span class="rd-cell' + (g[0] ? ' gold' : '') + '"><span>' + rdMd(res.dates[j]) + '</span><b>' + (g[0] || '—') + '</b><span class="' + (g[0] ? '' : rdCls(g[1])) + '">' + (rdHas(g[1]) ? rdPct(g[1]) : '—') + '</span></span>').join('');
      html += '<tr class="rd-gridrow"><td colspan="11"><div class="rd-cells">' + cells + '</div></td></tr>';
    }
    return html;
  }).join('');
  return '<section><div class="rd-sec-title">上榜累積榜<small>' + (radarState.window ? '近 ' : '全部 ') + k + ' 週（集保結算 ' + rdMd(res.dates[0]) + ' ～ ' + rdMd(res.dates[res.dates.length - 1]) + '）・擠進當週買超榜前十名幾次</small></div>' +
    '<div class="rd-ctl"><label>回看 <select class="rd-select" id="rdWindow">' + winOpts + '</select></label><label>列出 <select class="rd-select" id="rdTop">' + topOpts + '</select></label></div>' +
    '<div class="rd-legend"><span class="rd-cell gold"><span>08/14</span><b>4</b><span>+7.97%</span></span><span>← 結算週<br>← 當週買超榜名次（只列到第 10）<br>← 當週籌碼增減</span><span>點任一列展開逐週格子：金色＝那週擠進前十，白色＝沒進榜。</span></div>' +
    (shown.length ? '<div class="rd-scroll"><table class="rd-table"><thead><tr><th></th><th>股號</th><th>股名</th><th>進榜次數<small>共 ' + k + ' 週</small></th><th>占比</th><th>近 4 週</th><th>均線分數</th><th>平均籌碼%</th><th>分數</th><th>最佳名次</th><th>族群</th></tr></thead><tbody>' + body + '</tbody></table></div>' : '<div class="rd-empty-list">這段期間沒有資料。</div>') +
    '<div class="rd-note"><b>分數怎麼算：</b>視窗內每一次擠進當週前十名就記一筆，把那幾週的籌碼% 加起來——等於「次數 × 平均籌碼%」，又常又猛的才排得到前面。<br>' +
    '<b>近 4 週</b>那欄是重點：次數多但近期 0/4 的，是「前一陣子很熱、現在已經掉下來」；次數多又近期還在的，才是「一路都在」。<br>' +
    '只算買超，籌碼減少的那幾週不計（展開後白格子若是負數，就是那週在賣）。名次只到第 10，所以次數最多就是週數。<br>' +
    '資料 ' + rdMd(res.dates[0]) + ' ～ ' + rdMd(res.dates[res.dates.length - 1]) + '，這段期間曾進前十的共 ' + res.rows.length + ' 檔。這是過去的籌碼統計，不是買賣建議。</div></section>';
}
function rdGroupsHtml(d){
  const groups = d.groups || [];
  if (!groups.length) return '';
  const top = groups.slice(0, (d.rules && d.rules.groupShow) || 10);
  const pick = groups.find((g) => g.name === radarState.group) || top[0];
  const max = Math.max(0.01, ...top.map((g) => Math.abs(g.avg)));
  const left = top.map((g, i) => '<div class="rd-grow' + (g.name === pick.name ? ' active' : '') + '" data-rd-group="' + rdEsc(g.name) + '"><span class="rd-c">' + (i + 1) + '</span><span class="rd-n">' + rdEsc(g.name) + '</span>' +
    '<span class="rd-bar"><i class="' + (g.avg >= 0 ? 'up' : 'down') + '" style="width:' + Math.min(100, Math.abs(g.avg) / max * 100).toFixed(1) + '%"></i></span><span class="rd-val ' + rdCls(g.avg) + '">' + rdPct(g.avg) + '</span></div>').join('');
  const mmax = Math.max(0.01, ...pick.members.map((m) => Math.abs(m.chip)));
  const right = pick.members.map((m) => '<div class="rd-lrow" data-rd-code="' + m.code + '"><span class="rd-c">' + m.code + '</span><span class="rd-n">' + rdEsc(m.name) + (m.rank ? ' <span class="rd-circle">' + m.rank + '</span>' : '') + '</span>' +
    '<span class="rd-bar"><i class="' + (m.chip >= 0 ? 'up' : 'down') + '" style="width:' + Math.min(100, Math.abs(m.chip) / mmax * 100).toFixed(1) + '%"></i></span>' +
    '<span class="rd-val ' + rdCls(m.chip) + '">' + rdPct(m.chip) + '</span>' + rdMa(m.score) + '</div>').join('');
  return '<section><div class="rd-sec-title">族群排名比較<small>週籌碼暴增 前十族群（族群裡籌碼% 最高 5 檔的平均）・' + rdMdShort(d.week) + '</small></div><div class="rd-groups">' +
    '<div class="rd-card">' + left + '<div class="rd-note">點族群名稱，右邊帶出那個族群這週的籌碼排名。</div></div>' +
    '<div class="rd-card"><div class="rd-list-head"><span class="rd-list-title">' + rdEsc(pick.name) + ' 當週籌碼排名</span><span class="rd-date-pill">前 5 平均 ' + rdPct(pick.avg) + '・' + pick.count + ' 檔</span></div>' + right + '</div>' +
    '</div></section>';
}
function rdStreakHtml(d){
  const st = d.streaks;
  if (!st) return '';
  const card = (title, block, six) => {
    const rows = block.rows || [];
    const max = Math.max(0.01, ...rows.map((r) => Math.abs(r.avg)));
    const body = rows.length ? rows.map((r) => '<div class="rd-srow' + (six ? '' : ' rd-three') + '" data-rd-code="' + r.code + '"><span class="rd-c">' + r.code + '</span><span class="rd-n">' + rdEsc(r.name) + '</span>' +
      '<span class="rd-bar"><i class="up" style="width:' + Math.min(100, Math.abs(r.avg) / max * 100).toFixed(1) + '%"></i></span>' +
      (six ? '<span class="rd-c">' + r.ups + '/' + block.weeks + '</span>' : '') + '<span class="rd-val ' + rdCls(r.avg) + '">' + rdPct(r.avg) + '</span>' + rdMa(r.score) + '</div>').join('')
      : '<div class="rd-empty-list">' + (block.weeks < (six ? 6 : 3) ? '集保週資料還不夠 ' + (six ? 6 : 3) + ' 週。' : '這段期間沒有符合的股票。') + '</div>';
    return '<div class="rd-card"><div class="rd-list-head"><span class="rd-list-title">' + title + '</span>' + (block.from ? '<span class="rd-range">' + rdMd(block.from) + '~' + rdMd(block.to) + '</span>' : '') + '</div>' + body + '</div>';
  };
  return '<section><div class="rd-sec-title">連續增排行<small>六週榜＝六週裡至少五週增（可漏一週）・三週榜＝連三週都增・都用窗口平均排序・右邊方塊＝均線分數/15</small></div><div class="rd-grid2">' +
    card('六週內五週增 前 20', st.six, true) + card('連三週增 前 20', st.three, false) + '</div></section>';
}
function rdHotHtml(d){
  const hot = d.hot;
  if (!hot || !hot.cards || !hot.cards.length) return '';
  const leaders = (hot.leaders || []).map((l) => '<button class="rd-chip" data-rd-code="' + l.code + '">' + rdEsc(l.group) + ' 👑 ' + rdEsc(l.name) + ' <b class="' + rdCls(l.chip) + '">' + rdPct(l.chip) + '</b></button>').join('');
  const cards = hot.cards.map((c, i) => {
    const open = i < 3 || !!radarState.kOpen[c.code];
    return '<div class="rd-card"><div class="rd-card-head"><span class="rd-name" data-rd-code="' + c.code + '">' + rdEsc(c.name) + '</span><span class="rd-code">' + c.code + '</span>' +
      (c.rank ? '<span class="rd-badge">本週榜 <span class="rd-circle">' + c.rank + '</span></span>' : '') + '<span class="rd-big ' + rdCls(c.chip) + '">' + rdPct(c.chip) + '</span></div>' +
      rdKlineBox(c.code, open) + rdTrailHtml(c.trail) + '</div>';
  }).join('');
  return '<section><div class="rd-sec-title">熱門股籌碼分析<small>本週買超榜前十名＋五大族群第一名</small></div><div class="rd-chips"><span>五大族群第一名</span>' + leaders + '</div><div class="rd-hot">' + cards + '</div></section>';
}
// ---- 籌碼週報（2026-10-10 使用者：照莊爸雷達頁上面那顆「籌碼週報・可回看 4 週」做）----
// 後端 /api/chip-weekly?week=：每週一份——本週摘要、上週榜對帳、族群排名、整族一起動、單獨上榜、賣超；可回看 4 週。
const rwCache = {}, rwLoading = {}, rwFailedAt = {}, rwError = {};
async function ensureWeekly(week){
  const key = week || 'latest';
  if (rwCache[key] || rwLoading[key]) return;
  if (rwFailedAt[key] && Date.now() - rwFailedAt[key] < 20000) return;
  rwLoading[key] = true;
  try {
    const res = await fetch('/api/chip-weekly' + (week ? '?week=' + encodeURIComponent(week) : ''));
    if (res.status === 404) throw new Error('後端還沒更新，合併部署後幾分鐘就會出現');
    if (!res.ok) throw new Error('chip-weekly http ' + res.status);
    const data = await res.json();
    if (!data || !data.status) throw new Error('資料格式不對');
    rwCache[key] = data;
    if (data.week) rwCache[data.week] = data;
    delete rwError[key];
  } catch (e) {
    rwFailedAt[key] = Date.now(); rwError[key] = e && e.message ? e.message : String(e);
  } finally {
    delete rwLoading[key];
  }
  if (radarVisible()) renderChips();
}
const rwPctSpan = (v, digits) => '<span class="' + rdCls(v) + '">' + (rdHas(v) ? rdPct(v, digits === undefined ? 1 : digits) : '—') + '</span>';
function rwWeekday(d){
  const w = new Date(String(d) + 'T12:00:00+08:00').getDay();
  return '週' + '日一二三四五六'[w];
}
function rwSettleText(d){
  const wd = rwWeekday(d);
  return '集保 ' + rdMdShort(d) + '（' + wd + '）結算' + (wd === '週五' ? '' : '（週五休市，結算日提前到' + wd + '）');
}
function rwCard(c, d, opts){
  const bits = [];
  if (rdHas(c.score)) bits.push('均線 <b>' + c.score + '</b> 分');
  if (c.chip > 0 && c.ups >= 2) bits.push('籌碼連 <b class="rd-up">' + c.ups + '</b> 週增加');
  if (c.star) bits.push('<span class="rw-star">⭐ 連續兩週上榜</span>');
  const after = d.nextWeek ? '<div class="rw-after">📈 一週後（' + rdMdShort(d.week) + ' → ' + rdMdShort(d.nextWeek) + ' 收）' + rwPctSpan(c.after) + '</div>' : '';
  const grp = c.group || (opts && opts.sell ? '不在族群表' : '');
  return '<div class="rw-card"><div><span class="rw-code" data-rd-chart="' + c.code + '">' + c.code + '</span> <span class="rw-name" data-rd-chart="' + c.code + '">' + rdEsc(c.name) + '</span>' +
    rdCapTag(c.capital) + rdVsTag(c.vs) + '<div class="rw-grp">' + rdEsc(grp) + '</div></div>' +
    '<div><span class="rw-pill">籌碼 ' + rdPct(c.chip1, 1) + '</span><div class="rw-px">收 ' + (rdHas(c.close) ? c.close : '—') + '・本週 ' + rwPctSpan(c.week) + '</div></div>' +
    '<div class="rw-c3">' + (bits.join('・') || '<span class="rd-muted">—</span>') + after + '</div></div>';
}
function rwSummaryHtml(d){
  const s = d.summary || {}, c = d.counts || {};
  const items = [];
  if (s.top) items.push('族群排名第一：<b>' + rdEsc(s.top.name) + '</b>' + (s.top.together ? '，籌碼榜也上了 ' + s.top.listed + ' 檔——兩邊對上' : ''));
  if (d.prevWeek) items.push('前十新進：' + ((s.newIn || []).map(rdEsc).join('、') || '無') + '；掉出：' + ((s.dropped || []).map(rdEsc).join('、') || '無'));
  items.push('整族一起動 <b class="rd-up">' + c.togetherGroups + '</b> 族 ' + c.togetherStocks + ' 檔' + ((s.together || []).length ? '：' + s.together.map((t) => rdEsc(t.name) + ' ' + t.count + ' 檔').join('、') : ''));
  items.push('連續兩週上榜：' + ((s.twoWeeks || []).map((r) => r.code + ' ' + rdEsc(r.name)).join('、') || '無'));
  items.push('賣超但股價逆勢漲（本週 ≥3%）：' + (s.against || []).length + ' 檔' + ((s.against || []).length ? '，' + s.against.slice(0, 4).map((r) => rdEsc(r.name) + ' ' + rwPctSpan(r.week)).join('、') : ''));
  if (s.recon) items.push('上週榜對帳：買超 ' + s.recon.buyCount + ' 檔平均 ' + rwPctSpan(s.recon.buyAvg, 2) + '，同期加權 ' + rwPctSpan(s.recon.taiex, 2));
  return '<section id="rw-sum"><div class="rd-sec-title">本週摘要<small>集保 ' + rdMdShort(d.week) + ' 結算</small></div><ol class="rw-sum">' + items.map((t) => '<li>' + t + '</li>').join('') + '</ol>' +
    '<div class="rw-stats"><div class="rw-stat"><b>' + c.buy + ' 檔</b><span>買超上榜</span></div><div class="rw-stat"><b>' + c.sell + ' 檔</b><span>賣超</span></div>' +
    '<div class="rw-stat"><b>' + c.togetherGroups + ' 族</b><span>整族一起動（' + c.togetherStocks + ' 檔）</span></div></div></section>';
}
function rwReconHtml(d){
  const r = d.recon;
  const title = '<div class="rd-sec-title">上週榜對帳' + (r ? '<small>' + rdMdShort(r.from) + ' 結算那份榜單，' + rdMdShort(r.from) + ' 收 → ' + rdMdShort(r.to) + ' 收</small>' : '') + '</div>';
  if (!r) return '<section id="rw-recon">' + title + '<div class="rd-note">這是最早的一週，沒有上一週的榜單可以對帳。</div></section>';
  const box = (v, label) => '<div class="rw-stat"><b class="' + rdCls(v) + '">' + (rdHas(v) ? rdPct(v, 2) : '—') + '</b><span>' + label + '</span></div>';
  const rows = (side) => {
    const best = side.best || [], worst = side.worst || [];
    const tr = (x, gap) => '<tr' + (gap ? ' class="rw-gap"' : '') + '><td>' + x.code + '</td><td><b data-rd-chart="' + x.code + '" style="cursor:pointer">' + rdEsc(x.name) + '</b></td><td class="rd-muted">' + rdEsc(x.group || '—') + '</td><td>' + rwPctSpan(x.chg) + '</td></tr>';
    return best.map((x) => tr(x, false)).join('') + worst.map((x, i) => tr(x, i === 0)).join('');
  };
  const b = r.buy, s = r.sell;
  let note = '';
  if (rdHas(b.avg) && rdHas(r.taiex)){
    const diff = b.avg - r.taiex, down = b.priced - b.up, worst = (b.worst && b.worst.length ? b.worst[b.worst.length - 1] : null);
    note = '買超榜' + (diff >= 0 ? '贏' : '輸') + '同期加權 ' + Math.abs(diff).toFixed(2) + ' 個百分點' + (down > 0 ? '；但買超榜也有 ' + down + ' 檔收黑' + (worst ? '，最弱 ' + rdEsc(worst.name) + ' ' + rdPct(worst.chg, 1) : '') : '') + '。籌碼是方向不是保證，一週也只是一週。';
  }
  return '<section id="rw-recon">' + title + '<div class="rw-stats">' + box(b.avg, '買超 ' + b.count + ' 檔平均（收紅 ' + b.up + '）') + box(s.avg, '賣超 ' + s.count + ' 檔平均（收紅 ' + s.up + '）') + box(r.taiex, '同期加權') + '</div>' +
    '<div class="rw-recon-tables"><div class="rd-card"><div class="rd-list-title rd-up">買超榜・最強五／最弱三</div><table class="rw-rtable"><tbody>' + rows(b) + '</tbody></table></div>' +
    '<div class="rd-card"><div class="rd-list-title rd-down">賣超榜・最強五／最弱三</div><table class="rw-rtable"><tbody>' + rows(s) + '</tbody></table></div></div>' +
    (note ? '<div class="rw-notebox">' + note + '</div>' : '') + '</section>';
}
function rwRankingHtml(d){
  const mv = (m) => {
    if (!m) return '<span class="rw-mv same"></span>';
    if (m.kind === 'new') return '<span class="rw-mv new">新進</span>';
    if (m.kind === 'same') return '<span class="rw-mv same">持平</span>';
    return '<span class="rw-mv ' + m.kind + '">' + (m.kind === 'up' ? '↑' : '↓') + ' ' + m.n + '</span>';
  };
  const rows = (d.ranking || []).map((g) => '<div class="rw-grow' + (g.together ? ' rw-hit' : '') + '"><span class="rd-muted">' + g.rank + '</span><span class="rw-n">' + rdEsc(g.name) + '</span>' +
    '<span class="' + rdCls(g.avg) + '">' + rdPct(g.avg, 2) + '</span>' + mv(g.move) +
    '<span class="rw-l">' + (g.listed.length ? '籌碼榜上了 ' + g.listed.length + ' 檔：' + g.listed.map((x) => rdEsc(x.name)).join('、') : '<i>本週籌碼榜沒有這族的股票</i>') + '</span></div>').join('');
  return '<section id="rw-rank"><div class="rd-sec-title">族群排名<small>整族籌碼週增排名（族群裡籌碼% 最高 5 檔平均；千元是價格帶不列）' + (d.prevWeek ? '・名次變化對 ' + rdMdShort(d.prevWeek) + ' 那週' : '') + '</small></div>' +
    '<div class="rw-rank">' + rows + '</div><div class="rw-banner">族群排名是「整族在動」，籌碼榜是「有人在收」——紅框＝兩邊對上</div></section>';
}
function rwTogetherHtml(d){
  const sub = '同族 2 檔以上上買超榜・本週漲跌＝' + (d.prevWeek ? rdMdShort(d.prevWeek) + ' 收 → ' : '') + rdMdShort(d.week) + ' 收' + (d.nextWeek ? '・一週後＝' + rdMdShort(d.week) + ' 收 → ' + rdMdShort(d.nextWeek) + ' 收' : '');
  const groups = (d.together || []).map((t) => '<div class="rw-ghead"><b>' + rdEsc(t.name) + '</b><span class="rw-tagc">族群排名 ' + (t.rank ? '第 ' + t.rank : '榜外') + '</span>' +
    (d.prevWeek ? '<span class="rw-tagc dark">上週 ' + (t.prevRank ? '第 ' + t.prevRank : '榜外') + '</span>' : '') + '<span class="rw-tagc">' + t.count + ' 檔上榜</span></div>' +
    t.cards.map((c) => rwCard(c, d)).join('')).join('');
  return '<section id="rw-together"><div class="rd-sec-title">整族一起動<small>' + sub + '</small></div>' + (groups || '<div class="rd-note">這週沒有同族 2 檔以上一起上買超榜。</div>') + '</section>';
}
function rwSingleHtml(d){
  const cards = (d.single || []).map((c) => rwCard(c, d)).join('');
  const ng = d.nogroup || [];
  const note = ng.length ? '<div class="rw-notebox">另有 ' + ng.length + ' 檔不在族群表（沒有族群歸屬）：' + ng.map((c) => '<span data-rd-chart="' + c.code + '" style="cursor:pointer">' + c.code + ' ' + rdEsc(c.name) + '</span>（籌碼 ' + rdPct(c.chip1, 1) + '，本週 ' + rwPctSpan(c.week) + '）').join('、') + '</div>' : '';
  return '<section id="rw-single"><div class="rd-sec-title">單獨上榜<small>' + (d.single || []).length + ' 檔・族群裡只有這一檔上榜</small></div>' + cards + note +
    '<div class="rw-banner">單獨上榜不是比較差——差的是佐證的層數，不是好壞</div></section>';
}
function rwSellHtml(d){
  const cards = (d.sell || []).map((c) => rwCard(c, d, { sell: true })).join('');
  const ag = d.against || [];
  const note = ag.length ? '<div class="rw-notebox">⚠ 賣超榜有 ' + ag.length + ' 檔本週股價逆勢漲 3% 以上：' + ag.map((c) => rdEsc(c.name) + ' ' + rwPctSpan(c.week)).join('、') + '——「籌碼翻賣超、股價卻還在漲」最容易套在高點，籌碼是先行的。</div>' : '';
  return '<section id="rw-sell"><div class="rd-sec-title">賣超<small>' + (d.counts ? d.counts.sell : 0) + ' 檔・依籌碼減少最多排，列前 ' + ((d.rules && d.rules.sellShow) || 10) + '</small></div>' + cards + note + '</section>';
}
function rwReadHtml(){
  return '<section id="rw-read"><div class="rd-sec-title">怎麼讀<small>順序不能反</small></div><ol class="rw-read">' +
    '<li><b>族群</b>：先看族群排名有沒有在動，紅框的族（排名跟籌碼榜對上）優先。</li>' +
    '<li><b>籌碼</b>：有沒有人在收——連續兩週上榜、籌碼連續增加的，主力不是買一週就走。</li>' +
    '<li><b>均線分數</b>：這一檔站得穩不穩，12 分以上結構最強，7 以下只描邊。</li>' +
    '<li><b>型態</b>：最後才看進場點——籌碼榜只是候選名單，不是買進理由。</li></ol>' +
    '<div class="rd-note">依集保結算與公開行情整理的籌碼統計，只是教學紀錄，不是投資建議；投資有風險，盈虧自負。</div></section>';
}
function rwHtml(){
  const key = radarState.rwWeek || 'latest';
  ensureWeekly(radarState.rwWeek || '');
  const d = rwCache[key];
  const back = '<button class="rw-back" data-rw-view="radar">← 回籌碼暴增雷達</button>';
  const head = (sub) => '<div><span class="rd-tag">盤後籌碼・每週更新</span><div class="rd-headrow"><div class="rd-title">籌碼週報</div>' + back + '</div>' + sub + '</div>';
  if (!d){
    return '<div class="rd-wrap">' + head('') + '<div class="signal-empty"><div class="se-title">' + (rwError[key] ? '讀取失敗' : '讀取中…') + '</div><div class="se-sub">' + rdEsc(rwError[key] || '正在整理這週的籌碼週報（第一次要抓股價和加權指數，稍等幾秒）。') + '</div></div></div>';
  }
  if (d.status !== 'ok') return '<div class="rd-wrap">' + head('') + '<div class="signal-empty"><div class="se-title">還沒有集保週資料</div><div class="se-sub">' + rdEsc(d.message || '') + '</div></div></div>';
  const weeks = (d.weeks || []).map((w, i) => '<button class="rd-week' + (w === d.week ? ' active' : '') + '" data-rw-week="' + (i === 0 && w === d.latest ? '' : w) + '">' + rdMdShort(w) + (i === 0 && w === d.latest ? ' 本週' : '') + '</button>').join('');
  const nav = [['rw-sum', '本週摘要'], ['rw-recon', '上週榜對帳'], ['rw-rank', '族群排名'], ['rw-together', '整族一起動'], ['rw-single', '單獨上榜'], ['rw-sell', '賣超'], ['rw-read', '怎麼讀']]
    .map((x) => '<button data-rw-jump="' + x[0] + '">' + x[1] + '</button>').join('');
  const sub = '<div class="rd-sub">' + rwSettleText(d.week) + '・資料：集保股權分散表＋日K收盤＋證交所加權指數</div>' +
    '<div class="rd-pill">ⓘ 週報每週同一份排名；集保週五結算、週六更新；可回看 ' + ((d.rules && d.rules.weeks) || 4) + ' 週。完整榜單和個股軌跡在籌碼暴增雷達。</div>';
  const def = '<div class="rd-intro rw-def"><b>籌碼暴增</b>＝大戶手上的股票這一週變多；<b>買超榜</b>＝籌碼增加 ≥4%、<b>賣超榜</b>＝減少 ≥1.5%；' +
    '<b>整族一起動</b>＝同族 2 檔以上同時上買超榜（兄弟姊妹多，佐證多一層）；<b>單獨上榜</b>＝族群裡只有它一檔在榜上。這只是強度分級，不是選股名單。</div>';
  return '<div class="rd-wrap">' + head(sub) + '<div class="rd-weeks">' + weeks + '</div><div class="rw-nav">' + nav + '</div>' + def +
    rwSummaryHtml(d) + rwReconHtml(d) + rwRankingHtml(d) + rwTogetherHtml(d) + rwSingleHtml(d) + rwSellHtml(d) + rwReadHtml() + '</div>';
}
function rdOutsideHtml(rows, side){
  if (!rows || !rows.length) return '';
  const open = !!radarState.outOpen[side];
  return '<div class="rd-outside"><button class="rd-outside-btn" data-rd-outside="' + side + '">' + (open ? '▾' : '▸') + ' 另有 ' + rows.length + ' 檔不在莊爸的追蹤範圍（不進排行）</button>' +
    (open ? '<div class="rd-outside-list">' + rows.map((r) => '<span data-rd-code="' + r.code + '">' + r.code + ' ' + rdEsc(r.name) + ' <b class="' + rdCls(r.chip1) + '">' + rdPct(r.chip1, 1) + '</b></span>').join('') + '</div>' : '') + '</div>';
}
function radarHtml(){
  if (radarState.view === 'weekly') return rwHtml();
  ensureRadar(false);
  const d = radarData;
  const wbtn = '<button class="rd-weekly-btn" data-rw-view="weekly">📰 籌碼週報<small>' + (d && d.latest ? rdMdShort(d.latest) + ' 結算・' : '') + '可回看 4 週</small></button>';
  const head = '<div><span class="rd-tag">盤後籌碼・互動版</span><div class="rd-headrow"><div class="rd-title">籌碼暴增雷達</div>' + wbtn + '</div>' +
    '<div class="rd-sub">集保週資料 ' + (d && d.week ? String(d.week).replace(/-/g, '/') : '—') + '（每週五結算）・均線分數 ' + (d && d.scoreDate ? rdMd(d.scoreDate) + ' 收盤' : '—') + (d && d.universe ? '・莊爸的範圍 ' + d.universe + ' 檔' + (d.market ? '（全市場 ' + d.market + ' 檔）' : '') : '') + '</div>' +
    '<div class="rd-pill">ⓘ 每週更新一次——集保在每週五結算、週六公布，整個下一週看到的都是同一份；個股的三大法人是每個交易日收盤後更新。</div></div>';
  const intro = '<div class="rd-intro"><p>這頁看的是「大戶手上的股票變多還是變少」：集保 400 張以上的大戶，這週持股比上週多了（或少了）總股數的幾 %。</p>' +
    '<p>籌碼暴增代表主力在收貨、把股票買進口袋——也就是主力進場，若再搭配型態，有機會續強；反過來變少，就是主力在鬆手。<b class="rd-up">紅色是增加</b>、<b class="rd-down">綠色是減少</b>。</p>' +
    '<p>連續兩週上榜、而且同族群其他股票也一起增加，是最值得盯的組合。⭐＝連續兩週上榜——主力不是買一週就走，是連著兩週都在收。</p>' +
    '<p>籌碼%：x＝（這週 400 張以上大戶持股 − 上週）÷ 這週總股數 ×100；大戶增加顯示 3×√x（小幅增加也看得出來）、減少照原樣（跟莊爸的算法一樣）。每列最後的方塊＝均線分數（滿分 15，每個交易日收盤後更新）：12 分以上實心金＝位置最強、8～11 半填、7 以下只描邊。</p>' +
    '<p>範圍跟莊爸一樣：只算他追蹤的股票——族群表＋他名單上出現過的族群外股票（用他 9/18～10/08 四週的籌碼週報對過，買超、賣超一檔不差）。不在範圍內、但籌碼% 過門檻的，列在每張榜下面的「另有 N 檔不在範圍」，點開看得到。</p>' +
    '<p>那週有增資、減資的（總股數變動）名單上標<span class="rd-cap">股本±x%</span>，增資、減資都照算（跟莊爸一樣，例如佳大 9/24 私募、奇偶 9/18 減資）。上一週集保沒有這檔（減資、停止過戶那週集保不出資料）就改跟更早一週比，名單上標<span class="rd-cap">比 9/24</span>。累積榜的「全部」跟莊爸一樣從 06/18 那週算起。</p></div>';
  if (!d){
    return '<div class="rd-wrap">' + head + '<div class="signal-empty"><div class="se-title">' + (radarError ? '讀取失敗' : '讀取中…') + '</div><div class="se-sub">' + rdEsc(radarError || '正在抓集保週資料。') + '</div></div></div>';
  }
  if (d.status !== 'ok'){
    return '<div class="rd-wrap">' + head + intro + '<div class="signal-empty"><div class="se-title">還沒有集保週資料</div><div class="se-sub">' + rdEsc(d.message || '') + '（後端會從鏡像匯入近 18 週，第一次大約要幾分鐘）</div></div></div>';
  }
  return '<div class="rd-wrap">' + head + intro + rdSearchHtml() + rdListsHtml(d) + rdCumHtml(d) + rdGroupsHtml(d) + rdStreakHtml(d) + rdHotHtml(d) + '</div>';
}
function radarShowStock(code){
  code = String(code || '').trim().toUpperCase();
  if (!/^[0-9A-Z]{4,6}$/.test(code)) return;
  radarState.code = code; radarState.query = code; radarState.scrollTo = 'rdSearch';
  delete radarStockFailedAt[code];
  renderChips();
}
function radarAfterRender(hadFocus, caret){
  // 背景資料回來重畫時，正在打字的搜尋框不能被洗掉：重新聚焦、游標放回原位
  if (hadFocus){
    const input = document.getElementById('rdInput');
    if (input){ input.focus(); try { input.setSelectionRange(caret, caret); } catch (e) { /* 部分輸入法不支援 */ } }
  }
  if (radarState.scrollTo){
    const el = document.getElementById(radarState.scrollTo);
    radarState.scrollTo = '';
    if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}
function radarOpenChart(code){
  const name = (radarStockCache[code] && radarStockCache[code].name) || '';
  if (!useFloatingCharts()){
    document.getElementById('chipsModal').classList.add('behind-chart');
    document.getElementById('signalModal').classList.add('behind-chart');
  }
  openStockChart(code, name);
}
function radarClick(e){
  const view = e.target.closest('[data-rw-view]');
  if (view){
    radarState.view = view.dataset.rwView; renderChips();
    const body = document.getElementById('chipsBody'); if (body) body.scrollTop = 0;
    return true;
  }
  const rweek = e.target.closest('[data-rw-week]');
  if (rweek){ radarState.rwWeek = rweek.dataset.rwWeek; renderChips(); return true; }
  const jump = e.target.closest('[data-rw-jump]');
  if (jump){ const el = document.getElementById(jump.dataset.rwJump); if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' }); return true; }
  const outside = e.target.closest('[data-rd-outside]');
  if (outside){ const k = outside.dataset.rdOutside; radarState.outOpen[k] = !radarState.outOpen[k]; renderChips(); return true; }
  const week = e.target.closest('[data-rd-week]');
  if (week){ radarState.listWeek = week.dataset.rdWeek; renderChips(); return true; }
  const grp = e.target.closest('[data-rd-group]');
  if (grp){ radarState.group = grp.dataset.rdGroup; renderChips(); return true; }
  const kopen = e.target.closest('[data-rd-kopen]');
  if (kopen){ radarState.kOpen[kopen.dataset.rdKopen] = true; renderChips(); return true; }
  const chart = e.target.closest('[data-rd-chart]');
  if (chart){ radarOpenChart(chart.dataset.rdChart); return true; }
  if (e.target.closest('[data-rd-clear]')){ radarState.code = ''; renderChips(); return true; }
  const code = e.target.closest('[data-rd-code]');
  if (code){ radarShowStock(code.dataset.rdCode); return true; }
  const exp = e.target.closest('[data-rd-expand]');
  if (exp){ const c = exp.dataset.rdExpand; radarState.expanded[c] = !radarState.expanded[c]; renderChips(); return true; }
  return false;
}
document.getElementById('chipsBody').addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'rdSearch'){
    e.preventDefault();
    const input = document.getElementById('rdInput');
    radarState.query = input ? input.value : '';
    const m = String(radarState.query).match(/[0-9]{4,6}[A-Z]?/i);
    if (m) radarShowStock(m[0]);
  }
});
document.getElementById('chipsBody').addEventListener('input', (e) => {
  if (e.target && e.target.id === 'rdInput') radarState.query = e.target.value;
});
document.getElementById('chipsBody').addEventListener('change', (e) => {
  if (!e.target) return;
  if (e.target.id === 'rdWindow'){ radarState.window = Number(e.target.value) || 0; renderChips(); }
  if (e.target.id === 'rdTop'){ radarState.top = Number(e.target.value) || 15; renderChips(); }
});

// ---- 波段日報（2026-09-26 使用者：照「波段精選日報」的樣子做，第一階段用現有資料）----
// 後端每個交易日收盤後整理一份（/api/swing-report），以資料基準日為鍵保存；這裡照日期切換、五個段落顯示。
const SWING_SECTIONS = [
  { key: 'summary', label: '今日摘要' }, { key: 'disposition', label: '處置動態' }, { key: 'etf', label: '主動式基金' }, { key: 'groups', label: '產業觀察' },
  { key: 'chips', label: '籌碼面' }, { key: 'tech', label: '技術面' }, { key: 'ma', label: '體質轉強' },
];   // 2026-10-04 使用者：黑龍回測搬到獨立面板（下方導覽列「創高黑龍」）
let swingState = { section: 'summary', date: '', groupsLimit: 12, etfOpen: {} };   // etfOpen: 主動式基金各檔展開全部
const swingCache = {};      // date('' = 最新) -> payload
const swingLoading = {};
const swingFailedAt = {};
async function ensureSwing(date){
  const key = date || '';
  if (swingCache[key] || swingLoading[key]) return;
  if (swingFailedAt[key] && Date.now() - swingFailedAt[key] < 30000) return;
  swingLoading[key] = true;
  try {
    const res = await fetch('/api/swing-report' + (date ? '?date=' + encodeURIComponent(date) : ''));
    if (!res.ok) throw new Error('swing-report http ' + res.status);
    const data = await res.json();
    if (!data || !data.status) throw new Error('bad payload');
    swingCache[key] = data;
    if (data.date && data.status === 'ok') swingCache[data.date] = data;
  } catch (e) {
    swingFailedAt[key] = Date.now();
  } finally {
    delete swingLoading[key];
  }
  if (!document.getElementById('swingModal').hidden) renderSwing();
}
function swingData(){ ensureSwing(swingState.date); return swingCache[swingState.date || '']; }
const swMmdd = (d) => (d ? String(d).slice(5).replace('-', '/') : '');
function swLots(v){
  if (v === null || v === undefined) return '—';
  const sign = v > 0 ? '+' : '';
  return Math.abs(v) >= 10000 ? sign + (v / 10000).toFixed(1) + ' 萬張' : sign + Math.round(v).toLocaleString('en-US') + ' 張';
}
function swPct(v, digits){ return v === null || v === undefined ? '—' : (v > 0 ? '+' : '') + Number(v).toFixed(digits === undefined ? 2 : digits) + '%'; }
const swHas = (v) => v !== null && v !== undefined;
const swYm = (ym) => (ym ? String(ym).replace('-', '/') : '');                       // 2026-08 → 2026/08
const swMonth = (ym) => (ym ? parseInt(String(ym).slice(5), 10) + ' 月' : '');      // 2026-08 → 8 月
// 第二階段（2026-09-26）：本益比、月營收年增、集保 400 張以上大戶週變化；沒接到的欄位不顯示
function swingFundLineHtml(x){
  const parts = [];
  if (swHas(x.pe)) parts.push('本益比 <b>' + Number(x.pe).toFixed(1) + '</b>' + (swHas(x.peGroupAvg) ? '<span class="muted">（族群均 ' + Number(x.peGroupAvg).toFixed(1) + '）</span>' : ''));
  if (swHas(x.revenueYoy)) parts.push(swMonth(x.revenueYm) + '營收年增 <b class="' + dirClass(x.revenueYoy) + '">' + swPct(x.revenueYoy, 1) + '</b>');
  if (swHas(x.weekPct) || swHas(x.bigPct)){
    // 週變化要有前一週的集保資料才算得出來；剛接上時只有持股比例
    let t = swHas(x.weekPct) ? '大戶週' + (x.weekPct >= 0 ? '增' : '減') + ' <b class="' + dirClass(x.weekPct) + '">' + swPct(x.weekPct, 1) + '</b>' + (x.weeks > 0 ? '（連 ' + x.weeks + ' 週）' : '') : '';
    if (swHas(x.bigPct)) t += '<span class="muted">' + (t ? '・' : '') + '大戶持股 ' + Number(x.bigPct).toFixed(1) + '%' + (x.tdccDate ? '（' + swMmdd(x.tdccDate) + '）' : '') + '</span>';
    parts.push(t);
  }
  return parts.length ? '<div class="sw-line sw-fund">' + parts.join('・') + '</div>' : '';
}
function swingFundBasisText(b){
  return (b.peDate ? '本益比 ' + swMmdd(b.peDate) + '（' + (b.peCount || 0) + ' 檔）' : '本益比還沒進來') +
    '・' + (b.revenueYm ? '月營收 ' + swYm(b.revenueYm) + '（' + (b.revenueCount || 0) + ' 檔）' : '月營收還沒進來') +
    '・' + (b.tdccDate ? '集保大戶 ' + swMmdd(b.tdccDate) + '（' + (b.tdccCount || 0) + ' 檔）' : '集保週籌碼還沒進來');
}
function swingDatePillsHtml(data){
  const dates = (data && data.dates) || [];
  const btn = (value, label, active) => '<button class="chart-tab chips-btn sw-date-btn' + (active ? ' active' : '') + '" data-date="' + value + '">' + label + '</button>';
  const latest = dates[0] || '';
  return '<div class="chips-controls"><div class="combo-filter-bar">' +
    btn('', '最新' + (latest ? ' ' + swMmdd(latest) : ''), !swingState.date) +
    dates.slice(1, 10).map((d) => btn(d, swMmdd(d), swingState.date === d)).join('') + '</div></div>';
}
function swingBasisHtml(data){
  const b = data.basis || {};
  const inst = b.hasInst ? '法人資料已齊（5 日＝' + (b.instDates || []).slice().reverse().map(swMmdd).join('～') + '）' : '法人資料還沒進來，籌碼相關的判斷等資料齊了會自動更新';
  return '<div class="sw-basis">資料基準 ' + swMmdd(data.date) + ' 收盤・隔天盤前讀・' + inst + '・主力 5 日＝' + ((b.mfDates || []).length ? (b.mfDates || []).slice().reverse().map(swMmdd).join('～') : '沒有資料') +
    '・個股 ' + (b.stocks || 0) + ' 檔（日K滿 240 天可算均線分數的 ' + (b.withScore || 0) + ' 檔）・' + swingFundBasisText(b) + '・整理時間 ' + String(data.generatedAt || '').slice(11, 16) + '</div>';
}
function swingCardHtml(x, opts){
  const risks = (x.risks || []).length ? '<div class="sw-risk">⚠️ ' + x.risks.join('、') + '</div>' : '';
  const health = opts && opts.health && x.health !== null && x.health !== undefined ? '<span class="sw-health">體質 ' + x.health + '/7</span>' : '';
  const scoreText = x.score === null || x.score === undefined ? '—' : (x.prevScore !== null && x.prevScore !== undefined && x.prevScore !== x.score ? x.prevScore + '→<b>' + x.score + '</b>' : '<b>' + x.score + '</b>');
  const instText = x.inst5 === null || x.inst5 === undefined ? '法人 5 日 —'
    : '法人 5 日 <span class="' + dirClass(x.inst5) + '">' + swLots(x.inst5) + (x.inst5Pct !== null && x.inst5Pct !== undefined ? '（股本 ' + swPct(x.inst5Pct, 1) + '）' : '') + '</span>' +
      (x.instStreak > 0 ? '・連買 ' + x.instStreak + ' 天' : x.instStreak < 0 ? '・連賣 ' + (-x.instStreak) + ' 天' : '');
  const mfText = x.mf5 === null || x.mf5 === undefined ? '' : '・主力 5 日 <span class="' + dirClass(x.mf5) + '">' + swLots(x.mf5) + '</span>' + (x.mfStreak > 0 ? '（連買 ' + x.mfStreak + ' 天）' : x.mfStreak < 0 ? '（連賣 ' + (-x.mfStreak) + ' 天）' : '');
  return '<div class="sw-card' + (opts && opts.green ? ' green' : '') + '" data-code="' + x.code + '" data-name="' + x.name + '" role="button" tabindex="0">' +
    '<div class="sw-code">' + x.code + '</div><div class="sw-name">' + x.name + chipsFlagPillsHtml(x.code) + '</div>' +
    '<div class="sw-group">' + (x.group || '—') + (x.hot ? '<span class="sw-hot">熱門族</span>' : '') + '</div>' +
    '<div class="sw-pill">' + x.tag + '</div>' + health +
    '<div class="sw-line">收 ' + num2(x.close) + ' <span class="' + dirClass(x.changePct || 0) + '">' + swPct(x.changePct, 1) + '</span>' + (x.aboveMa20Pct !== null && x.aboveMa20Pct !== undefined ? '<span class="muted">・月線之' + (x.aboveMa20Pct >= 0 ? '上 ' : '下 ') + Math.abs(x.aboveMa20Pct).toFixed(1) + '%</span>' : '') + '</div>' +
    '<div class="sw-line">' + instText + mfText + '・均線 ' + scoreText + '</div>' +
    swingFundLineHtml(x) +
    '<div class="sw-def">防守 <b>月線 ' + num2(x.defense.ma20) + '</b> / <b>三日低 ' + num2(x.defense.threeDayLow) + '</b></div>' +
    risks + '</div>';
}
function swingGroupCardHtml(g){
  const cold = g.aboveRatio < 0.5 && g.inst5 <= 0;
  return '<div class="sw-gcard' + (cold ? ' cold' : '') + '"><div><span class="sw-gname">' + g.name + '</span><span class="sw-gbadge">收盤排名 ' + g.rank + '</span>' + (g.hot ? '<span class="sw-hot">熱門族</span>' : '') + '</div>' +
    '<div class="sw-gline">站上月線 <b class="' + (g.aboveRatio >= 0.5 ? 'up' : 'down') + '">' + g.aboveMa20 + '/' + g.members + '</b>　法人 5 日 <b class="' + dirClass(g.inst5) + '">' + swLots(g.inst5) + '</b></div>' +
    '<div class="sw-gline">均線分數平均 <b>' + (g.avgScore === null || g.avgScore === undefined ? '—' : g.avgScore) + '</b>　今天真穿月線 <b>' + g.crossed + '</b> 檔　當天均漲 <b class="' + dirClass(g.avgChange) + '">' + swPct(g.avgChange) + '</b></div>' +
    swingGroupFundHtml(g) +
    '<div class="sw-gjudge">' + g.judge + '</div></div>';
}
function swingGroupFundHtml(g){
  const parts = [];
  if (swHas(g.peAvg)) parts.push('本益比均 <b>' + g.peAvg + '</b>');
  if (swHas(g.revenueYoyMedian)) parts.push('營收年增中位 <b class="' + dirClass(g.revenueYoyMedian) + '">' + swPct(g.revenueYoyMedian, 1) + '</b>');
  if (swHas(g.weekPct)) parts.push('大戶週增均 <b class="' + dirClass(g.weekPct) + '">' + swPct(g.weekPct, 1) + '</b>');
  return parts.length ? '<div class="sw-gline">' + parts.join('　') + '</div>' : '';
}
// 上一週籌碼那一組（2026-09-26 第三階段）：一週前那份的籌碼面精選，這一週表現如何
function swingLastWeekCardHtml(x){
  const bad = x.aboveMa20 === false;
  const verdict = x.verdict ? '<div class="sw-verdict' + (bad ? ' bad' : '') + '">' + x.verdict + '</div>' : '';
  if (x.changePct === null || x.changePct === undefined){
    return '<div class="sw-card lw" data-code="' + x.code + '" data-name="' + (x.name || '') + '" role="button" tabindex="0">' +
      '<div class="sw-code">' + x.code + '</div><div class="sw-name">' + (x.name || '') + chipsFlagPillsHtml(x.code) + '</div>' +
      '<div class="sw-group">' + (x.group || '—') + '</div>' + (x.tag ? '<div class="sw-pill">' + x.tag + '</div>' : '') + verdict + '</div>';
  }
  return '<div class="sw-card lw' + (bad ? '' : ' green') + '" data-code="' + x.code + '" data-name="' + (x.name || '') + '" role="button" tabindex="0">' +
    '<div class="sw-code">' + x.code + '</div><div class="sw-name">' + (x.name || '') + chipsFlagPillsHtml(x.code) + '</div>' +
    '<div class="sw-group">' + (x.group || '—') + '</div>' + (x.tag ? '<div class="sw-pill">入榜時 ' + x.tag + '</div>' : '') +
    '<div class="sw-line">入榜收 ' + num2(x.pickClose) + ' → 現在收 ' + num2(x.close) + ' <b class="' + dirClass(x.changePct) + '">' + swPct(x.changePct, 1) + '</b></div>' +
    '<div class="sw-line">期間最高收 ' + num2(x.maxClose) + '<span class="muted">（' + swPct(x.maxGainPct, 1) + '）</span>・最低收 ' + num2(x.minClose) + '<span class="muted">（' + swPct(x.minGainPct, 1) + '）</span></div>' +
    '<div class="sw-line">法人這週 ' + (swHas(x.instSince) ? '<span class="' + dirClass(x.instSince) + '">' + swLots(x.instSince) + '</span>' + (x.instDays ? '<span class="muted">（' + x.instDays + ' 天）</span>' : '') : '—') +
      '・月線 ' + num2(x.ma20) + (swHas(x.aboveMa20Pct) ? '<span class="muted">（' + (x.aboveMa20 ? '之上 ' : '之下 ') + Math.abs(x.aboveMa20Pct).toFixed(1) + '%）</span>' : '') + (swHas(x.score) ? '・均線 <b>' + x.score + '</b>' : '') + '</div>' +
    verdict + '</div>';
}
function swingLastWeekHtml(data){
  const lw = data.lastWeek, rules = data.rules || {};
  const head = '<div class="bl-section bl-launch">上一週籌碼那一組' + (lw && lw.date ? '・' + swMmdd(lw.date) + ' 那份的籌碼面精選，到 ' + swMmdd(data.date) + ' 的表現' : '') + '</div>' +
    (rules.lastWeek ? '<div class="sw-rule">' + rules.lastWeek + '。</div>' : '');
  if (lw === undefined) return head + '<div class="race-note">這一份是對照功能接入前整理的，沒有上一週資料</div>';
  if (!lw) return head + '<div class="race-note">一週前還沒有報告可以對照（要累積 5 個交易日的報告）</div>';
  const picks = lw.picks || [];
  if (!picks.length) return head + '<div class="race-note">' + swMmdd(lw.date) + ' 那份沒有籌碼面精選</div>';
  const recap = swHas(lw.avgChangePct) ? '這一組平均 <b class="' + dirClass(lw.avgChangePct) + '">' + swPct(lw.avgChangePct, 1) + '</b>・' + lw.aboveMa20 + '/' + lw.count + ' 檔還在月線上' : '這一組還沒有可對照的日K';
  return head + '<div class="sw-noteBox">' + recap + '</div>' +
    '<div class="sw-cards">' + picks.map(swingLastWeekCardHtml).join('') + '</div>' +
    '<div class="sw-quote">榜單不是拿來追的，是拿來驗證：守住月線的才算籌碼有效</div>';
}
// 主動式基金五檔（2026-09-26 第三階段）：每檔跟前一份比出新增／加碼／減碼／刪除，再看五檔有沒有同步
const ETF_ROW_LIMIT = 6;
const swLotsPlain = (v) => Math.round(Math.abs(v || 0)).toLocaleString('en-US') + ' 張';   // 不帶正負號、不縮成萬張
function swingEtfRowHtml(r, kind){
  const delta = r.deltaLots || 0;
  const move = (kind === 'new' ? '新增 ' : kind === 'removed' ? '出清 ' : delta >= 0 ? '加碼 ' : '減碼 ') + swLotsPlain(delta);
  const cls = kind === 'new' || (kind === 'increased') ? 'up' : 'down';
  const shares = kind === 'removed' ? swLotsPlain(r.prevShares / 1000) + ' → 0' : (r.prevShares ? swLotsPlain(r.prevShares / 1000) + ' → ' : '') + swLotsPlain(r.shares / 1000);
  return '<div class="sw-drow etf" data-code="' + r.code + '" data-name="' + (r.name || '') + '" role="button" tabindex="0">' +
    '<b class="sw-dcode">' + r.code + '</b><span class="sw-dname">' + (r.name || '') + '</span><span class="sw-dgroup">' + (r.group || '—') + '</span>' +
    '<span class="sw-dextra"><b class="' + cls + '">' + move + '</b><span class="muted">・持股 ' + shares + (swHas(r.weight) && kind !== 'removed' ? '・權重 ' + Number(r.weight).toFixed(2) + '%' : '') + '</span></span></div>';
}
function swingEtfBlockHtml(e){
  const open = !!swingState.etfOpen[e.code];
  const c = e.counts || {};
  const head = '<div class="bl-section bl-launch">' + e.code + ' ' + e.name + '<span class="sw-etf-issuer">' + (e.issuer || '') + '</span>・' + swMmdd(e.date) +
    (e.prevDate ? ' 比 ' + swMmdd(e.prevDate) + '：新增 ' + c.new + '／加碼 ' + c.increased + '／減碼 ' + c.decreased + '／刪除 ' + c.removed : '・還沒有前一份可比') + '</div>';
  const info = '<div class="sw-rule">持股 ' + e.holdings + ' 檔' + (swHas(e.nav) ? '・規模 ' + (e.nav / 1e8).toFixed(0) + ' 億' : '') +
    (swHas(e.unitsDelta) && e.unitsDelta !== 0 ? '・受益單位 ' + (e.unitsDelta > 0 ? '增 ' : '減 ') + (Math.abs(e.unitsDelta) / 1e4).toFixed(0) + ' 萬（' + (e.unitsDelta > 0 ? '有人申購' : '有人贖回') + '）' : '') +
    (e.top && e.top.length ? '・前五大：' + e.top.slice(0, 5).map((t) => t.name + ' ' + (swHas(t.weight) ? Number(t.weight).toFixed(1) + '%' : '')).join('、') : '') + '</div>';
  if (!e.prevDate) return head + info;
  const kinds = [['new', '新增'], ['increased', '加碼'], ['decreased', '減碼'], ['removed', '刪除']];
  let hidden = 0;
  const lists = kinds.map(([k, label]) => {
    const rows = e[k] || [];
    if (!rows.length) return '';
    const shown = open ? rows : rows.slice(0, ETF_ROW_LIMIT);
    hidden += rows.length - shown.length;
    return '<div class="sw-etf-kind">' + label + '（' + rows.length + '）</div><div class="sw-dlist">' + shown.map((r) => swingEtfRowHtml(r, k)).join('') + '</div>';
  }).join('');
  const total = kinds.reduce((n, [k]) => n + ((e[k] || []).length), 0);
  return head + info + (total ? lists : '<div class="race-note">這一天持股沒有變動</div>') +
    (hidden > 0 || (open && total > ETF_ROW_LIMIT) ? '<div class="chips-more"><button class="chart-tab chips-btn sw-etf-more" data-etf="' + e.code + '">' + (open ? '收合' : '展開全部（還有 ' + hidden + ' 檔）') + '</button></div>' : '');
}
function swingEtfSyncHtml(title, cls, rows, verb){
  return '<div class="bl-section ' + cls + '">' + title + '（' + rows.length + '）</div>' +
    (rows.length ? '<div class="sw-dlist">' + rows.map((r) => '<div class="sw-drow etf" data-code="' + r.code + '" data-name="' + (r.name || '') + '" role="button" tabindex="0">' +
      '<b class="sw-dcode">' + r.code + '</b><span class="sw-dname">' + (r.name || '') + '</span><span class="sw-dgroup">' + (r.group || '—') + '</span>' +
      '<span class="sw-dextra"><b class="' + (r.deltaLots >= 0 ? 'up' : 'down') + '">' + r.count + ' 檔同步' + verb + ' ' + swLots(Math.abs(r.deltaLots)) + '</b><span class="muted">・' +
      (r.etfs || []).map((x) => x.name + ' ' + swLots(x.deltaLots)).join('、') + '</span></span></div>').join('') + '</div>' : '<div class="race-note">沒有兩檔以上同步' + verb + '的股票</div>');
}
function swingEtfHtml(data){
  const ae = data.activeEtf, rules = data.rules || {};
  const head = '<div class="sw-rule">' + (rules.activeEtf || '五檔規模最大的台股主動式基金每日持股變化') + '。</div>';
  if (ae === undefined) return head + '<div class="race-note">這一份是主動式基金接入前整理的，沒有持股資料</div>';
  if (!ae) return head + '<div class="race-note">還沒有主動式基金的持股資料（排程主機每個交易日晚上抓各投信公告）</div>';
  const etfs = ae.etfs || [], sync = ae.sync || {};
  const tiles = '<div class="sw-tiles">' + etfs.map((e) => '<div class="sw-tile etf"><b>' + e.code + '</b><span>' + e.name + '</span><span>' +
    (e.prevDate ? '加碼 ' + ((e.counts || {}).new + (e.counts || {}).increased) + '・減碼 ' + ((e.counts || {}).decreased + (e.counts || {}).removed) : '持股 ' + e.holdings + ' 檔') + '</span></div>').join('') + '</div>';
  return head + '<div class="sw-basis">資料日 ' + swMmdd(ae.date) + '・' + etfs.length + ' 檔有資料' + (ae.missing && ae.missing.length ? '・缺 ' + ae.missing.join('、') : '') + (ae.withPrev < etfs.length ? '・' + (etfs.length - ae.withPrev) + ' 檔還沒有前一份可比' : '') + '</div>' +
    tiles +
    swingEtfSyncHtml('五檔同步加碼', 'bl-launch', sync.buy || [], '加碼') +
    swingEtfSyncHtml('五檔同步減碼', 'bl-brew', sync.sell || [], '減碼') +
    '<div class="sw-quote">五檔一起加碼的，才算主動式基金的共識；單檔進出多半是換股</div>' +
    etfs.map(swingEtfBlockHtml).join('');
}
// 處置動態一列：明日起處置／明日出獄／處置中／觀察名單（出獄 ≤5 個交易日）
function swingDispoReason(e){
  // 券商來的處置原因是一整段公告文，只留前 80 字，完整的放在 hover 提示
  const full = String(e.reason || '').replace(/\\s+/g, ' ').trim();
  if (!full) return '';
  const short = full.length > 80 ? full.slice(0, 80) + '…' : full;
  return '・<span class="sw-dreason" title="' + full.replace(/"/g, '&quot;') + '">' + short + '</span>';
}
function swingDispoRowHtml(e, kind){
  const period = (e.start ? swMmdd(e.start) : '？') + '～' + (e.end ? swMmdd(e.end) : '？');
  let extra;
  if (kind === 'upcoming') extra = '處置期間 ' + period + swingDispoReason(e);
  else if (kind === 'releasing') extra = '處置 ' + period + '，' + (e.releaseDay ? swMmdd(e.releaseDay) + ' ' : '') + '恢復正常交易';
  else if (kind === 'watch') extra = '出獄第 ' + e.daysOut + ' 天' + (e.releaseDay ? '（' + swMmdd(e.releaseDay) + ' 出獄）' : '') + '・處置曾 ' + period;
  else extra = '處置 ' + period + (e.releaseDay ? '・' + swMmdd(e.releaseDay) + ' 出獄' : '') + swingDispoReason(e);
  return '<div class="sw-drow" data-code="' + e.code + '" data-name="' + (e.name || '') + '" role="button" tabindex="0">' +
    '<b class="sw-dcode">' + e.code + '</b><span class="sw-dname">' + (e.name || '') + chipsFlagPillsHtml(e.code) + '</span><span class="sw-dgroup">' + (e.group || '—') + '</span>' +
    '<span class="sw-dextra">' + extra + '</span></div>';
}
// ---- 黑龍回測（2026-09-28 使用者：照學員專區「創高黑龍・績效分析」做在下午報裡，參數可以在頁面上調）----
// 後端每個交易日收盤後把族群表內每檔的均線分數、K棒、漲跌幅、週籌碼…存成一張表（近 60 個交易日），
// 這裡把參數丟給 /api/heilong，拿回各種出場方式的績效、累積曲線、爆發力、今日名單與每日明細。
// 「存成我的參數」存在這台瀏覽器（localStorage）。K棒／停利／回測天數按鈕點了立刻重算；數字欄改完按「重新計算」。
const HL_DEFAULTS = { score: 10, k: 'black', min: -10, max: 3, week: '', gavg: '', hits: '', val: '', exdispo: true, cap: 0, sort: 'score', tp: 3, useTp: true, useSl: true, days: 10, amt: 50,
  // 2026-10-04 使用者：照學員專區補的參數——月季乖離下／上限、排除注意股、排除剛出關 ≤N 日、收盤價下／上限、當天成交量、只看有股期、範圍、扣費用（手續費折數）
  bmin: '', bmax: '', exattn: false, exout: false, exoutDays: 5, pmin: '', pmax: '', vminOn: false, vmin: 1000, fut: false, scope: 'groups', fee: false, feeDisc: 0.6 };
// 均線分數只用「內定」算法（2026-09-28 使用者：本站算法拿掉、留這套，名稱叫「內定」）：收盤站上 6 條均線各 1 分＋創 6 個天期新高各 1 分＋多頭排列加分 3 分，滿分 15。後端仍保留兩套，這裡固定送 algo=official。
const HL_SORTS = [['score', '均線分數 高→低'], ['week', '週籌碼% 高→低'], ['gavg', '族群平均分 高→低'], ['hits', '近 20 日 >8% 次數 多→少'], ['drop', '當天跌最多 → 少'], ['val', '成交值 大→小']];
let hlParams = Object.assign({}, HL_DEFAULTS);
try { const saved = JSON.parse(localStorage.getItem('heilongParams') || 'null'); if (saved && typeof saved === 'object') hlParams = Object.assign({}, HL_DEFAULTS, saved); } catch (e) { /* 讀不到就用預設 */ }
let hlState = { query: null, data: null, loading: false, failedAt: 0, error: '', open: {}, savedAt: 0 };
function hlMine(p){ return p.useTp && p.useSl ? 'both' : p.useTp ? 'tp' : p.useSl ? 'sl' : 'close'; }
function hlMineLabel(p){ return p.useTp && p.useSl ? '停利 +' + Number(p.tp) + '% ＋ 破黑低停損' : p.useTp ? '停利 +' + Number(p.tp) + '%' : p.useSl ? '破黑低停損' : '隔天收盤出場'; }
function hlQuery(p){
  const q = new URLSearchParams();
  q.set('score', p.score); q.set('k', p.k); q.set('min', p.min); q.set('max', p.max);
  for (const key of ['week', 'gavg', 'hits', 'val']) if (p[key] !== '' && p[key] !== null && p[key] !== undefined && !isNaN(Number(p[key]))) q.set(key, p[key]);
  q.set('exdispo', p.exdispo ? '1' : '0'); q.set('cap', p.cap || 0); q.set('sort', p.sort); q.set('tp', p.tp); q.set('mine', hlMine(p)); q.set('days', p.days); q.set('amt', p.amt || 50); q.set('algo', 'official');
  const num = (v) => v !== '' && v !== null && v !== undefined && !isNaN(Number(v));
  for (const key of ['bmin', 'bmax', 'pmin', 'pmax']) if (num(p[key])) q.set(key, p[key]);
  q.set('exattn', p.exattn ? '1' : '0');
  q.set('exout', p.exout ? (Number(p.exoutDays) > 0 ? Number(p.exoutDays) : 5) : 0);
  if (p.vminOn && Number(p.vmin) > 0) q.set('vmin', Number(p.vmin));
  q.set('fut', p.fut ? '1' : '0');
  q.set('scope', p.scope === 'market' ? 'market' : 'groups');
  q.set('fee', p.fee ? (Number(p.feeDisc) > 0 ? Number(p.feeDisc) : 0.6) : 0);
  return q.toString();
}
async function ensureHeilong(){
  const query = hlQuery(hlParams);
  if (hlState.query === query && (hlState.data || hlState.loading)) return;
  if (hlState.query === query && hlState.failedAt && Date.now() - hlState.failedAt < 30000) return;
  hlState.query = query; hlState.loading = true; hlState.data = null; hlState.error = '';
  try {
    const res = await fetch('/api/heilong?' + query);
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error((data && (data.detail || data.error)) || ('heilong http ' + res.status));
    if (!data || !data.status) throw new Error('bad payload');
    if (hlState.query !== query) return;    // 參數已經換了
    hlState.data = data; hlState.failedAt = 0;
  } catch (e) {
    if (hlState.query !== query) return;
    hlState.failedAt = Date.now(); hlState.error = String((e && e.message) || e);
  } finally {
    if (hlState.query === query) hlState.loading = false;
  }
  if (!document.getElementById('heilongModal').hidden) renderHeilong();
}
function hlRun(){ hlState.query = null; hlState.failedAt = 0; renderHeilong(); }
const hlN = (v, digits) => (v === null || v === undefined ? '—' : Number(v).toFixed(digits === undefined ? 2 : digits));
const hlPrice = (v) => (v === null || v === undefined ? '—' : Number(v) >= 500 ? Number(v).toFixed(0) : Number(v) >= 50 ? Number(v).toFixed(1) : Number(v).toFixed(2));
const hlMoney = (v) => (v === null || v === undefined ? '—' : (v > 0 ? '+' : '') + Number(v).toFixed(1) + ' 萬');
const hlWd = (d) => '日一二三四五六'[new Date(d + 'T00:00:00').getDay()] || '';
function hlLive(code){
  if (!lastData || !Array.isArray(lastData.groups)) return null;
  for (const g of lastData.groups) for (const s of (g.stocks || [])) if (s.code === code && s.price > 0) return s;
  return null;
}
function hlParamsHtml(p){
  const kBtn = (v, label) => '<button class="chart-tab chips-btn hl-k' + (p.k === v ? ' active' : '') + '" data-k="' + v + '">' + label + '</button>';
  const tpBtn = (v) => '<button class="chart-tab chips-btn hl-tp' + (Number(p.tp) === v ? ' active' : '') + '" data-tp="' + v + '">' + v + '%</button>';
  const daysBtn = (v, label) => '<button class="chart-tab chips-btn hl-days' + (Number(p.days) === v ? ' active' : '') + '" data-days="' + v + '">' + label + '</button>';
  const inp = (key, attrs) => '<input class="hl-in" data-key="' + key + '" type="number" inputmode="decimal" value="' + (p[key] === null || p[key] === undefined ? '' : p[key]) + '" ' + (attrs || '') + '>';
  const chk = (key, label) => '<label><input type="checkbox" class="hl-chk" data-key="' + key + '"' + (p[key] ? ' checked' : '') + '> ' + label + '</label>';
  const scopeBtn = (v, label) => '<button class="chart-tab chips-btn hl-scope' + ((p.scope === 'market' ? 'market' : 'groups') === v ? ' active' : '') + '" data-scope="' + v + '">' + label + '</button>';
  const attnSince = hlState.data && hlState.data.attentionSince ? '紀錄自 ' + hlState.data.attentionSince + ' 起，更早的日子排不到' : '尚無紀錄，第一個交易日收盤後開始記';
  return '<div class="hl-form">' +
    '<div class="hl-line"><label title="內定算法：收盤站上 6 條均線各 1 分＋創 6 個天期新高各 1 分＋多頭排列加分 3 分，滿分 15">均線分數（內定）≥ ' + inp('score', 'min="0" max="15" step="1"') + '</label>' +
      '<span class="hl-field">K棒 ' + kBtn('black', '黑K') + kBtn('red', '紅K') + kBtn('any', '不限') + '</span>' +
      '<label>漲跌幅 ' + inp('min', 'step="0.5"') + ' ～ ' + inp('max', 'step="0.5"') + ' %</label></div>' +
    '<div class="hl-line"><label>週籌碼（大戶週增%）≥ ' + inp('week', 'step="1" placeholder="不用"') + '</label>' +
      '<label>族群平均分 ≥ ' + inp('gavg', 'step="1" placeholder="不用"') + '</label>' +
      '<label>近 20 日漲 >8% 次數 ≥ ' + inp('hits', 'step="1" min="0" placeholder="不用"') + '</label>' +
      '<label>5 日均成交值 ≥ ' + inp('val', 'step="1" placeholder="不用"') + ' 億</label></div>' +
    '<div class="hl-line">' + chk('exdispo', '排除當天處置中的股（分盤交易，隔天出不掉）') +
      '<label>每天最多 ' + inp('cap', 'step="1" min="0"') + ' 檔（0＝不限），依 <select class="hl-sel" data-key="sort">' + HL_SORTS.map(([v, l]) => '<option value="' + v + '"' + (p.sort === v ? ' selected' : '') + '>' + l + '</option>').join('') + '</select> 取</label></div>' +
    // 2026-10-04 使用者：照學員專區補的參數
    '<div class="hl-line"><label title="收盤價 ÷（20 日線＋60 日線）÷2 − 1。上市不滿 60 天沒有數字，設了門檻就不算符合；超過 30% 通常是相對高檔，打少跑快">月季乖離 ' + inp('bmin', 'step="1" placeholder="下限"') + ' ～ ' + inp('bmax', 'step="1" placeholder="上限"') + ' %（留空＝那一邊不限）</label>' +
      '<label>收盤價 ' + inp('pmin', 'step="1" min="0" placeholder="下限"') + ' ～ ' + inp('pmax', 'step="1" min="0" placeholder="上限"') + ' 元</label>' +
      '<span class="hl-field">' + chk('vminOn', '當天成交量 ≥') + ' ' + inp('vmin', 'step="100" min="0"') + ' 張</span></div>' +
    '<div class="hl-line">' + chk('exattn', '排除注意股（交易所公布；' + attnSince + '）') +
      '<span class="hl-field">' + chk('exout', '排除剛出關 ≤') + ' ' + inp('exoutDays', 'step="1" min="1"') + ' 個交易日的股（出關後先觀察）</span>' +
      chk('fut', '只看有股票期貨的股') + '</div>' +
    '<div class="hl-line"><span class="hl-field">範圍 ' + scopeBtn('groups', '族群表內') + scopeBtn('market', '全市場') + '</span>' +
      chk('fee', '扣手續費／交易稅') + '<label>手續費折數 ' + inp('feeDisc', 'step="0.1" min="0.1" max="1"') + '（例如 0.6＝6 折；證交稅 0.3% 固定）</label></div>' +
    '<div class="hl-line"><span class="hl-field">停利 ' + tpBtn(3) + tpBtn(5) + tpBtn(8) + ' 自訂 ' + inp('tp', 'step="0.5" min="0.5" max="50"') + ' %</span>' +
      chk('useTp', '用停利') + chk('useSl', '破黑低停損') +
      '<span class="hl-field">回測 ' + daysBtn(10, '近 10 天') + daysBtn(20, '近 20 天') + daysBtn(0, '近 60 天') + '</span>' +
      '<label>每檔 ' + inp('amt', 'step="10" min="1"') + ' 萬</label></div>' +
    '<div class="hl-line hl-actions"><button class="chart-tab chips-btn active" id="hlRun">▶ 重新計算</button><button class="chart-tab chips-btn" id="hlReset">官網創高黑龍預設</button><button class="chart-tab chips-btn" id="hlSave">💾 存成我的參數</button>' +
      (hlState.savedAt && Date.now() - hlState.savedAt < 5000 ? '<span class="muted">已存在這台瀏覽器，下次打開就是這組</span>' : '') + '</div>' +
    '<div class="sw-rule">官網創高黑龍預設＝均線分數 ≥10・黑K・漲跌幅 −10%～3%・族群表內，其餘條件不用。「用停利」「破黑低停損」是「我的出場法」：碰到停利價就賣、跌破黑K最低價就賣，都沒碰到收盤賣；兩個都不勾＝隔天收盤出場。全市場＝日K裡所有 4 位數代號的股票（不在族群表的沒有族群平均分）。扣費用＝每筆扣手續費×折數×2＋證交稅 0.3%。數字欄改完按「重新計算」。</div></div>';
}
function hlChartHtml(points, series, opts){
  const pts = (points || []).filter((p) => p);
  if (!pts.length) return '';
  const W = Math.max(320, pts.length * 48 + 60), H = 190, L = 46, R = 12, T = 12, B = 38;
  let lo = 0, hi = 0;
  for (const p of pts) for (const [key] of series){ const v = opts.cum ? (p.cum || {})[key] : p[key]; if (v !== null && v !== undefined){ lo = Math.min(lo, v); hi = Math.max(hi, v); } }
  if (hi === lo) hi = lo + 1;
  const pad = (hi - lo) * 0.1; lo -= pad; hi += pad;
  const x = (i) => L + (pts.length === 1 ? (W - L - R) / 2 : i * (W - L - R) / (pts.length - 1));
  const y = (v) => T + (hi - v) / (hi - lo) * (H - T - B);
  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">';
  for (let t = 0; t <= 4; t++){ const v = lo + (hi - lo) * t / 4; svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '" stroke="currentColor" stroke-opacity=".12"/><text x="' + (L - 4) + '" y="' + (y(v) + 3).toFixed(1) + '" text-anchor="end" fill="currentColor" fill-opacity=".7">' + v.toFixed(1) + '%</text>'; }
  if (lo < 0 && hi > 0) svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '" stroke="currentColor" stroke-opacity=".45"/>';
  pts.forEach((p, i) => { svg += '<text x="' + x(i).toFixed(1) + '" y="' + (H - B + 14) + '" text-anchor="middle" fill="currentColor" fill-opacity=".8">' + swMmdd(p.date) + '</text><text x="' + x(i).toFixed(1) + '" y="' + (H - B + 27) + '" text-anchor="middle" fill="currentColor" fill-opacity=".55">' + (p.count || 0) + '檔</text>'; });
  for (const [key, , color] of series){
    let d = '', pen = false, dots = '';
    pts.forEach((p, i) => { const v = opts.cum ? (p.cum || {})[key] : p[key]; if (v === null || v === undefined){ pen = false; return; } d += (pen ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); pen = true; dots += '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(v).toFixed(1) + '" r="2.5" fill="' + color + '"/>'; });
    if (d) svg += '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="2"/>' + dots;
  }
  svg += '</svg>';
  const last = pts[pts.length - 1];
  const legend = series.map(([key, label, color]) => '<span><i style="background:' + color + '"></i>' + label + (opts.cum ? ' 累積 ' + swPct((last.cum || {})[key]) : '') + '</span>').join('');
  return '<div class="hl-chart"><div class="hl-chart-title">' + opts.title + '</div><div class="hl-legend">' + legend + '</div><div class="hl-scroll">' + svg + '</div>' + (opts.note ? '<div class="race-note">' + opts.note + '</div>' : '') + '</div>';
}
function hlTile(value, label){ return '<div class="sw-tile hl"><b>' + value + '</b><span>' + label + '</span></div>'; }
function hlBurstHtml(data){
  const b = data.burst || {};
  const block = (n) => {
    const x = b['d' + n] || {};
    return '<div class="hl-burst"><div class="hl-bhead">' + n + ' 日最高 <span class="muted">取樣 ' + (x.samples || 0) + '</span></div>' +
      (x.samples ? '<div class="hl-bgrid"><div><b class="' + dirClass(x.avg) + '">' + swPct(x.avg) + '</b><span>平均</span></div><div><b>' + x.win + '%</b><span>勝率 >0</span></div><div><b>' + x.ge5 + '%</b><span>≥ +5%</span></div><div><b>' + x.ge10 + '%</b><span>≥ +10%</span></div>' +
        (n === 1 ? '<div><b class="' + dirClass(x.openAvg) + '">' + swPct(x.openAvg) + '</b><span>隔天開盤均</span></div>' : '') + '</div>' +
        '<div class="hl-bfoot">最佳 ' + swPct(x.best) + ' · 最差 ' + swPct(x.worst) + ' · 收盤均 ' + swPct(x.closeAvg) + '</div>' : '<div class="race-note">還沒有 D+' + n + ' 的資料</div>') + '</div>';
  };
  return '<div class="bl-section bl-launch">② 爆發力・選股日收盤進場 → 之後 1／2／3 個交易日的盤中最高</div>' +
    '<div class="sw-rule">最高是盤中價、實際賣不到，看的是「停利目標到得到嗎」。</div>' +
    '<div class="hl-bursts">' + block(1) + block(2) + block(3) + '</div>' +
    hlChartHtml(data.curve, [['max1', '1 日最高', '#e6675f'], ['max2', '2 日最高', '#7c3aed'], ['max3', '3 日最高', '#0f766e']], { title: '每日平均最高%（爆發力趨勢）', note: '每天取當天所有筆的平均；下方數字＝當天檔數；圖可左右捲' });
}
function hlMethodsHtml(data){
  const s = data.stats || {}, methods = s.methods || [], p = data.params || {};
  const mine = methods.find((m) => m.key === s.mine);
  const row = (m, star) => '<tr' + (star ? ' class="hl-mine"' : '') + '><td class="l">' + (star ? '⭐ 我的出場法：' + hlMineLabel(hlParams) : m.label) + '</td><td>' + m.count + '</td><td class="' + dirClass(m.avg || 0) + '">' + swPct(m.avg) + '</td><td class="' + dirClass(m.median || 0) + '">' + swPct(m.median) + '</td>' +
    '<td>' + (m.win === null || m.win === undefined ? '—' : m.win + '%（' + m.wins + '/' + m.count + '）') + '</td><td class="' + dirClass(m.total || 0) + '">' + hlMoney(m.total) + '</td><td class="down">' + swPct(m.worst) + '</td><td class="up">' + swPct(m.best) + '</td></tr>';
  return '<div class="bl-section bl-brew">③ 出場方式績效・進場＝符合那天的收盤價；D+1＝下一個交易日；這裡都是真的賣得掉的價</div>' +
    '<div class="sw-tiles">' + hlTile(s.days || 0, '回測天數') + hlTile(s.trades || 0, '交易筆數') + hlTile(s.perDay === null || s.perDay === undefined ? '—' : s.perDay, '平均每天(檔)') +
      hlTile(s.hitTp === null || s.hitTp === undefined ? '—' : s.hitTp + '%', '盤中碰到停利') + hlTile(s.hitSl === null || s.hitSl === undefined ? '—' : s.hitSl + '%', '盤中跌破黑K低') + '</div>' +
    '<div class="hl-scroll"><table class="hl-table hl-methods"><thead><tr><th class="l">出場方式</th><th>筆數</th><th>平均</th><th>中位數</th><th>勝率</th><th>總損益(每檔 ' + (p.amt || 50) + ' 萬)</th><th>最差單筆</th><th>最佳單筆</th></tr></thead><tbody>' +
      (mine ? row(mine, true) : '') + methods.map((m) => row(m, false)).join('') + '</tbody></table></div>' +
    '<div class="sw-rule">收盤出場＝D+1 收盤賣。停利出場＝D+1 開盤 ≥ 目標就開盤賣；盤中最高碰到目標 → 用目標價賣；都沒有 → 收盤賣。破黑低出場＝D+1 開盤就低於黑K最低 → 開盤賣；盤中最低跌破黑K最低 → 用黑K最低價賣（停損）；沒破 → 收盤賣。停利＋破黑低＝兩個一起掛；同一天兩個都碰到（日K分不出先後）保守算停損。開高走・開低抱＝開盤高於進場價就開盤賣，否則抱到收盤。D+2 收盤＝抱兩天（資金會跟隔天那批重疊，總損益參考就好）。</div>' +
    hlChartHtml(data.curve, [['close', '收盤出場', '#a89c8f'], ['tp', '停利出場', '#e6675f'], ['sl', '破黑低出場', '#0f766e'], ['both', '停利＋破黑低', '#7c3aed']], { title: '累積曲線（每天取當天所有筆的平均，逐日累加）', cum: true, note: '圖可左右捲' });
}
function hlLiveInfo(listDate){
  const ok = !!(lastData && lastData.quoteDate && listDate && lastData.quoteDate > listDate);
  return { ok, time: ok ? (lastData.quoteDate.slice(5).replace('-', '/') + ' ' + String(lastData.quoteTime || '').slice(0, 5)) : '' };
}
function hlRowHead(r){
  const sc = (v) => (v === null || v === undefined ? '—' : v);
  return '<tr class="hl-row" data-code="' + r.code + '" data-name="' + (r.name || '') + '"><td class="l"><b>' + r.code + '</b></td><td class="l">' + (r.name || '') + (r.disposed ? ' 🔒' : '') + '</td><td class="l">' + (r.group || '—') + '</td>' +
    '<td class="hl-use">' + sc(r.score2) + '</td><td>' + hlN(r.groupAvg2, 1) + '</td><td class="' + dirClass(r.weekPct || 0) + '">' + swPct(r.weekPct) + '</td><td class="' + dirClass(r.changePct || 0) + '">' + swPct(r.changePct) + '</td>' +
    '<td>' + hlN(r.hits20, 0) + '</td><td>' + hlN(r.val5, 1) + '</td><td>' + hlPrice(r.entry) + '</td><td>' + hlPrice(r.lowK) + '</td><td>' + hlN(r.target, 2) + '</td>';
}
const hlHead = () => '<th class="l">代號</th><th class="l">股名</th><th class="l">族群</th><th class="hl-use">均線分數</th><th>族群平均</th><th>週籌碼%</th><th>當天漲跌</th><th>20日>8%</th><th>5日均值(億)</th><th>進場(收盤)</th><th>黑K低</th><th>停利價</th>';
function hlTodayHtml(data){
  const t = data.today || {}, rows = t.rows || [], live = hlLiveInfo(t.date);
  const cell = (r) => {
    const q = live.ok ? hlLive(r.code) : null, price = q ? q.price : null;
    const hitTp = price === null ? null : price >= r.target, hitSl = price === null ? null : price < r.lowK;
    return hlRowHead(r) + '<td>' + (price === null ? '—' : hlPrice(price)) + '</td><td class="' + (q ? dirClass(q.changePercent || 0) : '') + '">' + (q ? swPct(q.changePercent) : '—') + '</td>' +
      '<td class="' + (hitTp ? 'ok' : '') + '">' + (hitTp === null ? '—' : hitTp ? '✔' : '') + '</td><td class="' + (hitSl ? 'bad' : '') + '">' + (hitSl === null ? '—' : hitSl ? '✔' : '') + '</td></tr>';
  };
  return '<div class="bl-section bl-launch">④ 今日名單・' + swMmdd(t.date) + '(' + hlWd(t.date) + ') 收盤符合參數、還沒有 D+1 資料的名單（' + rows.length + ' 檔）</div>' +
    '<div class="sw-rule">' + (live.ok ? '現價＝首頁即時報價（' + live.time + '）；✔ 達停利＝現價 ≥ 停利價、✔ 破黑低＝現價 < 黑K最低價。' : '隔天開盤後再打開這一頁，現價欄會用首頁的即時報價打勾（✔ 達停利／✔ 破黑低）。') + '點一列開K線圖。</div>' +
    (rows.length ? '<div class="hl-scroll"><table class="hl-table hl-today"><thead><tr>' + hlHead() + '<th>現價</th><th>現價漲跌</th><th>✔達停利</th><th>✔破黑低</th></tr></thead><tbody>' + rows.map(cell).join('') + '</tbody></table></div>' : '<div class="race-note">那天沒有符合參數的股票</div>');
}
function hlDayTableHtml(day, latest){
  const cell = (v) => '<td class="' + dirClass(v || 0) + '">' + swPct(v) + '</td>';
  const rows = (day.rows || []).map((r) => {
    if (!r.next) return hlRowHead(r) + '<td colspan="13" class="l muted">' + (r.gap ? '價格斷層（分割／減資），不算' : day.date === latest ? 'D+1 尚未收盤' : '沒有 D+1 日K') + '</td></tr>';
    const n = r.next, x = r.exits || {};
    return hlRowHead(r) + '<td>' + hlPrice(n.open) + '</td><td>' + hlPrice(n.high) + '</td><td>' + hlPrice(n.low) + '</td><td>' + hlPrice(n.close) + '</td>' +
      '<td class="' + (r.hitTp ? 'ok' : '') + '">' + (r.hitTp ? '✔' : '') + '</td><td class="' + (r.hitSl ? 'bad' : '') + '">' + (r.hitSl ? '✔' : '') + '</td>' +
      cell(x.close) + cell(x.tp) + cell(x.sl) + cell(x.both) + cell(x.open) + cell(x.ohl) + (x.d2 === null || x.d2 === undefined ? '<td>—</td>' : cell(x.d2)) + '</tr>';
  }).join('');
  return '<div class="hl-scroll"><table class="hl-table"><thead><tr>' + hlHead() + '<th>D+1 開</th><th>D+1 高</th><th>D+1 低</th><th>D+1 收</th><th>✔碰停利</th><th>✔破黑低</th><th>收盤出</th><th>停利出</th><th>破黑低出</th><th>停利+破黑低</th><th>隔天開盤出</th><th>開高走開低抱</th><th>D+2</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}
function hlDailyHtml(data){
  const days = data.daily || [];
  return '<div class="bl-section bl-brew">⑤ 每日明細・新 → 舊；點日期展開。✔ 欄是事後對照：那天盤中有沒有碰到停利／有沒有跌破黑K低</div>' +
    days.map((day) => {
      const open = !!hlState.open[day.date], avg = day.avg || {};
      const sub = day.date === data.date ? 'D+1 尚未收盤（見 ④ 今日名單）' : day.withNext ? '收盤出 ' + swPct(avg.close) + ' ・ 停利出 ' + swPct(avg.tp) + ' ・ 破黑低出 ' + swPct(avg.sl) + ' ・ 停利＋破黑低 ' + swPct(avg.both) : (day.count ? '沒有 D+1 資料' : '');
      return '<div class="hl-day"><div class="hl-day-head" data-date="' + day.date + '"><b>' + swMmdd(day.date) + '(' + hlWd(day.date) + ')</b><span>' + day.count + ' 檔</span><span class="muted">' + sub + '</span><span class="hl-caret">' + (open ? '▾' : '▸') + '</span></div>' +
        (open ? (day.count ? hlDayTableHtml(day, data.date) : '<div class="race-note">那天沒有符合參數的股票</div>') : '') + '</div>';
    }).join('');
}
function swingHeilongHtml(){
  ensureHeilong();
  const data = hlState.data;
  const head = '<div class="sw-rule">出發點＝官網選股系統「創高黑龍」（均線分數高＋當天收黑）。自訂參數 → 看歷史 D+1 各種出場方式的績效 → 每天收盤挑自己的名單 → 隔天回來看要不要出場。均線分數＝內定算法（站上 6 條均線＋創 6 個天期新高＋多頭排列 3 分，滿分 15）。</div>' +
    '<div class="bl-section bl-launch">① 選股參數</div>' + hlParamsHtml(hlParams);
  if (!data) return head + '<div class="signal-empty"><div class="se-title">' + (hlState.failedAt ? '讀取失敗' + (hlState.error ? '：' + hlState.error : '') : '計算中…') + '</div><div class="se-sub">後端每個交易日收盤後整理黑龍表；讀不到的話稍後再試。</div></div>';
  if (data.status !== 'ok') return head + '<div class="signal-empty"><div class="se-title">還沒有黑龍名單</div><div class="se-sub">' + (data.reason || '第一個交易日收盤後會開始整理。') + '</div></div>';
  const dates = data.dates || [], w = data.window || {}, c = data.collector || {};
  const basis = '<div class="sw-basis">資料到 ' + swMmdd(data.date) + '(' + hlWd(data.date) + ') 收盤・表內 ' + dates.length + ' 個交易日（' + swMmdd(dates[0]) + '～' + swMmdd(data.date) + '）・這次看' + (w.days ? '近 ' + w.days + ' 天' : '近 60 天') + '＝' + swMmdd(w.from) + ' 起，可回測 ' + (w.backtestDays || 0) + ' 天・整理時間 ' + (c.builtAt ? String(c.builtAt).slice(5, 16).replace('T', ' ') : '—') + '</div>';
  return head + basis + hlBurstHtml(data) + hlMethodsHtml(data) + hlTodayHtml(data) + hlDailyHtml(data) +
    '<div class="bl-section bl-launch">⑥ 口徑與注意</div><ol class="hl-rules">' + (data.rules || []).map((r) => '<li>' + r + '</li>').join('') + '</ol>';
}
function swingSectionHtml(data){
  const sec = swingState.section, picks = data.picks || {}, counts = data.counts || {}, rules = data.rules || {};
  if (sec === 'summary'){
    const t = data.tiles || {};
    return '<div class="sw-tiles">' +
      '<div class="sw-tile"><b>' + (t.crossedQualified || 0) + '</b><span>今日真穿月線(檔)</span></div>' +
      '<div class="sw-tile"><b>' + (t.bodyJump || 0) + '</b><span>體質轉強(檔)</span></div>' +
      '<div class="sw-tile"><b>' + (t.chips || 0) + '</b><span>籌碼面候選(檔)</span></div>' +
      '<div class="sw-tile"><b>' + (t.disposition || 0) + '</b><span>處置中(檔)</span></div>' +
      '<div class="sw-tile"><b>' + (t.upcoming || 0) + '</b><span>明日起處置(檔)</span></div>' +
      '<div class="sw-tile"><b>' + (t.releasing || 0) + '</b><span>明日出獄(檔)</span></div>' +
      (data.activeEtf ? '<div class="sw-tile"><b>' + (t.etfSyncBuy || 0) + '</b><span>主動式基金同步加碼(檔)</span></div>' : '') + '</div>' +
      '<ol class="sw-summary">' + (data.summary || []).map((line) => '<li>' + line + '</li>').join('') + '</ol>' +
      '<div class="sw-quote">先看族群再看個股：族群沒翻，個股只能算單兵</div>';
  }
  if (sec === 'disposition'){
    const d = data.disposition;
    if (!d) return '<div class="race-note">這一份是處置動態接入前整理的，沒有處置資料</div>';
    const block = (title, cls, list, kind, empty) => '<div class="bl-section ' + cls + '">' + title + '（' + list.length + '）</div>' +
      (list.length ? '<div class="sw-dlist">' + list.map((e) => swingDispoRowHtml(e, kind)).join('') + '</div>' : '<div class="race-note">' + empty + '</div>');
    return '<div class="sw-rule">' + (rules.disposition || '') + '。下一個交易日＝' + (d.nextTradingDay ? swMmdd(d.nextTradingDay) : '—') + '；只列族群名單內的股票，點一列開K線圖。</div>' +
      block('明日起處置', 'bl-launch', d.upcoming || [], 'upcoming', '沒有下一個交易日起處置的股票') +
      block('明日出獄', 'bl-brew', d.releasing || [], 'releasing', '沒有下一個交易日出獄的股票') +
      block('處置中', 'bl-launch', d.active || [], 'active', '目前沒有處置中的股票') +
      block('觀察名單・出獄 5 個交易日內', 'bl-brew', d.watch || [], 'watch', '沒有剛出獄的股票') +
      '<div class="sw-quote">出獄不等於能追：先看有沒有站回月線、法人有沒有回來</div>';
  }
  if (sec === 'etf') return swingEtfHtml(data);
  if (sec === 'groups'){
    const groups = data.groups || [];
    const shown = groups.slice(0, swingState.groupsLimit);
    return '<div class="sw-rule">族群層數據・' + swMmdd(data.date) + ' 收盤：站上月線檔數＝收盤在 20 日線之上的檔數；法人 5 日＝三大法人最近 5 個交易日合計；收盤排名＝當天平均漲跌幅名次（前 10 名＝熱門族）。</div>' +
      '<div class="sw-cards">' + shown.map(swingGroupCardHtml).join('') + '</div>' +
      (groups.length > shown.length ? '<div class="chips-more"><button class="chart-tab chips-btn" id="swingMoreGroups">再顯示 ' + Math.min(12, groups.length - shown.length) + ' 個族群（共 ' + groups.length + ' 個）</button></div>' : '') +
      '<div class="sw-quote">先看族群再看個股：族群沒翻，個股只能算單兵</div>';
  }
  if (sec === 'ma'){
    const notes = data.notes || {};
    const bodyList = picks.body || [], fullList = picks.full || [];
    const sustained = (notes.sustained || []).map((x) => x.name + '（均線 ' + x.score + '）').join('、');
    const jumps = (notes.jumpTop || []).map((x) => x.name + ' ' + x.from + '→' + x.to).join('、');
    return '<div class="bl-section bl-launch">體質轉強・問診七科判強勢 ' + (counts.strong || 0) + ' 檔，取均線分數跳升 ≥3 者 ' + (counts.body || 0) + ' 檔，列前 ' + bodyList.length + ' 檔</div>' +
      '<div class="sw-rule">' + (rules.body || '') + '。風險提示：' + (rules.risks || '') + '。</div>' +
      (bodyList.length ? '<div class="sw-cards">' + bodyList.map((x) => swingCardHtml(x)).join('') + '</div>' : '<div class="race-note">那天沒有問診判強勢且均線分數跳升 3 分以上的股票</div>') +
      '<div class="sw-noteBox">續強確認（昨日已強、今日維持）：' + (sustained || '無') + '</div>' +
      '<div class="sw-quote">跳升＝從弱轉強的第一天，比一直強的更值得記</div>' +
      '<div class="bl-section bl-brew">均線結構轉強・' + swMmdd(data.date) + ' 收盤新達 15 分 ' + (counts.full || 0) + ' 檔，列前 ' + fullList.length + ' 檔</div>' +
      '<div class="sw-rule">' + (rules.full || '') + '。</div>' +
      (fullList.length ? '<div class="sw-cards">' + fullList.map((x) => swingCardHtml(x, { green: true })).join('') + '</div>' : '<div class="race-note">那天沒有新達 15 分的股票</div>') +
      '<div class="sw-noteBox">跳升最多：' + (jumps || '無') + '</div>' +
      '<div class="sw-quote">滿分不等於能追，看估值與法人有沒有跟</div>';
  }
  const list = picks[sec] || [];
  const title = sec === 'chips' ? '籌碼面精選' : '技術面精選';
  const sub = sec === 'chips' ? '大戶週增、法人連買、主力連買優先・候選 ' + (counts.chips || 0) + ' 檔，列前 ' + list.length + ' 檔'
    : '真穿月線 ' + (counts.tech || 0) + ' 檔；剛站上未達門檻 ' + (counts.techNear || 0) + ' 檔不列';
  const skipped = sec === 'tech' ? (data.techSkipped || []).map((x) => x.name + '（' + x.why + '）').join('、') : '';
  const quote = sec === 'chips' ? '籌碼是候選名單，型態確認再進' : '站上月線第一天，防守就是月線本身';
  return '<div class="bl-section ' + (sec === 'tech' ? 'bl-brew' : 'bl-launch') + '">' + title + '・' + sub + '</div>' +
    '<div class="sw-rule">' + (rules[sec] || '') + '。風險提示：' + (rules.risks || '') + '。防守價＝' + swMmdd(data.date) + ' 收盤的月線與最近三天最低價，下一個交易日適用。</div>' +
    (rules.fund ? '<div class="sw-rule">' + rules.fund + '。</div>' : '') +
    (skipped ? '<div class="sw-noteBox">略過：' + skipped + '</div>' : '') +
    (list.length ? '<div class="sw-cards">' + list.map((x) => swingCardHtml(x, { green: sec === 'tech' })).join('') + '</div>' : '<div class="race-note">那天沒有符合條件的股票</div>') +
    '<div class="sw-quote">' + quote + '</div>' +
    (sec === 'chips' ? swingLastWeekHtml(data) : '');
}
const SWING_FOOT = '<div class="sw-foot">教學與觀念紀錄，依系統既有資料整理，非投資建議；個股僅為型態與數據紀錄，非買賣推介。本益比、月營收年增、集保 400 張以上大戶週籌碼、處置動態與上一週籌碼對照每個交易日收盤後更新；主動式基金五檔的持股在各投信晚上公告後更新。</div>';
function renderSwing(){
  const tabs = document.getElementById('swingTabs');
  tabs.innerHTML = SWING_SECTIONS.map((sc) => '<button class="chart-tab signal-tab' + (swingState.section === sc.key ? ' active' : '') + '" data-section="' + sc.key + '">' + sc.label + '</button>').join('');
  const body = document.getElementById('swingBody');
  const data = swingData();
  if (!data){
    body.innerHTML = swingDatePillsHtml(swingCache['']) + '<div class="signal-empty"><div class="se-title">' + (swingFailedAt[swingState.date || ''] ? '讀取失敗' : '讀取中…') + '</div><div class="se-sub">後端每個交易日收盤後整理；讀不到的話稍後再試。</div></div>';
    return;
  }
  if (data.status !== 'ok'){
    body.innerHTML = swingDatePillsHtml(data) + '<div class="signal-empty"><div class="se-title">' + (swingState.date ? '那一天沒有報告' : '還沒有下午報') + '</div><div class="se-sub">' + (data.reason || '第一個交易日收盤後會開始整理。') + '</div></div>';
    return;
  }
  body.innerHTML = swingDatePillsHtml(data) + swingBasisHtml(data) + swingSectionHtml(data) + SWING_FOOT;
}
function openSwingPanel(){
  document.getElementById('swingModal').hidden = false;
  renderSwing();
}
function closeSwingPanel(){ document.getElementById('swingModal').hidden = true; }
document.getElementById('swingClose').addEventListener('click', closeSwingPanel);
document.getElementById('swingModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeSwingPanel(); });
document.getElementById('swingTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-section]');
  if (!btn) return;
  swingState.section = btn.dataset.section;
  renderSwing();
});
document.getElementById('swingBody').addEventListener('click', (e) => {
  const day = e.target.closest('.sw-date-btn');
  if (day){ swingState.date = day.dataset.date || ''; swingState.groupsLimit = 12; renderSwing(); return; }
  if (e.target.closest('#swingMoreGroups')){ swingState.groupsLimit += 12; renderSwing(); return; }
  const more = e.target.closest('.sw-etf-more');
  if (more){ swingState.etfOpen[more.dataset.etf] = !swingState.etfOpen[more.dataset.etf]; renderSwing(); return; }
  const card = e.target.closest('.sw-card[data-code], .sw-drow[data-code]');
  if (card){
    if (!useFloatingCharts()){
      document.getElementById('swingModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(card.dataset.code, card.dataset.name);
  }
});

// ---- 創高黑龍（黑龍回測）獨立面板：2026-10-04 使用者，從下午報分離出來 ----
function renderHeilong(){ document.getElementById('heilongBody').innerHTML = swingHeilongHtml() + SWING_FOOT; }
function openHeilongPanel(){
  document.getElementById('heilongModal').hidden = false;
  renderHeilong();
}
function closeHeilongPanel(){ document.getElementById('heilongModal').hidden = true; }
document.getElementById('heilongClose').addEventListener('click', closeHeilongPanel);
document.getElementById('heilongModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeHeilongPanel(); });
document.getElementById('heilongBody').addEventListener('click', (e) => {
  // K棒／停利／回測天數／範圍按鈕點了立刻重算；重新計算、預設、存參數；每日明細展開
  const hlBtn = e.target.closest('.hl-k, .hl-tp, .hl-days, .hl-scope');
  if (hlBtn){
    if (hlBtn.dataset.k) hlParams.k = hlBtn.dataset.k;
    if (hlBtn.dataset.tp) hlParams.tp = Number(hlBtn.dataset.tp);
    if (hlBtn.dataset.days !== undefined) hlParams.days = Number(hlBtn.dataset.days);
    if (hlBtn.dataset.scope) hlParams.scope = hlBtn.dataset.scope;
    hlRun(); return;
  }
  if (e.target.closest('#hlRun')){ hlRun(); return; }
  if (e.target.closest('#hlReset')){ hlParams = Object.assign({}, HL_DEFAULTS); hlRun(); return; }
  if (e.target.closest('#hlSave')){
    try { localStorage.setItem('heilongParams', JSON.stringify(hlParams)); hlState.savedAt = Date.now(); } catch (err) { /* 記不住就算了 */ }
    renderHeilong(); return;
  }
  const dayHead = e.target.closest('.hl-day-head');
  if (dayHead){ hlState.open[dayHead.dataset.date] = !hlState.open[dayHead.dataset.date]; renderHeilong(); return; }
  const card = e.target.closest('.hl-row[data-code]');
  if (card){
    if (!useFloatingCharts()){
      document.getElementById('heilongModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(card.dataset.code, card.dataset.name);
  }
});
for (const type of ['input', 'change']) document.getElementById('heilongBody').addEventListener(type, (e) => {
  const el = e.target;
  if (!el || !el.dataset || !el.dataset.key) return;
  if (el.classList.contains('hl-chk')) hlParams[el.dataset.key] = !!el.checked;
  else if (el.classList.contains('hl-sel')) hlParams[el.dataset.key] = el.value;
  else if (el.classList.contains('hl-in')) hlParams[el.dataset.key] = el.value === '' ? '' : Number(el.value);
});

// ---- 每日持股健診（2026-09-28 使用者：照學員專區「每日持股健診」做）----
// 貼一串股號 → /api/checkup 拿回每檔收盤後算好的三面向分數（基本面／籌碼面／技術面，0～100）、防守線（三日低／月線／紅半）、
// 七科小體檢；綜合在這裡照你勾的面向與權重算。清單與偏好只存在這台瀏覽器（localStorage）。
const CK_DEFAULT_PREFS = { fund: true, chip: true, tech: true, wFund: 34, wChip: 33, wTech: 33, zero: false, sort: 'overall', compact: false, byGroup: false };
const CK_DIMS = [['fund', '📒 基本面', '月營收年增／月增＋本益比位階', 'wFund'], ['chip', '💰 籌碼面', '大戶週增＋法人 5 日＋主力 5 日', 'wChip'], ['tech', '📈 技術面', '內定均線分數換成百分', 'wTech']];
const CK_SUBJECT_LABELS = { ma: '均線', grp: '族群', pos: '族內名次', chip: '籌碼', pe: '本益比', rev: '營收', inst: '法人' };
let ckPrefs = Object.assign({}, CK_DEFAULT_PREFS);
let ckLists = { current: '', saved: {} };
try { ckPrefs = Object.assign({}, CK_DEFAULT_PREFS, JSON.parse(localStorage.getItem('checkupPrefs') || '{}') || {}); } catch (e) { /* 用預設 */ }
try { const saved = JSON.parse(localStorage.getItem('checkupLists') || 'null'); if (saved && typeof saved === 'object') ckLists = Object.assign({ current: '', saved: {} }, saved); } catch (e) { /* 用預設 */ }
let ckState = { codes: [], query: null, data: null, loading: false, failedAt: 0, error: '', open: {}, savedNote: '', listName: '', groups: [] };   // groups＝勾起來要看的族群（空＝全部）
function ckSavePrefs(){ try { localStorage.setItem('checkupPrefs', JSON.stringify(ckPrefs)); } catch (e) { /* 記不住就算了 */ } }
function ckSaveLists(){ try { localStorage.setItem('checkupLists', JSON.stringify(ckLists)); } catch (e) { /* 記不住就算了 */ } }
let ckNameMap = null;
function ckResolve(text){
  // 股號用 / 、逗號、空白或換行隔開；打股名也可以（族群表裡查得到的）
  if (!ckNameMap){ ckNameMap = {}; for (const g of GROUPS) for (const s of (g.stocks || [])) if (s.name) ckNameMap[s.name] = s.code; }
  const out = [];
  for (const raw of String(text || '').split(/[\\/,，、\\s]+/)){
    const t = raw.trim(); if (!t) continue;
    let code = /^\\d{4,6}[A-Za-z]?$/.test(t) ? t.toUpperCase() : (ckNameMap[t] || (/^(\\d{4,6}[A-Za-z]?)/.exec(t) || [])[1] || '');
    if (code && !out.includes(code)) out.push(code);
  }
  return out.slice(0, 120);
}
async function ensureCheckup(){
  const query = ckState.codes.join(',');
  if (!query){ ckState.data = null; ckState.query = null; return; }
  if (ckState.query === query && (ckState.data || ckState.loading)) return;
  if (ckState.query === query && ckState.failedAt && Date.now() - ckState.failedAt < 30000) return;
  ckState.query = query; ckState.loading = true; ckState.data = null; ckState.error = '';
  try {
    const res = await fetch('/api/checkup?codes=' + encodeURIComponent(query));
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error((data && (data.detail || data.error)) || ('checkup http ' + res.status));
    if (!data || !data.status) throw new Error('bad payload');
    if (ckState.query !== query) return;
    ckState.data = data; ckState.failedAt = 0;
  } catch (e) {
    if (ckState.query !== query) return;
    ckState.failedAt = Date.now(); ckState.error = String((e && e.message) || e);
  } finally {
    if (ckState.query === query) ckState.loading = false;
  }
  if (!document.getElementById('checkupModal').hidden) renderCheckup();
}
function ckRun(text){
  ckState.codes = ckResolve(text);
  ckLists.current = ckState.codes.join('/'); ckSaveLists();
  ckState.query = null; ckState.failedAt = 0; ckState.open = {};
  renderCheckup();
}
function ckOverall(row){
  const s = row.scores || {};
  const dims = [['fund', ckPrefs.fund, Number(ckPrefs.wFund) || 0], ['chip', ckPrefs.chip, Number(ckPrefs.wChip) || 0], ['tech', ckPrefs.tech, Number(ckPrefs.wTech) || 0]];
  let total = 0, wsum = 0;
  for (const [key, on, w] of dims){
    if (!on || w <= 0) continue;
    const v = s[key];
    if (v === null || v === undefined){ if (!ckPrefs.zero) continue; }
    total += (v || 0) * w; wsum += w;
  }
  return wsum > 0 ? Math.round(total / wsum) : null;
}
const ckLabel = (v) => (v === null || v === undefined ? '' : v >= 80 ? '強' : v >= 60 ? '中上' : v >= 45 ? '普通' : v >= 30 ? '偏弱' : '弱');
const ckScoreHtml = (v) => (v === null || v === undefined ? '<span class="ck-score none">—</span>' : '<span class="ck-score s' + (v >= 80 ? 4 : v >= 60 ? 3 : v >= 45 ? 2 : v >= 30 ? 1 : 0) + '">' + v + '</span>');
const ckPrice = (v) => (v === null || v === undefined ? '—' : hlPrice(v));
function ckSortValue(row, key){
  if (key === 'overall') return ckOverall(row);
  if (key === 'chg20') return row.chg20Pct;
  if (key === 'dist') return row.distMa20Pct;
  return (row.scores || {})[key];
}
function ckSorted(rows){
  const key = ckPrefs.sort || 'overall';
  return rows.slice().sort((a, b) => {
    const va = ckSortValue(a, key), vb = ckSortValue(b, key);
    if (va === null || va === undefined) return (vb === null || vb === undefined) ? 0 : 1;
    if (vb === null || vb === undefined) return -1;
    return vb - va;
  });
}
function ckDefenseHtml(r){
  const d = r.def;
  if (!d) return '<span class="muted">日K不足</span>';
  return '<div class="ck-def"><b>' + ckPrice(d.low3T) + '</b><span class="muted"> 三日低</span><br>' + ckPrice(d.ma20T) + '<span class="muted"> 月線</span>' + (d.halfT ? '<br>' + ckPrice(d.halfT) + '<span class="muted"> 紅半</span>' : '') + '</div>';
}
function ckJudgeHtml(r){
  const d = r.def;
  if (!d) return '—';
  const bad = d.brkMa || d.brkL3 || d.brkHalf;
  return '<span class="ck-judge ' + (bad ? 'bad' : 'ok') + '">' + d.label + '</span>' + (d.halfT && !bad ? '<span class="muted">・🚩 有紅半</span>' : '');
}
function ckSubjectsHtml(r){
  const sub = r.subjects;
  if (!sub || !sub.sc) return '';
  return Object.entries(sub.sc).filter(([k, v]) => v !== null && v !== undefined).map(([k, v]) => '<span class="ck-sub s' + v + '">' + CK_SUBJECT_LABELS[k] + ' ' + v + '</span>').join(' ') +
    '<span class="muted">　🔴 ' + sub.red + '・🟢 ' + sub.green + '・' + (sub.cls || '—') + '</span>';
}
function ckDetailHtml(r){
  const f = r.fund || {}, c = r.chip || {}, d = r.def || {}, s = r.scores || {};
  const fundText = swHas(f.yoy) ? swMonth(f.ym) + '營收年增 <b>' + swPct(f.yoy, 1) + '</b>・月增 ' + swPct(f.mom, 1) : '沒有月營收資料';
  const peText = swHas(f.pe) ? '本益比 <b>' + f.pe + '</b>' + (f.peDate ? '（' + swMmdd(f.peDate) + '）' : '') : '沒有本益比';
  const chipText = (swHas(c.weekPct) ? '大戶週' + (c.weekPct >= 0 ? '增' : '減') + ' <b>' + swPct(c.weekPct, 1) + '</b>' + (c.weeks > 0 ? '（連 ' + c.weeks + ' 週）' : '') + (c.tdccDate ? '・' + swMmdd(c.tdccDate) : '') : '集保週資料還沒進來') +
    '<br>法人 5 日 ' + (swHas(c.inst5) ? '<b class="' + dirClass(c.inst5) + '">' + swLots(c.inst5) + '</b>' + (c.instStreak > 0 ? '・連買 ' + c.instStreak + ' 天' : c.instStreak < 0 ? '・連賣 ' + (-c.instStreak) + ' 天' : '') : '—') +
    '・今日 ' + (swHas(c.instToday) ? '<span class="' + dirClass(c.instToday) + '">' + swLots(c.instToday) + '</span>' : '—') +
    '<br>主力 5 日 ' + (swHas(c.mf5) ? '<b class="' + dirClass(c.mf5) + '">' + swLots(c.mf5) + '</b>' + (c.mfStreak > 0 ? '・連買 ' + c.mfStreak + ' 天' : c.mfStreak < 0 ? '・連賣 ' + (-c.mfStreak) + ' 天' : '') : '—');
  const ma = r.ma || {};
  const techText = '均線分數（內定）<b>' + (swHas(r.score2) ? r.score2 : '—') + '</b>/15' + (swHas(r.groupAvg2) ? '・族群平均 ' + r.groupAvg2 : '') + (r.groupRank ? '・族內第 ' + r.groupRank + '/' + r.groupN : '') +
    '<br>MA5 ' + ckPrice(ma['5']) + '・MA10 ' + ckPrice(ma['10']) + '・MA20 ' + ckPrice(ma['20']) + '・MA60 ' + ckPrice(ma['60']) +
    (r.def ? '<br>今日判定：三日低 ' + ckPrice(d.low3Y) + '（' + swPct(d.dL3, 1) + '）・月線 ' + ckPrice(d.ma20Y) + '（' + swPct(d.dMa, 1) + '）' + (d.halfY ? '・紅半 ' + ckPrice(d.halfY) + '（' + swPct(d.dHalf, 1) + '）' : '') + ' → ' + d.label : '');
  return '<tr class="ck-detail"><td colspan="11"><div class="ck-dgrid">' +
    '<div>📒 基本面 ' + ckScoreHtml(s.fund) + '<br>' + fundText + '<br>' + peText + '</div>' +
    '<div>💰 籌碼面 ' + ckScoreHtml(s.chip) + '<br>' + chipText + '</div>' +
    '<div>📈 技術面 ' + ckScoreHtml(s.tech) + '<br>' + techText + '</div></div>' +
    '<div style="margin-top:6px">七科：' + ckSubjectsHtml(r) + (r.disposed ? '<span class="muted">　🔒 處置中</span>' : '') + '</div></td></tr>';
}
function ckRowHtml(r){
  const ov = ckOverall(r), open = !!ckState.open[r.code];
  return '<tr class="ck-row" data-code="' + r.code + '" data-name="' + (r.name || '') + '">' +
    '<td class="l ck-stock"><span class="ck-code">' + r.code + '</span> <span class="ck-name">' + (r.name || '') + '</span>' + wlStarHtml(r.code, r.name || '') + chipsFlagPillsHtml(r.code) + (r.stale ? '<span class="muted">（資料到 ' + swMmdd(r.date) + '）</span>' : '') + '<span class="ck-grp">' + (r.group || '—') + '</span></td>' +
    '<td>' + ckScoreHtml((r.scores || {}).fund) + '</td><td>' + ckScoreHtml((r.scores || {}).chip) + '</td><td>' + ckScoreHtml((r.scores || {}).tech) + '</td>' +
    '<td>' + ckScoreHtml(ov) + ' <span class="ck-lab">' + ckLabel(ov) + '</span></td>' +
    '<td>' + ckPrice(r.close) + ' <span class="ck-lab ' + dirClass(r.chgPct || 0) + '">' + swPct(r.chgPct, 1) + '</span></td>' +
    '<td class="' + dirClass(r.chg20Pct || 0) + '">' + swPct(r.chg20Pct, 1) + '</td><td class="' + dirClass(r.distMa20Pct || 0) + '">' + swPct(r.distMa20Pct, 1) + '</td>' +
    '<td class="l">' + ckDefenseHtml(r) + '</td><td class="l">' + ckJudgeHtml(r) + '</td>' +
    '<td><span class="ck-btn ck-toggle" data-code="' + r.code + '" title="明細">' + (open ? '▾' : '▸') + '</span><span class="ck-btn ck-diag" data-code="' + r.code + '" title="完整問診">🩺</span><span class="ck-btn ck-remove" data-code="' + r.code + '" title="從清單刪掉">✕</span></td></tr>' +
    (open ? ckDetailHtml(r) : '');
}
const ckGroupKey = (r) => (r && r.group) || '—';
const ckGroupLabel = (k) => (k === '—' ? '沒有族群' : k);
function ckSortMetric(r){
  // 分族群時族群的先後：照目前排序欄的族內平均（綜合／三面向／20日漲幅／距月線）
  const key = ckPrefs.sort;
  if (key === 'overall') return ckOverall(r);
  if (key === 'chg20') return r.chg20Pct; if (key === 'dist') return r.distMa20Pct;
  return (r.scores || {})[key];
}
function ckSections(all){
  // 回 { counts, keys, rows（篩過的）, sections[{key,label,rows,avg}] }；勾了族群就只留那些族群；分族群顯示時一族一段
  const counts = {}; all.forEach((r) => { const k = ckGroupKey(r); counts[k] = (counts[k] || 0) + 1; });
  const keys = Object.keys(counts).sort((a, b) => ((a === '—') - (b === '—')) || (counts[b] - counts[a]) || a.localeCompare(b, 'zh-Hant'));
  ckState.groups = ckState.groups.filter((k) => counts[k]);
  const rows = ckState.groups.length ? all.filter((r) => ckState.groups.includes(ckGroupKey(r))) : all;
  let sections = [{ key: null, label: '', rows, avg: null }];
  if (ckPrefs.byGroup){
    const by = {}; rows.forEach((r) => { (by[ckGroupKey(r)] = by[ckGroupKey(r)] || []).push(r); });
    sections = Object.keys(by).map((k) => { const vals = by[k].map(ckSortMetric).filter(swHas); const ovs = by[k].map(ckOverall).filter(swHas);
      return { key: k, label: ckGroupLabel(k), rows: by[k], metric: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null, avg: ovs.length ? Math.round(ovs.reduce((a, b) => a + b, 0) / ovs.length) : null }; });
    sections.sort((a, b) => ((a.key === '—') - (b.key === '—')) || ((b.metric === null ? -1e9 : b.metric) - (a.metric === null ? -1e9 : a.metric)) || (b.rows.length - a.rows.length));
  }
  return { counts, keys, rows, sections };
}
function ckGroupBarHtml(sec, total){
  const chip = (k, label, n, on) => '<span class="ck-gchip' + (on ? ' on' : '') + '" data-group="' + k.replace(/"/g, '&quot;') + '">' + (on ? '☑' : '☐') + ' <b>' + label + '</b> <span class="ck-gn">' + n + '</span></span>';
  return '<div class="ck-line ck-groups"><b>③ 看族群</b>' + chip('*', '全部', total, !ckState.groups.length) +
    sec.keys.map((k) => chip(k, ckGroupLabel(k), sec.counts[k], ckState.groups.includes(k))).join('') +
    '<label><input type="checkbox" class="ck-chk" data-key="byGroup"' + (ckPrefs.byGroup ? ' checked' : '') + '> 分族群顯示</label>' +
    '<span class="muted">點族群只看那幾族（可多選）；分族群顯示＝整張表一族一段，族的先後照目前排序欄的族內平均</span></div>';
}
function ckSectionRowsHtml(sections){
  return sections.map((sec) => (sec.key === null ? '' : '<tr class="ck-ghead"><td colspan="11">🏷 ' + sec.label + ' <span class="muted">' + sec.rows.length + ' 檔' + (sec.avg !== null ? '・綜合平均 ' + sec.avg : '') + '・守住 ' + sec.rows.filter((r) => r.def && !r.def.brkMa && !r.def.brkL3 && !r.def.brkHalf).length + '／破線 ' + sec.rows.filter((r) => r.def && (r.def.brkMa || r.def.brkL3 || r.def.brkHalf)).length + '</span></td></tr>') + sec.rows.map(ckRowHtml).join('')).join('');
}
function ckCompactText(rows){
  const data = ckState.data || {};
  return '每日持股健診 ' + swMmdd(data.date) + ' 收盤\\n' + rows.map((r) => {
    const ov = ckOverall(r), d = r.def || {}, s = r.scores || {};
    const n = (v) => (v === null || v === undefined ? '—' : v);
    return r.code + ' ' + (r.name || '') + '　綜合 ' + n(ov) + (ov !== null ? ' ' + ckLabel(ov) : '') + '　基 ' + n(s.fund) + '／籌 ' + n(s.chip) + '／技 ' + n(s.tech) +
      '　收 ' + ckPrice(r.close) + '　明天守 ' + ckPrice(d.low3T) + '／月線 ' + ckPrice(d.ma20T) + (d.halfT ? '／紅半 ' + ckPrice(d.halfT) : '') + '　' + (d.label || '');
  }).join('\\n');
}
function ckFormHtml(){
  const names = Object.keys(ckLists.saved || {});
  const dims = CK_DIMS.map(([key, label, desc, wkey]) => '<div class="ck-dim' + (ckPrefs.sort === key ? ' active' : '') + (ckPrefs[key] ? '' : ' off') + '" data-dim="' + key + '">' +
    '<label onclick="event.stopPropagation()"><input type="checkbox" class="ck-chk" data-key="' + key + '"' + (ckPrefs[key] ? ' checked' : '') + '> <b>' + label + '</b></label><span>' + desc + '</span>' +
    '<span class="ck-w" onclick="event.stopPropagation()">權重 <input class="ck-in ck-weight" data-key="' + wkey + '" type="number" min="0" max="100" step="1" value="' + ckPrefs[wkey] + '"> %</span></div>').join('') +
    '<div class="ck-dim' + (ckPrefs.sort === 'overall' ? ' active' : '') + '" data-dim="overall"><b>🏆 綜合</b><span>勾選面向的加權平均</span><label onclick="event.stopPropagation()"><input type="checkbox" class="ck-chk" data-key="zero"' + (ckPrefs.zero ? ' checked' : '') + '> 沒資料的面向當 0 分</label></div>';
  return '<div class="ck-form">' +
    '<div class="ck-line"><b>① 貼上你的股票清單</b><span class="muted">股號用 /、逗號、空白或換行隔開都可以；族群表裡的股打股名也行</span></div>' +
    '<textarea class="ck-ta" id="ckInput" placeholder="2481/2408/2344 或 2330 台積電 2317 鴻海">' + (ckLists.current || '') + '</textarea>' +
    '<div class="ck-line"><button class="chart-tab chips-btn active" id="ckRun">📊 開始健診</button><button class="chart-tab chips-btn" id="ckClear">清空</button><button class="chart-tab chips-btn" id="ckExample">範例</button>' +
      '<span class="hl-field">我的清單 <select class="ck-sel" id="ckListSel"><option value="">' + (names.length ? '選一組' : '（還沒存過）') + '</option>' + names.map((n) => '<option value="' + n.replace(/"/g, '&quot;') + '"' + (ckState.listName === n ? ' selected' : '') + '>' + n + '（' + ckResolve(ckLists.saved[n]).length + ' 檔）</option>').join('') + '</select>' +
      '<button class="chart-tab chips-btn" id="ckSave">💾 存成清單</button><button class="chart-tab chips-btn" id="ckDelete">🗑 刪掉這組</button><button class="chart-tab chips-btn" id="ckCopy">📋 複製清單</button></span>' + (ckState.savedNote ? '<span class="muted">' + ckState.savedNote + '</span>' : '') + '</div>' +
    (ckState.codes.length ? '<div class="ck-tags">' + ckState.codes.map((c) => '<span class="ck-tag"><b>' + c + '</b>' + ((ckState.data && (ckState.data.rows || []).find((r) => r.code === c) || {}).name || '') + '<span class="ck-x ck-remove" data-code="' + c + '">✕</span></span>').join('') + '</div>' : '') +
    '<div class="ck-line"><b>② 勾選要用的面向</b><span class="muted">勾起來的才算進綜合；點方塊＝改用它排序；權重改完按重新計算或直接生效</span></div>' +
    '<div class="ck-dims">' + dims + '</div>' +
    '<div class="sw-rule">清單與權重只存在這台瀏覽器；換裝置請按「複製清單」把整串代號帶過去。</div></div>';
}
function renderCheckup(){
  const body = document.getElementById('checkupBody');
  ensureCheckup();
  let html = ckFormHtml();
  if (!ckState.codes.length){
    body.innerHTML = html + '<div class="race-note">貼上股號後按「開始健診」</div>' + ckRulesHtml(null);
    return;
  }
  const data = ckState.data;
  if (!data){
    body.innerHTML = html + '<div class="signal-empty"><div class="se-title">' + (ckState.failedAt ? '讀取失敗' + (ckState.error ? '：' + ckState.error : '') : '健診中…') + '</div><div class="se-sub">後端每個交易日收盤後整理；讀不到的話稍後再試。</div></div>';
    return;
  }
  if (data.status !== 'ok'){
    body.innerHTML = html + '<div class="signal-empty"><div class="se-title">還沒有健診資料</div><div class="se-sub">' + (data.reason || '第一個交易日收盤後會開始整理。') + '</div></div>';
    return;
  }
  const all = ckSorted(data.rows || []);
  const sec = ckSections(all);
  const rows = sec.sections.reduce((acc, x) => acc.concat(x.rows), []);   // 畫出來的順序（篩過、分族群後）
  const th = (key, label) => '<th class="' + (ckPrefs.sort === key ? 'on' : '') + '" data-sort="' + key + '">' + label + (ckPrefs.sort === key ? ' ▼' : '') + '</th>';
  html += '<div class="sw-basis">資料 ' + swMmdd(data.date) + ' 收盤・' + all.length + ' 檔' + (rows.length !== all.length ? '（只看 ' + ckState.groups.map(ckGroupLabel).join('、') + '：' + rows.length + ' 檔）' : '') + (data.missing && data.missing.length ? '・本站沒有日K：' + data.missing.join('、') : '') + '・整理時間 ' + (data.collector && data.collector.builtAt ? String(data.collector.builtAt).slice(5, 16).replace('T', ' ') : '—') + '・點股票開K線圖、點 ▸ 看三面向明細</div>';
  html += ckGroupBarHtml(sec, all.length);
  html += '<div class="hl-scroll"><table class="ck-table"><thead><tr><th class="l">個股（' + rows.length + '）</th>' + th('fund', '📒 基本面') + th('chip', '💰 籌碼面') + th('tech', '📈 技術面') + th('overall', '🏆 綜合') +
    '<th>收盤(' + swMmdd(data.date) + ')</th>' + th('chg20', '20日漲幅') + th('dist', '距月線') + '<th class="l">明天防守價</th><th class="l">防守</th><th></th></tr></thead><tbody>' + ckSectionRowsHtml(sec.sections) + '</tbody></table></div>';
  html += '<div class="ck-line"><button class="chart-tab chips-btn" id="ckCompactBtn">📋 ' + (ckPrefs.compact ? '收起精簡版' : '精簡版文字') + '</button><button class="chart-tab chips-btn" id="ckCopyCompact">複製精簡版</button></div>';
  if (ckPrefs.compact) html += '<div class="ck-compact" id="ckCompact">' + ckCompactText(rows).replace(/</g, '&lt;') + '</div>';
  body.innerHTML = html + ckRulesHtml(data);
}
function ckRulesHtml(data){
  const rules = (data && data.rules) || [];
  return (rules.length ? '<div class="bl-section bl-brew">口徑與注意</div><ol class="ck-rules">' + rules.map((r) => '<li>' + r + '</li>').join('') + '</ol>' : '') +
    '<div class="sw-foot">分數是體質快照，不是買賣訊號；資料為收盤後數據，非即時報價，僅供學習參考，不構成投資建議。</div>';
}
function openCheckupPanel(){
  document.getElementById('checkupModal').hidden = false;
  if (!ckState.codes.length && ckLists.current) ckState.codes = ckResolve(ckLists.current);
  renderCheckup();
}
function closeCheckupPanel(){ document.getElementById('checkupModal').hidden = true; }
document.getElementById('checkupClose').addEventListener('click', closeCheckupPanel);
document.getElementById('checkupModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeCheckupPanel(); });
function ckCopy(text, note){
  const done = () => { ckState.savedNote = note; renderCheckup(); setTimeout(() => { if (ckState.savedNote === note){ ckState.savedNote = ''; renderCheckup(); } }, 4000); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done();
}
document.getElementById('checkupBody').addEventListener('click', (e) => {
  const input = () => (document.getElementById('ckInput') || {}).value || '';
  if (e.target.closest('#ckRun')){ ckRun(input()); return; }
  if (e.target.closest('#ckClear')){ ckState.codes = []; ckLists.current = ''; ckSaveLists(); ckState.data = null; ckState.query = null; renderCheckup(); return; }
  if (e.target.closest('#ckExample')){ ckRun('2481/2408/2344'); return; }
  if (e.target.closest('#ckSave')){
    const codes = ckResolve(input());
    if (!codes.length){ ckState.savedNote = '先貼股號再存'; renderCheckup(); return; }
    const name = window.prompt('這組清單叫什麼名字？', ckState.listName || '我的清單');
    if (!name) return;
    ckLists.saved[name] = codes.join('/'); ckState.listName = name; ckSaveLists(); ckRun(codes.join('/')); return;
  }
  if (e.target.closest('#ckDelete')){
    if (ckState.listName && ckLists.saved[ckState.listName]){ delete ckLists.saved[ckState.listName]; ckSaveLists(); }
    ckState.listName = ''; renderCheckup(); return;
  }
  if (e.target.closest('#ckCopy')){ ckCopy(ckResolve(input()).join('/'), '清單已複製'); return; }
  if (e.target.closest('#ckCompactBtn')){ ckPrefs.compact = !ckPrefs.compact; ckSavePrefs(); renderCheckup(); return; }
  if (e.target.closest('#ckCopyCompact')){ ckCopy(ckCompactText(ckSections(ckSorted((ckState.data && ckState.data.rows) || [])).sections.reduce((acc, x) => acc.concat(x.rows), [])), '精簡版已複製'); return; }
  const gchip = e.target.closest('.ck-gchip');
  if (gchip){
    const k = gchip.dataset.group;
    if (k === '*') ckState.groups = []; else ckState.groups = ckState.groups.includes(k) ? ckState.groups.filter((x) => x !== k) : ckState.groups.concat([k]);
    renderCheckup(); return;
  }
  const remove = e.target.closest('.ck-remove');
  if (remove){ ckRun(ckState.codes.filter((c) => c !== remove.dataset.code).join('/')); return; }
  const toggle = e.target.closest('.ck-toggle');
  if (toggle){ ckState.open[toggle.dataset.code] = !ckState.open[toggle.dataset.code]; renderCheckup(); return; }
  const diagBtn = e.target.closest('.ck-diag');
  if (diagBtn){ openDiagPanel(diagBtn.dataset.code); return; }
  const th = e.target.closest('th[data-sort]');
  if (th){ ckPrefs.sort = th.dataset.sort; ckSavePrefs(); renderCheckup(); return; }
  const dim = e.target.closest('.ck-dim[data-dim]');
  if (dim && !e.target.closest('input, label')){ ckPrefs.sort = dim.dataset.dim; ckSavePrefs(); renderCheckup(); return; }
  const stock = e.target.closest('td.ck-stock');
  if (stock){
    const row = stock.closest('tr');
    if (!useFloatingCharts()){
      document.getElementById('checkupModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(row.dataset.code, row.dataset.name);
  }
});
document.getElementById('checkupBody').addEventListener('change', (e) => {
  const el = e.target;
  if (el.classList.contains('ck-chk')){ ckPrefs[el.dataset.key] = !!el.checked; ckSavePrefs(); renderCheckup(); }
  else if (el.classList.contains('ck-weight')){ ckPrefs[el.dataset.key] = Math.max(0, Math.min(100, Number(el.value) || 0)); ckSavePrefs(); renderCheckup(); }
  else if (el.id === 'ckListSel'){ ckState.listName = el.value; if (el.value && ckLists.saved[el.value]) ckRun(ckLists.saved[el.value]); }
});

// ---- 自選股（2026-10-05 使用者）----
// 清單＝分組（持股／觀察…）→ 每檔 {code, name, note, addedAt}。設了同步碼就存在後端，兩台電腦＋手機同一份；
// 沒設只存在這台電腦。每次修改是一個函式：先改這台、存本機，有同步碼就送後端；別台電腦剛存過（後端回 409）
// 就換成最新的一份、把這台還沒送出去的修改再做一次再送，不會互相蓋掉。
// 報價：族群表裡的股票用首頁那份 /api/groups（15 秒）；族群外的用 /api/watch-quotes（面板開著時 15 秒）。
const WL_KEY_RE = /^[\\w一-鿿-]{6,40}$/;
const WL_SORTS = [['manual', '自訂順序'], ['pct', '漲跌幅'], ['holder', '盤中大戶力'], ['score', '均線分數']];
const WL_GROUP_INDEX = (() => {
  const m = {};
  for (const g of GROUPS) for (const s of g.stocks) if (!m[s.code]) m[s.code] = { name: s.name, group: g.name };
  return m;
})();
function wlEmpty(){ return { groups: [{ id: 'g1', name: '自選', items: [] }], settings: {} }; }
let wl = { key: '', data: wlEmpty(), version: 0, active: 'g1', sort: 'manual', queue: [], busy: false, loading: false,
  error: '', notice: '', syncedAt: null, extra: {}, extraAt: 0, showKey: false, retryTimer: null, timers: [],
  view: 'live', sortPnl: 'manual', sortChips: 'manual', editing: null, editDraft: null };
function wlEsc(s){
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function wlNormalize(){
  if (!wl.data || !Array.isArray(wl.data.groups)) wl.data = wlEmpty();
  if (!wl.data.groups.length) wl.data.groups.push({ id: 'g1', name: '自選', items: [] });
  if (!wl.data.settings || typeof wl.data.settings !== 'object') wl.data.settings = {};
  for (const g of wl.data.groups) if (!Array.isArray(g.items)) g.items = [];
  if (!wl.data.groups.some((g) => g.id === wl.active)) wl.active = wl.data.groups[0].id;
}
function wlReadLocal(){
  try {
    wl.key = localStorage.getItem('watchKey') || '';
    const cached = JSON.parse(localStorage.getItem('watchData') || 'null');
    if (cached && cached.data && Array.isArray(cached.data.groups)){ wl.data = cached.data; wl.version = Number(cached.version) || 0; }
    wl.sort = localStorage.getItem('watchSort') || 'manual';
    wl.active = localStorage.getItem('watchActive') || wl.active;
    wl.view = localStorage.getItem('watchView') || 'live';
    wl.sortPnl = localStorage.getItem('watchSortPnl') || 'manual';
    wl.sortChips = localStorage.getItem('watchSortChips') || 'manual';
  } catch (e) { /* 讀不到就用預設 */ }
  wlNormalize();
}
function wlSaveLocal(){
  try { localStorage.setItem('watchData', JSON.stringify({ data: wl.data, version: wl.version })); } catch (e) { /* 存不了就算了 */ }
}
function wlSavePrefs(){
  try {
    localStorage.setItem('watchSort', wl.sort); localStorage.setItem('watchActive', wl.active); localStorage.setItem('watchView', wl.view);
    localStorage.setItem('watchSortPnl', wl.sortPnl); localStorage.setItem('watchSortChips', wl.sortChips);
  } catch (e) { /* 存不了就算了 */ }
}
wlReadLocal();
function wlGroup(){ return wl.data.groups.find((g) => g.id === wl.active) || wl.data.groups[0]; }
function wlHas(code){ return wl.data.groups.some((g) => g.items.some((it) => it.code === code)); }
function wlCount(data){ return (data || wl.data).groups.reduce((n, g) => n + g.items.length, 0); }
function wlNewGroupId(data){
  let i = data.groups.length + 1;
  while (data.groups.some((g) => g.id === 'g' + i)) i++;
  return 'g' + i;
}
function wlNameOf(code, item){
  const g = WL_GROUP_INDEX[code];
  if (g) return g.name;
  if (item && item.name) return item.name;
  const x = wl.extra[code];
  return x && x.name ? x.name : code;
}

// ---- 同步
async function wlPost(path, payload){
  const res = await fetch(path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
  let body = null;
  try { body = await res.json(); } catch (e) { body = null; }
  return { res, body: body || {} };
}
function wlReplay(fns){
  for (const fn of fns){ try { fn(wl.data); } catch (e) { /* 這個修改在新版本上做不了就算了 */ } }
  wlNormalize();
}
function wlMutate(fn){
  fn(wl.data);
  wlNormalize();
  wlSaveLocal();
  wlAfterChange();
  if (wl.key){ wl.queue.push(fn); wlFlush(); }
}
async function wlFlush(){
  if (wl.busy || wl.loading || !wl.queue.length || !wl.key) return;
  wl.busy = true;
  const pending = wl.queue.splice(0);
  let ok = false;
  try {
    for (let attempt = 0; attempt < 3 && !ok; attempt++){
      const { res, body } = await wlPost('/api/watchlist/save', { key: wl.key, data: wl.data, baseVersion: wl.version });
      if (res.status === 409 && body.data){
        // 別台電腦剛存過：換成最新的一份，把這台還沒送出去的修改（包括送的時候又改的）再做一次
        wl.data = body.data; wl.version = Number(body.version) || 0;
        wlReplay(pending.concat(wl.queue));
        continue;
      }
      if (!res.ok || body.status !== 'ok') throw new Error(body.error || ('HTTP ' + res.status));
      wl.version = Number(body.version) || wl.version;
      if (body.data){ wl.data = body.data; wlReplay(wl.queue); }
      ok = true;
    }
    if (!ok) throw new Error('別台電腦一直在改');
    wl.error = '';
    wl.syncedAt = new Date();
  } catch (e) {
    wl.queue = pending.concat(wl.queue);
    wl.error = '同步失敗（' + (e && e.message || e) + '），先存在這台電腦，30 秒後再送';
    clearTimeout(wl.retryTimer);
    wl.retryTimer = setTimeout(wlFlush, 30000);
  } finally {
    wl.busy = false;
    wlSaveLocal();
    wlAfterChange();
    if (ok && wl.queue.length) wlFlush();
  }
}
function wlMergeInto(target, source){
  // 剛設同步碼、這台本來就有清單：同名分組合在一起，同一組裡同一檔不重複
  for (const sg of source.groups){
    if (!sg.items.length) continue;
    let tg = target.groups.find((g) => g.name === sg.name);
    if (!tg){ tg = { id: wlNewGroupId(target), name: sg.name, items: [] }; target.groups.push(tg); }
    for (const it of sg.items) if (!tg.items.some((x) => x.code === it.code)) tg.items.push(it);
  }
}
async function wlLoad(opts){
  if (!wl.key || wl.loading || wl.busy) return;
  wl.loading = true;
  let push = false;
  try {
    const { res, body } = await wlPost('/api/watchlist/load', { key: wl.key });
    if (!res.ok || body.status !== 'ok') throw new Error(body.error || ('HTTP ' + res.status));
    const version = Number(body.version) || 0;
    const remote = version && body.data && Array.isArray(body.data.groups) ? body.data : { groups: [], settings: {} };
    if (opts && opts.merge){
      const local = JSON.parse(JSON.stringify(wl.data)), before = JSON.stringify(remote);
      wl.data = JSON.parse(before); wl.version = version;
      wlMergeInto(wl.data, local);
      wlNormalize();
      push = wlCount() > 0 && JSON.stringify(wl.data) !== before;
    } else if (!wl.queue.length){
      if (version){ wl.data = remote; wl.version = version; wlNormalize(); }
      else if (wlCount()){ wl.version = 0; push = true; }   // 雲端還沒有這份：把這台的送上去
    }
    wl.error = '';
    wl.syncedAt = new Date();
  } catch (e) {
    wl.error = '讀取失敗（' + (e && e.message || e) + '）';
  } finally {
    wl.loading = false;
    wlSaveLocal();
    if (push) wl.queue.push(() => {});
    wlAfterChange();
    if (wl.queue.length) wlFlush();
  }
}
function wlSetKey(raw){
  const key = String(raw || '').trim().toLowerCase();
  if (!WL_KEY_RE.test(key)){
    wl.notice = '同步碼要 6～40 個字（英文、數字、中文、底線、減號），不能有空白';
    renderWatch();
    return;
  }
  wl.key = key; wl.version = 0; wl.notice = ''; wl.error = ''; wl.queue = [];
  try { localStorage.setItem('watchKey', key); } catch (e) { /* 存不了就算了 */ }
  renderWatch();
  wlLoad({ merge: true });
}
function wlStopSync(){
  if (!window.confirm('這台電腦不再同步？清單會留在這台，雲端那份不會刪，其他電腦照常同步。')) return;
  wl.key = ''; wl.queue = []; wl.error = ''; wl.syncedAt = null;
  clearTimeout(wl.retryTimer);
  try { localStorage.removeItem('watchKey'); } catch (e) { /* 存不了就算了 */ }
  renderWatch();
}

// ---- 修改清單
function wlParseInput(text){
  const parts = String(text || '').split(/[\\s,，、\\/;；]+/).map((x) => x.trim()).filter(Boolean);
  const found = [], unknown = [];
  for (const p of parts){
    const s = findStockByQuery(p);
    if (s) found.push({ code: String(s.code).toUpperCase(), name: s.name && s.name !== s.code ? s.name : '' });
    else unknown.push(p);
  }
  return { found, unknown };
}
function wlAddCodes(entries, groupId){
  const today = twTodayStr();
  wlMutate((data) => {
    const g = data.groups.find((x) => x.id === groupId) || data.groups[0];
    for (const e of entries){
      if (g.items.some((it) => it.code === e.code)) continue;
      const item = { code: e.code, addedAt: today };
      if (e.name && !WL_GROUP_INDEX[e.code]) item.name = e.name;
      g.items.push(item);
    }
  });
  wlFetchExtra(true);
}
function wlRemoveEverywhere(code){
  wlMutate((data) => { for (const g of data.groups) g.items = g.items.filter((it) => it.code !== code); });
}
function wlLearnNames(){
  // 族群外的股票第一次抓到股名就存進清單，其他電腦不用再查
  const missing = [];
  for (const g of wl.data.groups) for (const it of g.items){
    const x = wl.extra[it.code];
    if (!WL_GROUP_INDEX[it.code] && !it.name && x && x.name) missing.push(it.code);
  }
  if (!missing.length) return;
  wlMutate((data) => {
    for (const g of data.groups) for (const it of g.items){
      const x = wl.extra[it.code];
      if (!WL_GROUP_INDEX[it.code] && !it.name && x && x.name) it.name = String(x.name).slice(0, 20);
    }
  });
}

// ---- 報價
async function wlFetchExtra(force){
  const codes = [...new Set(wl.data.groups.flatMap((g) => g.items.map((it) => it.code)))].filter((c) => !WL_GROUP_INDEX[c]);
  if (!codes.length) return;
  if (!force && Date.now() - wl.extraAt < 14000) return;
  wl.extraAt = Date.now();
  try {
    const res = await fetch('/api/watch-quotes?codes=' + encodeURIComponent(codes.slice(0, 200).join(',')));
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.quotes){
      wl.extra = Object.assign({}, wl.extra, data.quotes);
      wlLearnNames();
      renderWatchTable();
    }
  } catch (e) { /* 下一輪再抓 */ }
}
function wlQuoteMap(){
  const m = {};
  if (lastData && !lastData.mock && Array.isArray(lastData.groups)){
    for (const g of lastData.groups) for (const s of g.stocks) if (s.price != null && !m[s.code]) m[s.code] = s;
  }
  for (const code in wl.extra){
    const x = wl.extra[code];
    if (!m[code] && x && x.price != null) m[code] = x;
  }
  return m;
}
function wlHolderMap(){
  const m = {};
  for (const r of mainForceRanking || []) if (r && r.code && !m[r.code]) m[r.code] = r;
  return m;
}
function wlScoreOf(code, price){
  const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null;
  return info && info.maSums && price > 0 ? maScoreFromSums(info, price, brewLaunchData.rules) : null;
}

// ---- 畫面
function wlSyncHtml(){
  if (!wl.key){
    return '<div class="wl-sync"><b>同步碼</b>' +
      '<input type="text" id="wlKeyInput" maxlength="40" autocomplete="off" placeholder="自己取一個，例如 judy-2026（6～40 字）">' +
      '<button class="wl-btn primary" id="wlKeySet">開始同步</button>' +
      (wl.notice ? '<span class="wl-status err">' + wlEsc(wl.notice) + '</span>' : '') +
      '<div class="wl-hint">還沒設定：清單只存在這台電腦。兩台電腦＋手機都輸入同一個同步碼，就會看到同一份清單（這台已經加的股票會一起帶上去）。' +
      '同步碼就像密碼，知道的人都能看到、改你的自選股，不要用太簡單的。</div></div>';
  }
  const shown = wl.showKey ? wl.key : wl.key.slice(0, 2) + '•••' + wl.key.slice(-1);
  const status = wl.error ? '<span class="wl-status err">' + wlEsc(wl.error) + '</span>'
    : wl.busy || wl.loading ? '<span class="wl-status">同步中…</span>'
    : wl.syncedAt ? '<span class="wl-status ok">✓ 已同步 ' + wl.syncedAt.toLocaleTimeString('zh-TW') + '</span>' : '';
  return '<div class="wl-sync"><b>同步碼</b><span class="wl-key">' + wlEsc(shown) + '</span>' +
    '<button class="wl-btn" id="wlKeyShow">' + (wl.showKey ? '隱藏' : '顯示') + '</button>' + status +
    '<span class="wl-sync-ops"><button class="wl-btn" id="wlSyncNow">立即同步</button><button class="wl-btn" id="wlKeyStop">這台停止同步</button></span></div>';
}
function wlTabsHtml(){
  return '<div class="wl-groups">' + wl.data.groups.map((g) => '<button class="wl-gtab' + (g.id === wl.active ? ' active' : '') + '" data-gid="' + wlEsc(g.id) + '">' +
      wlEsc(g.name) + '<span class="wl-gcount">' + g.items.length + '</span></button>').join('') +
    '<button class="wl-gtab add" id="wlGroupAdd" title="新增一個分組">＋ 分組</button>' +
    '<span class="wl-gops"><button class="wl-btn" id="wlGroupRename">改名</button><button class="wl-btn" id="wlGroupDelete">刪除這組</button></span></div>';
}
function renderWatch(){
  const body = document.getElementById('watchBody');
  if (!body) return;
  const g = wlGroup();
  body.innerHTML = wlSyncHtml() + wlTabsHtml() +
    '<div class="wl-add"><input type="text" id="wlAddInput" autocomplete="off" placeholder="輸入代號或名稱加入「' + wlEsc(g.name) + '」，可一次貼多檔：2330 2317 3707">' +
    '<button class="wl-btn primary" id="wlAddBtn">加入</button></div>' +
    (wl.addNote ? '<div class="wl-hint">' + wlEsc(wl.addNote) + '</div>' : '') +
    wlViewsHtml() +
    '<div class="wl-sorts">排序 ' + (WL_VIEW_SORTS[wl.view] || WL_SORTS).map((s) => '<button class="wl-sort' + (wlViewSort() === s[0] ? ' active' : '') + '" data-sort="' + s[0] + '">' + s[1] + '</button>').join('') + '</div>' +
    '<div id="wlTable"></div>' +
    '<div class="sw-foot">' + (WL_VIEW_FOOT[wl.view] || WL_VIEW_FOOT.live) + '</div>';
  renderWatchTable();
}
function renderWatchTable(){
  const el = document.getElementById('wlTable');
  if (!el || document.getElementById('watchModal').hidden) return;
  const active = document.activeElement;
  if (active && active.tagName === 'INPUT' && /^(number|text)$/.test(active.type) && el.contains(active)) return;    // 正在打成本、張數、折數：先不要重畫
  const draftCost = document.getElementById('wlEditCost'), draftLots = document.getElementById('wlEditLots');
  if (draftCost && draftLots) wl.editDraft = { code: draftCost.dataset.code, cost: draftCost.value, lots: draftLots.value };   // 打一半、點到別處：重畫後保留
  const g = wlGroup();
  if (!g.items.length){
    el.innerHTML = '<div class="signal-empty"><div class="se-title">這組還沒有股票</div><div class="se-sub">在上面輸入代號或名稱加入；首頁、盤中333、醞釀／發動、K線圖等名稱旁的 ☆ 也可以直接加入。</div></div>';
    return;
  }
  if (wl.view === 'pnl' || wl.view === 'chips'){
    wlEnsureCheckup();
    el.innerHTML = wl.view === 'pnl' ? wlPnlHtml(g) : wlChipsHtml(g);
    return;
  }
  const quotes = wlQuoteMap(), holders = wlHolderMap();
  let rows = g.items.map((it, idx) => {
    const q = quotes[it.code] || null;
    const price = q && Number(q.price) > 0 ? Number(q.price) : null;
    const pct = q && Number.isFinite(Number(q.changePercent)) ? Number(q.changePercent) : null;
    const chg = q && Number.isFinite(Number(q.change)) ? Number(q.change) : price !== null && pct !== null ? price - price / (1 + pct / 100) : null;
    const h = holders[it.code] || null;
    return { it, idx, q, price, pct, chg, holder: h, score: price !== null ? wlScoreOf(it.code, price) : null };
  });
  const by = (f) => (a, b) => {
    const x = f(a), y = f(b);
    if (x === null || x === undefined) return (y === null || y === undefined) ? a.idx - b.idx : 1;
    if (y === null || y === undefined) return -1;
    return y - x || a.idx - b.idx;
  };
  if (wl.sort === 'pct') rows.sort(by((r) => r.pct));
  else if (wl.sort === 'holder') rows.sort(by((r) => r.holder ? r.holder.strengthPct : null));
  else if (wl.sort === 'score') rows.sort(by((r) => r.score));
  const manual = wl.sort === 'manual';
  const groupOpts = (cur) => wl.data.groups.map((x) => '<option value="' + wlEsc(x.id) + '"' + (x.id === cur ? ' selected' : '') + '>' + wlEsc(x.name) + '</option>').join('');
  let up = 0, down = 0, flat = 0;
  const body = rows.map((r) => {
    const code = r.it.code, name = wlNameOf(code, r.it), cls = r.pct === null ? 'flat' : dirClass(r.pct);
    if (r.pct !== null){ if (r.pct > 0) up++; else if (r.pct < 0) down++; else flat++; }
    const grp = WL_GROUP_INDEX[code] ? WL_GROUP_INDEX[code].group : '';
    const limit = r.q ? { limitUp: !!r.q.limitUp, limitDown: !!r.q.limitDown } : {};
    const vol = r.q && Number.isFinite(Number(r.q.volume)) ? Number(r.q.volume).toLocaleString() : '—';
    return '<tr data-code="' + code + '" data-name="' + wlEsc(name) + '">' +
      '<td class="l wl-stock">' + code + '</td>' +
      '<td class="l wl-stock"><span class="wl-name">' + wlEsc(name) + '</span>' + chipsFlagPillsHtml(code) + flagPillsHtml(code, { dispositionOnly: true }) + '</td>' +
      '<td class="l">' + (grp ? '<span class="sig-group">' + wlEsc(grp) + '</span>' : '<span class="flat">—</span>') + '</td>' +
      '<td>' + (WL_GROUP_INDEX[code] ? maScoreCellHtml(code, r.price) : '<span class="flat">—</span>') + '</td>' +
      '<td>' + (r.holder ? raceHolderCellHtml(r.holder) : '<span class="race-holder-none" title="大戶力資料還在累積中或不在追蹤範圍">—</span>') + '</td>' +
      '<td class="' + cls + '">' + (r.pct === null ? '—' : fmt(r.pct) + '%') + '</td>' +
      '<td class="' + cls + '">' + (r.chg === null ? '—' : (r.chg > 0 ? '+' : '') + r.chg.toFixed(2)) + '</td>' +
      '<td class="' + cls + '">' + (r.price === null ? (r.q === null ? '<span class="flat" title="還沒抓到報價">—</span>' : '—') : limitPriceHtml(limit, r.price.toFixed(2))) + '</td>' +
      '<td>' + vol + '</td>' +
      '<td class="l wl-note" title="點一下寫備註">' + (r.it.note ? wlEsc(r.it.note) : '<span class="wl-note-empty">＋備註</span>') + '</td>' +
      '<td><span class="wl-ops">' +
        (manual ? '<button class="wl-op" data-op="up" title="往上">▲</button><button class="wl-op" data-op="down" title="往下">▼</button>' : '') +
        (wl.data.groups.length > 1 ? '<select class="wl-gsel" title="移到別組">' + groupOpts(g.id) + '</select>' : '') +
        '<button class="wl-op del" data-op="del" title="從這組移除">✕</button></span></td>' +
    '</tr>';
  }).join('');
  el.innerHTML = '<div class="wl-table-wrap"><table class="wl-table v-live"><thead><tr>' +
    '<th class="l">代號</th><th class="l">名稱</th><th class="l">族群</th><th>均線分數</th><th>盤中大戶力</th><th>漲跌幅</th><th>漲跌</th><th>成交價</th><th>成交量(張)</th><th class="l">備註</th><th></th>' +
    '</tr></thead><tbody>' + body + '</tbody></table></div>' +
    '<div class="wl-summary">共 ' + g.items.length + ' 檔・<span class="up">上漲 ' + up + '</span>・<span class="down">下跌 ' + down + '</span>・平盤 ' + flat + '</div>';
}
// ---- 第三階段（2026-10-05 使用者）：持股損益、盤後籌碼、一鍵健診
// 持股損益：每檔可填成本均價、張數（跟著同步碼存）；損益＝現價賣掉的預估淨額－買進花的錢，預設扣手續費（折數可改）＋證交稅。
// 盤後籌碼：跟「每日持股健診」同一份 /api/checkup（收盤後整理）：法人、主力、大戶週增、創高天數、防守線，加上醞釀／發動。
const WL_VIEWS = [['live', '即時報價'], ['pnl', '持股損益'], ['chips', '盤後籌碼']];
const WL_VIEW_SORTS = {
  live: WL_SORTS,
  pnl: [['manual', '自訂順序'], ['ret', '報酬率'], ['pnl', '損益'], ['today', '今日損益'], ['pct', '漲跌幅']],
  chips: [['manual', '自訂順序'], ['inst5', '法人5日'], ['mf5', '主力5日'], ['week', '大戶週增'], ['hilen', '創高天數'], ['overall', '健診綜合']],
};
const WL_SORT_FIELD = { live: 'sort', pnl: 'sortPnl', chips: 'sortChips' };
const WL_VIEW_FOOT = {
  live: '報價：族群表裡的股票跟首頁同一份（15 秒更新）；族群表外的股票另外向證交所抓，沒有盤中大戶力、均線分數、融資券等標籤。' +
    '點代號或名稱開K線圖；首頁、盤中333、醞釀／發動、健診、K線圖名稱旁的 ☆ 也能直接加入（加到目前這組），★ 再點一下移除。',
  pnl: '點「成本」或「張數」那一格輸入你的成本均價和張數（零股打小數：0.5 張＝500 股），跟著同步碼存，三台一樣。' +
    '損益＝用現價賣掉的預估淨額－買進花的錢（含手續費）；勾「扣手續費＋證交稅」時，手續費照你填的折數、證交稅股票 0.3%、ETF 0.1%。今日損益＝今天的漲跌×股數。' +
    '明天防守＝每日持股健診算的三日低／月線（收盤後更新），盤中現價跌破會標紅。',
  chips: '盤後資料跟「每日持股健診」同一份，每個交易日收盤後整理。法人＝三大法人買賣超、主力＝主力大單買賣超（張），下面一行是連續買超／賣超幾天；' +
    '大戶週增＝集保大戶持股比例的週變化（連幾週增加）；創高天數＝今天收盤是近幾日最高收盤（20 以上就是創 20 日新高）；' +
    '醞釀／發動跟訊號中心同一份（盤中即時）；健診＝綜合分數，照你在每日持股健診設的面向與權重。',
};
function wlViewSort(){ return wl[WL_SORT_FIELD[wl.view] || 'sort'] || 'manual'; }
function wlViewsHtml(){
  if (!WL_VIEWS.some((v) => v[0] === wl.view)) wl.view = 'live';
  return '<div class="wl-views">' + WL_VIEWS.map(([k, label]) => '<button class="wl-view' + (wl.view === k ? ' active' : '') + '" data-view="' + k + '">' + label + '</button>').join('') +
    '<button class="wl-btn" id="wlToCheckup" title="把這組的股票丟進「每日持股健診」">🩺 這組送去健診</button></div>';
}
// 盤後資料：整份自選股（最多 120 檔，太多就只抓這一組）一次抓，10 分鐘內不重抓
let wlCk = { key: '', data: null, at: 0, loading: false, error: '', byCode: {} };
function wlCheckupCodes(){
  const all = [...new Set(wl.data.groups.flatMap((g) => g.items.map((it) => it.code)))];
  return (all.length <= 120 ? all : wlGroup().items.map((it) => it.code).slice(0, 120)).sort();
}
async function wlEnsureCheckup(){
  const codes = wlCheckupCodes(), key = codes.join(',');
  if (!key) return;
  const fresh = wlCk.key === key && wlCk.data && Date.now() - wlCk.at < 600000;
  const recentFail = wlCk.key === key && wlCk.error && Date.now() - wlCk.at < 30000;
  if (fresh || recentFail || (wlCk.key === key && wlCk.loading)) return;
  wlCk = { key, data: wlCk.key === key ? wlCk.data : null, at: wlCk.at, loading: true, error: '', byCode: wlCk.key === key ? wlCk.byCode : {} };
  try {
    const res = await fetch('/api/checkup?codes=' + encodeURIComponent(key));
    const data = await res.json().catch(() => null);
    if (!res.ok || !data || !data.status) throw new Error((data && (data.detail || data.error)) || ('HTTP ' + res.status));
    if (wlCk.key !== key) return;
    wlCk.data = data; wlCk.byCode = {};
    for (const r of data.rows || []) wlCk.byCode[r.code] = r;
  } catch (e) {
    if (wlCk.key === key) wlCk.error = String((e && e.message) || e);
  } finally {
    if (wlCk.key === key){ wlCk.loading = false; wlCk.at = Date.now(); }
  }
  renderWatchTable();
}
function wlCkNote(){
  if (wlCk.data && wlCk.data.status === 'ok') return '';
  if (wlCk.loading || !wlCk.key) return '<div class="wl-hint">盤後資料讀取中…</div>';
  if (wlCk.error) return '<div class="wl-hint">盤後資料讀不到（' + wlEsc(wlCk.error) + '），30 秒後再試</div>';
  return '<div class="wl-hint">' + wlEsc((wlCk.data && wlCk.data.reason) || '還沒有盤後資料（收盤後整理）') + '</div>';
}
function wlFeeRates(code){
  const s = wl.data.settings || {};
  if (s.pnlFee === false) return { buy: 0, sell: 0 };
  const disc = Number(s.feeDisc) > 0 && Number(s.feeDisc) <= 10 ? Number(s.feeDisc) / 10 : 0.28;
  const commission = 0.001425 * disc;
  return { buy: commission, sell: commission + (/^00/.test(code) ? 0.001 : 0.003) };    // ETF 證交稅 0.1%
}
function wlPosition(it, price, change){
  const cost = Number(it.cost), lots = Number(it.lots);
  if (!(cost > 0) || !(lots > 0)) return null;
  const shares = Math.round(lots * 1000), fee = wlFeeRates(it.code);
  const paid = cost * shares * (1 + fee.buy);
  const pos = { shares, paid, value: null, pnl: null, ret: null, today: null };
  if (price > 0){
    pos.value = price * shares;
    pos.pnl = price * shares * (1 - fee.sell) - paid;
    pos.ret = pos.pnl / paid * 100;
    if (Number.isFinite(change)) pos.today = change * shares;
  }
  return pos;
}
const wlMoney = (v) => (v === null || v === undefined || !Number.isFinite(v) ? '—' : (v > 0 ? '+' : v < 0 ? '-' : '') + Math.round(Math.abs(v)).toLocaleString('en-US'));
const wlAmount = (v) => (v === null || v === undefined || !Number.isFinite(v) ? '—' : Math.round(v).toLocaleString('en-US'));
const wlLotsText = (v) => { const n = Number(v); return Number.isInteger(n) ? String(n) : String(+n.toFixed(3)); };
function wlSortRows(rows, key, value){
  if (key === 'manual') return rows;
  return rows.sort((a, b) => {
    const x = value(a), y = value(b);
    const nx = x === null || x === undefined || !Number.isFinite(x), ny = y === null || y === undefined || !Number.isFinite(y);
    if (nx || ny) return nx && ny ? a.idx - b.idx : nx ? 1 : -1;
    return y - x || a.idx - b.idx;
  });
}
function wlLiveRow(it, idx, quotes){
  const q = quotes[it.code] || null;
  const price = q && Number(q.price) > 0 ? Number(q.price) : null;
  const pct = q && Number.isFinite(Number(q.changePercent)) ? Number(q.changePercent) : null;
  const chg = q && Number.isFinite(Number(q.change)) ? Number(q.change) : price !== null && pct !== null ? price - price / (1 + pct / 100) : null;
  return { it, idx, q, price, pct, chg };
}
function wlDefenseHtml(ck, price){
  const d = ck && ck.def;
  if (!d) return '<span class="flat">—</span>';
  const broke = price > 0 && d.ma20T && price < d.ma20T ? '盤中破月線' : price > 0 && d.low3T && price < d.low3T ? '盤中破三日低' : '';
  return '<div class="wl-def">' + (broke ? '<span class="wl-warn">' + broke + '</span>' : ckJudgeHtml(ck)) +
    '<br><span class="muted">三日低 ' + ckPrice(d.low3T) + '・月線 ' + ckPrice(d.ma20T) + '</span></div>';
}
function wlPnlHtml(g){
  const quotes = wlQuoteMap();
  const rows = g.items.map((it, idx) => {
    const r = wlLiveRow(it, idx, quotes);
    r.pos = wlPosition(it, r.price, r.chg);
    return r;
  });
  const key = wl.sortPnl;
  wlSortRows(rows, key, (r) => key === 'pct' ? r.pct : r.pos ? (key === 'ret' ? r.pos.ret : key === 'pnl' ? r.pos.pnl : key === 'today' ? r.pos.today : null) : null);
  const tot = { n: 0, paid: 0, value: 0, pnl: 0, today: 0, priced: 0 };
  const fee = wl.data.settings || {};
  const feeOn = fee.pnlFee !== false, disc = Number(fee.feeDisc) > 0 ? Number(fee.feeDisc) : 2.8;
  const body = rows.map((r) => {
    const code = r.it.code, name = wlNameOf(code, r.it), cls = r.pct === null ? 'flat' : dirClass(r.pct), p = r.pos;
    if (p){
      tot.n++;
      if (p.pnl !== null){ tot.priced++; tot.paid += p.paid; tot.value += p.value; tot.pnl += p.pnl; tot.today += p.today || 0; }
    }
    const editing = wl.editing && wl.editing.gid === g.id && wl.editing.code === code;
    const ck = wlCk.byCode[code] || null;
    const limit = r.q ? { limitUp: !!r.q.limitUp, limitDown: !!r.q.limitDown } : {};
    let html = '<tr data-code="' + code + '" data-name="' + wlEsc(name) + '"' + (editing ? ' class="wl-editing"' : '') + '>' +
      '<td class="l wl-stock">' + code + '</td><td class="l wl-stock"><span class="wl-name">' + wlEsc(name) + '</span></td>' +
      '<td class="' + cls + '">' + (r.price === null ? '—' : limitPriceHtml(limit, r.price.toFixed(2))) + '</td>' +
      '<td class="' + cls + '">' + (r.pct === null ? '—' : fmt(r.pct) + '%') + '</td>' +
      '<td class="wl-pos" data-field="cost" title="點一下輸入成本均價">' + (Number(r.it.cost) > 0 ? hlPrice(Number(r.it.cost)) : '<span class="wl-note-empty">＋成本</span>') + '</td>' +
      '<td class="wl-pos" data-field="lots" title="點一下輸入張數">' + (Number(r.it.lots) > 0 ? wlLotsText(r.it.lots) : '<span class="wl-note-empty">＋張數</span>') + '</td>' +
      '<td>' + (p ? wlAmount(p.value) : '') + '</td>' +
      '<td class="' + (p && p.pnl !== null ? dirClass(p.pnl) : '') + '"><b>' + (p ? wlMoney(p.pnl) : '') + '</b></td>' +
      '<td class="' + (p && p.ret !== null ? dirClass(p.ret) : '') + '">' + (p && p.ret !== null ? swPct(p.ret) : '') + '</td>' +
      '<td class="' + (p && p.today !== null ? dirClass(p.today) : '') + '">' + (p ? wlMoney(p.today) : '') + '</td>' +
      '<td class="l">' + wlDefenseHtml(ck, r.price) + '</td></tr>';
    if (editing){
      const draft = wl.editDraft && wl.editDraft.code === code ? wl.editDraft : null;
      const costVal = draft ? draft.cost : Number(r.it.cost) > 0 ? Number(r.it.cost) : '';
      const lotsVal = draft ? draft.lots : Number(r.it.lots) > 0 ? Number(r.it.lots) : '';
      html += '<tr class="wl-edit-row"><td colspan="11"><div class="wl-edit"><b>' + code + ' ' + wlEsc(name) + '</b>' +
        '<label>成本均價 <input type="number" class="wl-edit-in" id="wlEditCost" data-code="' + code + '" inputmode="decimal" step="0.01" min="0" value="' + wlEsc(costVal) + '"> 元</label>' +
        '<label>張數 <input type="number" class="wl-edit-in" id="wlEditLots" data-code="' + code + '" inputmode="decimal" step="0.001" min="0" value="' + wlEsc(lotsVal) + '"> 張</label>' +
        '<span class="muted">零股打小數：0.5 張＝500 股</span>' +
        '<span class="wl-edit-ops"><button class="wl-btn primary" data-edit="save">儲存</button><button class="wl-btn" data-edit="clear">清除</button><button class="wl-btn" data-edit="cancel">取消</button></span></div></td></tr>';
    }
    return html;
  }).join('');
  const ret = tot.paid > 0 ? tot.pnl / tot.paid * 100 : null;
  const summary = tot.n
    ? '<div class="wl-pnl-sum">有填成本 <b>' + tot.n + '</b> 檔・投入 <b>' + wlAmount(tot.paid) + '</b>・市值 <b>' + wlAmount(tot.value) + '</b>・損益 <b class="' + dirClass(tot.pnl) + '">' + wlMoney(tot.pnl) + '</b>' +
      (ret !== null ? '（<span class="' + dirClass(ret) + '">' + swPct(ret) + '</span>）' : '') + '・今日 <b class="' + dirClass(tot.today) + '">' + wlMoney(tot.today) + '</b>' +
      (tot.priced < tot.n ? '<span class="muted">（' + (tot.n - tot.priced) + ' 檔還沒抓到報價，沒算進去）</span>' : '') + '</div>'
    : '<div class="wl-hint">點表格裡的「＋成本」「＋張數」輸入你的成本均價和張數，就會算損益。</div>';
  return '<div class="wl-feebar"><label><input type="checkbox" id="wlFeeOn"' + (feeOn ? ' checked' : '') + '> 損益扣手續費＋證交稅</label>' +
      '<label>手續費 <input type="number" id="wlFeeDisc" inputmode="decimal" step="0.1" min="0.1" max="10" value="' + disc + '"' + (feeOn ? '' : ' disabled') + '> 折</label></div>' +
    summary + wlCkNote() +
    '<div class="wl-table-wrap"><table class="wl-table v-pnl"><thead><tr><th class="l">代號</th><th class="l">名稱</th><th>成交價</th><th>漲跌幅</th><th>成本</th><th>張數</th><th>市值</th><th>損益</th><th>報酬率</th><th>今日損益</th><th class="l">明天防守</th></tr></thead><tbody>' +
    body + '</tbody></table></div>';
}
function wlEditAction(kind){
  const ed = wl.editing;
  if (!ed) return;
  if (kind === 'cancel'){
    wl.editing = null; wl.editDraft = null;
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();   // 游標還在輸入框時表格不會重畫
    renderWatchTable();
    return;
  }
  let cost = null, lots = null;
  if (kind === 'save'){
    const rawCost = String((document.getElementById('wlEditCost') || {}).value || '').trim();
    const rawLots = String((document.getElementById('wlEditLots') || {}).value || '').trim();
    cost = rawCost === '' ? null : Number(rawCost);
    lots = rawLots === '' ? null : Number(rawLots);
    if ((cost !== null && !(cost > 0 && cost < 1e7)) || (lots !== null && !(lots > 0 && lots < 1e6))){
      showToast('成本、張數要是大於 0 的數字（不填＝清掉）');
      return;
    }
  }
  wl.editing = null; wl.editDraft = null;
  const { gid, code } = ed;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  wlMutate((data) => {
    const g = data.groups.find((x) => x.id === gid), item = g && g.items.find((x) => x.code === code);
    if (!item) return;
    if (cost !== null) item.cost = Math.round(cost * 10000) / 10000; else delete item.cost;
    if (lots !== null) item.lots = Math.round(lots * 1000) / 1000; else delete item.lots;
  });
}
function wlChipsHtml(g){
  const quotes = wlQuoteMap();
  const launchCount = new Map();
  for (const r of trkLaunchRecords()) launchCount.set(r.code, (launchCount.get(r.code) || 0) + 1);
  let liveLaunch = new Set();
  try { const bm = brewLaunchModel(); liveLaunch = new Set(bm ? bm.launchBlocks.flatMap((b) => b.rows).map((r) => r.code) : []); } catch (e) { /* 醞釀／發動算不出來就不標 */ }
  const rows = g.items.map((it, idx) => ({ it, idx, ck: wlCk.byCode[it.code] || null }));
  const key = wl.sortChips;
  wlSortRows(rows, key, (r) => {
    const c = r.ck && r.ck.chip ? r.ck.chip : {};
    if (!r.ck) return null;
    return key === 'inst5' ? c.inst5 : key === 'mf5' ? c.mf5 : key === 'week' ? c.weekPct : key === 'hilen' ? r.ck.hiLen : key === 'overall' ? ckOverall(r.ck) : null;
  });
  const streak = (n, word) => (n > 0 ? '<span class="wl-streak up">連' + word[0] + ' ' + n + ' 天</span>' : n < 0 ? '<span class="wl-streak down">連' + word[1] + ' ' + (-n) + ' 天</span>' : '');
  const lotsCell = (v, sub) => '<td><span class="' + (swHas(v) ? dirClass(v) : 'flat') + '">' + swLots(v) + '</span>' + (sub ? '<br>' + sub : '') + '</td>';
  const body = rows.map((r) => {
    const code = r.it.code, name = wlNameOf(code, r.it), ck = r.ck, c = (ck && ck.chip) || {};
    const grp = (ck && ck.group) || (WL_GROUP_INDEX[code] ? WL_GROUP_INDEX[code].group : '');
    const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null, n = launchCount.get(code) || 0;
    const tags = (liveLaunch.has(code) ? '<span class="trk-badge bull">發動中</span>' : n ? '<span class="trk-badge">今天發動 ×' + n + '</span>' : '') +
      (info && info.brewing && !info.skipped ? '<span class="trk-badge brew">醞釀</span>' : '');
    const q = quotes[code];
    const price = q && Number(q.price) > 0 ? Number(q.price) : null;
    const f3 = c.f3 ? '外資 ' + swLots(c.f3.foreign) + '・投信 ' + swLots(c.f3.trust) + '・自營 ' + swLots(c.f3.dealer) : '';
    if (!ck){
      return '<tr data-code="' + code + '" data-name="' + wlEsc(name) + '"><td class="l wl-stock">' + code + '</td><td class="l wl-stock"><span class="wl-name">' + wlEsc(name) + '</span></td>' +
        '<td class="l">' + (grp ? '<span class="sig-group">' + wlEsc(grp) + '</span>' : '<span class="flat">—</span>') + '</td>' +
        '<td colspan="7" class="l"><span class="flat">' + (wlCk.data && wlCk.data.status === 'ok' ? '沒有盤後資料（本站沒有這檔的日K）' : '—') + '</span></td>' +
        '<td class="l">' + (tags || '<span class="flat">—</span>') + '</td><td class="l"><span class="flat">—</span></td></tr>';
    }
    const ov = ckOverall(ck);
    return '<tr data-code="' + code + '" data-name="' + wlEsc(name) + '">' +
      '<td class="l wl-stock">' + code + '</td><td class="l wl-stock"><span class="wl-name">' + wlEsc(name) + '</span>' + (ck.stale ? '<span class="muted">（資料到 ' + swMmdd(ck.date) + '）</span>' : '') + '</td>' +
      '<td class="l">' + (grp ? '<span class="sig-group">' + wlEsc(grp) + '</span>' : '<span class="flat">—</span>') + '</td>' +
      '<td>' + ckPrice(ck.close) + '<br><span class="' + dirClass(ck.chgPct || 0) + '">' + swPct(ck.chgPct, 1) + '</span></td>' +
      '<td title="' + wlEsc(f3) + '"><span class="' + (swHas(c.instToday) ? dirClass(c.instToday) : 'flat') + '">' + swLots(c.instToday) + '</span></td>' +
      lotsCell(c.inst5, streak(c.instStreak || 0, ['買', '賣'])) +
      lotsCell(c.mf5, streak(c.mfStreak || 0, ['買', '賣'])) +
      '<td title="' + (c.tdccDate ? '集保 ' + swMmdd(c.tdccDate) : '') + '"><span class="' + (swHas(c.weekPct) ? dirClass(c.weekPct) : 'flat') + '">' + swPct(c.weekPct) + '</span>' +
        (c.weeks > 0 ? '<br><span class="wl-streak up">連增 ' + c.weeks + ' 週</span>' : '') + '</td>' +
      '<td>' + (swHas(ck.hiLen) ? (ck.hiLen >= 20 ? '<b class="up">' + ck.hiLen + '</b>' : ck.hiLen) : '—') + '</td>' +
      '<td class="l">' + (tags || '<span class="flat">—</span>') + '</td>' +
      '<td>' + ckScoreHtml(ov) + (ov !== null ? ' <span class="ck-lab">' + ckLabel(ov) + '</span>' : '') + '</td>' +
      '<td class="l">' + wlDefenseHtml(ck, price) + '</td></tr>';
  }).join('');
  const d = wlCk.data && wlCk.data.status === 'ok' ? swMmdd(wlCk.data.date) : '';
  return wlCkNote() + '<div class="wl-table-wrap"><table class="wl-table v-chips"><thead><tr><th class="l">代號</th><th class="l">名稱</th><th class="l">族群</th>' +
    '<th>收盤' + (d ? '(' + d + ')' : '') + '</th><th>法人今日</th><th>法人5日</th><th>主力5日</th><th>大戶週增</th><th>創高天數</th><th class="l">醞釀／發動</th><th>健診</th><th class="l">明天防守</th></tr></thead><tbody>' +
    body + '</tbody></table></div>';
}
function wlSendToCheckup(){
  const g = wlGroup(), codes = g.items.map((it) => it.code);
  if (!codes.length){ showToast('這組還沒有股票'); return; }
  const name = ('自選・' + g.name).slice(0, 30);
  ckLists.saved[name] = codes.slice(0, 120).join('/');
  ckState.listName = name;
  ckSaveLists();
  closeWatchPanel();
  ckRun(codes.slice(0, 120).join('/'));     // 先換清單再打開，不會先抓一次舊清單
  openCheckupPanel();
  if (codes.length > 120) showToast('健診一次最多 120 檔，先看前 120 檔');
}
function openWatchPanel(){
  document.getElementById('watchModal').hidden = false;
  renderWatch();
  refreshBrewLaunch();
  wlFetchExtra(true);
  wlLoad();
  for (const t of wl.timers) clearInterval(t);
  wl.timers = [setInterval(() => wlFetchExtra(false), 15000), setInterval(() => wlLoad(), 60000)];
}
function closeWatchPanel(){
  document.getElementById('watchModal').hidden = true;
  for (const t of wl.timers) clearInterval(t);
  wl.timers = [];
}
function wlAfterChange(){
  const modal = document.getElementById('watchModal');
  if (modal && !modal.hidden){
    // 打字中的輸入框不要被重畫掉：只重畫表格跟同步狀態那一列
    const act = document.activeElement;
    const typing = act && (act.id === 'wlAddInput' || act.id === 'wlKeyInput' || (act.tagName === 'INPUT' && /^(number|text)$/.test(act.type) && !!act.closest('#wlTable')));
    if (typing){
      const sync = document.querySelector('#watchBody .wl-sync');
      if (sync && wl.key) sync.outerHTML = wlSyncHtml();
      renderWatchTable();
    } else renderWatch();
  }
  wlRefreshStars();
  try { renderTrack(); } catch (e) { /* 個股訊號追蹤重畫失敗不影響畫面 */ }
}
document.getElementById('watchClose').addEventListener('click', closeWatchPanel);
document.getElementById('watchModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeWatchPanel(); });
function wlSubmitAdd(){
  const input = document.getElementById('wlAddInput');
  const { found, unknown } = wlParseInput(input ? input.value : '');
  wl.addNote = unknown.length ? '找不到：' + unknown.join('、') + '（族群表外的股票請直接打代號）' : '';
  if (found.length) wlAddCodes(found, wlGroup().id);
  renderWatch();
  const again = document.getElementById('wlAddInput');
  if (again){ again.value = unknown.join(' '); again.focus(); }
}
document.getElementById('watchBody').addEventListener('keydown', (e) => {
  if (e.target.classList && e.target.classList.contains('wl-edit-in')){
    if (e.key === 'Enter'){ e.preventDefault(); wlEditAction('save'); }
    else if (e.key === 'Escape'){ e.preventDefault(); wlEditAction('cancel'); }
    return;
  }
  if (e.key !== 'Enter') return;
  if (e.target.id === 'wlFeeDisc'){ e.preventDefault(); e.target.blur(); return; }
  if (e.target.id === 'wlAddInput'){ e.preventDefault(); wlSubmitAdd(); }
  else if (e.target.id === 'wlKeyInput'){ e.preventDefault(); wlSetKey(e.target.value); }
});
document.getElementById('watchBody').addEventListener('click', (e) => {
  if (e.target.closest('select, input')) return;
  if (e.target.closest('#wlAddBtn')){ wlSubmitAdd(); return; }
  if (e.target.closest('#wlKeySet')){ wlSetKey((document.getElementById('wlKeyInput') || {}).value); return; }
  if (e.target.closest('#wlKeyShow')){ wl.showKey = !wl.showKey; renderWatch(); return; }
  if (e.target.closest('#wlKeyStop')){ wlStopSync(); return; }
  if (e.target.closest('#wlSyncNow')){ wl.error = ''; if (wl.queue.length) wlFlush(); else wlLoad(); renderWatch(); return; }
  const tab = e.target.closest('.wl-gtab[data-gid]');
  if (tab){ wl.active = tab.dataset.gid; wl.addNote = ''; wlSavePrefs(); renderWatch(); return; }
  if (e.target.closest('#wlGroupAdd')){
    const name = (window.prompt('新分組的名字（例如：持股、觀察、短線）', '') || '').trim().slice(0, 20);
    if (!name) return;
    let newId = '';
    wlMutate((data) => {
      const hit = data.groups.find((g) => g.name === name);
      if (hit){ newId = hit.id; return; }
      newId = wlNewGroupId(data);
      data.groups.push({ id: newId, name, items: [] });
    });
    wl.active = newId || wl.active; wlSavePrefs(); renderWatch();
    return;
  }
  if (e.target.closest('#wlGroupRename')){
    const g = wlGroup();
    const name = (window.prompt('分組改成什麼名字？', g.name) || '').trim().slice(0, 20);
    if (!name || name === g.name) return;
    const gid = g.id;
    wlMutate((data) => { const x = data.groups.find((y) => y.id === gid); if (x) x.name = name; });
    return;
  }
  if (e.target.closest('#wlGroupDelete')){
    const g = wlGroup();
    if (wl.data.groups.length <= 1 && !g.items.length) return;
    if (!window.confirm('刪除分組「' + g.name + '」' + (g.items.length ? '（裡面 ' + g.items.length + ' 檔一起刪掉）' : '') + '？')) return;
    const gid = g.id;
    wlMutate((data) => {
      data.groups = data.groups.filter((x) => x.id !== gid);
      if (!data.groups.length) data.groups.push({ id: 'g1', name: '自選', items: [] });
    });
    return;
  }
  const sortBtn = e.target.closest('.wl-sort');
  if (sortBtn){ wl[WL_SORT_FIELD[wl.view] || 'sort'] = sortBtn.dataset.sort; wlSavePrefs(); renderWatch(); return; }
  const viewBtn = e.target.closest('.wl-view[data-view]');
  if (viewBtn){ wl.view = viewBtn.dataset.view; wl.editing = null; wlSavePrefs(); renderWatch(); return; }
  if (e.target.closest('#wlToCheckup')){ wlSendToCheckup(); return; }
  const editBtn = e.target.closest('[data-edit]');
  if (editBtn){ wlEditAction(editBtn.dataset.edit); return; }
  const row = e.target.closest('tr[data-code]');
  if (!row) return;
  const code = row.dataset.code, gid = wlGroup().id;
  if (e.target.closest('.wl-pos')){
    wl.editing = { gid, code }; wl.editDraft = null;
    renderWatchTable();
    const input = document.getElementById(e.target.closest('.wl-pos').dataset.field === 'lots' ? 'wlEditLots' : 'wlEditCost');
    if (input){ input.focus(); input.select(); }
    return;
  }
  const op = e.target.closest('.wl-op');
  if (op){
    if (op.dataset.op === 'del'){
      wlMutate((data) => { const g = data.groups.find((x) => x.id === gid); if (g) g.items = g.items.filter((it) => it.code !== code); });
    } else {
      const dir = op.dataset.op === 'up' ? -1 : 1;
      wlMutate((data) => {
        const g = data.groups.find((x) => x.id === gid);
        if (!g) return;
        const i = g.items.findIndex((it) => it.code === code), j = i + dir;
        if (i < 0 || j < 0 || j >= g.items.length) return;
        const t = g.items[i]; g.items[i] = g.items[j]; g.items[j] = t;
      });
    }
    return;
  }
  if (e.target.closest('.wl-note')){
    const g = wlGroup(), it = g.items.find((x) => x.code === code);
    const note = window.prompt(code + ' ' + row.dataset.name + ' 的備註（空白＝刪掉）', (it && it.note) || '');
    if (note === null) return;
    const text = note.trim().slice(0, 200);
    wlMutate((data) => {
      const x = data.groups.find((y) => y.id === gid), item = x && x.items.find((y) => y.code === code);
      if (!item) return;
      if (text) item.note = text; else delete item.note;
    });
    return;
  }
  if (e.target.closest('.wl-stock')){
    if (!useFloatingCharts()){
      document.getElementById('watchModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(code, row.dataset.name);
  }
});
document.getElementById('watchBody').addEventListener('change', (e) => {
  if (e.target.id === 'wlFeeOn' || e.target.id === 'wlFeeDisc'){
    const on = !!(document.getElementById('wlFeeOn') || {}).checked;
    const disc = Number((document.getElementById('wlFeeDisc') || {}).value);
    wlMutate((data) => {
      data.settings.pnlFee = on;
      if (disc > 0 && disc <= 10) data.settings.feeDisc = Math.round(disc * 100) / 100;
    });
    if (e.target.id === 'wlFeeDisc') e.target.blur();
    renderWatchTable();
    return;
  }
  const sel = e.target.closest('.wl-gsel');
  if (!sel) return;
  const row = sel.closest('tr[data-code]');
  const code = row.dataset.code, from = wlGroup().id, to = sel.value;
  if (to === from) return;
  wlMutate((data) => {
    const a = data.groups.find((x) => x.id === from), b = data.groups.find((x) => x.id === to);
    if (!a || !b) return;
    const it = a.items.find((x) => x.code === code);
    if (!it) return;
    a.items = a.items.filter((x) => x.code !== code);
    if (!b.items.some((x) => x.code === code)) b.items.push(it);
  });
});
// 別的分頁／K線圖小視窗改了自選股（同一台電腦的 localStorage）：這裡跟著更新
window.addEventListener('storage', (e) => {
  if (e.key !== 'watchData' && e.key !== 'watchKey') return;
  wlReadLocal();
  wlAfterChange();
});
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && wl.key) wlLoad(); });

// ---- 各列表的 ☆：點一下加入自選股（目前這組），★ 再點一下從所有分組移除
function wlStarHtml(code, name){
  if (!code) return '';
  const on = wlHas(code);
  return '<button type="button" class="wl-star' + (on ? ' on' : '') + '" data-code="' + wlEsc(code) + '" data-name="' + wlEsc(name || '') + '" title="' +
    (on ? '已在自選股（點一下移除）' : '加入自選股') + '">' + (on ? '★' : '☆') + '</button>';
}
function wlRefreshStars(){
  document.querySelectorAll('.wl-star').forEach((b) => {
    const on = !!b.dataset.code && wlHas(b.dataset.code);
    b.classList.toggle('on', on);
    b.textContent = on ? '★' : '☆';
    b.title = on ? '已在自選股（點一下移除）' : '加入自選股';
  });
}
document.addEventListener('click', (e) => {
  const star = e.target.closest('.wl-star');
  if (!star) return;
  e.preventDefault();
  e.stopPropagation();
  const code = star.dataset.code;
  if (!code) return;
  if (wlHas(code)){
    const names = wl.data.groups.filter((g) => g.items.some((it) => it.code === code)).map((g) => g.name);
    wlRemoveEverywhere(code);
    showToast('已從自選股「' + names.join('、') + '」移除 ' + (star.dataset.name || code));
  } else {
    const g = wlGroup();
    wlAddCodes([{ code, name: star.dataset.name || '' }], g.id);
    showToast('已加入自選股「' + g.name + '」：' + (star.dataset.name || code));
  }
}, true);
setTimeout(() => { if (wl.key && !document.body.classList.contains('chart-window-mode')) wlLoad(); }, 1500);   // 開頁面先跟雲端對一次，其他地方的 ☆ 才會是最新的

// ---- 個股訊號追蹤（2026-10-05 使用者：自選股第二階段）----
// 自選股今天出現的盤中訊號照時間列（資料跟盤中訊號中心同一份，不另外抓）＋提醒：到價（站上／跌破）、跌破均線、
// 自選股出現發動／特大單／四項精選／主力翻多空／創高黑龍／1+2多 就跳通知＋響聲。
// 提醒只有網頁開著時會跳（跟發動通知一樣）；同一個條件一天只提醒一次；開網頁或剛加進自選股時，
// 今天已經出現過的訊號不會再跳（只提醒之後新出現的）。提醒設定存在自選股清單裡，有同步碼就三台共用。
const TRK_KINDS = [
  { key: 'launch', label: '發動', bull: true },
  { key: 'bigBuy', label: '特大買單', bull: true },
  { key: 'bigSell', label: '特大賣單', bull: false },
  { key: 'fourGateBuy', label: '四項精選強多', bull: true },
  { key: 'fourGateSell', label: '四項精選強空', bull: false },
  { key: 'mainForceFlipBull', label: '主力翻多', bull: true },
  { key: 'mainForceFlipBear', label: '主力翻空', bull: false },
  { key: 'blackDragon', label: '創高黑龍', bull: null },
  { key: 'combo12Bull', label: '1+2多', bull: true },
];
const TRK_KIND_LABEL = Object.fromEntries(TRK_KINDS.map((k) => [k.key, k.label]));
const TRK_MAS = [5, 10, 20];
let trk = { group: '*', kind: 'all', state: null };
function trkLoadState(){
  const today = twTodayStr();
  let st = null;
  try { st = JSON.parse(localStorage.getItem('trackState') || 'null'); } catch (e) { st = null; }
  if (!st || st.date !== today) st = { date: today, seen: [], fired: [], log: [], sigCodes: [], launchCodes: [] };
  trk.state = { date: st.date, seen: new Set(st.seen || []), fired: new Set(st.fired || []), log: st.log || [],
    sigCodes: new Set(st.sigCodes || []), launchCodes: new Set(st.launchCodes || []) };
  return trk.state;
}
function trkSaveState(){
  const s = trk.state;
  if (!s) return;
  try {
    localStorage.setItem('trackState', JSON.stringify({ date: s.date, seen: [...s.seen].slice(-3000), fired: [...s.fired], log: s.log.slice(-200),
      sigCodes: [...s.sigCodes], launchCodes: [...s.launchCodes] }));
  } catch (e) { /* 存不了就算了 */ }
}
function trkSetting(key, dflt){
  const v = wl.data.settings ? wl.data.settings[key] : undefined;
  return v === undefined ? dflt : v;
}
function trkAllCodes(){
  const s = new Set();
  for (const g of wl.data.groups) for (const it of g.items) s.add(it.code);
  return s;
}
function trkCodesInView(){
  if (trk.group === '*') return trkAllCodes();
  const g = wl.data.groups.find((x) => x.id === trk.group);
  return new Set(g ? g.items.map((it) => it.code) : []);
}
function trkItemOf(code){
  for (const g of wl.data.groups){ const it = g.items.find((x) => x.code === code); if (it) return it; }
  return null;
}
function trkEventKind(e){ return e.tabs && e.tabs.length ? e.tabs[e.tabs.length - 1] : ''; }
function trkTime(ts){ return Number.isFinite(ts) && ts > 0 ? new Date(ts + 8 * 3600000).toISOString().slice(11, 16) : ''; }
function trkSignalEvents(){
  // 訊號中心同一份（休市日／開盤前沿用上一個交易日）；特大買賣單套用訊號中心那邊設的篩選
  const events = sigCurrentEvents() || [];
  // 特大買賣單只收標「特大」的（一般瞬間大單一天好幾百筆會洗版），再套訊號中心那邊設的篩選
  const big = new Set(filterLargeOrderEvents(events.filter((e) => (e.tabs.includes('bigBuy') || e.tabs.includes('bigSell')) && /特大/.test(e.label || ''))));
  return events.filter((e) => TRK_KIND_LABEL[trkEventKind(e)] && ((trkEventKind(e) !== 'bigBuy' && trkEventKind(e) !== 'bigSell') || big.has(e)));
}
function trkLaunchRecords(){
  const day = brewSessionDate();
  return day ? (brewHistoryDay(day).launch || []) : [];
}
function trkTimeline(codes){
  const rows = [];
  for (const e of trkSignalEvents()){
    if (!codes.has(e.code)) continue;
    const kind = trkEventKind(e);
    rows.push({ ts: Number(e.ts) || 0, time: trkTime(Number(e.ts)) || e.time, code: e.code, name: e.name, kind, label: e.label || TRK_KIND_LABEL[kind], bull: e.isBuy, note: e.note || '' });
  }
  for (const r of trkLaunchRecords()){
    if (!codes.has(r.code) || r.eod) continue;
    rows.push({ ts: Date.parse(r.recordedAt) || 0, time: fmtTime(r.recordedAt), code: r.code, name: r.name, kind: 'launch', label: '🚀 發動', bull: true,
      note: '發動價 ' + num2(r.price) + (r.boxHigh ? '・箱頂 ' + num2(r.boxHigh) : '') + (r.score !== undefined && r.score !== null ? '・均線分數 ' + r.score : '') });
  }
  const st = trk.state || trkLoadState();
  for (const a of st.log) if (codes.has(a.code)) rows.push(Object.assign({}, a, { kind: 'alert' }));
  return rows.sort((a, b) => b.ts - a.ts);
}
function trkMaOf(code, price, p){
  const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null;
  if (!info || !info.maSums || !(price > 0) || info.maSums[p] === undefined) return null;
  return (Number(info.maSums[p]) + price) / p;
}
function trkMarketLive(){
  // 盤中、而且首頁報價是今天的（休市日、開盤前、暫留收盤價時不判斷到價／均線）
  if (!lastData || lastData.mock || lastData.heldClose) return false;
  const now = new Date(Date.now() + 8 * 3600000), minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  return lastData.quoteDate === twTodayStr() && minutes >= 9 * 60 && minutes <= 13 * 60 + 31;
}

// ---- 判斷要不要提醒（首頁報價 15 秒、訊號 5 秒更新一次就看一次）
function trkCheck(){
  if (document.body.classList.contains('chart-window-mode')) return;
  const codes = trkAllCodes();
  if (!codes.size) return;
  const st = trkLoadState();   // 每次重讀：另一個視窗（訊號中心小視窗）提醒過的這裡就不再跳
  const today = twTodayStr();
  const fresh = [];
  // 1) 訊號：今天的訊號資料到了才看。這台第一次看（開網頁）或剛加進自選股的股票，今天已經有的訊號先記成看過、不提醒
  if (signalDataIsReal && sigCurrentDate() === today){
    for (const e of trkSignalEvents()){
      if (!codes.has(e.code)) continue;
      const kind = trkEventKind(e), key = 's|' + e.code + '|' + kind + '|' + e.ts + '|' + (e.label || '');
      if (st.seen.has(key)) continue;
      st.seen.add(key);
      if (!st.sigCodes.has(e.code) || trkSetting('trk_' + kind, true) === false) continue;
      fresh.push({ code: e.code, name: e.name, text: (TRK_KIND_LABEL[kind] || e.label) + (e.label && e.label !== TRK_KIND_LABEL[kind] ? '（' + e.label + '）' : ''), time: trkTime(Number(e.ts)) || e.time, bull: e.isBuy });
    }
    codes.forEach((c) => st.sigCodes.add(c));
  }
  // 發動：後端的發動紀錄抓到了才看（同上，先記成看過的不提醒）
  if (brewHistoryData && brewHistoryData.days && brewSessionDate() === today){
    for (const r of trkLaunchRecords()){
      if (!codes.has(r.code) || r.eod) continue;
      const key = 'l|' + r.code + '|' + r.recordedAt;
      if (st.seen.has(key)) continue;
      st.seen.add(key);
      if (!st.launchCodes.has(r.code) || trkSetting('trk_launch', true) === false) continue;
      fresh.push({ code: r.code, name: r.name, text: '🚀 發動（' + num2(r.price) + '）', time: fmtTime(r.recordedAt), bull: true });
    }
    codes.forEach((c) => st.launchCodes.add(c));
  }
  // 2) 到價、跌破均線：盤中才看，同一個條件一天一次
  if (trkMarketLive()){
    const quotes = wlQuoteMap();
    const done = new Set();
    let needExtra = false;
    for (const g of wl.data.groups) for (const it of g.items){
      if (done.has(it.code) || !(it.above || it.below || it.ma)) continue;
      done.add(it.code);
      if (!WL_GROUP_INDEX[it.code]) needExtra = true;
      const q = quotes[it.code], price = q && Number(q.price) > 0 ? Number(q.price) : null;
      if (price === null) continue;
      const name = wlNameOf(it.code, it), hits = [];
      if (it.above && price >= it.above) hits.push(['a|' + it.code + '|' + it.above, '站上 ' + num2(it.above) + '（現價 ' + num2(price) + '）', true]);
      if (it.below && price <= it.below) hits.push(['b|' + it.code + '|' + it.below, '跌破 ' + num2(it.below) + '（現價 ' + num2(price) + '）', false]);
      if (it.ma){
        const ma = trkMaOf(it.code, price, it.ma);
        if (ma !== null && price < ma) hits.push(['m|' + it.code + '|' + it.ma, '跌破 ' + it.ma + ' 日線 ' + num2(ma) + '（現價 ' + num2(price) + '）', false]);
      }
      for (const [key, text, bull] of hits){
        if (st.fired.has(key)) continue;
        st.fired.add(key);
        const time = trkTime(Date.now());
        st.log.push({ ts: Date.now(), time, code: it.code, name, label: '🔔 ' + text, bull, note: '提醒' });
        fresh.push({ code: it.code, name, text: '🔔 ' + text, time, bull });
      }
    }
    if (needExtra) wlFetchExtra(false);
  }
  trkSaveState();
  if (fresh.length) trkNotify(fresh);
}
let trkAlertLines = [];
function trkNotify(list){
  if (!alertsEnabled || trkSetting('trkOn', true) === false) return;
  launchBeep();
  trkAlertLines = list.map((x) => (x.time ? x.time + ' ' : '') + '<b>' + wlEsc(x.code + ' ' + x.name) + '</b>・' + wlEsc(x.text)).concat(trkAlertLines).slice(0, 12);
  let el = document.getElementById('trkAlertBox');
  if (!el){
    el = document.createElement('div');
    el.id = 'trkAlertBox'; el.className = 'pk-alert trk-alert';
    el.addEventListener('click', (e) => {
      if (e.target.closest('.pk-alert-close')){ el.remove(); trkAlertLines = []; return; }
      if (e.target.closest('.trk-alert-open')){ el.remove(); trkAlertLines = []; openTrackPanel(); }
    });
    document.body.appendChild(el);
  }
  el.innerHTML = '<div class="pk-alert-head">★ 自選股提醒<button class="pk-alert-close" aria-label="關閉">✕</button></div><div>' + trkAlertLines.join('<br>') +
    '</div><div class="trk-alert-foot"><button class="wl-btn trk-alert-open">打開個股訊號追蹤</button></div>';
  if ('Notification' in window && Notification.permission === 'granted'){
    list.slice(0, 5).forEach((x) => {
      try { new Notification('★ ' + x.code + ' ' + x.name + '・' + x.text.replace(/<[^>]+>/g, ''), { body: (x.time || '') + ' 自選股提醒（個股訊號追蹤）', tag: 'trk-' + x.code + '-' + x.text, requireInteraction: true }); } catch (e) { /* 跳不出來就算了 */ }
    });
  }
  if (!document.getElementById('trackModal').hidden) renderTrack();
}

// ---- 畫面
function trkStatusBadges(code, quote, ranking, launchCount, liveLaunch, blade){
  const out = [];
  if (liveLaunch) out.push('<span class="trk-badge bull">發動中</span>');
  else if (launchCount) out.push('<span class="trk-badge">今天發動 ×' + launchCount + '</span>');
  const info = brewLaunchData && brewLaunchData.stocks ? brewLaunchData.stocks[code] : null;
  if (info && info.brewing && !info.skipped) out.push('<span class="trk-badge brew">醞釀</span>');
  if (blade) out.push('<span class="trk-badge bear">刀劍空</span>');
  if (quote && quote.limitUp) out.push('<span class="trk-badge bull">漲停</span>');
  if (quote && quote.limitDown) out.push('<span class="trk-badge bear">跌停</span>');
  if (ranking && ranking.holderLabel) out.push('<span class="trk-badge ' + (ranking.holderLabel.indexOf('買') >= 0 ? 'bull' : 'bear') + '">' + wlEsc(ranking.holderLabel) + '</span>');
  return out.join('') + flagPillsHtml(code, { dispositionOnly: true });
}
function renderTrack(force){
  const body = document.getElementById('trackBody');
  if (!body || document.getElementById('trackModal').hidden) return;
  const active = document.activeElement;
  if (!force && body.contains(active) && active.tagName === 'INPUT' && /^(number|text)$/.test(active.type)) return;
  const all = trkAllCodes();
  if (!all.size){
    body.innerHTML = '<div class="signal-empty"><div class="se-title">自選股還沒有股票</div><div class="se-sub">按下方導覽列「自選股」加入股票，或在首頁、盤中333、醞釀／發動、K線圖等名稱旁點 ☆；加進來的股票今天出現訊號就會列在這裡。</div></div>';
    return;
  }
  const codes = trkCodesInView();
  const evDate = sigCurrentDate(), today = twTodayStr();
  const quotes = wlQuoteMap(), holders = wlHolderMap();
  const timeline = trkTimeline(codes).filter((r) => trk.kind === 'all' || (trk.kind === 'bull' ? r.bull === true : trk.kind === 'bear' ? r.bull === false : r.kind === trk.kind));
  // 現況
  const launchCount = new Map(), lastSignal = new Map(), count = new Map();
  for (const r of trkLaunchRecords()) launchCount.set(r.code, (launchCount.get(r.code) || 0) + 1);
  for (const r of trkTimeline(codes)){ count.set(r.code, (count.get(r.code) || 0) + 1); if (!lastSignal.has(r.code)) lastSignal.set(r.code, r); }
  const bm = brewLaunchModel();
  const liveLaunch = new Set(bm ? bm.launchBlocks.flatMap((b) => b.rows).map((r) => r.code) : []);
  let bladeCodes = new Set();
  try { const m = race333Model(); bladeCodes = new Set(((m && m.bladeLower) || []).map((r) => r.code)); } catch (e) { /* 盤中333 算不出來就不標 */ }
  const groupChips = '<button class="wl-gtab' + (trk.group === '*' ? ' active' : '') + '" data-tgroup="*">全部<span class="wl-gcount">' + all.size + '</span></button>' +
    wl.data.groups.map((g) => '<button class="wl-gtab' + (trk.group === g.id ? ' active' : '') + '" data-tgroup="' + wlEsc(g.id) + '">' + wlEsc(g.name) + '<span class="wl-gcount">' + g.items.length + '</span></button>').join('');
  const kindChips = [['all', '全部'], ['bull', '多方'], ['bear', '空方']].concat(TRK_KINDS.map((k) => [k.key, k.label])).concat([['alert', '🔔 提醒']])
    .map((k) => '<button class="wl-sort' + (trk.kind === k[0] ? ' active' : '') + '" data-tkind="' + k[0] + '">' + k[1] + '</button>').join('');
  const statusRows = [...codes].map((code) => {
    const it = trkItemOf(code), q = quotes[code] || null, name = wlNameOf(code, it);
    const pct = q && Number.isFinite(Number(q.changePercent)) ? Number(q.changePercent) : null;
    const last = lastSignal.get(code);
    return '<tr data-code="' + code + '" data-name="' + wlEsc(name) + '"><td class="l wl-stock">' + code + '</td><td class="l wl-stock"><span class="wl-name">' + wlEsc(name) + '</span></td>' +
      '<td class="' + (pct === null ? 'flat' : dirClass(pct)) + '">' + (pct === null ? '—' : fmt(pct) + '%') + '</td>' +
      '<td class="l">' + (trkStatusBadges(code, q, holders[code], launchCount.get(code) || 0, liveLaunch.has(code), bladeCodes.has(code)) || '<span class="flat">—</span>') + '</td>' +
      '<td>' + (count.get(code) || 0) + '</td>' +
      '<td class="l">' + (last ? '<span class="muted">' + last.time + '</span> ' + wlEsc(last.label) : '<span class="flat">—</span>') + '</td></tr>';
  }).join('');
  const timelineHtml = timeline.length
    ? '<div class="wl-table-wrap"><table class="wl-table trk-table"><thead><tr><th class="l">時間</th><th class="l">代號</th><th class="l">名稱</th><th class="l">訊號</th><th class="l">說明</th></tr></thead><tbody>' +
      timeline.map((r) => '<tr data-code="' + r.code + '" data-name="' + wlEsc(r.name || '') + '"><td class="l">' + r.time + '</td><td class="l wl-stock">' + r.code + '</td><td class="l wl-stock">' + wlEsc(r.name || r.code) + '</td>' +
        '<td class="l"><span class="trk-sig ' + (r.bull === true ? 'bull' : r.bull === false ? 'bear' : '') + '">' + wlEsc(r.label) + '</span></td><td class="l trk-note">' + wlEsc(r.note || '') + '</td></tr>').join('') +
      '</tbody></table></div>'
    : '<div class="race-note">' + (evDate !== today ? '今天還沒開盤，' : '') + '自選股' + (trk.kind === 'all' ? '' : '這類') + '目前沒有訊號。</div>';
  // 提醒設定
  const kindToggles = TRK_KINDS.map((k) => '<label class="trk-chk"><input type="checkbox" data-tset="trk_' + k.key + '"' + (trkSetting('trk_' + k.key, true) !== false ? ' checked' : '') + '>' + k.label + '</label>').join('');
  const seen = new Set();
  const alertRows = [];
  for (const g of wl.data.groups) for (const it of g.items){
    if (seen.has(it.code) || !codes.has(it.code)) continue;
    seen.add(it.code);
    const q = quotes[it.code], price = q && Number(q.price) > 0 ? Number(q.price) : null, name = wlNameOf(it.code, it);
    const maHint = price !== null ? TRK_MAS.map((p) => { const v = trkMaOf(it.code, price, p); return v === null ? '' : p + '日 ' + num2(v); }).filter(Boolean).join('・') : '';
    alertRows.push('<tr data-code="' + it.code + '"><td class="l wl-stock">' + it.code + '</td><td class="l">' + wlEsc(name) + '</td><td>' + (price === null ? '—' : num2(price)) + '</td>' +
      '<td><input class="trk-in" type="number" step="0.01" min="0" data-tfield="above" value="' + (it.above || '') + '" placeholder="價格"></td>' +
      '<td><input class="trk-in" type="number" step="0.01" min="0" data-tfield="below" value="' + (it.below || '') + '" placeholder="價格"></td>' +
      '<td><select class="wl-gsel" data-tfield="ma"><option value="0">不提醒</option>' + TRK_MAS.map((p) => '<option value="' + p + '"' + (it.ma === p ? ' selected' : '') + '>' + p + ' 日線</option>').join('') + '</select></td>' +
      '<td class="l muted trk-ma">' + (WL_GROUP_INDEX[it.code] ? maHint : '族群表外的股票沒有均線資料') + '</td></tr>');
  }
  body.innerHTML =
    '<div class="wl-groups">' + groupChips + '</div>' +
    '<div class="pk-sec">① 現況 <small>' + (evDate !== today ? '今天還沒開盤，訊號顯示 ' + evDate.slice(5).replace('-', '/') + ' 的' : '盤中即時（跟首頁、訊號中心同一份）') + '</small></div>' +
    '<div class="wl-table-wrap"><table class="wl-table trk-table"><thead><tr><th class="l">代號</th><th class="l">名稱</th><th>漲跌幅</th><th class="l">狀態</th><th>今天訊號</th><th class="l">最新訊號</th></tr></thead><tbody>' + statusRows + '</tbody></table></div>' +
    '<div class="pk-sec">② 今日訊號 <small>時間新→舊・' + timeline.length + ' 筆</small></div>' +
    '<div class="wl-sorts">' + kindChips + '</div>' + timelineHtml +
    '<div class="pk-sec">③ 提醒設定 <small>網頁開著才會跳；同一個條件一天只提醒一次</small></div>' +
    '<div class="wl-sync"><label class="trk-chk"><input type="checkbox" data-tset="trkOn"' + (trkSetting('trkOn', true) !== false ? ' checked' : '') + '><b>自選股提醒</b></label>' +
      '<span class="wl-hint" style="flex-basis:auto;margin:0">自選股出現這些訊號就跳通知＋響聲：</span>' + kindToggles +
      (alertsEnabled ? '' : '<div class="wl-status err" style="flex-basis:100%">右上角「提醒開啟」目前是關的，所有提醒都不會跳。</div>') + '</div>' +
    '<div class="wl-table-wrap"><table class="wl-table trk-table"><thead><tr><th class="l">代號</th><th class="l">名稱</th><th>現價</th><th>站上（≥）</th><th>跌破（≤）</th><th>跌破均線</th><th class="l">目前均線</th></tr></thead><tbody>' + alertRows.join('') + '</tbody></table></div>' +
    '<div class="sw-foot">訊號跟盤中訊號中心同一份（特大買賣單套用訊號中心那邊設的篩選）；🚀 發動是後端每次發動的永久紀錄。到價、跌破均線只在盤中判斷，均線用現價當今天收盤算（跟均線分數同一套），族群表外的股票沒有均線。' +
    '提醒設定存在自選股清單裡，設了同步碼就三台共用；每台電腦網頁開著時各自跳提醒。點代號或名稱開K線圖。</div>';
}
function openTrackPanel(){
  document.getElementById('trackModal').hidden = false;
  refreshBrewLaunch();
  refreshBrewHistory(false);
  if (wl.key) wlLoad();
  wlFetchExtra(true);
  renderTrack(true);
}
function closeTrackPanel(){ document.getElementById('trackModal').hidden = true; }
document.getElementById('trackClose').addEventListener('click', closeTrackPanel);
document.getElementById('trackModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeTrackPanel(); });
document.getElementById('trackBody').addEventListener('click', (e) => {
  if (e.target.closest('input, select, label')) return;
  const g = e.target.closest('[data-tgroup]');
  if (g){ trk.group = g.dataset.tgroup; renderTrack(); return; }
  const k = e.target.closest('[data-tkind]');
  if (k){ trk.kind = k.dataset.tkind; renderTrack(); return; }
  const cell = e.target.closest('.wl-stock');
  if (cell){
    const row = cell.closest('tr[data-code]');
    if (!useFloatingCharts()){
      document.getElementById('trackModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(row.dataset.code, row.dataset.name || wlNameOf(row.dataset.code, trkItemOf(row.dataset.code)));
  }
});
document.getElementById('trackBody').addEventListener('change', (e) => {
  const set = e.target.closest('[data-tset]');
  if (set){
    const key = set.dataset.tset, on = !!set.checked;
    wlMutate((data) => { data.settings = data.settings || {}; data.settings[key] = on; });
    if (key === 'trkOn' && on) requestNotifyPermission();
    return;
  }
  const field = e.target.closest('[data-tfield]');
  if (!field) return;
  const code = field.closest('tr[data-code]').dataset.code, name = field.dataset.tfield;
  const raw = Number(field.value);
  const value = name === 'ma' ? (TRK_MAS.includes(raw) ? raw : 0) : (raw > 0 ? Math.round(raw * 10000) / 10000 : 0);
  wlMutate((data) => {
    for (const g of data.groups) for (const it of g.items){
      if (it.code !== code) continue;
      if (value) it[name] = value; else delete it[name];
    }
  });
  if (value) requestNotifyPermission();
});
function trkTick(){
  try { trkCheck(); } catch (e) { /* 提醒判斷失敗不影響畫面 */ }
  try { renderTrack(); } catch (e) { /* 重畫失敗不影響畫面 */ }
}

// ---- 個股問診（2026-09-28 使用者：照學員專區「個股問診・完整版」做）----
// 打股號 → /api/diag 拿回那檔收盤後算好的三面向分數、七科、防守線、近 120 根日K、同族對照、族群強度榜與今日名單、穿惡名單。
let dgState = { code: '', query: null, data: null, loading: false, failedAt: 0, error: '', filter: 'all', recent: [] };
try { dgState.recent = (JSON.parse(localStorage.getItem('diagRecent') || '[]') || []).filter((x) => x && x.code); } catch (e) { /* 用空的 */ }
function dgRemember(code, name){
  dgState.recent = [{ code, name: name || '' }].concat(dgState.recent.filter((x) => x.code !== code)).slice(0, 8);
  try { localStorage.setItem('diagRecent', JSON.stringify(dgState.recent)); } catch (e) { /* 記不住就算了 */ }
}
async function ensureDiag(){
  const code = dgState.code;
  if (!code){ dgState.data = null; dgState.query = null; return; }
  if (dgState.query === code && (dgState.data || dgState.loading)) return;
  if (dgState.query === code && dgState.failedAt && Date.now() - dgState.failedAt < 30000) return;
  dgState.query = code; dgState.loading = true; dgState.data = null; dgState.error = '';
  try {
    const res = await fetch('/api/diag?code=' + encodeURIComponent(code));
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error((data && (data.detail || data.error)) || ('diag http ' + res.status));
    if (!data || !data.status) throw new Error('bad payload');
    if (dgState.query !== code) return;
    dgState.data = data; dgState.failedAt = 0;
    if (data.status === 'ok' && data.stock) dgRemember(data.stock.code, data.stock.name);
  } catch (e) {
    if (dgState.query !== code) return;
    dgState.failedAt = Date.now(); dgState.error = String((e && e.message) || e);
  } finally {
    if (dgState.query === code) dgState.loading = false;
  }
  if (!document.getElementById('diagModal').hidden) renderDiag();
}
function dgRun(text){
  const code = ckResolve(text)[0] || '';
  dgState.code = code; dgState.query = null; dgState.failedAt = 0; dgState.filter = 'all';
  renderDiag();
  const inner = document.getElementById('diagInner');
  if (inner) inner.scrollTop = 0;
}
const dgClsClass = (cls) => (cls === '強勢' ? 'strong' : cls === '中等' ? 'mid' : cls === '弱勢' ? 'weak' : '');
const dgClsPill = (cls) => (cls ? '<span class="dg-pill ' + dgClsClass(cls) + '">' + cls + '</span>' : '');
function dgAboveList(s){
  const ma = s.ma || {};
  return ['5', '10', '20', '60', '120', '240'].filter((p) => swHas(ma[p]) && s.close > ma[p]).join('・');
}
function dgSummaryLines(s){
  const c = s.chip || {}, f = s.fund || {}, d = s.def, sc = s.score2, above = dgAboveList(s);
  const lines = [];
  lines.push(swHas(sc) ? '均線 <b>' + sc + ' 分</b>，' + (sc >= 12 ? '很強' : sc >= 8 ? '不強不弱' : '偏弱') + (above ? '（站上 ' + above + ' 日線）' : '（沒站上任何均線）') : '均線分數：日K不足 240 根，還算不出來' + (above ? '（目前站上 ' + above + ' 日線）' : ''));
  lines.push(swHas(c.weekPct) ? '籌碼本週 <b>' + swPct(c.weekPct, 2) + '</b>，' + (c.weekPct >= 3 ? '大戶明顯進' : c.weekPct <= -3 ? '大戶明顯出' : '沒明顯進出') : '籌碼：集保大戶週增還沒有資料' + (swHas(c.mf5) ? '，主力 5 日 <b>' + swLots(c.mf5) + '</b>' : ''));
  lines.push(swHas(f.yoy) ? '營收 ' + swYm(f.ym) + ' 年增 <b>' + swPct(f.yoy, 1) + '</b>，' + (f.yoy >= 30 ? '成長很強' : f.yoy >= 0 ? '有成長' : '衰退') + (swHas(f.mom) ? '（月增 ' + swPct(f.mom, 1) + '）' : '') : '營收：沒有月營收資料');
  if (swHas(c.inst5)){
    const same = swHas(c.instToday) && c.instToday !== 0 && c.inst5 !== 0 && (c.inst5 > 0) === (c.instToday > 0);
    lines.push('法人近 5 日 <b>' + swLots(c.inst5) + '</b>、今日 <b>' + (swHas(c.instToday) ? swLots(c.instToday) : '—') + '</b>，' + (swHas(c.instToday) ? (same ? '買賣一致' : '買賣不一致') : '今天的還沒進來'));
  } else lines.push('法人：沒有買賣超資料');
  lines.push(s.group ? '族群 <b>' + s.group + '</b>' + (s.groupRank ? '，族內第 ' + s.groupRank + '/' + s.groupN : '') + (swHas(s.groupAvg2) ? '，族群平均 ' + s.groupAvg2 + ' 分' : '') + (s.groupSrank ? '，強度榜第 ' + s.groupSrank : '') : '沒有歸在任何族群');
  lines.push(swHas(f.pe) ? '本益比 <b>' + f.pe + '</b>（' + (f.pe < 15 ? '便宜' : f.pe < 30 ? '合理' : f.pe < 50 ? '偏貴' : '貴') + '）' : '本益比：沒有資料');
  lines.push(d ? '防守：明天守 <b>三日低 ' + ckPrice(d.low3T) + '</b>、<b>月線 ' + ckPrice(d.ma20T) + '</b>' + (d.halfT ? '、<b>紅半 ' + ckPrice(d.halfT) + '</b>' : '') + '（收盤跌破任一 → 減碼；雙破 → 出場）' : '防守：日K不足 21 根，算不出防守線');
  return lines;
}
function dgDefenseHtml(d){
  if (!d) return '<div class="race-note">日K不足，沒有防守線</div>';
  const judge = (broken, extra) => (broken ? '<span class="dg-bad">❌ 跌破' + (extra || '') + '</span>' : '<span class="dg-ok">✅ 守住</span>');
  const row = (label, y, dist, judgeHtml, t) => '<tr class="dg-defrow"><td class="l">' + label + '</td><td>' + (swHas(y) ? ckPrice(y) : '—') + '</td><td class="' + dirClass(dist || 0) + '">' + (swHas(dist) ? swPct(dist, 2) : '—') + '</td><td class="l">' + judgeHtml + '</td><td><b>' + (swHas(t) ? ckPrice(t) : '—') + '</b></td></tr>';
  return '<div class="hl-scroll"><table class="ck-table"><thead><tr><th class="l">防守線</th><th>昨日值(今天用)</th><th>今收距離</th><th class="l">今日判定</th><th>明日防守值(今收後定案)</th></tr></thead><tbody>' +
    row('三日低', d.low3Y, d.dL3, judge(d.brkL3), d.low3T) +
    row('月線 MA20', d.ma20Y, d.dMa, judge(d.brkMa, d.nearMa ? '・🐉 即將穿惡' : ''), d.ma20T) +
    ((swHas(d.halfY) || swHas(d.halfT)) ? row('紅半', d.halfY, d.dHalf, swHas(d.halfY) ? judge(d.brkHalf) : '<span class="muted">昨天沒有</span>', d.halfT) : '') +
    '</tbody></table></div>' +
    '<div class="sw-rule">口徑：三日低＝不含當天的前三個交易日最低（明日值＝含今天的近三日最低）；月線＝20 日收盤均；紅半＝近三個交易日最高與最低的中間值，三日振幅 ≥10% 且收盤站在中點之上才列（漲多時多一個防守點）。收盤跌破任一 → 減碼；兩條都破 → 出場。🐉 即將穿惡＝收盤在月線下但距月線 10% 以內，一根漲停就能站回。日K未還原除權息。</div>';
}
function dgCandlesHtml(bars, d, days){
  const all = (bars || []).filter((b) => b && b.length >= 5);
  if (all.length < 5) return '<div class="race-note">日K不足，畫不出來</div>';
  const closes = all.map((b) => b[4]);
  const ma = (n, i) => (i + 1 >= n ? closes.slice(i + 1 - n, i + 1).reduce((a, b) => a + b, 0) / n : null);
  const start = Math.max(0, all.length - (days || 60));
  const shown = all.slice(start);
  const W = Math.max(360, shown.length * 11 + 90), H = 260, L = 8, R = 82, T = 10, B = 30;
  const levels = d ? [['三日低', d.low3T, '4 3'], ['月線', d.ma20T, '8 4'], ['紅半', d.halfT, '10 3 2 3']].filter((x) => swHas(x[1])) : [];
  let lo = Math.min(...shown.map((b) => b[3])), hi = Math.max(...shown.map((b) => b[2]));
  for (const [, v] of levels){ lo = Math.min(lo, v); hi = Math.max(hi, v); }
  const pad = (hi - lo) * 0.04 || 1; lo -= pad; hi += pad;
  const x = (i) => L + (i + 0.5) * (W - L - R) / shown.length;
  const y = (v) => T + (hi - v) / (hi - lo) * (H - T - B);
  const cw = Math.max(3, Math.min(8, (W - L - R) / shown.length * 0.6));
  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">';
  for (let t = 0; t <= 4; t++){ const v = lo + (hi - lo) * t / 4; svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '" stroke="currentColor" stroke-opacity=".1"/><text x="' + (W - R + 4) + '" y="' + (y(v) + 3).toFixed(1) + '" fill="currentColor" fill-opacity=".55">' + ckPrice(v) + '</text>'; }
  shown.forEach((b, i) => {
    const up = b[4] >= b[1], color = up ? '#e6675f' : '#5fae6f';
    const top = y(Math.max(b[1], b[4])), bottom = y(Math.min(b[1], b[4]));
    svg += '<line x1="' + x(i).toFixed(1) + '" x2="' + x(i).toFixed(1) + '" y1="' + y(b[2]).toFixed(1) + '" y2="' + y(b[3]).toFixed(1) + '" stroke="' + color + '" stroke-width="1"/>';
    svg += '<rect x="' + (x(i) - cw / 2).toFixed(1) + '" y="' + top.toFixed(1) + '" width="' + cw.toFixed(1) + '" height="' + Math.max(1, bottom - top).toFixed(1) + '" fill="' + color + '"><title>' + b[0] + ' 開 ' + ckPrice(b[1]) + ' 高 ' + ckPrice(b[2]) + ' 低 ' + ckPrice(b[3]) + ' 收 ' + ckPrice(b[4]) + (b[5] ? ' 量 ' + b[5] : '') + '</title></rect>';
    if (i % 10 === 0 || i === shown.length - 1) svg += '<text x="' + x(i).toFixed(1) + '" y="' + (H - B + 14) + '" text-anchor="middle" fill="currentColor" fill-opacity=".7">' + String(b[0]).slice(5) + '</text>';
  });
  for (const [n, color] of [[5, '#f59e0b'], [20, '#60a5fa'], [60, '#a78bfa']]){
    let path = '', pen = false;
    shown.forEach((b, i) => { const v = ma(n, start + i); if (v === null){ pen = false; return; } path += (pen ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); pen = true; });
    if (path) svg += '<path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="1.5"/>';
  }
  for (const [label, v, dash] of levels){
    svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '" stroke="#e6675f" stroke-opacity=".9" stroke-dasharray="' + dash + '"/>' +
      '<text x="' + (W - R + 4) + '" y="' + (y(v) - 4).toFixed(1) + '" fill="#e6675f" font-weight="700">明日 ' + label + ' ' + ckPrice(v) + '</text>';
  }
  svg += '</svg>';
  const last = shown[shown.length - 1];
  return '<div class="dg-legend"><span><i style="border-color:#f59e0b"></i>MA5</span><span><i style="border-color:#60a5fa"></i>MA20</span><span><i style="border-color:#a78bfa"></i>MA60</span><span><i style="border-color:#e6675f;border-top-style:dashed"></i>明日要守的 三日低／月線／紅半</span><span class="muted">' + last[0] + ' 收 ' + ckPrice(last[4]) + '</span></div>' +
    '<div class="hl-scroll dg-chart">' + svg + '</div><div class="race-note">滑過 K 棒看當日開高低收與成交量・虛線＝明天要守的線（同上面防守線）・價格未還原除權息</div>';
}
function dgSpark(points, opts){
  const pts = (points || []).filter((p) => p && swHas(p[1]));
  if (!pts.length) return '<span class="muted">—</span>';
  const W = 150, H = 40, L = 2, R = 40;
  const vals = pts.map((p) => Number(p[1]));
  let lo = Math.min(...vals, opts && opts.zero ? 0 : Infinity), hi = Math.max(...vals, opts && opts.zero ? 0 : -Infinity);
  if (hi === lo){ hi += 1; lo -= 1; }
  const x = (i) => L + (pts.length === 1 ? (W - L - R) / 2 : i * (W - L - R) / (pts.length - 1));
  const y = (v) => 4 + (hi - v) / (hi - lo) * (H - 8);
  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">';
  if (opts && opts.bars){
    const bw = Math.max(3, (W - L - R) / pts.length * 0.6);
    pts.forEach((p, i) => { const v = Number(p[1]); svg += '<rect x="' + (x(i) - bw / 2).toFixed(1) + '" y="' + Math.min(y(v), y(0)).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + Math.max(1, Math.abs(y(v) - y(0))).toFixed(1) + '" fill="' + (v >= 0 ? '#e6675f' : '#5fae6f') + '"><title>' + p[0] + ' ' + p[1] + '</title></rect>'; });
    if (lo < 0 && hi > 0) svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '" stroke="currentColor" stroke-opacity=".4"/>';
  } else {
    svg += '<polyline points="' + pts.map((p, i) => x(i).toFixed(1) + ',' + y(Number(p[1])).toFixed(1)).join(' ') + '" fill="none" stroke="#e6675f" stroke-width="1.5"/>';
    pts.forEach((p, i) => { svg += '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(Number(p[1])).toFixed(1) + '" r="2" fill="#e6675f"><title>' + p[0] + ' ' + p[1] + '</title></circle>'; });
  }
  const lastV = vals[vals.length - 1];
  svg += '<text x="' + (W - R + 4) + '" y="' + Math.max(11, Math.min(H - 2, y(lastV) + 3)).toFixed(1) + '" fill="currentColor" font-weight="700" font-size="12">' + (opts && opts.fmt ? opts.fmt(lastV) : lastV) + '</text></svg>';
  return '<span class="dg-spark">' + svg + '</span><div class="dg-sub">' + (opts && opts.note ? opts.note : '') + '</div>';
}
function dgSubjectsHtml(s){
  const sc = (s.subjects && s.subjects.sc) || {}, c = s.chip || {}, f = s.fund || {}, h = s.hist || {};
  const chip = (k) => (swHas(sc[k]) ? '<span class="ck-sub s' + sc[k] + '">' + sc[k] + ' 分</span>' : '<span class="muted">—</span>');
  const row = (label, k, now, grp, trend) => '<tr><td class="l"><b>' + label + '</b> ' + chip(k) + '</td><td class="l">' + now + '</td><td class="l">' + grp + '</td><td class="l">' + trend + '</td></tr>';
  const above = dgAboveList(s);
  return '<div class="hl-scroll"><table class="ck-table"><thead><tr><th class="l">科目</th><th class="l">目前</th><th class="l">族內</th><th class="l">近期走勢</th></tr></thead><tbody>' +
    row('均線分數', 'ma', (swHas(s.score2) ? '<b>' + s.score2 + '</b>/15' : '—') + '<div class="dg-sub">' + (above ? '站上 ' + above + ' 日線' : '沒站上任何均線') + '</div>', swHas(s.groupAvg2) ? '族群平均 ' + s.groupAvg2 : '—', dgSpark(h.score10, { note: '近 10 日分數' })) +
    row('族群名次', 'grp', s.group ? (s.groupSrank ? '強度榜第 <b>' + s.groupSrank + '</b>' : '—') + (s.groupCloseRank ? '<div class="dg-sub">收盤排名第 ' + s.groupCloseRank + '（下午報）</div>' : '') : '沒有歸在任何族群', s.group ? (swHas(s.groupStrength) ? '族群強度 ' + s.groupStrength : '—') : '—', '<span class="muted">—</span>') +
    row('個股族內名次', 'pos', s.groupRank ? '第 <b>' + s.groupRank + '</b>/' + s.groupN + '<div class="dg-sub">今日 ' + swPct(s.chgPct, 2) + '</div>' : '—', '—', '<span class="muted">—</span>') +
    row('籌碼暴增', 'chip', swHas(c.weekPct) ? '<b>' + swPct(c.weekPct, 2) + '</b><div class="dg-sub">' + (c.tdccDate ? swMmdd(c.tdccDate) + ' 週' : '') + (c.weeks > 0 ? '・連 ' + c.weeks + ' 週增' : '') + (swHas(c.bigPct) ? '・大戶持股 ' + c.bigPct + '%' : '') + '</div>' : '還沒有集保週增資料' + (swHas(c.bigPct) ? '<div class="dg-sub">大戶持股 ' + c.bigPct + '%（' + swMmdd(c.tdccDate) + '）</div>' : ''), '—', dgSpark(h.chip8, { bars: true, zero: true, note: '近 8 週增減', fmt: (v) => swPct(v, 1) })) +
    row('本益比', 'pe', swHas(f.pe) ? '<b>' + f.pe + '</b><div class="dg-sub">' + (f.pe < 15 ? '便宜' : f.pe < 30 ? '合理' : f.pe < 50 ? '偏貴' : '貴') + (f.peDate ? '・' + swMmdd(f.peDate) : '') + '</div>' : '—', '—', dgSpark(h.pe8, { note: '近 8 天本益比' })) +
    row('營收成長', 'rev', swHas(f.yoy) ? '<b>' + swPct(f.yoy, 1) + '</b><div class="dg-sub">' + swYm(f.ym) + (swHas(f.revenue) ? '・' + (f.revenue >= 1e5 ? (f.revenue / 1e5).toFixed(1) + ' 億' : f.revenue.toLocaleString('en-US') + ' 千元') : '') + (swHas(f.mom) ? '・月增 ' + swPct(f.mom, 1) : '') + '</div>' : '—', '—', dgSpark(h.rev4, { bars: true, zero: true, note: '近 4 個月年增', fmt: (v) => swPct(v, 0) })) +
    row('法人買賣超', 'inst', swHas(c.instToday) ? '<b class="' + dirClass(c.instToday) + '">' + swLots(c.instToday) + '</b>' + (c.f3 ? '<div class="dg-sub">外資 ' + swLots(c.f3.foreign) + '・投信 ' + swLots(c.f3.trust) + '・自營 ' + swLots(c.f3.dealer) + '</div>' : '') : (swHas(c.inst5) ? '今天的還沒進來' : '—'), swHas(c.inst5) ? '近 5 日 <b class="' + dirClass(c.inst5) + '">' + swLots(c.inst5) + '</b>' + (c.instStreak > 0 ? '<div class="dg-sub">連買 ' + c.instStreak + ' 天</div>' : c.instStreak < 0 ? '<div class="dg-sub">連賣 ' + (-c.instStreak) + ' 天</div>' : '') : '—', dgSpark((h.inst10 || []).map((p) => [p[0], swHas(p[1]) ? Math.round(p[1] / 1000) : null]), { bars: true, zero: true, note: '近 10 日三大法人（張）', fmt: (v) => swLots(v) })) +
    '</tbody></table></div>';
}
const dgDefCell = (d) => (d ? ckPrice(d.ma20T) + ' / ' + ckPrice(d.low3T) + (swHas(d.halfT) ? '<div class="dg-sub">紅半 ' + ckPrice(d.halfT) + '</div>' : '') : '—');
const dgJudge = (d) => (d ? '<span class="' + ((d.brkMa || d.brkL3 || d.brkHalf) ? 'dg-bad' : 'dg-ok') + '">' + d.label + '</span>' : '—');
function dgListRowHtml(r, i, cur){
  return '<tr class="dg-link' + (cur ? ' dg-cur' : '') + '" data-code="' + r.code + '"><td>' + i + '</td><td class="l"><b>' + r.code + '</b> ' + (r.name || '') + (r.disposed ? ' 🔒' : '') + '</td><td class="l">' + dgClsPill(r.cls) + '</td>' +
    '<td class="' + dirClass(r.chgPct || 0) + '">' + swPct(r.chgPct, 2) + '</td><td>' + (swHas(r.score2) ? r.score2 : '—') + '</td><td class="' + dirClass(r.weekPct || 0) + '">' + swPct(r.weekPct, 2) + '</td><td>' + (swHas(r.pe) ? r.pe : '—') + '</td>' +
    '<td class="' + dirClass(r.yoy || 0) + '">' + (swHas(r.yoy) ? swPct(r.yoy, 0) : '—') + '</td><td class="' + dirClass(r.inst5 || 0) + '">' + (swHas(r.inst5) ? swLots(r.inst5) : '—') + '</td><td>' + ckPrice(r.close) + '</td><td class="l">' + dgDefCell(r.def) + '</td><td class="l">' + dgJudge(r.def) + '</td></tr>';
}
const DG_LIST_HEAD = '<tr><th>#</th><th class="l">股票</th><th class="l">判定</th><th>今日</th><th>均線</th><th>籌碼</th><th>PE</th><th>營收年增</th><th>法人 5 日</th><th>今收</th><th class="l">明日守 月線 / 三日低</th><th class="l">防守判定</th></tr>';
function dgSiblingsHtml(data){
  const s = data.stock, rows = data.siblings || [];
  if (!s.group) return '<div class="bl-section bl-brew">👥 同族對照</div><div class="race-note">沒有歸在任何族群，沒得比</div>';
  return '<div class="bl-section bl-brew">👥 同族對照・' + s.group + '（' + rows.length + ' 檔，依七科總分排）</div>' +
    '<div class="hl-scroll"><table class="ck-table"><thead>' + DG_LIST_HEAD + '</thead><tbody>' + rows.map((r, i) => dgListRowHtml(r, i + 1, r.code === s.code)).join('') + '</tbody></table></div>' +
    '<div class="sw-rule">防守判定＝今收 vs 昨日月線／昨日三日低（守住＝兩條都沒破；破一條先減碼；雙破＝出場）。明日守＝今收後算出、明天要守的月線／三日低（有紅半也列）。點任一列可換該股問診。</div>';
}
function dgTopHtml(data){
  const top = data.top || {}, groups = (top.groups || []).slice(0, 10);
  if (!groups.length) return '';
  const rows = groups.map((g) => '<tr><td>' + g.srank + '</td><td class="l"><b>' + g.g + '</b></td><td>' + g.n + '</td><td class="l">' + (g.top || []).map((t) => '<span class="ck-tag dg-link" data-code="' + t[0] + '">' + dgClsPill(t[3]) + ' ' + t[0] + ' ' + t[1] + ' <span class="muted">' + t[2] + '</span></span>').join(' ') + '</td>' +
    '<td>' + (g.cnt || {})['強勢'] + ' / ' + (g.cnt || {})['中等'] + ' / ' + (g.cnt || {})['弱勢'] + '</td><td>' + g.strength + '</td><td>' + (g.rank || '—') + '</td></tr>').join('');
  return '<div class="bl-section bl-launch">🏆 族群強度榜前 10 族</div>' +
    '<div class="hl-scroll"><table class="ck-table"><thead><tr><th>#</th><th class="l">族群</th><th>檔數</th><th class="l">代表股（七科總分）</th><th>強 / 中 / 弱</th><th>強度</th><th>收盤排名</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<div class="sw-rule">族群強度＝每族七科總分最高的前 3 檔平均；收盤排名＝下午報當天族群平均漲跌幅的名次。點代表股可換該股問診。</div>';
}
const DG_FILTERS = [['all', '全部'], ['near', '🐉 即將穿惡'], ['hold', '✅ 守住'], ['ma', '🌙 破月線'], ['both', '💥 雙破'], ['half', '🔻 破紅半'], ['hashalf', '🚩 有紅半']];
function dgFilterOk(r){
  const d = r.def || {}, f = dgState.filter;
  if (f === 'all') return true;
  if (f === 'near') return !!d.nearMa;
  if (f === 'hold') return !d.brkMa && !d.brkL3 && !d.brkHalf;
  if (f === 'ma') return !!d.brkMa;
  if (f === 'both') return !!(d.brkMa && d.brkL3);
  if (f === 'half') return !!d.brkHalf;
  if (f === 'hashalf') return swHas(d.halfT);
  return true;
}
function dgTodayHtml(data){
  const top = data.top || {}, list = (top.list || []).filter(dgFilterOk), byRank = {};
  for (const g of (top.groups || [])) byRank[g.srank] = g;
  const btn = (k, label) => '<button class="chart-tab chips-btn dg-fbtn' + (dgState.filter === k ? ' active' : '') + '" data-filter="' + k + '">' + label + '</button>';
  let rows = '', last = null, i = 0;
  for (const r of list){
    if (r.srank !== last){ last = r.srank; i = 0; const g = byRank[r.srank] || {}; rows += '<tr class="dg-grp"><td colspan="12">強度榜 第 ' + r.srank + '・' + (g.g || r.group) + '</td></tr>'; }
    rows += dgListRowHtml(r, ++i, r.code === data.stock.code);
  }
  return '<div class="bl-section bl-brew">📋 今日名單・族群強度榜前十族 × 強勢／中等（' + (top.list || []).length + ' 檔）</div>' +
    '<div class="dg-filter">防守判定：' + DG_FILTERS.map(([k, l]) => btn(k, l)).join('') + '</div>' +
    (list.length ? '<div class="hl-scroll"><table class="ck-table"><thead>' + DG_LIST_HEAD + '</thead><tbody>' + rows + '</tbody></table></div>' : '<div class="race-note">沒有符合這個判定的股票</div>') +
    '<div class="sw-rule">依族群強度 → 七科總分排；點列可換該股問診。「即將穿惡」＝破月線但一根漲停能站回。</div>';
}
function dgCrossHtml(data){
  const cross = data.cross || {}, groups = cross.groups || {};
  const total = cross.n || 0;
  const block = (cls) => { const rows = groups[cls] || []; if (!rows.length) return ''; return '<div class="sw-etf-kind">' + cls + '・' + rows.length + ' 檔</div><div class="hl-scroll"><table class="ck-table"><thead><tr><th class="l">股票</th><th class="l">族群</th><th>🔴🟢</th><th>均線</th><th>昨收</th><th>收盤</th><th>漲幅</th><th>成交量</th><th>月線</th><th>站上多少</th><th class="l">明日守 三日低 / 紅半</th></tr></thead><tbody>' +
    rows.map((r) => '<tr class="dg-link' + (r.code === data.stock.code ? ' dg-cur' : '') + '" data-code="' + r.code + '"><td class="l"><b>' + r.code + '</b> ' + r.name + '</td><td class="l">' + (r.group || '—') + '</td><td>🔴' + (r.red || 0) + '・🟢' + (r.green || 0) + '</td><td>' + (swHas(r.score2) ? r.score2 : '—') + '</td><td>' + ckPrice(r.prev) + '</td><td>' + ckPrice(r.close) + '</td><td class="' + dirClass(r.chgPct || 0) + '">' + swPct(r.chgPct, 2) + '</td><td>' + (r.volume || 0).toLocaleString('en-US') + ' 張</td><td>' + (r.def ? ckPrice(r.def.ma20T) : '—') + '</td><td class="up">' + (r.cross ? swPct(r.cross.dist, 1) : '—') + '</td><td class="l">' + (r.def ? ckPrice(r.def.low3T) + (swHas(r.def.halfT) ? ' / 紅半 ' + ckPrice(r.def.halfT) : '') : '—') + '</td></tr>').join('') + '</tbody></table></div>'; };
  return '<div class="bl-section bl-launch">🐉 今日穿惡名單・' + swMmdd(data.date) + ' 真穿惡 ' + total + ' 檔</div>' +
    '<div class="sw-basis">強勢 ' + (groups['強勢'] || []).length + '・中等 ' + (groups['中等'] || []).length + '・弱勢 ' + (groups['弱勢'] || []).length + (swHas(cross.nearLeft) ? '・還在月線下但一根漲停可站回 ' + cross.nearLeft + ' 檔' : '') + '</div>' +
    (total ? block('強勢') + block('中等') + block('弱勢') : '<div class="race-note">今天沒有真穿惡的股票</div>') +
    '<div class="sw-rule">口徑：只掃族群表內的股票；昨收在昨日月線之下、今收站上今日月線 2% 以上、成交量 ≥500 張才算真穿惡；強／中／弱＝七科體質分級。點列可換該股問診。</div>';
}
function dgHeaderHtml(data){
  const s = data.stock, sub = s.subjects || {}, ov = ckOverall(s);
  return '<div class="dg-head"><span class="dg-code">' + s.code + '</span><span class="dg-name">' + (s.name || '') + '</span>' + wlStarHtml(s.code, s.name || '') + chipsFlagPillsHtml(s.code) + '<span class="dg-grp">' + (s.group ? s.group : '沒有歸在任何族群') + (s.disposed ? '・🔒 處置中' : '') + '</span>' +
    '<span class="dg-px">' + ckPrice(s.close) + ' <span class="' + dirClass(s.chgPct || 0) + '">' + swPct(s.chgPct, 2) + '</span></span><span class="dg-grp">' + swMmdd(s.date) + ' 收盤・昨收 ' + ckPrice(s.prev) + (s.stale ? '・資料停在 ' + swMmdd(s.date) : '') + '</span></div>' +
    '<div class="dg-head">' + dgClsPill(sub.cls) + '<span>🔴 ' + (sub.red || 0) + '・🟢 ' + (sub.green || 0) + '</span><span>綜合 ' + ckScoreHtml(ov) + ' ' + ckLabel(ov) + '</span><span class="muted">基本面 ' + (swHas(s.scores.fund) ? s.scores.fund : '—') + '・籌碼面 ' + (swHas(s.scores.chip) ? s.scores.chip : '—') + '・技術面 ' + (swHas(s.scores.tech) ? s.scores.tech : '—') + '</span>' +
    '<button class="chart-tab chips-btn" id="dgChartBtn" data-code="' + s.code + '" data-name="' + (s.name || '') + '">開K線圖</button></div>' +
    '<ul class="dg-lines">' + dgSummaryLines(s).map((l) => '<li>' + l + '</li>').join('') + '</ul>';
}
function dgSearchHtml(){
  return '<div class="dg-search"><input class="dg-in" id="dgInput" placeholder="股號或股名，例 2330" value="' + (dgState.code || '') + '"><button class="chart-tab chips-btn active" id="dgRun">🩺 問診</button>' +
    (dgState.recent.length ? '<span class="dg-recent">最近：' + dgState.recent.map((x) => '<span class="ck-tag dg-link" data-code="' + x.code + '"><b>' + x.code + '</b>' + (x.name || '') + '</span>').join('') + '</span>' : '') + '</div>';
}
function renderDiag(){
  const body = document.getElementById('diagBody');
  ensureDiag();
  let html = dgSearchHtml();
  if (!dgState.code){
    body.innerHTML = html + '<div class="race-note">打股號按「問診」，一次看那檔的強弱、七科體檢、防守線、同族比較與今天的名單。</div>' + ckRulesHtml(null);
    return;
  }
  const data = dgState.data;
  if (!data){
    body.innerHTML = html + '<div class="signal-empty"><div class="se-title">' + (dgState.failedAt ? '讀取失敗' + (dgState.error ? '：' + dgState.error : '') : '問診中…') + '</div><div class="se-sub">後端每個交易日收盤後整理；讀不到的話稍後再試。</div></div>';
    return;
  }
  if (data.status !== 'ok'){
    body.innerHTML = html + '<div class="signal-empty"><div class="se-title">' + (data.status === 'missing' ? dgState.code + ' 本站沒有這檔的日K' : '還沒有問診資料') + '</div><div class="se-sub">' + (data.reason || '') + '</div></div>';
    return;
  }
  const s = data.stock;
  html += '<div class="sw-basis">' + swMmdd(data.date) + ' 收盤資料・整理時間 ' + (data.collector && data.collector.builtAt ? String(data.collector.builtAt).slice(5, 16).replace('T', ' ') : '—') + '・每個交易日收盤後跟下午報一起更新，非即時報價</div>';
  html += dgHeaderHtml(data);
  html += '<div class="bl-section bl-launch">🛡 防守線・出場與停損依據</div>' + dgDefenseHtml(s.def);
  html += '<div class="bl-section bl-brew">📈 日線圖・' + s.code + ' ' + (s.name || '') + '・K棒＋均線＋明日防守線（近 60 個交易日）</div>' + dgCandlesHtml(data.bars, s.def, 60);
  html += '<div class="bl-section bl-launch">📋 七科問診</div>' + dgSubjectsHtml(s);
  html += dgSiblingsHtml(data);
  html += dgTopHtml(data);
  html += dgTodayHtml(data);
  html += dgCrossHtml(data);
  body.innerHTML = html + ckRulesHtml(data);
}
function openDiagPanel(code){
  document.getElementById('diagModal').hidden = false;
  if (code) dgRun(code); else renderDiag();
}
function closeDiagPanel(){ document.getElementById('diagModal').hidden = true; }
document.getElementById('diagClose').addEventListener('click', closeDiagPanel);
document.getElementById('diagModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeDiagPanel(); });
document.getElementById('diagBody').addEventListener('click', (e) => {
  if (e.target.closest('#dgRun')){ dgRun((document.getElementById('dgInput') || {}).value || ''); return; }
  const fbtn = e.target.closest('.dg-fbtn');
  if (fbtn){ dgState.filter = fbtn.dataset.filter; renderDiag(); return; }
  const chart = e.target.closest('#dgChartBtn');
  if (chart){
    if (!useFloatingCharts()){
      document.getElementById('diagModal').classList.add('behind-chart');
      document.getElementById('signalModal').classList.add('behind-chart');
    }
    openStockChart(chart.dataset.code, chart.dataset.name);
    return;
  }
  const link = e.target.closest('.dg-link[data-code]');
  if (link){ dgRun(link.dataset.code); }
});
document.getElementById('diagBody').addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target && e.target.id === 'dgInput'){ e.preventDefault(); dgRun(e.target.value); } });

// ---- 版本戳記與自動更新（2026-09-25 使用者：iPhone 加到主畫面的網頁點籌碼排行沒反應，其實是一直跑舊版）----
// 加到主畫面的網頁沒有重新整理鈕，切回來時還是原本那一頁。頁面重新顯示時問伺服器目前版本（/api/version），
// 不一樣就重新載入（離開超過 1 分鐘才自動重載；剛切走就回來只顯示提示）；開著的時候每 5 分鐘檢查一次，
// 有新版在上方顯示「網頁有新版本」，點一下才更新，不打斷正在看的畫面。內嵌圖表視窗跟著父頁走，不自己檢查。
const BUILD_STAMP = '2026-10-10 13:13:34';
let buildHiddenSince = null;
async function fetchServerBuild(){
  try {
    const r = await fetch('/api/version?_=' + Date.now(), { cache: 'no-store' });
    if (!r.ok) return null;
    const j = await r.json();
    return j && typeof j.build === 'string' ? j.build : null;
  } catch (e) { return null; }
}
async function checkForNewBuild(autoReload){
  if (CHART_WINDOW_MODE) return;
  const build = await fetchServerBuild();
  if (!build || build === BUILD_STAMP) return false;
  if (autoReload){ location.reload(); return true; }
  document.getElementById('updateBanner').hidden = false;
  return true;
}
document.getElementById('updateBanner').addEventListener('click', () => location.reload());
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden'){ buildHiddenSince = Date.now(); return; }
  const away = buildHiddenSince ? Date.now() - buildHiddenSince : 0;
  buildHiddenSince = null;
  checkForNewBuild(away >= 60 * 1000);
});
window.addEventListener('pageshow', (e) => { if (e.persisted) checkForNewBuild(true); });
setInterval(() => { if (document.visibilityState === 'visible') checkForNewBuild(false); }, 5 * 60 * 1000);
document.getElementById('buildStamp').textContent = '版本 ' + BUILD_STAMP.slice(5, 16).replace('-', '/');

// ---- 發動通知（2026-09-24 使用者：36／15 檔要怎麼即時收到通知 → 頁面開著時跳瀏覽器通知＋提示音）----
// 每 15 秒行情更新後重算發動名單，出現新的發動就通知；右上角「提醒開啟／關閉」控制。
// 第一次算到的名單當作已經看過（開頁面時不會一次跳幾十個），之後新出現的才通知；名單記在瀏覽器裡，
// 重新整理不會重複通知同一檔。（使用者 2026-09-24：先只做網頁通知，Telegram 推播不做。）
let launchNotified = { date: null, codes: new Set(), seeded: false };
try {
  const raw = JSON.parse(localStorage.getItem('launchNotified') || 'null');
  if (raw && raw.date === twTodayStr()) launchNotified = { date: raw.date, codes: new Set(raw.codes || []), seeded: true };
} catch (e) { /* 沒有就從頭來 */ }
function saveLaunchNotified(){
  try { localStorage.setItem('launchNotified', JSON.stringify({ date: launchNotified.date, codes: [...launchNotified.codes] })); } catch (e) { /* 記不住就算了 */ }
}
let alertAudioCtx = null;
function primeAlertAudio(){
  try {
    alertAudioCtx = alertAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (alertAudioCtx.state === 'suspended') alertAudioCtx.resume();
  } catch (e) { alertAudioCtx = null; }
}
function launchBeep(){
  try {
    primeAlertAudio();
    if (!alertAudioCtx) return;
    // 2026-10-02 使用者：原本兩聲同音「叮、叮」要換成完全不同的提示音，不是只改音高——
    // 改成三個音階漸漸升高的鈴聲（C5→E5→G5大三和弦，像一般App的「有好事」通知音），
    // 音色也從預設的sine換成triangle，整體比較活潑、跟原本平板的雙叮聲聽起來不一樣。
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc = alertAudioCtx.createOscillator(), gain = alertAudioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq; gain.gain.value = 0.15;
      osc.connect(gain); gain.connect(alertAudioCtx.destination);
      const t = alertAudioCtx.currentTime + i * 0.12;
      osc.start(t); osc.stop(t + 0.18);
    });
  } catch (e) { /* 出不了聲就算了 */ }
}
function requestNotifyPermission(done){
  if (!('Notification' in window)){ if (done) done('unsupported'); return; }
  if (Notification.permission !== 'default'){ if (done) done(Notification.permission); return; }
  try { Notification.requestPermission().then((state) => { if (done) done(state); }); } catch (e) { if (done) done('unsupported'); }
}
let launchAlertRows = [];  // 還沒被按掉的發動提醒；還沒按掉又有新的發動，陸續加進來，不會蓋掉前面的
// 2026-09-30 使用者：卡片擋住後面內容時要能拖到畫面別的地方，不要釘死在正中間。
// 卡片內容（innerHTML）每次有新發動都會整個重畫，拖曳的事件綁在外層常駐的 el 上（用委派抓 .launch-alert-head），
// 不會因為重畫把監聽器跟著清掉；位置也是寫在 el 自己的 inline style，重畫 innerHTML 不會動到，所以拖到哪就停在哪。
let launchAlertDragging = false, launchAlertDragX = 0, launchAlertDragY = 0, launchAlertStartLeft = 0, launchAlertStartTop = 0;
function clampLaunchAlertPos(el, left, top){
  return {
    left: Math.max(0, Math.min(document.documentElement.clientWidth - el.offsetWidth, left)),
    top: Math.max(0, Math.min(window.innerHeight - 40, top)),
  };
}
function renderLaunchAlertBox(){
  let el = document.getElementById('launchAlertBox');
  if (!launchAlertRows.length){ if (el) el.remove(); return; }
  if (!el){
    el = document.createElement('div');
    el.id = 'launchAlertBox';
    el.className = 'launch-alert';
    el.addEventListener('click', (e) => { if (e.target.closest('.launch-alert-close')) dismissLaunchAlert(); });
    el.addEventListener('pointerdown', (e) => {
      if (!e.target.closest('.launch-alert-head') || e.target.closest('.launch-alert-close')) return;
      launchAlertDragging = true;
      launchAlertDragX = e.clientX; launchAlertDragY = e.clientY;
      const rect = el.getBoundingClientRect();
      launchAlertStartLeft = rect.left; launchAlertStartTop = rect.top;
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    el.addEventListener('pointermove', (e) => {
      if (!launchAlertDragging) return;
      const pos = clampLaunchAlertPos(el, launchAlertStartLeft + (e.clientX - launchAlertDragX), launchAlertStartTop + (e.clientY - launchAlertDragY));
      el.style.left = pos.left + 'px'; el.style.top = pos.top + 'px'; el.style.transform = 'none';
    });
    const stopLaunchAlertDrag = () => { launchAlertDragging = false; };
    el.addEventListener('pointerup', stopLaunchAlertDrag);
    el.addEventListener('pointercancel', stopLaunchAlertDrag);
    document.body.appendChild(el);
  }
  // 2026-09-30 使用者：卡片裡也要標出發動時間，最新的排最上面，比較舊的排下面。
  // 2026-10-08 使用者（電腦版截圖三筆都寫 12:12）：原本用 brewWhen，還沒進後端紀錄的「盤中」列會寫「現在幾點」，
  // 每來一筆新的重畫一次，前面幾筆的時間就全部跟著變成現在、排序也排不出先後。改成每筆固定一個發動時間
  // （後端有紀錄就用紀錄時間，沒有就用跳出提醒那一刻），後端紀錄晚一點才到也會補上，依這個時間新的在上、舊的在下。
  launchAlertRows.forEach((r) => { if (!r.alertExact){ const ms = launchRecordedMs(r.code); if (ms){ r.alertAt = ms; r.alertExact = true; } } });
  const sorted = launchAlertRows.slice().sort((a, b) => b.alertAt - a.alertAt);
  el.innerHTML = '<div class="launch-alert-head">🚀 發動<button type="button" class="launch-alert-close" aria-label="關閉">✕</button></div>' +
    '<div class="launch-alert-body">' + sorted.map((r) => '<span class="launch-alert-time">' + launchAlertClock(r.alertAt) + '</span> ' + r.code + ' ' + r.name + (r.groupName ? '（' + r.groupName + '）' : '')).join('<br>') + '</div>';
}
// 這一檔今天最近一次發動的後端紀錄時間（毫秒）；同一檔回落再發動會有好幾筆，提醒對應的是最近這一次。
function launchRecordedMs(code){
  let best = 0;
  (brewHistoryDay(brewSessionDate()).launch || []).forEach((x) => { if (x.code === code){ const ms = Date.parse(x.recordedAt) || 0; if (ms > best) best = ms; } });
  return best;
}
function launchAlertClock(ms){
  return new Date(ms).toLocaleTimeString('zh-TW', { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', hour12: false });
}
// 拖過之後（el.style.left 有值）換了screen尺寸（轉螢幕、瀏覽器拖去另一台螢幕）要是卡片被擠出畫面，重新夾回畫面內；
// 還沒拖過的（維持 CSS 預設置中）不要動，不然會覆蓋掉 left:50% 置中。
window.addEventListener('resize', () => {
  const el = document.getElementById('launchAlertBox');
  if (!el || !el.style.left) return;
  const pos = clampLaunchAlertPos(el, el.offsetLeft, el.offsetTop);
  el.style.left = pos.left + 'px'; el.style.top = pos.top + 'px';
});
function showLaunchAlert(rows){
  const now = Date.now();
  launchAlertRows = launchAlertRows.concat(rows.map((r) => {
    const ms = launchRecordedMs(r.code) || Date.parse(r.recordedAt) || 0;
    return Object.assign({}, r, { alertAt: ms || now, alertExact: !!ms });
  }));
  renderLaunchAlertBox();
}
function dismissLaunchAlert(){
  launchAlertRows = [];
  renderLaunchAlertBox();
}
function launchNotificationBody(r){
  return '成交價 ' + r.price.toFixed(2) + (Number.isFinite(r.pct) ? '（' + (r.pct > 0 ? '+' : '') + r.pct.toFixed(2) + '%）' : '') +
    ' 過箱頂 ' + Number(r.info.boxHigh).toFixed(2) + '｜均線分數 ' + r.score +
    (r.projTurnoverPct !== null ? '｜周轉 ' + r.projTurnoverPct.toFixed(1) + '%' : '') +
    (r.volRatio !== null ? '｜量比 ' + r.volRatio.toFixed(1) + ' 倍' : '') + (r.info.brewing ? '｜醞釀→發動' : '');
}
function checkLaunchNotifications(){
  // 2026-10-01 使用者回報：有些股票發動後很快就回落（在兩次15秒報價輪詢之間），這裡keep它warm，
  // 讓歷史紀錄不會因為訊號中心剛好沒開在醞釀／發動分頁就一直是舊資料。
  refreshBrewHistory(false);
  const m = brewLaunchModel();
  if (!m) return [];
  const today = twTodayStr();
  if (launchNotified.date !== today) launchNotified = { date: today, codes: new Set(), seeded: false };
  // 2026-10-01 使用者回報：有些股票發動後很快就回落（在兩次15秒報價輪詢之間），只看「現在還活著」的
  // m.launchBlocks 會完全抓不到它活著的那一刻，就永遠不會跳提醒——但「今天曾發動」列表看得到（後端永久
  // 記錄 brewHistoryDay），造成「列表裡有、提醒卻從來沒跳過」的不一致。改成也跟永久紀錄比對：現在還活著
  // 的用即時資料（比較新鮮，有完整的分數/量比等欄位可以給通知內文用），已經回落的用永久紀錄湊一筆陽春的。
  const liveByCode = new Map(m.launchBlocks.flatMap((b) => b.rows).map((r) => [r.code, r]));
  const recordedByCode = new Map();
  (brewHistoryDay(brewSessionDate()).launch || []).forEach((r) => { if (!recordedByCode.has(r.code)) recordedByCode.set(r.code, r); });
  const toAlertRow = (code) => {
    const live = liveByCode.get(code);
    if (live) return live;
    const rec = recordedByCode.get(code);
    return { code: rec.code, name: rec.name, groupName: rec.group, price: rec.price, pct: rec.changePct, score: rec.score,
      projTurnoverPct: rec.projTurnoverPct, volRatio: rec.volRatio, recordedAt: rec.recordedAt, live: false,
      info: { boxHigh: rec.boxHigh, brewing: !!rec.brewing } };
  };
  // 同一檔股票可能同時屬於好幾個官方族群，攤平後會重複；一檔股票只通知一次，不要因為它在兩個族群裡就跳兩次。
  const rows = [...new Set([...recordedByCode.keys(), ...liveByCode.keys()])].map(toAlertRow);
  if (!launchNotified.seeded){
    rows.forEach((r) => launchNotified.codes.add(r.code));
    launchNotified.seeded = true;
    saveLaunchNotified();
    return [];
  }
  const fresh = rows.filter((r) => !launchNotified.codes.has(r.code));
  if (!fresh.length) return [];
  fresh.forEach((r) => launchNotified.codes.add(r.code));
  saveLaunchNotified();
  if (!alertsEnabled) return fresh;
  launchBeep();
  showLaunchAlert(fresh);
  if ('Notification' in window && Notification.permission === 'granted'){
    fresh.forEach((r) => {
      // requireInteraction：使用者 2026-09-29 要求跳出來的通知要停留住，按掉才消失，不要自己不見
      // （部分瀏覽器／系統不支援 requireInteraction 時會自動退回一般行為，還是會跳出來）。
      try { new Notification('🚀 發動 ' + r.code + ' ' + r.name + '（' + (r.groupName || '') + '）', { body: launchNotificationBody(r), tag: 'launch-' + r.code, requireInteraction: true }); } catch (e) { /* 跳不出來就算了 */ }
    });
  }
  return fresh;
}
function renderSignalCenter(){
  const tabsEl = document.getElementById('signalTabsBar');
  refreshBrewLaunch(false);
  const currentEvents = sigCurrentEvents();  // 休市日／開盤前沿用上一個交易日的訊號，數字才不會全部是 0
  const countFor = (key) => {
    // 2026-10-04 使用者：今日即時拆成多／空兩頁，各自只算自己那一邊的訊號＋大戶力列。
    if (key === 'now') return currentEvents.filter((e) => e.tabs.includes('now')).length + bigHolderRowsFrom(mainForceRanking, 'bull').length;
    if (key === 'nowBear') return currentEvents.filter((e) => e.tabs.includes('nowBear')).length + bigHolderRowsFrom(mainForceRanking, 'bear').length;
    if (key === 'history' || key === 'race333' || key === 'bladeShort' || key === 'groupHolderForce' || key === 'groupCombinedBoard') return null;
    if (key === 'bigHolderForceBull') return bigHolderRowsFrom(mainForceRanking, 'bull').length;
    if (key === 'bigHolderForceBear') return bigHolderRowsFrom(mainForceRanking, 'bear').length;
    if (key === 'brewLaunch'){ const bm = brewLaunchModel(); return bm ? bm.brewCount + '/' + bm.launchCount : null; }
    if (key === 'bigBuy' || key === 'bigSell') return filterLargeOrderEvents(currentEvents.filter((e) => e.tabs.includes(key))).length;
    return currentEvents.filter((e) => e.tabs.includes(key)).length;
  };
  // 使用者 2026-09-24：這三個分頁的分頁字改紫紅色，跟其他分頁的灰白字區隔開來。
  const PURPLE_TAB_KEYS = new Set(['now', 'groupHolderForce', 'groupCombinedBoard', 'race333', 'brewLaunch']);  // 2026-09-24 使用者：醞釀／發動也紫紅色；2026-09-26：盤中大戶力改回黑字；2026-10-08：今日即時多也紫色
  // 2026-10-04 使用者：「空」方向另外三個分頁(盤中大戶力空／四項精選強空／主力翻空)也改綠色，跟刀劍空、盤中特大賣單一致。
  const GREEN_TAB_KEYS = new Set(['nowBear', 'bladeShort', 'bigSell', 'bigHolderForceBear', 'fourGateSell', 'mainForceFlipBear']);  // 2026-10-04：今日即時空也綠字
  // 2026-10-08 使用者：多方六個分頁字都改紅色、顏色一樣（盤中特大買單原本桃紅色也改成這個紅）。
  const RED_TAB_KEYS = new Set(['bigBuy', 'bigHolderForceBull', 'fourGateBuy', 'combo12Bull', 'blackDragon', 'mainForceFlipBull']);
  const tabsHtml = SIGNAL_KINDS.map((k) => {
    const count = countFor(k.key);
    return '<button class="chart-tab signal-tab' + (signalCenterState.activeTab === k.key ? ' active' : '') + (PURPLE_TAB_KEYS.has(k.key) ? ' signal-tab-purple' : '') + (GREEN_TAB_KEYS.has(k.key) ? ' signal-tab-green' : '') + (RED_TAB_KEYS.has(k.key) ? ' signal-tab-red' : '') + '" data-kind="' + k.key + '">' +
      k.label + (count === null ? '' : ' <span class="sig-count">' + count + '</span>') +
    '</button>';
  }).join('');
  // 分頁列也只在數字或選取狀態有變時才重畫，免得使用者正要點的按鈕被換掉。
  if (tabsHtml !== signalTabsRenderedHtml){
    // 分頁列的數字變長、某一顆被擠到下一排時，分頁列會變高／變矮；捲下去在看的時候把這段差補回去，下面的內容才不會跟著跳。
    const scroller = signalScroller();
    const keep = scroller && scroller.scrollTop > 0 && scroller.contains(tabsEl);
    const before = keep ? tabsEl.offsetHeight : 0;
    tabsEl.innerHTML = tabsHtml;
    signalTabsRenderedHtml = tabsHtml;
    if (keep && tabsEl.offsetHeight !== before) scroller.scrollTop += tabsEl.offsetHeight - before;
  }

  const body = document.getElementById('signalBody');
  const active = signalCenterState.activeTab;
  if (active === 'history'){
    const today = twTodayStr();
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
  } else if (active === 'bigHolderForceBull' || active === 'bigHolderForceBear'){
    // 昨天／前天的日期清單來自 group-daily-changes，三個大戶力分頁都要確保它有抓。
    refreshGroupDailyChanges(false);
    const view = holderView();
    const rows = bigHolderRowsFrom(view.ranking, active === 'bigHolderForceBull' ? 'bull' : 'bear');
    replaceSignalHtml(body, active, holderDayBarHtml() + holderPastNoteHtml(view) +
      (view.loading || view.unavailable ? holderEmptyHtml(view, '', '') : rankingRowsHtml(rows, view)));
  } else if (active === 'race333'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'race333', race333Html());
  } else if (active === 'bladeShort'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'bladeShort', bladeShortHtml());
  } else if (active === 'groupHolderForce'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'groupHolderForce', groupHolderForceHtml());
  } else if (active === 'groupCombinedBoard'){
    refreshGroupDailyChanges(false);
    replaceSignalHtml(body, 'groupCombinedBoard', groupCombinedBoardHtml());
  } else if (active === 'brewLaunch'){
    refreshBrewHistory(false);
    replaceSignalHtml(body, 'brewLaunch', brewLaunchHtml());
  } else if (SIGNAL_DAY_TABS.has(active)){
    refreshGroupDailyChanges(false);  // 昨天／前天的日期清單與那天的收盤價
    const view = sigView();
    const key = active + ':' + (view.date || 'none');
    let inner;
    if (view.unavailable) inner = holderEmptyHtml(view, '', '');
    else if (view.loading && !view.events.length) inner = sigLoadingHtml(view);
    else if (active === 'now') inner = nowTabRowsHtml(view.events.filter((e) => e.tabs.includes('now')), view.rankingRows.filter(holderRowIsBull), view);
    else if (active === 'nowBear') inner = nowBearTabHtml(view);
    else if (DEDICATED_KLINE_TABS.has(active)){
      refreshKlineBackfillStatus();
      inner = (view.isPast ? '' : klineBackfillNoteHtml()) + signalRowsHtml(view.events.filter((e) => e.tabs.includes(active)), view);
    } else if (active === 'bigBuy' || active === 'bigSell'){
      const all = view.events.filter((e) => e.tabs.includes(active));
      const events = filterLargeOrderEvents(all);
      inner = bigOrderFilterBarHtml(all.length, events.length) + signalRowsHtml(events, view);
    } else inner = signalRowsHtml(view.events.filter((e) => e.tabs.includes(active)), view);
    replaceSignalHtml(body, key, sigDayBarHtml() + sigDayNoteHtml(view) + inner);
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
  if (datePill) datePill.textContent = '交易日期 ' + twTodayStr().replace(/-/g, '/');
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
  if (document.body.classList.contains('signal-window-mode')){
    if (window.parent !== window){ try { window.parent.close(); } catch (e) { /* 關不掉就算了 */ } return; }   // 釘選視窗裡的 ✕：關掉釘選視窗
    window.close();
    return;
  }
  hideSignalModalPanel();
}
function openSignalWindow(){
  const w = window.open(location.pathname + location.search + '#signal-center', 'hanstockSignalCenter', 'width=480,height=700');
  if (w) w.focus();
}
// 📌 釘選最上層（2026-10-06 使用者：移到另一螢幕的視窗要能釘選，操作別的程式時還留在桌面最上層、不要被蓋掉）。
// 一般網頁視窗做不到「永遠在最上層」，只有電腦版 Chrome／Edge 的「文件子母畫面」（Document Picture-in-Picture）可以：
// 開一個永遠浮在最上層的視窗，裡面用 iframe 放一份「訊號中心」（跟移到另一螢幕同一頁），可以拖到另一個螢幕、拉大小，
// 下次再開 Chrome 會記得上次的位置。這一頁（主畫面）要開著，關掉或重新整理，釘選視窗也會一起關。
let signalPipWindow = null;
function updatePinButton(){
  const btn = document.getElementById('smPinWindow');
  if (!btn) return;
  const supported = 'documentPictureInPicture' in window && !document.body.classList.contains('signal-window-mode');
  btn.hidden = !supported;
  const pinned = !!(signalPipWindow && !signalPipWindow.closed);
  btn.classList.toggle('on', pinned);
  btn.textContent = pinned ? '📌 取消釘選' : '📌 釘選最上層';
}
async function toggleSignalPin(){
  if (signalPipWindow && !signalPipWindow.closed){ signalPipWindow.close(); return; }
  if (!('documentPictureInPicture' in window)){
    showToast('這個瀏覽器不能釘選在最上層（要電腦版 Chrome 或 Edge），先改用「移到另一螢幕」');
    openSignalWindow();
    return;
  }
  const panel = document.getElementById('signalModalInner');
  const width = Math.round(Math.max(480, Math.min(1400, (panel && panel.offsetWidth) || 1000)));
  const height = Math.round(Math.max(420, Math.min(1000, (panel && panel.offsetHeight) || 760)));
  let pip;
  try {
    pip = await documentPictureInPicture.requestWindow({ width, height });
  } catch (e) {
    showToast('釘選視窗開不起來（' + ((e && e.message) || e) + '），先改用「移到另一螢幕」');
    openSignalWindow();
    return;
  }
  signalPipWindow = pip;
  pip.document.title = '盤中訊號中心（釘選）';
  const style = pip.document.createElement('style');
  style.textContent = 'html,body{margin:0;height:100%;overflow:hidden;background:#17130f;}iframe{display:block;border:0;width:100%;height:100%;}';
  pip.document.head.appendChild(style);
  const frame = pip.document.createElement('iframe');
  frame.src = location.pathname + location.search + '#signal-center';
  frame.title = '盤中訊號中心';
  pip.document.body.appendChild(frame);
  pip.addEventListener('pagehide', () => {
    if (signalPipWindow === pip) signalPipWindow = null;
    updatePinButton();
    openSignalCenter();          // 釘選視窗關掉：主畫面的訊號中心再出現，不會不見
  });
  hideSignalModalPanel();        // 主畫面這份先收起來，不要同時兩份
  updatePinButton();
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
            '<div class="srow-left"><span class="scode">' + s.code + '</span><span class="sname">' + s.name + '</span>' + wlStarHtml(s.code, s.name) + '</div>' +
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

// 2026-10-05 使用者：「剛剛還有訊號，現在又抓不到報價」——證交所報價偶爾某幾段（甚至整批）這一輪沒抓到，
// 名單就整個掉光。這一輪沒價格的股票，3 分鐘內抓到過的先沿用上一筆（標 stale），族群平均也重算；
// 超過 3 分鐘還抓不到才真的當成沒有報價。
const QUOTE_CARRY_MS = 3 * 60 * 1000;
const lastGoodQuotes = new Map();
function carryMissingQuotes(data){
  const now = Date.now();
  let carried = 0;
  data.groups.forEach((g) => {
    let touched = false;
    (g.stocks || []).forEach((st) => {
      if (Number(st.price) > 0){
        lastGoodQuotes.set(st.code, { price: st.price, changePercent: st.changePercent, limitUp: st.limitUp, limitDown: st.limitDown, volume: st.volume, at: now });
        return;
      }
      const prev = lastGoodQuotes.get(st.code);
      if (!prev || now - prev.at > QUOTE_CARRY_MS) return;
      Object.assign(st, { price: prev.price, changePercent: prev.changePercent, limitUp: prev.limitUp, limitDown: prev.limitDown, volume: prev.volume, stale: true });
      carried += 1;
      touched = true;
    });
    if (touched){
      const valid = g.stocks.filter((st) => Number(st.price) > 0);
      g.avgChange = valid.length ? valid.reduce((sum, st) => sum + (Number(st.changePercent) || 0), 0) / valid.length : 0;
    }
  });
  data.quoteCarried = carried;
  return data;
}
let quickRetryTimer = null;
let groupsLastError = '';   // 2026-10-06：上一次抓首頁報價失敗的原因，顯示在畫面上（使用者那邊整個早上都抓不到，要看得到原因）

async function refresh(){
  try {
    // 證交所那邊卡住時 /api/groups 可能好幾十秒才回（2026-10-05 實測 60 秒還沒回），等太久就放棄這一輪
    const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), 20000) : null;
    let res;
    try { res = await fetch('/api/groups', ctrl ? { signal: ctrl.signal } : undefined); } finally { if (timer) clearTimeout(timer); }
    if (!res.ok){
      let detail = '';
      try { const body = await res.json(); detail = body && body.error ? '：' + String(body.error).slice(0, 60) : ''; } catch (e2) { /* 不是 JSON（例如 Cloudflare 的錯誤頁） */ }
      throw new Error('伺服器回 ' + res.status + detail);
    }
    const data = await res.json();
    if (!data || !Array.isArray(data.groups)) throw new Error('回來的資料格式不對');
    groupsLastError = '';
    lastData = carryMissingQuotes(data);
    try { checkLaunchNotifications(); } catch (e) { /* 通知失敗不影響畫面 */ }
    // 2026-09-30 使用者：發動彈出通知比醞釀／發動分頁的列表快，要同步——列表原本只靠
    // refreshBrewLaunch(10分鐘)／refreshBrewHistory(60秒)重畫，這裡讓它跟報價同一個節奏（15秒）重畫。
    // 2026-10-06 使用者：刀劍空一直顯示「族群行情還沒載入」——開盤前後首頁報價要 10 幾秒，報價回來後只有醞釀／發動會馬上重畫，
    // 其他靠首頁報價的分頁（刀劍空、盤中333、族群表…）要等下一輪訊號輪詢；改成報價一回來就重畫目前這個分頁。
    try { if (!document.getElementById('signalModal').hidden) renderSignalCenter(); } catch (e) { /* 訊號中心重畫失敗不影響畫面 */ }
    try { renderWatchTable(); } catch (e) { /* 自選股重畫失敗不影響畫面 */ }
    trkTick();
    lastDataFetchedAt = new Date();
  } catch (e) {
    groupsLastError = e && e.name === 'AbortError' ? '等了 20 秒還沒回' : String((e && e.message) || e).slice(0, 80);
    if (!lastData) lastData = buildMockData();
    // 還沒拿到過真的報價（剛打開頁面就失敗）：不要等 15 秒，4 秒後先再試一次
    if (lastData && lastData.mock && !quickRetryTimer){
      quickRetryTimer = setTimeout(() => { quickRetryTimer = null; refresh(); }, 4000);
    }
  }
  const updatedEl = document.getElementById('updatedAt');
  if (updatedEl){
    if (!lastDataFetchedAt){
      updatedEl.textContent = '⚠ 尚未成功取得即時報價' + (groupsLastError ? '（' + groupsLastError + '）' : '');
    } else if (Date.now() - lastDataFetchedAt.getTime() > STALE_WARNING_MS){
      updatedEl.textContent = '⚠ 報價可能已過期（最後成功更新於 ' + lastDataFetchedAt.toLocaleTimeString('zh-TW') + '）';
    } else if (lastData && lastData.heldClose && lastData.heldClose.session){
      // 休市日／開盤前：worker 給的是上一個交易日的日K收盤，不是即時報價（2026-10-04 使用者：週末 TWSE 測試盤假價）。
      updatedEl.textContent = '休市中，顯示 ' + String(lastData.heldClose.session).slice(5).replace('-', '/') + ' 收盤（' + lastDataFetchedAt.toLocaleTimeString('zh-TW') + ' 確認）';
    } else {
      // 2026-10-05：證交所那段報價重抓後還是沒拿到的股票數（worker 算好的）；多到不正常就標出來，
      // 才知道這台電腦的名單（醞釀／發動、盤中333…）少了一批股票，不是它們真的沒動。
      const missing = Number(lastData && lastData.quoteMissing) || 0;
      const carried = Number(lastData && lastData.quoteCarried) || 0;
      updatedEl.textContent = '報價更新於 ' + lastDataFetchedAt.toLocaleTimeString('zh-TW') +
        (lastData && lastData.quoteSource === 'backend' ? '（備援來源）' : '') +
        (missing > 10 ? '（⚠ 有 ' + missing + ' 檔這次沒抓到報價' + (carried ? '，' + carried + ' 檔先沿用上一筆' : '') + '）' : '');
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
function syncAlertToggle(){
  const btn = document.getElementById('alertToggle');
  btn.textContent = alertsEnabled ? '提醒開啟' : '提醒關閉';
  btn.classList.toggle('on', alertsEnabled);
  btn.setAttribute('aria-pressed', String(alertsEnabled));
}
syncAlertToggle();
document.getElementById('alertToggle').addEventListener('click', () => {
  alertsEnabled = !alertsEnabled;
  try { localStorage.setItem('alertsEnabled', alertsEnabled ? '1' : '0'); } catch (e) { /* 記不住就算了 */ }
  syncAlertToggle();
  if (alertsEnabled){
    primeAlertAudio();  // 使用者剛點了按鈕，趁這個手勢把聲音打開（瀏覽器規定要有互動才能出聲）
    requestNotifyPermission((state) => {
      showToast(state === 'granted' ? '提醒已開啟：出現新的發動會跳通知並提示音'
        : state === 'denied' ? '瀏覽器擋掉了通知，請到網址列左邊的設定允許通知；提示音照樣會響'
        : '提醒已開啟（提示音）；允許通知後也會跳通知');
    });
  } else {
    showToast('提醒已關閉');
  }
});
// ---- 創高黑選股（2026-10-04 使用者：照莊爸 App「創高黑」做一個選股程式，跟創高黑龍分開放）----
// 四個分頁：今天（模擬帳戶照模組規則每天進出、今天要做、操作紀錄）、選股（漏斗、每週名單、每日新進、條件池）、
// 實績（每個每日新進當訊號，各種出場方式的成績）、模組（四段規則）。參數存在這台瀏覽器；名單打勾、設成優先也存在這台。
// 後端 /api/picker 照參數即時算（收盤後整理好的特徵表：還原日線、內定均線分數、創高天數）。
// 13:00 提醒（2026-10-05 使用者：原本 13:20 改成 13:00）：頁面開著、交易日 13:00 抓持股＋觀察中的即時報價，算出要出場／減碼／買進／加碼的跳通知（App 推播做不到，頁面要開著）。
const PK_DEFAULTS = { hi: 20, within: 6, score: 10, sdays: 10, spct: 8, stimes: 2, val: 1, mcap: 50, track: 10, exdispo: true, scope: 'market',
  weekN: 6, wsort: 'score', swaps: 2, swapFrom: 'daily', fri: true, full: true, norebuy: true,
  black: 'oc', bscore: 0, lots: 3, addon: true, reduce: true, rma: 5, xma: 10, tpr: 0,
  per: 50, maxpos: 6, start: 4, feeOn: true, fee: 0.28, push: 'names', remind: true, range: 60, ptp: 8 };
const PK_TABS = [['today', '今天'], ['picks', '選股'], ['perf', '實績'], ['module', '模組']];
const PK_SORT_LABEL = { score: '均線分', val: '成交值', hilen: '創高天數', mcap: '市值' };
const PK_SRC_LABEL = { list: '名單', daily: '每日新進', week: '週選備選', signal: '訊號' };
let pkParams = Object.assign({}, PK_DEFAULTS);
let pkLists = {}, pkStars = [], pkDone = {};
try {
  const saved = JSON.parse(localStorage.getItem('pickerParams') || 'null');
  if (saved && typeof saved === 'object') pkParams = Object.assign({}, PK_DEFAULTS, saved);
  pkLists = JSON.parse(localStorage.getItem('pickerLists') || '{}') || {};
  pkStars = JSON.parse(localStorage.getItem('pickerStars') || '[]') || [];
  pkDone = JSON.parse(localStorage.getItem('pickerDone') || '{}') || {};
} catch (e) { /* 讀不到就用預設 */ }
let pkState = { tab: 'today', sub: 'week', date: null, week: null, cache: {}, order: [], loading: {}, errors: {}, sort: 'combo',
  pick: null, logTab: 'module', showMissed: false, showBlack: false, showRecent: false, weekFilter: 'all' };
function pkSave(){
  try {
    localStorage.setItem('pickerParams', JSON.stringify(pkParams));
    localStorage.setItem('pickerLists', JSON.stringify(pkLists));
    localStorage.setItem('pickerStars', JSON.stringify(pkStars));
    localStorage.setItem('pickerDone', JSON.stringify(pkDone));
    localStorage.setItem('pickerUsed', '1');
  } catch (e) { /* 存不了就算了 */ }
}
function pkFee(p){ return p.feeOn ? (Number(p.fee) > 0 ? Number(p.fee) : 0.28) : 0; }
function pkQuery(view){
  const p = pkParams, q = new URLSearchParams();
  q.set('view', view);
  for (const k of ['hi', 'within', 'score', 'sdays', 'spct', 'stimes', 'val', 'mcap', 'track', 'weekN', 'wsort', 'swaps', 'swapFrom', 'black',
    'bscore', 'lots', 'rma', 'xma', 'tpr', 'per', 'maxpos', 'start', 'scope']) q.set(k, p[k]);
  for (const k of ['exdispo', 'fri', 'full', 'norebuy', 'addon', 'reduce']) q.set(k, p[k] ? '1' : '0');
  q.set('fee', pkFee(p));
  if (view === 'perf'){ q.set('range', p.range); q.set('ptp', p.ptp); return q.toString(); }
  if (pkState.date) q.set('date', pkState.date);
  if (view === 'picks' && pkState.week !== null) q.set('week', pkState.week);
  const lists = Object.keys(pkLists).sort().filter((d) => Array.isArray(pkLists[d])).map((d) => d + ':' + pkLists[d].join(',')).join(';');
  if (lists) q.set('lists', lists);
  if (view === 'today' && pkStars.length) q.set('stars', pkStars.join(','));
  return q.toString();
}
function pkData(view){ return pkState.cache[pkQuery(view)] || null; }
async function pkEnsure(view){
  const query = pkQuery(view);
  if (pkState.cache[query] || pkState.loading[query]) return;
  const err = pkState.errors[query];
  if (err && Date.now() - err.at < 20000) return;
  pkState.loading[query] = true;
  try {
    const res = await fetch('/api/picker?' + query);
    const data = await res.json().catch(() => null);
    if (res.status === 404) throw new Error('後端還沒更新，合併部署後幾分鐘就會出現');
    if (!res.ok) throw new Error((data && (data.detail || data.error)) || ('http ' + res.status));
    if (!data || !data.status) throw new Error('bad payload');
    pkState.cache[query] = data;
    pkState.order.push(query);
    while (pkState.order.length > 24) delete pkState.cache[pkState.order.shift()];
    delete pkState.errors[query];
  } catch (e) {
    pkState.errors[query] = { at: Date.now(), msg: String((e && e.message) || e) };
  } finally {
    delete pkState.loading[query];
  }
  if (!document.getElementById('pickerModal').hidden) renderPicker();
}
function pkClear(){ pkState.cache = {}; pkState.order = []; pkState.errors = {}; }
const pkNum = (v, d) => (v === null || v === undefined || isNaN(v) ? '—' : Number(v).toFixed(d === undefined ? 1 : d));
const pkMoney = (v) => (v === null || v === undefined ? '—' : (v > 0 ? '+' : '') + Number(v).toFixed(1) + ' 萬');
const pkWd = (d) => '日一二三四五六'[new Date(d + 'T00:00:00').getDay()] || '';
const pkDay = (d) => (d ? swMmdd(d) + '(' + pkWd(d) + ')' : '—');
const pkPrice = (v) => (v === null || v === undefined ? '—' : Number(v) >= 500 ? Number(v).toFixed(0) : Number(v) >= 50 ? Number(v).toFixed(1) : Number(v).toFixed(2));
function pkName(r){
  return '<td class="l pk-name">' + (r.black ? '<i class="pk-black"></i>' : r.close !== undefined ? '<i class="pk-red"></i>' : '') + '<b>' + (r.name || r.code) + '</b><small>' + r.code + '</small>' + (pkStars.includes(r.code) ? ' ★' : '') + '</td>';
}
function pkStatus(view){
  const query = pkQuery(view);
  if (pkState.loading[query]) return '<div class="race-note">計算中…（第一次打開要把三年的特徵載進記憶體，稍等幾秒）</div>';
  const err = pkState.errors[query];
  if (err) return '<div class="race-note">讀不到（' + err.msg + '），20 秒後再試，或按上方分頁重整</div>';
  return '<div class="race-note">讀取中…</div>';
}
function pkFlowHtml(){
  const step = (tab, n, a, b) => '<button class="pk-step' + (pkState.tab === tab ? ' active' : '') + '" data-pk-tab="' + tab + '">' + n + ' <b>' + a + '</b> ' + b + '</button>';
  return '<div class="pk-flow">' + step('module', '①', '模組', '設規則') + '<span class="pk-arrow">→</span>' + step('picks', '②', '選股', '勾名單') +
    '<span class="pk-arrow">→</span>' + step('today', '③', '今天', '模組照規則進出') + '</div>';
}
function pkDateNav(data){
  const dates = data.dates || [], i = dates.indexOf(data.date);
  const prev = i > 0 ? dates[i - 1] : null, next = i >= 0 && i < dates.length - 1 ? dates[i + 1] : null;
  const latest = dates.length && data.date === dates[dates.length - 1];
  return '<div class="pk-nav"><button class="chart-tab chips-btn" data-pk-date="' + (prev || '') + '"' + (prev ? '' : ' disabled') + '>◀</button><b>' + pkDay(data.date) + '</b>' +
    '<button class="chart-tab chips-btn" data-pk-date="' + (next || '') + '"' + (next ? '' : ' disabled') + '>▶</button>' +
    (latest ? '<span class="pk-pill gold">最新一天</span>' : '<span class="pk-pill">回看</span><button class="chart-tab chips-btn" data-pk-date="latest">回到最新</button>') + '</div>';
}
// 綜合／技術／籌碼／基本排序（名單裡的名次）：技術＝均線分（同分比創高天數）、籌碼＝當週籌碼變化、基本＝營收年增
function pkRankRows(rows){
  const n = rows.length;
  const rank = (key) => {
    const sorted = rows.slice().sort((a, b) => key(b) - key(a));
    const out = new Map(); sorted.forEach((r, i) => out.set(r.code, i + 1)); return out;
  };
  const val = (v) => (v === null || v === undefined || isNaN(v) ? -1e9 : Number(v));
  const tech = rank((r) => val(r.score) * 10000 + val(r.hiLen));
  const chip = rank((r) => val(r.weekPct));
  const fund = rank((r) => val(r.revYoy));
  for (const r of rows){
    const avg = (tech.get(r.code) + chip.get(r.code) + fund.get(r.code)) / 3;
    r.rankTech = tech.get(r.code); r.rankChip = chip.get(r.code); r.rankFund = fund.get(r.code);
    r.combo = n <= 1 ? 100 : Math.round(100 * (1 - (avg - 1) / (n - 1)));
  }
  const by = { combo: (r) => -r.combo, tech: (r) => r.rankTech, chip: (r) => r.rankChip, fund: (r) => r.rankFund }[pkState.sort] || ((r) => -r.combo);
  return rows.slice().sort((a, b) => by(a) - by(b) || String(a.code).localeCompare(String(b.code)));
}
function pkTodayHtml(data){
  const sim = data.sim || {}, a = sim.account || {}, p = data.params || pkParams;
  let html = pkDateNav(data);
  if (!sim.started){
    html += '<div class="pk-card"><div class="pk-card-head"><b>' + pkDay(data.date) + '</b><span class="pk-pill gold">下週起（實盤）</span></div>' +
      '<div class="pk-sum">還沒開始跑：下週 ' + (sim.nextWeek ? sim.nextWeek.label : '') + ' 起照規則進出，下面②是下週要看的名單。想先看過去的成績，到「模組」把「從哪一週開始」改成回放幾週。</div></div>';
  } else {
    const holdings = sim.holdings || [];
    const colors = ['#eab308', '#f87171', '#60a5fa', '#4ade80', '#c084fc', '#fb923c', '#2dd4bf', '#f472b6', '#a3e635', '#94a3b8'];
    const bar = holdings.map((h, k) => '<i style="width:' + Math.max(0, Math.min(100, h.value / (a.quota || 1) * 100)).toFixed(1) + '%;background:' + colors[k % colors.length] + '" title="' + h.name + '"></i>').join('');
    html += '<div class="pk-card"><div class="pk-card-head"><b>' + pkDay(data.date) + '</b><span class="pk-pill">從 ' + pkDay(sim.startDate) + ' 開始跑・第 ' + sim.weekNo + ' 週</span><span>本週換股 <b>' + sim.swapsUsed + ' / ' + sim.swaps + '</b></span></div>' +
      '<div class="pk-tiles"><div class="pk-tile"><span>額度</span><b>' + pkNum(a.quota, 0) + ' 萬</b></div><div class="pk-tile"><span>投入</span><b>' + pkNum(a.invested, 0) + ' 萬</b></div>' +
      '<div class="pk-tile"><span>現金</span><b>' + pkNum(a.cash, 0) + ' 萬</b></div><div class="pk-tile"><span>市值</span><b>' + pkNum(a.market, 0) + ' 萬</b></div></div>' +
      '<div class="pk-bar">' + bar + '</div>' +
      '<div class="pk-sum">模組損益 <b class="' + dirClass(a.pnl || 0) + '">' + pkMoney(a.pnl) + '</b>（已實現 <span class="' + dirClass(a.realized || 0) + '">' + pkMoney(a.realized) + '</span>・未實現 <span class="' + dirClass(a.unrealized || 0) + '">' + pkMoney(a.unrealized) + '</span>）・同額度 ' + (a.benchCode || '0050') + ' <b class="' + dirClass(a.bench || 0) + '">' + pkMoney(a.bench) + '</b></div></div>';
    html += '<div class="pk-sec">① 已進場的股票 <small>' + holdings.length + ' / ' + sim.maxpos + ' 檔・點股票看K線圖</small></div>';
    html += holdings.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票名稱</th><th class="l">族群</th><th>批數</th><th>進場日</th><th>報酬</th><th>損益</th><th>股價</th><th>均價</th><th>減碼線</th><th>出場線</th></tr></thead><tbody>' +
      holdings.map((h) => '<tr class="pk-click" data-code="' + h.code + '" data-name="' + (h.name || '') + '">' + pkName(h) + '<td class="l">' + (h.group || '—') + '</td><td>' + h.batches + '/' + h.lots + '</td><td>' + pkDay(h.entryDate) + '</td>' +
        '<td class="' + dirClass(h.pct || 0) + '">' + swPct(h.pct) + '</td><td class="' + dirClass(h.pnl || 0) + '">' + pkMoney(h.pnl) + '</td><td>' + pkPrice(h.close) + '</td><td>' + pkPrice(h.avg) + '</td><td>' + pkPrice(h.reduceLine) + '</td><td>' + pkPrice(h.exitLine) + '</td></tr>').join('') +
      '</tbody></table></div>' : '<div class="race-note">現在沒有持股</div>';
  }
  const watch = pkRankRows((sim.watch || []).map((r) => Object.assign({}, r)));
  const free = Math.max(0, (sim.maxpos || p.maxpos) - (sim.holdings || []).length);
  html += '<div class="pk-sec">② 觀察中・等收黑 <small>' + watch.length + ' 檔・' + (sim.full ? '現在滿檔，有人出場才會買' : '還有 ' + free + ' 個空位') + '</small></div>' +
    '<div class="pk-steps"><span class="box"><em>① 觀察</em>在名單</span><span class="pk-arrow">→</span><span class="box"><em>② 收黑</em>買第 1 批</span><span class="pk-arrow">→</span>' +
    (p.addon ? '<span class="box"><em>③ 再收黑</em>加到 ' + p.lots + ' 批</span><span class="pk-arrow">→</span>' : '') +
    (p.reduce ? '<span class="box"><em>④ 破 ' + p.rma + ' 日線</em>減 1 批</span><span class="pk-arrow">→</span>' : '') + '<span class="box"><em>⑤ 破 ' + p.xma + ' 日線</em>全部出</span></div>' +
    '<div class="sw-rule">收黑＝收盤＜開盤' + (p.black === 'range' ? '（而且當天漲跌 −10%～+3%）' : '') + '。名單裡的股票哪天收黑，13:00 提醒、收盤買第 1 批（每批 ' + pkNum(p.per / p.lots, 1) + ' 萬）。</div>';
  const sortBtn = (k, label) => '<button class="chart-tab chips-btn' + (pkState.sort === k ? ' active' : '') + '" data-pk-sort="' + k + '">' + label + '</button>';
  html += '<div class="pk-nav"><span class="muted">排序</span>' + sortBtn('combo', '綜合') + sortBtn('tech', '技術') + sortBtn('chip', '籌碼') + sortBtn('fund', '基本') + '</div>' +
    '<div class="pk-btn-row"><button data-pk-pick="system">🎯 系統挑一檔</button><button data-pk-pick="dice">🎲 擲骰子</button></div>';
  if (pkState.pick){
    const r = watch.find((w) => w.code === pkState.pick.code);
    if (r){
      const how = pkState.pick.how === 'dice' ? '🎲 骰到' : '🎯 系統挑';
      const why = pkState.pick.how === 'dice' ? watch.length + ' 檔裡隨機一檔' : '依「' + ({ combo: '綜合', tech: '技術', chip: '籌碼', fund: '基本' })[pkState.sort] + '」排第 1';
      const starred = pkStars.includes(r.code);
      html += '<div class="pk-pickcard">' + how + ' <b class="big">' + r.name + '</b> ' + r.code + ' <span style="float:right">綜合 <b>' + r.combo + '</b></span><br>' +
        '技 ' + (r.score === null || r.score === undefined ? '—' : r.score) + '・籌 ' + swPct(r.weekPct) + '・基 ' + swPct(r.revYoy) + '・' + why + '<br>' +
        '<button class="chart-tab chips-btn" data-pk-star="' + r.code + '">' + (starred ? '★ 取消優先' : '★ 設成優先') + '</button> <button class="chart-tab chips-btn" data-pk-chart="' + r.code + '" data-name="' + r.name + '">看圖</button> <button class="chart-tab chips-btn" data-pk-pick="close">✕</button>' +
        '<div class="muted">★ 優先＝同一天好幾檔收黑、空位不夠時先買它（從明天起算，其他照原本順序）。</div></div>';
    }
  }
  html += '<div class="sw-rule">技術＝均線分（同分比創高天數）・籌碼＝當週集保大戶變化・基本＝最新公布的營收年增・綜合＝三項在這份名單裡的名次平均（100＝三項都第一）。排序和抽籤只是幫你挑，不是買賣建議。</div>';
  html += watch.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票名稱</th><th class="l">族群</th><th>來源</th><th>今天</th><th>綜合</th><th>股價</th><th>漲跌</th><th>均線分</th><th>創高天數</th><th>週籌碼</th><th>營收年增</th></tr></thead><tbody>' +
    watch.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + (r.name || '') + '">' + pkName(r) + '<td class="l">' + (r.group || '—') + '</td><td><span class="pk-src ' + r.source + '">' + (PK_SRC_LABEL[r.source] || r.source) + '</span></td>' +
      '<td>' + (r.black ? '收黑' : '—') + '</td><td>' + r.combo + '</td><td>' + pkPrice(r.close) + '</td><td class="' + dirClass(r.changePct || 0) + '">' + swPct(r.changePct) + '</td><td>' + (r.score === null || r.score === undefined ? '—' : r.score) + '</td><td>' + (r.hiLen || '—') + '</td>' +
      '<td class="' + dirClass(r.weekPct || 0) + '">' + swPct(r.weekPct) + '</td><td class="' + dirClass(r.revYoy || 0) + '">' + swPct(r.revYoy, 1) + '</td></tr>').join('') + '</tbody></table></div>' : '<div class="race-note">名單裡沒有這幾檔。</div>';
  // ③ 今天要做
  const today = sim.today || [], done = pkDone[data.date] || {};
  const key = (x) => x.type + ':' + x.code;
  const doneCount = today.filter((x) => done[key(x)]).length;
  const badge = { exit: '出場', buy: '買進', add: '加碼', reduce: '減碼' };
  html += '<div class="pk-sec">③ ' + pkDay(data.date) + ' 要做（13:00 提醒） <small>' + today.length + ' 筆・做完打勾 ' + doneCount + ' / ' + today.length + '・打勾的會記進 ④「我的」</small></div>';
  html += today.length ? '<div class="pk-todo">' + today.map((x) => '<label class="pk-act"><input type="checkbox" data-pk-done="' + key(x) + '"' + (done[key(x)] ? ' checked' : '') + '><span class="pk-badge ' + x.type + '">' + badge[x.type] + '</span>' +
      '<span class="pk-act-main"><b>' + x.name + '</b> ' + x.code + '<br><span class="muted">' + x.reason + '・收盤 ' + pkPrice(x.price) + '・</span><b>' + Number(x.shares).toLocaleString() + ' 股</b> <span class="muted">≈ ' + pkNum(x.amount, 1) + ' 萬</span></span>' +
      (x.pnl !== undefined ? '<span class="pk-act-pnl ' + dirClass(x.pnl || 0) + '">' + pkMoney(x.pnl) + '</span>' : '') + '</label>').join('') + '</div>' : '<div class="race-note">這天模組沒有要做的事。</div>';
  html += '<button class="pk-btn-big" data-pk-remind="1">🔔 模擬 13:00 的提醒</button>' +
    '<div class="sw-rule">13:00 提醒：交易日 13:00（到 13:25 收盤試撮前都算）頁面開著（不用開這個面板）就會用即時報價算一次：持股跌破出場線／減碼線、名單裡現價低於開盤（收黑）、持股再收黑，跳通知加提示音。' +
    '手機 App 那種背景推播做不到，頁面要開著；可以在「模組」關掉。盤中按這顆就是用現在的報價算；收盤後按就用上面這天的結果示範。</div>';
  // 2026-10-05 使用者：「沒進」看不懂 → 標題寫「模組沒買」，每檔寫後端算出來的實際原因（舊後端沒有 reason 就照舊）
  const missed = sim.missed || [];
  html += '<div class="pk-fold" data-pk-fold="missed"><span>今天也收黑、但模組沒買（' + missed.length + '）</span><span>' + (pkState.showMissed ? '▾' : '▸') + '</span></div>';
  if (pkState.showMissed) html += missed.length ? '<div class="sw-rule">這些股票在名單或每日新進裡、今天也收黑，照規則是買點，但模組沒買。同一天好幾檔收黑時，先買設成 ★ 優先的，再來是名單（照名次），最後才是每日新進；' +
      '滿檔時只會換掉正在賠錢的持股，不在名單裡的每買一檔算一次換股。</div><div class="pk-todo">' + missed.map((r) => '<div class="pk-act pk-click" data-code="' + r.code + '" data-name="' + r.name + '"><span class="pk-badge skip">沒買</span>' +
      '<span class="pk-act-main"><b>' + r.name + '</b> ' + r.code + (r.source ? ' <span class="pk-src ' + r.source + '">' + (PK_SRC_LABEL[r.source] || r.source) + '</span>' : '') +
      ' <span class="muted">收盤 ' + pkPrice(r.close) + '・' + swPct(r.changePct) + '</span><br><span class="pk-why">' + (r.reason || '滿檔或換股次數用完') + '</span></span></div>').join('') + '</div>' : '<div class="race-note">沒有</div>';
  // ④ 本週操作紀錄
  const log = sim.log || [];
  const week = data.thisWeek || {};
  const weekLog = log.filter((d) => d.date >= (week.start || '') && d.date <= (week.end || '9999'));
  const mine = [];
  for (const d of weekLog) for (const x of d.actions) if ((pkDone[d.date] || {})[key(x)]) mine.push(Object.assign({ date: d.date }, x));
  const lt = (k, label) => '<button class="chart-tab chips-btn' + (pkState.logTab === k ? ' active' : '') + '" data-pk-log="' + k + '">' + label + '</button>';
  html += '<div class="pk-sec">④ 本週操作紀錄 <small>模組照規則怎麼做</small></div><div class="pk-nav">' + lt('mine', '✍ 我的(' + mine.length + ')') + lt('module', '🤖 模組(' + weekLog.reduce((s, d) => s + d.actions.length, 0) + ')') + '</div>';
  const chip = (x) => '<span class="pk-chip ' + x.type + '">' + ({ exit: '出', buy: '買', add: '加', reduce: '減' })[x.type] + ' ' + x.name + (x.type === 'buy' ? ' 第1批' : x.type === 'add' ? ' 第' + x.batch + '批' : '') + '</span>';
  if (pkState.logTab === 'mine'){
    const byDate = {};
    for (const x of mine) (byDate[x.date] = byDate[x.date] || []).push(x);
    const ds = Object.keys(byDate).sort().reverse();
    html += ds.length ? '<div class="pk-card">' + ds.map((d) => '<div class="pk-log-day"><b>' + pkDay(d) + '</b>' + byDate[d].map(chip).join('') + '</div>').join('') + '</div>' : '<div class="race-note">這週還沒有打勾的。③ 做完打勾就會記在這裡（存在這台瀏覽器）。</div>';
  } else {
    html += weekLog.length ? '<div class="pk-card">' + weekLog.map((d) => '<div class="pk-log-day"><b>' + pkDay(d.date) + '</b>' + d.actions.map(chip).join('') + '</div>').join('') + '</div>' : '<div class="race-note">這週模組還沒動作。</div>';
  }
  const black = sim.blackAll || [];
  html += '<div class="pk-fold" data-pk-fold="black"><span>今天創高黑全部（' + black.length + ' 檔：名單／每日新進裡今天收黑）</span><span>' + (pkState.showBlack ? '▾' : '▸') + '</span></div>';
  if (pkState.showBlack) html += black.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票名稱</th><th>來源</th><th>股價</th><th>漲跌</th><th>均線分</th><th>創高天數</th></tr></thead><tbody>' +
    black.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + r.name + '">' + pkName(r) + '<td><span class="pk-src ' + r.source + '">' + PK_SRC_LABEL[r.source] + '</span></td><td>' + pkPrice(r.close) + '</td><td class="' + dirClass(r.changePct || 0) + '">' + swPct(r.changePct) + '</td><td>' + (r.score === null || r.score === undefined ? '—' : r.score) + '</td><td>' + (r.hiLen || '—') + '</td></tr>').join('') + '</tbody></table></div>' : '<div class="race-note">沒有</div>';
  html += '<div class="sw-foot">流程：週末在「選股」勾名單 → 名單的股票進「觀察中」等收黑 → 收黑那天 13:00 提醒、照「今天要做」收盤進場 → 之後再收黑加碼、跌破減碼或出場。條件是你設的，本頁是試算，不是買賣建議。</div>';
  return html;
}
function pkCondSummary(p){
  return '創 ' + p.hi + ' 日高（' + (Number(p.within) === 1 ? '當天' : '近 ' + p.within + ' 天') + '）・均線分 ≥' + p.score + '・成交值 ≥' + p.val + ' 億・市值 ≥' + p.mcap + ' 億' +
    (Number(p.sdays) ? '・近 ' + p.sdays + ' 天 >' + p.spct + '% ≥' + p.stimes + ' 次' : '') + '・追蹤 ' + p.track + ' 天' + (p.exdispo ? '・處置不抓' : '');
}
function pkPicksHtml(data){
  const p = data.params || pkParams, f = data.funnel || {};
  let html = pkDateNav(data);
  html += '<div class="pk-card"><div class="pk-card-head"><b style="color:#eab308">選股漏斗</b><span>' + pkDay(data.date) + ' 收盤後・' + (p.scope === 'groups' ? '族群表內' : '全市場・不用族群表') + '</span>' +
    '<button class="chart-tab chips-btn" data-pk-tab="module" style="margin-left:auto">改條件 ›</button></div>' +
    '<div class="pk-funnel"><div class="pk-tile" data-pk-sub="pool"><b>' + (f.pool || 0) + '</b><span>條件池</span></div><span class="pk-arrow">→</span>' +
    '<div class="pk-tile" data-pk-sub="week"><b>' + (f.week || 0) + '</b><span>本週名單</span></div><span class="pk-arrow">＋</span>' +
    '<div class="pk-tile" data-pk-sub="daily"><b>' + (f.daily || 0) + '</b><span>每日新進</span></div><span class="pk-arrow">→</span>' +
    '<div class="pk-tile gold" data-pk-fold="blackpick"><b>' + (f.black || 0) + '</b><span>今天收黑 ›</span></div></div>' +
    '<div class="muted" style="font-size:13px">' + pkCondSummary(p) + '</div></div>';
  if (pkState.showBlackPick){
    const rows = data.blackToday || [];
    html += rows.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">今天收黑</th><th>來源</th><th>股價</th><th>漲跌</th><th>均線分</th></tr></thead><tbody>' +
      rows.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + r.name + '">' + pkName(r) + '<td><span class="pk-src ' + r.source + '">' + PK_SRC_LABEL[r.source] + '</span></td><td>' + pkPrice(r.close) + '</td><td class="' + dirClass(r.changePct || 0) + '">' + swPct(r.changePct) + '</td><td>' + (r.score === null || r.score === undefined ? '—' : r.score) + '</td></tr>').join('') +
      '</tbody></table></div>' : '<div class="race-note">名單和每日新進裡，今天沒有收黑的</div>';
  }
  const sub = (k, label) => '<button class="chart-tab chips-btn' + (pkState.sub === k ? ' active' : '') + '" data-pk-sub="' + k + '">' + label + '</button>';
  html += '<div class="pk-nav">' + sub('week', '每週名單') + sub('daily', '每日新進') + sub('pool', '條件池') + '</div>';
  const cols = '<th>股價</th><th>漲跌</th><th>均線分</th><th>創高天數</th><th>成交值(億)</th><th>市值(億)</th>';
  const cells = (r) => '<td>' + pkPrice(r.close) + '</td><td class="' + dirClass(r.changePct || 0) + '">' + swPct(r.changePct) + '</td><td>' + (r.score === null || r.score === undefined ? '—' : r.score) + '</td><td>' + (r.hiLen || '—') + '</td><td>' + pkNum(r.val5, 1) + '</td><td>' + pkNum(r.mcap, 0) + '</td>';
  if (pkState.sub === 'week'){
    const w = data.week || {}, listed = (w.rows || []).filter((r) => r.listed);
    const edited = Array.isArray(pkLists[w.start]);
    const tag = w.next ? '下週・現在選' : w.week === w.thisWeek ? '本週' : '已過';
    html += '<div class="pk-nav"><button class="chart-tab chips-btn" data-pk-week="' + (w.week - 1) + '"' + (w.week > 1 ? '' : ' disabled') + '>◀</button><b>第 ' + w.week + ' 週 ' + (w.label || '') + '</b><span class="pk-pill gold">' + tag + '</span>' +
      '<button class="chart-tab chips-btn" data-pk-week="' + (w.week + 1) + '"' + (w.week < w.maxWeek ? '' : ' disabled') + '>▶</button></div>' +
      '<div class="muted" style="font-size:13px">每週 ' + p.weekN + ' 檔・依' + (PK_SORT_LABEL[p.wsort] || p.wsort) + '排・一週換股 ' + p.swaps + ' 次（從' + (p.swapFrom === 'daily' ? '每日新進' : '週選備選') + '挑）' + (p.fri ? '・週五汰弱' : '') +
      ' <button class="chart-tab chips-btn" data-pk-tab="module">改 ›</button></div>' +
      '<div class="pk-sec">' + (w.next ? '下週名單' : '第 ' + w.week + ' 週名單') + ' <small>' + (w.label || '') + '・' + (w.pickDate ? pkDay(w.pickDate) + ' 收盤選' : '—') + '・' + listed.length + ' 檔・打勾的就是名單</small></div>' +
      '<div class="pk-nav"><button class="chart-tab chips-btn' + (pkState.weekFilter === 'all' ? ' active' : '') + '" data-pk-wf="all">全部</button><button class="chart-tab chips-btn' + (pkState.weekFilter === 'listed' ? ' active' : '') + '" data-pk-wf="listed">✓ ' + (w.label || '') + ' 名單(' + listed.length + ')</button>' +
      (edited ? '<span class="pk-pill gold">這週名單你改過</span><button class="chart-tab chips-btn" data-pk-reset-week="' + w.start + '">↺ 回到自動</button>' : '') + '</div>' +
      '<div class="sw-rule">上榜日＝這次連續符合條件池的第一天。打勾的名單排上面、備選在下面。左邊打勾＝放進名單（最多 10 檔），取消＝拿掉；改過的名單存在這台瀏覽器，模擬帳戶那一週也照你改的跑。</div>';
    const rows = (w.rows || []).filter((r) => pkState.weekFilter === 'all' || r.listed);
    html += rows.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th></th><th class="l">股票名稱</th><th class="l">族群</th><th>上榜日</th><th>名單</th>' + cols + '</tr></thead><tbody>' +
      rows.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + (r.name || '') + '"><td><input type="checkbox" data-pk-tick="' + r.code + '" data-week-start="' + w.start + '"' + (r.listed ? ' checked' : '') + '></td>' + pkName(r) +
        '<td class="l">' + (r.group || '—') + '</td><td>' + pkDay(r.since) + '</td><td>' + (r.listed ? '#' + r.rank : '<span class="muted">備選</span>') + '</td>' + cells(r) + '</tr>').join('') + '</tbody></table></div>' : '<div class="race-note">那一週沒有可以選的股票（前一週最後一天條件池是空的）</div>';
  } else if (pkState.sub === 'daily'){
    const d = data.daily || {};
    const latestDay = (data.dates || []).slice(-1)[0];
    html += '<div class="sw-rule">每日新進＝當天剛符合條件池的股票（前一天還不符合），抓進追蹤 ' + p.track + ' 天，收黑才買。上面 ◀ ▶ 換日期。</div>' +
      '<div class="pk-sec">' + pkDay(d.date) + ' 選股 <small>新進 ' + (d.count || 0) + ' 檔・依均線分、成交值排</small></div>' +
      '<div class="pk-tiles"><div class="pk-tile"><span>新進</span><b>' + (d.count || 0) + ' 檔</b></div><div class="pk-tile"><span>5 天後平均</span><b class="' + dirClass(d.after5Avg || 0) + '">' + (d.after5Count ? swPct(d.after5Avg) : '還沒到') + '</b></div>' +
      '<div class="pk-tile"><span>5 天後上漲</span><b>' + (d.after5Count ? d.after5Up + '%' : '—') + '</b></div><div class="pk-tile"><span>追蹤期收黑進場</span><b>' + (d.entered || 0) + ' / ' + (d.count || 0) + '</b></div>' +
      '<div class="pk-tile"><span>交給模組到</span><b>' + (d.trackUntil ? pkDay(d.trackUntil) : d.date === latestDay ? '明天起' : '追蹤中') + '</b></div><div class="pk-tile"><span>最多用到</span><b>' + pkNum(d.maxUse, 0) + ' 萬</b></div></div>';
    const rows = d.rows || [];
    html += rows.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票名稱</th><th class="l">族群</th>' + cols + '<th>收黑進場日</th><th>5 天後</th></tr></thead><tbody>' +
      rows.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + (r.name || '') + '">' + pkName(r) + '<td class="l">' + (r.group || '—') + '</td>' + cells(r) +
        '<td>' + (r.entryDate ? pkDay(r.entryDate) : '—') + '</td><td class="' + dirClass(r.after5 || 0) + '">' + swPct(r.after5) + '</td></tr>').join('') + '</tbody></table></div>' : '<div class="race-note">這天沒有新進的</div>';
  } else {
    const pl = data.pool || {}, rows = pl.rows || [];
    html += '<div class="pk-sec">' + pkDay(pl.date) + ' 條件池 <small>' + (pl.count || 0) + ' 檔・' + pkCondSummary(p) + '</small></div>';
    html += rows.length ? '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票名稱</th><th class="l">族群</th><th>上榜日</th><th>連續(天)</th>' + cols + '</tr></thead><tbody>' +
      rows.map((r) => '<tr class="pk-click" data-code="' + r.code + '" data-name="' + (r.name || '') + '">' + pkName(r) + '<td class="l">' + (r.group || '—') + '</td><td>' + pkDay(r.since) + '</td><td>' + (r.sinceDays || '—') + '</td>' + cells(r) + '</tr>').join('') +
      '</tbody></table></div>' : '<div class="race-note">那天條件池是空的</div>';
  }
  return html;
}
function pkPerfHtml(data){
  const r = data.perf || {}, p = data.params || pkParams, methods = r.methods || [];
  const rangeBtn = (v, label) => '<button class="chart-tab chips-btn' + (Number(pkParams.range) === v ? ' active' : '') + '" data-pk-range="' + v + '">' + label + '</button>';
  const tpBtn = (v) => '<button class="chart-tab chips-btn' + (Number(pkParams.ptp) === v ? ' active' : '') + '" data-pk-ptp="' + v + '">+' + v + '%</button>';
  let html = '<div class="sw-rule">每個每日新進＝一個訊號，追蹤期（' + p.track + ' 天）內第一次收黑就收盤進場，比較各種出場方式。' + (r.cost ? '每筆扣手續費＋交易稅 ' + Number(r.cost).toFixed(2) + '%。' : '不扣手續費與交易稅。') + '</div>' +
    '<div class="pk-nav"><span class="muted">回測</span>' + rangeBtn(20, '近20天') + rangeBtn(40, '近40天') + rangeBtn(60, '近60天') + rangeBtn(120, '近120天') + rangeBtn(0, '全部') +
    '<span class="muted" style="margin-left:8px">停利</span>' + tpBtn(5) + tpBtn(8) + tpBtn(10) + tpBtn(15) + '</div>';
  const best = r.best || {};
  html += '<div class="pk-tiles"><div class="pk-tile"><span>回測天數</span><b>' + (r.days || 0) + '</b></div><div class="pk-tile"><span>選出訊號</span><b>' + (r.signals || 0) + ' 檔次</b></div>' +
    '<div class="pk-tile"><span>平均每天</span><b>' + pkNum(r.perDay, 1) + ' 檔</b></div><div class="pk-tile"><span>有等到收黑進場</span><b>' + (r.entered || 0) + ' 筆</b></div>' +
    '<div class="pk-tile"><span>進場率</span><b>' + (r.entryRate === null || r.entryRate === undefined ? '—' : r.entryRate + '%') + '</b></div>' +
    '<div class="pk-tile" style="grid-column:span 3"><span>最好的出場</span><b>' + (best.label || '—') + ' <span class="' + dirClass(best.avg || 0) + '">' + swPct(best.avg) + '</span></b></div></div>';
  html += '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">出場方式</th><th>筆數</th><th>平均</th><th>中位數</th><th>勝率</th><th>總損益(每筆 ' + p.per + ' 萬)</th><th>最差</th><th>最好</th><th>平均持有</th></tr></thead><tbody>' +
    methods.map((m) => '<tr class="' + (m.key === 'mine' ? 'pk-mine' : '') + '"><td class="l">' + m.label + (m.open ? ' <span class="muted">（' + m.open + ' 筆還抱著）</span>' : '') + '</td><td>' + m.count + '</td>' +
      '<td class="' + dirClass(m.avg || 0) + (best.key === m.key ? ' pk-best' : '') + '">' + swPct(m.avg) + '</td><td class="' + dirClass(m.median || 0) + '">' + swPct(m.median) + '</td>' +
      '<td>' + (m.win === null || m.win === undefined ? '—' : m.win + '%<br><span class="muted">' + m.wins + '/' + m.count + '</span>') + '</td><td class="' + dirClass(m.total || 0) + '">' + pkMoney(m.total) + '</td>' +
      '<td class="down">' + swPct(m.worst, 1) + '</td><td class="up">' + swPct(m.best, 1) + '</td><td>' + (m.days === null || m.days === undefined ? '—' : pkNum(m.days, 1) + ' 天') + '</td></tr>').join('') + '</tbody></table></div>';
  html += '<div class="sw-rule">抱 N 天＝進場後第 N 個交易日收盤賣。跌破 N 日線＝進場後第一天收盤低於 N 日均線就收盤賣，還沒跌破的用最新收盤算。停利／破黑K低用日K：開盤就超過 → 開盤價；盤中碰到 → 停利價或黑K低；同一天兩個都碰到保守算停損。' +
    '你的模組＝照模組的分批、加碼、減碼線、出場線單獨跑這一檔（不管資金上限），報酬＝損益 ÷ 總買進金額。抱到今天＝最新收盤（還沒賣，參考就好）。抱 N 天還沒到 N 天的不算。</div>';
  const recent = r.recent || [];
  html += '<div class="pk-fold" data-pk-fold="recent"><span>最近的訊號（' + recent.length + ' 筆）</span><span>' + (pkState.showRecent ? '▾' : '▸') + '</span></div>';
  if (pkState.showRecent) html += '<div class="hl-scroll"><table class="hl-table pk-table"><thead><tr><th class="l">股票</th><th>上榜</th><th>收黑進場</th><th>進場價</th><th>隔天出</th><th>破10日線</th><th>破20日線</th><th>你的模組</th><th>抱到今天</th></tr></thead><tbody>' +
    recent.map((t) => '<tr class="pk-click" data-code="' + t.code + '" data-name="' + t.name + '"><td class="l"><b>' + t.name + '</b> <span class="muted">' + t.code + '</span></td><td>' + pkDay(t.signal) + '</td><td>' + pkDay(t.entry) + '</td><td>' + pkPrice(t.price) + '</td>' +
      ['d1', 'm10', 'm20', 'mine', 'now'].map((k) => '<td class="' + dirClass(t[k] || 0) + '">' + swPct(t[k]) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  return html;
}
function pkModuleHtml(){
  const p = pkParams;
  const opt = (key, values, labels) => values.map((v, k) => '<button class="chart-tab chips-btn' + (String(p[key]) === String(v) ? ' active' : '') + '" data-pk-set="' + key + '" data-v="' + v + '">' + (labels ? labels[k] : v) + '</button>').join('');
  const chk = (key, label) => '<label><input type="checkbox" data-pk-chk="' + key + '"' + (p[key] ? ' checked' : '') + '> ' + label + '</label>';
  const row = (label, inner) => '<div class="pk-opt"><div>' + label + '</div><div>' + inner + '</div></div>';
  const range = (key, min, max, step, unit) => '<input type="range" data-pk-range-in="' + key + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + p[key] + '"> <b data-pk-range-val="' + key + '">' + p[key] + '</b> ' + unit;
  const info = Object.values(pkState.cache).find((d) => d && d.data);
  let html = '<div class="pk-mod"><h4>① 條件池</h4>' +
    row('創幾日新高', opt('hi', [20, 40, 60, 120, 240], ['20 日', '40 日', '60 日', '120 日', '240 日']) + ' 自訂 <input class="hl-in" type="number" min="2" max="500" step="1" data-pk-in="hi" value="' + p.hi + '"> 日') +
    row('創高後幾天內均線分達標都算', opt('within', [1, 3, 6, 11], ['當天', '3 天內', '6 天內', '11 天內'])) +
    row('均線分數至少（內定算法，滿分 15）', range('score', 0, 15, 1, '分')) +
    row('強勢股・近幾天內', opt('sdays', [0, 5, 10, 20, 40, 60], ['不限', '5 天', '10 天', '20 天', '40 天', '60 天'])) +
    (Number(p.sdays) ? row('單日漲幅大於', opt('spct', [5, 7, 8, 9.5], ['5%', '7%', '8%', '9.5%'])) + row('至少幾次', opt('stimes', [1, 2, 3, 5], ['1 次', '2 次', '3 次', '5 次'])) : '') +
    row('5 日平均成交值至少', opt('val', [0.3, 1, 3, 5], ['0.3 億', '1 億', '3 億', '5 億'])) +
    row('市值至少', opt('mcap', [20, 50, 100, 300], ['20 億', '50 億', '100 億', '300 億'])) +
    row('每日新進追蹤幾天（沒等到收黑就移除）', opt('track', [5, 10, 20], ['5 天', '10 天', '20 天'])) +
    row('範圍', opt('scope', ['market', 'groups'], ['全市場', '族群表內'])) +
    row('', chk('exdispo', '處置股不抓')) + '</div>';
  html += '<div class="pk-mod"><h4>② 每週名單與換股</h4>' +
    row('每週選幾檔', opt('weekN', [3, 4, 5, 6, 8, 10])) +
    row('名單依什麼排', opt('wsort', ['score', 'val', 'hilen', 'mcap'], ['均線分', '成交值', '創高天數', '市值'])) +
    row('一週最多換股幾次', opt('swaps', [0, 1, 2, 3, 5], ['不換', '1 次', '2 次', '3 次', '5 次'])) +
    row('換股從哪裡挑', opt('swapFrom', ['week', 'daily'], ['週選備選', '每日新進'])) +
    row('', chk('fri', '週五汰弱（一週最後一個交易日還在賠錢的持股全部賣）')) +
    row('', chk('full', '滿檔時換掉最弱且賠錢的一檔')) +
    row('', chk('norebuy', '出場後同一週不再買回')) + '</div>';
  html += '<div class="pk-mod"><h4>③ 收黑進場・加減碼・出場</h4>' +
    row('怎樣算收黑', opt('black', ['oc', 'range'], ['收盤＜開盤', '收黑且當天 −10%～+3%'])) +
    row('收黑那天均線分數還要至少', opt('bscore', [0, 8, 9, 10], ['不要求', '8', '9', '10'])) +
    row('每檔分幾批', opt('lots', [1, 2, 3, 4, 5])) +
    row('', chk('addon', '持有中再收黑就加一批')) +
    row('', chk('reduce', '減碼：收盤跌破短均線賣 1 批')) +
    (p.reduce ? row('減碼線', opt('rma', [3, 5, 10, 20], ['3 日線', '5 日線', '10 日線', '20 日線'])) : '') +
    row('收盤跌破幾日線全部出', opt('xma', [5, 10, 20], ['5 日線', '10 日線', '20 日線'])) +
    row('停利減碼（漲到均價 +X% 賣 1 批）', opt('tpr', [0, 10, 15, 20], ['不設', '+10%', '+15%', '+20%'])) + '</div>';
  html += '<div class="pk-mod"><h4>④ 資金與開始日</h4>' +
    row('每檔資金', range('per', 10, 300, 10, '萬')) +
    row('同時最多幾檔', range('maxpos', 1, 15, 1, '檔') + ' <span class="muted">（額度＝每檔資金 × 檔數）</span>') +
    row('從哪一週開始', opt('start', [0, 1, 2, 4, 8, -1], ['下週起（實盤）', '回放 1 週', '回放 2 週', '回放 4 週', '回放 8 週', '全部'])) +
    row('', chk('feeOn', '績效扣手續費與交易稅') + ' 手續費折數 <input class="hl-in" type="number" min="0.1" max="1" step="0.01" data-pk-in="fee" value="' + p.fee + '"> <span class="muted">（2.8 折＋證交稅 0.3%＝來回約 0.38%）</span>') +
    row('13:00 提醒', chk('remind', '交易日 13:00 頁面開著就跳提醒')) +
    row('推播文字', opt('push', ['count', 'names'], ['只講檔數', '含股名'])) + '</div>';
  html += '<div class="pk-btn-row"><button data-pk-run="1">▶ 試算</button><button data-pk-reset="1">回到預設</button></div>' +
    '<div class="sw-foot">資料：' + (info ? '日K ' + pkDay(info.data.from) + '～' + pkDay(info.data.to) + '・' + info.data.stocks + ' 檔，' : '') + '還原日線（分割減資已還原，除權息不還原）・均線分數同創高黑龍的內定算法・不接盤中訊號。' +
    '設定存在這台瀏覽器，改了立刻生效（每個分頁打開時重算）。</div>';
  const rules = info && info.rules ? info.rules : [];
  if (rules.length) html += '<div class="sw-rule">' + rules.map((x) => '・' + x).join('<br>') + '</div>';
  return html;
}
function renderPicker(){
  const tabsEl = document.getElementById('pickerTabs'), body = document.getElementById('pickerBody');
  tabsEl.innerHTML = PK_TABS.map(([k, label]) => '<button class="chart-tab signal-tab' + (pkState.tab === k ? ' active' : '') + '" data-pk-tab="' + k + '">' + label + '</button>').join('');
  let html = pkFlowHtml();
  if (pkState.tab === 'module'){
    html += pkModuleHtml();
    pkEnsure('rules');
  } else {
    const data = pkData(pkState.tab);
    if (!data){ pkEnsure(pkState.tab); html += pkStatus(pkState.tab); }
    else if (data.status !== 'ok') html += '<div class="race-note">' + (data.reason || '還沒有資料') + '</div>';
    else html += pkState.tab === 'today' ? pkTodayHtml(data) : pkState.tab === 'picks' ? pkPicksHtml(data) : pkPerfHtml(data);
  }
  body.innerHTML = html;
}
function openPickerPanel(){
  document.getElementById('pickerModal').hidden = false;
  pkSave();
  renderPicker();
}
function closePickerPanel(){ document.getElementById('pickerModal').hidden = true; }
function pkSet(key, value){
  pkParams[key] = value;
  pkSave();
  renderPicker();
}
document.getElementById('pickerClose').addEventListener('click', closePickerPanel);
document.getElementById('pickerModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closePickerPanel(); });
document.getElementById('pickerTabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-pk-tab]');
  if (b){ pkState.tab = b.dataset.pkTab; renderPicker(); }
});
document.getElementById('pickerBody').addEventListener('click', (e) => {
  const t = e.target;
  const el = (sel) => t.closest(sel);
  let b;
  if (t.matches('input[type=checkbox]')){
    if (t.dataset.pkDone){
      const d = (pkData('today') || {}).date;
      if (d){ pkDone[d] = pkDone[d] || {}; if (t.checked) pkDone[d][t.dataset.pkDone] = true; else delete pkDone[d][t.dataset.pkDone]; pkSave(); renderPicker(); }
      return;
    }
    if (t.dataset.pkTick){
      const data = pkData('picks'), w = data && data.week;
      if (!w) return;
      let list = (w.rows || []).filter((r) => r.listed).map((r) => r.code);
      if (t.checked){ if (!list.includes(t.dataset.pkTick)){ if (list.length >= 10){ t.checked = false; alert('名單最多 10 檔'); return; } list.push(t.dataset.pkTick); } }
      else list = list.filter((c) => c !== t.dataset.pkTick);
      pkLists[t.dataset.weekStart] = list;
      pkSave(); pkClear(); renderPicker();
      return;
    }
    if (t.dataset.pkChk){ pkSet(t.dataset.pkChk, t.checked); pkClear(); return; }
    return;
  }
  if ((b = el('[data-pk-tab]'))){ pkState.tab = b.dataset.pkTab; renderPicker(); return; }
  if ((b = el('[data-pk-date]'))){
    const v = b.dataset.pkDate;
    if (!v) return;
    pkState.date = v === 'latest' ? null : v;
    const dates = ((pkData(pkState.tab) || {}).dates || []);
    if (pkState.date && dates.length && pkState.date === dates[dates.length - 1]) pkState.date = null;
    pkState.week = null; pkState.pick = null;
    renderPicker(); return;
  }
  if ((b = el('[data-pk-sub]'))){ pkState.sub = b.dataset.pkSub; renderPicker(); return; }
  if ((b = el('[data-pk-week]'))){ pkState.week = Number(b.dataset.pkWeek); renderPicker(); return; }
  if ((b = el('[data-pk-wf]'))){ pkState.weekFilter = b.dataset.pkWf; renderPicker(); return; }
  if ((b = el('[data-pk-reset-week]'))){ delete pkLists[b.dataset.pkResetWeek]; pkSave(); pkClear(); renderPicker(); return; }
  if ((b = el('[data-pk-sort]'))){ pkState.sort = b.dataset.pkSort; pkState.pick = null; renderPicker(); return; }
  if ((b = el('[data-pk-pick]'))){
    const how = b.dataset.pkPick;
    if (how === 'close'){ pkState.pick = null; renderPicker(); return; }
    const sim = (pkData('today') || {}).sim || {};
    const rows = pkRankRows((sim.watch || []).map((r) => Object.assign({}, r)));
    if (!rows.length) return;
    const r = how === 'dice' ? rows[Math.floor(Math.random() * rows.length)] : rows[0];
    pkState.pick = { code: r.code, how };
    renderPicker(); return;
  }
  if ((b = el('[data-pk-star]'))){
    const code = b.dataset.pkStar;
    pkStars = pkStars.includes(code) ? pkStars.filter((c) => c !== code) : pkStars.concat([code]).slice(-20);
    pkSave(); pkClear(); renderPicker(); return;
  }
  if ((b = el('[data-pk-chart]'))){
    document.getElementById('pickerModal').classList.add('behind-chart');
    openStockChart(b.dataset.pkChart, b.dataset.name || '');
    return;
  }
  if ((b = el('[data-pk-fold]'))){
    const k = b.dataset.pkFold;
    if (k === 'missed') pkState.showMissed = !pkState.showMissed;
    else if (k === 'black') pkState.showBlack = !pkState.showBlack;
    else if (k === 'recent') pkState.showRecent = !pkState.showRecent;
    else if (k === 'blackpick') pkState.showBlackPick = !pkState.showBlackPick;
    renderPicker(); return;
  }
  if ((b = el('[data-pk-log]'))){ pkState.logTab = b.dataset.pkLog; renderPicker(); return; }
  if ((b = el('[data-pk-range]'))){ pkSet('range', Number(b.dataset.pkRange)); return; }
  if ((b = el('[data-pk-ptp]'))){ pkSet('ptp', Number(b.dataset.pkPtp)); return; }
  if ((b = el('[data-pk-set]'))){
    const key = b.dataset.pkSet, raw = b.dataset.v;
    const value = ['wsort', 'swapFrom', 'black', 'scope', 'push'].includes(key) ? raw : Number(raw);
    pkSet(key, value); pkClear(); return;
  }
  if ((b = el('[data-pk-run]'))){ pkClear(); pkState.tab = 'today'; pkState.date = null; renderPicker(); return; }
  if ((b = el('[data-pk-reset]'))){ pkParams = Object.assign({}, PK_DEFAULTS); pkSave(); pkClear(); renderPicker(); return; }
  if ((b = el('[data-pk-remind]'))){ pkRunReminder(true); return; }
  const row = el('.pk-click[data-code]');
  if (row){
    document.getElementById('pickerModal').classList.add('behind-chart');
    openStockChart(row.dataset.code, row.dataset.name || '');
  }
});
document.getElementById('pickerBody').addEventListener('input', (e) => {
  const t = e.target;
  if (t.dataset.pkRangeIn){
    const label = document.querySelector('[data-pk-range-val="' + t.dataset.pkRangeIn + '"]');
    if (label) label.textContent = t.value;
  }
});
document.getElementById('pickerBody').addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.pkRangeIn){ pkSet(t.dataset.pkRangeIn, Number(t.value)); pkClear(); return; }
  if (t.dataset.pkIn){
    const v = Number(t.value);
    if (!isFinite(v) || v <= 0) return;
    if (t.dataset.pkIn === 'hi' && (v < 2 || v > 500)) return;
    if (t.dataset.pkIn === 'fee' && v > 1) return;
    pkSet(t.dataset.pkIn, t.dataset.pkIn === 'hi' ? Math.round(v) : v); pkClear();
  }
});
// ---- 13:00 提醒（2026-10-05 使用者：原本 13:20，改成 13:00）----
// 交易日 13:00～13:24 頁面開著（用過這個面板、模組裡沒關掉、總開關沒關）就算一次（13:25 起是收盤試撮，不再算）；
// 「模擬 13:00 的提醒」按下去馬上算。
// 盤中用即時報價：持股現價跌破出場線（最近 N−1 根收盤＋現價的均線）全部出、跌破減碼線減一批、現價低於開盤（收黑）加一批；
// 觀察中的股票現價低於開盤＝收黑，照優先（★、名單、均線分）補空位。收盤後按，就用那天模組實際做的事示範。
let pkRemindFired = '';
try { pkRemindFired = localStorage.getItem('pickerRemindFired') || ''; } catch (e) { /* 讀不到就算了 */ }
function pkMaLive(closes, price, n){
  const prev = (closes || []).filter((x) => x > 0).slice(-(n - 1));
  if (prev.length < n - 1) return null;
  return (prev.reduce((s, x) => s + x, 0) + price) / n;
}
// 13:00 提醒：用即時報價、照後端收盤時同一套順序先算一次（2026-10-05 使用者：沒買的寫清楚實際原因）
// 1) 持股：破出場線全部賣 → 破減碼線減 1 批（只剩 1 批就是出場）→ 星期五還在賠的全部賣
// 2) 收黑的候選照順序買：★優先 → 名單（照名次）→ 每日新進（照排序方式）。不在名單的每買一檔算一次換股；
//    滿檔時開了滿檔換股、本週還有次數，就換掉賠最多的一檔；買不了的寫原因
// 3) 今天沒動過的持股再收黑加 1 批
function pkLiveBlack(q, score, p){
  if (!q || !(q.price > 0) || !(q.open > 0) || !(q.price < q.open)) return false;
  if (p.black === 'range' && !(q.changePercent >= -10 && q.changePercent <= 3)) return false;
  return !(Number(p.bscore) && (score || 0) < Number(p.bscore));
}
function pkMonday(day){
  const d = new Date(day + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() - (d.getUTCDay() + 6) % 7);
  return d.toISOString().slice(0, 10);
}
function pkLiveActions(sim, quotes, p, dataDate){
  const out = [];
  const fee = pkFee(p), sellRate = fee > 0 ? (0.1425 * fee + 0.3) / 100 : 0;
  const today = twTodayStr();
  const friday = new Date(today + 'T00:00:00Z').getUTCDay() === 5;
  const swaps = Number(sim.swaps !== undefined ? sim.swaps : p.swaps) || 0;
  // 資料最新一天跟今天不同週（例如拿週五的資料算週一）：今天是新的一週，換股次數從 0 算
  let used = dataDate && pkMonday(dataDate) !== pkMonday(today) ? 0 : (Number(sim.swapsUsed) || 0);
  const held = [];               // 收盤後還抱著的：{ h, q, ret（扣賣出費用後的報酬，換股挑賠最多的）, touched（今天有動過，不加碼）}
  for (const h of sim.holdings || []){
    const q = quotes[h.code];
    if (!q || !(q.price > 0)){ held.push({ h, q: null, ret: null, touched: false }); continue; }
    const ret = h.cost > 0 && h.shares > 0 ? (h.shares * q.price * (1 - sellRate) / 10000 - h.cost) / h.cost : null;
    const xma = pkMaLive(h.lastCloses, q.price, p.xma), rma = pkMaLive(h.lastCloses, q.price, p.rma);
    if (xma !== null && q.price < xma){ out.push({ type: 'exit', code: h.code, name: h.name, price: q.price, reason: '跌破' + p.xma + '日線・全部賣', shares: h.shares }); continue; }
    if (p.reduce && rma !== null && q.price < rma && h.armed !== false){
      const last = (h.batches || 0) <= 1;
      out.push({ type: last ? 'exit' : 'reduce', code: h.code, name: h.name, price: q.price, reason: '跌破' + p.rma + '日線・減1批' + (last ? '（最後一批）' : '') });
      if (!last) held.push({ h, q, ret, touched: true });
      continue;
    }
    if (p.fri && friday && ret !== null && ret < 0){ out.push({ type: 'exit', code: h.code, name: h.name, price: q.price, reason: '週五汰弱・全部賣', shares: h.shares }); continue; }
    held.push({ h, q, ret, touched: false });
  }
  const wsortVal = (w) => Number(p.wsort === 'val' ? w.val5 : p.wsort === 'hilen' ? w.hiLen : p.wsort === 'mcap' ? w.mcap : w.score) || 0;
  const black = (sim.watch || []).map((w, k) => ({ w, k })).filter((x) => pkLiveBlack(quotes[x.w.code], x.w.score, p)).sort((a, b) =>
    (pkStars.includes(b.w.code) - pkStars.includes(a.w.code)) || ((a.w.source === 'list' ? 0 : 1) - (b.w.source === 'list' ? 0 : 1)) ||
    (a.w.source === 'list' ? a.k - b.k : (wsortVal(b.w) - wsortVal(a.w)) || ((b.w.score || 0) - (a.w.score || 0)) || ((b.w.val5 || 0) - (a.w.val5 || 0)) ||
      String(a.w.code).localeCompare(String(b.w.code))));
  const amount = p.per * 10000 / p.lots;
  const bought = [];
  const swapNote = () => swaps <= 0 ? '模組設定不換股' : '本週換股 ' + used + '/' + swaps + ' 次用完';
  for (const { w } of black){
    const q = quotes[w.code], isList = w.source === 'list', label = PK_SRC_LABEL[w.source] || '';
    const shares = Math.floor(amount / q.price);
    let why = '';
    if (shares <= 0) why = '一批 ' + pkNum(amount / 10000, 1) + ' 萬買不到 1 股';
    else if (held.length + bought.length >= p.maxpos){
      let worst = null;
      if (p.full && used < swaps) for (const x of held) if (x.ret !== null && x.ret < 0 && (!worst || x.ret < worst.ret)) worst = x;
      if (worst){
        held.splice(held.indexOf(worst), 1);
        out.push({ type: 'exit', code: worst.h.code, name: worst.h.name, price: worst.q.price, reason: '滿檔換弱・換成 ' + w.name, shares: worst.h.shares });
        used += 1;
        bought.push(w.name);
        out.push({ type: 'buy', code: w.code, name: w.name, price: q.price, reason: label + '收黑・買第1批（換股）', shares });
        continue;
      }
      let head = '滿檔 ' + (held.length + bought.length) + '/' + p.maxpos;
      if (bought.length) head = '空位給了排前面的' + bought.join('、') + '，' + head;
      why = head + '，' + (!p.full ? '模組沒開滿檔換股' : (swaps <= 0 || used >= swaps) ? swapNote() : (bought.length ? '其他持股都沒賠錢' : '持股都沒賠錢') + '，沒有可以換掉的');
    } else if (!isList && used >= swaps) why = label + '買進要算換股，' + swapNote();
    if (why){ out.push({ type: 'skip', code: w.code, name: w.name, price: q.price, reason: '收黑・' + why }); continue; }
    if (!isList) used += 1;
    bought.push(w.name);
    out.push({ type: 'buy', code: w.code, name: w.name, price: q.price, reason: label + '收黑・買第1批' + (isList ? '' : '（換股）'), shares });
  }
  if (p.addon){
    for (const x of held){
      if (x.touched || (x.h.batches || 0) >= p.lots || !pkLiveBlack(x.q, x.h.score, p)) continue;
      out.push({ type: 'add', code: x.h.code, name: x.h.name, price: x.q.price, reason: '再收黑・加到第' + ((x.h.batches || 0) + 1) + '批', shares: Math.floor(amount / x.q.price) });
    }
  }
  return out;
}
function pkBeep(){
  try {
    primeAlertAudio();
    if (!alertAudioCtx) return;
    // 跟發動的上升三和弦分開：兩聲往下的「咚—咚」
    [880, 587.33].forEach((freq, i) => {
      const osc = alertAudioCtx.createOscillator(), gain = alertAudioCtx.createGain();
      osc.type = 'sine'; osc.frequency.value = freq; gain.gain.value = 0.18;
      osc.connect(gain); gain.connect(alertAudioCtx.destination);
      const t = alertAudioCtx.currentTime + i * 0.22;
      osc.start(t); osc.stop(t + 0.2);
    });
  } catch (e) { /* 出不了聲就算了 */ }
}
function pkShowAlert(title, lines){
  let el = document.getElementById('pkAlertBox');
  if (!el){
    el = document.createElement('div');
    el.id = 'pkAlertBox'; el.className = 'pk-alert';
    el.addEventListener('click', (e) => { if (e.target.closest('.pk-alert-close')) el.remove(); });
    document.body.appendChild(el);
  }
  el.innerHTML = '<div class="pk-alert-head">' + title + '<button class="pk-alert-close" aria-label="關閉">✕</button></div><div>' + (lines.length ? lines.join('<br>') : '沒有要做的事') + '</div>';
}
async function pkRunReminder(manual){
  const p = pkParams;
  const saveDate = pkState.date;
  pkState.date = null;               // 提醒一律看最新一天
  const query = pkQuery('today');
  pkState.date = saveDate;
  let data = pkState.cache[query];
  if (!data){
    try {
      const res = await fetch('/api/picker?' + query);
      data = await res.json();
      if (!res.ok || !data || data.status !== 'ok') throw new Error('picker');
    } catch (e) { if (manual) pkShowAlert('創高黑・模擬 13:00 提醒', ['資料還沒好，晚一點再試']); return; }
  }
  const sim = data.sim || {};
  const codes = [...new Set((sim.holdings || []).map((h) => h.code).concat((sim.watch || []).map((w) => w.code)))].slice(0, 150);
  let actions = [], live = false, when = '';
  if (codes.length){
    try {
      const res = await fetch('/api/picker-live?codes=' + codes.join(','));
      const q = await res.json();
      // 今天盤中的報價（日期是今天、而且比資料最新一天新）才拿來算
      if (res.ok && q && q.quotes && q.quoteDate === twTodayStr() && q.quoteDate > data.date){
        actions = pkLiveActions(sim, q.quotes, p, data.date); live = true; when = String(q.quoteTime || '').slice(0, 5);
      }
    } catch (e) { /* 抓不到即時報價就用收盤結果示範 */ }
  }
  if (!live){
    if (!manual) return;
    actions = (sim.today || []).map((x) => Object.assign({}, x));
  }
  const real = actions.filter((x) => x.type !== 'skip');
  const count = (t) => real.filter((x) => x.type === t).length;
  const title = '創高黑・' + (live ? '13:00 組合提醒（' + when + '）' : '模擬示範（' + pkDay(data.date) + ' 收盤結果）');
  const summary = ['exit', 'reduce', 'buy', 'add'].filter((t) => count(t)).map((t) => ({ exit: '出場', reduce: '減碼', buy: '買進', add: '加碼' })[t] + ' ' + count(t) + ' 檔').join('、') || '沒有要做的事';
  const lines = p.push === 'count' ? [summary, '點開看是哪幾檔、幾批、什麼價位。'] :
    actions.map((x) => ({ exit: '🟢 出場', reduce: '🔵 減碼', buy: '🔴 買進', add: '🟡 加碼', skip: '⚪ 沒買' })[x.type] + ' ' + x.name + ' ' + x.code + '・' + x.reason + '・' + pkPrice(x.price) + (x.shares ? '・' + Number(x.shares).toLocaleString() + ' 股' : ''));
  pkBeep();
  pkShowAlert(title + '・' + summary, lines);
  if ('Notification' in window && Notification.permission === 'granted'){
    try { new Notification(title + '・' + summary, { body: p.push === 'count' ? '點開看是哪幾檔、幾批、什麼價位。' : lines.slice(0, 6).join('\\n'), tag: 'picker-1320', requireInteraction: true }); } catch (e) { /* 跳不出來就算了 */ }
  } else if (manual) requestNotifyPermission();
}
setInterval(() => {
  let used = false;
  try { used = localStorage.getItem('pickerUsed') === '1'; } catch (e) { /* 沒用過就不提醒 */ }
  if (!used || !alertsEnabled || !pkParams.remind) return;
  const now = new Date(Date.now() + 8 * 3600000);
  const day = now.getUTCDay(), minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const today = now.toISOString().slice(0, 10);
  if (day === 0 || day === 6 || minutes < 13 * 60 || minutes >= 13 * 60 + 25 || pkRemindFired === today) return;
  pkRemindFired = today;
  try { localStorage.setItem('pickerRemindFired', today); } catch (e) { /* 存不了就算了 */ }
  pkRunReminder(false);
}, 30000);
// ---- 飆股雷達（2026-10-07 使用者：照莊爸 App 的飆股雷達做一個，條件我們自己算）----
// 後端 /api/grail-radar：嗨投資紫殺四個聖杯 15 個邏輯，每個邏輯照固定時間點（盤中證交所即時報價、收盤後官方日K）篩出的名單，每天保存。
// 卡片上的時間點膠囊：實線＝有名單（數字是檔數）、虛線＝還沒到或沒算到、黃框＝正在看的那一輪；預設看最新一輪。
// 「新」＝上一輪沒有、這一輪才進來；劃線＝上一輪有、這一輪掉出去。篩選（族群、均線分數、成交量）存在這台瀏覽器。
const GR_FILTER_DEFAULTS = { group: 'all', maSwing: 0, maOvernight: 0, vol: 0, onlyHits: false, sort: 'ma' };
const GR_SORTS = [['ma', '均線'], ['chg', '漲跌'], ['vol', '量'], ['mcap', '市值']];
let grFilter = Object.assign({}, GR_FILTER_DEFAULTS);
try {
  const saved = JSON.parse(localStorage.getItem('grailFilter') || 'null');
  if (saved && typeof saved === 'object') grFilter = Object.assign({}, GR_FILTER_DEFAULTS, saved);
} catch (e) { /* 讀不到就用預設 */ }
// follow＝跟著最新那天（沒自己選往日）：頁面開過夜也會自己換到今天（2026-10-08 使用者：早上打開停在昨天）
let grState = { date: null, follow: true, data: null, loading: false, error: null, sel: {}, info: {} };
function grSaveFilter(){ try { localStorage.setItem('grailFilter', JSON.stringify(grFilter)); } catch (e) { /* 存不了就算了 */ } }
async function grLoad(fresh){
  if (grState.loading) return;
  grState.loading = true;
  if (!document.getElementById('grailModal').hidden) renderGrail();
  try {
    const q = new URLSearchParams();
    if (grState.date && !grState.follow) q.set('date', grState.date);
    if (fresh) q.set('_', String(Date.now()));
    const res = await fetch('/api/grail-radar' + (q.toString() ? '?' + q.toString() : ''));
    const data = await res.json().catch(() => null);
    if (res.status === 404) throw new Error('後端還沒更新，合併部署後幾分鐘就會出現');
    if (!res.ok || !data || data.status !== 'ok') throw new Error((data && (data.detail || data.error)) || ('http ' + res.status));
    grState.data = data;
    grState.error = null;
    if (grState.follow || !grState.date){
      if (grState.date !== data.date) grState.sel = {};
      grState.date = data.date;
    }
  } catch (e) {
    grState.error = String((e && e.message) || e);
  } finally {
    grState.loading = false;
  }
  if (!document.getElementById('grailModal').hidden) renderGrail();
}
function grPrice(v){ return v === null || v === undefined ? '—' : Number(v) >= 500 ? Number(v).toFixed(0) : Number(v) >= 50 ? Number(v).toFixed(1) : Number(v).toFixed(2); }
function grMa(m){
  if (m === null || m === undefined) return '<span class="gr-ma lo">—</span>';
  return '<span class="gr-ma ' + (m >= 12 ? 'hi' : m >= 7 ? 'mid' : 'lo') + '">' + m + '</span>';
}
function grPass(logic, s){
  if (grFilter.group === 'grouped' && !s.g) return false;
  const minMa = logic.kind === '隔日沖' ? Number(grFilter.maOvernight) : Number(grFilter.maSwing);
  if (minMa > 0 && !(s.m >= minMa)) return false;
  if (Number(grFilter.vol) > 0 && !(s.vol >= Number(grFilter.vol))) return false;
  return true;
}
function grSortRows(rows){
  const key = grFilter.sort;
  const val = (s) => (key === 'ma' ? s.m : key === 'chg' ? s.chg : key === 'vol' ? s.vol : s.mcap);
  return rows.slice().sort((a, b) => {
    const va = val(a), vb = val(b);
    if (va === vb || (va == null && vb == null)) return (b.vol || 0) - (a.vol || 0);
    if (va == null) return 1;
    if (vb == null) return -1;
    return vb - va;
  });
}
function grSlots(logic, closeSlot){ return logic.times.concat([closeSlot]); }
function grCard(logic, runs, closeSlot){
  const slots = grSlots(logic, closeSlot);
  const have = slots.filter((s) => runs && runs[s]);
  let sel = grState.sel[logic.key];
  if (!sel || !(runs && runs[sel])) sel = have.length ? have[have.length - 1] : null;
  const run = sel ? runs[sel] : null;
  const prevSlot = sel ? have.slice(0, have.indexOf(sel)).pop() : null;
  const prev = prevSlot ? runs[prevSlot] : null;
  const prevCodes = new Set(prev ? prev.stocks.map((s) => s.c) : []);
  const rows = run ? grSortRows(run.stocks.filter((s) => grPass(logic, s))) : [];
  const nowCodes = new Set(run ? run.stocks.map((s) => s.c) : []);
  const gone = prev ? prev.stocks.filter((s) => !nowCodes.has(s.c) && grPass(logic, s)) : [];
  if (grFilter.onlyHits && !rows.length) return '';
  const kindCls = logic.kind === '隔日沖' ? 'overnight' : 'swing';
  const cal = logic.calibration ? '對答案：抓到 ' + logic.calibration.recall + '%・準 ' + logic.calibration.precision + '%' : '';
  const pills = slots.map((s) => {
    const r = runs && runs[s];
    return '<button class="gr-slot' + (r ? ' has' : '') + (s === sel ? ' sel' : '') + '" data-gr-logic="' + logic.key + '" data-gr-slot="' + rdEsc(s) + '"'
      + ' title="' + (r ? rdEsc(s) + ' 算的（' + r.at + '）' : rdEsc(s) + ' 還沒到或沒算到') + '">' + rdEsc(s) + (r ? '<b>' + r.n + '</b>' : '') + '</button>';
  }).join('');
  const rowHtml = (s, isGone) => {
    const chgCls = s.chg > 0 ? 'gr-up' : s.chg < 0 ? 'gr-down' : '';
    const isNew = !isGone && prev && !prevCodes.has(s.c);
    return '<tr class="gr-row' + (isGone ? ' gone' : '') + '" data-code="' + rdEsc(s.c) + '" data-name="' + rdEsc(s.n) + '">'
      + '<td class="l gr-name"><b>' + rdEsc(s.n) + '</b><small>' + rdEsc(s.c) + '</small>' + (isNew ? '<span class="gr-new">新</span>' : '')
      + (isGone ? ' ✕' : '') + (s.g ? '<span class="gr-grp">' + rdEsc(s.g) + '</span>' : '') + '</td>'
      + '<td class="r">' + grPrice(s.px) + '</td>'
      + '<td class="r ' + chgCls + '">' + (s.chg > 0 ? '+' : '') + Number(s.chg).toFixed(2) + '%</td>'
      + '<td class="r">' + Number(s.vol || 0).toLocaleString() + '</td>'
      + '<td class="r">' + grMa(s.m) + '</td>'
      + '<td class="r gr-mcap">' + (s.mcap === null || s.mcap === undefined ? '—' : Number(s.mcap).toLocaleString() + '億') + '</td></tr>';
  };
  let body;
  if (!run) body = '<div class="gr-none">' + (have.length ? '' : '今天還沒有名單（時間點到了才會算）') + '</div>';
  else if (!rows.length && !gone.length) body = '<div class="gr-none">' + rdEsc(sel) + ' 這一輪 ' + (run.n ? '篩選後' : '') + '沒有股票</div>';
  else body = '<table class="gr-list"><thead><tr><th class="l">股票</th><th class="r">價</th><th class="r">漲跌</th><th class="r">量(張)</th><th class="r">均線</th><th class="r gr-mcap">市值</th></tr></thead><tbody>'
    + rows.map((s) => rowHtml(s, false)).join('') + gone.map((s) => rowHtml(s, true)).join('') + '</tbody></table>';
  return '<div class="gr-card"><div class="gr-card-head"><b>' + rdEsc(logic.name) + '</b><span class="gr-kind ' + kindCls + '">' + rdEsc(logic.kind) + '</span>'
    + '<button class="gr-info" data-gr-info="' + logic.key + '">條件</button><span class="gr-cal">' + cal + '</span></div>'
    + (grState.info[logic.key] ? '<div class="gr-desc">' + rdEsc(logic.desc) + '</div>' : '')
    + '<div class="gr-slots">' + pills + '</div>' + body + '</div>';
}
function grSelect(key, options, value){
  return '<select data-gr-filter="' + key + '">' + options.map(([v, label]) => '<option value="' + v + '"' + (String(v) === String(value) ? ' selected' : '') + '>' + label + '</option>').join('') + '</select>';
}
function renderGrail(){
  const body = document.getElementById('grailBody');
  const data = grState.data;
  const dates = (data && data.dates) || [];
  const controls = '<div class="gr-controls">'
    + '<label>日期 <select data-gr-date>' + (dates.length ? dates : [grState.date || '']).map((d) => '<option value="' + rdEsc(d) + '"' + (d === grState.date ? ' selected' : '') + '>' + rdEsc(d ? swMmdd(d) + '（' + '日一二三四五六'[new Date(d + 'T00:00:00').getDay()] + '）' + (d === twTodayStr() ? ' 今天' : '') : '最新') + '</option>').join('') + '</select></label>'
    + '<button data-gr-refresh>重新整理</button>'
    + '<label>族群 ' + grSelect('group', [['all', '全部'], ['grouped', '只看有族群的']], grFilter.group) + '</label>'
    + '<label>波段均線 ' + grSelect('maSwing', [[0, '不限'], [5, '≥5'], [7, '≥7'], [10, '≥10'], [12, '≥12']], grFilter.maSwing) + '</label>'
    + '<label>隔日沖均線 ' + grSelect('maOvernight', [[0, '不限'], [7, '≥7'], [10, '≥10'], [12, '≥12'], [15, '15']], grFilter.maOvernight) + '</label>'
    + '<label>成交量 ' + grSelect('vol', [[0, '不限'], [500, '≥500'], [1000, '≥1000'], [3000, '≥3000'], [5000, '≥5000'], [10000, '≥10000']], grFilter.vol) + '</label>'
    + '<label>排序 ' + grSelect('sort', GR_SORTS, grFilter.sort) + '</label>'
    + '<label><input type="checkbox" data-gr-only' + (grFilter.onlyHits ? ' checked' : '') + '>只看有訊號的</label>'
    + (data && data.updated ? '<span class="gr-updated">更新 ' + rdEsc(String(data.updated).slice(11, 19)) + '</span>' : '')
    + (data && data.nextSlot ? '<span class="gr-updated">下一輪 ' + rdEsc(data.nextSlot) + '</span>' : '')
    + '</div>';
  if (!data){
    body.innerHTML = controls + '<div class="race-note">' + (grState.error ? '讀不到（' + rdEsc(grState.error) + '），按「重新整理」再試' : '讀取中…') + '</div>';
    return;
  }
  const runs = data.runs || {};
  const sections = (data.saints || []).map((saint) => {
    const cards = (data.logics || []).filter((l) => l.saintId === saint.id).map((l) => grCard(l, runs[l.key], data.closeSlot || '收盤')).join('');
    if (!cards) return '';
    return '<div class="gr-saint">' + rdEsc(saint.name) + '</div><div class="gr-grid">' + cards + '</div>';
  }).join('');
  // 後端 note（來源和「近似條件」的說明）不顯示：2026-10-07 使用者要頂端那段拿掉，這行是同一句
  // 2026-10-08 使用者：早上打開停在昨天。後端交易日預設給今天，還沒到時間點就寫清楚第一輪幾點
  const kindTimes = (kind) => [...new Set((data.logics || []).filter((l) => l.kind === kind).flatMap((l) => l.times))].sort().join('、');
  const waiting = data.nextSlot && !Object.keys(runs).length
    ? '<div class="race-note">今天的時間點還沒到：隔日沖 ' + rdEsc(kindTimes('隔日沖')) + '；波段 ' + rdEsc(kindTimes('波段')) + '、收盤。下一輪 ' + rdEsc(data.nextSlot) + '，到了會自己更新；要看昨天的名單請切日期。</div>' : '';
  body.innerHTML = controls + waiting + (grState.error ? '<div class="race-note">更新失敗（' + rdEsc(grState.error) + '），先顯示上一次的資料</div>' : '')
    + (sections || '<div class="race-note">這一天沒有符合的股票</div>');
}
function openGrailPanel(){
  document.getElementById('grailModal').hidden = false;
  renderGrail();
  grLoad(false);
}
function closeGrailPanel(){ document.getElementById('grailModal').hidden = true; }
document.getElementById('grailClose').addEventListener('click', closeGrailPanel);
document.getElementById('grailModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeGrailPanel(); });
document.getElementById('grailBody').addEventListener('click', (e) => {
  const t = e.target;
  const slot = t.closest('[data-gr-slot]');
  if (slot){ grState.sel[slot.dataset.grLogic] = slot.dataset.grSlot; renderGrail(); return; }
  const info = t.closest('[data-gr-info]');
  if (info){ grState.info[info.dataset.grInfo] = !grState.info[info.dataset.grInfo]; renderGrail(); return; }
  if (t.closest('[data-gr-refresh]')){ grLoad(true); return; }
  const row = t.closest('tr.gr-row');
  if (row) openStockChart(row.dataset.code, row.dataset.name);
});
document.getElementById('grailBody').addEventListener('change', (e) => {
  const t = e.target;
  if (t.matches('[data-gr-date]')){
    const latest = grState.data && grState.data.dates ? grState.data.dates[0] : null;
    grState.follow = !t.value || t.value === latest;
    grState.date = t.value || null; grState.sel = {}; grLoad(false); return;
  }
  if (t.matches('[data-gr-only]')){ grFilter.onlyHits = t.checked; grSaveFilter(); renderGrail(); return; }
  if (t.matches('[data-gr-filter]')){
    const key = t.dataset.grFilter;
    grFilter[key] = key === 'group' || key === 'sort' ? t.value : Number(t.value);
    grSaveFilter();
    renderGrail();
  }
});
setInterval(() => {
  // 面板開著、跟著最新那天：平日 08:30～18:30 每 90 秒更新一次（時間點 12:00～13:45，收盤名單 14:30～18:00 之間出來；
  // 早上第一次更新會從昨天換到今天）
  if (document.getElementById('grailModal').hidden || document.visibilityState === 'hidden') return;
  if (!grState.follow) return;
  const t = new Date(Date.now() + 8 * 3600000);
  const day = t.getUTCDay(), minutes = t.getUTCHours() * 60 + t.getUTCMinutes();
  if (day < 1 || day > 5 || minutes < 8 * 60 + 30 || minutes > 18 * 60 + 30) return;
  grLoad(false);
}, 90000);
// ---- 處置監獄（2026-10-09 使用者：照莊爸「處置股・出獄與嫌疑名單」zhuang.tw/prison 做一模一樣的）----
// 後端 /api/jail：證交所／櫃買公開的注意股、處置股公告（上市直抓、上櫃走鏡像），每天晚上公告出來後更新。
// 段落照莊爸頁面的順序：前科查詢、一週出獄時間表、犯罪集團、今日入獄、嫌疑名單（明天門檻＋可複製文字）、今日第一次第一款、
// 前科索引、常見問題。前科查詢不限次數（/api/jail-stock）。
const jlState = { data: null, loading: false, error: null, query: null, queryCode: '', queryLoading: false };
async function jlLoad(){
  if (jlState.loading) return;
  jlState.loading = true;
  if (!document.getElementById('jailModal').hidden) renderJail();
  try {
    const res = await fetch('/api/jail');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    jlState.data = await res.json();
    jlState.error = null;
  } catch (e){
    jlState.error = e.message || String(e);
  } finally {
    jlState.loading = false;
    if (!document.getElementById('jailModal').hidden) renderJail();
  }
}
async function jlQuery(code){
  code = String(code || '').replace(/[^0-9A-Za-z]/g, '');
  jlState.queryCode = code;
  if (!code){ jlState.query = null; renderJailQuery(); return; }
  jlState.queryLoading = true;
  renderJailQuery();
  try {
    const res = await fetch('/api/jail-stock?code=' + encodeURIComponent(code));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    jlState.query = await res.json();
  } catch (e){
    jlState.query = { status: 'error', message: e.message || String(e) };
  } finally {
    jlState.queryLoading = false;
    renderJailQuery();
    const el = document.getElementById('jlResult');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
const jlStock = (code, name, extra) => '<button type="button" class="jl-stk" data-jl-code="' + rdEsc(code) + '" data-jl-name="' + rdEsc(name || '') + '">'
  + '<span class="jl-code">' + rdEsc(code) + '</span> ' + rdEsc(name || '') + (extra || '') + '</button>';
const jlMd = (iso) => { const p = String(iso || '').split('-'); return p.length === 3 ? Number(p[1]) + '/' + Number(p[2]) : ''; };
const jlCardStock = (code, name, market) => '<button type="button" class="jl-stk" data-jl-code="' + rdEsc(code) + '" data-jl-name="' + rdEsc(name || '') + '">'
  + '<b>' + rdEsc(name || code) + '</b> <small>' + rdEsc(code) + '・' + rdEsc(market || '') + '</small></button>';
const jlNew = (on) => on ? '<span class="jl-newtag">新</span>' : '';
const jlClauseText = (list) => (list || []).map((c) => '第' + ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三'][c] + '款').join('、');
function jlTime(iso){
  if (!iso) return '—';
  const m = /^(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2})/.exec(iso);
  return m ? m[1] + ' ' + m[2] : iso;
}
function jlLineHtml(line){
  if (line.kind === 'note') return '<div class="jl-line note">' + rdEsc(line.text) + '</div>';
  const today = line.kind === 'volume' && line.today !== undefined
    ? ' <span class="jl-today' + (line.passed ? ' ok' : '') + '">（今 ' + Number(line.today).toLocaleString() + ' 張' + (line.passed ? ' ✓ 已過' : '') + '）</span>' : '';
  const text = rdEsc(line.text).replace(/([0-9,]+\\.[0-9]{2}) 元/g, '<b>$1</b> 元').replace(/&gt; ([0-9,]+) 張/g, '&gt; <b>$1</b> 張');
  return '<div class="jl-line">' + text + today + '</div>';
}
function jailQueryHtml(){
  const q = jlState.query;
  if (jlState.queryLoading) return '<div class="jl-note">查詢中…</div>';
  if (!q) return '';
  if (q.status === 'error') return '<div class="jl-note">查詢失敗（' + rdEsc(q.message || '') + '），請稍後再試。</div>';
  if (q.status !== 'ok') return '<div class="jl-note">查無「' + rdEsc(jlState.queryCode) + '」的處置／注意紀錄——收錄近半年的注意股、處置股。</div>';
  const v = q.verdict || {};
  const verdict = v.kind === 'suspect'
    ? '<div class="jl-verdict ' + (v.high ? 'hi' : 'lo') + '">' + (v.high ? '🔴 高機率' : '🟢 低機率') + '・' + rdEsc(v.text) + '</div>'
      + '<div class="jl-th"><div class="jl-th-h">📐 明天（' + rdEsc(q.nextMd) + '）門檻</div>' + (v.lines || []).map(jlLineHtml).join('') + '</div>'
    : '<div class="jl-verdict ' + (v.kind === 'jailed' ? 'jail' : 'ok') + '">' + rdEsc(v.text || '') + '</div>';
  const records = (q.records || []).length
    ? '<table class="jl-table"><tr><th>公布</th><th>處置期間</th><th>出獄</th><th>原因</th><th>措施</th></tr>'
      + q.records.map((r) => '<tr><td>' + rdEsc((r.announce || '').slice(5)) + '</td><td>' + rdEsc(r.start.slice(5)) + '～' + rdEsc(r.end.slice(5))
        + (r.days ? '（' + r.days + ' 日' + (r.minutes ? '・' + r.minutes + ' 分盤' : '') + '）' : '') + '</td><td><b>' + rdEsc(r.release.slice(5)) + '</b></td><td>'
        + rdEsc(r.condition || '') + '</td><td>' + rdEsc(r.measure || '') + '</td></tr>').join('') + '</table>'
    : '<div class="jl-note">近半年沒有被處置過</div>';
  const att = (q.attention || []).length
    ? '<div class="jl-att">' + q.attention.map((a) => '<span title="' + rdEsc(a.info || '') + '"><b>' + rdEsc(a.md) + '</b> ' + rdEsc(jlClauseText(a.clauses)) + '</span>').join('') + '</div>'
    : '<div class="jl-note">近 30 個交易日沒有注意紀錄</div>';
  return '<div class="jl-card jl-qcard">'
    + '<div class="jl-card-h"><b>' + rdEsc(q.name) + '</b> <small>' + rdEsc(q.code) + '・' + rdEsc(q.market) + '</small>'
    + '<span class="jl-tier ' + rdEsc(q.tier.key) + '">' + q.tier.icon + ' ' + rdEsc(q.tier.label) + '</span>'
    + '<button type="button" class="jl-chart" data-jl-chart="' + rdEsc(q.code) + '" data-jl-name="' + rdEsc(q.name) + '">K線圖</button></div>'
    + '<div class="jl-sub">處置前科 ' + q.jailCount + ' 次' + (q.latestClause ? '・最近任款 ' + rdEsc(q.latestClause.md) + ' ' + rdEsc(jlClauseText(q.latestClause.clauses)) : '') + '</div>'
    + '<div class="jl-sec-t">明天判定</div>' + verdict
    + '<div class="jl-sec-t">處置紀錄</div>' + records
    + '<div class="jl-sec-t">近 30 個交易日注意（滑鼠移上去看內容）</div>' + att
    + '</div>';
}
function renderJailQuery(){
  const el = document.getElementById('jlResult');
  if (el) el.innerHTML = jailQueryHtml();
}
function jailWeeksHtml(d){
  return d.weeks.map((w) => '<div class="jl-week"><div class="jl-week-h">' + rdEsc(w.label) + ' <small>' + rdEsc(w.range) + '</small></div><div class="jl-days">'
    + w.days.map((day) => {
      const n = day.stocks.length;
      const body = day.closed ? '<div class="jl-closed">休市</div>'
        : n ? day.stocks.map((s) => '<div>' + jlStock(s.code, s.name, jlNew(s.new)) + '</div>').join('') : '<div class="jl-empty">—</div>';
      return '<div class="jl-day' + (day.past ? ' past' : '') + '"><div class="jl-day-h">' + rdEsc(day.md) + ' <small>(' + rdEsc(day.weekday) + ')</small>'
        + (n ? '<span class="jl-cnt">' + n + '</span>' : '') + '</div>' + body + '</div>';
    }).join('') + '</div></div>').join('');
}
function renderJail(){
  const body = document.getElementById('jailBody');
  const d = jlState.data;
  if (!d){
    body.innerHTML = '<div class="race-note">' + (jlState.error ? '載入失敗（' + rdEsc(jlState.error) + '）' : '載入中…') + '</div>';
    return;
  }
  if (d.status !== 'ok'){
    body.innerHTML = '<div class="race-note">' + rdEsc(d.message || '處置／注意資料還在抓，晚一點再看') + '</div>';
    return;
  }
  const next = rdEsc(d.nextMd) + '(' + rdEsc(d.nextWeekday) + ')';
  const marketDates = d.marketDates || {};
  const lag = marketDates.OTC && marketDates.OTC < d.dataDate ? '<div class="jl-note">上櫃今天的公告還沒進來（櫃買資料 ' + rdEsc(marketDates.OTC) + '），上櫃的嫌疑名單晚一點才會出現。</div>' : '';
  const head = '<div class="jl-meta">資料快照 ' + rdEsc(d.dataDate) + '・本頁更新於 ' + rdEsc(jlTime(d.updatedAt)) + '｜來源：證交所 / 櫃買中心 公開處置公告</div>'
    + '<div class="jl-pill">🕐 每日更新 —— 處置、出獄日皆為證交所 / 櫃買公開公告；本頁每天晚上公告出來後更新，不是即時報價。</div>'
    + '<div class="jl-box"><b>什麼是處置？</b>一檔股票短期漲跌太兇 / 週轉太高，證交所會列「注意」；累積多次就「<b>處置</b>」—— 改成<b>分盤集合競價</b>讓它冷靜。<br>'
    + '<b>2026/8/10 新制</b>：撮合由舊制每 5 / 20 分鐘加快到<b>約每 2 分鐘一次</b>，處置期間也由 10 個營業日縮短為 <b>5 個營業日</b>（當沖比重過高加重為 7 日），期滿次一交易日「<b>出獄</b>」恢復正常。</div>';
  const query = '<div class="jl-h">🔎 個股前科查詢 <small>打股號 → 看它的處置前科・最近任款・明天判定</small></div>'
    + '<div class="jl-box">收錄今日<b>在關 + 嫌疑 + 入獄 + 老大慣犯</b>的股（共 <b>' + d.index.length + '</b> 檔）；等級分 🆕 新嫌 → 🔒 前科犯 → 👑 老大級慣犯（被關越多次越上去）。明天判定用<b>公開收盤價</b>依證交所 / 櫃買規則推算，<b>非即時報價、非選股建議</b>。</div>'
    + '<div class="jl-q"><input id="jlQ" inputmode="numeric" placeholder="輸入股號，例 3026" value="' + rdEsc(jlState.queryCode) + '"><button type="button" data-jl-go>查前科</button></div>'
    + '<div id="jlResult">' + jailQueryHtml() + '</div>';
  const weeks = '<div class="jl-h">🗓 一週出獄時間表 <small>處置期滿・恢復正常交易的日子（共 ' + d.pendingCount + ' 檔待出獄）</small></div>' + jailWeeksHtml(d);
  const gangs = '<div class="jl-h">🏴 犯罪集團 <small>同族群 ≥2 檔被關或即將被關 = 資金熱區（標「新」= 今天剛進）</small></div>'
    + '<div class="jl-box">同一族群<b>同時多檔進處置</b>，常代表市場資金正集中在這個題材；整族一起關、也可能一起出獄。</div>'
    + (d.gangs.length ? '<div class="jl-grid">' + d.gangs.map((g) => '<div class="jl-card"><div class="jl-card-h"><b>' + rdEsc(g.group) + '</b><span class="jl-cnt big">' + g.stocks.length + ' 檔</span></div>'
      + g.stocks.map((s) => '<div class="jl-row">' + jlStock(s.code, s.name, jlNew(s.new)) + '<span class="jl-rel">出獄 ' + rdEsc(s.releaseMd) + '</span></div>').join('') + '</div>').join('') + '</div>'
      : '<div class="jl-note">目前沒有同族群 2 檔以上一起被關</div>');
  const startDay = d.newJail.length ? d.newJail[0].start : d.nextDay;
  const newJail = '<div class="jl-h">🔒 今日入獄 <small>' + rdEsc(startDay) + ' 生效・新進處置</small></div>'
    + '<div class="jl-note">資料日 ' + rdEsc(d.dataDate) + '・抓取 ' + rdEsc(jlTime(d.updatedAt)) + '（證交所 / 櫃買每天晚上公告，本頁跟著更新）</div>'
    + (d.newJail.length ? '<div class="jl-grid">' + d.newJail.map((j) => '<div class="jl-card"><div class="jl-card-h">' + jlCardStock(j.code, j.name, j.market)
      + '<span class="jl-badge jail">🔒 入獄</span></div><div class="jl-sub">' + (j.minutes ? j.minutes + ' 分盤' : '分盤') + '（剩 ' + j.daysLeft + ' 天）・' + rdEsc(j.measure || '') + '・' + rdEsc(j.releaseMd) + ' 出獄</div>'
      + '<div class="jl-why">' + rdEsc(j.condition || '') + '</div></div>').join('') + '</div>'
      : '<div class="jl-note">今天沒有新進處置</div>');
  const sc = d.suspectCounts || { high: 0, low: 0 };
  const suspects = '<div class="jl-h">🔍 嫌疑名單 <small>每天更新・明天(' + next + ')收盤若符合條件 → 會被關（🔴 高機率 ' + sc.high + '・🟢 低機率 ' + sc.low + '）</small></div>'
    + '<div class="jl-box">依證交所 / 櫃買處置辦法用<b>公開收盤價</b>推算——<b>明天(' + next + ')收盤若再符合條件</b>，這些股高機率會被處置（處置中的會延長）。僅為<b>制度示範與風險提醒</b>，非即時報價、非選股建議。</div>'
    + (d.suspects.length ? '<div class="jl-grid">' + d.suspects.map((s) => '<div class="jl-card"><div class="jl-card-h">' + jlCardStock(s.code, s.name, s.market)
      + '<span class="jl-badge ' + (s.high ? 'hi' : 'lo') + '">' + (s.high ? '🔴 高機率' : '🟢 低機率') + '</span></div>'
      + '<div class="jl-status">' + rdEsc(s.status) + '</div>'
      + '<div class="jl-th"><div class="jl-th-h">📐 明天門檻</div>' + (s.lines.length ? s.lines.map(jlLineHtml).join('') : '<div class="jl-line note">' + (s.missingBars ? '今天的日K還沒進來，門檻晚一點算' : '明天再被公布一次注意就會' + (s.jailed ? '延長' : '被關')) + '</div>') + '</div></div>').join('') + '</div>'
      + '<div class="jl-copy"><div class="jl-copy-h">📋 可直接複製貼上 <button type="button" data-jl-copy>複製</button></div><textarea id="jlCopyText" readonly rows="8">' + rdEsc(d.copyText || '') + '</textarea></div>'
      : '<div class="jl-note">明天沒有一次就會被關的股票</div>');
  const first = '<div class="jl-h">🆕 今日第一次第一款 <small>10 個營業日內首次觸及第一款（累積會走向處置）</small></div>'
    + (d.firstTime.length ? '<div class="jl-grid">' + d.firstTime.map((f) => '<div class="jl-card"><div class="jl-card-h">' + jlCardStock(f.code, f.name, f.market)
      + '<span class="jl-badge first">🆕 第一次</span></div><div class="jl-sub">10日第一次・參考日 ' + rdEsc(jlMd(d.dataDate)) + '</div></div>').join('') + '</div>'
      : '<div class="jl-note">今天沒有第一次觸及第一款的股票</div>');
  const index = '<div class="jl-h">📇 個股處置前科索引 <small>近 3 個月曾被處置、近 25 個交易日曾被注意的股，點股號看該股處置紀錄與出關日</small></div>'
    + '<details class="jl-index"><summary>展開全部 ' + d.index.length + ' 檔個股索引</summary><div class="jl-index-grid">'
    + d.index.map((r) => jlStock(r.code, r.name, r.jailed ? ' 🔒' : (r.tier === 'boss' ? ' 👑' : ''))).join('') + '</div></details>';
  const faq = '<div class="jl-h">❓ 處置股常見問題 <small>制度面的公開規則整理，非買賣建議</small></div>'
    + [['處置股會怎樣？', '被列入處置的股票改採分盤集合競價，2026/8/10 新制後約每 2 分鐘撮合一次；委託達一定數量要預收款券，第二次以上處置則全部預收。可以買也可以賣，只是成交變慢、流動性變差。'],
       ['處置股多久出關？', '2026/8/10 新制後處置期間為 5 個營業日（舊制 10 個營業日；當沖比重過高等情形加重為 7 日），期滿次一營業日恢復正常交易，也就是俗稱的「出關」或「出獄」。本頁每天列出處置中個股的出關日與一週出獄時間表。'],
       ['處置股票可以賣嗎？', '可以。處置期間仍可買賣，只是改為分盤撮合、成交速度較慢，且可能須預收款券或限制信用交易；以證交所 / 櫃買中心公告與券商規定為準。'],
       ['怎麼查某檔股票有沒有被處置、什麼時候出關？', '用本頁「個股前科查詢」輸入股號，可看到它目前是否在處置中、過去的處置前科與出關日；資料每天依證交所 / 櫃買中心公開處置公告更新。']]
      .map(([q, a]) => '<div class="jl-box"><b class="jl-faq-q">' + q + '</b>' + a + '</div>').join('');
  const foot = '<div class="jl-foot">資料來源：臺灣證券交易所 / 證券櫃檯買賣中心 公開注意、處置公告（每日快照，非即時報價）。本頁整理公開交易制度資訊供教學參考，<b>不構成任何買賣建議</b>；投資有風險，盈虧自負。</div>';
  body.innerHTML = head + lag + (jlState.error ? '<div class="race-note">更新失敗（' + rdEsc(jlState.error) + '），先顯示上一次的資料</div>' : '')
    + query + weeks + gangs + newJail + suspects + first + index + faq + foot;
}
function openJailPanel(){
  document.getElementById('jailModal').hidden = false;
  renderJail();
  jlLoad();
}
function closeJailPanel(){ document.getElementById('jailModal').hidden = true; }
document.getElementById('jailClose').addEventListener('click', closeJailPanel);
document.getElementById('jailModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeJailPanel(); });
document.getElementById('jailBody').addEventListener('click', (e) => {
  const t = e.target;
  const chart = t.closest('[data-jl-chart]');
  if (chart){ openStockChart(chart.dataset.jlChart, chart.dataset.jlName); return; }
  const stk = t.closest('[data-jl-code]');
  if (stk){ const input = document.getElementById('jlQ'); if (input) input.value = stk.dataset.jlCode; jlQuery(stk.dataset.jlCode); return; }
  if (t.closest('[data-jl-go]')){ jlQuery((document.getElementById('jlQ') || {}).value); return; }
  if (t.closest('[data-jl-copy]')){
    const area = document.getElementById('jlCopyText');
    const btn = t.closest('[data-jl-copy]');
    if (!area) return;
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (err){ ok = false; }
    if (navigator.clipboard){ navigator.clipboard.writeText(area.value).catch(() => {}); ok = true; }
    btn.textContent = ok ? '已複製 ✓' : '請手動選取';
    setTimeout(() => { btn.textContent = '複製'; }, 1800);
  }
});
document.getElementById('jailBody').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'jlQ') jlQuery(e.target.value);
});
setInterval(() => {
  // 面板開著就每 10 分鐘問一次（公告每天晚上才變，平常不用常抓）
  if (document.getElementById('jailModal').hidden || document.visibilityState === 'hidden') return;
  jlLoad();
}, 600000);
// ---- 營收成長榜（2026-10-09 使用者：照莊爸「每月營收成長榜 學員版」做一模一樣的）----
// 後端 /api/revenue?month=：公開資訊觀測站「每月營業收入彙總表」（排程主機每天 12:30／18:30／23:30 抓），公布日＝我們第一次抓到的日期，
// 收盤、成交量、公布隔日漲跌用我們的日K。段落照莊爸的順序：查個股營收、族群分析、多觀察分析（我們用自選股）、
// 火箭烏龜數據分析（全市場統計、散點圖、歷月統計、族群／多觀察 × 隔日、合併完整清單）、懸賞榜、全部公司總表。
const RV_GROUP_INDEX = (() => {
  const m = {};
  for (const g of GROUPS) for (const s of g.stocks) (m[s.code] = m[s.code] || []).push(g.name);
  return m;
})();
const rvState = { data: null, loading: false, error: null, query: null, queryCode: '', queryLoading: false,
  minN: 3, topN: 20, day: '', boardDay: null, boardMin: 30, boardVol: 0, tab: 'pos', market: 'all', group: 'all', search: '',
  show: 100, sortKey: 'yoy', sortDir: -1, rtOpen: true, open: {}, expand: {}, mark: '' };
// 2026-10-09 使用者：查詢旁邊加「只看火箭」「只看烏龜」兩顆篩選（族群分析、多觀察、懸賞榜、總表都套用；全市場統計不變）
const RV_MARK_LABEL = { accel: '🚀 火箭', decel: '🐢 烏龜' };
const rvMarkOk = (o) => !rvState.mark || !!(o && o[rvState.mark]);
async function rvLoad(month){
  if (rvState.loading) return;
  rvState.loading = true;
  if (!document.getElementById('revModal').hidden) renderRevenue();
  try {
    const res = await fetch('/api/revenue' + (month ? '?month=' + encodeURIComponent(month) : ''));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const d = await res.json();
    rvState.data = d;
    if (rvState.boardDay === null || (rvState.boardDay && !(d.announceDays || []).includes(rvState.boardDay))) rvState.boardDay = d.latestDay || '';
    if (rvState.day && !(d.announceDays || []).includes(rvState.day)) rvState.day = '';
    rvState.error = null;
  } catch (e){
    rvState.error = e.message || String(e);
  } finally {
    rvState.loading = false;
    if (!document.getElementById('revModal').hidden) renderRevenue();
  }
}
async function rvQuery(code){
  code = String(code || '').replace(/[^0-9A-Za-z]/g, '');
  rvState.queryCode = code;
  const input = document.getElementById('rvQ');
  if (input) input.value = code;
  if (!code){ rvState.query = null; rvRenderQuery(); return; }
  rvState.queryLoading = true;
  rvRenderQuery();
  const el = document.getElementById('rvResult');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  try {
    const res = await fetch('/api/revenue-stock?code=' + encodeURIComponent(code));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    rvState.query = await res.json();
  } catch (e){
    rvState.query = { status: 'error', message: e.message || String(e) };
  } finally {
    rvState.queryLoading = false;
    rvRenderQuery();
  }
}
function rvRows(){
  const d = rvState.data;
  if (!d || !Array.isArray(d.rows)) return [];
  if (d._rows) return d._rows;
  const idx = {};
  d.fields.forEach((k, i) => { idx[k] = i; });
  d._rows = d.rows.map((r) => {
    const o = {};
    for (const k in idx) o[k] = r[idx[k]];
    o.groups = RV_GROUP_INDEX[o.code] || [];
    o.accel = o.yoy != null && o.prevYoy != null && o.yoy - o.prevYoy >= 10;
    o.decel = o.yoy != null && o.prevYoy != null && o.yoy - o.prevYoy <= -10;
    o.warn = (o.yoy != null && o.yoy < 0) || (o.cumYoy != null && o.cumYoy < 0);
    return o;
  });
  d._byCode = {};
  for (const o of d._rows) d._byCode[o.code] = o;
  return d._rows;
}
const rvMonthLabel = (m) => m ? m.slice(0, 4) + '/' + m.slice(5, 7) : '';
const rvMd = (iso) => jlMd(iso);
function rvPct(v, digits){
  if (v == null || Number.isNaN(v)) return '—';
  return (v > 0 ? '+' : '') + Number(v).toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }) + '%';
}
const rvCls = (v) => v == null ? '' : v > 0 ? 'rv-up' : v < 0 ? 'rv-down' : '';
const rvTierOf = (v) => v == null ? 'tnone' : v >= 100 ? 't100' : v >= 50 ? 't50' : v >= 30 ? 't30' : v >= 0 ? 't0' : 'tneg';
const rvIcon = (o) => (o.accel ? '🚀' : o.decel ? '🐢' : '') + (o.warn ? '⚠️' : '');
function rvMedian(values){
  const s = values.filter((v) => v != null).sort((a, b) => a - b);
  if (!s.length) return null;
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function rvAvg(values){
  const v = values.filter((x) => x != null);
  if (!v.length) return null;
  return { avg: v.reduce((a, b) => a + b, 0) / v.length, up: v.filter((x) => x > 0).length / v.length * 100, n: v.length };
}
const rvAvgHtml = (st) => st ? '<span class="' + rvCls(st.avg) + '">' + rvPct(st.avg, 1) + '</span><small>' + Math.round(st.up) + '% 漲・' + st.n + ' 檔</small>' : '—';
function rvDayTag(o){
  const d = rvState.data;
  if (!o.announce) return '';
  if (!o.known) return '';   // 公布日不確定（第一次抓就在）：卡片不標，滑鼠提示裡有「前」
  return o.announce === d.latestDay ? '<span class="rv-new">📅' + rvMd(o.announce) + '</span>' : '';
}
function rvTitle(o){
  return o.name + '・年增 ' + rvPct(o.yoy, 2) + '・上月年增 ' + rvPct(o.prevYoy, 2) + '・月增 ' + rvPct(o.mom, 2) + '・累計年增 ' + rvPct(o.cumYoy, 2)
    + (o.announce ? '・公布 ' + rvMd(o.announce) + (o.known ? '' : ' 前') : '') + (o.note ? '\\n' + o.note : '');
}
function rvCard(o, code, name){
  if (!o) return '<div class="rv-card tnone" title="還沒公布"><div class="n">⏳ ' + rdEsc(code) + ' ' + rdEsc(name || '') + '</div><div class="y">&nbsp;</div><div class="d">未公布</div></div>';
  const next = o.next != null ? '<span class="' + rvCls(o.next) + '">' + rvPct(o.next, 1) + '</span>' : '—';
  return '<button type="button" class="rv-card ' + rvTierOf(o.yoy) + '" data-rv-code="' + rdEsc(o.code) + '" title="' + rdEsc(rvTitle(o)) + '">'
    + '<div class="n">' + rvIcon(o) + rdEsc(o.code) + ' ' + rdEsc(o.name) + '</div>'
    + '<div class="y">' + (o.yoy == null ? '—' : rvPct(Math.round(o.yoy), 0)) + '</div>'
    + '<div class="d">隔日 ' + next + ' ' + rvDayTag(o) + '</div></button>';
}
function rvGroupStats(members){
  const by = rvState.data._byCode;
  const pub = members.map((s) => by[s.code]).filter(Boolean);
  return {
    total: members.length, pub, published: pub.length,
    positive: pub.filter((o) => o.yoy != null && o.yoy > 0).length,
    listed: pub.filter((o) => o.yoy != null && o.yoy >= 30).length,
    accel: pub.filter((o) => o.accel), decel: pub.filter((o) => o.decel),
    median: rvMedian(pub.map((o) => o.yoy)),
    all: rvAvg(pub.map((o) => o.next)),
  };
}
function rvIndustryGroups(){
  return GROUPS.map((g) => ({ name: g.name, members: g.stocks, st: rvGroupStats(g.stocks) }))
    .filter((g) => g.st.published >= rvState.minN && g.st.median != null)
    .sort((a, b) => b.st.median - a.st.median);
}
function rvWatchGroups(){
  const names = {};
  const codes = [];
  for (const g of wl.data.groups) for (const it of g.items){
    if (!names[it.code]){ codes.push(it.code); names[it.code] = it.name || (WL_GROUP_INDEX[it.code] || {}).name || ''; }
  }
  const by = rvState.data._byCode;
  const byGroup = {};
  const outside = [];
  for (const c of codes){
    const gs = RV_GROUP_INDEX[c];
    const item = { code: c, name: names[c] || ((by[c] || {}).name) || '' };
    if (gs && gs.length) (byGroup[gs[0]] = byGroup[gs[0]] || []).push(item);
    else outside.push(item);
  }
  const list = Object.entries(byGroup).map(([name, members]) => ({ name, members, st: rvGroupStats(members) }))
    .sort((a, b) => (b.st.median == null ? -1e9 : b.st.median) - (a.st.median == null ? -1e9 : a.st.median));
  if (outside.length) list.push({ name: '自選・族群外', members: outside, st: rvGroupStats(outside), star: true });
  return { list, codes, published: codes.filter((c) => by[c]).length };
}
function rvMedPill(v){
  return '<div class="rv-med"><span class="rv-chip ' + rvTierOf(v) + '">' + rvPct(v, 1) + '</span><small>年增中位</small></div>';
}
function rvGroupRow(g, i, all){
  const st = g.st;
  let cards;
  if (all){
    const by = rvState.data._byCode;
    const pub = g.members.filter((s) => by[s.code] && rvMarkOk(by[s.code])).map((s) => by[s.code]).sort((a, b) => (b.yoy == null ? -1e9 : b.yoy) - (a.yoy == null ? -1e9 : a.yoy));
    cards = pub.map((o) => rvCard(o)).concat(rvState.mark ? [] : g.members.filter((s) => !by[s.code]).map((s) => rvCard(null, s.code, s.name)));
  } else {
    cards = st.pub.filter((o) => o.yoy != null && o.yoy >= 30 && rvMarkOk(o) && (!rvState.day || (o.known && o.announce === rvState.day)))
      .sort((a, b) => b.yoy - a.yoy).map((o) => rvCard(o));
  }
  const sub = all
    ? '已公布 ' + st.published + ' / ' + st.total + ' 檔・' + st.positive + '/' + st.published + ' 年增為正'
    : '已公布 ' + st.published + ' / 名單 ' + st.total + ' 檔(' + Math.round(st.published / st.total * 100) + '%)・' + st.positive + '/' + st.published
      + ' 年增為正・上榜 ' + st.listed + '<br>🚀 ' + st.accel.length + '・🐢 ' + st.decel.length + '・全族隔日 '
      + (st.all ? '<span class="' + rvCls(st.all.avg) + '">' + rvPct(st.all.avg, 1) + '</span>' : '—');
  const cls = 'rv-grp' + (g.star ? ' star' : i < 3 ? ' r' + (i + 1) : '');
  return '<div class="' + cls + '"><div class="rv-gname"><span class="rv-rank">' + (g.star ? '⭐' : i + 1) + '</span><div><b>' + rdEsc(g.name) + '</b>'
    + '<div class="rv-gsub">' + sub + '</div></div></div>' + rvMedPill(st.median)
    + '<div class="rv-cards">' + (cards.join('') || '<span class="rv-note">' + (rvState.mark ? '沒有' + RV_MARK_LABEL[rvState.mark] : rvState.day ? '這天沒有上榜成員' : '沒有年增 ≥ 30% 的成員') + '</span>') + '</div></div>';
}
const RV_LEGEND = '<div class="rv-legend">顏色 = 年增：<span class="rv-chip t100">≥100%</span><span class="rv-chip t50">50~100%</span><span class="rv-chip t30">30~50%</span>'
  + '{extra}　🚀／🐢 = 比上月年增加速／放緩 10 點以上・⚠️ 年增或累計為負・隔日 = 公布後下一個交易日的漲跌・📅 = 最新一天公布</div>';
function rvDayOptions(cur, allLabel){
  const d = rvState.data;
  const rows = rvRows();
  const count = {};
  for (const o of rows) if (o.known && o.announce) count[o.announce] = (count[o.announce] || 0) + 1;
  return '<option value=""' + (cur ? '' : ' selected') + '>' + allLabel + '</option>'
    + (d.announceDays || []).slice().reverse().map((day) => '<option value="' + day + '"' + (day === cur ? ' selected' : '') + '>' + rvMd(day) + ' 公布（' + (count[day] || 0) + ' 檔）</option>').join('');
}
function rvSelect(key, options, cur){
  return '<select data-rv-set="' + key + '">' + options.map(([v, label]) => '<option value="' + v + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + label + '</option>').join('') + '</select>';
}
function rvIndustryHtml(groups){
  const d = rvState.data;
  const list = rvState.mark ? groups.filter((g) => g.st.pub.some((o) => o.yoy != null && o.yoy >= 30 && rvMarkOk(o) && (!rvState.day || (o.known && o.announce === rvState.day)))) : groups;
  const shown = rvState.topN ? list.slice(0, rvState.topN) : list;
  return '<div class="rv-sec"><div class="rv-h">🧭 族群分析 <small>' + rvMonthLabel(d.month) + ' 營收・只看已公布 ≥ ' + rvState.minN + ' 檔的族群（共 ' + list.length + ' 族，列前 '
    + shown.length + '）・年增中位由高到低・只列上榜成員（年增 ≥ 30%）' + (rvState.mark ? '・<b>只看' + RV_MARK_LABEL[rvState.mark] + '</b>' : '') + '</small></div>'
    + '<div class="rv-ctl">至少 ' + rvSelect('minN', [[1, '1 檔'], [2, '2 檔'], [3, '3 檔'], [5, '5 檔']], rvState.minN)
    + ' 列 ' + rvSelect('topN', [[10, '10 族'], [20, '20 族'], [30, '30 族'], [0, '全部']], rvState.topN)
    + ' <select data-rv-set="day">' + rvDayOptions(rvState.day, '📅 全部公布日') + '</select></div>'
    + RV_LEGEND.replace('{extra}', '') + shown.map((g, i) => rvGroupRow(g, i, false)).join('') + '</div>';
}
function rvWatchHtml(w){
  const d = rvState.data;
  const legend = RV_LEGEND.replace('{extra}', '<span class="rv-chip t0">0~30%</span><span class="rv-chip tneg">負成長</span>');
  if (!w.codes.length){
    return '<div class="rv-sec"><div class="rv-h">⭐ 多觀察分析 <small>自選股・' + rvMonthLabel(d.month) + ' 營收</small></div>'
      + '<div class="rv-note">還沒有自選股——在下方「自選股」加入股票後，這裡會照族群整理它們這個月的營收（好壞都標）。</div></div>';
  }
  const list = rvState.mark ? w.list.filter((g) => g.st.pub.some(rvMarkOk)) : w.list;
  return '<div class="rv-sec"><div class="rv-h">⭐ 多觀察分析 <small>自選股・' + rvMonthLabel(d.month) + ' 營收・已公布 ' + w.published + ' / ' + w.codes.length
    + ' 檔・有族群的照年增中位排序；族群外的殿後・好壞都標' + (rvState.mark ? '・<b>只看' + RV_MARK_LABEL[rvState.mark] + '</b>' : '') + '</small></div>' + legend
    + (list.map((g, i) => rvGroupRow(g, i, true)).join('') || '<div class="rv-note">自選股裡沒有' + RV_MARK_LABEL[rvState.mark] + '。</div>') + '</div>';
}
function rvCorr(points){
  if (points.length < 3) return null;
  const n = points.length;
  const mx = points.reduce((a, p) => a + p[0], 0) / n;
  const my = points.reduce((a, p) => a + p[1], 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (const [x, y] of points){ sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; syy += (y - my) ** 2; }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : null;
}
function rvScatter(sample, watchSet){
  const x0 = 50, x1 = 630, y0 = 14, y1 = 270;
  const cx = (v) => Math.max(-100, Math.min(300, v));
  const cy = (v) => Math.max(-10, Math.min(10, v));
  const X = (v) => (x0 + (cx(v) + 100) / 400 * (x1 - x0)).toFixed(1);
  const Y = (v) => (y1 - (cy(v) + 10) / 20 * (y1 - y0)).toFixed(1);
  let svg = '<svg class="rv-svg" viewBox="0 0 640 300" role="img" aria-label="年增率對公布隔日漲跌散點圖">';
  svg += '<line x1="' + x0 + '" y1="' + Y(0) + '" x2="' + x1 + '" y2="' + Y(0) + '" stroke="currentColor" stroke-opacity=".35"/>';
  svg += '<line x1="' + X(0) + '" y1="' + y0 + '" x2="' + X(0) + '" y2="' + y1 + '" stroke="currentColor" stroke-opacity=".35"/>';
  for (const t of [-100, 0, 100, 200, 300]) svg += '<text x="' + X(t) + '" y="292" text-anchor="middle">' + (t === 300 ? '300%+' : t + '%') + '</text>';
  for (const t of [10, 5, -5, -10]) svg += '<text x="' + (x0 - 6) + '" y="' + (Number(Y(t)) + 4) + '" text-anchor="end">' + (t > 0 ? '+' : '') + t + '%</text>';
  svg += '<text x="' + (x0 + 4) + '" y="' + (y0 + 10) + '">↑ 隔日漲跌</text><text x="' + x1 + '" y="' + (Number(Y(0)) - 6) + '" text-anchor="end">年增 →</text>';
  for (const o of sample) if (!watchSet.has(o.code)) svg += '<circle cx="' + X(o.yoy) + '" cy="' + Y(o.next) + '" r="2.6" fill="currentColor" fill-opacity=".28"><title>' + rdEsc(o.code + ' ' + o.name + ' 年增 ' + rvPct(o.yoy, 0) + ' → ' + rvPct(o.next, 1)) + '</title></circle>';
  for (const o of sample) if (watchSet.has(o.code)) svg += '<circle cx="' + X(o.yoy) + '" cy="' + Y(o.next) + '" r="5.5" fill="#f5b301" stroke="#a16207"><title>⭐ ' + rdEsc(o.code + ' ' + o.name + ' 年增 ' + rvPct(o.yoy, 0) + ' → ' + rvPct(o.next, 1)) + '</title></circle>';
  return svg + '</svg>';
}
function rvStatTable(head, defs, sample){
  return '<div class="rv-scroll"><table class="rv-table"><tr><th>' + head + '</th><th>檔數</th><th>隔日平均</th><th>上漲比例</th></tr>' + defs.map(([label, fn, tone]) => {
    const st = rvAvg(sample.filter(fn).map((o) => o.next));
    return '<tr class="' + (tone || '') + '"><td>' + label + '</td><td>' + (st ? st.n : 0) + '</td><td class="' + (st ? rvCls(st.avg) : '') + '">' + (st ? rvPct(st.avg, 1) : '—')
      + '</td><td>' + (st ? Math.round(st.up) + '%' : '—') + '</td></tr>';
  }).join('') + '</table></div>';
}
const RV_HIST_COLS = [['all', '全部', ''], ['accel', '🚀 加速', 'pink'], ['flat', '持平', ''], ['decel', '🐢 放緩', 'mint'], ['yoy100', '年增 ≥100%', 'pink'], ['warn', '⚠️ 有', 'mint'], ['nowarn', '沒 ⚠️', '']];
function rvHistoryHtml(){
  const h = rvState.data.history || [];
  const cell = (b, tone) => {
    if (!b || !b.n) return '<td class="' + tone + '">—</td>';
    const avg = b.sum / b.n;
    return '<td class="' + tone + '"><span class="' + rvCls(avg) + '">' + rvPct(avg, 1) + '</span><small>' + Math.round(b.up / b.n * 100) + '% 漲・' + b.n + ' 檔</small></td>';
  };
  const total = {};
  for (const [k] of RV_HIST_COLS) total[k] = { n: 0, up: 0, sum: 0 };
  for (const m of h) for (const [k] of RV_HIST_COLS){ total[k].n += m[k].n; total[k].up += m[k].up; total[k].sum += m[k].sum; }
  const rows = h.map((m) => '<tr><td>' + rvMonthLabel(m.month) + '</td>' + RV_HIST_COLS.map(([k, , tone]) => cell(m[k], tone)).join('') + '</tr>').join('');
  return '<div class="rv-h" style="font-size:15px;margin-top:14px">📚 歷月統計 <small>每月營收公布 → 隔日漲跌</small></div>'
    + (h.length ? '<div class="rv-scroll"><table class="rv-table"><tr><th>營收月份</th>' + RV_HIST_COLS.map(([, label, tone]) => '<th class="' + tone + '">' + label + '</th>').join('') + '</tr>'
      + rows + (h.length > 1 ? '<tr><td>合計</td>' + RV_HIST_COLS.map(([k, , tone]) => cell(total[k], tone)).join('') + '</tr>' : '') + '</table></div>'
      : '<div class="rv-note">還沒有累積到有公布日的月份。</div>')
    + '<div class="rv-note">每格 = 隔日平均漲跌，下面是上漲比例與檔數。🚀／🐢 = 年增比上個月多／少 10 個百分點以上；⚠️ = 年增或累計年增為負。'
    + '資料從 2026/09 營收開始記（公布日是我們每天三次抓觀測站彙總表時第一次出現的日期，10/09 起；10/09 以前就公布的公布日不確定、不算），之後每個月自動累積、不會消失。</div>';
}
function rvNextTable(kind, groups){
  const allOpen = !!rvState.expand[kind];
  const rows = groups.map((g) => {
    const st = g.st;
    const key = kind + ':' + g.name;
    const open = allOpen || rvState.open[key];
    const pubSorted = st.pub.slice().sort((a, b) => (b.next == null ? -1e9 : b.next) - (a.next == null ? -1e9 : a.next));
    const detail = open ? '<tr><td colspan="8"><div class="rv-list">' + pubSorted.map((o) => rvListItem(o, null)).join('') + '</div></td></tr>' : '';
    return '<tr><td>' + (g.star ? '⭐ ' : '') + rdEsc(g.name) + '</td><td>' + st.published + '</td><td class="pink">' + st.accel.length + '</td><td class="mint">' + st.decel.length + '</td>'
      + '<td class="pink">' + rvAvgHtml(rvAvg(st.accel.map((o) => o.next))) + '</td><td class="mint">' + rvAvgHtml(rvAvg(st.decel.map((o) => o.next))) + '</td>'
      + '<td>' + rvAvgHtml(st.all) + '</td><td><button type="button" class="rv-btn ghost" data-rv-open="' + rdEsc(key) + '">' + (open ? '收起' : '看全部') + '</button></td></tr>' + detail;
  }).join('');
  return '<div class="rv-scroll"><table class="rv-table"><tr><th>族群</th><th>已公布</th><th class="pink">🚀 檔數</th><th class="mint">🐢 檔數</th><th class="pink">🚀 隔日</th><th class="mint">🐢 隔日</th><th>全族隔日</th>'
    + '<th>名單 <button type="button" class="rv-btn ghost" data-rv-expand="' + kind + '">' + (allOpen ? '全部收起' : '全部展開') + '</button></th></tr>' + rows + '</table></div>';
}
function rvListItem(o, watchSet){
  const star = watchSet && watchSet.has(o.code) ? '⭐' : '';
  return '<div class="rv-li"><div>' + rvIcon(o) + '<button type="button" class="jl-stk" data-rv-code="' + rdEsc(o.code) + '"><span class="jl-code">' + rdEsc(o.code) + '</span> ' + rdEsc(o.name) + '</button>' + star
    + '</div><div>' + rvPct(o.prevYoy, 0) + ' → <b class="' + rvCls(o.yoy) + '">' + rvPct(o.yoy, 0) + '</b> <small>' + rdEsc(o.groups.join('、')) + '</small></div>'
    + '<div class="' + rvCls(o.next) + '">' + (o.next != null ? rvPct(o.next, 1) : '—') + '</div></div>';
}
function rvRocketHtml(groups, w){
  const d = rvState.data;
  const rows = rvRows();
  const sample = rows.filter((o) => o.next != null && o.yoy != null);
  const watchSet = new Set(w.codes);
  const rocket = rvAvg(sample.filter((o) => o.accel).map((o) => o.next));
  const turtle = rvAvg(sample.filter((o) => o.decel).map((o) => o.next));
  const fold = '<button type="button" class="rv-btn rv-fold" data-rv-fold>' + (rvState.rtOpen ? '收起' : '展開') + '</button>';
  const head = '<div class="rv-h">🚀🐢 火箭烏龜數據分析 <small>' + rvMonthLabel(d.month) + ' 營收・全市場 🚀 ' + (rocket ? rocket.n + ' 檔隔日 ' + rvPct(rocket.avg, 1) + '（' + Math.round(rocket.up) + '% 漲）' : '—')
    + '・🐢 ' + (turtle ? turtle.n + ' 檔隔日 ' + rvPct(turtle.avg, 1) + '（' + Math.round(turtle.up) + '% 漲）' : '—') + '</small>' + fold + '</div>';
  if (!rvState.rtOpen) return '<div class="rv-sec">' + head + '</div>';
  const yoyDefs = [['年增 ≥100%', (o) => o.yoy >= 100, 'pink'], ['50~100%', (o) => o.yoy >= 50 && o.yoy < 100], ['30~50%', (o) => o.yoy >= 30 && o.yoy < 50],
    ['0~30%', (o) => o.yoy >= 0 && o.yoy < 30], ['負成長', (o) => o.yoy < 0, 'mint']];
  const markDefs = [['🚀 加速（比上月多 10 點以上）', (o) => o.accel, 'pink'], ['持平', (o) => !o.accel && !o.decel], ['🐢 放緩（比上月少 10 點以上）', (o) => o.decel, 'mint'],
    ['⚠️ 年增或累計為負', (o) => o.warn, 'mint'], ['沒有 ⚠️', (o) => !o.warn]];
  const r = rvCorr(sample.map((o) => [Math.max(-100, Math.min(300, o.yoy)), o.next]));
  const gold = sample.filter((o) => watchSet.has(o.code)).sort((a, b) => a.next - b.next);
  const goldText = gold.length ? '⭐ 金點 = 自選股（游標停在點上看名稱）。自選股隔日由跌到漲：' + gold.map((o) => rvIcon(o) + rdEsc(o.code + ' ' + o.name) + ' 年增 ' + rvPct(o.yoy, 0)
    + ' → <span class="' + rvCls(o.next) + '">' + rvPct(o.next, 1) + '</span>').join('、') : '⭐ 金點 = 自選股（自選股裡還沒有公布後有隔日收盤的）。';
  const merged = new Map();
  for (const g of groups) for (const o of g.st.pub) merged.set(o.code, o);
  for (const c of w.codes) if (d._byCode[c]) merged.set(c, d._byCode[c]);
  const listOf = (fn) => [...merged.values()].filter(fn).sort((a, b) => (b.next == null ? -1e9 : b.next) - (a.next == null ? -1e9 : a.next));
  const rockets = listOf((o) => o.accel);
  const turtles = listOf((o) => o.decel);
  const sumText = (list) => { const st = rvAvg(list.map((o) => o.next)); return list.length + ' 檔・隔日平均 ' + (st ? rvPct(st.avg, 1) + '・' + Math.round(st.up) + '% 上漲（' + st.n + ' 檔有隔日）' : '—（還沒有隔日）'); };
  const market = sample.length
    ? '<div class="rv-tables">' + rvStatTable('年增級距', yoyDefs, sample) + rvStatTable('標記', markDefs, sample) + '</div>'
      + '<div class="rv-note">年增 vs 隔日漲跌 相關係數 r = ' + (r == null ? '—' : r.toFixed(2)) + '（0 = 沒關係、1 = 完全同方向）</div>'
      + rvScatter(sample, watchSet) + '<div class="rv-gold">' + goldText + '</div>'
    : '<div class="jl-box">這個月還沒有可以算「隔日」的公司。觀測站沒有每家公司的公布日期，我們從 ' + rdEsc(rvMd(d.baselineDay) || '第一次抓') + ' 起每天三次記錄第一次出現的時間；'
      + '在那之前就公布的公布日不確定，不列入統計。之後新公布的，隔天收盤後就會出現在這裡（9 月營收最後期限 10/12），下個月起整個月都有。</div>';
  return '<div class="rv-sec">' + head
    + '<div class="rv-h" style="font-size:15px">📊 全市場：' + Number(d.month.slice(5, 7)) + ' 月營收公布 vs 隔日漲跌</div>'
    + '<div class="rv-note">樣本 = 本月已公布、隔天有收盤的 ' + sample.length + ' 檔（全市場，不只自選股）；隔日 = 公布後下一個交易日收盤 vs 公布日收盤。公司可能盤中或盤後公布，這裡一律以「公布那天之後的第一個交易日」算。</div>'
    + market
    + rvHistoryHtml()
    + '<div class="rv-h" style="font-size:15px;margin-top:14px">🧭 族群分析 × 公布隔日漲跌 <small>族群分析目前列出的 ' + groups.length + ' 族（跟著上面「至少／列幾族」走），每族算已公布的全部成員</small></div>'
    + rvNextTable('g', groups)
    + '<div class="rv-h" style="font-size:15px;margin-top:14px">⭐ 多觀察分析 × 公布隔日漲跌 <small>只算自選股，「看全部」連持平的也列出來</small></div>'
    + (w.list.length ? rvNextTable('w', w.list) : '<div class="rv-note">還沒有自選股。</div>')
    + '<div class="rv-h" style="font-size:15px;margin-top:14px">🚀🐢 族群分析＋多觀察分析 合併完整清單 <small>隔日由高到低；兩區重複的只算一次；中間 = 年增率 上月 → 本月；小字 = 族群，⭐ = 自選股</small></div>'
    + '<div class="rv-list"><details class="pink"><summary>🚀 火箭 完整清單：' + sumText(rockets) + '</summary>' + rockets.map((o) => rvListItem(o, watchSet)).join('') + '</details>'
    + '<details class="mint"><summary>🐢 烏龜 完整清單：' + sumText(turtles) + '</summary>' + turtles.map((o) => rvListItem(o, watchSet)).join('') + '</details></div></div>';
}
function rvBoardRows(){
  return rvRows().filter((o) => o.yoy != null && o.yoy >= rvState.boardMin && rvMarkOk(o) && (!rvState.boardDay || (o.known && o.announce === rvState.boardDay))
    && (!rvState.boardVol || (o.volume || 0) >= rvState.boardVol)).sort((a, b) => b.yoy - a.yoy);
}
function rvBoardHtml(){
  const d = rvState.data;
  const list = rvBoardRows();
  const copy = list.map((o) => o.code + ' ' + o.name + ' 年增 ' + rvPct(o.yoy, 2)).join('\\n');
  const head = (rvState.boardDay ? rvMd(rvState.boardDay) + ' 公布 ' : '') + rvMonthLabel(d.month) + ' 營收・年增 ≥ ' + rvState.boardMin + '%'
    + (rvState.mark ? '・只看' + RV_MARK_LABEL[rvState.mark] : '') + '・共 ' + list.length + ' 檔';
  const fmtClose = (v) => v == null ? '—' : v >= 1000 ? Math.round(v).toLocaleString() : String(Number(v.toPrecision(3)));
  return '<div class="rv-board"><div class="rv-h">🎯 懸賞榜 <small>' + head + '</small></div>'
    + '<div class="rv-ctl" style="justify-content:flex-end">日期 <select data-rv-set="boardDay">' + rvDayOptions(rvState.boardDay, '全部公布日') + '</select>'
    + ' 門檻 ' + rvSelect('boardMin', [[30, '≥30%'], [50, '≥50%'], [100, '≥100%']], rvState.boardMin)
    + ' 量 ' + rvSelect('boardVol', [[0, '不限'], [100, '≥100 張'], [500, '≥500 張'], [1000, '≥1000 張']], rvState.boardVol)
    + ' <button type="button" class="rv-btn red" data-rv-copy>複製名單</button><textarea id="rvCopyText" style="position:absolute;left:-9999px;top:0" readonly>' + rdEsc(copy) + '</textarea></div>'
    + (list.length ? '<div class="rv-bgrid">' + list.map((o) => '<div class="rv-bi" data-rv-code="' + rdEsc(o.code) + '" title="' + rdEsc(rvTitle(o)) + '"><span class="c">' + rdEsc(o.code) + '</span>'
      + '<span class="nm">' + rdEsc(o.name) + (o.groups[0] ? '<span class="rv-gtag">' + rdEsc(o.groups[0]) + '</span>' : '')
      + '<small>' + fmtClose(o.close) + '・' + (o.volume != null ? Number(o.volume).toLocaleString() + ' 張' : '—') + '</small></span>'
      + '<span class="y">' + rvPct(o.yoy, 2) + '</span></div>').join('') + '</div>' : '<div class="rv-note">這個條件沒有股票。</div>')
    + '<div class="rv-note">收盤與成交量為 ' + rdEsc(d.priceDate || '—') + ' 證交所 / 櫃買開放資料（張 = 千股）；公布日 = 我們每天三次（12:30／18:30／23:30）抓公開資訊觀測站彙總表時第一次出現的日期。</div>'
    + '<span class="rv-stamp">WANTED</span></div>';
}
function rvTableRows(){
  const q = rvState.search.trim().toLowerCase();
  let rows = rvRows().filter((o) => (rvState.tab !== 'pos' || (o.yoy != null && o.yoy > 0))
    && (rvState.market === 'all' || o.market === rvState.market)
    && (rvState.group === 'all' || o.groups.includes(rvState.group))
    && rvMarkOk(o) && (!q || o.code.toLowerCase().includes(q) || String(o.name).toLowerCase().includes(q)));
  const key = rvState.sortKey;
  const dir = rvState.sortDir;
  const val = (o) => key === 'announce' ? (o.announce || '') : key === 'code' ? o.code : o[key];
  rows = rows.slice().sort((a, b) => {
    const x = val(a), y = val(b);
    if (x == null && y == null) return 0;
    if (x == null) return 1;
    if (y == null) return -1;
    return (x > y ? 1 : x < y ? -1 : 0) * dir;
  });
  if (rvState.tab === 'grp'){
    const out = [];
    const want = rvState.group === 'all' ? GROUPS.map((g) => g.name) : [rvState.group];
    for (const name of want){
      const members = rows.filter((o) => o.groups.includes(name));
      if (members.length) out.push({ header: name, n: members.length, median: rvMedian(members.map((o) => o.yoy)) }, ...members);
    }
    return out;
  }
  return rows;
}
function rvTableHtml(){
  const d = rvState.data;
  const rows = rvTableRows();
  const total = rows.filter((r) => !r.header).length;
  const limit = rvState.show || Infinity;
  const cols = [['#', ''], ['公司', 'code'], ['族群', ''], ['年增率', 'yoy'], ['月增率', 'mom'], ['累計年增', 'cumYoy'], ['月營收(億)', 'revYi'], ['收盤', 'close'], ['成交量(張)', 'volume'], ['公布日', 'announce']];
  const th = cols.map(([label, key]) => '<th' + (key ? ' data-rv-sort="' + key + '"' : '') + '>' + label + (key && key === rvState.sortKey ? (rvState.sortDir < 0 ? ' ▼' : ' ▲') : '') + '</th>').join('');
  let n = 0;
  const body = [];
  for (const o of rows){
    if (n >= limit) break;
    if (o.header){ body.push('<tr><td colspan="10" style="text-align:left;background:var(--panel-2);font-weight:700">' + rdEsc(o.header) + ' <small style="display:inline">' + o.n + ' 檔・年增中位 ' + rvPct(o.median, 1) + '</small></td></tr>'); continue; }
    n += 1;
    body.push('<tr><td>' + n + '</td><td><button type="button" class="jl-stk" data-rv-code="' + rdEsc(o.code) + '" title="' + rdEsc(rvTitle(o)) + '"><span class="jl-code">' + rdEsc(o.code) + '</span> <b>' + rdEsc(o.name) + '</b> <small>' + rdEsc(o.market) + '</small></button></td>'
      + '<td>' + (o.groups[0] ? '<span class="rv-gtag">' + rdEsc(o.groups[0]) + '</span>' : '—') + '</td>'
      + '<td class="' + rvCls(o.yoy) + '">' + rvPct(o.yoy, 2) + '</td><td class="' + rvCls(o.mom) + '">' + rvPct(o.mom, 2) + '</td><td class="' + rvCls(o.cumYoy) + '">' + rvPct(o.cumYoy, 2) + '</td>'
      + '<td>' + (o.revYi == null ? '—' : o.revYi >= 100 ? Math.round(o.revYi).toLocaleString() : o.revYi.toFixed(2)) + '</td>'
      + '<td>' + (o.close == null ? '—' : o.close) + '</td><td>' + (o.volume == null ? '—' : Number(o.volume).toLocaleString()) + '</td>'
      + '<td>' + (o.announce ? rvMd(o.announce) + (o.known ? '' : '前') : '—') + '</td></tr>');
  }
  const tabs = [['pos', '年增為正'], ['all', '全部已公布'], ['grp', '族群檢視']];
  return '<div class="rv-sec" id="rvTableSec"><div class="rv-ctl">月份 ' + rvMonthButtons() + '</div>'
    + '<div class="rv-ctl"><span class="rv-tabs">' + tabs.map(([k, label]) => '<button type="button" data-rv-tab="' + k + '" class="' + (rvState.tab === k ? 'active' : '') + '">' + label + '</button>').join('') + '</span>'
    + ' 市場 ' + rvSelect('market', [['all', '全部'], ['上市', '上市'], ['上櫃', '上櫃']], rvState.market)
    + ' 族群 ' + rvSelect('group', [['all', '全部']].concat(GROUPS.map((g) => [g.name, g.name])), rvState.group)
    + ' 搜尋 <input id="rvSearch" data-rv-set="search" placeholder="股號 / 名稱" value="' + rdEsc(rvState.search) + '">'
    + ' 顯示 ' + rvSelect('show', [[50, '50'], [100, '100'], [200, '200'], [0, '全部']], rvState.show) + '</div>'
    + '<div class="rv-note" style="text-align:right">符合 ' + total.toLocaleString() + ' 檔' + (total > n ? '，顯示前 ' + n : '') + '</div>'
    + '<div class="rv-scroll"><table class="rv-table rv-full"><tr>' + th + '</tr>' + body.join('') + '</table></div>'
    + '<div class="rv-note">怎麼看：年增率 = 當月營收 vs 去年同月；月增率 = vs 上月；累計年增 = 今年至今 vs 去年同期。營建、生技授權、一次性訂單等「認列型」產業單月數字起伏大，請搭配累計年增看。月營收單位為新台幣億元（官方千元 ÷ 100,000）。'
    + (d.month ? '' : '') + '</div></div>';
}
function rvMonthButtons(){
  const d = rvState.data;
  return (d.months || []).slice(0, 6).map((m) => '<button type="button" class="rv-mbtn' + (m === d.month ? ' active' : '') + '" data-rv-month="' + m + '">' + rvMonthLabel(m) + ' 營收</button>').join(' ');
}
function rvQueryHtml(){
  const q = rvState.query;
  if (rvState.queryLoading) return '<div class="rv-note">查詢中…</div>';
  if (!q) return '';
  if (q.status === 'error') return '<div class="rv-note">查詢失敗（' + rdEsc(q.message || '') + '），請稍後再試。</div>';
  if (q.status !== 'ok') return '<div class="rv-note">查無「' + rdEsc(rvState.queryCode) + '」的營收紀錄——收錄上市、上櫃公司（含 KY），興櫃不收。</div>';
  const groups = RV_GROUP_INDEX[q.code] || [];
  return '<div class="rv-qcard"><div class="jl-card-h"><b>' + rdEsc(q.name) + '</b> <small>' + rdEsc(q.code) + '・' + rdEsc(q.market) + (q.industry ? '・' + rdEsc(q.industry) : '') + '</small>'
    + groups.map((g) => '<span class="rv-gtag">' + rdEsc(g) + '</span>').join('')
    + (q.close != null ? ' <small>收盤 ' + q.close + '</small>' : '') + '<button type="button" class="jl-chart" data-rv-chart="' + rdEsc(q.code) + '" data-rv-name="' + rdEsc(q.name) + '">K線圖</button></div>'
    + '<div class="rv-scroll"><table class="rv-table"><tr><th>營收月份</th><th>年增率</th><th>比上月年增</th><th>月增率</th><th>累計年增</th><th>月營收(億)</th><th>公布日</th><th>公布隔日</th></tr>'
    + q.months.map((m) => '<tr><td>' + rvMonthLabel(m.month) + '</td><td class="' + rvCls(m.yoy) + '">' + rvPct(m.yoy, 2) + '</td>'
      + '<td>' + (m.accel == null ? '—' : (m.accel >= 10 ? '🚀 ' : m.accel <= -10 ? '🐢 ' : '') + (m.accel > 0 ? '+' : '') + m.accel.toFixed(1) + ' 點') + '</td>'
      + '<td class="' + rvCls(m.mom) + '">' + rvPct(m.mom, 2) + '</td><td class="' + rvCls(m.cumYoy) + '">' + rvPct(m.cumYoy, 2) + '</td><td>' + (m.revYi == null ? '—' : m.revYi) + '</td>'
      + '<td>' + (m.announce ? rvMd(m.announce) + (m.known ? '' : ' 前') : '—') + '</td><td class="' + rvCls(m.next) + '">' + (m.next != null ? rvPct(m.next, 2) : '—') + '</td></tr>').join('')
    + '</table></div>' + (q.months[0] && q.months[0].note ? '<div class="rv-note">備註：' + rdEsc(q.months[0].note) + '</div>' : '') + '</div>';
}
function rvRenderQuery(){
  const el = document.getElementById('rvResult');
  if (el) el.innerHTML = rvQueryHtml();
}
function renderRevenue(){
  const body = document.getElementById('revBody');
  const d = rvState.data;
  if (!d){
    body.innerHTML = '<div class="rv-note">' + (rvState.error ? '讀取失敗（' + rdEsc(rvState.error) + '），請稍後再試。' : '讀取中…') + '</div>';
    return;
  }
  if (d.status !== 'ok'){
    body.innerHTML = '<div class="rv-note">' + rdEsc(d.message || '營收資料還在抓，晚一點再看') + '</div>';
    return;
  }
  rvRows();
  const scrollTop = document.getElementById('revInner').scrollTop;
  const c = d.counts || {};
  const pub = d.published || {};
  const pubText = pub.sii0 || pub.otc0 || Object.values(pub)[0] || '';
  const m = d.month;
  const head = '<div class="rv-top"><span class="chips-title" style="font-size:22px">📈 每月營收成長榜</span><span class="rv-month">' + m.slice(0, 4) + ' 年 ' + Number(m.slice(5, 7)) + ' 月營收（隔月 1~10 號陸續公布）</span></div>'
    + '<div class="rv-meta">已公布 <b>' + (c.published || 0).toLocaleString() + '</b> 檔（上市 ' + (c.tse || 0) + ' / 上櫃 ' + (c.otc || 0) + '）・年增為正 <b>' + (c.positive || 0).toLocaleString() + '</b> 檔'
    + '・最後更新 ' + rdEsc(jlTime(d.fetched || d.updatedAt)) + (pubText ? '・觀測站出表 ' + rdEsc(pubText) : '')
    + (rvState.loading ? '・更新中…' : '') + '</div><div class="rv-months">' + rvMonthButtons() + '</div>'
    + (rvState.error ? '<div class="race-note">更新失敗（' + rdEsc(rvState.error) + '），先顯示上一次的資料</div>' : '');
  const query = '<div class="rv-sec"><div class="rv-h">🔎 查個股營收 <small>每個月的年增、月增、累計年增、公布日、公布隔日漲跌</small></div>'
    + '<div class="jl-q rv-qrow"><input id="rvQ" inputmode="numeric" placeholder="股號，例 2451" value="' + rdEsc(rvState.queryCode) + '"><button type="button" data-rv-go>查詢</button>'
    + [['accel', '🚀 只看火箭'], ['decel', '🐢 只看烏龜']].map(([k, label]) => '<button type="button" class="rv-mark ' + k + (rvState.mark === k ? ' active' : '') + '" data-rv-mark="' + k
      + '" title="族群分析、多觀察、懸賞榜、總表只顯示' + RV_MARK_LABEL[k] + '（年增比上個月' + (k === 'accel' ? '多' : '少') + ' 10 點以上）；再按一次取消">' + label + '（'
      + rvRows().filter((o) => o[k]).length + '）</button>').join('') + '</div>'
    + '<div id="rvResult">' + rvQueryHtml() + '</div></div>';
  const groups = rvIndustryGroups();
  const shown = rvState.topN ? groups.slice(0, rvState.topN) : groups;
  const w = rvWatchGroups();
  const foot = '<div class="rv-foot">資料來源：公開資訊觀測站「每月營業收入彙總表」（上市、上櫃，含 KY），每天三次（12:30／18:30／23:30）更新；年增 / 月增 / 累計年增照官方公布數字。'
    + '公布日為我們第一次抓到該公司資料的日期（2026/09 營收從 10/09 開始記，之前就公布的標「前」）；收盤與成交量為證交所 / 櫃買開放資料。本頁整理公開資訊供參考，<b>不構成任何投資建議</b>，投資有風險，盈虧自負。</div>';
  body.innerHTML = head + query + rvIndustryHtml(groups) + rvWatchHtml(w) + rvRocketHtml(shown, w) + rvBoardHtml() + rvTableHtml() + foot;
  document.getElementById('revInner').scrollTop = scrollTop;
}
function rvRenderTable(){
  const sec = document.getElementById('rvTableSec');
  if (!sec) return renderRevenue();
  const focus = document.activeElement && document.activeElement.id === 'rvSearch';
  const caret = focus ? document.activeElement.selectionStart : 0;
  sec.outerHTML = rvTableHtml();
  if (focus){ const el = document.getElementById('rvSearch'); el.focus(); el.setSelectionRange(caret, caret); }
}
function openRevenuePanel(){
  document.getElementById('revModal').hidden = false;
  renderRevenue();
  rvLoad(rvState.data && rvState.data.month);
}
function closeRevenuePanel(){ document.getElementById('revModal').hidden = true; }
document.getElementById('revClose').addEventListener('click', closeRevenuePanel);
document.getElementById('revModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeRevenuePanel(); });
document.getElementById('revBody').addEventListener('click', (e) => {
  const t = e.target;
  const chart = t.closest('[data-rv-chart]');
  if (chart){ openStockChart(chart.dataset.rvChart, chart.dataset.rvName); return; }
  const month = t.closest('[data-rv-month]');
  if (month){ rvState.boardDay = null; rvLoad(month.dataset.rvMonth); return; }
  if (t.closest('[data-rv-go]')){ rvQuery((document.getElementById('rvQ') || {}).value); return; }
  const mark = t.closest('[data-rv-mark]');
  if (mark){ rvState.mark = rvState.mark === mark.dataset.rvMark ? '' : mark.dataset.rvMark; renderRevenue(); return; }
  if (t.closest('[data-rv-fold]')){ rvState.rtOpen = !rvState.rtOpen; renderRevenue(); return; }
  const open = t.closest('[data-rv-open]');
  if (open){ const k = open.dataset.rvOpen; rvState.open[k] = !rvState.open[k]; renderRevenue(); return; }
  const expand = t.closest('[data-rv-expand]');
  if (expand){ const k = expand.dataset.rvExpand; rvState.expand[k] = !rvState.expand[k]; rvState.open = {}; renderRevenue(); return; }
  const tab = t.closest('[data-rv-tab]');
  if (tab){ rvState.tab = tab.dataset.rvTab; rvRenderTable(); return; }
  const sort = t.closest('[data-rv-sort]');
  if (sort){
    const k = sort.dataset.rvSort;
    if (rvState.sortKey === k) rvState.sortDir = -rvState.sortDir; else { rvState.sortKey = k; rvState.sortDir = k === 'code' ? 1 : -1; }
    rvRenderTable();
    return;
  }
  if (t.closest('[data-rv-copy]')){
    const area = document.getElementById('rvCopyText');
    const btn = t.closest('[data-rv-copy]');
    if (!area) return;
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (err){ ok = false; }
    if (navigator.clipboard){ navigator.clipboard.writeText(area.value).catch(() => {}); ok = true; }
    btn.textContent = ok ? '已複製 ✓' : '請手動選取';
    setTimeout(() => { btn.textContent = '複製名單'; }, 1800);
    return;
  }
  const stk = t.closest('[data-rv-code]');
  if (stk && !t.closest('select')){ rvQuery(stk.dataset.rvCode); }
});
document.getElementById('revBody').addEventListener('change', (e) => {
  const el = e.target.closest('[data-rv-set]');
  if (!el || el.tagName !== 'SELECT') return;
  const key = el.dataset.rvSet;
  const numeric = ['minN', 'topN', 'boardMin', 'boardVol', 'show'];
  rvState[key] = numeric.includes(key) ? Number(el.value) : el.value;
  if (['market', 'group', 'show'].includes(key)) rvRenderTable(); else renderRevenue();
});
document.getElementById('revBody').addEventListener('input', (e) => {
  if (e.target.id !== 'rvSearch') return;
  rvState.search = e.target.value;
  rvRenderTable();
});
document.getElementById('revBody').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'rvQ') rvQuery(e.target.value);
});
setInterval(() => {
  // 面板開著就每 10 分鐘問一次（彙總表每天抓三次）
  if (document.getElementById('revModal').hidden || document.visibilityState === 'hidden') return;
  rvLoad(rvState.data && rvState.data.month);
}, 600000);
document.querySelectorAll('.toolbar-bottom .tb-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.label === '自選股'){ openWatchPanel(); return; }        // 2026-10-05 使用者：自選股
    if (btn.dataset.label === '飆股雷達'){ openGrailPanel(); return; }     // 2026-10-07 使用者：照莊爸 App 的飆股雷達
    if (btn.dataset.label === '處置監獄'){ openJailPanel(); return; }     // 2026-10-09 使用者：照莊爸處置監獄頁
    if (btn.dataset.label === '營收成長榜'){ openRevenuePanel(); return; }  // 2026-10-09 使用者：照莊爸每月營收成長榜
    if (btn.dataset.label === '個股盤中訊號追蹤'){ openTrackPanel(); return; }   // 2026-10-05 使用者：自選股的今日訊號＋提醒
    if (btn.dataset.label === '今日盤後籌碼排行'){ openChipsPanel(); return; }
    if (btn.dataset.label === '下午報'){ openSwingPanel(); return; }   // 2026-09-26 使用者：波段日報改名「下午報」
    if (btn.dataset.label === '創高黑龍'){ openHeilongPanel(); return; } // 2026-10-04 使用者：黑龍回測獨立面板
    if (btn.dataset.label === '創高黑選股'){ openPickerPanel(); return; } // 2026-10-04 使用者：創高黑選股
    if (btn.dataset.label === '健診'){ openCheckupPanel(); return; }    // 2026-09-28 使用者：每日持股健診
    if (btn.dataset.label === '問診'){ openDiagPanel(); return; }       // 2026-09-28 使用者：個股問診
    showToast('「' + btn.dataset.label + '」功能開發中');
  });
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
  const sigDayBtn = e.target.closest('.sig-day-btn');
  if (sigDayBtn){
    sigDayOffset = Number(sigDayBtn.dataset.offset) || 0;
    renderSignalCenter();
    return;
  }
  const blDayBtn = e.target.closest('.bl-day-btn');
  if (blDayBtn){
    const v = blDayBtn.dataset.offset;
    brewDayOffset = /^x/.test(v) ? v : (Number(v) || 0);
    renderSignalCenter();
    return;
  }
  const blDismissBtn = e.target.closest('.bl-dismiss-btn');
  if (blDismissBtn){
    const codes = (blDismissBtn.dataset.codes || '').split(',').filter(Boolean);
    brewDismissAll(codes);
    renderSignalCenter();
    return;
  }
  const blRestoreBtn = e.target.closest('.bl-restore-btn');
  if (blRestoreBtn){
    brewRestoreDismissed();
    renderSignalCenter();
    return;
  }
  const boBtn = e.target.closest('.bigorder-filter-btn');
  if (boBtn){
    const f = boBtn.dataset.filter;
    bigOrderFilters[f] = !bigOrderFilters[f];
    if (bigOrderFilters[f] && BIG_ORDER_EXCLUSIVE[f]) bigOrderFilters[BIG_ORDER_EXCLUSIVE[f]] = false;  // 最大／最新二選一
    try { localStorage.setItem('bigOrderFilters', JSON.stringify(bigOrderFilters)); } catch (err) { /* 記不住就算了 */ }
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
document.getElementById('smPinWindow').addEventListener('click', toggleSignalPin);
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
  updatePinButton();  // 電腦版 Chrome／Edge 才有「📌 釘選最上層」
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

// /api/groups 最近一份結果（2026-10-06 使用者：開盤時首頁報價要 10 幾秒，刀劍空、盤中333 一直顯示「還沒載入」）：
// 同一個 worker 執行環境裡 8 秒內再有人要（主畫面、釘選視窗、另一個螢幕、另一台電腦），直接給這一份，
// 不用每個視窗各自再去證交所抓一次。只存抓成功的結果；失敗不存。
let groupsMemo = null;
const GROUPS_MEMO_MS = 8000;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchQuoteChunk(codes, timeoutMs) {
  const exCh = codes.flatMap((c) => [`tse_${c}.tw`, `otc_${c}.tw`]).join("|");
  const url = `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${exCh}&json=1&delay=0`;
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
    if (!resp.ok) throw new Error(`TWSE API 回應錯誤: ${resp.status}`);
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

async function fetchQuotesFromBackend(codes) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  let data = null;
  try {
    const resp = await fetch("https://hanstock-production-b872.up.railway.app/api/hub/group-quotes?codes=" + encodeURIComponent(codes.join(",")), {
      headers: { Accept: "application/json", "User-Agent": "tw-groups/1.0 (+https://tw-groups.judystock.workers.dev)" },
      signal: ctrl.signal
    });
    if (!resp.ok) throw new Error("後端代抓 HTTP " + resp.status);
    data = await resp.json();
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
      if (/^\d{8}$/.test(d) && (d > quoteDate || (d === quoteDate && t > quoteTime))) { quoteDate = d; quoteTime = t; }
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
      const fallbackPrice = pos(parseFloat(item.o)) || pos(parseFloat(item.h)) || pos(parseFloat(item.l)) || prevClose;
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
    if (url.pathname === "/api/swing-report") {
      // 波段日報（2026-09-26 使用者）：後端每日保存，60 秒快取
      return await proxyHanstockBars("/api/hub/swing-report" + url.search, 60);
    }
    if (url.pathname === "/api/heilong") {
      // 下午報・黑龍回測（2026-09-28 使用者）：參數帶給後端算，60 秒快取
      return await proxyHanstockBars("/api/hub/heilong" + url.search, 60);
    }
    if (url.pathname === "/api/chip-radar") {
      // 籌碼暴增雷達（2026-10-04 使用者：照莊爸 zhuang.tw/radar 做，放在盤後籌碼排行）：集保週資料，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar" + url.search, 300);
    }
    if (url.pathname === "/api/grail-radar") {
      // 飆股雷達（2026-10-07 使用者：照莊爸 App 的飆股雷達做）：紫殺四個聖杯 15 個邏輯照時間點的名單，30 秒快取
      return await proxyHanstockBars("/api/hub/grail-radar" + url.search, 30);
    }
    if (url.pathname === "/api/jail") {
      // 處置監獄（2026-10-09 使用者：照莊爸「處置股・出獄與嫌疑名單」做）：證交所／櫃買注意、處置公告，2 分鐘快取
      return await proxyHanstockBars("/api/hub/jail" + url.search, 120);
    }
    if (url.pathname === "/api/jail-stock") {
      // 處置監獄的個股前科查詢，60 秒快取
      return await proxyHanstockBars("/api/hub/jail/stock" + url.search, 60);
    }
    if (url.pathname === "/api/revenue") {
      // 營收成長榜（2026-10-09 使用者：照莊爸「每月營收成長榜」做）：觀測站每月營收彙總表＋公布日＋隔日漲跌，2 分鐘快取
      return await proxyHanstockBars("/api/hub/revenue" + url.search, 120);
    }
    if (url.pathname === "/api/revenue-stock") {
      // 營收成長榜的查個股營收（每個月的年增、公布日、隔日漲跌），60 秒快取
      return await proxyHanstockBars("/api/hub/revenue/stock" + url.search, 60);
    }
    if (url.pathname === "/api/chip-weekly") {
      // 籌碼週報（2026-10-10 使用者：照莊爸雷達頁的「籌碼週報・可回看 4 週」做）：每週一份摘要，5 分鐘快取
      return await proxyHanstockBars("/api/hub/chip-radar/weekly" + url.search, 300);
    }
    if (url.pathname === "/api/chip-radar-stock") {
      // 籌碼暴增雷達的個股查詢（九週軌跡、同族群、三大法人），60 秒快取
      return await proxyHanstockBars("/api/hub/chip-radar/stock" + url.search, 60);
    }
    if (url.pathname === "/api/picker") {
      // 創高黑選股（2026-10-04 使用者：照莊爸 App「創高黑」做）：模組參數帶給後端算，60 秒快取
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
    if (url.pathname === "/api/checkup") {
      // 每日持股健診（2026-09-28 使用者）：股號清單帶給後端，60 秒快取
      return await proxyHanstockBars("/api/hub/checkup" + url.search, 60);
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
    if (url.pathname === "/api/version") {
      return new Response(JSON.stringify({ build: BUILD_STAMP }), {
        headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store, must-revalidate" }
      });
    }
    if (url.pathname === "/api/groups") {
      if (groupsMemo && Date.now() - groupsMemo.at < GROUPS_MEMO_MS) {
        return new Response(groupsMemo.body, { headers: { "content-type": "application/json", "x-groups-memo": "hit" } });
      }
      try {
        // 休市日（週末、假日）與交易日 08:45 前，後端 session-close 說要暫留（held）時，用上一個交易日的
        // 日K收盤取代 TWSE 即時報價：2026-10-04（週日）TWSE 跑測試盤，即時報價不是 0 就是測試用的假價
        // （鴻海 276 漲停），首頁跟盤中333／刀劍空／醞釀發動全跟著亂。快照裡沒有的股票照舊用即時報價；
        // 快照抓不到就整個照舊；TWSE 整批失敗但有暫留快照時照樣回資料。
        const [quotesResult, sessionResult] = await Promise.allSettled([fetchQuotes(ALL_CODES), fetchSessionClose()]);
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
              volume: quotes[s.code]?.volume ?? null
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
          // 報價來源：mis＝這裡直接抓證交所、backend＝後端代抓、mis+backend＝缺的拿後端補
          quoteSource: held ? "close" : (meta.source || "mis")
        });
        groupsMemo = { at: Date.now(), body };
        return new Response(body, { headers: { "content-type": "application/json" } });
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
