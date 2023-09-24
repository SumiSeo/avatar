import styles from "../styles/Contact.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Information",
  description:
    "Sumi SEO | Software Engineer | Machine learning | Biomedical Engineering",
};

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__box}>
          <h1 className={styles.contact__title}>I would like to discuss...</h1>
        </div>
        <div className={styles.contact__box}>
          <select className={styles.contact__select}>
            <option className={styles.contact__option}></option>
            <option className={styles.contact__option}>hi2</option>
            <option className={styles.contact__option}>hi3</option>
          </select>
        </div>
      </div>
      <div className={styles.contact__container}></div>
    </main>
  );
}
