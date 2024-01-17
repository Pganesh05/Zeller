import {useCallback, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {ThemeContextType} from '@src/context/ThemeContext';
import ThemeColors from '@src/lib/theme';

import {AppearancePreferences, AppViewControllerType} from './types';

function ViewController(): AppViewControllerType {
  const switchTheme = useCallback(
    ({colorScheme}: AppearancePreferences): void => {
      if (colorScheme) {
        setTheme({
          type: colorScheme,
          color: ThemeColors[colorScheme],
          setTheme: switchTheme,
        });
      }
    },
    [],
  );
  const [theme, setTheme] = useState<ThemeContextType>({
    type: 'light',
    color: ThemeColors.light,
    setTheme: switchTheme,
  });

  useEffect(() => {
    const AppearanceListener = Appearance.addChangeListener(switchTheme);
    return () => {
      AppearanceListener.remove();
    };
  }, [switchTheme]);

  return {
    theme,
  };
}

export default ViewController;
