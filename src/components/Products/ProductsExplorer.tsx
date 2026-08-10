'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHero from '@/components/PageHero/PageHero';
import { catalogProducts, products, type CatalogProduct, type ProductCategoryKey } from '@/data/products';
import heroImage from '../../assets/images/own-brand-page.png';
import styles from './Products.module.css';

interface FilterOption {
  value: string;
  label: string;
}

function FilterSelect({
  label,
  value,
  onChange,
  items,
  onOpen,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: FilterOption[];
  onOpen: (details: HTMLDetailsElement) => void;
}) {
  const selected = items.find((item) => item.value === value) || items[0];

  const choose = (event: React.MouseEvent<HTMLButtonElement>, nextValue: string) => {
    onChange(nextValue);
    event.currentTarget.closest('details')?.removeAttribute('open');
  };

  return (
    <div className={styles.filterField}>
      <span>{label}</span>
      <details
        className={styles.customSelect}
        onToggle={(event) => {
          const target = event.target as HTMLDetailsElement;
          if (target.open) onOpen(target);
        }}
      >
        <summary>
          {selected.label}
          <span className={styles.selectChevron} aria-hidden="true" />
        </summary>
        <div className={styles.selectMenu}>
          {items.map((item) => (
            <button
              type="button"
              key={item.value}
              className={item.value === value ? styles.selectedOption : ''}
              onClick={(event) => choose(event, item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}

export default function ProductsExplorer() {
  const t = useTranslations('productsPage');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [material, setMaterial] = useState('all');
  const [color, setColor] = useState('all');
  const [size, setSize] = useState('all');
  const filtersRef = useRef<HTMLDivElement>(null);

  const closeOtherFilters = (openedDetails: HTMLDetailsElement | null) => {
    filtersRef.current?.querySelectorAll('details[open]').forEach((el) => {
      if (el !== openedDetails) el.removeAttribute('open');
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        closeOtherFilters(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = (key: keyof CatalogProduct) => [...new Set(catalogProducts.map((product) => product[key] as string))];

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('pl');
    return catalogProducts.filter(
      (product) =>
        (!needle || `${product.name} ${product.material} ${product.color} ${product.size}`.toLocaleLowerCase('pl').includes(needle)) &&
        (category === 'all' || product.category === category) &&
        (material === 'all' || product.material === material) &&
        (color === 'all' || product.color === color) &&
        (size === 'all' || product.size === size),
    );
  }, [query, category, material, color, size]);

  const clearFilters = () => {
    setQuery('');
    setCategory('all');
    setMaterial('all');
    setColor('all');
    setSize('all');
  };

  const categoryOptions: FilterOption[] = [
    { value: 'all', label: 'Wszystkie kategorie' },
    ...products.map((product) => ({ value: product.id, label: t(`categories.${product.key}`) })),
  ];
  const filterOptions = (key: keyof CatalogProduct): FilterOption[] => [
    { value: 'all', label: 'Wszystkie' },
    ...options(key).map((value) => ({ value, label: value })),
  ];

  const categoryLabel = (category: ProductCategoryKey) => t(`categories.${category}`);

  return (
    <div>
      <PageHero eyebrow={t('subtitle')} title={t('title')} image={heroImage} lightOverlay />

      <section className={styles.section} aria-labelledby="catalog-title">
        <div className={styles.headingRow}>
          <div>
            <span className={styles.eyebrow}>Katalog POLID</span>
            <h2 id="catalog-title">Znajdź odpowiedni mop</h2>
          </div>
          <p>Przeszukaj pełną ofertę i zawęź wyniki według najważniejszych parametrów.</p>
        </div>

        <div className={styles.filters} ref={filtersRef}>
          <label className={styles.search}>
            <span>Wyszukaj produkt</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="np. wiskoza, MAXI, W3…" />
          </label>
          <FilterSelect label="Kategoria" value={category} onChange={setCategory} items={categoryOptions} onOpen={closeOtherFilters} />
          <FilterSelect label="Materiał" value={material} onChange={setMaterial} items={filterOptions('material')} onOpen={closeOtherFilters} />
          <FilterSelect label="Kolor" value={color} onChange={setColor} items={filterOptions('color')} onOpen={closeOtherFilters} />
          <FilterSelect label="Rozmiar" value={size} onChange={setSize} items={filterOptions('size')} onOpen={closeOtherFilters} />
        </div>

        <div className={styles.resultsBar}>
          <strong>
            {filtered.length} {filtered.length === 1 ? 'produkt' : 'produktów'}
          </strong>
          <button type="button" onClick={clearFilters}>
            Wyczyść filtry
          </button>
        </div>
        {filtered.length ? (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <Link className={styles.card} key={product.id} href={`/produkty/${product.id}`}>
                <article>
                  <div className={styles.imageWrap}>
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 950px) 50vw, 33vw" />
                    <span>{product.size}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.category}>{categoryLabel(product.category)}</p>
                    <h3>{product.name}</h3>
                    <p className={styles.description}>{product.description}</p>
                    <dl>
                      <div>
                        <dt>Materiał</dt>
                        <dd>{product.material}</dd>
                      </div>
                      <div>
                        <dt>Kolor</dt>
                        <dd>{product.color}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>Brak pasujących produktów</h3>
            <p>Zmień kryteria albo wyczyść filtry, aby zobaczyć całą ofertę.</p>
            <button type="button" onClick={clearFilters}>
              Pokaż wszystkie produkty
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
