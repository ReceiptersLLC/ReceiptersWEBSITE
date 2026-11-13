import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SESSION_COOKIE, readToken, sendEmail } from '@/lib/console/auth';
import { renderEmail } from '@/lib/console/emailTemplate';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  const owner = readToken('session', (await cookies()).get(SESSION_COOKIE)?.value);
  if (!owner) return NextResponse.json({ message: 'Sign in to the owners console first.' }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as Record<string, string>;
  const name = (body.name || '').trim();
  const email = (body.email || '').trim().toLowerCase();
  const businessId = (body.businessId || '').trim();
  const role = body.role === 'Owner' ? 'Owner' : 'Admin';
  const productName = (body.productName || '').trim();
  const product = (body.product || '').trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !businessId || !product || !productName) {
    return NextResponse.json({ message: 'Name, a valid email, business ID and product are required.' }, { status: 400 });
  }

  let stored = false;
  if (adminDb) {
    try {
      await adminDb.collection('console_invites').add({
        product, businessId, name, email, role, invitedBy: owner, status: 'invited', createdAt: new Date().toISOString(),
      });
      stored = true;
    } catch (error) {
      console.error('Failed to store console invite:', error);
    }
  }

  const { html, text } = renderEmail({
    eyebrow: 'Invitation',
    heading: `You have been invited, ${name}`,
    intro: [
      `You have been invited as ${role.toLowerCase()} of ${productName} (business ID ${businessId}) on Receipters.`,
      'The Receipters team will contact you with your access details.',
    ],
    notice: {
      title: 'Not expecting this?',
      body: 'Ignore this email, or write to support@receipters.com and we will remove the invitation.',
    },
    reason: `You received this because ${owner} invited ${email} to ${productName}.`,
  });
  const sent = await sendEmail({ to: email, subject: `You have been invited to manage ${productName} on Receipters`, html, text });

  if (!sent && !stored) {
    return NextResponse.json({ message: 'The invite could not be sent or saved. Email and storage are not set up yet.' }, { status: 503 });
  }
  return NextResponse.json({ message: sent ? 'Invite sent.' : 'Invite saved. Email is not set up, so no message was sent.', sent, stored });
}
