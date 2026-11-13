import { createHmac, timingSafeEqual } from 'crypto';

/** Emails allowed into the owners console. Fixed in code; CONSOLE_OWNER_EMAILS can extend it later. */
export const CONSOLE_OWNER_EMAIL = 'receipters@receipters.com';

export const SESSION_COOKIE = 'rc_console';
const SESSION_SECONDS = 8 * 60 * 60;
const LINK_SECONDS = 15 * 60;

export function ownerEmails(): string[] {
  const extra = (process.env.CONSOLE_OWNER_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return [CONSOLE_OWNER_EMAIL, ...extra];
}

export const isOwnerEmail = (email: string) => ownerEmails().includes(email.trim().toLowerCase());

function secret(): string | null {
  return process.env.CONSOLE_SESSION_SECRET && process.env.CONSOLE_SESSION_SECRET.length >= 16
    ? process.env.CONSOLE_SESSION_SECRET
    : null;
}

const b64 = (value: string) => Buffer.from(value).toString('base64url');
const unb64 = (value: string) => Buffer.from(value, 'base64url').toString();

function sign(kind: string, payload: string, key: string) {
  return createHmac('sha256', key).update(`${kind}.${payload}`).digest('base64url');
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Signed, expiring token for either an emailed sign-in link ("link") or a browser session ("session"). */
export function createToken(kind: 'link' | 'session', email: string): string | null {
  const key = secret();
  if (!key) return null;
  const ttl = kind === 'link' ? LINK_SECONDS : SESSION_SECONDS;
  const payload = b64(JSON.stringify({ e: email.toLowerCase(), x: Math.floor(Date.now() / 1000) + ttl }));
  return `${payload}.${sign(kind, payload, key)}`;
}

export function readToken(kind: 'link' | 'session', token: string | undefined): string | null {
  const key = secret();
  if (!key || !token) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(kind, payload, key))) return null;
  try {
    const { e, x } = JSON.parse(unb64(payload)) as { e: string; x: number };
    if (!e || x < Math.floor(Date.now() / 1000) || !isOwnerEmail(e)) return null;
    return e;
  } catch {
    return null;
  }
}

export const sessionMaxAge = SESSION_SECONDS;

export const secretConfigured = () => secret() !== null;

/** Sends an email through the Resend HTTP API. Returns false when email is not configured. */
export async function sendEmail(opts: { to: string; subject: string; html: string; text: string }): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  // CONSOLE_FROM_EMAIL may hold a bare address or "Name <address>". Build a valid sender either way,
  // because characters like < and > can be mangled on their way through the hosting build.
  const configured = process.env.CONSOLE_FROM_EMAIL || '';
  const address = configured.match(/[^\s<>"']+@[^\s<>"']+\.[^\s<>"']+/)?.[0] || 'receipters@receipters.com';
  const from = `Receipters <${address}>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [opts.to], subject: opts.subject, html: opts.html, text: opts.text }),
  });
  if (!res.ok) console.error('Resend error:', res.status, await res.text().catch(() => ''));
  return res.ok;
}

export const escapeHtml = (v: string) =>
  String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Public address used in emailed links and redirects. It is fixed on purpose: request headers can be forged,
 * and a forged host would put a valid sign-in token in a link to someone else's site.
 */
export function publicBaseUrl(requestOrigin: string): string {
  const configured = process.env.CONSOLE_BASE_URL;
  if (configured) return configured.replace(/\/$/, '');
  return process.env.NODE_ENV === 'production' ? 'https://www.receipters.com' : requestOrigin;
}
