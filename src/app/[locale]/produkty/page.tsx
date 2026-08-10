import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ProductsExplorer from '@/components/Products/ProductsExplorer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productsPage' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function ProductsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ category?: string }> }) {
  const { locale } = await params;
  const { category } = await searchParams;
  setRequestLocale(locale);
  return <ProductsExplorer key={category ?? 'all'} initialCategory={category} />;
}
