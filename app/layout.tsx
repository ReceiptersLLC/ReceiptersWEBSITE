import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navigator from "@/components/navigator";
import React from "react";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Receipters",
  description: "Effortless Expense Management Anywhere.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
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
