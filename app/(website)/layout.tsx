import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { Toaster } from "sonner";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProviderWrapper>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </SessionProviderWrapper>
      <WhatsAppWidget/>
      <Toaster position="top-right" richColors />
    </>
  );
}

