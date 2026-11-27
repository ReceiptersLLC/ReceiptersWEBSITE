import type { Metadata } from "next";
import StateProofLanding from "../StateProofLanding";

export const metadata: Metadata = {
  title: { absolute: "Cookies – StateProof" },
  alternates: { canonical: "https://getstateproof.com/cookies" },
};

export default function CookiesPage() {
  return <StateProofLanding view="cookies" />;
}
