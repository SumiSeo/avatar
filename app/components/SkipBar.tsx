import Link from "next/link";
import styles from "../styles/components/SkipBar.module.scss";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.skipBar}>
      <div className={styles.skipBar__box}>
        <Link className={styles.skipBar__link} href="/test">
          up
        </Link>
      </div>
      <div className={styles.skipBar__box}>
        <Link className={styles.skipBar__link} href="/down">
          down
        </Link>
      </div>
    </div>
  );
}