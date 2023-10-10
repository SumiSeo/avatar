import styles from "../styles/components/ContentBar.module.scss";
import { MyMissionProps } from "../types/MyMission";

export default function ContentBar({ title }: { title: String }): JSX.Element {
  return (
    <div className={styles.contentBar}>
      <span data-key={title} className={styles.contentBar__box}></span>
    </div>
  );
}
