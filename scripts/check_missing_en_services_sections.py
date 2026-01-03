import json

# Cesty k souborům
cs_path = 'locales/cs/home.json'
en_path = 'locales/en/home.json'

# Načti oba soubory
with open(cs_path, encoding='utf-8') as f:
    cs = json.load(f)
with open(en_path, encoding='utf-8') as f:
    en = json.load(f)

# Zjisti chybějící klíče v sekci services.sections
missing = []
cs_sections = cs.get('services', {}).get('sections', {})
en_sections = en.get('services', {}).get('sections', {})
for key in cs_sections:
    for subkey in cs_sections[key]:
        if key not in en_sections or subkey not in en_sections[key]:
            missing.append(f'services.sections.{key}.{subkey}')

if missing:
    print('Chybějící anglické překlady pro klíče:')
    for k in missing:
        print(k)
else:
    print('Všechny klíče v services.sections mají anglický překlad.')
