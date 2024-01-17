import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheet} from 'react-native';
import {StyleSheetReturnType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();
  return StyleSheet.create<StyleSheetReturnType>({
    titleTextStyles: {
      fontSize: 20,
      color: themeContext.color.black,
      marginVertical: 15,
    },
  });
}

export default Styles;
