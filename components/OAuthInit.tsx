"use client";

import { useEffect } from 'react';

export default function OAuthInit() {
  useEffect(() => {
    // Initialize Facebook SDK
    if (typeof window !== 'undefined' && window.FB) {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
    }

    // Google is initialized on demand in the login handler
  }, []);

  return null;
}

declare global {
  interface Window {
    FB: {
      init: (config: {
        appId: string | undefined;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
    };
  }
}
