import { gql, DocumentNode } from "@apollo/client";

const QUERY_PROJECTS: DocumentNode = gql`
  query query_projects {
    my_projects(order_by: { project_id: asc }) {
      project_description
      project_id
      project_name
      project_tech
    }
  }
`;

export { QUERY_PROJECTS };
