import styles from "../styles/components/AboutContainer.module.scss";

//components
import ContentBar from "./ContentBar";

export default function AboutContainer(): JSX.Element {
  return (
    <div className={styles.about}>
      <div className="about__container">
        <div className={styles.about__box}>
          <h1>My mission</h1>
        </div>
        <div className={styles.about__box}>
          <h4>explanation</h4>
        </div>
      </div>
      <div className="about__container">
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
