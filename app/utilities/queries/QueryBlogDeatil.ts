import { gql, DocumentNode } from "@apollo/client";

const QUERY_BLOG_DETAIL: DocumentNode = gql`
  query QueryBlogDetail($id: Int!) {
    blogs(where: { id: { _eq: $id } }) {
      classification
      date
      title
      id
    }
  }
`;

export { QUERY_BLOG_DETAIL };
