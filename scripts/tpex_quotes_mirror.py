"""上櫃日K鏡像：櫃買中心擋 HanStock 的正式站主機（Railway），GitHub runner 抓得到。

每一天抓櫃買中心「上櫃股票行情」（afterTrading/dailyQuotes，一天一份全市場），只留 4 位數股票與 00 開頭的 ETF，
存成一個月一份壓縮檔 tpex/quotes/YYYY-MM.json.gz：
  {"month": "2024-02", "fields": ["code","name","open","high","low","close","change","volume"],
   "days": {"2024-02-05": [["3064","泰偉",31.95,32.2,31.95,32.2,-3.3,8170], ...]}, "closed": ["2024-02-06", ...]}
change＝櫃買公布的漲跌（跟參考價比；減資恢復買賣那天也是跟恢復買賣參考價比，後端拿來算還原因子），
volume＝成交股數（股）。休市的日子櫃買會回別天的資料，表頭日期對不上就當休市記在 closed，之後不再重抓
（今天的不記，晚一點再抓）。

另外每年存一份櫃買「減資恢復買賣參考價格」tpex/actions/revivt-YYYY.json（原始欄位照存），後端做減資還原用。

用法：
  python3 tpex_quotes_mirror.py --root <data 分支目錄> [--months 2023-08:2025-08] [--sleep 2]
不給 --months 就只補上個月與這個月缺的日子（每天排程用）。
"""

from __future__ import annotations

import argparse
import gzip
import json
import os
import subprocess
import sys
import time
import urllib.request
from datetime import date, datetime, timedelta, timezone

TW = timezone(timedelta(hours=8))
QUOTES_URL = "https://www.tpex.org.tw/www/zh-tw/afterTrading/dailyQuotes?date={d}&id=&response=json"
REVIVT_URL = "https://www.tpex.org.tw/www/zh-tw/bulletin/revivt?startDate={y}/01/01&endDate={y}/12/31&response=json"
HEADERS = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-TW,zh;q=0.9",
    "User-Agent": "Mozilla/5.0 (compatible; HanStock-mirror/1.0)",
    "Referer": "https://www.tpex.org.tw/",
}
FIELDS = ["code", "name", "open", "high", "low", "close", "change", "volume"]
NEEDED = ("代號", "名稱", "收盤", "漲跌", "開盤", "最高", "最低", "成交股數")


def get_json(url: str, timeout: float = 90.0, attempts: int = 4):
    """要求壓縮傳輸（一天的行情 1.5MB，壓縮後一成左右，比較不會傳到一半斷掉）；斷線或讀不完整就重試。"""
    request = urllib.request.Request(url, headers={**HEADERS, "Accept-Encoding": "gzip"})
    last: Exception | None = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:  # noqa: S310
                body = response.read()
                if (response.headers.get("Content-Encoding") or "").lower() == "gzip":
                    body = gzip.decompress(body)
            return json.loads(body.decode("utf-8-sig"))
        except Exception as exc:  # noqa: BLE001
            last = exc
            time.sleep(3 * (attempt + 1))
    raise last if last else RuntimeError(url)


def num(value):
    text = str(value if value is not None else "").replace(",", "").replace("＋", "+").replace("－", "-").strip()
    if text.startswith("+"):
        text = text[1:]
    try:
        return float(text)
    except ValueError:
        return None


def eligible(code: str) -> bool:
    return (len(code) == 4 and code.isdigit()) or (code.startswith("00") and 5 <= len(code) <= 6)


def roc(day: date) -> str:
    return f"{day.year - 1911:03d}/{day.month:02d}/{day.day:02d}"


def parse_day(payload, day: date):
    """回這天的列；表頭日期對不上（休市時櫃買會回別天的資料）或沒有資料回 None。"""
    tables = payload.get("tables") if isinstance(payload, dict) else None
    table = tables[0] if tables else None
    if not isinstance(table, dict) or not table.get("data"):
        return None
    if str(table.get("date") or "").strip() != roc(day):
        return None
    fields = [str(f).replace(" ", "").strip() for f in table.get("fields") or []]
    try:
        idx = {name: fields.index(name) for name in NEEDED}
    except ValueError:
        print("欄位對不上", fields, file=sys.stderr)
        return None
    rows = []
    for row in table["data"]:
        try:
            code = str(row[idx["代號"]]).strip().upper()
        except (IndexError, TypeError):
            continue
        if not eligible(code):
            continue
        o, h, l, c = (num(row[idx[k]]) for k in ("開盤", "最高", "最低", "收盤"))
        if any(x is None or x <= 0 for x in (o, h, l, c)):
            continue
        change = num(row[idx["漲跌"]])
        volume = num(row[idx["成交股數"]]) or 0
        rows.append([code, str(row[idx["名稱"]]).strip(), o, h, l, c, change, int(volume)])
    return rows or None


def month_path(root: str, ym: str) -> str:
    return os.path.join(root, "tpex", "quotes", f"{ym}.json.gz")


def load_month(root: str, ym: str) -> dict:
    path = month_path(root, ym)
    if os.path.exists(path):
        with gzip.open(path, "rt", encoding="utf-8") as fh:
            data = json.load(fh)
        data.setdefault("days", {})
        data.setdefault("closed", [])
        return data
    return {"month": ym, "fields": FIELDS, "days": {}, "closed": []}


def save_month(root: str, ym: str, data: dict) -> None:
    path = month_path(root, ym)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    data = {"month": ym, "fields": FIELDS, "days": dict(sorted(data["days"].items())), "closed": sorted(set(data["closed"]))}
    raw = json.dumps(data, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    with open(path, "wb") as fh:
        fh.write(gzip.compress(raw, compresslevel=9, mtime=0))


def update_index(root: str) -> dict:
    folder = os.path.join(root, "tpex", "quotes")
    months = {}
    for name in sorted(os.listdir(folder)) if os.path.isdir(folder) else []:
        if not name.endswith(".json.gz"):
            continue
        ym = name[:-8]
        data = load_month(root, ym)
        days = sorted(data["days"])
        if days:
            months[ym] = {"days": len(days), "first": days[0], "last": days[-1]}
    index = {"months": months, "updatedAt": datetime.now(TW).isoformat(timespec="seconds")}
    with open(os.path.join(folder, "index.json"), "w", encoding="utf-8") as fh:
        json.dump(index, fh, ensure_ascii=False, separators=(",", ":"))
    return index


def months_between(spec: str, today: date) -> list[str]:
    if not spec:
        first = (today.replace(day=1) - timedelta(days=1)).replace(day=1)
        return [f"{first.year}-{first.month:02d}", f"{today.year}-{today.month:02d}"]
    start, _, end = spec.partition(":")
    sy, sm = (int(x) for x in start.split("-"))
    ey, em = (int(x) for x in (end or start).split("-"))
    out = []
    y, m = sy, sm
    while (y, m) <= (ey, em):
        out.append(f"{y}-{m:02d}")
        m += 1
        if m > 12:
            y, m = y + 1, 1
    return out


def weekdays(ym: str, today: date) -> list[date]:
    y, m = (int(x) for x in ym.split("-"))
    day = date(y, m, 1)
    out = []
    while day.month == m and day <= today:
        if day.weekday() < 5:
            out.append(day)
        day += timedelta(days=1)
    return out


def git_push(root: str, message: str) -> None:
    def run(*args: str) -> subprocess.CompletedProcess:
        return subprocess.run(["git", "-C", root, *args], capture_output=True, text=True)

    run("add", "tpex")
    if run("diff", "--cached", "--quiet").returncode == 0:
        print("沒有變動")
        return
    run("commit", "-m", message)
    for attempt in range(5):
        if run("push").returncode == 0:
            print("已推送", message)
            return
        run("pull", "--rebase")
        time.sleep(3 + attempt * 3)
    raise SystemExit("推送失敗")


def fetch_revivt(root: str, years: list[int]) -> None:
    folder = os.path.join(root, "tpex", "actions")
    os.makedirs(folder, exist_ok=True)
    for year in years:
        try:
            payload = get_json(REVIVT_URL.format(y=year))
            table = (payload.get("tables") or [{}])[0]
            data = {"year": year, "fields": table.get("fields") or [], "data": table.get("data") or []}
            with open(os.path.join(folder, f"revivt-{year}.json"), "w", encoding="utf-8") as fh:
                json.dump(data, fh, ensure_ascii=False, separators=(",", ":"))
            print("revivt", year, len(data["data"]))
        except Exception as exc:  # noqa: BLE001
            print("revivt failed", year, type(exc).__name__, exc)
        time.sleep(2)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", required=True)
    parser.add_argument("--months", default="")
    parser.add_argument("--sleep", type=float, default=2.0)
    parser.add_argument("--push-every", type=int, default=3, help="每補完幾個月推一次（0＝不推）")
    args = parser.parse_args()
    today = datetime.now(TW).date()
    months = months_between(args.months.strip(), today)
    print("months", months[0], "~", months[-1], len(months))
    done_months = 0
    for ym in months:
        data = load_month(args.root, ym)
        have = set(data["days"]) | set(data["closed"])
        added = closed = failed = 0
        for day in weekdays(ym, today):
            iso = day.isoformat()
            if iso in have:
                continue
            try:
                payload = get_json(QUOTES_URL.format(d=day.strftime("%Y/%m/%d")))
            except Exception as exc:  # noqa: BLE001
                print("skip", iso, type(exc).__name__, exc)
                failed += 1
                time.sleep(args.sleep * 3)
                continue
            rows = parse_day(payload, day)
            if rows:
                data["days"][iso] = rows
                added += 1
            elif day < today:
                data["closed"].append(iso)   # 過去的日子沒資料＝休市，之後不再問
                closed += 1
            time.sleep(args.sleep)
        if added or closed:
            save_month(args.root, ym, data)
        print(ym, "added", added, "closed", closed, "failed", failed, "total", len(data["days"]))
        done_months += 1
        if args.push_every and done_months % args.push_every == 0:
            update_index(args.root)
            git_push(args.root, f"上櫃日K鏡像 {ym}")
    years = sorted({int(ym[:4]) for ym in months})
    fetch_revivt(args.root, years)
    index = update_index(args.root)
    print("index months", len(index["months"]))
    if args.push_every:
        git_push(args.root, f"上櫃日K鏡像 {months[0]}~{months[-1]} {datetime.now(TW):%Y-%m-%dT%H:%M}")


if __name__ == "__main__":
    main()
