import { NextResponse } from 'next/server';
import { readTokenFull, setSessionCookie } from '@/lib/console/auth';
import { MIN_PASSWORD_LENGTH, getOwner, passwordStoreConfigured, savePassword } from '@/lib/console/passwords';

export async function POST(request: Request) {
  const { token, password } = (await request.json().catch(() => ({}))) as { token?: string; password?: string };
  const link = readTokenFull('link', token);
  if (!link) return NextResponse.json({ message: 'This link has expired. Request a new one.' }, { status: 401 });
  if (!password || password.length < MIN_PASSWORD_LENGTH || password.length > 200) {
    return NextResponse.json({ message: `Use a password of at least ${MIN_PASSWORD_LENGTH} characters.` }, { status: 400 });
  }
  if (!passwordStoreConfigured()) {
    return NextResponse.json({ message: 'Password storage is not set up yet.' }, { status: 503 });
  }

  try {
    const owner = await getOwner(link.email);
    // A link only works until a password has been set after it was issued, so it cannot be used twice.
    if (owner.passwordUpdatedAt && owner.passwordUpdatedAt >= link.issuedAt) {
      return NextResponse.json({ message: 'This link was already used. Request a new one.' }, { status: 401 });
    }
    await savePassword(link.email, password);
    const response = NextResponse.json({ message: 'Password saved.' });
    setSessionCookie(response, link.email);
    return response;
  } catch (error) {
    console.error('Setting console password failed:', error);
    return NextResponse.json({ message: 'The password could not be saved. Try again shortly.' }, { status: 503 });
  }
}
