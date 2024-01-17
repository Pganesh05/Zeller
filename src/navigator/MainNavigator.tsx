import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList, ScreenNavigatorType} from './types';
import MainNavigatorScreens from './Constant';

const MainStackNavigator = createStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        {Array.from(
          MainNavigatorScreens,
          ({Component, name}: ScreenNavigatorType) => {
            return (
              <MainStackNavigator.Screen
                component={Component}
                key={name}
                name={name as keyof MainStackParamList}
              />
            );
          },
        )}
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
