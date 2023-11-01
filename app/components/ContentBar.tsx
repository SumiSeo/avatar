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
  const nonActiveCircle = styles.content__nocircle;

  return (
    <div className={styles.content}>
      <div className={styles.contentBar}>
        <span
          data-key={title}
          key={id}
          className={clicked === id - 1 ? active : nonActive}
        >
          <div className={styles.about__box}></div>
        </span>
      </div>
      <span
        className={clicked == id - 1 ? styles.content__circle : nonActiveCircle}
      ></span>
    </div>
  );
}
