import { escapeHtml } from '@/lib/console/auth';

const SITE = 'https://www.receipters.com';

export type EmailContent = {
  /** Small label above the heading, e.g. "Sign-in link". */
  eyebrow: string;
  heading: string;
  /** Plain paragraphs shown under the heading. */
  intro: string[];
  /** A single call-to-action button. */
  action?: { label: string; url: string };
  /** A one-time code, shown in a box. */
  code?: { value: string; caption: string };
  stepsTitle?: string;
  steps?: string[];
  /** Highlighted safety note. */
  notice?: { title: string; body: string };
  /** Why the person received this email. */
  reason: string;
};

const BLUE = '#2E388F';
const INK = '#0E1433';
const MUTED = '#4A5170';
const LINE = '#D9DEEA';
const SKY = '#7CC0EE';
const FONT = "Arial, Helvetica, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

/** Branded, email-client-safe HTML (tables and inline styles only) plus a plain-text twin. */
export function renderEmail(c: EmailContent): { html: string; text: string } {
  const e = escapeHtml;

  const intro = c.intro
    .map((p) => `<p style="margin:0 0 14px;font:15px/1.6 ${FONT};color:${MUTED};">${e(p)}</p>`)
    .join('');

  const action = c.action
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0 8px;"><tr><td style="background:${BLUE};">
         <a href="${e(c.action.url)}" style="display:inline-block;padding:14px 28px;font:bold 15px ${FONT};color:#ffffff;text-decoration:none;">${e(c.action.label)}</a>
       </td></tr></table>
       <p style="margin:10px 0 0;font:12px/1.5 ${FONT};color:${MUTED};">Button not working? Copy this address into your browser:<br>
         <a href="${e(c.action.url)}" style="color:${BLUE};word-break:break-all;">${e(c.action.url)}</a></p>`
    : '';

  const code = c.code
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:22px 0 8px;background:#F3F5F9;border:1px solid ${LINE};border-top:3px solid ${SKY};"><tr><td align="center" style="padding:22px 12px;">
         <div style="font:bold 34px/1 'Courier New',monospace;letter-spacing:10px;color:${BLUE};">${e(c.code.value)}</div>
         <div style="margin-top:10px;font:12px ${FONT};color:${MUTED};">${e(c.code.caption)}</div>
       </td></tr></table>`
    : '';

  const steps =
    c.steps && c.steps.length
      ? `<p style="margin:28px 0 12px;font:bold 11px ${FONT};letter-spacing:1.5px;text-transform:uppercase;color:${BLUE};">${e(c.stepsTitle || 'How to use it')}</p>
         <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${c.steps
           .map(
             (s, i) => `<tr>
               <td valign="top" width="30" style="padding:0 0 10px;"><div style="width:22px;height:22px;background:${BLUE};color:#fff;text-align:center;font:bold 12px/22px ${FONT};">${i + 1}</div></td>
               <td valign="top" style="padding:2px 0 10px;font:14px/1.5 ${FONT};color:${INK};">${e(s)}</td></tr>`
           )
           .join('')}</table>`
      : '';

  const notice = c.notice
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 0;background:#EAF4FD;border-left:3px solid ${BLUE};"><tr><td style="padding:14px 16px;font:13px/1.55 ${FONT};color:${INK};">
         <strong>${e(c.notice.title)}</strong> ${e(c.notice.body)}</td></tr></table>`
    : '';

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(c.heading)}</title></head>
<body style="margin:0;padding:0;background:#EEF1F7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF1F7;"><tr><td align="center" style="padding:28px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-top:4px solid ${SKY};">
    <tr><td style="background:${BLUE};padding:22px 32px;">
      <span style="font:26px ${SERIF};color:#ffffff;letter-spacing:-0.3px;">Receipters</span>
    </td></tr>
    <tr><td style="padding:32px 32px 8px;">
      <p style="margin:0 0 10px;font:bold 11px ${FONT};letter-spacing:1.5px;text-transform:uppercase;color:${BLUE};">${e(c.eyebrow)}</p>
      <h1 style="margin:0 0 16px;font:normal 28px/1.2 ${SERIF};color:${INK};">${e(c.heading)}</h1>
      ${intro}${action}${code}${steps}${notice}
    </td></tr>
    <tr><td style="padding:28px 32px 8px;">
      <div style="border-top:1px solid ${LINE};padding-top:20px;font:bold 16px ${SERIF};color:${INK};">Need help?</div>
      <p style="margin:8px 0 0;font:13px/1.6 ${FONT};color:${MUTED};">Write to <a href="mailto:support@receipters.com" style="color:${BLUE};">support@receipters.com</a>. A person at Receipters will reply within 2 working days.</p>
    </td></tr>
    <tr><td style="padding:24px 32px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BLUE};"><tr><td style="padding:20px 22px;font:12px/1.6 ${FONT};color:#DCE3F7;">
        <strong style="color:#ffffff;">Receipters Technologies Limited</strong><br>
        <a href="${SITE}/privacy-policy" style="color:#ffffff;">Privacy</a> &nbsp;·&nbsp;
        <a href="${SITE}/terms-and-conditions" style="color:#ffffff;">Terms</a> &nbsp;·&nbsp;
        <a href="${SITE}/cookie-policy" style="color:#ffffff;">Cookies</a> &nbsp;·&nbsp;
        <a href="${SITE}" style="color:#ffffff;">receipters.com</a>
        <div style="margin-top:10px;color:#B9C4EA;">${e(c.reason)}</div>
      </td></tr></table>
    </td></tr>
  </table>
</td></tr></table></body></html>`;

  const text = [
    c.eyebrow.toUpperCase(),
    c.heading,
    '',
    ...c.intro,
    c.action ? `\n${c.action.label}: ${c.action.url}` : '',
    c.code ? `\nCode: ${c.code.value} (${c.code.caption})` : '',
    c.steps?.length ? `\n${c.stepsTitle || 'How to use it'}\n${c.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}` : '',
    c.notice ? `\n${c.notice.title} ${c.notice.body}` : '',
    '\nNeed help? Write to support@receipters.com.',
    `\n${c.reason}`,
  ]
    .filter((l) => l !== '')
    .join('\n');

  return { html, text };
}
