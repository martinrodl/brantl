import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const XLSX_FILE = path.join(__dirname, '..', 'src', 'translations_export.xlsx');
const LOCALES_DIR = path.join(__dirname, '..', 'locales');

function readXlsxFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return data;
}

function parseTranslations(data) {
  if (data.length === 0) return {};

  const headers = data[0];
  const keyColumnIndex = headers.findIndex(h => h === 'Key' || h === 'key' || h === 'Klíč');
  
  // Find language columns (cs, en, de) - handle both short and full names
  const langColumns = {};
  headers.forEach((header, index) => {
    const headerLower = header.toLowerCase();
    if (headerLower === 'cs' || headerLower.includes('czech')) {
      langColumns['cs'] = index;
    } else if (headerLower === 'en' || headerLower.includes('english')) {
      langColumns['en'] = index;
    } else if (headerLower === 'de' || headerLower.includes('german')) {
      langColumns['de'] = index;
    }
  });

  const translations = {
    cs: {},
    en: {},
    de: {}
  };

  // Process each row (skip header)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row || row.length === 0) continue;
    
    const key = row[keyColumnIndex];
    if (!key) continue;

    // Get translations for each language
    Object.keys(langColumns).forEach(lang => {
      const value = row[langColumns[lang]];
      if (value) {
        setNestedValue(translations[lang], key, value);
      }
    });
  }

  return translations;
}

function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

function writeTranslations(translations) {
  Object.keys(translations).forEach(lang => {
    const langDir = path.join(LOCALES_DIR, lang);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
    
    const filePath = path.join(langDir, 'home.json');
    const content = JSON.stringify(translations[lang], null, 2);
    fs.writeFileSync(filePath, content + '\n', 'utf-8');
    console.log(`✅ Updated ${lang}/home.json`);
  });
}

// Main execution
try {
  console.log('📖 Reading XLSX file...');
  const data = readXlsxFile(XLSX_FILE);
  
  console.log('🔄 Parsing translations...');
  const translations = parseTranslations(data);
  
  console.log('💾 Writing translations to locales...');
  writeTranslations(translations);
  
  console.log('✨ Import completed successfully!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
