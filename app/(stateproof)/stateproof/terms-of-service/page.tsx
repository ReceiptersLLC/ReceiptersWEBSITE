import type { Metadata } from "next";
import StateProofLanding from "../StateProofLanding";

export const metadata: Metadata = {
  title: { absolute: "Terms of use – StateProof" },
  alternates: { canonical: "https://getstateproof.com/terms-of-service" },
};

export default function TermsPage() {
  return <StateProofLanding view="terms" />;
}
