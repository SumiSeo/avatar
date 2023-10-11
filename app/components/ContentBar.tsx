"use Client";
import styles from "../styles/components/ContentBar.module.scss";

export default function ContentBar({
  title,
  id,
}: {
  title: String;
  id: number;
}): JSX.Element {
  const onClick = (e: any) => {
    console.log("clicked this->", id);
  };
  return (
    <div className={styles.contentBar}>
      <span
        data-key={title}
        onClick={(e) => onClick(e)}
        className={styles.contentBar__box}
      >
        <div className={styles.about__box}></div>
      </span>
    </div>
  );
}
