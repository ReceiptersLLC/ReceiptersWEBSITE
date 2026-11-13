import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SESSION_COOKIE, escapeHtml, readToken, sendEmail } from '@/lib/console/auth';
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

  const sent = await sendEmail({
    to: email,
    subject: `You have been invited to manage ${productName} on Receipters`,
    text: `Hello ${name},\n\nYou have been invited as ${role.toLowerCase()} of ${productName} (business ID ${businessId}) on Receipters.\n\nThe Receipters team will contact you with your access details.\n\nReceipters`,
    html: `<p>Hello ${escapeHtml(name)},</p><p>You have been invited as <strong>${escapeHtml(role.toLowerCase())}</strong> of <strong>${escapeHtml(productName)}</strong> (business ID ${escapeHtml(businessId)}) on Receipters.</p><p>The Receipters team will contact you with your access details.</p><p>Receipters</p>`,
  });

  if (!sent && !stored) {
    return NextResponse.json({ message: 'The invite could not be sent or saved. Email and storage are not set up yet.' }, { status: 503 });
  }
  return NextResponse.json({ message: sent ? 'Invite sent.' : 'Invite saved. Email is not set up, so no message was sent.', sent, stored });
}
