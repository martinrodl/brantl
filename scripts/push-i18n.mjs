import { exec } from "child_process";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

const PAT = process.env.I18NEXUS_PAT || "7c965dd0-9726-4c08-b46b-679956c28cdf";
const NAMESPACE = "home";

// Helper function to flatten nested JSON
function flattenJson(obj, prefix = "", result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flattenJson(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

async function pushTranslations() {
  const localPath = resolve(process.cwd(), "locales/cs/home.json");
  const backupPath = resolve(process.cwd(), "locales/cs/home.backup.json");
  const { writeFileSync, copyFileSync } = await import("fs");

  // Backup local file
  copyFileSync(localPath, backupPath);
  
  // Read local translations BEFORE pull
  const localTranslations = JSON.parse(readFileSync(backupPath, "utf8"));
  const localFlat = flattenJson(localTranslations);

  // Pull current state from i18nexus
  console.log("Checking current keys in i18nexus...\n");
  try {
    await execAsync("npx i18nexus pull");
  } catch (error) {
    console.error("Failed to pull from i18nexus:", error.message);
    return;
  }

  // Read what's currently in i18nexus (after pull overwrites the file)
  const remoteTranslations = JSON.parse(readFileSync(localPath, "utf8"));
  const remoteFlat = flattenJson(remoteTranslations);

  // Restore local file from backup
  copyFileSync(backupPath, localPath);

  // Filter for cookies/whistleblower keys
  const localKeys = Object.keys(localFlat).filter(k => 
    k.startsWith("cookies.") || k.startsWith("whistleblower.")
  );
  
  const remoteKeys = Object.keys(remoteFlat).filter(k => 
    k.startsWith("cookies.") || k.startsWith("whistleblower.")
  );

  // Separate into keys to add vs keys to update
  const keysToAdd = localKeys.filter(k => !remoteKeys.includes(k));
  const keysToUpdate = localKeys.filter(k => remoteKeys.includes(k) && localFlat[k] !== remoteFlat[k]);

  console.log(`Found ${keysToAdd.length} new keys to add`);
  console.log(`Found ${keysToUpdate.length} existing keys to update\n`);

  if (keysToAdd.length === 0 && keysToUpdate.length === 0) {
    console.log("✅ All keys are already up to date!");
    return;
  }

  let added = 0;
  let updated = 0;
  let failed = 0;

  // Add new keys
  for (const key of keysToAdd) {
    try {
      const value = String(localFlat[key]).replace(/"/g, '\\"').replace(/\n/g, '\\n');
      const command = `npx i18nexus add-string -K "${key}" -v "${value}" -ns "${NAMESPACE}" -t "${PAT}"`;
      await execAsync(command);
      console.log(`✓ Added: ${key}`);
      added++;
    } catch (error) {
      console.error(`✗ Failed to add: ${key}`);
      const stderr = error.stderr || error.message;
      if (stderr.includes("string limit")) {
        console.error(`  ⚠️  String limit reached! Delete old keys or upgrade plan.`);
      } else {
        console.error(`  ${stderr}`);
      }
      failed++;
    }
  }

  // Update existing keys
  for (const key of keysToUpdate) {
    try {
      const value = String(localFlat[key]).replace(/"/g, '\\"').replace(/\n/g, '\\n');
      const command = `npx i18nexus update-string "${NAMESPACE}" "${key}" -v "${value}" -t "${PAT}"`;
      await execAsync(command);
      console.log(`✓ Updated: ${key}`);
      updated++;
    } catch (error) {
      console.error(`✗ Failed to update: ${key}`);
      console.error(`  ${error.stderr || error.message}`);
      failed++;
    }
  }

  console.log(`\n✅ Done! Added: ${added}, Updated: ${updated}, Failed: ${failed}`);
  
  if (added > 0 || updated > 0) {
    console.log("\n📝 Next steps:");
    console.log("1. Add EN and DE translations at https://app.i18nexus.com");
    console.log("2. Run 'npm run pull-i18n' to download all translations");
  }
}

pushTranslations().catch(console.error);

