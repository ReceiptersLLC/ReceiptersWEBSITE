"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { demoHref, productsFor } from "@/lib/siteLinks";
import { useRegion } from "@/components/RegionProvider";

export default function ProductFamily() {
  const { t } = useTranslation("common");
  const { region } = useRegion();
  const shown = productsFor(region);
  if (shown.length === 0) return null;

  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-16 text-left sm:px-8 lg:py-20">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {t("productFamily.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {t("productFamily.description")}
        </p>
        <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="group relative flex min-h-[13rem] scroll-mt-32 flex-col border-b border-r border-line bg-white p-7 transition-all hover:z-10 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_32px_-16px_rgba(14,20,51,0.18)]"
            >
              <div className="text-sm text-muted">{t(product.categoryKey)}</div>
              <h3 className="font-serif mt-2 text-2xl font-medium tracking-tight text-ink">{product.name}</h3>
              {product.descriptionKey && (
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{t(product.descriptionKey)}</p>
              )}
              <div className="mt-auto pt-6">
                <Link
                  href={demoHref(product.slug)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 after:absolute after:inset-0 hover:underline"
                  aria-label={`${t("demo.cta")}: ${product.name}`}
                >
                  {t("demo.cta")}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
