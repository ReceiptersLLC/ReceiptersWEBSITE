"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18nConfig from "../next-i18next.config"; // Use default import
import { Poppins } from "next/font/google";
import Navigator from "@/components/navigator";
import Footer from "@/components/footer";
import "./globals.css";

const { i18n } = i18nConfig; // Destructure i18n from default export

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={i18n.defaultLocale}> {/* Use i18n.defaultLocale for dynamic language */}
      <body className={`${poppins.variable} antialiased`}>
        <I18nextProvider i18n={i18n}>
          <Navigator />
          {children}
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}