import React from 'react';

import App from '@src/components/App';
import {create} from 'react-test-renderer';
import {renderHook} from '@testing-library/react-native';
import ViewController from '@src/components/App/ViewController';

jest.useFakeTimers();

it('App Screen SnapShot Testing', () => {
  const tree = create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();

it('App Screen View Controller State variable Test', () => {
  const AppComponent = <App />;
  const tree = create(AppComponent).toJSON();

  expect(tree).toMatchSnapshot();

  const wrapper = ({children}: any) => <>{children}</>;

  const {result} = renderHook(() => ViewController(), {wrapper});

  expect(result.current.theme.type).toBe('light');
});
