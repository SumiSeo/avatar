import { gql, DocumentNode } from "@apollo/client";

const QUERY_PLOG_DETAIL: DocumentNode = gql`
  query QueryPlogDetail($id: Int!) {
    plogs(where: { id: { _eq: $id } }) {
      classification
      date
      title
      id
      content
    }
  }
`;

export { QUERY_PLOG_DETAIL };
