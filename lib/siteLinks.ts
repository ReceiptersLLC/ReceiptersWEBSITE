// Menu data shared by the navigation, the product page and the services page.
import type { Region } from "@/lib/region";

export type ProductLink = {
  slug: string;
  name: string;
  /** Translation key for the short category label. */
  categoryKey: string;
  /** The product's own website, where one exists. */
  href?: string;
  /** Translation key for a one-line description, where one is available. */
  descriptionKey?: string;
  /** Country versions that show this product. Leave out to show it in both. */
  regions?: Region[];
};

// All products are sold in Kenya only; the United States version lists none.
export const products: ProductLink[] = [
  {
    slug: "bodapos",
    name: "BodaPOS",
    categoryKey: "productFamily.category.pos", regions: ["ke"],
    href: "https://www.bodapos.com",
    descriptionKey: "productFamily.bodapos.description",
  },
  { slug: "linearpos", name: "LinearPOS", categoryKey: "productFamily.category.pos", regions: ["ke"], href: "https://www.linearpos.com" },
  { slug: "chomapos", name: "ChomaPOS", categoryKey: "productFamily.category.pos", regions: ["ke"], href: "https://www.chomapos.com" },
  { slug: "nairopos", name: "NairoPOS", categoryKey: "productFamily.category.pos", regions: ["ke"], href: "https://www.nairopos.com" },
  { slug: "fursapay", name: "FursaPay", categoryKey: "productFamily.category.payments", regions: ["ke"], href: "https://fursapay.com" },
  {
    slug: "shahidibox",
    name: "ShahidiBox",
    categoryKey: "productFamily.category.vault", regions: ["ke"],
    href: "https://www.shahidibox.com",
    descriptionKey: "productFamily.shahidibox.description",
  },
];

/** Products shown in a country version of the site. */
export const productsFor = (region: Region) => products.filter((p) => !p.regions || p.regions.includes(region));

/** Product links lead to the demo request form, not to the product's own website. */
export const demoHref = (slug?: string) => (slug ? `/request-demo?product=${slug}` : "/request-demo");

/** Service links lead to the same request form, with the service chosen. */
export const serviceRequestHref = (slug: string) => `/request-demo?service=${slug}`;

/** Home page "Learn more" links lead to the sign-in page; details are for signed-in users. */
export const LEARN_MORE_HREF = "/login";

export const services = [
  { slug: "integration", titleKey: "services.integration.title" },
  { slug: "onboarding", titleKey: "services.onboarding.title" },
  { slug: "developer", titleKey: "services.developer.title" },
  { slug: "analytics", titleKey: "services.analytics.title" },
  { slug: "individualHistory", titleKey: "services.individualHistory.title" },
  { slug: "merchantHistory", titleKey: "services.merchantHistory.title" },
];
