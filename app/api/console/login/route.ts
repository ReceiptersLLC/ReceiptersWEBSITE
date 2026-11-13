import { NextResponse } from 'next/server';
import { isOwnerEmail, secretConfigured, setSessionCookie } from '@/lib/console/auth';
import { clearFailures, getOwner, passwordStoreConfigured, recordFailure, verifyPassword } from '@/lib/console/passwords';

export async function POST(request: Request) {
  const { email, password } = (await request.json().catch(() => ({}))) as { email?: string; password?: string };
  const address = (email || '').trim().toLowerCase();
  if (!address || !password) return NextResponse.json({ message: 'Enter your email and password.' }, { status: 400 });
  if (!secretConfigured() || !passwordStoreConfigured()) {
    return NextResponse.json({ message: 'Password sign-in is not set up yet.' }, { status: 503 });
  }

  const wrong = NextResponse.json({ message: 'The email or password is not correct.' }, { status: 401 });

  try {
    const owner = isOwnerEmail(address) ? await getOwner(address) : {};
    if (owner.lockedUntil && owner.lockedUntil > Date.now()) {
      return NextResponse.json(
        { message: 'Too many wrong attempts. Try again in 15 minutes, or email yourself a link to reset the password.' },
        { status: 429 }
      );
    }
    const ok = verifyPassword(password, owner.passwordHash) && isOwnerEmail(address);
    if (!ok) {
      if (isOwnerEmail(address)) await recordFailure(address, owner);
      return wrong;
    }
    await clearFailures(address);
    const response = NextResponse.json({ message: 'Signed in.' });
    setSessionCookie(response, address);
    return response;
  } catch (error) {
    console.error('Console login failed:', error);
    return NextResponse.json({ message: 'Sign-in is unavailable right now. Try again shortly.' }, { status: 503 });
  }
}
