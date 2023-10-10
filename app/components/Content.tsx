import styles from "../styles/components/Content.module.scss";
import { MyMissionProps } from "../types/MyMission";

//comp
import ContentImg from "./ContentImg";

export default function Content({
  mission_description,
  mission_title,
}: MyMissionProps): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.content__text}>
        <div className={styles.content__title}>{mission_title}</div>
        <div className={styles.content__desc}>{mission_description}</div>
      </div>
      <div className={styles.content__img}>
        <ContentImg />
      </div>
    </div>
  );
}
