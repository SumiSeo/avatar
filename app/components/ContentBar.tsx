"use client";

import styles from "../styles/components/ContentBar.module.scss";

export default function ContentBar({
  title,
  id,
  clicked,
}: {
  title: String;
  id: number;
  clicked: number;
}): JSX.Element {
  const active = styles.contentBar__active;
  const nonActive = styles.contentBar__box;

  return (
    <div className={styles.contentBar}>
      <span
        data-key={title}
        key={id}
        className={clicked === id - 1 ? active : nonActive}
      >
        <div className={styles.about__box}></div>
      </span>
    </div>
  );
}
