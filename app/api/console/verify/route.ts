import { NextResponse } from 'next/server';
import { publicBaseUrl, readToken, setSessionCookie } from '@/lib/console/auth';
import { passwordStoreConfigured } from '@/lib/console/passwords';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const base = publicBaseUrl(url.origin);
  const token = url.searchParams.get('token') || undefined;
  const email = readToken('link', token);
  if (!email) return NextResponse.redirect(`${base}/console?error=link`);

  // With password storage, the link opens the "create your password" form. Without it, the link signs you in.
  if (passwordStoreConfigured()) {
    return NextResponse.redirect(`${base}/console?setup=${encodeURIComponent(token as string)}`);
  }
  const response = NextResponse.redirect(`${base}/console`);
  setSessionCookie(response, email);
  return response;
}
