import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { fullname, email, subject, message } = await request.json();

    if (!fullname || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!adminDb) {
      console.error('Firebase Admin DB is not initialized. Please verify your environment variables.');
      return NextResponse.json(
        { message: 'Database service is currently unavailable.' },
        { status: 500 }
      );
    }

    // Store contact message in Firestore collection
    await adminDb.collection('contact_messages').add({
      fullname,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error saving contact message:', error);
    const err = error as { code?: number; message?: string };
    const isFirestoreNotInitialized = err && (err.code === 5 || (err.message && err.message.includes('NOT_FOUND')));
    const message = isFirestoreNotInitialized
      ? 'Database service has not been initialized. Please enable/initialize Cloud Firestore in your Firebase Console.'
      : 'An internal error occurred while processing your message.';
    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
