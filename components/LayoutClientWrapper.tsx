"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
// import Navigator from "@/components/navigator";
// import CookieConsent from "@/components/CookieConsent";
// import Footer from "@/components/footer";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    // Ensure i18n is ready before rendering
    if (i18n.isInitialized) {
      setIsI18nReady(true);
    } else {
      i18n.on('initialized', () => {
        setIsI18nReady(true);
      });
    }
  }, []);

  if (!isI18nReady) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <I18nextProvider i18n={i18n}>
      {/*<Navigator />*/}
      {/*<CookieConsent />*/}
      {children}
      {/*<Footer />*/}
    </I18nextProvider>
  );
}
