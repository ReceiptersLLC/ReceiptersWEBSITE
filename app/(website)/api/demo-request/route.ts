import { NextResponse } from 'next/server';
import { products } from '@/lib/siteLinks';
import { escapeHtml, sendEmail } from '@/lib/console/auth';

// Demo requests from the product pages are emailed to the sales inbox.
const DEMO_INBOX = process.env.DEMO_REQUEST_EMAIL || 'receipters@receipters.com';
const OUTLETS = ['1', '2-5', '6-20', '20+'];
const LIMITS = { fullName: 120, businessName: 160, email: 200, phone: 40, message: 2000 };

const clean = (value: unknown, max: number) => String(value ?? '').trim().slice(0, max);
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ');

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Hidden field that people never see; automated spam fills it in.
  if (clean(body.website, 200)) return NextResponse.json({ message: 'Request received.' }, { status: 200 });

  const fullName = oneLine(clean(body.fullName, LIMITS.fullName));
  const businessName = oneLine(clean(body.businessName, LIMITS.businessName));
  const email = oneLine(clean(body.email, LIMITS.email));
  const phone = oneLine(clean(body.phone, LIMITS.phone));
  const message = clean(body.message, LIMITS.message);
  const outlets = OUTLETS.includes(String(body.outlets)) ? String(body.outlets) : '';
  const product = products.find((p) => p.slug === body.product);
  const productName = product ? product.name : 'Not sure yet';

  if (!fullName || !businessName || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Please fill in all required fields.' }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Product', productName],
    ['Name', fullName],
    ['Business', businessName],
    ['Email', email],
    ['Phone or WhatsApp', phone],
    ['Outlets', outlets || 'Not given'],
    ['Message', message || 'None'],
  ];
  const text = `New demo request from the Receipters website.\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n`;
  const html = `<h3>New demo request</h3><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('')}</table>`;

  try {
    const sent = await sendEmail({
      to: DEMO_INBOX,
      subject: `Demo request: ${productName} - ${businessName}`,
      text,
      html,
      replyTo: email,
    });
    if (!sent) {
      return NextResponse.json({ message: 'The demo request service is currently unavailable.' }, { status: 503 });
    }
  } catch (error) {
    console.error('Demo request email failed:', (error as Error).message);
    return NextResponse.json({ message: 'The demo request service is currently unavailable.' }, { status: 503 });
  }

  return NextResponse.json({ message: 'Request received.' }, { status: 200 });
}
