import { useLanguage } from '../../hooks/useLanguage';
import PageHero from '../../components/PageHero/PageHero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import Button from '../../components/Button/Button.jsx';
import heroImage from '../../assets/images/own-brand-page.png';
import styles from './OwnBrand.module.css';

export default function OwnBrand() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHero eyebrow={t.ownBrandPage.heading} title={t.ownBrandPage.title} image={heroImage} />

      <section className={styles.section}>
        <Reveal className={styles.intro}>
          <p className={styles.body}>{t.ownBrandPage.p1}</p>
          <p className={styles.body}>{t.ownBrandPage.p2}</p>
        </Reveal>

        <div className={styles.steps}>
          {t.ownBrandPage.steps.map((step, i) => (
            <div className={styles.processItem} key={step.title}>
              <div className={styles.step} style={{ animationDelay: `${i * 180}ms` }}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
              {i < t.ownBrandPage.steps.length - 1 && (
                <span className={styles.arrow} style={{ animationDelay: `${i * 180 + 120}ms` }} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        <Reveal className={styles.ctaWrap} delay={150}>
          <Button to="/kontakt">{t.ownBrandPage.cta}</Button>
        </Reveal>
      </section>
    </div>
  );
}
