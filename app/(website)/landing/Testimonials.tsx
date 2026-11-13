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
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {t("landing.testimonials.customerSatisfaction")}
        </h2>
        <div className="mt-12 grid gap-10 divide-y divide-line sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {testimonials.map(({ name, quote }) => (
            <figure key={name} className="m-0 pt-10 first:pt-0 sm:pt-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <blockquote className="font-serif m-0 text-xl leading-snug text-ink">
                &ldquo;{t(quote)}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">{t(name)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
