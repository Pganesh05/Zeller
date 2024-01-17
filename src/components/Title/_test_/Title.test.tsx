import React from 'react';
import {render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import Title from '@src/components/Title';

describe('Test Radio Button Screen', () => {
  const findCodeComponent = <Title title={'User Role'} />;

  const tree = create(findCodeComponent).toJSON();

  //SnapShot testing
  expect(tree).toMatchSnapshot();

  test('Test Radio Button is Selected', async () => {
    const {getByTestId} = render(findCodeComponent);

    const text = getByTestId('title_text');
    expect(text.props.children).toBe('User Role');
  });
});
