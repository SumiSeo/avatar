"use client";

import { useQuery } from "@apollo/client";
import { MY_PROJECTS } from "../utilities/queries/MyProject";
import styles from "../styles/components/PresentationBar.module.scss";

//comp
import PresentationLink from "./PresentationLink";

export default function PresentationBar() {
  const { data, loading } = useQuery(MY_PROJECTS);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log("projects", data);
  }

  const createProjectBar = (): JSX.Element => {
    return (
      data &&
      data.my_projects.map((project: any) => {
        return (
          <div key={project.project_id} className={styles.bar__link}>
            <PresentationLink name={project.project_name} />
          </div>
        );
      })
    );
  };

  return <div className={styles.bar}>{createProjectBar()}</div>;
}
