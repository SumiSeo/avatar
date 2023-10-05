"use client";

import styles from "../styles/components/CircleContainer.module.scss";
import { useGlobalContext } from "../context/store";
import { useEffect } from "react";

//comp
import MousePointerIcon from "./MousePointerIcon";
import TooltipBubble from "./TooltipBubble";

export default function CircleContainer(): JSX.Element {
  const { disappearCircles, setDisappearCircles } = useGlobalContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisappearCircles(true), console.log("after five seconds called");
    }, 6200);
    return () => {
      clearTimeout(timer);
    };
  }, [disappearCircles]);

  return (
    <>
      <div className={!disappearCircles ? styles.phrase : styles.hidden}>
        <div className={styles.phrase__container}>
          <div className={styles.chat__conatainer}>
            <MousePointerIcon />
            <TooltipBubble />
          </div>
        </div>
        <div className={styles.phrase__container}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={styles.phrase__text}></div>
    </>
  );
}
