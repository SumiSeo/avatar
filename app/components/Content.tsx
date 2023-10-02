import styles from "../styles/components/Content.module.scss";

//comp
import ContentImg from "./ContentImg";

export default function Content(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.content__text}>
        <div className={styles.content__title}>Discover</div>
        <div className={styles.content__desc}>
          Our brain-computer interface is fully implantable, cosmetically
          invisible, and designed to let you control a computer or mobile device
          anywhere you go.
        </div>
      </div>
      <div className={styles.content__img}>
        <ContentImg />
      </div>
    </div>
  );
}
