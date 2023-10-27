import { gql, DocumentNode } from "@apollo/client";

const QUERY_BLOGS: DocumentNode = gql`
  query query_blogs {
    blogs(order_by: { date: desc }) {
      classification
      date
      id
      title
      content
    }
  }
`;

export { QUERY_BLOGS };
