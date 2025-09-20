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

interface FacebookAuthResponse {
  accessToken: string;
  userID: string;
}

interface FacebookUserInfo {
  id: string;
  name: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
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
      login: (callback: (response: { authResponse?: FacebookAuthResponse }) => void, options?: { scope: string }) => void;
      api: (path: string, params?: { fields: string }, callback?: (response: FacebookUserInfo) => void) => void;
    };
  }
}
