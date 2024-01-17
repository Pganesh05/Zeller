import {UserRoles} from '@src/Constant';
import {TextStyle, ViewStyle} from 'react-native';

export interface RadioButtonWithLabelPropType {
  label: string;
  isSelected: boolean;
  onSelect: (selectedItem: UserRoles) => void;
}

export type StyleSheetType = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
};
