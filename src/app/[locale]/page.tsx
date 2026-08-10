import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Reveal from '@/components/Reveal/Reveal';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import HomeHero from '@/components/Home/HomeHero';
import { products, homeProducts } from '@/data/products';
import panelImage from '../../assets/images/panel-made-in-poland.jpg';
import ownBrandImage from '../../assets/images/own-brand-home.jpg';
import styles from '@/components/Home/Home.module.css';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const featured = products.filter((p) => homeProducts.includes(p.key));

  return (
    <div className={styles.page}>
      <HomeHero />

      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <Reveal className={styles.introText}>
            <span className={styles.eyebrow}>{t('intro.eyebrow')}</span>
            <h2 className={styles.introTitle}>{t('intro.title')}</h2>
            <p className={styles.body}>{t('intro.p1')}</p>
            <p className={styles.body}>{t('intro.p2')}</p>
            <p className={styles.body}>{t('intro.p3')}</p>
            <p className={styles.body}>{t('intro.p4')}</p>
            <Button to="/o-nas">{t('intro.cta')}</Button>
          </Reveal>
          <Reveal delay={120} className={styles.introPanel} style={{ backgroundImage: `url(${panelImage.src})` }}>
            <div className={styles.panelOverlay} />
            <span className={styles.panelMade}>{t('intro.madeIn')}</span>
          </Reveal>
        </div>
      </section>

      <section className={styles.productsSection}>
        <Reveal as="h2" className={styles.sectionTitle}>
          {t('productsSection.title')}
        </Reveal>
        <div className={styles.productGrid}>
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
        <Reveal className={styles.sectionCta}>
          <Button to="/produkty" variant="outline">
            {t('productsSection.cta')}
          </Button>
        </Reveal>
      </section>

      <section className={styles.ownBrand}>
        <div className={styles.ownBrandGrid}>
          <Reveal className={styles.ownBrandVisual}>
            <Image src={ownBrandImage} alt={t('ownBrandSection.title')} className={styles.ownBrandImg} />
          </Reveal>
          <Reveal delay={120} className={styles.ownBrandText}>
            <h2 className={styles.introTitle}>{t('ownBrandSection.title')}</h2>
            <p className={styles.body}>{t('ownBrandSection.text')}</p>
            <Button to="/wlasna-marka">{t('ownBrandSection.cta')}</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
