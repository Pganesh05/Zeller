import React from 'react';

import {create} from 'react-test-renderer';

import UserRole from '@src/screens/UserList/UserRole';
import {UserRoles} from '@src/Constant';

jest.useFakeTimers();

describe('Test User Role Component Test', () => {
  const onChangeRole = () => jest.fn();
  const SearchUserComponent = (
    <UserRole selectedRole={UserRoles.Admin} onSelectUserRole={onChangeRole} />
  );

  const tree = create(SearchUserComponent).toJSON();

  //SnapShot testing
  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });
});
