// Welcome email for people who join the StateProof waitlist on getstateproof.com.
// English and Spanish are in the same email; the language the person used comes first.

import { escapeHtml } from '@/lib/console/auth';

const CONTACT = 'info@receipters.com';
const SITE = 'https://getstateproof.com';
const ADDRESS = 'Receipters LLC, 355 Ridgewood Ave, Suite 1, Newark, NJ 07112, USA';

type Copy = {
  label: string;
  hello: (name: string) => string;
  intro: string;
  nextTitle: string;
  next: string[];
  doesTitle: string;
  does: string[];
  meanwhile: string;
  linkStates: string;
  linkQuestions: string;
  remove: string;
  signoff: string;
};

const COPY: Record<'en' | 'es', Copy> = {
  en: {
    label: 'English',
    hello: (name) => `Hi ${name},`,
    intro: "Thanks for joining the StateProof waitlist. You're on the list.",
    nextTitle: 'What happens next',
    next: [
      "We'll email you before the pilot opens, so you can be one of the first sellers to use StateProof.",
      'Early sellers get a free check of the states where they may already owe sales tax.',
      'Reply to this email any time if you have a question. A person reads every reply.',
    ],
    doesTitle: 'What StateProof AI will do for you',
    does: [
      'Add up your Shopify, Amazon and own-store sales, state by state.',
      "Warn you before you cross a state's sales tax limit, and forecast the month you will.",
      'Keep your receipts, photos and PDFs sorted and ready for the IRS and your accountant.',
    ],
    meanwhile: 'In the meantime, see the sales tax limit for every state:',
    linkStates: 'Rules by state',
    linkQuestions: 'Questions',
    remove: `You're getting this because this address was used to join the waitlist on getstateproof.com. If that wasn't you, or you'd like us to delete your details, reply "remove" or write to ${CONTACT}.`,
    signoff: 'The StateProof team at Receipters LLC',
  },
  es: {
    label: 'Español',
    hello: (name) => `Hola, ${name}:`,
    intro: 'Gracias por unirte a la lista de espera de StateProof. Ya estás en la lista.',
    nextTitle: 'Qué pasa ahora',
    next: [
      'Te escribiremos antes de que abra el piloto, para que seas de los primeros vendedores en usar StateProof.',
      'Los primeros vendedores reciben una revisión gratuita de los estados donde podrían deber ya el impuesto sobre las ventas.',
      'Responde a este correo cuando quieras si tienes alguna pregunta. Una persona lee cada respuesta.',
    ],
    doesTitle: 'Lo que StateProof AI hará por ti',
    does: [
      'Sumar tus ventas de Shopify, Amazon y tu propia tienda, estado por estado.',
      'Avisarte antes de que superes el límite del impuesto sobre las ventas de un estado y prever el mes en que lo harás.',
      'Mantener tus recibos, fotos y PDF ordenados y listos para el IRS y tu contador.',
    ],
    meanwhile: 'Mientras tanto, consulta el límite del impuesto sobre las ventas de cada estado:',
    linkStates: 'Reglas por estado',
    linkQuestions: 'Preguntas',
    remove: `Recibes este correo porque esta dirección se usó para unirse a la lista de espera en getstateproof.com. Si no fuiste tú, o quieres que eliminemos tus datos, responde "eliminar" o escribe a ${CONTACT}.`,
    signoff: 'El equipo de StateProof en Receipters LLC',
  },
};

const GREEN = '#12392c';
const INK = '#0f1d18';
const MUTED = '#4f5f58';
const LINE = '#d6dedb';
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function section(c: Copy, name: string, lang: 'en' | 'es') {
  const li = (items: string[]) =>
    items
      .map(
        (i) =>
          `<tr><td valign="top" style="padding:0 10px 8px 0;color:${GREEN};font-weight:700;">&#10003;</td><td style="padding:0 0 8px;color:${INK};font-size:15px;line-height:22px;">${escapeHtml(i)}</td></tr>`,
      )
      .join('');
  return `
  <tr><td lang="${lang}" style="padding:28px 32px 8px;font-family:${FONT};">
    <p style="margin:0 0 16px;display:inline-block;padding:3px 8px;border:1px solid ${GREEN};color:${GREEN};font-size:12px;font-weight:700;">${c.label}</p>
    <p style="margin:0 0 12px;color:${INK};font-size:17px;line-height:24px;font-weight:700;">${escapeHtml(c.hello(name))}</p>
    <p style="margin:0 0 22px;color:${INK};font-size:15px;line-height:23px;">${escapeHtml(c.intro)}</p>
    <p style="margin:0 0 10px;color:${INK};font-size:16px;font-weight:700;">${escapeHtml(c.nextTitle)}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">${li(c.next)}</table>
    <p style="margin:0 0 10px;color:${INK};font-size:16px;font-weight:700;">${escapeHtml(c.doesTitle)}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">${li(c.does)}</table>
    <p style="margin:0 0 14px;color:${INK};font-size:15px;line-height:23px;">${escapeHtml(c.meanwhile)}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr>
      <td style="background:${GREEN};"><a href="${SITE}/states" style="display:inline-block;padding:11px 18px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;">${escapeHtml(c.linkStates)}</a></td>
      <td style="width:10px;"></td>
      <td style="border:2px solid ${GREEN};"><a href="${SITE}/#faq" style="display:inline-block;padding:9px 16px;color:${GREEN};font-size:15px;font-weight:700;text-decoration:none;">${escapeHtml(c.linkQuestions)}</a></td>
    </tr></table>
    <p style="margin:0 0 6px;color:${INK};font-size:15px;">${escapeHtml(c.signoff)}</p>
    <p style="margin:0 0 20px;color:${MUTED};font-size:13px;line-height:19px;">${escapeHtml(c.remove)}</p>
  </td></tr>`;
}

function textSection(c: Copy, name: string) {
  return [
    `[${c.label}]`,
    '',
    c.hello(name),
    '',
    c.intro,
    '',
    c.nextTitle,
    ...c.next.map((i) => `- ${i}`),
    '',
    c.doesTitle,
    ...c.does.map((i) => `- ${i}`),
    '',
    c.meanwhile,
    `${c.linkStates}: ${SITE}/states`,
    `${c.linkQuestions}: ${SITE}/#faq`,
    '',
    c.signoff,
    '',
    c.remove,
  ].join('\n');
}

export function welcomeEmail(name: string, lang: 'en' | 'es') {
  const order: ('en' | 'es')[] = lang === 'es' ? ['es', 'en'] : ['en', 'es'];
  const first = name.split(/\s+/)[0] || name;
  const subject = lang === 'es' ? 'Ya estás en la lista de StateProof / You’re on the StateProof list' : 'You’re on the StateProof list / Ya estás en la lista de StateProof';
  const preheader = `${COPY[order[0]].intro} ${COPY[order[1]].intro}`;
  const divider = `<tr><td style="padding:0 32px;"><div style="border-top:1px solid ${LINE};font-size:0;line-height:0;">&nbsp;</div></td></tr>`;

  const html = `<!DOCTYPE html><html lang="${order[0]}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>StateProof</title></head>
<body style="margin:0;padding:0;background:#f4f6f5;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f5;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${LINE};">
  <tr><td style="background:${GREEN};padding:20px 32px;font-family:${FONT};">
    <span style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.3px;">&#10004;&nbsp; StateProof</span>
  </td></tr>
  <tr><td style="background:#dcebe4;height:4px;font-size:0;line-height:0;border-top:3px solid #2f7a57;">&nbsp;</td></tr>
  ${section(COPY[order[0]], first, order[0])}
  ${divider}
  ${section(COPY[order[1]], first, order[1])}
  <tr><td style="background:#0c2a20;padding:18px 32px;font-family:${FONT};color:rgba(255,255,255,0.75);font-size:12px;line-height:18px;">
    StateProof &middot; ${escapeHtml(ADDRESS)}<br>
    <a href="${SITE}" style="color:#ffffff;">getstateproof.com</a> &middot; <a href="${SITE}/privacy-notice" style="color:#ffffff;">Privacy / Privacidad</a> &middot; <a href="mailto:${CONTACT}" style="color:#ffffff;">${CONTACT}</a>
  </td></tr>
</table></td></tr></table></body></html>`;

  const text = `${textSection(COPY[order[0]], first)}\n\n------------------------------\n\n${textSection(COPY[order[1]], first)}\n\n--\nStateProof, ${ADDRESS}\n${SITE}`;
  return { subject, html, text };
}
