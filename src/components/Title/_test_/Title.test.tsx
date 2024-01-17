import React from 'react';
import {render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import Title from '@src/components/Title';

describe('Title Component testing', () => {
  const findCodeComponent = <Title title={'User Role'} />;

  const tree = create(findCodeComponent).toJSON();

  //SnapShot testing
  expect(tree).toMatchSnapshot();

  test('Title text rendering test', async () => {
    const {getByTestId} = render(findCodeComponent);

    const text = getByTestId('title_text');
    expect(text.props.children).toBe('User Role');
  });
});
