import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import RadioButtonWithLabel from '@src/components/RadioButtonWithLabel';

jest.useFakeTimers();

describe('Test Radio Button Screen', () => {
  const onSelect = () => jest.fn();
  const RadioButtonComponent = (
    <RadioButtonWithLabel
      label={'Admin'}
      isSelected={true}
      onSelect={onSelect}
    />
  );

  const tree = create(RadioButtonComponent).toJSON();

  //SnapShot testing
  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Test Radio Button is Selected', async () => {
    const {getByTestId} = render(RadioButtonComponent);

    const text = getByTestId('radio_button_label');
    expect(text.props.children).toBe('Admin');
  });

  test('Test Radio Button On click functionality', async () => {
    const {getByTestId} = render(RadioButtonComponent);

    expect(
      fireEvent.press(getByTestId('select_radio_button_label')),
    ).toBeTruthy();
  });
});
