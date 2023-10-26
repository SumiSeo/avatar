import styles from "../styles/Blog.module.scss";
import Header from "../components/Header";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.blog}>
      <Header title="Sumi Blog" />
    </div>
  );
}
