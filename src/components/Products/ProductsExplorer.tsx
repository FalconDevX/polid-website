'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero/PageHero';
import { getCatalogProducts, products, type CatalogProduct, type ProductCategoryKey, type SupportedLocale } from '@/data/products';
import { filterCatalogProducts } from '@/data/filterProducts';
import heroImage from '../../assets/images/own-brand-page.png';
import styles from './Products.module.css';

const copy: Record<SupportedLocale, Record<string, string>> = {
  pl: { catalog: 'Katalog POLID', heading: 'Znajdź odpowiedni mop', intro: 'Przeszukaj pełną ofertę i zawęź wyniki według najważniejszych parametrów.', search: 'Wyszukaj produkt', placeholder: 'np. wiskoza, MAXI, W3…', category: 'Kategoria', material: 'Materiał', color: 'Kolor', size: 'Rozmiar', allCategories: 'Wszystkie kategorie', all: 'Wszystkie', product: 'produkt', products: 'produktów', clear: 'Wyczyść filtry', empty: 'Brak pasujących produktów', emptyText: 'Zmień kryteria albo wyczyść filtry, aby zobaczyć całą ofertę.', showAll: 'Pokaż wszystkie produkty' },
  en: { catalog: 'POLID catalogue', heading: 'Find the right mop', intro: 'Search the full range and narrow the results by the most important parameters.', search: 'Search products', placeholder: 'e.g. viscose, MAXI, W3…', category: 'Category', material: 'Material', color: 'Colour', size: 'Size', allCategories: 'All categories', all: 'All', product: 'product', products: 'products', clear: 'Clear filters', empty: 'No matching products', emptyText: 'Change the criteria or clear the filters to see the full range.', showAll: 'Show all products' },
  ru: { catalog: 'Каталог POLID', heading: 'Найдите подходящую швабру', intro: 'Просмотрите весь ассортимент и сузьте результаты по важным параметрам.', search: 'Поиск товара', placeholder: 'например, вискоза, MAXI, W3…', category: 'Категория', material: 'Материал', color: 'Цвет', size: 'Размер', allCategories: 'Все категории', all: 'Все', product: 'товар', products: 'товаров', clear: 'Сбросить фильтры', empty: 'Подходящих товаров нет', emptyText: 'Измените критерии или сбросьте фильтры, чтобы увидеть весь ассортимент.', showAll: 'Показать все товары' },
  uk: { catalog: 'Каталог POLID', heading: 'Знайдіть відповідну швабру', intro: 'Перегляньте весь асортимент і звузьте результати за важливими параметрами.', search: 'Пошук товару', placeholder: 'наприклад, віскоза, MAXI, W3…', category: 'Категорія', material: 'Матеріал', color: 'Колір', size: 'Розмір', allCategories: 'Усі категорії', all: 'Усі', product: 'товар', products: 'товарів', clear: 'Очистити фільтри', empty: 'Відповідних товарів немає', emptyText: 'Змініть критерії або очистіть фільтри, щоб побачити весь асортимент.', showAll: 'Показати всі товари' },
};

function FilterSelect({ label, value, onChange, items }: { label: string; value: string; onChange: (value: string) => void; items: Array<{ value: string; label: string }> }) {
  return (
    <label className={styles.filterField}>
      <span>{label}</span>
      <select className={styles.customSelect} value={value} onChange={(event) => onChange(event.target.value)}>
        {items.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
      </select>
    </label>
  );
}

export default function ProductsExplorer({ initialCategory = 'all' }: { initialCategory?: string }) {
  const t = useTranslations('productsPage');
  const locale = useLocale() as SupportedLocale;
  const text = copy[locale] ?? copy.pl;
  const catalogProducts = useMemo(() => getCatalogProducts(locale), [locale]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(products.some((product) => product.id === initialCategory) ? initialCategory : 'all');
  const [material, setMaterial] = useState('all');
  const [color, setColor] = useState('all');
  const [size, setSize] = useState('all');


  const options = (key: keyof CatalogProduct) => [...new Set(catalogProducts.map((product) => product[key] as string))];
  const filtered = useMemo(() => {
    return filterCatalogProducts(catalogProducts, { query, category, material, color, size, locale });
  }, [query, category, material, color, size, catalogProducts, locale]);

  const clearFilters = () => { setQuery(''); setCategory('all'); setMaterial('all'); setColor('all'); setSize('all'); };
  const categoryOptions = [{ value: 'all', label: text.allCategories }, ...products.map((product) => ({ value: product.id, label: t(`categories.${product.key}`) }))];
  const filterOptions = (key: keyof CatalogProduct) => [{ value: 'all', label: text.all }, ...options(key).map((value) => ({ value, label: value }))];
  const categoryLabel = (key: ProductCategoryKey) => t(`categories.${key}`);

  return (
    <div>
      <PageHero eyebrow={t('subtitle')} title={t('title')} image={heroImage} lightOverlay />
      <section className={styles.section} aria-labelledby="catalog-title">
        <div className={styles.headingRow}><div><span className={styles.eyebrow}>{text.catalog}</span><h2 id="catalog-title">{text.heading}</h2></div><p>{text.intro}</p></div>
        <div className={styles.filters}>
          <label className={styles.search}><span>{text.search}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={text.placeholder} /></label>
          <FilterSelect label={text.category} value={category} onChange={setCategory} items={categoryOptions} />
          <FilterSelect label={text.material} value={material} onChange={setMaterial} items={filterOptions('material')} />
          <FilterSelect label={text.color} value={color} onChange={setColor} items={filterOptions('color')} />
          <FilterSelect label={text.size} value={size} onChange={setSize} items={filterOptions('size')} />
        </div>
        <div className={styles.resultsBar}><strong>{filtered.length} {filtered.length === 1 ? text.product : text.products}</strong><button type="button" onClick={clearFilters}>{text.clear}</button></div>
        {filtered.length ? <div className={styles.grid}>{filtered.map((product) => (
          <Link className={styles.card} key={product.id} href={`/produkty/${product.id}`}><article><div className={styles.imageWrap}><Image src={product.image} alt={product.name} fill sizes="(max-width: 950px) 50vw, 33vw" /><span>{product.size}</span>{['microfiber', 'viscoseMix', 'cottonViscose2'].includes(product.category) && <div className={styles.colorStrip} aria-hidden="true" />}</div><div className={styles.cardBody}><p className={styles.category}>{categoryLabel(product.category)}</p><h3>{product.name}</h3><p className={styles.description}>{product.description}</p><dl><div><dt>{text.material}</dt><dd>{product.material}</dd></div><div><dt>{text.color}</dt><dd>{product.color}</dd></div></dl></div></article></Link>
        ))}</div> : <div className={styles.empty}><h3>{text.empty}</h3><p>{text.emptyText}</p><button type="button" onClick={clearFilters}>{text.showAll}</button></div>}
      </section>
    </div>
  );
}
