import { describe, expect, it } from 'vitest';
import { getCatalogProducts } from '../src/data/products';
import { filterCatalogProducts } from '../src/data/filterProducts';

describe('localized product catalogue', () => {
  it('keeps stable product routes in every locale', () => {
    const ids = getCatalogProducts('pl').map((product) => product.id);
    for (const locale of ['en', 'ru', 'uk']) expect(getCatalogProducts(locale).map((product) => product.id)).toEqual(ids);
  });

  it('localizes names, materials, colours and descriptions', () => {
    const polish = getCatalogProducts('pl')[0];
    const english = getCatalogProducts('en')[0];
    expect(english.name).not.toBe(polish.name);
    expect(english.material).not.toBe(polish.material);
    expect(english.color).not.toBe(polish.color);
    expect(english.description).not.toBe(polish.description);
  });

  it('filters by search and structured fields', () => {
    const products = getCatalogProducts('en');
    expect(filterCatalogProducts(products, { query: 'microfiber', category: 'all', material: 'all', color: 'all', size: 'MAXI', locale: 'en' }).map((product) => product.id)).toEqual(['m3']);
  });
});
