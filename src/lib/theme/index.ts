import * as Colors from './colors';

const ThemeColors: ThemeColorType = Object.entries(Colors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value,
  }),
  {},
);

export default ThemeColors;

export interface ThemeColorType {
  [key: string]: Colors.colorType;
}
