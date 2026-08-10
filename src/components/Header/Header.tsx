'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LangSwitch from '../LangSwitch/LangSwitch';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ThemeLogo from '../ThemeLogo/ThemeLogo';

const navLinkBase =
  'relative py-[0.4rem] px-[0.05rem] text-[0.78rem] font-medium uppercase tracking-[1.6px] text-inherit opacity-80 transition-[color,opacity] duration-300 hover:opacity-100 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-[350ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-left hover:after:scale-x-100';
const navLinkActive = 'text-gold opacity-100 after:origin-left after:scale-x-100';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const links = [
    { href: '/', label: t('home'), end: true },
    { href: '/produkty', label: t('products'), end: false },
    { href: '/wlasna-marka', label: t('ownBrand'), end: false },
    { href: '/kontakt', label: t('contact'), end: false },
  ];

  const isActive = (href: string, end: boolean) =>
    href.includes('#') ? false : end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const handleNavClick = (href: string, end: boolean) => {
    setMenuOpen(false);
    if (isActive(href, end)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg text-ink ${scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.05)]' : ''}`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-7 py-[0.9rem]">
        <Link href="/" className="flex flex-shrink-0 items-center gap-[0.55rem]" onClick={() => handleNavClick('/', true)}>
          <ThemeLogo priority className="h-[46px] w-auto object-contain" />
        </Link>

        <nav className="flex flex-1 justify-center max-[860px]:hidden">
          <ul className="flex list-none items-center gap-[2.1rem]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${navLinkBase} ${isActive(l.href, l.end) ? navLinkActive : ''}`}
                  onClick={() => handleNavClick(l.href, l.end)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-shrink-0 items-center gap-4">
          <LangSwitch />
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="hidden h-[26px] w-[26px] cursor-pointer flex-col justify-center gap-[5px] border-none bg-none p-0 max-[860px]:flex"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-full rounded-sm bg-current transition-[transform,opacity,background-color] duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`block h-0.5 w-full rounded-sm bg-current transition-[transform,opacity,background-color] duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-full rounded-sm bg-current transition-[transform,opacity,background-color] duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`hidden max-[860px]:block max-[860px]:overflow-hidden max-[860px]:bg-bg max-[860px]:text-ink max-[860px]:transition-[max-height,border-color] max-[860px]:duration-[450ms] max-[860px]:ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'max-[860px]:max-h-[400px] max-[860px]:border-b max-[860px]:border-border' : 'max-[860px]:max-h-0 max-[860px]:border-b max-[860px]:border-transparent'
        }`}
      >
        <ul className="flex list-none flex-col gap-[0.4rem] px-7 pb-6 pt-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`transition-[opacity,transform] duration-[400ms] ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
            >
              <Link
                href={l.href}
                className={`${navLinkBase} block py-[0.6rem] text-[0.85rem] ${isActive(l.href, l.end) ? navLinkActive : ''}`}
                onClick={() => handleNavClick(l.href, l.end)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
