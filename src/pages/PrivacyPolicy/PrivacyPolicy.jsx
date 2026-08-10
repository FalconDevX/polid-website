import { useLanguage } from '../../hooks/useLanguage';
import PageHero from '../../components/PageHero/PageHero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { privacyPolicy } from '../../i18n/privacy.js';
import heroImage from '../../assets/images/panel-made-in-poland.jpg';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const content = privacyPolicy[lang];

  return (
    <div>
      <PageHero eyebrow={content.heading} title={content.title} image={heroImage} />

      <section className={styles.section}>
        <Reveal className={styles.intro}>
          <p>{content.intro}</p>
        </Reveal>

        {content.sections.map((sec, i) => (
          <Reveal key={sec.heading} delay={Math.min(i * 40, 200)} className={styles.block}>
            <h2 className={styles.heading}>{sec.heading}</h2>
            {sec.blocks.map((block, j) =>
              block.type === 'ul' ? (
                <ul key={j} className={styles.list}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={j} className={styles.paragraph}>{block.text}</p>
              )
            )}
          </Reveal>
        ))}
      </section>
    </div>
  );
}
