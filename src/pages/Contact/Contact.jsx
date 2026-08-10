import { useLanguage } from '../../hooks/useLanguage';
import PageHero from '../../components/PageHero/PageHero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import heroImage from '../../assets/images/panel-made-in-poland.jpg';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();

  const sendMessage = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(
      `Imię i nazwisko: ${data.get('name')}\nE-mail: ${data.get('email')}\nTelefon: ${data.get('phone') || 'nie podano'}\n\nWiadomość:\n${data.get('message')}`
    );
    window.location.href = `mailto:biuro@polid.pl?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <PageHero eyebrow={t.contactPage.heading} title={t.contactPage.title} image={heroImage} />

      <section className={styles.section}>
        <div className={styles.intro}>
          <span>Napisz lub zadzwoń</span>
          <h2>Porozmawiajmy o współpracy</h2>
          <p>Masz pytanie o ofertę, produkcję pod własną marką lub warunki zamówienia? Skontaktuj się z nami.</p>
        </div>

        <div className={styles.contactGrid}>
          <Reveal className={styles.details}>
            <div className={styles.card}>
              <h3>{t.contactPage.companyLabel}</h3>
              <p><strong>Adres</strong><br />Jarosławiec 194<br />22-424 Sitno</p>
              <p><strong>NIP</strong><br />922-000-13-02</p>
            </div>
            <div className={styles.card}>
              <h3>{t.contactPage.contactLabel}</h3>
              <p><strong>Telefon / fax</strong><br /><a href="tel:+48846112012">(+48) 84 611 20 12</a></p>
              <p><strong>E-mail</strong><br /><a href="mailto:biuro@polid.pl">biuro@polid.pl</a></p>
            </div>
          </Reveal>

          <Reveal delay={100} className={styles.formWrap}>
            <h3>Wyślij wiadomość</h3>
            <p>Wypełnij formularz, a przygotujemy wiadomość w Twoim programie pocztowym.</p>
            <form className={styles.form} onSubmit={sendMessage}>
              <div className={styles.formRow}>
                <label><span>Imię i nazwisko *</span><input name="name" type="text" autoComplete="name" required placeholder="Jan Kowalski" /></label>
                <label><span>Adres e-mail *</span><input name="email" type="email" autoComplete="email" required placeholder="jan@firma.pl" /></label>
              </div>
              <div className={styles.formRow}>
                <label><span>Telefon</span><input name="phone" type="tel" autoComplete="tel" placeholder="+48 000 000 000" /></label>
                <label><span>Temat *</span><input name="subject" type="text" required placeholder="Zapytanie o ofertę" /></label>
              </div>
              <label><span>Wiadomość *</span><textarea name="message" rows="6" required placeholder="Napisz, w czym możemy pomóc…" /></label>
              <label className={styles.consent}><input type="checkbox" required /><span>Wyrażam zgodę na kontakt w sprawie przesłanego zapytania.</span></label>
              <button className={styles.submit} type="submit">Wyślij wiadomość</button>
            </form>
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
