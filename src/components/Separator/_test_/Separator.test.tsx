import React from 'react';

import {create} from 'react-test-renderer';

import Separator from '@components/Separator';

jest.useFakeTimers();

it('separator SnapShot Testing', () => {
  const tree = create(<Separator />).toJSON();

  expect(tree).toMatchSnapshot();
});
