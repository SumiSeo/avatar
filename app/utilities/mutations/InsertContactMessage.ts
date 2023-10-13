import { gql, DocumentNode } from "@apollo/client";

const INSERT_CONTACT_MESSAGE = gql`
  mutation INSERT_CONTACT_MESSAGE(
    $contact_company: String!
    $contact_email: String!
    $contact_message: String!
    $contact_name: String!
    $contact_phone: String!
    $contact_region: String!
    $contact_jobTitle: String!
    $id: uuid!
  ) {
    insert_contact_message_one(
      object: {
        contact_company: $contact_company
        contact_email: $contact_email
        contact_message: $contact_message
        contact_jobTitle: $contact_jobTitle
        contact_name: $contact_name
        contact_phone: $contact_phone
        contact_region: $contact_region
        id: $id
      }
    ) {
      id
    }
  }
`;

export { INSERT_CONTACT_MESSAGE };
