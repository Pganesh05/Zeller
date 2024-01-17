import React from 'react';

import {create} from 'react-test-renderer';

import UserDetails from '@src/screens/userDetails';

jest.useFakeTimers();

it('User Detail SnapShot Testing', () => {
  const tree = create(<UserDetails />).toJSON();

  expect(tree).toMatchSnapshot();
});
