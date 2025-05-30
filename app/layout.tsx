"use client";

import React from "react";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Navigator from "@/components/navigator";
import Footer from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Remove metadata export, as it's not allowed in client components
// export const metadata: Metadata = {
//   title: "Receipters",
//   description: "Effortless Expense Management Anywhere.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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