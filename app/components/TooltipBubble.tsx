import styles from "../styles/components/TooltipBubble.module.scss";

//comp
import HandWavingIcon from "./HandWavingIcon";

export default function TooltipBubble(): JSX.Element {
  const bubbleChat = [
    "waving",
    "My name is Sumi",
    "I am a software engineer",
    "and",
    "content creator",
    "Let me show you more about my work",
    "my world",
  ];
  return (
    //make dynamic css styling
    <div className={styles.tooltip}>
      <HandWavingIcon />
    </div>
  );
}
