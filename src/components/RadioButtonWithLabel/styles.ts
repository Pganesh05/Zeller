import {StyleSheet} from 'react-native';
import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheetType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();
  return StyleSheet.create<StyleSheetType>({
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
    },
    labelStyle: {fontSize: 15, marginLeft: 10, color: themeContext.color.black},
  });
}

export default Styles;
