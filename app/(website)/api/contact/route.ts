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

    // Store the message when Firestore is configured. A storage failure must
    // not stop the email notification below.
    let stored = false;
    if (adminDb) {
      try {
        await adminDb.collection('contact_messages').add({
          fullname,
          email,
          subject,
          message,
          createdAt: new Date().toISOString(),
        });
        stored = true;
      } catch (dbError) {
        console.error('Failed to store contact message:', dbError);
      }
    }

    const emailConfigured = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
    if (!stored && !emailConfigured) {
      console.error('Contact form: neither Firestore nor email is configured.');
      return NextResponse.json(
        { message: 'The contact service is currently unavailable.' },
        { status: 503 }
      );
    }

    const escapeHtml = (value: string) =>
      String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    const headerSafe = (value: string) => String(value).replace(/[\r\n"<>]/g, ' ').trim();

    // Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use host/port for other providers
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${headerSafe(fullname)} (Contact Form)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // The email where you want to receive notifications
      subject: `New Contact Form Submission: ${headerSafe(subject)}`,
      text: `You have received a new message from your website contact form.

Name: ${fullname}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
      html: `<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${escapeHtml(fullname)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    };

    if (emailConfigured) {
      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        if (!stored) {
          return NextResponse.json(
            { message: 'The contact service is currently unavailable.' },
            { status: 503 }
          );
        }
      }
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
