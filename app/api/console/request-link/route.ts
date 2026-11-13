import { NextResponse } from 'next/server';
import { createToken, escapeHtml, isOwnerEmail, secretConfigured, sendEmail } from '@/lib/console/auth';

export async function POST(request: Request) {
  const { email } = (await request.json().catch(() => ({}))) as { email?: string };
  const address = (email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
    return NextResponse.json({ message: 'Enter a valid email address.' }, { status: 400 });
  }
  if (!secretConfigured()) {
    console.error('Console sign-in: CONSOLE_SESSION_SECRET is missing or shorter than 16 characters.');
    return NextResponse.json({ message: 'Console sign-in is not set up yet.' }, { status: 503 });
  }

  // The same answer is given whether or not the address is allowed, so the owner list is not revealed.
  const generic = NextResponse.json({ message: 'If that address can sign in, a link is on its way.' });
  if (!isOwnerEmail(address)) return generic;

  const token = createToken('link', address);
  const base = (process.env.CONSOLE_BASE_URL || new URL(request.url).origin).replace(/\/$/, '');
  const link = `${base}/api/console/verify?token=${encodeURIComponent(token as string)}`;

  const sent = await sendEmail({
    to: address,
    subject: 'Your Receipters owners console sign-in link',
    text: `Use this link to sign in to the Receipters owners console. It works once you open it and expires in 15 minutes.\n\n${link}\n\nIf you did not ask for this, ignore this email.`,
    html: `<p>Use this link to sign in to the Receipters owners console. It expires in 15 minutes.</p><p><a href="${escapeHtml(link)}">Sign in to the owners console</a></p><p>If you did not ask for this, ignore this email.</p>`,
  });

  if (!sent) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[console] Email not configured. Development sign-in link:', link);
      return generic;
    }
    return NextResponse.json({ message: 'Email sending is not set up yet.' }, { status: 503 });
  }
  return generic;
}
