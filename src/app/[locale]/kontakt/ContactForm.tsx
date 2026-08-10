'use client';

import styles from './page.module.css';

export default function ContactForm() {
  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject') as string);
    const body = encodeURIComponent(
      `Imię i nazwisko: ${data.get('name')}\nE-mail: ${data.get('email')}\nTelefon: ${data.get('phone') || 'nie podano'}\n\nWiadomość:\n${data.get('message')}`,
    );
    window.location.href = `mailto:biuro@polid.pl?subject=${subject}&body=${body}`;
  };

  return (
    <form className={styles.form} onSubmit={sendMessage}>
      <div className={styles.formRow}>
        <label>
          <span>Imię i nazwisko *</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Jan Kowalski" />
        </label>
        <label>
          <span>Adres e-mail *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="jan@firma.pl" />
        </label>
      </div>
      <div className={styles.formRow}>
        <label>
          <span>Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+48 000 000 000" />
        </label>
        <label>
          <span>Temat *</span>
          <input name="subject" type="text" required placeholder="Zapytanie o ofertę" />
        </label>
      </div>
      <label>
        <span>Wiadomość *</span>
        <textarea name="message" rows={6} required placeholder="Napisz, w czym możemy pomóc…" />
      </label>
      <label className={styles.consent}>
        <input type="checkbox" required />
        <span>Wyrażam zgodę na kontakt w sprawie przesłanego zapytania.</span>
      </label>
      <button className={styles.submit} type="submit">
        Wyślij wiadomość
      </button>
    </form>
  );
}
