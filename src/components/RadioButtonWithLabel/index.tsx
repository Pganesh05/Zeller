import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import RadioButton from '@components/RadioButton';
import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {RadioButtonWithLabelPropType, StyleSheetType} from './types';
import Styles from './styles';
import {UserRoles} from '@src/Constant';

function RadioButtonWithLabel({
  label,
  isSelected,
  onSelect,
}: Readonly<RadioButtonWithLabelPropType>) {
  const styles: StyleSheetType = Styles();
  const themeContext: ThemeContextType = useThemeContext();

  return (
    <Pressable
      onPress={() => onSelect(UserRoles[label])}
      style={StyleSheet.compose(styles.containerStyle, {
        backgroundColor: isSelected
          ? themeContext.color.lavenderBlue
          : 'transparent',
      })}
      testID="select_radio_button_label">
      <RadioButton isSelected={isSelected} />
      <Text style={styles.labelStyle} testID="radio_button_label">
        {label}
      </Text>
    </Pressable>
  );
}

export default React.memo(RadioButtonWithLabel);
