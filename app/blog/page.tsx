import styles from "../styles/Blog.module.scss";
import Header from "../components/Header";
import BlogLists from "../components/BlogLists";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__container}>
        <Header title="Sumi Blog" link="blog" />
      </div>
      <div className={styles.blog__container}>
        <BlogLists />
      </div>
    </div>
  );
}
