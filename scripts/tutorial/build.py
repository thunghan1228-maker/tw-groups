"""教學影片：旁白（gTTS 女聲）→ 錄影（record.js）→ ffmpeg 合成 → public/tut-assets/<key>.mp4、index.json。
用法：python3 scripts/tutorial/build.py [key ...]（不給就全部）。"""
from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
OUT = ROOT / "public" / "tut-assets"
CACHE = HERE / ".cache"
sys.path.insert(0, str(HERE))
from videos import VIDEOS  # noqa: E402

TEMPO = 1.2   # Google 語音預設偏慢，加快一點


def duration(path: Path) -> float:
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)])
    return float(out.decode().strip())


def tts(text: str) -> Path:
    key = hashlib.sha1(f"{TEMPO}|{text}".encode()).hexdigest()[:16]
    final = CACHE / f"{key}.mp3"
    if final.exists() and final.stat().st_size > 0:
        return final
    from gtts import gTTS

    raw = CACHE / f"{key}_raw.mp3"
    gTTS(text, lang="zh-TW").save(str(raw))
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(raw), "-filter:a", f"atempo={TEMPO}", str(final)], check=True)
    raw.unlink(missing_ok=True)
    return final


def build(video: dict) -> dict:
    scenes = []
    for sc in video["scenes"]:
        audio = tts(sc["say"])
        scenes.append({**sc, "audio": str(audio), "dur": duration(audio)})
    raw_dir = CACHE / "raw"
    raw_dir.mkdir(parents=True, exist_ok=True)
    spec_path = CACHE / f"{video['key']}.spec.json"
    out_base = raw_dir / video["key"]
    spec_path.write_text(json.dumps({"key": video["key"], "title": video["title"], "subtitle": video.get("subtitle"), "shots": video.get("shots"), "out": str(out_base), "scenes": scenes}, ensure_ascii=False))
    res = subprocess.run(["node", str(HERE / "record.js"), str(spec_path)], capture_output=True, text=True, timeout=900)
    if res.returncode != 0:
        raise RuntimeError(res.stderr[-2000:])
    print(res.stdout.strip().splitlines()[-1])
    tl = json.loads(Path(str(out_base) + ".timeline.json").read_text())
    start = max(0.0, tl["startAt"] - 0.2)
    inputs = ["-ss", f"{start:.2f}", "-to", f"{tl['total']:.2f}", "-i", tl["raw"]]
    filters = []
    for i, item in enumerate(tl["timeline"]):
        inputs += ["-i", item["audio"]]
        delay = int((item["at"] - start) * 1000)
        filters.append(f"[{i + 1}:a]adelay={delay}|{delay}[a{i}]")
    mix = "".join(f"[a{i}]" for i in range(len(tl["timeline"])))
    filters.append(f"{mix}amix=inputs={len(tl['timeline'])}:normalize=0,apad[aout]")
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{video['key']}.mp4"
    subprocess.run(["ffmpeg", "-y", "-v", "error", *inputs, "-filter_complex", ";".join(filters), "-map", "0:v", "-map", "[aout]",
                    "-c:v", "libx264", "-preset", "medium", "-crf", "28", "-pix_fmt", "yuv420p", "-r", "25",
                    "-c:a", "aac", "-b:a", "80k", "-shortest", "-movflags", "+faststart", str(dest)], check=True)
    Path(tl["raw"]).unlink(missing_ok=True)
    return {"key": video["key"], "title": video["title"], "section": video["section"], "file": dest.name,
            "duration": round(duration(dest), 1), "tab": video.get("tab"), "warnings": tl["warnings"]}


def write_index(entries: dict) -> int:
    order = [v["key"] for v in VIDEOS]
    videos = [entries[k] for k in order if k in entries]
    (OUT / "index.json").write_text(json.dumps({"videos": videos}, ensure_ascii=False, indent=1) + "\n")
    return len(videos)


def main(args: list[str]) -> None:
    """不給 key＝全部重錄；--index＝不錄影，把 public/tut-assets 裡已經有的 mp4 登記進清單（容器重啟後補清單用）。"""
    CACHE.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    index_path = OUT / "index.json"
    existing = {v["key"]: v for v in json.loads(index_path.read_text()).get("videos", [])} if index_path.exists() else {}
    if "--index" in args:
        for video in VIDEOS:
            mp4 = OUT / f"{video['key']}.mp4"
            if mp4.exists():
                existing[video["key"]] = {"key": video["key"], "title": video["title"], "section": video["section"], "file": mp4.name,
                                          "duration": round(duration(mp4), 1), "tab": video.get("tab")}
        print("index.json:", write_index(existing), "支")
        return
    for video in VIDEOS:
        if args and video["key"] not in args:
            continue
        info = build(video)
        if info.pop("warnings"):
            print("  注意：", video["key"], "有找不到的元素，看 .cache/raw/*.timeline.json")
        existing[video["key"]] = info
        print("index.json:", write_index(existing), "支")   # 每錄完一支就寫，錄到一半中斷也不會白錄


if __name__ == "__main__":
    main(sys.argv[1:])
