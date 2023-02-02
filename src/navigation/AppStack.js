import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomDrawer from './../components/CustomDrawer'; //CustomDrawer
import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
import MessageScreen from './../screens/MessageScreen';
import SettingScreen from './../screens/SettingScreen';
import MomentScreen from './../screens/MomentScreen';


const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown:false,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerLabelStyle: {
                marginLeft: -25,
                fontSize: 15,
            }
        
        }}>
        
        <Drawer.Screen name="Home" component={HomeScreen} options={{ //Home drawer-item
            drawerIcon: ({color}) => (
                <Ionicons name='home-outline' size={22} color={color} />
            )
        }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ //Profile drawer-item
            drawerIcon: ({color}) => (
                <Ionicons name='person-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name="Message" component={MessageScreen} options={{ //Message drawer-item
            drawerIcon: ({color}) => (
                <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name="Moment" component={MomentScreen} options={{ //Moment drawer-item
            drawerIcon: ({color}) => (
                <Ionicons name='timer-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name="Setting" component={SettingScreen} options={{ //Settings drawer-item
            drawerIcon: ({color}) => (
                <Ionicons name='settings-outline' size={22} color={color} />
            )
        }}/>
    </Drawer.Navigator>
  );
}

export default AppStack;