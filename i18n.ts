
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./public/locales/en/common.json";

// Import English translations directly to ensure they're always available

i18n
  .use(Backend) // Loads translations from /public/locales
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Integrates i18n with React
  .init({
    fallbackLng: "en", // Default language if detection fails
    lng: "en", // Set default language explicitly
    ns: ["common"], // Available namespaces
    defaultNS: "common", // Default namespace for translations
    supportedLngs: ["en", "fr", "sw", "de"], // Add your supported languages
    debug: false, // Disable debug to reduce console noise
    resources: {
      en: {
        common: enTranslations // Preload English translations
      }
    },
    backend: {
      loadPath: "/api/locales/{{lng}}/{{ns}}",
      requestOptions: {
        cache: 'no-store',
      },
      crossDomain: true,
    },
    partialBundledLanguages: true, // Allow loading of specific language resources
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: [], // The language is remembered only with consent; see lib/consent.ts
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;