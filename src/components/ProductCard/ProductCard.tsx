import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ProductCategory } from '@/data/products';

interface ProductCardProps {
  product: ProductCategory;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const tCategories = useTranslations('productsPage.categories');
  const tDescriptions = useTranslations('productsPage.descriptions');
  const label = tCategories(product.key);

  return (
    <div className="group overflow-hidden rounded-[14px] border border-border bg-surface text-center transition-[transform,box-shadow,border-color,background-color] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-transparent hover:shadow-soft">
      <div className={`relative overflow-hidden bg-bg-alt ${compact ? 'h-[140px]' : 'h-[190px]'}`}>
        <Image
          src={product.image}
          alt={label}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </div>
      <h3 className={compact ? 'mx-4 mb-[1.1rem] mt-4 text-[1.05rem]' : 'mx-[1.4rem] mb-2 mt-[1.3rem] text-[1.25rem]'}>
        {label}
      </h3>
      {!compact && <p className="mx-[1.4rem] mb-6 text-[0.88rem] text-ink-soft">{tDescriptions(product.key)}</p>}
    </div>
  );
}
