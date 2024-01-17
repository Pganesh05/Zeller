import {ThemeContextType, useThemeContext} from '@src/context/ThemeContext';
import {StyleSheet} from 'react-native';
import {StyleSheetReturnType} from './types';

function Styles() {
  const themeContext: ThemeContextType = useThemeContext();

  return StyleSheet.create<StyleSheetReturnType>({
    containerStyle: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
    },
    titleCardStyle: {
      height: 50,
      width: 50,
      borderRadius: 5,
      backgroundColor: themeContext.color.lavenderBlue,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleStyle: {fontSize: 25, color: themeContext.color.black},
    rightContainer: {justifyContent: 'center'},
    nameStyle: {
      fontSize: 20,
      color: themeContext.color.black,
    },
    roleStyles: {
      fontSize: 12,
      color: themeContext.color.grey,
    },
  });
}

export default Styles;
