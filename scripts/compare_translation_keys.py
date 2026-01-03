import json
from pathlib import Path

def flatten(d, parent_key='', sep='.'):
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)

cs_path = Path('locales/cs/home.json')
en_path = Path('locales/en/home.json')

with cs_path.open(encoding='utf-8') as f:
    cs_data = json.load(f)
with en_path.open(encoding='utf-8') as f:
    en_data = json.load(f)

cs_flat = set(flatten(cs_data).keys())
en_flat = set(flatten(en_data).keys())

missing_in_en = cs_flat - en_flat
extra_in_en = en_flat - cs_flat

print('Missing in en:', sorted(missing_in_en))
print('Extra in en:', sorted(extra_in_en))
