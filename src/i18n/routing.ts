import { defineRouting } from 'next-intl/routing';
import { LANGUAGES } from './languages';

export const routing = defineRouting({
  locales: LANGUAGES.map((l) => l.code),
  defaultLocale: 'pl',
  localeDetection: false,
});
