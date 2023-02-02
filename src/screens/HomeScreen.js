import React, {useState} from 'react'
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
import Carousel from 'react-native-snap-carousel'
import BannerSlider from '../components/BannerSlider';
import { sliderData, freeGames, paidGames } from './../model/data';
import { windowWidth } from './../utils/Dimension';
import CustomSwitch from './../components/CustomSwitch';
import ListItems from './../components/ListItems';



function HomeScreen({navigation}) {

    // to get source of data/image variables in BannerSlider.js
    const renderBanner = ({item,index}) => {
        return <BannerSlider data={item} />
    }

    // this function for tab selection switch
    const [gamesTab, setGamesTab] = useState(1);

    const onSelectSwitch = (value) => {
      setGamesTab(value)
    }
    
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

            {/* This is for carousel */}
            <Carousel 
                ref={(c) => { this._carousel = c; }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 40}
                itemWidth={300}
                loop={true}
            />

            {/* this is for tab selection view */}
            <View style={{marginVertical: 20}}>
                <CustomSwitch 
                    selectionMode={1}
                    option1="Free to play"
                    option2="Paid games"
                    onSelectSwitch={onSelectSwitch}
                />
            </View>

            {/* this is for list items */}
            {gamesTab == 1 && freeGames.map(item => (
                <ListItems 
                    key={item.id}
                    photo={item.poster}
                    title={item.title}
                    subtitle={item.subtitle}
                    isFree={item.isFree}
                    price={item.price}
                />
            )) 
            }
            {gamesTab == 2 && paidGames.map(item => (
                <ListItems 
                    key={item.id}
                    photo={item.poster}
                    title={item.title}
                    subtitle={item.subtitle}
                    isFree={item.isFree}
                    price={item.price}
                />
            ))
            }

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;