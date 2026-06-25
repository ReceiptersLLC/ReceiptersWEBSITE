import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    if (!adminAuth) {
      return NextResponse.json(
        { user: null, message: 'Authentication service is unavailable' },
        { status: 500 }
      );
    }

    // Verify the session cookie (second param `true` checks if the user has been revoked/disabled)
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);

    return NextResponse.json(
      {
        user: {
          uid: decodedClaims.uid,
          email: decodedClaims.email,
          name: decodedClaims.name || '',
          picture: decodedClaims.picture || '',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Session verification failed:', error);
    // Return null user if cookie is expired or invalid
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
