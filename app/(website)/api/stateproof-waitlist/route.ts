import { NextResponse } from 'next/server';
import { escapeHtml, sendEmail } from '@/lib/console/auth';
import { welcomeEmail } from './welcome';

// StateProof waitlist sign-ups from getstateproof.com are emailed to the Receipters inbox.
const INBOX = process.env.STATEPROOF_WAITLIST_EMAIL || process.env.DEMO_REQUEST_EMAIL || 'receipters@receipters.com';

const CHANNELS: Record<string, string> = {
  shopify: 'Shopify',
  amazon: 'Amazon',
  etsy: 'Etsy',
  website: 'Own website',
  other: 'Somewhere else',
};
const SALES: Record<string, string> = {
  under50: 'Under $50,000',
  '50to100': '$50,000 to $100,000',
  '100to500': '$100,000 to $500,000',
  '500to1m': '$500,000 to $1 million',
  over1m: 'Over $1 million',
};

// Light limit on sign-ups per address, so the form can't be used to flood someone's inbox.
// Kept in memory, so it resets when the server restarts; that is enough for a waitlist.
const recent = new Map<string, number[]>();
function tooMany(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > max;
}

const clean = (value: unknown, max: number) => String(value ?? '').trim().slice(0, max);
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ');

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Hidden field that people never see; automated spam fills it in.
  if (clean(body.website, 200)) return NextResponse.json({ message: 'Received.' }, { status: 200 });

  const name = oneLine(clean(body.name, 120));
  const email = oneLine(clean(body.email, 200));
  const channels = Array.isArray(body.channels)
    ? body.channels.map(String).filter((c) => c in CHANNELS).map((c) => CHANNELS[c])
    : [];
  const sales = SALES[String(body.sales)] ?? 'Not given';
  const langCode = body.lang === 'es' ? 'es' : 'en';
  const lang = langCode === 'es' ? 'Spanish' : 'English';

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Please give your name and a valid email.' }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Sells on', channels.join(', ') || 'Not given'],
    ['Annual sales', sales],
    ['Page language', lang],
  ];
  const text = `New StateProof waitlist sign-up\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}`;
  const html = `<h2>New StateProof waitlist sign-up</h2><table>${rows
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join('')}</table>`;

  const ok = await sendEmail({
    to: INBOX,
    subject: `StateProof waitlist: ${name}${channels.length ? ` (${channels.join(', ')})` : ''}`,
    html,
    text,
    replyTo: email,
  });
  if (!ok) return NextResponse.json({ message: 'Email is not available right now.' }, { status: 503 });

  // Welcome email to the person who signed up, in English and Spanish. A failure here doesn't undo the sign-up.
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (!tooMany(`email:${email.toLowerCase()}`, 2, 24 * 60 * 60 * 1000) && !tooMany(`ip:${ip}`, 10, 60 * 60 * 1000)) {
    const welcome = welcomeEmail(name, langCode);
    await sendEmail({ to: email, subject: welcome.subject, html: welcome.html, text: welcome.text, replyTo: 'info@receipters.com', fromName: 'StateProof' }).catch(
      (err) => console.error('StateProof welcome email failed:', err),
    );
  }
  return NextResponse.json({ message: 'Received.' }, { status: 200 });
}
