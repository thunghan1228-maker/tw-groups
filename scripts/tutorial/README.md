# 教學影片產生器（2026-10-13）

訊號中心各分頁、下方工具列各功能的教學影片：腳本自動操作網頁錄影，加字幕和紅框，配上女聲旁白（Google 翻譯的免費中文語音），合成 mp4。
畫面改了，重跑一次就能全部重錄。

## 需要
- Node 22 + Playwright（`/opt/node22/lib/node_modules/playwright`，或 `npm i playwright` 後改 record.js 的 require）
- Python 3：`pip install gTTS`
- ffmpeg（要有 libx264、aac）

## 用法
```
node build/assemble.js                         # 先產生 src/index.js（錄的是這份程式，不用先部署）
python3 scripts/tutorial/build.py              # 全部重錄
python3 scripts/tutorial/build.py sc-now sc-holder   # 只錄這幾支
```
- 影片寫到 `public/tut-assets/<key>.mp4`，清單 `public/tut-assets/index.json`（網站「🎬 影片教學」讀這份）。
- 播放網址是 `/videos/<key>.mp4`：Worker 處理 Range（iPhone／iPad Safari 播影片一定要分段讀取）。
- 影片內容（旁白、字幕、要點哪裡、要框哪裡）都在 `videos.py`；旁白要照「? 訊號教學」的文字，規則改了兩邊一起改。
- 行情資料是錄影當下從正式站 `/api/*` 抓的（本機起一個小伺服器：網頁用這份 src/index.js，API 轉給正式站）。
