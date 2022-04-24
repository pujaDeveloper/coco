import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, StatusBar, SafeAreaView, Button } from 'react-native';
import { BlurView } from '@react-native-community/blur'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import {scrollInterpolator, animatedStyles} from "./utils/animations"


export function HomeDetails(props) {
    const [currentImg, setcurrentImg] = useState(require('../../assets/Images/scenes/s1.jpeg'));

  const items = [
    {
      name: "Cappodocia",
      image: require('../../assets/Images/scenes/s1.jpeg'),
      cost: "$50.00"
    },
    {
      name: "Kathmandu",
      image: require(`../../assets/Images/scenes/s2.jpeg`),
      cost: "$100.00"
    },
    {
      name: "Cambodia",
      image: require(`../../assets/Images/scenes/s3.webp`),
      cost: "$150.00"
    },
    {
      name: "Muscat",
      image: require(`../../assets/Images/scenes/s4.jpeg`),
      cost: "$80.00"
    },
  ]

  const _renderItem = ({item, index}) => {
    return (
      <View style={{
          borderRadius: 20,
          overflow: 'hidden', 
          position: 'relative', 
          marginLeft: 24, 
          backgroundColor: 'blue',
          borderColor: "white",
          borderWidth: 1.5,
          maxHeight: 130
        }}>
        <Image source={item.image} style={{
          height: "100%", 
          width: "100%",
          alignSelf: 'center',
          aspectRatio: 1          
        }}></Image>
    </View>
    );
  }

  const _changeBackground = function (index) {
    console.log("changeBackground", index)
    let newImage = items[index].image;
    setcurrentImg(newImage)
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-evenly', backgroundColor: "#eee", flexDirection: "column" }}>
      <View style={{
        flex: 0.7,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        <Image source={currentImg} style={{
          height: "100%", 
          width: "100%",
          alignSelf: 'center',
          borderRadius: 30,
          position: "absolute",
          left: 10,
          top: 10
        }}></Image>
        <View  style={{
          flex: 0.1,
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={require(`../../assets/Images/previous.png`)} style={{
            height: 40,
            width: 40,
            tintColor: "white"
          }}></Image>
          </TouchableOpacity>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            zIndex: 1,
            // tintColor: "white"
          }}>Trip Details</Text>
          <Image source={require(`../../assets/Images/bookmark.png`)} style={{
            height: 40,
            width: 40,
            tintColor: "white"
          }}></Image>
        </View>
        <View style={{
              flex: 0.4,
              paddingBottom: 10,
              maxHeight: Dimensions.get('screen').width / 3 - 20,
              alignSelf: 'center'
            }}>
          <Carousel 
            data={items}
            renderItem={_renderItem}
            sliderWidth={Dimensions.get('screen').width - 80}
            itemWidth={Dimensions.get('screen').width / 3 - 10}
            activeSlideAlignment={'center'}
            onSnapToItem={_changeBackground}
            loop={true}>
          </Carousel>
        </View>        
      </View>  
      <View style={{
        flex: 0.5,
        flexDirection: "column",
        display: "flex",
        justifyContent: 'space-between',
        paddingBottom: 16
      }}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          flex: 0.3,
          justifyContent: "space-between",
          alignItems: 'center',
          paddingHorizontal: 20
          // flexWrap: 'wrap'
        }}>
          <View style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "space-between",
              alignItems: "flex-start",
              // backgroundColor: 'blue'
            }}>
              <View style={{ paddingLeft: 4, paddingRight: 4, backgroundColor: "white", borderRadius: 10, maxHeight: 28, marginBottom: 10}}>
                <Text style={{ padding: 4, color: "#f4511e", fontWeight: "600"}}>Turkey</Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: "600", color: '#333'}}>Cappodocia</Text>
              </View>  
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: "600", color: '#333'}}>$50.00</Text>
          </View>
        </View>
        <View style={{
                flex: 0.2,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "flex-start",
                alignItems: 'center'
              }}>
                <Image style={{width: 25, height: 25, tintColor: "#f4511e", marginLeft: 15, marginRight: 5 }} source={require('../../assets/Images/star.png')}></Image>
                <Text style={{color: 'grey'}}>5.0</Text>
                <Image style={{width: 25, height: 25, tintColor: "#f4511e", marginLeft: 15, marginRight: 5 }} source={require('../../assets/Images/time.png')}></Image>
                <Text style={{color: 'grey'}}>30 mins</Text>
                <Image style={{width: 25, height: 25, tintColor: "#f4511e", marginLeft: 15, marginRight: 5}} source={require('../../assets/Images/pin.png')}></Image>
                <Text style={{color: 'grey'}}>20 km</Text>
        </View>
        <Text  style={{
          display: "flex",
          flexDirection: "row",
          flex: 0.5,
          paddingHorizontal: 20,
          color: "grey"
          // flexWrap: 'wrap'
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        <TouchableOpacity style={{
          flex: 0.2, 
          backgroundColor: "#f4511e", 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "center", 
          alignItems: "center",
          borderRadius: 50,
          maxHeight: 50,
          minHeight: 30,
          marginHorizontal: 50
        }} onPress={()=>{}}>
            <Text style={{fontWeight: '600', color: "white" }}>Book Now</Text><Image style={{width: 25, height: 25, tintColor: "white", marginLeft: 5 }} source={require('../../assets/Images/next.png')}></Image>
        </TouchableOpacity>
      </View>   
     
    </SafeAreaView>
  );
}
