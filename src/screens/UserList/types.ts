import {UserRoles} from '@src/Constant';
import {ViewStyle} from 'react-native';

export type StyleSheetReturnType = {
  mainContainerStyle: ViewStyle;
  textInputStyles: ViewStyle;
};

export interface CustomerType {
  email: string;
  id: string;
  name: string;
  role: UserRoles;
}

export type CustomerList = CustomerType[];

export type UsersPropType = {
  customers: CustomerList;
  selectedRole: UserRoles;
  onRefresh: () => void;
  loading: boolean;
};

export type UserType = {
  item: CustomerType;
};

export type UserRolePropType = {
  selectedRole: UserRoles;
  onSelectUserRole: (role: UserRoles) => void;
};

export type SearchUserPropType = {
  searchText: string;
  onChangeSearchText: (text: string) => void;
};

export type ViewControllerReturnType = {
  selectedRole: UserRoles;
  onSelectUserRole: (role: UserRoles) => void;
  ZellerCustomer: CustomerList | [];
  textInputText: string;
  onSearchUser: (text: string) => void;
  fetchUserByRole: (text?: string) => void;
  loading: boolean;
};
