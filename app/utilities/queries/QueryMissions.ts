import { gql, DocumentNode } from "@apollo/client";

const QUERY_MISSIONS: DocumentNode = gql`
  query query_missions {
    my_mission(order_by: { mission_id: asc }) {
      mission_description
      mission_id
      mission_title
    }
  }
`;

export { QUERY_MISSIONS };
