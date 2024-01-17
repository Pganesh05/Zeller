import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import UserCard from '@components/UserCard';
import {UserRoles} from '@src/Constant';

jest.useFakeTimers();

describe('Test Radio Button Screen', () => {
  afterEach(cleanup);
  const item = {
    email: 'test@gmail.com',
    id: '1',
    name: 'test',
    role: UserRoles.Admin,
  };

  const UserCardComponent = <UserCard item={item} />;

  const tree = create(UserCardComponent).toJSON();

  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Test user name prefix render', async () => {
    const {getByTestId} = render(UserCardComponent);

    const namePrefix = getByTestId('user_name_prefix');
    expect(namePrefix.props.children).toBe(item.name[0]);
  });

  it('Test user name text render', async () => {
    const {getByTestId} = render(UserCardComponent);
    const userName = getByTestId('user_name');

    expect(userName.props.children).toBe(item.name);
  });
  it('Test user role text render', async () => {
    const {getByTestId} = render(UserCardComponent);
    const userRole = getByTestId('user_role');
    expect(userRole.props.children).toBe(item.role.toString());
  });
});
