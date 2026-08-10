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
    <span
      aria-hidden="true"
      className="pointer-events-none rounded-sm border border-black/10 shadow-[0_8px_22px_rgba(14,30,20,0.2)]"
      style={{ position: 'absolute', right: '-52px', bottom: '42px', zIndex: 2, width: '220px', height: '32px', margin: 0, background: 'linear-gradient(to bottom, #fff 0 50%, #dc143c 50% 100%)', transform: 'rotate(-45deg)' }}
    />
    <Reveal className={styles.heading}><span>{t('heading')}</span><h1>{t('title')}</h1></Reveal>
    <div className={styles.grid}><Reveal className={styles.text}><p className={styles.body}>{t('p1')}</p><p className={styles.body}>{t('p2')}</p><p className={styles.body}>{t('p3')}</p></Reveal></div>
    <div className={styles.stats}>{stats.map((stat, index) => <Reveal key={stat.label} delay={index * 80} className={styles.stat}><span className={styles.statValue}>{stat.value}</span><span className={styles.statLabel}>{stat.label}</span></Reveal>)}</div>
  </section>;
}
