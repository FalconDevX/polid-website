import { getTranslations, setRequestLocale } from 'next-intl/server';
import Reveal from '@/components/Reveal/Reveal';
import sectionBg from '../../../assets/images/hero-bg.png';
import styles from './page.module.css';

interface AboutStat { value: string; label: string }

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  const t = await getTranslations('aboutPage');
  const stats = t.raw('stats') as AboutStat[];
  return <section className={styles.section} style={{ backgroundImage: `url(${sectionBg.src})` }}>
    <Reveal className={styles.heading}><span>{t('heading')}</span><h1>{t('title')}</h1></Reveal>
    <div className={styles.grid}><Reveal className={styles.text}><p className={styles.body}>{t('p1')}</p><p className={styles.body}>{t('p2')}</p><p className={styles.body}>{t('p3')}</p></Reveal></div>
    <div className={styles.stats}>{stats.map((stat, index) => <Reveal key={stat.label} delay={index * 80} className={styles.stat}><span className={styles.statValue}>{stat.value}</span><span className={styles.statLabel}>{stat.label}</span></Reveal>)}</div>
  </section>;
}
