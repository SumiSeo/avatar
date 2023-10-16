"use client";

import styles from "../styles/components/PresentationContainer.module.scss";
import { useQuery } from "@apollo/client";
import { MY_PROJECTS } from "../utilities/queries/MyProject";
import { MyProjectProps } from "../types/MyProject";
import { useGlobalContext } from "../context/store";

//comp
import PresentationBar from "./PresentationBar";
import PresentationImg from "./PresentationImg";

export default function PresentationContainer(): JSX.Element {
  const { data, loading } = useQuery(MY_PROJECTS);
  const { projectNumber, setProjectNumber } = useGlobalContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  const clickProjectTitle = (e: any, project_id: number) => {
    setProjectNumber(project_id);
  };
  const createPresentationBar = (): JSX.Element => {
    return (
      data &&
      data.my_projects.map(({ project_id, project_name }: MyProjectProps) => {
        return (
          <div
            key={project_id}
            onClick={(e) => clickProjectTitle(e, project_id)}
          >
            <PresentationBar
              clicked={projectNumber}
              title={project_name}
              key={project_id}
              id={project_id}
            />
          </div>
        );
      })
    );
  };

  const createPresentationImg = (): JSX.Element => {
    return <PresentationImg id={projectNumber} />;
  };

  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        {createPresentationBar()}
      </div>
      <div className={styles.presentation__container}>
        {createPresentationImg()}
      </div>
      <div className={styles.presentation__container}></div>
    </div>
  );
}
