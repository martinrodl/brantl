import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PAT = "7c965dd0-9726-4c08-b46b-679956c28cdf";
const NAMESPACE = "home";

const newStrings = {
  "cookies.metadata.title": "Cookies | Brantl",
  "cookies.metadata.description": "Informace o používání souborů cookies na webu Brantl & Partners.",
  "cookies.header": "Cookies",
  "cookies.intro": "Tento web používá soubory cookies, aby správně fungoval a abychom mohli vylepšovat jeho obsah a vaše uživatelské prostředí. Níže najdete přehled typů cookies a informace o tom, jak je lze spravovat.",
  "cookies.sections.whatAre.title": "Co jsou cookies",
  "cookies.sections.whatAre.content": "Cookies jsou malé textové soubory ukládané do vašeho zařízení, které umožňují webu rozpoznat vaše zařízení, pamatovat si vaše volby nebo sledovat, jak web používáte.",
  "cookies.sections.types.title": "Jaké cookies používáme",
  "cookies.sections.types.items.necessary": "Nutné pro základní funkce webu (např. bezpečnost, navigace, uložení jazykové volby). Tyto cookies nelze vypnout.",
  "cookies.sections.types.items.preferential": "Pomáhají si pamatovat vaše nastavení a zlepšují komfort používání webu.",
  "cookies.sections.types.items.analytical": "Anonymně měří návštěvnost a používání webu, abychom mohli zlepšovat obsah.",
  "cookies.sections.management.title": "Správa a odmítnutí cookies",
  "cookies.sections.management.content": "Cookies můžete kdykoli spravovat či odmítnout v nastavení svého prohlížeče. Způsob se může lišit podle konkrétního prohlížeče (Chrome, Firefox, Safari, Edge). Obvykle je najdete v části Soukromí / Bezpečnost. Upozorňujeme, že vypnutí některých cookies může omezit funkčnost webu.",
  "cookies.contact.text": "Máte‑li dotazy k používání cookies, napište nám na",
  "cookies.contact.email": "info@brantl.cz",
  "cookies.lastUpdate": "Poslední aktualizace:",
  "whistleblower.metadata.title": "Ochrana oznamovatelů | Brantl",
  "whistleblower.metadata.description": "Informace o režimu ochrany oznamovatelů (whistleblowing) ve společnosti Brantl & Partners a způsobech, jak podat oznámení.",
  "whistleblower.header": "Ochrana oznamovatelů",
  "whistleblower.intro": "Společnost Brantl & Partners, s.r.o., v souladu se zákonem č. 171/2023 Sb., o ochraně oznamovatelů, zavedla vnitřní oznamovací systém pro podávání oznámení o možném protiprávním jednání, ke kterému došlo nebo má dojít v pracovním kontextu.",
  "whistleblower.sections.howToReport.title": "Jak podat oznámení",
  "whistleblower.sections.howToReport.methods.email": "E‑mailem na adresu:",
  "whistleblower.sections.howToReport.methods.emailAddress": "whistleblowing@brantl.cz",
  "whistleblower.sections.howToReport.methods.mail": "Písemně na adresu sídla společnosti s viditelným označením \\\"Oznámení – pouze do rukou příslušné osoby\\\".",
  "whistleblower.sections.howToReport.methods.inPerson": "Osobně po předchozí domluvě s příslušnou osobou.",
  "whistleblower.sections.responsiblePerson.title": "Příslušná osoba",
  "whistleblower.sections.responsiblePerson.content": "Příslušná osoba přijímá a posuzuje oznámení, komunikuje s oznamovateli a navrhuje nápravná opatření. Kontakt na příslušnou osobu bude sdělen na vyžádání prostřednictvím výše uvedeného e‑mailu.",
  "whistleblower.sections.externalReporting.title": "Externí podání",
  "whistleblower.sections.externalReporting.content": "Oznámení lze podat také prostřednictvím Ministerstva spravedlnosti ČR. Aktuální informace a formulář jsou k dispozici na webu",
  "whistleblower.sections.externalReporting.linkText": "oznamovatel.justice.cz",
  "whistleblower.sections.externalReporting.linkUrl": "https://oznamovatel.justice.cz/",
  "whistleblower.disclaimer": "Tento text má informativní charakter a může být dále upřesněn interní směrnicí společnosti."
};

async function addStrings() {
  console.log(`Adding ${Object.keys(newStrings).length} new strings to i18nexus...\\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const [key, value] of Object.entries(newStrings)) {
    try {
      const escapedValue = value.replace(/"/g, '\\\\"').replace(/\n/g, '\\\\n');
      const command = `npx i18nexus add-string -K "${key}" -v "${escapedValue}" -ns "${NAMESPACE}" -t "${PAT}"`;
      
      await execAsync(command);
      console.log(`✓ Added: ${key}`);
      success++;
    } catch (error) {
      console.error(`✗ Failed: ${key}`);
      console.error(`  Error: ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\\nDone! Success: ${success}, Failed: ${failed}`);
  console.log("\\nNow run: npm run pull-i18n");
  console.log("This will download all translations including your new keys.");
}

addStrings();
