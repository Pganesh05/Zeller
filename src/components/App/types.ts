import {ColorSchemeName} from 'react-native';
import {ThemeContextType} from '@src/context/ThemeContext';

export interface AppViewControllerType {
  theme: ThemeContextType;
}

export type AppearancePreferences = {
  colorScheme: ColorSchemeName;
};
