"""隔日沖券商籌碼鏡像（2026-10-17 使用者：機器人代碼 81／811／813、2359m 要隔日沖分點的買賣超）。

資料：富邦證券「主力進出」公開網頁（MoneyDJ，zco.djhtm，不用登入、沒有驗證碼），每檔一天的前 15 名買超、前 15 名賣超分點。
隔日沖分點組合是拿 10/01～10/16 對方的 811 名單（241 檔）反推的：下面 18 個分點「當天淨買超」加起來，
百分比、張數幾乎都對得上（一般 154 檔 153 檔誤差 10% 內；連兩日入榜 42 檔全對）。

811 算法（照對方名單反推）：
- 候選：當天漲 9% 以上的普通股（4 碼，不含 ETF），隔日沖分點有淨買超的。
  （原本只看我們族群＋處置前科名單，會少掉對方有的時碩工業、昇貿、鎂友益…；2026-10-17 使用者：範圍放寬，可能會多出對方沒列的）
- 隔日沖買超＝18 個分點裡「淨買超」的張數加總（淨賣超的不扣）。
- 一般：% ＝ 隔日沖買超 ÷ 當天成交量；(張數) ＝ 2 × 隔日沖買超。
- 前一個交易日也在榜（⁻連兩日入榜）：% ＝ (昨＋今隔日沖買超) ÷ (昨＋今成交量)；(張數) ＝ 昨＋今隔日沖買超。
- 排序照「今天單日」的 %；% 不到 8 的不寫張數。

每天一份 data 分支 tpex/daytrade/YYYY-MM-DD.json，清單 tpex/daytrade-index.json。
用法：python3 daytrade_mirror.py MAIN_DIR DATA_DIR [YYYY-MM-DD[:YYYY-MM-DD]]（不給日期＝今天）
"""

from __future__ import annotations

import gzip
import json
import os
import re
import sys
import time
import urllib.request
from datetime import date, datetime, timedelta, timezone

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tpex_quotes_mirror import QUOTES_URL, get_json, parse_day  # noqa: E402

TW = timezone(timedelta(hours=8))
UA = {"User-Agent": "Mozilla/5.0 (compatible; HanStock-mirror/1.0)", "Accept-Language": "zh-TW,zh;q=0.9"}
ZCO_URL = "https://fubon-ebrokerdj.fbs.com.tw/z/zc/zco/zco.djhtm?a={code}&e={d}&f={d}"
TWSE_URL = "https://www.twse.com.tw/rwd/zh/afterTrading/MI_INDEX?date={d}&type=ALLBUT0999&response=json"
# 分點代號（網址 b= 的值）→ 名稱
BRANCHES = {
    "9268": "凱基-台北", "5850": "統一", "1560": "港商野村", "9600": "富邦證券", "9100": "群益金鼎", "9227": "凱基-城中",
    "0037003700390063": "國票-敦北法人", "003700370039005a": "國票-安和", "9200": "凱基", "9300": "華南永昌", "5854": "統一-城中",
    "9666": "富邦-南屯", "9692": "富邦-嘉義", "0039003600310043": "富邦-南京", "9676": "富邦-仁愛", "9812": "元大-台中",
    "9672": "富邦-員林", "9658": "富邦-建國",
}
MIN_CHANGE = 9.0
LOTS_FROM_PCT = 8
KEEP_DAYS = 60
ROW = re.compile(r'<a href="/z/zc/zco/zco0/zco0\.djhtm\?a=\w+&b=(\w+)&BHID=\w+">([^<]+)</a></TD>\s*<TD[^>]*>([\d,]+)</TD>\s*'
                 r'<TD[^>]*>([\d,]+)</TD>\s*<TD[^>]*>([\d,]+)</TD>\s*<TD[^>]*>([\d.]+)%</TD>', re.S)


def fetch_text(url: str, encoding: str = "utf-8", attempts: int = 4) -> str:
    last: Exception | None = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:  # noqa: S310
                return r.read().decode(encoding, "replace")
        except Exception as exc:  # noqa: BLE001
            last = exc
            time.sleep(4 * (attempt + 1))
    raise last if last else RuntimeError(url)


def num(text) -> float | None:
    try:
        return float(str(text).replace(",", "").strip())
    except ValueError:
        return None


def twse_quotes(day: date) -> dict[str, dict]:
    """上市：{代號: {name, close, chg(%), vol(張)}}；休市回空。"""
    payload = json.loads(fetch_text(TWSE_URL.format(d=day.strftime("%Y%m%d"))))
    out = {}
    for t in payload.get("tables") or []:
        if "每日收盤行情" not in str(t.get("title") or ""):
            continue
        f = t.get("fields") or []
        ic, iname, ivol, iclose, isign, idiff = (f.index(x) for x in ("證券代號", "證券名稱", "成交股數", "收盤價", "漲跌(+/-)", "漲跌價差"))
        for r in t.get("data") or []:
            close, diff, vol = num(r[iclose]), num(r[idiff]), num(r[ivol])
            if close is None or diff is None or not vol:
                continue
            sign = -1 if "-" in str(r[isign]) else 1
            prev = close - sign * diff
            if prev > 0:
                out[str(r[ic]).strip()] = {"name": str(r[iname]).strip(), "close": close, "chg": round(sign * diff / prev * 100, 2),
                                          "vol": round(vol / 1000), "mkt": "TSE"}
    return out


def tpex_quotes(data_dir: str, day: date) -> dict[str, dict]:
    """上櫃：先看 tpex-quotes 鏡像（每天 16:50 寫），沒有再直接抓櫃買。"""
    rows = None
    path = os.path.join(data_dir, "tpex", "quotes", f"{day:%Y-%m}.json.gz")
    if os.path.exists(path):
        with gzip.open(path, "rt", encoding="utf-8") as fh:
            rows = (json.load(fh).get("days") or {}).get(day.isoformat())
    if not rows:
        rows = parse_day(get_json(QUOTES_URL.format(d=day.strftime("%Y/%m/%d"))), day)
    out = {}
    for code, name, _o, _h, _l, close, change, volume in rows or []:
        prev = close - (change or 0)
        if prev > 0 and volume:
            out[code] = {"name": name.rstrip("*"), "close": close, "chg": round((change or 0) / prev * 100, 2), "vol": round(volume / 1000),
                         "mkt": "OTC"}
    return out


def zco(code: str, day: date) -> list[dict]:
    """這檔這天的前 15 買超（side=1）、前 15 賣超（side=-1）分點。"""
    text = fetch_text(ZCO_URL.format(code=code, d=day.isoformat()), "big5")
    rows = []
    for i, (b, name, buy, sell, net, _ratio) in enumerate(ROW.findall(text)):
        rows.append({"b": b, "name": name.strip(), "buy": int(buy.replace(",", "")), "sell": int(sell.replace(",", "")),
                     "net": int(net.replace(",", "")) * (1 if i % 2 == 0 else -1)})
    return rows


def load_day(data_dir: str, day: str) -> dict | None:
    path = os.path.join(data_dir, "tpex", "daytrade", f"{day}.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else None


def build(data_dir: str, day: date, prev_day: str | None) -> dict | None:
    quotes = {**tpex_quotes(data_dir, day), **twse_quotes(day)}
    if len(quotes) < 500:
        return None   # 休市
    prev = load_day(data_dir, prev_day) if prev_day else None
    prev_rows = {r["code"]: r for r in (prev or {}).get("rows") or []}
    cands = sorted(c for c, q in quotes.items() if re.fullmatch(r"[1-9]\d{3}", c) and q["chg"] >= MIN_CHANGE)
    rows = []
    for code in cands:
        q = quotes[code]
        try:
            brokers = zco(code, day)
        except Exception as exc:  # noqa: BLE001
            print("zco 失敗", code, exc, file=sys.stderr)
            continue
        time.sleep(1.2)
        mine = [(x["name"], x["net"]) for x in brokers if x["b"] in BRANCHES and x["net"] > 0]
        net = sum(n for _, n in mine)
        if net <= 0 or not q["vol"]:
            continue
        today_pct = net / q["vol"] * 100
        p = prev_rows.get(code)
        if p:
            pct, lots = (net + p["net"]) / (q["vol"] + p["vol"]) * 100, net + p["net"]
        else:
            pct, lots = today_pct, 2 * net
        # hold＝隔日沖手上的張數（連兩日入榜＝昨＋今），813 隔天開盤比例用
        rows.append({"code": code, "name": q["name"], "mkt": q["mkt"], "close": q["close"], "chg": q["chg"], "vol": q["vol"], "net": net,
                     "hold": net + (p["net"] if p else 0), "todayPct": round(today_pct, 1), "pct": round(pct),
                     "lots": lots if round(pct) >= LOTS_FROM_PCT else None, "two": bool(p), "brokers": sorted(mine, key=lambda x: -x[1])})
    rows.sort(key=lambda r: -r["todayPct"])
    return {"date": day.isoformat(), "prev": prev_day, "updated": datetime.now(TW).isoformat(timespec="seconds"),
            "branches": list(BRANCHES.values()), "candidates": len(cands), "rows": rows}


def main() -> None:
    _main_dir, data_dir = sys.argv[1], sys.argv[2]   # 第一個參數（main 分支目錄）放寬範圍後用不到，保留給排程的呼叫方式
    today = datetime.now(TW).date()
    if len(sys.argv) > 3:
        a, _, b = sys.argv[3].partition(":")
        start, end = date.fromisoformat(a), date.fromisoformat(b or a)
    else:
        start = end = today
    os.makedirs(os.path.join(data_dir, "tpex", "daytrade"), exist_ok=True)
    index_path = os.path.join(data_dir, "tpex", "daytrade-index.json")
    index = json.load(open(index_path, encoding="utf-8")) if os.path.exists(index_path) else {"dates": []}
    dates = set(index.get("dates") or [])
    day = start
    while day <= end:
        if day.weekday() < 5:
            prev_day = max((d for d in dates if d < day.isoformat()), default=None)
            try:
                out = build(data_dir, day, prev_day)
            except Exception as exc:  # noqa: BLE001
                print("失敗", day, exc, file=sys.stderr)
                out = None
            if out:
                json.dump(out, open(os.path.join(data_dir, "tpex", "daytrade", f"{day}.json"), "w", encoding="utf-8"),
                          ensure_ascii=False, separators=(",", ":"))
                dates.add(day.isoformat())
                print(day, "候選", out["candidates"], "入榜", len(out["rows"]))
            else:
                print(day, "休市或沒資料")
        day += timedelta(days=1)
    keep = sorted(dates, reverse=True)[:KEEP_DAYS]
    for old in dates - set(keep):
        try:
            os.remove(os.path.join(data_dir, "tpex", "daytrade", f"{old}.json"))
        except OSError:
            pass
    json.dump({"updated": datetime.now(TW).isoformat(timespec="seconds"), "dates": keep}, open(index_path, "w", encoding="utf-8"),
              ensure_ascii=False)


if __name__ == "__main__":
    main()
