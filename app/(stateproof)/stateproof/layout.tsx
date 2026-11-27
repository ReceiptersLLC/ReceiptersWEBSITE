import "@fontsource-variable/public-sans";
import "./stateproof.css";
import type { Metadata, Viewport } from "next";

const DESCRIPTION =
  "StateProof AI adds up your Shopify, Amazon and own-store sales state by state, forecasts when you'll cross each state's sales tax limit, sorts your receipts and gets your books ready for tax time and audits.";

export const metadata: Metadata = {
  title: { absolute: "StateProof – AI for sales tax limits and IRS-ready books" },
  description: DESCRIPTION,
  metadataBase: new URL("https://getstateproof.com"),
  alternates: { canonical: "https://getstateproof.com/" },
  applicationName: "StateProof",
  authors: [{ name: "Receipters LLC" }],
  creator: "Receipters LLC",
  publisher: "Receipters LLC",
  // Lets people add StateProof to their phone's home screen or install it as an app on a computer.
  manifest: "/stateproof/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/stateproof/icon.svg", type: "image/svg+xml" },
      { url: "/stateproof/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/stateproof/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: { capable: true, title: "StateProof", statusBarStyle: "black-translucent" },
  openGraph: {
    type: "website",
    url: "https://getstateproof.com/",
    siteName: "StateProof",
    title: "StateProof – Know every state you owe sales tax in",
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["es_US"],
  },
  twitter: { card: "summary", title: "StateProof", description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#0c2a20" };

export default function StateProofLayout({ children }: { children: React.ReactNode }) {
  return children;
}
