"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Navigator from "@/components/navigator";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/footer";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navigator />
      <CookieConsent />
      {children}
      <Footer />
    </I18nextProvider>
  );
}
