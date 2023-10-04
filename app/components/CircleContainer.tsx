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
    console.log("checking context circle", disappearCircles);
    setDisappearCircles(true);
  }, [disappearCircles]);

  return (
    <div className={styles.phrase}>
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
  );
}
