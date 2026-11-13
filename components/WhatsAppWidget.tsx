'use client';

import { useEffect } from 'react';
import { useConsent } from '@/lib/consent';

declare global {
  interface Window {
    _waEmbed?: (settings: object) => void;
  }
}

const SCRIPT_ID = 'wa-widget-script';

// The chat button is served by a third party, so it loads only after the
// visitor allows the support chat in the cookie settings.
export default function WhatsAppWidget() {
  const consent = useConsent();
  const allowed = consent?.chat === true;

  useEffect(() => {
    if (!allowed || document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    script.onload = () => {
      window._waEmbed?.({
        btnColor: '#16BE45',
        ctaText: '',
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: 'right',
        whatsAppNumber: '17209302570',
        welcomeMessage: 'Hello, how can we help you?',
        zIndex: 999,
        btnColorScheme: 'light',
      });
    };
    document.body.appendChild(script);
  }, [allowed]);

  return null;
}
