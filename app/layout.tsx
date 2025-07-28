import "./globals.css";
import { Poppins } from "next/font/google";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Receipters",
  description: "Download the Receipters app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
        {/*<WhatsAppWidget />*/}
      </body>
    </html>
  );
}
