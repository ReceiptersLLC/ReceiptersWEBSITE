import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import OAuthInit from "@/components/OAuthInit";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Script from "next/script";
import { Toaster } from "sonner";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive"/>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="beforeInteractive"/>
      <OAuthInit/>
      <SessionProviderWrapper>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </SessionProviderWrapper>
      <WhatsAppWidget/>
      <Toaster position="top-right" richColors />
    </>
  );
}

