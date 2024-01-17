import React from 'react';
import {Text} from 'react-native';
import {StyleSheetReturnType, TitlePropType} from './types';
import Styles from './styles';

function Title({title}: Readonly<TitlePropType>) {
  const styles: StyleSheetReturnType = Styles();

  return (
    <Text style={styles.titleTextStyles} testID="title_text">
      {title}
    </Text>
  );
}

export default React.memo(Title);
