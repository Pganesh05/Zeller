import {createContext, useContext} from 'react';
import {ColorSchemeName} from 'react-native';
import ThemeColors from '@src/lib/theme';
import {colorType} from '@src/lib/theme/colors';

export const ThemeContext = createContext<ThemeContextType>({
  type: 'light',
  color: ThemeColors.light,
  setTheme: () => {},
});

export function useThemeContext() {
  const context = useContext<ThemeContextType>(ThemeContext);

  if (context === undefined) {
    throw new Error('Theme not yet initialized');
  }

  return context;
}

export interface ThemeContextType {
  type: ColorSchemeName;
  color: colorType;
  setTheme: Function;
}
