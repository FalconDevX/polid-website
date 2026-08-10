import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero/PageHero';
import type { SupportedLocale } from '@/data/products';

const copy: Record<SupportedLocale, { title: string; text: string; action: string }> = {
  pl: { title: 'Nie znaleziono strony', text: 'Strona, której szukasz, nie istnieje albo została przeniesiona.', action: 'Zobacz produkty' },
  en: { title: 'Page not found', text: 'The page you are looking for does not exist or has been moved.', action: 'View products' },
  ru: { title: 'Страница не найдена', text: 'Страница, которую вы ищете, не существует или была перемещена.', action: 'Посмотреть товары' },
  uk: { title: 'Сторінку не знайдено', text: 'Сторінка, яку ви шукаєте, не існує або була переміщена.', action: 'Переглянути товари' },
};

export default async function NotFound() {
  const locale = await getLocale();
  const text = copy[(locale in copy ? locale : 'pl') as SupportedLocale];
  return <div><PageHero eyebrow="404" title={text.title} /><div className="mx-auto max-w-[720px] px-7 py-24 text-center"><p className="mb-8 text-ink-soft">{text.text}</p><Link href="/produkty" className="inline-flex bg-gold px-[2.1rem] py-[0.95rem] text-[0.78rem] font-semibold uppercase tracking-[3px] text-white hover:bg-gold-dark">{text.action}</Link></div></div>;
}
