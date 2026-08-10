import { createContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';

export const LanguageContext = createContext(null);

const SUPPORTED = ['pl', 'en', 'ru', 'uk'];

const getInitialLanguage = () => {
  const saved = localStorage.getItem('polid-lang');
  if (saved && SUPPORTED.includes(saved)) return saved;
  const browserLang = navigator.language?.slice(0, 2);
  return SUPPORTED.includes(browserLang) ? browserLang : 'pl';
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('polid-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
