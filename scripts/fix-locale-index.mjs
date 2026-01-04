import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'out');
const locales = ['cs', 'de', 'en'];

console.log('Fixing locale index files...');

locales.forEach(locale => {
  const sourceFile = path.join(outDir, `${locale}.html`);
  const targetDir = path.join(outDir, locale);
  const targetFile = path.join(targetDir, 'index.html');

  if (fs.existsSync(sourceFile)) {
    // Ensure the locale directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy the locale.html file to locale/index.html
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✓ Copied ${locale}.html to ${locale}/index.html`);
  } else {
    console.warn(`⚠ Warning: ${locale}.html not found`);
  }
});

console.log('Done!');
