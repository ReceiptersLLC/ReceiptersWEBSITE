import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
// import { Poppins } from "next/font/google";
import type {Metadata} from "next";
import Script from "next/script";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: {
    default: "Receipters - Digital Receipt Management Solutions",
    template: "%s | Receipters"
  },
  description: "Transform your business with Receipters' secure, eco-friendly digital receipt solutions. Integrated POS systems for instant customer delivery, cloud storage, and paperless transactions. Join hundreds of businesses going digital.",
  keywords: [
    "digital receipts",
    "paperless receipts",
    "POS integration",
    "receipt management",
    "eco-friendly business",
    "cloud storage",
    "digital transactions",
    "paperless business",
    "receipt automation",
    "sustainable receipts"
  ],
  authors: [{name: "Receipters LLC"}],
  creator: "Receipters LLC",
  publisher: "Receipters LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.receipters.com",
    siteName: "Receipters",
    title: "Receipters - Digital Receipt Management Solutions",
    description: "Transform your business with secure, eco-friendly digital receipt solutions. Integrated POS systems for instant delivery and paperless transactions.",
    images: [
      {
        url: "/img/logo_full_w.svg",
        width: 1200,
        height: 630,
        alt: "Receipters - Digital Receipt Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Receipters - Digital Receipt Management Solutions",
    description: "Transform your business with secure, eco-friendly digital receipt solutions. Join hundreds of businesses going paperless.",
    images: ["/img/logo_full_w.svg"],
    creator: "@receipters",
  },
  icons: {
    icon: [
      {url: "/img/logo.svg", type: "image/svg+xml"},
      {url: "/img/logo.png", type: "image/png"}
    ],
    shortcut: "/img/logo.png",
    apple: [
      {url: "/img/logo.png", sizes: "180x180", type: "image/png"},
    ],
  },
  manifest: "/manifest.json",
  category: "business",
  classification: "Business Software",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.receipters.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
      "de-DE": "/de",
      "sw-KE": "/sw",
    },
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/*<body className={`${poppins.variable} antialiased`}>*/}
    <body className={`antialiased`}>
    <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive"/>
    <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="beforeInteractive"/>
    {children}
    </body>
    </html>
  );
}
