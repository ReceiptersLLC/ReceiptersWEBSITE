import path from 'path';
import type { UserConfig } from 'next-i18next';

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'sw', 'de'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('./public/locales')
};

export default i18nConfig;
