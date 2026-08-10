import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { LANGUAGES } from '../../i18n/translations';
import styles from './LangSwitch.module.css';

export default function LangSwitch() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {lang.toUpperCase()}
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} width="10" height="6" viewBox="0 0 10 6">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`} role="listbox">
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <button
              type="button"
              className={`${styles.option} ${l.code === lang ? styles.optionActive : ''}`}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              role="option"
              aria-selected={l.code === lang}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
