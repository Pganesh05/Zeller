import React from 'react';
import {View} from 'react-native';
import {RadioButtonWithLabelPropType} from '@components/RadioButtonWithLabel/types';
import Styles from './styles';
import {StyleSheetReturnType} from './types';

RadioButton.defaultProps = {
  isSelected: false,
};

function RadioButton({
  isSelected,
}: Omit<RadioButtonWithLabelPropType, 'label' | 'onSelect'>) {
  const style: StyleSheetReturnType = Styles();

  return (
    <View style={style.mainContainerStyle} testID="radio_button_container">
      {!!isSelected && (
        <View style={style.markedStyle} testID="radio_button_selected" />
      )}
    </View>
  );
}

export default React.memo(RadioButton);
