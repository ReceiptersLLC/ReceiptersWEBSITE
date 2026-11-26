// Which country version of the site a visitor sees.
// US visitors get the United States version; everyone else gets the Africa version
// (code "ke", kept so visitors' saved choices stay valid).
// Visitors can switch with the selector in the top bar; their choice is kept in a cookie.

export type Region = "ke" | "us";

export const REGIONS: Region[] = ["ke", "us"];
export const DEFAULT_REGION: Region = "ke";
export const REGION_COOKIE = "rt_region";
/** Request header the middleware uses to hand the region to the pages. */
export const REGION_HEADER = "x-rt-region";

export const isRegion = (value: unknown): value is Region => value === "ke" || value === "us";

/** Two-letter country code (from CloudFront) to site region. */
export const regionFromCountry = (country?: string | null): Region =>
  country?.toUpperCase() === "US" ? "us" : DEFAULT_REGION;

/** Languages offered in each country version: Swahili in Africa, Spanish in the United States. */
export const LANGUAGE_LABELS: Record<string, string> = {
  en: "English",
  sw: "Kiswahili",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};
export const regionLanguages: Record<Region, string[]> = {
  ke: ["en", "sw", "fr", "de"],
  us: ["en", "es", "fr", "de"],
};

export type Contact = { key: string; value: string; href: string };
export type Office = { title: string; address: string };

const WHATSAPP_KE: Contact = { key: "whatsappKenya", value: "+254 722 752 755", href: "https://wa.me/254722752755" };
const WHATSAPP_US: Contact = { key: "whatsappUsa", value: "+1 (720) 930-2570", href: "https://wa.me/17209302570" };

export const regionContent: Record<
  Region,
  {
    /** The company that trades in this country version. */
    companyName: string;
    whatsapp: Contact;
    whatsappNumber: string;
    phoneHref: string;
    offices: Office[];
    officeCities: string;
  }
> = {
  ke: {
    companyName: "Receipters Technologies Limited",
    whatsapp: WHATSAPP_KE,
    whatsappNumber: "254722752755",
    phoneHref: "tel:+254722752755",
    offices: [
      { title: "footer.primaryOffice", address: "footer.primaryOfficeAddress" },
      { title: "footer.zambiaOffice", address: "footer.zambiaOfficeAddress" },
    ],
    officeCities: "Nairobi, Lusaka",
  },
  us: {
    companyName: "Receipters LLC",
    whatsapp: WHATSAPP_US,
    whatsappNumber: "17209302570",
    phoneHref: "tel:+17209302570",
    offices: [{ title: "footer.usOffice", address: "footer.usOfficeAddress" }],
    officeCities: "Newark, NJ",
  },
};
