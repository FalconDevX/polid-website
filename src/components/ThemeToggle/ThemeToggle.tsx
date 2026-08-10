'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from '../providers/ThemeProvider';
import styles from './ThemeToggle.module.css';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('themeToggle');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === 'dark';
  const label = isDark ? t('light') : t('dark');

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const toggleTheme = () => {
    window.clearTimeout(timerRef.current);
    setAnimating(false);
    window.requestAnimationFrame(() => {
      setAnimating(true);
      setTheme(isDark ? 'light' : 'dark');
      timerRef.current = window.setTimeout(() => setAnimating(false), 480);
    });
  };

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center border-none bg-transparent p-0"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className={`relative h-[26px] w-[46px] rounded-full border transition-[background-color,border-color,box-shadow] duration-[400ms] ${isDark ? 'border-[#355a42] bg-[#14261b] shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]' : 'border-[#b9d7b8] bg-[#edf6e9] shadow-[inset_0_1px_3px_rgba(37,122,62,0.1)]'} ${animating ? styles.trackPulse : ''}`}>
        <span className={`absolute left-[2px] top-[2px] flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm transition-[transform,background-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isDark ? 'translate-x-5 bg-[#34734a] shadow-[0_2px_7px_rgba(0,0,0,0.45)]' : 'translate-x-0 bg-gold shadow-[0_2px_7px_rgba(37,122,62,0.3)]'} ${animating ? styles.thumbClick : ''}`}>
          <svg className={`absolute transition-[opacity,transform] duration-300 ${isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.2" y1="4.2" x2="5.6" y2="5.6" /><line x1="18.4" y1="18.4" x2="19.8" y2="19.8" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.2" y1="19.8" x2="5.6" y2="18.4" /><line x1="18.4" y1="5.6" x2="19.8" y2="4.2" /></g>
          </svg>
          <svg className={`absolute transition-[opacity,transform] duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}
