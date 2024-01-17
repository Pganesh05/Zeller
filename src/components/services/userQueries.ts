import {gql} from '@apollo/client';

export const GET_USER = gql`
  query ExampleQuery($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        email
        id
        role
        name
      }
    }
  }
`;
