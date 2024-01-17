import React from 'react';

import {create} from 'react-test-renderer';

import Users from '@src/screens/UserList/Users';
import {UserRoles} from '@src/Constant';
import {CustomerList} from '../types';

jest.useFakeTimers();

export const ZellerCustomer: CustomerList = [
  {
    email: 'test1@test.com',
    id: '1',
    name: 'TestCustomer1',
    role: UserRoles.Admin,
  },
  {
    email: 'test2@test.com',
    id: '2',
    name: 'TestCustomer2',
    role: UserRoles.Admin,
  },
  {
    email: 'test3@test.com',
    id: '3',
    name: 'TestCustomer3',
    role: UserRoles.Admin,
  },
  {
    email: 'test4@test.com',
    id: '4',
    name: 'TestCustomer4',
    role: UserRoles.Admin,
  },
];

describe('Test Radio Button Screen', () => {
  const onChangeRole = () => jest.fn();

  const UserComponent = (
    <Users
      selectedRole={UserRoles.Admin}
      onRefresh={onChangeRole}
      loading={false}
      customers={ZellerCustomer}
    />
  );

  const tree = create(UserComponent).toJSON();

  //SnapShot testing
  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });
});
