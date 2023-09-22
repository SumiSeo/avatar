import styles from "../styles/components/PresentationBar.module.scss";
import PresentationLink from "./PresentationLink";

export default function PresentationBar(): JSX.Element {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__link}>
        <PresentationLink name="Potential Inpact" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Who it's for" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="Our Approach" />
      </div>
      <div className={styles.bar__link}>
        <PresentationLink name="What's Next" />
      </div>
    </div>
  );
}
