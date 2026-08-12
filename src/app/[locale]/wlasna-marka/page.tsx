import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero/PageHero';
import Reveal from '@/components/Reveal/Reveal';
import Button from '@/components/Button/Button';
import heroImage from '../../../assets/images/hero-bg.png';
import styles from './page.module.css';

interface OwnBrandStep {
  title: string;
  text: string;
}

export default async function OwnBrandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ownBrandPage');
  const steps = t.raw('steps') as OwnBrandStep[];

  return (
    <div>
      <PageHero eyebrow={t('heading')} title={t('title')} image={heroImage} />

      <section className={styles.section}>
        <Reveal className={styles.intro}>
          <p className={styles.body}>{t('p1')}</p>
          <p className={styles.body}>{t('p2')}</p>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div className={styles.processItem} key={step.title}>
              <div className={styles.step} style={{ animationDelay: `${i * 180}ms` }}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <span className={styles.arrow} style={{ animationDelay: `${i * 180 + 120}ms` }} aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <Reveal className={styles.ctaWrap} delay={150}>
          <Button to="/kontakt">{t('cta')}</Button>
        </Reveal>
      </section>
    </div>
  );
}
