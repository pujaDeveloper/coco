import * as React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Dimensions, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import {scrollInterpolator, animatedStyles} from "./utils/animations"


export function Home(props) {

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
      <View style={{borderRadius: 20, overflow: 'hidden', position: 'relative', marginLeft: 24, backgroundColor: 'blue' }}>
        <Image source={item.image} style={{
          height: "100%", 
          width: "100%",
          alignSelf: 'center'
        }}></Image>
        <TouchableOpacity onPress={() => props.navigation.navigate("HomeDetails")}       
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40%",
            minHeight: 130,
            padding: 10,          
          }}>
          <BlurView 
            blurRadius={10}
            // reducedTransparencyFallbackColor={'white'}
            blurType={"xlight"}
            // ReduceTransparency={true}
            overlayColor={'rgb(255, 255, 255)'}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              // backgroundColor: "white",
              // opacity: 0.7,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "space-around",
              alignItems: "stretch"
            }}>
            <View style={{
              flex: 0.7,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "space-around",
              alignItems: "flex-start"
            }}>
              <View style={{ marginLeft: 12, paddingLeft: 4, paddingRight: 4, flex: 0.2, backgroundColor: "white", borderRadius: 10, maxHeight: 28}}>
                <Text style={{ padding: 4, color: "#f4511e", fontWeight: "600"}}>Turkey</Text>
              </View>
              <View style={{flex: 0.5, paddingLeft: 12}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>{item.name}</Text>
                <Text style={{fontSize: 16, fontWeight: "600"}}>{item.cost}</Text>
              </View>
            </View>
            <View  style={{
              flex: 0.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
            }} on>
              <Image style={{
                height: "70%", 
                width: undefined,
                aspectRatio: 1,             
                tintColor: "#333",
                flex: 0.2,
                zIndex: 1
              }} source={require('../../assets/Images/cart.png')}></Image>
            </View>
          </BlurView>
        </TouchableOpacity>
    </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-evenly', backgroundColor: "white", flexDirection: "column" }}>
      <Text style={{flex: 0.2, fontSize: 40, fontWeight: "600", paddingLeft: 24, maxHeight: 100 }}>Discover{"\n"}A New World </Text>
      <View style={{flex: 0.1, display: 'flex', flexDirection:'row', paddingLeft: 24, paddingRight: 24, justifyContent: 'space-between', alignItems: 'stretch', maxHeight: 50}}>
        <View style={{flex: 0.82, position: 'relative'}}>
          <Image style={{
            width: 25, 
            height: 25, 
            tintColor: "white",
            position: "absolute",
            left: 10,
            top: "25%",
            tintColor: "#f4511e",
            zIndex: 1
          }} source={require('../../assets/Images/search.png')}></Image>
          <TextInput 
            placeholder="Search Places"
            placeholderTextColor="#f4511e"
            style={{
              padding: 5,
              paddingLeft: 50,
              // opacity: 0.5,
              backgroundColor: "#fbe9e7",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              height: '100%',
              fontWeight: '600'
            }} />
        </View>        
        <TouchableHighlight style={{
          flex: 0.15, 
          backgroundColor: "#f4511e", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          borderRadius: 10,
          aspectRatio: 1,
          maxHeight: 50
        }} onPress={()=>{}}>
            <Image style={{width: 25, height: 25, tintColor: "white" }} source={require('../../assets/Images/settings.png')}></Image>
        </TouchableHighlight>
      </View>
      <View style={{flex: 0.5}}>
        <Carousel 
          data={items}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width - 80}
          activeSlideAlignment={'start'}
          inactiveSlideShift={20}
          >
        </Carousel>
      </View>
    </View>
  );
}
