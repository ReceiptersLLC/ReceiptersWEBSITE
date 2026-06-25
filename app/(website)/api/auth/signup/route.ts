import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { email, password, firstName, middleName, lastName, phoneNumber } = await request.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!adminAuth || !adminDb) {
      console.error('Firebase Admin is not fully configured.');
      return NextResponse.json({ message: 'Authentication service is unavailable' }, { status: 500 });
    }

    // Defensive formatting for phone number to match Firebase's required E.164 format
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    const formattedPhone = phoneNumber && phoneRegex.test(phoneNumber) ? phoneNumber : undefined;

    // Create user record in Firebase Auth
    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`.trim(),
      ...(formattedPhone ? { phoneNumber: formattedPhone } : {}),
    });

    // Store user metadata in Firestore
    try {
      await adminDb.collection('users').doc(userRecord.uid).set({
        firstName,
        middleName: middleName || '',
        lastName,
        email,
        phoneNumber: phoneNumber || '',
        createdAt: new Date().toISOString(),
      });
    } catch (firestoreError: unknown) {
      console.error('Error storing user metadata in Firestore. Please ensure Cloud Firestore is enabled and initialized in your Firebase Console:', firestoreError);
      // Proceed since the authentication record in Firebase Auth was successfully created
    }

    return NextResponse.json({ uid: userRecord.uid, message: 'User created successfully' }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error during sign-up:', error);

    // Map Firebase Auth error codes to user-friendly messages and appropriate status codes
    const err = error as { code?: string; message?: string };
    const errorCode = err?.code;
    if (errorCode) {
      let status = 400;
      let message = err.message || 'An error occurred during registration.';

      if (errorCode === 'auth/email-already-exists') {
        status = 409;
        message = 'The email address is already in use by another account.';
      } else if (errorCode === 'auth/invalid-phone-number') {
        status = 400;
        message = 'The phone number provided is invalid. Please check the country code and number.';
      } else if (errorCode === 'auth/invalid-email') {
        status = 400;
        message = 'The email address is invalid.';
      } else if (errorCode === 'auth/invalid-password') {
        status = 400;
        message = 'The password must be at least 6 characters.';
      }

      return NextResponse.json({ message, code: errorCode }, { status });
    }

    const message = error instanceof Error ? error.message : 'An error occurred during registration. Please try again.';
    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
