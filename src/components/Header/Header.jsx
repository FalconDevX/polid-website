import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import LangSwitch from '../LangSwitch/LangSwitch.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItem = ({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/produkty', label: t.nav.products },
    { to: '/o-nas', label: t.nav.about },
    { to: '/wlasna-marka', label: t.nav.ownBrand },
    { to: '/kontakt', label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Polid" className={styles.logoImg} />
        </NavLink>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={navItem}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LangSwitch />
          <ThemeToggle />
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          {links.map((l, i) => (
            <li key={l.to} style={{ transitionDelay: `${i * 40}ms` }}>
              <NavLink to={l.to} end={l.end} className={navItem} onClick={() => setMenuOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
