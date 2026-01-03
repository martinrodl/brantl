import json

# Cesty k souborům
home_path = 'locales/cs/home.json'
new_keys_path = 'locales/cs/home_new_keys.json'

# Načti oba soubory
with open(home_path, encoding='utf-8') as f:
    home = json.load(f)
with open(new_keys_path, encoding='utf-8') as f:
    new_keys = json.load(f)

# Zkopíruj sekci 'sections' z new_keys do home
if 'services' in new_keys and 'sections' in new_keys['services']:
    home.setdefault('services', {})['sections'] = new_keys['services']['sections']
else:
    print('V souboru home_new_keys.json nebyla nalezena sekce services.sections!')

# Ulož výsledek zpět do home.json
with open(home_path, 'w', encoding='utf-8') as f:
    json.dump(home, f, ensure_ascii=False, indent=2)

print('Sekce services.sections byla úspěšně zkopírována do home.json.')
