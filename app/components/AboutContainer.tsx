"use Client";

import styles from "../styles/components/AboutContainer.module.scss";
import { MY_MISSIONS } from "../utilities/queries/MyMission";
import { useQuery } from "@apollo/client";
//components
import ContentBar from "./ContentBar";
import Content from "./Content";
import { MyMissionProps } from "../types/MyMission";

export default function AboutContainer(): JSX.Element {
  const { data, loading } = useQuery(MY_MISSIONS);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log("data", data);
  }
  const createContentBar = (): JSX.Element => {
    return (
      data &&
      data.my_mission.map(({ mission_title, mission_id }: MyMissionProps) => {
        return <ContentBar key={mission_id} title={mission_title} />;
      })
    );
  };

  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <h1>My mission</h1>
        </div>
        <div className={styles.about__box}>
          <h4>
            Improving the user interface through an ergonomic approach as a
            software development expert and a content creator
          </h4>
        </div>
      </div>
      <div className={styles.about__container}>
        <div className={styles.about__box}>{createContentBar()}</div>
        <div className={styles.about__box}>
          <Content />
        </div>
      </div>
    </div>
  );
}
