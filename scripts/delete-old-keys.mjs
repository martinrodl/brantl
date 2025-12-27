import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PAT = process.env.I18NEXUS_PAT || "7c965dd0-9726-4c08-b46b-679956c28cdf";
const NAMESPACE = "home";

// Old keys that are no longer used
const oldKeys = [
  "cookies.contact.email",
  "cookies.contact.text", 
  "cookies.contact.title",
  "cookies.lastUpdate",
  "cookies.sections.management.content",
  "cookies.sections.management.title",
  "cookies.sections.types.items.analytical.title",
  "cookies.sections.types.items.analytical.description",
  "cookies.sections.types.items.necessary.title",
  "cookies.sections.types.items.necessary.description",
  "cookies.sections.types.items.preferential.title",
  "cookies.sections.types.items.preferential.description",
  "cookies.sections.types.title",
  "cookies.sections.whatAre.content",
  "cookies.sections.whatAre.title",
  "whistleblower.sections.howToReport.title",
  "whistleblower.sections.howToReport.methods.email",
  "whistleblower.sections.howToReport.methods.emailAddress",
  "whistleblower.sections.howToReport.methods.mail",
  "whistleblower.sections.howToReport.methods.inPerson",
  "whistleblower.sections.responsiblePerson.title",
  "whistleblower.sections.responsiblePerson.content",
  "whistleblower.sections.externalReporting.title",
  "whistleblower.sections.externalReporting.content",
  "whistleblower.sections.externalReporting.linkText",
  "whistleblower.sections.externalReporting.linkUrl",
  "whistleblower.disclaimer"
];

async function deleteOldKeys() {
  console.log(`Deleting ${oldKeys.length} old translation keys from i18nexus...\n`);
  console.log("⚠️  This will permanently delete these keys and their translations!\n");
  
  let success = 0;
  let failed = 0;
  let notFound = 0;
  
  for (const key of oldKeys) {
    try {
      const command = `npx i18nexus delete-string "${NAMESPACE}" "${key}" -t "${PAT}"`;
      const { stdout, stderr } = await execAsync(command);
      
      if (stderr && stderr.toLowerCase().includes('not found')) {
        console.log(`⊘ Not found: ${key}`);
        notFound++;
      } else {
        console.log(`✓ Deleted: ${key}`);
        success++;
      }
    } catch (error) {
      if (error.message.includes("not found") || error.message.includes("does not exist")) {
        console.log(`⊘ Not found: ${key}`);
        notFound++;
      } else {
        console.error(`✗ Failed to delete: ${key}`);
        console.error(`  Error: ${error.stderr || error.message}`);
        failed++;
      }
    }
  }
  
  console.log(`\n✅ Done! Deleted: ${success}, Not found: ${notFound}, Failed: ${failed}`);
  console.log(`\n📝 You can now run 'npm run push-i18n' to add the new keys`);
}

deleteOldKeys().catch(console.error);
