import styles from "../styles/components/CircleContainer.module.scss";

//comp
import MousePointerIcon from "./MousePointerIcon";

export default function CircleContainer(): JSX.Element {
  return (
    <div className={styles.phrase}>
      <div className={styles.phrase__container}>
        <MousePointerIcon />
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
