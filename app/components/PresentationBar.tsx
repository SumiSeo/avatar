import styles from "../styles/components/PresentationBar.module.scss";

//comp
import PresentationLink from "./PresentationLink";

export default function PresentationBar(): JSX.Element {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__link}>
        <PresentationLink name="AI-Concierge" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Contacky" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="My Code !" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Harry Potter" />
      </div>
    </div>
  );
}
