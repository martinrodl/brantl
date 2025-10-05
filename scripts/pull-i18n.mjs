import { exec } from "child_process";
import { existsSync, readFileSync } from "fs";
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

const command = `npx i18nexus pull -k ${apiKey}`;

console.log("Pulling translations using i18nexus...");
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during i18nexus pull: ${stderr || error.message}`);
    process.exit(1);
  }
  console.log(stdout || "Translations pulled successfully.");
});
