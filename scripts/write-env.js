// Amplify variables exist at build time only. Copy the server-side ones into .env.production so the
// running server (API routes) can read them. Values are JSON-quoted so spaces, < > and newlines survive.
const fs = require('fs');
const keep = /^(RESEND_API_KEY|CONSOLE_|FIREBASE_)/;
const lines = Object.keys(process.env)
  .filter((k) => keep.test(k))
  .map((k) => `${k}=${JSON.stringify(process.env[k])}`);
if (lines.length) fs.appendFileSync('.env.production', lines.join('\n') + '\n');
console.log(`Wrote ${lines.length} server variable(s) to .env.production`);
