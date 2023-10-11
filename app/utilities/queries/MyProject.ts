import { gql, DocumentNode } from "@apollo/client";

const MY_PROJECTS: DocumentNode = gql`
  query MyProjects {
    my_projects {
      project_description
      project_id
      project_name
      project_tech
    }
  }
`;

export { MY_PROJECTS };
