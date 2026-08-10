import type { CatalogProduct } from './products';

export interface ProductFilters { query: string; category: string; material: string; color: string; size: string; locale: string }

export function filterCatalogProducts(products: CatalogProduct[], filters: ProductFilters) {
  const needle = filters.query.trim().toLocaleLowerCase(filters.locale);
  return products.filter((product) =>
    (!needle || `${product.name} ${product.material} ${product.color} ${product.size}`.toLocaleLowerCase(filters.locale).includes(needle)) &&
    (filters.category === 'all' || product.category === filters.category) &&
    (filters.material === 'all' || product.material === filters.material) &&
    (filters.color === 'all' || product.color === filters.color) &&
    (filters.size === 'all' || product.size === filters.size));
}
