# data 分支：排程主機抓回來的公開資料鏡像

櫃買中心擋 HanStock 的正式站主機，上櫃股的三大法人買賣超由 GitHub Actions（tpex-data.yml）每個交易日 16:40 抓下來放這裡，
後端再從 raw.githubusercontent.com 拉回去。這個分支不部署、不含程式。

- tpex/3insti-latest.json：櫃買中心開放資料 tpex_3insti_daily_trading 的原始內容（最新一天）
- tpex/3insti-YYYY-MM-DD.json：每一天一份
- tpex/index.json：已有日期清單
