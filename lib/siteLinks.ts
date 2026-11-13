// Menu data shared by the navigation, the product page and the services page.

export type ProductLink = {
  slug: string;
  name: string;
  /** Translation key for the short category label. */
  categoryKey: string;
  /** External site for the product, where one exists. */
  href?: string;
};

export const products: ProductLink[] = [
  { slug: "bodapos", name: "BodaPOS", categoryKey: "productFamily.category.pos" },
  { slug: "linearpos", name: "LinearPOS", categoryKey: "productFamily.category.pos" },
  { slug: "chomapos", name: "ChomaPOS", categoryKey: "productFamily.category.pos" },
  { slug: "nairopos", name: "NairoPOS", categoryKey: "productFamily.category.pos" },
  { slug: "fursapay", name: "FursaPay", categoryKey: "productFamily.category.payments" },
  { slug: "shahidibox", name: "ShahidiBox", categoryKey: "productFamily.category.vault", href: "https://shahidibox.com" },
];

export const services = [
  { slug: "integration", titleKey: "services.integration.title" },
  { slug: "onboarding", titleKey: "services.onboarding.title" },
  { slug: "developer", titleKey: "services.developer.title" },
  { slug: "analytics", titleKey: "services.analytics.title" },
];
