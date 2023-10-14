"use client";

import styles from "../styles/components/PresentationContainer.module.scss";
import { useQuery } from "@apollo/client";
import { MY_PROJECTS } from "../utilities/queries/MyProject";
import { MyProjectProps } from "../types/MyProject";

//comp
import PresentationBar from "./PresentationBar";
import PresentationImg from "./PresentationImg";

export default function PresentationContainer(): JSX.Element {
  const { data, loading } = useQuery(MY_PROJECTS);
  if (loading) {
    return <div>Loading...</div>;
  }
  const createPresentationBar = (): JSX.Element => {
    return (
      data &&
      data.my_projects.map(({ project_id, project_name }: MyProjectProps) => {
        return (
          <PresentationBar
            title={project_name}
            key={project_id}
            id={project_id}
          />
        );
      })
    );
  };

  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        {createPresentationBar()}
      </div>
      <div className={styles.presentation__container}>
        <PresentationImg />
      </div>
      <div className={styles.presentation__container}></div>
    </div>
  );
}
