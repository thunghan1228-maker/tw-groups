# tw-groups 備忘

- 盤中訊號中心（`SIGNAL_KINDS`）新增、改名或改規則的分頁，同一次修改就要同步更新「訊號教學」（`build/client_body.html` 的 `#signalHelp` 清單），順序跟分頁列一致。（2026-09-24 使用者要求）
- 改前端：改 `build/client_body.html`／`build/assemble.js` → `node build/assemble.js` 產生 `src/index.js` → `node --check src/index.js` → push `main` 會觸發 Cloudflare 部署（`.github/workflows/deploy.yml`）。
- 沙盒連不到 Railway 後端跟 workers.dev；要查正式環境資料用 GitHub Actions 的 `ops.yml`（HanStock API 路徑）或 `fetch-url.yml`。
