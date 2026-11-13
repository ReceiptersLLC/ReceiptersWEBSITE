"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { products } from "@/lib/siteLinks";

export default function ProductFamily() {
  const { t } = useTranslation("common");

  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-16 text-left sm:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("productFamily.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {t("productFamily.description")}
        </p>
        <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="flex min-h-[11rem] scroll-mt-32 flex-col border-b border-r border-line bg-white p-7"
            >
              <div className="text-sm text-muted">{t(product.categoryKey)}</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{product.name}</h3>
              <div className="mt-auto pt-6">
                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {product.href.replace("https://", "")}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {t("landing.features.talkToTeam")}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
