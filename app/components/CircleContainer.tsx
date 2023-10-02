import styles from "../styles/components/CircleContainer.module.scss";

//comp
import MousePointerIcon from "./MousePointerIcon";
import TooltipBubble from "./TooltipBubble";

export default function CircleContainer(): JSX.Element {
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
