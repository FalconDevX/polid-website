import { useLanguage } from '../../hooks/useLanguage';
import Reveal from '../../components/Reveal/Reveal.jsx';
import sectionBg from '../../assets/images/hero-bg.png';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      <section className={styles.section} style={{ backgroundImage: `url(${sectionBg})` }}>
        <Reveal className={styles.heading}>
          <span>{t.aboutPage.heading}</span>
          <h1>{t.aboutPage.title}</h1>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <p className={styles.body}>{t.aboutPage.p1}</p>
            <p className={styles.body}>{t.aboutPage.p2}</p>
            <p className={styles.body}>{t.aboutPage.p3}</p>
          </Reveal>
        </div>

        <div className={styles.stats}>
          {t.aboutPage.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
