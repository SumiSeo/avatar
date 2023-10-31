import { gql, DocumentNode } from "@apollo/client";

const QUERY_PLOGS: DocumentNode = gql`
  query query_plogs {
    plogs {
      classification
      content
      date
      id
      title
      url
    }
  }
`;

export { QUERY_PLOGS };
