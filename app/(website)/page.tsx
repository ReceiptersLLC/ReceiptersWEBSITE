import HeroSection from "@/app/(website)/landing/HeroSection";
import { Modules, WhyReceipters } from "@/app/(website)/landing/Features";
import { Steps, Analytics, AppSection, Sectors } from "@/app/(website)/landing/HowItWorks";
import MissionVision from "@/app/(website)/landing/MissionVision";
import ServicesTeaser from "@/app/(website)/landing/ServicesTeaser";
import Testimonials from "@/app/(website)/landing/Testimonials";
import CallToAction from "@/app/(website)/landing/CallToAction";
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
    url: "https://www.receipters.com",
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
      <Modules/>
      <MissionVision/>
      <Steps/>
      <Sectors/>
      <AppSection/>
      <WhyReceipters/>
      <Analytics/>
      <ServicesTeaser/>
      <Testimonials/>
      <CallToAction/>
    </div>
  );
}

