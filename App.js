import React,{ Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {enableScreens} from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './screens/screen1/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3'
enableScreens();
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          stackAnimation:'fade'
        }}
      >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
