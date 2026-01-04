const fs = require('fs');
const path = require('path');

const localesDir = path.join(process.cwd(), 'public', 'locales');
const enPath = path.join(localesDir, 'en', 'common.json');

if (!fs.existsSync(enPath)) {
    console.error('English translation file not found at:', enPath);
    process.exit(1);
}

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const languages = ['fr', 'sw', 'de'];

languages.forEach(lng => {
    const lngPath = path.join(localesDir, lng, 'common.json');

    let lngData = {};
    if (fs.existsSync(lngPath)) {
        try {
            lngData = JSON.parse(fs.readFileSync(lngPath, 'utf8'));
        } catch (e) {
            console.warn(`Could not parse ${lng} translation file. Starting fresh.`);
        }
    }

    // Sync: keep all keys from EN, use LNG value if available, else fallback to EN
    const syncedData = {};
    Object.keys(enData).forEach(key => {
        if (lngData[key]) {
            syncedData[key] = lngData[key];
        } else {
            syncedData[key] = enData[key]; // Fallback to English
        }
    });

    // Ensure directory exists
    const lngDir = path.dirname(lngPath);
    if (!fs.existsSync(lngDir)) {
        fs.mkdirSync(lngDir, { recursive: true });
    }

    fs.writeFileSync(lngPath, JSON.stringify(syncedData, null, 2), 'utf8');
    console.log(`Synced ${lng}`);
});
