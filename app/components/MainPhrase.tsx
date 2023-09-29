import styles from "../styles/components/MainPhrase.module.scss";

export default function MainPhrase(): JSX.Element {
  return (
    <div className={styles.phrase}>
      <div className={styles.phrase__container}>
        {/* <div className={styles.title}>
          as a <span>Software Engineer</span>
        </div> */}
      </div>
      <div className={styles.phrase__container}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
