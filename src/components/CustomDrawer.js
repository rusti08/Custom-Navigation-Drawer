import React from 'react'
import { 
    View, 
    Text,
    ImageBackground,
    Image,
} from 'react-native'
import { 
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = (props) => {
  return(
    <View style={{flex: 1,}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#7722CD'}}>
            <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={{padding:20,}}            >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                        source={require('../assets/images/user-profile.jpg')}
                        style={{width: 80,height: 80,borderRadius: 40,marginBottom: 20,}}/>
                </View>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#FFF'}}>John Doe</Text>
            </ImageBackground>
            <View style={{backgroundColor:'#FFF',paddingTop: 10,}}>
                <DrawerItemList {...props} />
            </View>
            <View>
                <Text>Custom Text</Text>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer;