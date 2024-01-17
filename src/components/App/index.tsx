/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from '@src/context/ThemeContext';
import MainNavigator from '@src/navigator/MainNavigator';
import {AppViewControllerType} from './types';
import ViewController from './ViewController';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:9002/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  const {theme}: AppViewControllerType = ViewController();

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={theme}>
          <StatusBar
            backgroundColor={theme.color.white}
            barStyle={theme.type === 'light' ? 'light-content' : 'dark-content'}
          />

          <MainNavigator />
        </ThemeContext.Provider>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

export default App;
