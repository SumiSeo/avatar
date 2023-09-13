import styles from "../styles/components/ContentBar.module.scss";

export default function ContentBar(): JSX.Element {
  return (
    <div className={styles.contentBar}>
      <span className={styles.contentBar__box}></span>
    </div>
  );
}
