"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; 
import Navigator from "@/components/navigator";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/footer";
import { rememberedLanguage, rememberLanguage, useConsent } from "@/lib/consent";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = useConsent();

  // With the visitor's permission, reopen the site in the language they last
  // chose, and keep that choice up to date.
  useEffect(() => {
    if (!consent?.preferences) return;
    const saved = rememberedLanguage();
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    } else if (!saved) {
      rememberLanguage(i18n.language);
    }
    i18n.on("languageChanged", rememberLanguage);
    return () => i18n.off("languageChanged", rememberLanguage);
  }, [consent?.preferences]);

  return (
    <I18nextProvider i18n={i18n}>
      <Navigator />
      <CookieConsent />
      {children}
      <Footer />
    </I18nextProvider>
  );
}