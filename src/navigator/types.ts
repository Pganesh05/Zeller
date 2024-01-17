export type MainStackParamList = {
  UserList: undefined;
  UserDetails: undefined;
};

export interface ScreenNameType {
  [key: string]: string;
}

export interface ScreenNavigatorType {
  key: number;
  name: string;
  Component: () => JSX.Element;
}

export type NavigatorConstantType = Array<ScreenNavigatorType>;
