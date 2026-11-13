// Amplify variables exist at build time only. Copy the server-side ones into .env.production so the
// running server (API routes) can read them.
//
// Values are written in single quotes: the env-file parser leaves single-quoted text exactly as it is
// (no escape handling), so spaces, < >, double quotes and the literal \n sequences used in
// FIREBASE_PRIVATE_KEY all survive unchanged. A value that itself contains a single quote is skipped
// with a warning rather than written wrongly.
const fs = require('fs');
const keep = /^(RESEND_API_KEY|CONSOLE_|FIREBASE_)/;
const lines = [];
for (const key of Object.keys(process.env).filter((k) => keep.test(k))) {
  const value = process.env[key];
  if (value.includes("'")) {
    console.warn(`Skipping ${key}: the value contains a single quote.`);
    continue;
  }
  lines.push(`${key}='${value}'`);
}
if (lines.length) fs.appendFileSync('.env.production', lines.join('\n') + '\n');
console.log(`Wrote ${lines.length} server variable(s) to .env.production`);
