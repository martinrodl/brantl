import json
from pathlib import Path

cs_path = Path('locales/cs/home.json')
en_path = Path('locales/en/home.json')

cs = json.load(cs_path.open(encoding='utf-8'))
try:
    en = json.load(en_path.open(encoding='utf-8'))
except FileNotFoundError:
    en = {}


def ensure_path(obj, parts):
    cur = obj
    for p in parts[:-1]:
        if p not in cur or not isinstance(cur[p], dict):
            cur[p] = {}
        cur = cur[p]
    return cur


def copy_missing(src, dst, path=()):
    for k, v in src.items():
        if isinstance(v, dict):
            if k not in dst or not isinstance(dst.get(k), dict):
                dst.setdefault(k, {})
            copy_missing(v, dst[k], path + (k,))
        else:
            if k not in dst or dst.get(k) is None:
                dst[k] = v


copy_missing(cs, en)

# Backup existing en file
if en_path.exists():
    en_path.with_suffix('.home.json.bak').write_text(en_path.read_text(encoding='utf-8'), encoding='utf-8')

# Write updated en file
en_path.write_text(json.dumps(en, ensure_ascii=False, indent=2), encoding='utf-8')
print('Filled missing keys from cs into en/home.json')
