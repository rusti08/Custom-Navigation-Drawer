import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StyleSheet,
} from 'react-native'

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F3F3F'
    }}>
        <View>
            <Text>Login</Text>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.textBox} placeholder='Username' />
            <TextInput style={styles.textBox} placeholder='Password' />
        </View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
                backgroundColor: '#24641A',
                borderRadius: 5,
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
        }}>
            <Text>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    textBox: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
        backgroundColor: '#3F3F3F',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    }
})
