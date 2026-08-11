'use client';

import styles from './page.module.css';

export interface ContactFormCopy {
  name: string; email: string; phone: string; subject: string; message: string; consent: string; submit: string;
  namePlaceholder: string; subjectPlaceholder: string; messagePlaceholder: string; notProvided: string;
}

export default function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject') as string);
    const body = encodeURIComponent(`${copy.name}: ${data.get('name')}\nE-mail: ${data.get('email')}\n${copy.phone}: ${data.get('phone') || copy.notProvided}\n\n${copy.message}:\n${data.get('message')}`);
    window.location.href = `mailto:biuro@polid.pl?subject=${subject}&body=${body}`;
  };
  return (
    <form className={styles.form} onSubmit={sendMessage}>
      <div className={styles.formRow}><label><span>{copy.name} *</span><input name="name" type="text" autoComplete="name" required placeholder={copy.namePlaceholder} /></label><label><span>{copy.email} *</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label></div>
      <div className={styles.formRow}><label><span>{copy.phone}</span><input name="phone" type="tel" autoComplete="tel" placeholder="+48 000 000 000" /></label><label><span>{copy.subject} *</span><input name="subject" type="text" required placeholder={copy.subjectPlaceholder} /></label></div>
      <label><span>{copy.message} *</span><textarea className="max-h-[420px] overflow-y-auto [field-sizing:content]" name="message" rows={6} required placeholder={copy.messagePlaceholder} /></label>
      <label className={styles.consent}><input type="checkbox" required /><span>{copy.consent}</span></label>
      <button className={styles.submit} type="submit">{copy.submit}</button>
    </form>
  );
}
