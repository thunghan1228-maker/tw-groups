#!/usr/bin/env python3
"""K 棒道場「語音課程」產生器（2026-10-30 使用者：每堂課標題旁加語音課程，文字＋語音＋跟著線圖動態教學）。

每一堂課一個講稿（SCRIPTS）：一段一段念，每一段配一個「線圖動作」cue（框出哪幾根K棒、標什麼字、亮防守線、亮後 10 天…）。
用 gTTS（Google 翻譯免費中文語音）一段一段錄，中間隔 0.45 秒，接成一個 mp3；
同時輸出每一段的開始／結束秒數，網頁照秒數換字幕、換線圖上的框。

用法：
    python3 scripts/tutorial/dojo_voice.py            # 五堂全部重錄
    python3 scripts/tutorial/dojo_voice.py panther    # 只錄黑豹

輸出：public/tut-assets/dj/<型態>.mp3、public/tut-assets/dj/index.json（網頁讀這份）。
網頁播放網址是 /dojo-voice/<型態>.mp3（Worker 處理 iPhone 要的 Range）。
講稿要跟 build/client_body.html 的 DOJO_PATS（文字版教學）一起改，條件數字要一樣。

cue 欄位（全部可省略）：
  bars    要框起來的K棒：'s' 型態第一根、'e' 型態最後一根（進場那根）、'all' 整個框、
          't1' 't2' 't3' 把 s～e-1 切成三段的第幾段（三角收斂用）
  label   框上面寫的字（labels＝每個框各一個字）
  ma      5 或 20：把那條均線加粗
  lines   True：三角收斂的上下兩條線加亮
  defense True：防守線加亮
  future  True：框住型態之後的 10 天
"""

from __future__ import annotations

import hashlib
import json
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "tut-assets" / "dj"
GAP = 0.45   # 段與段之間留白（秒）
TEMPO = 1.2  # 語速（gTTS 預設偏慢）
FUTURE_LINE = "右邊這一段，是型態出現以後的後十天走勢。多看幾個真實案例，就能熟悉這個型態。"

SCRIPTS: dict[str, list[dict]] = {
    "sword": [
        {"k": "title", "t": "第一堂，紅劍。"},
        {"k": "intro", "t": "你看圖上黃框裡的這一根K棒。盤中一度拉出長紅，收盤卻被賣壓壓回來，留下很長的上影線，當天還爆出大量。它通常出現在起漲的第一根，像一把劍插在K線上。",
         "cue": {"bars": ["all"], "label": "紅劍"}},
        {"k": "pt0", "t": "第一個條件，最高價比昨天收盤價高出百分之六以上，代表盤中一度大漲。",
         "cue": {"bars": ["all"], "label": "最高比昨收高 6% 以上"}},
        {"k": "pt1", "t": "第二，上影線要佔整根振幅一半以上，而且比昨天收盤價的百分之三還長。你看這根的影線，就是被賣壓壓下來的痕跡。",
         "cue": {"bars": ["all"], "label": "長上影線"}},
        {"k": "pt2", "t": "第三，成交量是前五天平均的兩倍半以上。你看下面這根量柱特別高，等於把上面的賣壓先消化掉了。",
         "cue": {"bars": ["all"], "label": "爆量 2.5 倍"}},
        {"k": "pt3", "t": "第四，必須是起漲的第一根：昨天比四天前漲不到百分之八，收盤離月線不到百分之十二，不是已經漲了一大段才出現的。",
         "cue": {"bars": ["all"], "ma": 20, "label": "起漲第一根・離月線不遠"}},
        {"k": "entry", "t": "進場：收盤附近就可以進，後面等它噴出；隔天容易出現吞噬劍身的紅K。",
         "cue": {"bars": ["e"], "label": "進場"}},
        {"k": "def", "t": "防守：如果收盤價離最低價三個百分點以內，就防守劍的最低價；離太遠，就防守收盤價。圖上紫色虛線就是防守線，跌破就要出場。",
         "cue": {"defense": True, "label": "防守線"}},
        {"k": "case", "t": FUTURE_LINE, "cue": {"future": True, "label": "後 10 天"}},
    ],
    "panther": [
        {"k": "title", "t": "第二堂，黑豹。"},
        {"k": "intro", "t": "黃框裡這兩根K棒。前一天漲停，隔天開高，卻爆量收成一根長黑。這是漲停後的換手黑K：高檔的人在賣，也有人願意接。",
         "cue": {"bars": ["all"], "label": "黑豹"}},
        {"k": "pt0", "t": "第一，前一天漲停：收盤比前天漲百分之九點五以上，而且收在最高附近。",
         "cue": {"bars": ["s"], "label": "前一天漲停"}},
        {"k": "pt1", "t": "第二，今天開盤比昨天收盤價高一個百分點以上，也就是開高。",
         "cue": {"bars": ["e"], "label": "開高"}},
        {"k": "pt2", "t": "第三，今天的成交量是昨天的一點五倍以上，爆量。看下面的量柱，是不是比前一根高很多。",
         "cue": {"bars": ["e"], "label": "爆量 1.5 倍"}},
        {"k": "pt3", "t": "第四，收長黑：開盤到收盤跌百分之五以上。這根黑K可以吞掉昨天的紅K，也可以不吞。",
         "cue": {"bars": ["e"], "label": "長黑"}},
        {"k": "entry", "t": "進場：屬於換手黑，收盤附近進場。",
         "cue": {"bars": ["e"], "label": "進場"}},
        {"k": "def", "t": "防守：跌破這根黑K的最低點，就出場。紫色虛線就是這個價位。",
         "cue": {"defense": True, "label": "防守線"}},
        {"k": "case", "t": FUTURE_LINE, "cue": {"future": True, "label": "後 10 天"}},
    ],
    "dance": [
        {"k": "title", "t": "第三堂，黑飛舞。"},
        {"k": "intro", "t": "股價跳空創新高，當天卻收了一根黑K；隔天量縮，股價拉回五日線附近，沒有跌破。創高不追高，等拉回再進場。",
         "cue": {"bars": ["all"], "label": "黑飛舞"}},
        {"k": "pt0", "t": "黑K那天：開盤跳空在昨天最高價之上，最高價創六十日新高，收盤比開盤低。",
         "cue": {"bars": ["s"], "label": "跳空創高・收黑"}},
        {"k": "pt1", "t": "隔天量縮到黑K那天的百分之七十五以下。",
         "cue": {"bars": ["e"], "label": "量縮"}},
        {"k": "pt2", "t": "隔天最低價碰到五日線上方百分之三以內，收盤沒有跌破五日線百分之二點五以上。",
         "cue": {"bars": ["e"], "ma": 5, "label": "拉回五日線"}},
        {"k": "entry", "t": "進場：拉回五日線附近收盤再進場，不追高。",
         "cue": {"bars": ["e"], "label": "進場"}},
        {"k": "def", "t": "防守：五日線，或是十日線。",
         "cue": {"defense": True, "label": "防守線"}},
        {"k": "case", "t": FUTURE_LINE, "cue": {"future": True, "label": "後 10 天"}},
    ],
    "triangle": [
        {"k": "title", "t": "第四堂，三角收斂。"},
        {"k": "intro", "t": "高點被壓住，一次比一次低；低點一次比一次高；震盪越來越小，量也跟著縮，上下兩條線慢慢靠在一起。",
         "cue": {"bars": ["all"], "lines": True, "label": "三角收斂"}},
        {"k": "pt0", "t": "把前二十四到三十六根K棒切成三段，每一段的最高價比前一段低百分之一以上，最低價比前一段高百分之一以上。",
         "cue": {"bars": ["t1", "t2", "t3"], "lines": True, "labels": ["第一段", "第二段", "第三段"]}},
        {"k": "pt1", "t": "最後一段的寬度，也就是最高減最低，不到第一段的百分之六十五，這就是收斂。",
         "cue": {"bars": ["t1", "t3"], "lines": True, "labels": ["寬", "窄"]}},
        {"k": "pt2", "t": "收斂的末端，出現第一根長紅，收紅百分之三點五以上，爆量站上最後一段的高點，就是發動訊號。",
         "cue": {"bars": ["e"], "label": "長紅突破"}},
        {"k": "entry", "t": "進場：第一根長紅站上壓力線的時候進場。",
         "cue": {"bars": ["e"], "label": "進場"}},
        {"k": "def", "t": "防守：突破那根K棒的最低點。",
         "cue": {"defense": True, "label": "防守線"}},
        {"k": "case", "t": FUTURE_LINE, "cue": {"future": True, "label": "後 10 天"}},
    ],
    "dragon": [
        {"k": "title", "t": "第五堂，穿山惡龍。"},
        {"k": "intro", "t": "先看趨勢：強勢股，近半年漲三成以上，月線，也就是二十日線，一路往上，像一條龍。股價先跌破月線叫破惡，不要追；等它重新站回月線上並放量，叫穿惡，才是進場訊號。",
         "cue": {"ma": 20, "bars": ["all"], "label": "穿山惡龍"}},
        {"k": "pt0", "t": "第一，近一百二十根的最高收盤，是最低收盤的一點三倍以上，而且月線比二十根前高百分之二以上，趨勢向上。",
         "cue": {"ma": 20, "label": "月線向上"}},
        {"k": "pt1", "t": "第二，昨天收在月線下面，這就是破惡。",
         "cue": {"bars": ["s"], "ma": 20, "label": "破惡"}},
        {"k": "pt2", "t": "第三，今天收盤站上月線百分之三以上，成交量是前五天平均的一點二倍以上，這叫穿惡。",
         "cue": {"bars": ["e"], "ma": 20, "label": "穿惡"}},
        {"k": "entry", "t": "進場：穿惡當天收盤附近進場，量放大更好。",
         "cue": {"bars": ["e"], "label": "進場"}},
        {"k": "def", "t": "防守：昨天的最低點，或是月線。",
         "cue": {"defense": True, "label": "防守線"}},
        {"k": "case", "t": FUTURE_LINE, "cue": {"future": True, "label": "後 10 天"}},
    ],
}


def run(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def duration(path: Path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(path)],
                         check=True, capture_output=True, text=True).stdout
    return float(out.strip())


def build(pattern: str) -> dict:
    from gtts import gTTS
    segs = SCRIPTS[pattern]
    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        wavs: list[Path] = []
        out_segs: list[dict] = []
        t = 0.0
        silence = tmp_dir / "gap.wav"
        run(["ffmpeg", "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", str(GAP), str(silence)])
        for i, seg in enumerate(segs):
            raw = tmp_dir / f"s{i}.mp3"
            wav = tmp_dir / f"s{i}.wav"
            gTTS(seg["t"], lang="zh-TW").save(str(raw))
            run(["ffmpeg", "-y", "-i", str(raw), "-filter:a", f"atempo={TEMPO}", "-ar", "24000", "-ac", "1", str(wav)])   # gTTS 念得慢，加快一點比較自然
            d = duration(wav)
            out_segs.append({"k": seg["k"], "t0": round(t, 2), "t1": round(t + d, 2), "text": seg["t"], "cue": seg.get("cue") or {}})
            t += d + GAP
            wavs.append(wav)
            wavs.append(silence)
        listing = tmp_dir / "list.txt"
        listing.write_text("".join(f"file '{p}'\n" for p in wavs), encoding="utf-8")
        joined = tmp_dir / "all.wav"
        run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(listing), "-c", "copy", str(joined)])
        OUT.mkdir(parents=True, exist_ok=True)
        target = OUT / f"{pattern}.mp3"
        run(["ffmpeg", "-y", "-i", str(joined), "-codec:a", "libmp3lame", "-b:a", "40k", "-ar", "24000", "-ac", "1", str(target)])
        return {"dur": round(duration(target), 2), "segs": out_segs}


def main() -> None:
    wanted = sys.argv[1:] or list(SCRIPTS)
    index_path = OUT / "index.json"
    index = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else {}
    for pattern in wanted:
        print("錄", pattern, flush=True)
        index[pattern] = build(pattern)
    blob = json.dumps({k: v for k, v in index.items() if k != "v"}, ensure_ascii=False, sort_keys=True).encode("utf-8")
    index["v"] = hashlib.sha1(blob).hexdigest()[:10]   # 網頁用來更新快取
    index_path.write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")
    print("完成：", ", ".join(f"{k} {index[k]['dur']}s" for k in SCRIPTS if k in index))


if __name__ == "__main__":
    main()
