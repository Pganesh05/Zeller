import {StyleSheet} from 'react-native';
import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheetType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();

  return StyleSheet.create<StyleSheetType>({
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: themeContext.color.black,
      marginVertical: 15,
    },
  });
}

export default Styles;
