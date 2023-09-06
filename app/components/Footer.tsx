import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__box}>
        <Link className={styles.footer__link} href="/test">
          up
        </Link>
      </div>
      <div className={styles.footer__box}>
        <Link className={styles.footer__link} href="/down">
          down
        </Link>
      </div>
    </div>
  );
}
