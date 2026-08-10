'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/components/providers/ThemeProvider';
import lightLogo from '@/assets/images/logo.png';
import darkLogo from '@/assets/images/logo-dark.png';

interface ThemeLogoProps {
  className?: string;
  priority?: boolean;
}

export default function ThemeLogo({ className, priority = false }: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  useEffect(() => {
    const href = dark ? '/favicon-dark.png?v=3' : '/favicon.png?v=5';
    document.querySelectorAll<HTMLLinkElement>("link[rel~='icon']").forEach((link) => {
      link.href = href;
    });
  }, [dark]);

  return <Image src={dark ? darkLogo : lightLogo} alt="Polid" priority={priority} className={className} />;
}
