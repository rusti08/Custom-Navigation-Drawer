import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    Text,
} from 'react-native'
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';


function App() {
  return (
    <NavigationContainer>
        <AppStack />
        {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

export default App;