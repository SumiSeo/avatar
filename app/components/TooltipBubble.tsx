import styles from "../styles/components/TooltipBubble.module.scss";

//comp
import HandWavingIcon from "./HandWavingIcon";

export default function TooltipBubble(): JSX.Element {
  return (
    <div className={styles.tooltip}>
      <HandWavingIcon />
    </div>
  );
}
