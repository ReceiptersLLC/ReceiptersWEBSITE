import { NextResponse } from 'next/server';
import { createToken, isOwnerEmail, publicBaseUrl, secretConfigured, sendEmail } from '@/lib/console/auth';
import { renderEmail } from '@/lib/console/emailTemplate';

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
  const base = publicBaseUrl(new URL(request.url).origin);
  const link = `${base}/api/console/verify?token=${encodeURIComponent(token as string)}`;

  const { html, text } = renderEmail({
    eyebrow: 'Sign-in link',
    heading: 'Sign in to the owners console',
    intro: ['Use the button below to sign in to the Receipters owners console. The link works for 15 minutes.'],
    action: { label: 'Sign in to the console', url: link },
    stepsTitle: 'How to use it',
    steps: [
      'Open the link on the device where you asked for it.',
      'You are signed in and taken to the console.',
      'Sign out from the top right when you are done. Sessions end after 8 hours.',
    ],
    notice: {
      title: 'Keep this link to yourself.',
      body: 'Nobody from Receipters will ever ask you to forward it. If you did not ask for it, ignore this email and nothing happens.',
    },
    reason: `You received this because someone asked for a sign-in link for ${address}.`,
  });
  const sent = await sendEmail({ to: address, subject: 'Your Receipters owners console sign-in link', html, text });

  if (!sent) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[console] Email not configured. Development sign-in link:', link);
      return generic;
    }
    return NextResponse.json({ message: 'Email sending is not set up yet.' }, { status: 503 });
  }
  return generic;
}
