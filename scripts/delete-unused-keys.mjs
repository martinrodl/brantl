import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PAT = process.env.I18NEXUS_PAT || "7c965dd0-9726-4c08-b46b-679956c28cdf";
const NAMESPACE = "home";

// Nepoužité klíče zjištěné analýzou kódu
const unusedKeys = [
  // about.team.* - používají se dynamické reference ${position}
  "about.team.first.cvRecords",
  "about.team.first.name",
  "about.team.first.role",
  "about.team.first.specializations",
  "about.team.second.cvRecords",
  "about.team.second.name",
  "about.team.second.role",
  "about.team.second.specializations",
  "about.team.third.cvRecords",
  "about.team.third.name",
  "about.team.third.role",
  "about.team.third.specializations",
  
  // header.* - nepoužívané navbar a switcher klíče
  "header.navbar.about",
  "header.navbar.contacts",
  "header.navbar.services",
  "header.navbar.testimonials",
  "header.switcher.dropdownHeader",
  
  // services.sections.* - používají se dynamické reference ${pos}
  "services.sections.fifth.descriptionPart1",
  "services.sections.fifth.descriptionPart2",
  "services.sections.fifth.title",
  "services.sections.first.descriptionPart1",
  "services.sections.first.descriptionPart2",
  "services.sections.first.title",
  "services.sections.fourth.descriptionPart1",
  "services.sections.fourth.descriptionPart2",
  "services.sections.fourth.title",
  "services.sections.second.descriptionPart1",
  "services.sections.second.descriptionPart2",
  "services.sections.second.title",
  "services.sections.sixth.descriptionPart1",
  "services.sections.sixth.descriptionPart2",
  "services.sections.sixth.title",
  "services.sections.third.descriptionPart1",
  "services.sections.third.descriptionPart2",
  "services.sections.third.title"
];

async function deleteUnusedKeys() {
  console.log(`🗑️  Mazání ${unusedKeys.length} nepoužitých klíčů z i18nexus...\n`);
  console.log("⚠️  Toto trvale smaže tyto klíče a jejich překlady!\n");
  
  let deleted = 0;
  let notFound = 0;
  let failed = 0;
  
  for (const key of unusedKeys) {
    try {
      const command = `npx i18nexus delete-string "${NAMESPACE}" "${key}" -t "${PAT}"`;
      const { stdout, stderr } = await execAsync(command);
      
      if (stderr && (stderr.includes("not found") || stderr.includes("does not exist"))) {
        console.log(`⊘ Již smazáno: ${key}`);
        notFound++;
      } else {
        console.log(`✓ Smazáno: ${key}`);
        deleted++;
      }
    } catch (error) {
      const errorMsg = error.stderr || error.message;
      
      if (errorMsg.includes("not found") || errorMsg.includes("does not exist")) {
        console.log(`⊘ Již smazáno: ${key}`);
        notFound++;
      } else if (errorMsg.includes("scope") || errorMsg.includes("delete")) {
        console.error(`\n❌ CHYBA: PAT token nemá oprávnění base_strings:delete`);
        console.error(`\n📝 Řešení:`);
        console.error(`1. Jděte na https://app.i18nexus.com/settings/api`);
        console.error(`2. Vygenerujte nový PAT s oprávněním "base_strings:delete"`);
        console.error(`3. Aktualizujte I18NEXUS_PAT v .env souboru`);
        console.error(`4. Spusťte script znovu\n`);
        console.error(`Nebo smažte klíče ručně v web interface.`);
        return;
      } else {
        console.error(`✗ Chyba při mazání: ${key}`);
        console.error(`  ${errorMsg}`);
        failed++;
      }
    }
  }
  
  console.log(`\n✅ Hotovo! Smazáno: ${deleted}, Již smazáno: ${notFound}, Chyby: ${failed}`);
  console.log(`\n📝 Další kroky:`);
  console.log(`1. Spusťte 'npm run push-i18n' pro nahrání whistleblower klíčů`);
  console.log(`2. Přidejte EN a DE překlady na https://app.i18nexus.com`);
  console.log(`3. Spusťte 'npm run pull-i18n' pro stažení překladů`);
}

deleteUnusedKeys().catch(console.error);
