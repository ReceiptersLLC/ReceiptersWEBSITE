// Menu data shared by the navigation, the product page and the services page.

export type ProductLink = {
  slug: string;
  name: string;
  /** Translation key for the short category label. */
  categoryKey: string;
  /** The product's own website, where one exists. */
  href?: string;
  /** Translation key for a one-line description, where one is available. */
  descriptionKey?: string;
};

export const products: ProductLink[] = [
  {
    slug: "bodapos",
    name: "BodaPOS",
    categoryKey: "productFamily.category.pos",
    href: "https://www.bodapos.com",
    descriptionKey: "productFamily.bodapos.description",
  },
  { slug: "linearpos", name: "LinearPOS", categoryKey: "productFamily.category.pos" },
  { slug: "chomapos", name: "ChomaPOS", categoryKey: "productFamily.category.pos" },
  { slug: "nairopos", name: "NairoPOS", categoryKey: "productFamily.category.pos" },
  { slug: "fursapay", name: "FursaPay", categoryKey: "productFamily.category.payments" },
  {
    slug: "shahidibox",
    name: "ShahidiBox",
    categoryKey: "productFamily.category.vault",
    href: "https://shahidibox.com",
    descriptionKey: "productFamily.shahidibox.description",
  },
];

export const services = [
  { slug: "integration", titleKey: "services.integration.title" },
  { slug: "onboarding", titleKey: "services.onboarding.title" },
  { slug: "developer", titleKey: "services.developer.title" },
  { slug: "analytics", titleKey: "services.analytics.title" },
];
