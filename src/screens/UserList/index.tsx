import {View} from 'react-native';
import React from 'react';

import UserRole from './UserRole';
import ViewController from './ViewController';

import Users from './Users';
import styles from './styles';
import SearchUser from './SearchUser';
import {ViewControllerReturnType} from './types';

function UsersList() {
  const {
    selectedRole,
    onSelectUserRole,
    textInputText,
    onSearchUser,
    loading,
    fetchUserByRole,
    ZellerCustomer,
  }: ViewControllerReturnType = ViewController();
  const style = styles();
  return (
    <View style={style.mainContainerStyle}>
      <SearchUser
        searchText={textInputText}
        onChangeSearchText={onSearchUser}
      />
      <UserRole
        selectedRole={selectedRole}
        onSelectUserRole={onSelectUserRole}
      />
      <Users
        customers={ZellerCustomer}
        selectedRole={selectedRole}
        onRefresh={fetchUserByRole}
        loading={loading}
      />
    </View>
  );
}

export default UsersList;
