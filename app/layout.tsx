import "./globals.css";
import { Poppins } from "next/font/google";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

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
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
        <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
        <script>
          var wa_btnSetting = {"btnColor":"#16BE45","ctaText":"WhatsApp Us","cornerRadius":40,"marginBottom":20,"marginLeft":20,"marginRight":20,"btnPosition":"right","whatsAppNumber":"","welcomeMessage":"Hello","zIndex":999999,"btnColorScheme":"light"};
          window.onload = () => {
            _waEmbed(wa_btnSetting);
          };
        </script>
      </body>
    </html>
  );
}
