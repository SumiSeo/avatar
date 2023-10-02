import styles from "../styles/components/TooltipBubble.module.scss";

//comp
import HandWavingIcon from "./HandWavingIcon";

export default function TooltipBubble(): JSX.Element {
  return (
    //make dynamic css styling
    <div style={{ width: 100 }} className={styles.tooltip}>
      <HandWavingIcon />
    </div>
  );
}
