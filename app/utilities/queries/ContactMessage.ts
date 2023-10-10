import { gql, DocumentNode } from "@apollo/client";

const TEST: DocumentNode = gql`
  query TestQuery {
    contact_message {
      contact_company
      contact_email
    }
  }
`;

export { TEST };
