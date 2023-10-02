import styles from "../styles/components/AboutContainer.module.scss";
import Image from "next/image";
import Light from "../../public/light.gif";

//components
import ContentBar from "./ContentBar";
import Content from "./Content";

export default function AboutContainer(): JSX.Element {
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
