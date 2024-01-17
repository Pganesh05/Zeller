import React from 'react';
import Title from '@src/components/Title';
import {TextInput} from 'react-native';
import Styles from './styles';
import {SearchUserPropType, StyleSheetReturnType} from './types';

function SearchUser({searchText, onChangeSearchText}: SearchUserPropType) {
  const styles: StyleSheetReturnType = Styles();
  return (
    <>
      <Title title="Search User" />
      <TextInput
        style={styles.textInputStyles}
        value={searchText}
        onChangeText={onChangeSearchText}
        testID="search_user_test_id"
      />
    </>
  );
}

export default SearchUser;
