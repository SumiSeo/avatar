"use Client";

import styles from "../styles/components/AboutContainer.module.scss";
import { TEST } from "../utilities/queries/ContactMessage";
import { useQuery } from "@apollo/client";
//components
import ContentBar from "./ContentBar";
import Content from "./Content";

export default function AboutContainer(): JSX.Element {
  const { data, loading } = useQuery(TEST);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log("data", data);
  }
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <h1>My mission</h1>
        </div>
        <div className={styles.about__box}>
          <h4>
            Improving the user interface through an ergonomic approach as a
            software development expert and a content creator
          </h4>
        </div>
      </div>
      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <ContentBar />
          <ContentBar />
          <ContentBar />
          <ContentBar />
          <ContentBar />
        </div>
        <div className={styles.about__box}>
          <Content />
        </div>
      </div>
    </div>
  );
}
