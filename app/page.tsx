import HeroSection from "@/app/landing/HeroSection";
import Features from "@/app/landing/Features";
import Testimonials from "@/app/landing/Testimonials";
import HowItWorks from "@/app/landing/HowItWorks";
import CallToAction from "@/app/landing/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receipters - Instant Digital Receipts, Zero Paper Waste",
  description: "Transform your business with Receipters' secure, eco-friendly digital receipt solutions. Integrated POS systems for instant customer delivery, cloud storage, and paperless transactions. Join hundreds of businesses going digital today.",
  keywords: [
    "digital receipts",
    "paperless receipts", 
    "POS integration",
    "instant receipt delivery",
    "eco-friendly business solutions",
    "cloud receipt storage",
    "sustainable business practices"
  ],
  openGraph: {
    title: "Receipters - Instant Digital Receipts, Zero Paper Waste",
    description: "Transform your business with secure, eco-friendly digital receipt solutions. Join hundreds of businesses going paperless.",
    url: "https://receipters.com",
    type: "website",
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
    title: "Receipters - Instant Digital Receipts, Zero Paper Waste",
    description: "Transform your business with secure, eco-friendly digital receipt solutions. Join hundreds of businesses going paperless.",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <HowItWorks/>
      <CallToAction/>
    </div>
  );
}

