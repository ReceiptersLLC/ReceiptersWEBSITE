import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StateProofLanding from "../../StateProofLanding";
import { PLACES, placeBySlug } from "../../states";

export const dynamicParams = false;

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = placeBySlug(slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.name} sales tax for online sellers – StateProof` },
    description: `When online sellers must collect sales tax in ${p.name}: the sales limit, what counts, local rates and what to do when you cross it.`,
    alternates: { canonical: `https://getstateproof.com/states/${p.slug}` },
  };
}

export default async function StatePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!placeBySlug(slug)) notFound();
  return <StateProofLanding view="state" slug={slug} />;
}
