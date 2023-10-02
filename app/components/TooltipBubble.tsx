import styles from "../styles/components/TooltipBubble.module.scss";

//comp
import HandWavingIcon from "./HandWavingIcon";

export default function TooltipBubble(): JSX.Element {
  const bubbleChat = [
    "and",
    "a content creator",
    "Let me show you more about my work",
    "my world",
  ];

  return (
    <>
      <div className={styles.tooltip}>
        <div className={styles.bubble}>
          <HandWavingIcon />
        </div>
        <div className={styles.bubble}>My name is Sumi.</div>
        <div className={styles.bubble}>
          I am a &nbsp;<span>software engineer</span>
        </div>
      </div>
    </>
  );
}
