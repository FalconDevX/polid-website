'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { LANGUAGES, type LanguageCode } from '@/i18n/languages';

export default function LangSwitch() {
  const locale = useLocale() as LanguageCode;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const selectLocale = (code: LanguageCode) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="flex w-[58px] cursor-pointer items-center justify-center gap-[0.4rem] rounded border-none bg-transparent px-[0.35rem] py-2 text-[0.78rem] font-semibold tracking-[1px] text-inherit transition-colors duration-200 hover:bg-[rgba(128,128,128,0.15)]"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {locale.toUpperCase()}
        <svg
          className={`text-current opacity-75 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul
        className={`absolute right-0 top-[calc(100%+8px)] z-50 w-[58px] min-w-[58px] rounded-lg border border-border bg-surface p-[0.35rem] shadow-soft transition-[opacity,transform] duration-200 ${
          open ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
        }`}
        role="listbox"
      >
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <button
              type="button"
              className={`block w-full rounded-[5px] border-none bg-transparent px-[0.2rem] py-2 text-center text-[0.78rem] font-medium tracking-[1px] text-ink-soft transition-colors duration-200 hover:bg-bg-alt hover:text-ink ${
                l.code === locale ? 'text-gold-dark' : ''
              }`}
              onClick={() => selectLocale(l.code)}
              role="option"
              aria-selected={l.code === locale}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
