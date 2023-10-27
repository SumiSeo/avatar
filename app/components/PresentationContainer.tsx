"use client";

import styles from "../styles/components/PresentationContainer.module.scss";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utilities/queries/QueryProjects";
import { MyProjectProps } from "../types/MyProject";
import { useGlobalContext } from "../context/store";

//comp
import PresentationBar from "./PresentationBar";
import PresentationImg from "./PresentationImg";
import PresentationFooter from "./PresentationFooter";

export default function PresentationContainer(): JSX.Element {
  const { data, loading } = useQuery(QUERY_PROJECTS);
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
      <div className={styles.presentation__container}>
        <PresentationFooter />
      </div>
    </div>
  );
}
