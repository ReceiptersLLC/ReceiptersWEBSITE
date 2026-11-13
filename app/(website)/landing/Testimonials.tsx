"use client";

import { useTranslation } from "react-i18next";

const testimonials = [
  { name: "Learnard", quote: "I love the paperless solution" },
  { name: "Tracy Miller", quote: "Simple, but powerful features." },
  { name: "Lucy Adam", quote: "Great experience" },
  { name: "Hazel Linda", quote: "A game changer for my business" },
];

export default function Testimonials() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("landing.testimonials.customerSatisfaction")}
        </h2>
        <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, quote }) => (
            <figure key={name} className="m-0 flex min-h-[11rem] flex-col border-b border-r border-line p-7">
              <blockquote className="m-0 text-lg font-medium leading-snug text-ink">
                &ldquo;{t(quote)}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-6 text-sm text-muted">{t(name)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
