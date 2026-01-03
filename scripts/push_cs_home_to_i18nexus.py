import subprocess
import os

# Nastav API klíč (můžeš upravit nebo načítat z .env)
API_KEY = "bLHG5YuqBlpxH98vqS4now"
LOCALE = "cs"
NAMESPACE = "home"
FILE = "locales/cs/home.json"

# Sestav příkaz
cmd = [
    "npx", "i18nexus", "push",
    "-k", API_KEY,
    "-l", LOCALE,
    "-n", NAMESPACE,
    "-f", FILE
]

print("Spouštím push do i18nexus...")
result = subprocess.run(cmd, capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("Chyba:", result.stderr)
