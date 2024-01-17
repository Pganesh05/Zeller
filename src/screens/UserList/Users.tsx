import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import Separator from '@src/components/Separator';
import Title from '@src/components/Title';
import UserCard from '@src/components/UserCard';
import {UserType, UsersPropType} from './types';

function Users({selectedRole, customers, onRefresh, loading}: UsersPropType) {
  return (
    <FlatList
      data={customers}
      renderItem={({item}: UserType) => <UserCard item={item} />}
      ListHeaderComponent={<Title title={`${selectedRole} User`} />}
      ListFooterComponent={Separator}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
    />
  );
}

export default React.memo(Users);
