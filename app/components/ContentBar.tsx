"use client";

import styles from "../styles/components/ContentBar.module.scss";

export default function ContentBar({
  title,
  id,
}: {
  title: String;
  id: number;
}): JSX.Element {
  return (
    <div className={styles.contentBar}>
      <span data-key={title} className={styles.contentBar__box}>
        <div className={styles.about__box}></div>
      </span>
    </div>
  );
}
