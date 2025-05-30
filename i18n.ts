// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Optional: Import your config if using next-i18next
// import i18nConfig from "./next-i18next.config";

i18n
  .use(Backend) // Loads translations from /public/locales
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Integrates i18n with React
  .init({
    // If using next-i18next.config.ts, use: ...i18nConfig.i18n
    fallbackLng: "en", // Default language if detection fails
    supportedLngs: ["en", "fr", "sw", "de"], // Add your supported languages
    defaultNS: "common", // Default namespace for translations
    backend: {
      loadPath: "/locales/{{lng}}/{common}.json", // Path to translation files
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"], // Store detected language in cookies
    },
    react: {
      useSuspense: false, // Disable suspense if not needed
    },
  });

export default i18n;