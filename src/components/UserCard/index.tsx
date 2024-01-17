import React from 'react';
import {Text, View} from 'react-native';
import {UserType} from '@src/screens/UserList/types';
import {StyleSheetReturnType} from './types';
import Styles from './styles';

function UserCard({item}: Readonly<UserType>) {
  const style: StyleSheetReturnType = Styles();

  return (
    <View style={style.containerStyle}>
      <View style={style.titleCardStyle}>
        <Text style={style.titleStyle} testID="user_name_prefix">
          {item.name[0]}
        </Text>
      </View>
      <View style={style.rightContainer}>
        <Text style={style.nameStyle} testID="user_name">
          {item.name}
        </Text>
        <Text style={style.roleStyles} testID="user_role">
          {item.role}
        </Text>
      </View>
    </View>
  );
}

export default UserCard;
