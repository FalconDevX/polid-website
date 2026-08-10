import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? t.themeToggle.light : t.themeToggle.dark}
      title={isDark ? t.themeToggle.light : t.themeToggle.dark}
    >
      <span className={`${styles.track} ${isDark ? styles.trackDark : ''}`}>
        <span className={styles.thumb}>
          <svg className={styles.sun} viewBox="0 0 24 24" width="12" height="12">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
              <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
              <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
            </g>
          </svg>
          <svg className={styles.moon} viewBox="0 0 24 24" width="12" height="12">
            <path
              d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}
