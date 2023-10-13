import { gql, DocumentNode } from "@apollo/client";

const MY_MISSIONS: DocumentNode = gql`
  query MyMissions {
    my_mission(order_by: { mission_id: asc }) {
      mission_description
      mission_id
      mission_title
    }
  }
`;

export { MY_MISSIONS };
