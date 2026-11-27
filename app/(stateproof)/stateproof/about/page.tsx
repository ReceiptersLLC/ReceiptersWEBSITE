import type { Metadata } from "next";
import StateProofLanding from "../StateProofLanding";

export const metadata: Metadata = {
  title: { absolute: "About StateProof – by Receipters LLC" },
  description: "Why we built StateProof, what we stand by, and who is behind it.",
  alternates: { canonical: "https://getstateproof.com/about" },
};

export default function AboutPage() {
  return <StateProofLanding view="about" />;
}
