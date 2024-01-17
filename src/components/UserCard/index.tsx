import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {UserCardPropType} from '@src/screens/UserList/types';
import {StyleSheetReturnType} from './types';
import Styles from './styles';

function UserCard({item, onNavigate}: Readonly<UserCardPropType>) {
  const style: StyleSheetReturnType = Styles();

  return (
    <Pressable
      style={style.containerStyle}
      onPress={onNavigate}
      testID="user_card">
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
    </Pressable>
  );
}

export default UserCard;
