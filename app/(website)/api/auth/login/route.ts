import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json({ message: 'Token is required' }, { status: 400 });
    }

    if (!adminAuth) {
      console.error('Firebase Admin Auth is not configured.');
      return NextResponse.json({ message: 'Authentication service is unavailable' }, { status: 500 });
    }

    // Session duration (e.g. 5 days)
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    
    // Create the session cookie from the ID token
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ status: 'success' }, { status: 200 });

    // Set the cookie on the response
    response.cookies.set('session', sessionCookie, {
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
    });

    return response;
  } catch (error: unknown) {
    console.error('Error creating session cookie:', error);
    const message = error instanceof Error ? error.message : 'Unauthorized access';
    return NextResponse.json({ message }, { status: 401 });
  }
}
