import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/NavBar.module.scss";

const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_box}>
        <Link className={styles.link} href="/">
          Sumi
        </Link>
      </div>
      <div className={styles.nav_box}>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/education">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
