import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import nodemailer from 'nodemailer';

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

    // Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use host/port for other providers
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullname} (Contact Form)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // The email where you want to receive notifications
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your website contact form.

Name: ${fullname}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
      html: `<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${fullname}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully.');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // We don't return an error here because the message was successfully saved to Firestore
    }

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
