import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {create} from 'react-test-renderer';

jest.useFakeTimers();
import {act, renderHook} from '@testing-library/react-native';

import UserList from '@src/screens/UserList';
import ViewController, {GET_USER} from '@src/screens/UserList/ViewController';
import {MockedProvider} from '@apollo/client/testing';
import {UserRoles} from '@src/Constant';
import {ZellerCustomer} from './Users.test';

jest.useFakeTimers();

const userMock = {
  delay: 30,
  request: {
    query: GET_USER,
    variables: {
      filter: {
        role: {
          eq: 'Admin',
        },
        name: {contains: 'test'},
      },
    },
  },
  result: {
    data: ZellerCustomer,
  },
};

it('Express screen SnapShot testing', () => {
  const tree = create(
    <MockedProvider mocks={[userMock]} addTypename={false}>
      <NavigationContainer>
        <UserList />
      </NavigationContainer>
    </MockedProvider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('should update Result', () => {
  const wrapper = ({children}: any) => (
    <MockedProvider mocks={[userMock]} addTypename={false}>
      {children}
    </MockedProvider>
  );
  const {result} = renderHook(() => ViewController(), {wrapper});

  expect(result.current.selectedRole).toBe(UserRoles.Admin);

  expect(result.current.loading).toBe(true);
  act(() => {
    result.current.onSearchUser('test');
  });

  expect(result.current.textInputText).toBe('test');

  expect(result.current.onSelectUserRole).toBeTruthy();
});
