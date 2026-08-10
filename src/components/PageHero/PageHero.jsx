import Reveal from '../Reveal/Reveal.jsx';
import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, image, lightOverlay = false }) {
  return (
    <section className={styles.hero} style={image ? { backgroundImage: `url(${image})` } : undefined}>
      <div className={`${styles.overlay} ${lightOverlay ? styles.overlayLight : ''}`} />
      <Reveal className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
      </Reveal>
    </section>
  );
}
