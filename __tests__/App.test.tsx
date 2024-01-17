/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '@src/components/App';

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test.skip('App render', () => {
  renderer.create(<App />);
});
