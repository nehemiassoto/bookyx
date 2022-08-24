import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
export default function StackScreen() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          />
          <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          />
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}