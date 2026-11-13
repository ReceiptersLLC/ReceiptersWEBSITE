import { NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/lib/console/auth';

export async function POST() {
  const response = NextResponse.json({ message: 'Signed out.' });
  response.cookies.set(SESSION_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
  return response;
}
