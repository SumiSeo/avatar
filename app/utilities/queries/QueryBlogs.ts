import { gql, DocumentNode } from "@apollo/client";

const QUERY_BLOGS: DocumentNode = gql`
  query query_blogs {
    blogs {
      classification
      date
      id
      title
    }
  }
`;

export { QUERY_BLOGS };
