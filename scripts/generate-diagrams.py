"""Render README mermaid diagrams via mermaid.ink."""
import base64
import pathlib
import re
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "projects" / "images"
REPOS = pathlib.Path(__file__).resolve().parents[2]


def encode(diagram: str) -> str:
    return base64.urlsafe_b64encode(diagram.encode("utf-8")).decode("ascii").rstrip("=")


def extract_mermaid(readme_path: pathlib.Path, index: int) -> str:
    text = readme_path.read_text(encoding="utf-8")
    blocks = re.findall(r"```mermaid\n(.*?)```", text, re.S)
    if index >= len(blocks):
        raise IndexError(f"{readme_path} block {index} missing")
    return blocks[index].strip()


def render(name: str, diagram: str) -> None:
    url = f"https://mermaid.ink/img/{encode(diagram)}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        path = OUT / f"{name}.png"
        path.write_bytes(resp.read())
        print(f"{name}: {path.stat().st_size} bytes")


JOBS = [
    ("smart-resume-architecture", REPOS / "SMART-RESUME-SHORTLISTER-A/README.md", 0),
    ("smart-resume-workflow", REPOS / "SMART-RESUME-SHORTLISTER-A/README.md", 1),
    ("smart-resume-pipeline", REPOS / "SMART-RESUME-SHORTLISTER-A/README.md", 2),
    ("yojna-architecture", REPOS / "README.md", 0),
    ("yojna-user-flow", REPOS / "README.md", 1),
    ("yojna-data-flow", REPOS / "README.md", 2),
    ("keyforge-architecture", REPOS / "KEYFORGE_AI/README.md", 0),
    ("keyforge-user-flow", REPOS / "KEYFORGE_AI/README.md", 1),
    ("laychess-architecture", REPOS / "LAYCHESS-A/README.md", 0),
    ("laychess-user-flow", REPOS / "LAYCHESS-A/README.md", 1),
    ("laychess-engine-flow", REPOS / "LAYCHESS-A/README.md", 2),
]

OUT.mkdir(parents=True, exist_ok=True)
for name, readme, idx in JOBS:
    if not readme.exists():
        print(f"skip {name}: missing {readme}")
        continue
    try:
        render(name, extract_mermaid(readme, idx))
    except Exception as exc:
        print(f"{name} failed: {exc}")
