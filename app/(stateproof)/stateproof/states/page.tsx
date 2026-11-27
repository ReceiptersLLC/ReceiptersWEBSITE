import type { Metadata } from "next";
import StateProofLanding from "../StateProofLanding";

export const metadata: Metadata = {
  title: { absolute: "Sales tax rules for online sellers, state by state – StateProof" },
  description:
    "When online sellers must collect sales tax in each of the 50 states, Washington DC, Puerto Rico, Guam and the US Virgin Islands.",
  alternates: { canonical: "https://getstateproof.com/states" },
};

export default function StatesPage() {
  return <StateProofLanding view="states" />;
}
