import styles from "../styles/components/Content.module.scss";
import { MyMissionProps } from "../types/MyMission";

//comp
import ContentImg from "./ContentImg";

export default function Content({
  mission_description,
  mission_title,
  mission_id,
}: MyMissionProps): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.content__text}>
        <div className={styles.content__title}>
          Frontend Developer, Fluuent; Portland, USA
        </div>
        <div className={styles.content__desc}>
          • Developed medical referral application to improve the American
          healthcare system <br />
          <br />• R&D development with Microsoft PCF, C#, and Blazor Framework
          to attempt for polling Back-End data consistently to the user's local
          browser cache
          <br />
          <br />• Technologies : .NET, C#, Blazor, and JavaScript
        </div>
      </div>
      <div className={styles.content__img}>
        <ContentImg id={mission_id} />
      </div>
    </div>
  );
}
