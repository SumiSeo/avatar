import styles from "../styles/components/PresentationBar.module.scss";

export default function PresentationBar(): JSX.Element {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__link}>1</div>
      <div className={styles.bar__link}>2</div>
      <div className={styles.bar__link}>3</div>
      <div className={styles.bar__link}>4</div>
    </div>
  );
}
