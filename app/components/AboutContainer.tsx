import styles from "../styles/components/AboutContainer.module.scss";

//components
import ContentBar from "./ContentBar";

export default function AboutContainer(): JSX.Element {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <h1>My mission</h1>
        </div>
        <div className={styles.about__box}>
          <h4>
            Create a generalized brain interface to restore autonomy to those
            with unmet medical needs today and unlock human potential tomorrow.
          </h4>
        </div>
      </div>
      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <ContentBar />
          <ContentBar />
          <ContentBar />
        </div>
        <div className={styles.about__box}></div>
      </div>
    </div>
  );
}
