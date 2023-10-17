import styles from "../styles/SignIn.module.scss";
import Link from "next/link";

export default function SignIn(): JSX.Element {
  return (
    <main>
      <div className={styles.signin}>
        <h1>Coming soon...</h1>
        <h3>Sign in is under construction</h3>
        <Link href="/api/auth/login">Login</Link>
      </div>
    </main>
  );
}
