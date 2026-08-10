import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero/PageHero';
import Reveal from '@/components/Reveal/Reveal';
import heroImage from '../../../assets/images/panel-made-in-poland.jpg';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contactPage');

  return (
    <div>
      <PageHero eyebrow={t('heading')} title={t('title')} image={heroImage} />

      <section className={styles.section}>
        <div className={styles.intro}>
          <span>Napisz lub zadzwoń</span>
          <h2>Porozmawiajmy o współpracy</h2>
          <p>Masz pytanie o ofertę, produkcję pod własną marką lub warunki zamówienia? Skontaktuj się z nami.</p>
        </div>

        <div className={styles.contactGrid}>
          <Reveal className={styles.details}>
            <div className={styles.card}>
              <h3>{t('companyLabel')}</h3>
              <p>
                <strong>Adres</strong>
                <br />
                Jarosławiec 194
                <br />
                22-424 Sitno
              </p>
              <p>
                <strong>NIP</strong>
                <br />
                922-000-13-02
              </p>
            </div>
            <div className={styles.card}>
              <h3>{t('contactLabel')}</h3>
              <p>
                <strong>Telefon / fax</strong>
                <br />
                <a href="tel:+48846112012">(+48) 84 611 20 12</a>
              </p>
              <p>
                <strong>E-mail</strong>
                <br />
                <a href="mailto:biuro@polid.pl">biuro@polid.pl</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className={styles.formWrap}>
            <h3>Wyślij wiadomość</h3>
            <p>Wypełnij formularz, a przygotujemy wiadomość w Twoim programie pocztowym.</p>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={180} className={styles.mapWrap}>
          <iframe
            title="Mapa dojazdu do Polid s.c."
            src="https://www.google.com/maps?q=Jaros%C5%82awiec%20194%2C%2022-424%20Sitno&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </section>
    </div>
  );
}
