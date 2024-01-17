import React from 'react';
import {View} from 'react-native';
import Styles from './styles';
import {StyleSheetType} from './types';

function Separator() {
  const styles: StyleSheetType = Styles();
  return <View style={styles.separatorStyle} />;
}

export default Separator;
