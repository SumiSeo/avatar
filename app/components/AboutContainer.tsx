"use client";

import styles from "../styles/components/AboutContainer.module.scss";
import { MY_MISSIONS } from "../utilities/queries/MyMission";
import { useQuery } from "@apollo/client";
import { useGlobalContext } from "../context/store";

//components
import ContentBar from "./ContentBar";
import Content from "./Content";
import { MyMissionProps } from "../types/MyMission";

export default function AboutContainer(): JSX.Element {
  const { missionNumber, setMissionNumber } = useGlobalContext();
  const { data, loading } = useQuery(MY_MISSIONS);
  if (loading) {
    return <div>Loading...</div>;
  }

  const onClickContent = (e: any, mission_id: number) => {
    e.preventDefault();
    setMissionNumber(mission_id - 1);
  };

  const createContentBar = (): JSX.Element => {
    return (
      data &&
      data.my_mission.map(({ mission_title, mission_id }: MyMissionProps) => {
        return (
          <div key={mission_id} onClick={(e) => onClickContent(e, mission_id)}>
            <ContentBar
              clicked={missionNumber}
              title={mission_title}
              id={mission_id}
            />
          </div>
        );
      })
    );
  };
  const createContent = () => {
    return (
      data.my_mission && (
        <Content
          mission_description={
            data.my_mission[missionNumber].mission_description
          }
          mission_title={data.my_mission[missionNumber].mission_title}
          mission_id={data.my_mission[missionNumber].mission_id}
        />
      )
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
        <div className={styles.about__box}>{createContent()}</div>
      </div>
    </div>
  );
}
