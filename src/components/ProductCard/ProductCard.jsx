import { useLanguage } from '../../hooks/useLanguage';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, compact = false }) {
  const { t } = useLanguage();

  return (
    <div className={`${styles.card} ${compact ? styles.compact : ''}`}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={t.productsPage.categories[product.key]} className={styles.image} loading="lazy" />
      </div>
      <h3 className={styles.title}>{t.productsPage.categories[product.key]}</h3>
      {!compact && <p className={styles.desc}>{t.productsPage.descriptions[product.key]}</p>}
    </div>
  );
}
