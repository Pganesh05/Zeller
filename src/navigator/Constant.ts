import {ScreenNameType, NavigatorConstantType} from './types';

import UserList from '@src/screens/UserList';
// import UserDetails from '../screens/UserDetails';

export const ScreenName: ScreenNameType = {
  USER_LIST: 'UserList',
  USER_DETAILS: 'UserDetails',
};

const MainNavigatorScreens: NavigatorConstantType = [
  {key: 1, name: ScreenName.USER_LIST, Component: UserList},
  //   {key: 2, name: ScreenName.USER_DETAILS, Component: UserDetails},
];

export default MainNavigatorScreens;
