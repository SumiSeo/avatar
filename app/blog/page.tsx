import styles from "../styles/Blog.module.scss";
import Header from "../components/Header";
import BlogSelectToolbar from "../components/BlogSelectToolbar";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__container}>
        <Header title="Sumi Blog" />
      </div>
      <div className={styles.blog__container}>
        <BlogSelectToolbar />
      </div>
    </div>
  );
}
