import json

# Cesty k souborům
home_path = 'locales/cs/home.json'
new_keys_path = 'locales/cs/home_new_keys.json'

# Načti oba soubory
with open(home_path, encoding='utf-8') as f:
    home = json.load(f)
with open(new_keys_path, encoding='utf-8') as f:
    new_keys = json.load(f)

# Zkopíruj sekci 'team' z new_keys do home
if 'about' in new_keys and 'team' in new_keys['about']:
    home.setdefault('about', {})['team'] = new_keys['about']['team']
else:
    print('V souboru home_new_keys.json nebyla nalezena sekce about.team!')

# Ulož výsledek zpět do home.json
with open(home_path, 'w', encoding='utf-8') as f:
    json.dump(home, f, ensure_ascii=False, indent=2)

print('Sekce about.team byla úspěšně zkopírována do home.json.')
