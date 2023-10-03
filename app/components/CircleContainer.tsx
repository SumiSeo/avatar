import styles from "../styles/components/CircleContainer.module.scss";
import { useEffect } from "react";

//comp
import MousePointerIcon from "./MousePointerIcon";
import TooltipBubble from "./TooltipBubble";

export default function CircleContainer(): JSX.Element {
  // useEffect(() => {
  //   console.log("chek");
  // }, [6000]);
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
