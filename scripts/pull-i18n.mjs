import { exec } from "child_process";

const apiKey = process.env.I18NEXUS_API_KEY;

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
