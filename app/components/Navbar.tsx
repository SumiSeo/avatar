import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/NavBar.module.scss";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__box}>
        <Link className={styles.nav__link} href="/">
          Sumi
        </Link>
      </div>
      <div className={styles.nav__box}>
        <Link className={styles.nav__link} href="/contact">
          Contact
        </Link>
        <Link className={styles.nav__link} href="/education">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
