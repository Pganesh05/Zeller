/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Blob/FileReader', () => jest.fn());
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.useFakeTimers();

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return jest.requireActual(
    'react-native/Libraries/Utilities/__mocks__/BackHandler.js',
  );
});
