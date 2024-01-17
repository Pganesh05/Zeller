import {UserRoles} from '@src/Constant';
import {useCallback, useEffect, useState} from 'react';
import {gql, useLazyQuery} from '@apollo/client';

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

function ViewController() {
  const [selectedRole, setSelectedRole] = useState<UserRoles>(UserRoles.Admin);

  const [getUser, {loading, data}] = useLazyQuery(GET_USER);

  const [textInputText, setTextInputText] = useState<string>('');

  const fetchUserByRole = useCallback(
    function (textInputValue?: string) {
      getUser({
        variables: {
          filter: {
            role: {
              eq: selectedRole,
            },
            name: {
              contains: 'test',
            },
          },
        },
      });
    },
    [getUser, selectedRole],
  );

  useEffect(() => {
    fetchUserByRole(textInputText);
  }, [fetchUserByRole, textInputText]);

  function onSearchUser(text: string) {
    setTextInputText(text);
  }

  const onSelectUserRole = useCallback(
    (role: UserRoles) => {
      setSelectedRole(role);
      fetchUserByRole();
    },
    [fetchUserByRole],
  );

  return {
    selectedRole,
    onSelectUserRole,
    ZellerCustomer: data?.listZellerCustomers?.items || [],
    textInputText,
    onSearchUser,
    fetchUserByRole,
    loading,
  };
}

export default ViewController;
