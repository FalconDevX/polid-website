import { useLanguage } from '../../hooks/useLanguage';
import Reveal from '../../components/Reveal/Reveal.jsx';
import Button from '../../components/Button/Button.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { products, homeProducts } from '../../data/products.js';
import panelImage from '../../assets/images/panel-made-in-poland.jpg';
import ownBrandImage from '../../assets/images/own-brand-home.jpg';
import mopPurpleGreen from '../../assets/images/mop-purple-green.png';
import mopRedTeal from '../../assets/images/mop-red-teal.png';
import mopPink from '../../assets/images/mop-pink.png';
import mopPurple from '../../assets/images/mop-purple.png';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useLanguage();
  const featured = products.filter((p) => homeProducts.includes(p.id));

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroOrbit} aria-hidden="true">
          <div className={`${styles.mop} ${styles.mopOne}`}>
            <img src={mopPurpleGreen} alt="" />
          </div>
          <div className={`${styles.mop} ${styles.mopTwo}`}>
            <img src={mopRedTeal} alt="" />
          </div>
          <div className={`${styles.mop} ${styles.mopThree}`}>
            <img src={mopPink} alt="" />
          </div>
          <div className={`${styles.mop} ${styles.mopFour}`}>
            <img src={mopPurple} alt="" />
          </div>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>{t.intro.eyebrow}</span>
          <h1 className={styles.heroTitle}>{t.hero.title}</h1>
          <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
          <Button to="/produkty">{t.hero.cta}</Button>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <Reveal className={styles.introText}>
            <span className={styles.eyebrow}>{t.intro.eyebrow}</span>
            <h2 className={styles.introTitle}>{t.intro.title}</h2>
            <p className={styles.body}>{t.intro.p1}</p>
            <p className={styles.body}>{t.intro.p2}</p>
            <p className={styles.body}>{t.intro.p3}</p>
            <p className={styles.body}>{t.intro.p4}</p>
            <Button to="/o-nas">{t.intro.cta}</Button>
          </Reveal>
          <Reveal delay={120} className={styles.introPanel} style={{ backgroundImage: `url(${panelImage})` }}>
            <div className={styles.panelOverlay} />
            <span className={styles.panelMade}>{t.intro.madeIn}</span>
          </Reveal>
        </div>
      </section>

      <section className={styles.productsSection}>
        <Reveal as="h2" className={styles.sectionTitle}>{t.productsSection.title}</Reveal>
        <div className={styles.productGrid}>
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} compact />
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.sectionCta} delay={200}>
          <Button to="/produkty" variant="outline">{t.productsSection.cta}</Button>
        </Reveal>
      </section>

      <section className={styles.ownBrand}>
        <div className={styles.ownBrandGrid}>
          <Reveal className={styles.ownBrandVisual}>
            <img src={ownBrandImage} alt={t.ownBrandSection.title} className={styles.ownBrandImg} />
          </Reveal>
          <Reveal delay={120} className={styles.ownBrandText}>
            <h2 className={styles.introTitle}>{t.ownBrandSection.title}</h2>
            <p className={styles.body}>{t.ownBrandSection.text}</p>
            <Button to="/wlasna-marka">{t.ownBrandSection.cta}</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
