import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navigator from "@/components/navigator";
import React from "react";
import Footer from "@/components/footer";
import { I18nextProvider } from 'react-i18next';
import i18n from '../next-i18next.config'; // Import your i18n configuration

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Receipters",
  description: "Effortless Expense Management Anywhere.",
};

import { useTranslation } from 'next-i18next'; // Import useTranslation

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  useTranslation(); // Initialize i18next
  return (
    <html lang="en">
    <body className={`${poppins.variable} antialiased`}>
    <Navigator/>
    {children}
    <Footer/>
    </body>

    </html>

  );
}
