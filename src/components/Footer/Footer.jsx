import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import Reveal from '../Reveal/Reveal.jsx';
import logo from '../../assets/images/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.badge}>
        <span className={styles.badgeText}>{t.footer.madeIn}</span>
      </div>

      <div className={styles.inner}>
        <Reveal className={styles.brand}>
          <div className={styles.logo}>
            <img src={logo} alt="Polid" className={styles.logoImage} />
          </div>
          <p className={styles.tagline}>{t.intro.p1}</p>
        </Reveal>

        <Reveal delay={80}>
          <h3 className={styles.heading}>{t.footer.companyLabel}</h3>
          <p className={styles.line}>Jarosławiec 194</p>
          <p className={styles.line}>22-424 Sitno</p>
          <p className={styles.line}>NIP: 922-000-13-02</p>
        </Reveal>

        <Reveal delay={160}>
          <h3 className={styles.heading}>{t.footer.contactLabel}</h3>
          <p className={styles.line}>tel./fax (+48) 84 611 20 12</p>
          <p className={styles.line}>
            <a href="mailto:biuro@polid.pl" className={styles.link}>biuro@polid.pl</a>
          </p>
          <p className={styles.line}>
            <a href="https://polid.pl" className={styles.link} target="_blank" rel="noreferrer">www.polid.pl</a>
          </p>
        </Reveal>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Polid s.c. — {t.footer.rights}</span>
        <Link to="/polityka-prywatnosci" className={styles.privacyBtn}>{t.footer.privacy}</Link>
      </div>
    </footer>
  );
}
