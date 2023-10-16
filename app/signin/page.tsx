import type { Metadata } from "next";
import styles from "../styles/SignIn.module.scss";

export const metadata: Metadata = {
  title: "Signin",
  description: "Sumi SEO | Software Engineer",
};

export default function Education(): JSX.Element {
  return (
    <main>
      <div className={styles.signin}>
        <h1>Coming soon...</h1>
        <h3>Sign in is under construction</h3>
      </div>
    </main>
  );
}
