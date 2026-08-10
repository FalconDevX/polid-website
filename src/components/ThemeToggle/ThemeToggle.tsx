'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('themeToggle');
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === 'dark';
  const label = isDark ? t('light') : t('dark');

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center border-none bg-none p-0"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      title={label}
    >
      <span
        className={`relative h-[26px] w-[46px] rounded-full border border-border transition-colors duration-[400ms] ${isDark ? 'bg-[#26262b]' : 'bg-bg-alt'}`}
      >
        <span
          className={`absolute left-[2px] top-[2px] flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isDark ? 'translate-x-5 bg-[#3a3a42]' : 'bg-gold'}`}
        >
          <svg
            className={`absolute transition-[opacity,transform] duration-300 ${isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
            viewBox="0 0 24 24"
            width="12"
            height="12"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
              <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
              <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
            </g>
          </svg>
          <svg
            className={`absolute transition-[opacity,transform] duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
            viewBox="0 0 24 24"
            width="12"
            height="12"
          >
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}
