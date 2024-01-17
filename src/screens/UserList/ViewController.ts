import {UserRoles} from '@src/Constant';
import {useCallback, useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';
import {GET_USER} from '@src/components/services/userQueries';
import {
  fetchUserByRoleName,
  fetchUserByRoleVariable,
} from '@src/components/services/userServices';
import useDebounce from '@src/customHook/useDebounce';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '@src/navigator/Constant';

function ViewController() {
  const [selectedRole, setSelectedRole] = useState<UserRoles>(UserRoles.Admin);

  const [getUser, {loading, data}] = useLazyQuery(GET_USER);

  const [textInputText, setTextInputText] = useState<string>('');
  const debouncedValue = useDebounce(textInputText, 500);

  const navigation = useNavigation();

  const fetchUserByRole = useCallback(
    function () {
      getUser(fetchUserByRoleVariable(selectedRole));
    },
    [getUser, selectedRole],
  );

  useEffect(() => {
    getUser(fetchUserByRoleName(textInputText));
  }, [debouncedValue, getUser]);

  useEffect(() => {
    fetchUserByRole();
  }, [fetchUserByRole]);

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

  function navigateToUserDetail(): void {
    navigation.navigate(ScreenName.USER_DETAILS);
  }

  return {
    selectedRole,
    onSelectUserRole,
    ZellerCustomer: data?.listZellerCustomers?.items || [],
    textInputText,
    onSearchUser,
    fetchUserByRole,
    loading,
    navigateToUserDetail,
  };
}

export default ViewController;
