import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './../screens/OnBoardingScreen';
import LoginScreen from './../screens/LoginScreen';
import HomeScreen from './../screens/HomeScreen';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="OnBoarding" 
            component={OnBoardingScreen} 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="Login"
            component={LoginScreen} 
            options={{headerShown: false}} 
        />
    </Stack.Navigator>
  )
}