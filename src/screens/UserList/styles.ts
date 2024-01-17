import {StyleSheet} from 'react-native';
import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheetReturnType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();
  return StyleSheet.create<StyleSheetReturnType>({
    mainContainerStyle: {
      flex: 1,
      padding: 10,
      backgroundColor: themeContext.color.white,
    },
    textInputStyles: {
      borderWidth: 1,
      height: 50,
      width: '100%',
      borderRadius: 5,
      borderColor: themeContext.color.black,
      padding: 15,
    },
  });
}

export default Styles;
