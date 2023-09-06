import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__box}>
        <Link className={styles.nav__link} href="/">
          S u m i
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