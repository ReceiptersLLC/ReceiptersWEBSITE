import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "POS integration, onboarding, developer support and analytics services from Receipters.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
