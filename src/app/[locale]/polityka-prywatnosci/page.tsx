import { setRequestLocale } from 'next-intl/server';
import type { LanguageCode } from '@/i18n/languages';
import PageHero from '@/components/PageHero/PageHero';
import Reveal from '@/components/Reveal/Reveal';
import { privacyPolicy } from '@/content/privacy';
import heroImage from '../../../assets/images/panel-made-in-poland.jpg';
import styles from './page.module.css';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = privacyPolicy[locale as LanguageCode];

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
                <p key={j} className={styles.paragraph}>
                  {block.text}
                </p>
              ),
            )}
          </Reveal>
        ))}
      </section>
    </div>
  );
}
