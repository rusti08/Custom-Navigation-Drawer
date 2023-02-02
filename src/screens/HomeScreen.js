import React from 'react'
import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TextInput,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen() {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#3C3838',
    }}>
        <ScrollView style={{padding: 20,}}>
            <View style={{ //this for header name & icon
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                <Text style={{color: '#FFF', marginTop: 10, fontWeight: 'bold'}}>Rusti Awesome</Text>
                <TouchableOpacity>
                    <ImageBackground 
                        source={require('../assets/images/user-profile.jpg')}
                        style={{width: 40, height: 40,}}
                        borderRadius={50}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ //this for search view
                flexDirection: 'row',
                justifyContent: 'flex-start',
                borderColor: '#C8C8C8',
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 0,
                marginTop: 10,
            }}>
                <Icon 
                    name='search' size={20} color="#C6C6C6" 
                    style={{ marginRight:5, marginVertical: 15,}} 
                />
                <TextInput placeholder='Search' style={{width:'90%', fontSize: 15}} />
            </View>
            <View style={{
                marginVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{fontWeight:'bold', fontSize:15,}}>Upcoming Games</Text>
                <TouchableOpacity>
                    <Text style={{color:'#3FA95F'}}>See All</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}