import {StyleSheet} from 'react-native';
import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheetReturnType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();
  return StyleSheet.create<StyleSheetReturnType>({
    mainContainerStyle: {
      height: 25,
      width: 25,
      borderRadius: 25,
      borderColor: themeContext.color.royalBlue,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    markedStyle: {
      height: 15,
      width: 15,
      backgroundColor: themeContext.color.royalBlue,
      borderRadius: 15,
    },
  });
}

export default Styles;
