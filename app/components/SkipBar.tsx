"use client";

import { useGlobalContext } from "../context/store";
import Link from "next/link";
import styles from "../styles/components/SkipBar.module.scss";

export default function Footer(): JSX.Element {
  const { disappearCircles, setDisappearCircles } = useGlobalContext();
  const handleSkip = (e) => {
    e.preventDefault();
    setDisappearCircles(true);
  };
  return (
    <div onClick={(e) => handleSkip(e)} className={styles.skipBar}>
      <button className={styles.skipBar__button}>Skip Intro &darr;</button>
    </div>
  );
}
