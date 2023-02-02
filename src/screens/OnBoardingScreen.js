import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function OnBoardingScreen({navigation}) {
  return (
    <SafeAreaView style={{
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }}>
        <View>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#515151'
            }}>Welcome</Text>
        </View>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={{
            backgroundColor: '#17A52F',
            borderRadius: 5,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            marginVertical: 250,
            marginBottom: -200,
        }}>
            <Text>Let's Begin</Text>
            <Icon name='arrow-forward-ios' size={20} color='#fff'/>
        </TouchableOpacity>
    </SafeAreaView>
    
  )
}