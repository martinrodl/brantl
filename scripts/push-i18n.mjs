import { exec } from "child_process";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const ENV_KEY = "I18NEXUS_API_KEY";

const ensureApiKey = () => {
  if (process.env[ENV_KEY]) {
    return;
  }

  const envPath = resolve(process.cwd(), ".env");

  if (!existsSync(envPath)) {
    return;
  }

  try {
    const envContent = readFileSync(envPath, "utf8");
    for (const line of envContent.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const [key, ...rest] = trimmed.split("=");
      if (key === ENV_KEY) {
        const value = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
        if (value) {
          process.env[ENV_KEY] = value;
        }
        break;
      }
    }
  } catch (error) {
    console.warn(`Warning: Failed to read .env file (${error.message}).`);
  }
};

ensureApiKey();

const apiKey = process.env[ENV_KEY];

if (!apiKey) {
  console.error("Error: Missing API key for i18nexus. Provide it via .env or directly in the script.");
  process.exit(1);
}

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

// Read Czech translations (base language)
const csPath = resolve(process.cwd(), "locales/cs/home.json");
const csTranslations = JSON.parse(readFileSync(csPath, "utf8"));
const flatTranslations = flattenJson(csTranslations);

console.log(`Found ${Object.keys(flatTranslations).length} translation keys`);
console.log("Note: You need to add these manually in i18nexus web interface:");
console.log("https://app.i18nexus.com\n");

// Print out keys that need to be added
const cookieKeys = Object.entries(flatTranslations).filter(([key]) => key.startsWith("cookies."));
const whistleblowerKeys = Object.entries(flatTranslations).filter(([key]) => key.startsWith("whistleblower."));

if (cookieKeys.length > 0) {
  console.log("=== COOKIES SECTION ===");
  cookieKeys.forEach(([key, value]) => {
    console.log(`Key: ${key}`);
    console.log(`Value: ${value}`);
    console.log("---");
  });
}

if (whistleblowerKeys.length > 0) {
  console.log("\n=== WHISTLEBLOWER SECTION ===");
  whistleblowerKeys.forEach(([key, value]) => {
    console.log(`Key: ${key}`);
    console.log(`Value: ${value}`);
    console.log("---");
  });
}

console.log("\nAlternatively, generate a PAT at: https://app.i18nexus.com/settings/api");
console.log("Then run: npx i18nexus import locales/cs/home.json -ns home --overwrite -t <YOUR_PAT>");
