import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero/PageHero';

export default async function NotFound() {
  const t = await getTranslations('productsPage');

  return (
    <div>
      <PageHero eyebrow="404" title="Nie znaleziono strony" />
      <div className="mx-auto max-w-[720px] px-7 py-24 text-center">
        <p className="mb-8 text-ink-soft">Strona, której szukasz, nie istnieje albo została przeniesiona.</p>
        <Link href="/produkty" className="inline-flex bg-gold px-[2.1rem] py-[0.95rem] text-[0.78rem] font-semibold uppercase tracking-[3px] text-white hover:bg-gold-dark">
          {t('title')}
        </Link>
      </div>
    </div>
  );
}
