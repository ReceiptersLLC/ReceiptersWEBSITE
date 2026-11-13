import { NextResponse } from 'next/server';
import { SESSION_COOKIE, createToken, readToken, sessionMaxAge } from '@/lib/console/auth';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const base = (process.env.CONSOLE_BASE_URL || url.origin).replace(/\/$/, '');
  const email = readToken('link', url.searchParams.get('token') || undefined);
  if (!email) return NextResponse.redirect(`${base}/console?error=link`);

  const session = createToken('session', email) as string;
  const response = NextResponse.redirect(`${base}/console`);
  response.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: sessionMaxAge,
  });
  return response;
}
