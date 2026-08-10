'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextValue { resolvedTheme: Theme; setTheme: (theme: Theme) => void }

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'polid-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('light');

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme: Theme = stored === 'dark' || stored === 'light' ? stored : media.matches ? 'dark' : 'light';
    const frame = window.requestAnimationFrame(() => setResolvedTheme(initialTheme));

    const followSystem = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(STORAGE_KEY)) setResolvedTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', followSystem);
    return () => { window.cancelAnimationFrame(frame); media.removeEventListener('change', followSystem); };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback((theme: Theme) => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    setResolvedTheme(theme);
  }, []);

  const value = useMemo(() => ({ resolvedTheme, setTheme }), [resolvedTheme, setTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
