import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { Toaster } from "sonner";
import { headers } from "next/headers";
import { RegionProvider } from "@/components/RegionProvider";
import { DEFAULT_REGION, REGION_HEADER, isRegion } from "@/lib/region";

export default async function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const fromMiddleware = (await headers()).get(REGION_HEADER);
  const region = isRegion(fromMiddleware) ? fromMiddleware : DEFAULT_REGION;

  return (
    <RegionProvider initialRegion={region}>
      <SessionProviderWrapper>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </SessionProviderWrapper>
      <WhatsAppWidget/>
      <Toaster position="top-right" richColors />
    </RegionProvider>
  );
}

