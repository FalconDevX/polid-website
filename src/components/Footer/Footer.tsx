import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '../Reveal/Reveal';
import ThemeLogo from '../ThemeLogo/ThemeLogo';

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg-alt pt-12 text-ink transition-theme duration-[400ms]">
      <div className="absolute right-[-3rem] top-8 hidden origin-top-right rotate-90 md:block">
        <span className="whitespace-nowrap font-heading text-[0.85rem] uppercase tracking-[6px] text-ink-soft">
          {t('footer.madeIn')}
        </span>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-7 pb-12 pt-4 md:grid-cols-[1.3fr_1fr_1fr]">
        <Reveal>
          <div className="mb-4 flex items-center">
            <ThemeLogo className="h-[58px] w-auto object-contain" />
          </div>
          <p className="max-w-[34ch] text-[0.9rem] text-ink-soft">{t('intro.p1')}</p>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="mb-4 border-b border-border pb-3 text-[1.05rem] uppercase tracking-[2px] text-ink">
            {t('footer.companyLabel')}
          </h3>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">Jarosławiec 194</p>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">22-424 Sitno</p>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">NIP: 922-000-13-02</p>
        </Reveal>

        <Reveal delay={160}>
          <h3 className="mb-4 border-b border-border pb-3 text-[1.05rem] uppercase tracking-[2px] text-ink">
            {t('footer.contactLabel')}
          </h3>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">tel./fax (+48) 84 611 20 12</p>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">
            <a href="mailto:biuro@polid.pl" className="transition-colors duration-200 hover:text-gold">
              biuro@polid.pl
            </a>
          </p>
          <p className="mb-[0.55rem] text-[0.9rem] text-ink-soft">
            <a href="https://polid.pl" className="transition-colors duration-200 hover:text-gold" target="_blank" rel="noreferrer">
              www.polid.pl
            </a>
          </p>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-border px-7 py-[1.4rem] text-[0.78rem] text-ink-soft">
        <span>
          © {year} Polid s.c. — {t('footer.rights')}
        </span>
        <Link
          href="/polityka-prywatnosci"
          className="inline-block rounded-sm border border-border px-4 py-2 text-[0.72rem] tracking-[1px] text-ink-soft transition-colors duration-200 hover:border-gold hover:text-gold"
        >
          {t('footer.privacy')}
        </Link>
      </div>
    </footer>
  );
}
