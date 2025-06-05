'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    _waEmbed?: (settings: object) => void;
  }
}

export default function WhatsAppWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const wa_btnSetting = {
        btnColor: '#16BE45',
        ctaText: 'WhatsApp Us',
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: 'right',
        whatsAppNumber: '17209302570',
        welcomeMessage: 'Hello, how can we help you?',
        zIndex: 999999,
        btnColorScheme: 'light',
      };
      window._waEmbed?.(wa_btnSetting);
    };
  }, []);

  return null;
}