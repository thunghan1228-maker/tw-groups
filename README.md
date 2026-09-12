# tw-groups

台股族群戰情室——Cloudflare Worker 單檔前端，資料來源是 TWSE 即時報價 API 與 HanStock 後端（Railway）的 Hub API。

## 結構

```
wrangler.toml         Worker 設定（name/main/compatibility_date）
src/index.js          實際部署的 Worker 原始碼（由 build/ 底下的原始檔組譯產生，不要手動改這個檔）
build/client_body.html  前端 HTML/CSS/JS 原始碼（實際要改介面就改這個檔）
build/tw-groups-draft.html  族群/個股清單資料（GROUPS 陣列）
build/assemble.js     組譯腳本：把 client_body.html + tw-groups-draft.html 組成 src/index.js
```

## 修改流程

1. 改 `build/client_body.html`（介面/邏輯）或 `build/tw-groups-draft.html`（族群清單）
2. 執行 `node build/assemble.js` 重新產生 `src/index.js`
3. 本機用 `npx wrangler deploy` 部署，或用 Cloudflare Dashboard 的 Quick Edit 貼上 `src/index.js` 內容後 Save and deploy

## 後端

即時報價之外的資料（主力排行、盤中訊號、櫃買強弱、日線）都是代理到 HanStock 後端（見 `thunghan1228-maker/HanStock` repo）的 Hub API，網址寫在 `build/assemble.js` 的 `proxyHanstockBars` 裡。
