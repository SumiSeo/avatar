"use client";

import { useQuery } from "@apollo/client";
import { MY_PROJECTS } from "../utilities/queries/QueryProjects";

export default function PresentationLists(): JSX.Element {
  const { data, loading } = useQuery(MY_PROJECTS);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log("projectsss", data.my_projects);
  }

  const createProjectLists = (): JSX.Element => {
    return data.my_projects.map((project: any) => {
      return <div key={project.project_id}>{project.project_name}</div>;
    });
  };
  return <>{createProjectLists()}</>;
}
