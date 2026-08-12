import { getTranslations, setRequestLocale } from 'next-intl/server';
import Reveal from '@/components/Reveal/Reveal';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard/ProductCard';
import HomeHero from '@/components/Home/HomeHero';
import StatCounter from '@/components/Home/StatCounter';
import ScrollToHash from '@/components/Home/ScrollToHash';
import { products, homeProducts } from '@/data/products';
import ownBrandBg from '../../assets/images/hero-bg.png';
import styles from '@/components/Home/Home.module.css';
import aboutStyles from '@/components/Home/HomeAbout.module.css';

interface AboutStat {
  value: string;
  label: string;
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const featured = products.filter((p) => homeProducts.includes(p.key));
  const aboutStats = t.raw('aboutPage.stats') as AboutStat[];

  return (
    <div className={styles.page}>
      <ScrollToHash />
      <HomeHero />

      <section id="about" className={aboutStyles.section}>
        <video className={aboutStyles.backgroundVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/videos/microfiber-loop.mp4" type="video/mp4" />
        </video>
        <Reveal className={aboutStyles.heading}>
          <span>{t('aboutPage.heading')}</span>
          <h2>{t('aboutPage.title')}</h2>
        </Reveal>

        <div className={aboutStyles.grid}>
          <Reveal className={aboutStyles.text}>
            <p className={aboutStyles.body}>{t('aboutPage.p1')}</p>
            <p className={aboutStyles.body}>{t('aboutPage.p2')}</p>
            <p className={aboutStyles.body}>{t('aboutPage.p3')}</p>
          </Reveal>
        </div>

        <div className={aboutStyles.stats}>
          {aboutStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={aboutStyles.stat}>
              <StatCounter value={s.value} className={aboutStyles.statValue} />
              <span className={aboutStyles.statLabel}>{s.label}</span>
            </Reveal>
          ))}
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

      <section className={styles.ownBrand} style={{ backgroundImage: `url(${ownBrandBg.src})` }}>
        <div className={styles.ownBrandGrid}>
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
