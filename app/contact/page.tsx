import styles from "../styles/Contact.module.scss";
import type { Metadata } from "next";

//comp
import CreateForm from "./CreateForm";

export const metadata: Metadata = {
  title: "Sumi SEO | Contact ",
  description: "Sumi SEO | Software Engineer | Contact ",
};

export default function CreateContact() {
  return (
    <main className={styles.contact}>
      <div className={styles.contact__container}>
        <h1>Do you want to discuss more about your company or project ?</h1>
      </div>
      <div className={styles.contact__container}>
        <div className={styles.contact__box}>&rarr;</div>
        <div className={styles.contact__box}>
          <CreateForm />
        </div>
      </div>
    </main>
  );
}
