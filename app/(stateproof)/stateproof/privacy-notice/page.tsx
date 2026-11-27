import type { Metadata } from "next";
import StateProofLanding from "../StateProofLanding";

export const metadata: Metadata = {
  title: { absolute: "Privacy notice – StateProof" },
  alternates: { canonical: "https://getstateproof.com/privacy-notice" },
};

export default function PrivacyPage() {
  return <StateProofLanding view="privacy" />;
}
