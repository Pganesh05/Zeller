import React from 'react';
import {render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import RadioButton from '@src/components/RadioButton';

jest.useFakeTimers();

describe('Test Radio Button Screen', () => {
  const findCodeComponent = <RadioButton isSelected />;

  const tree = create(<RadioButton isSelected />).toJSON();

  //SnapShot testing
  expect(tree).toMatchSnapshot();

  const {getByTestId} = render(findCodeComponent);

  const usernameOutput = getByTestId('radio_button_selected');

  test('Test Radio Button is Selected', async () => {
    expect(usernameOutput).toBeDefined();
  });
});
