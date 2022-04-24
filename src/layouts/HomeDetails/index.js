import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import styles from "./styles";
import { Message } from '../../utils/message';


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
    let STYLE = styles.carousel;
    return (
      <View style={[STYLE.v1.self, {}]}>
        <Image source={item.image} style={[STYLE.v1.image.self]}></Image>
    </View>
    );
  }

  const _changeBackground = function (index) {
    console.log("changeBackground", index)
    let newImage = items[index].image;
    setcurrentImg(newImage)
  }
  let STYLE = styles.mView;
  return (
    <SafeAreaView style={[STYLE.self, {}]}>
      <View style={[STYLE.v1.self, {}]}>
        <Image source={currentImg} style={[STYLE.v1.image.self]}></Image>
        <View  style={[STYLE.v1.v1.self, {}]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={require(`../../assets/Images/previous.png`)} style={[STYLE.v1.v1.image1.self]}></Image>
          </TouchableOpacity>
          <Text style={[STYLE.v1.v1.t1.self, {}]}>Trip Details</Text>
          <Image source={require(`../../assets/Images/bookmark.png`)} style={[STYLE.v1.v1.image2.self]}></Image>
        </View>
        <View style={[STYLE.v1.v2.self, {}]}>
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
      <View style={[STYLE.v2.self, {}]}>
        <View style={[STYLE.v2.v1.self, {}]}>
          <View style={[STYLE.v2.v1.v1.self, {}]}>
              <View style={[STYLE.v2.v1.v1.v1.self, {}]}>
                <Text style={[STYLE.v2.v1.v1.v1.t1.self, {}]}>Turkey</Text>
              </View>
              <View>
                <Text style={[STYLE.v2.v1.v1.v2.t1.self, {}]}>Cappodocia</Text>
              </View>  
          </View>
          <View>
            <Text style={[STYLE.v2.v1.v2.t1.self]}>$50.00</Text>
          </View>
        </View>
        <View style={[STYLE.v2.v2.self, {}]}>
                <Image style={[STYLE.v2.v2.image.self, {}]} source={require('../../assets/Images/star.png')}></Image>
                <Text style={[STYLE.v2.v2.t1.self, {}]}>5.0</Text>
                <Image style={[STYLE.v2.v2.image.self, {}]} source={require('../../assets/Images/time.png')}></Image>
                <Text style={[STYLE.v2.v2.t1.self, {}]}>30 mins</Text>
                <Image style={[STYLE.v2.v2.image.self, {}]} source={require('../../assets/Images/pin.png')}></Image>
                <Text style={[STYLE.v2.v2.t1.self, {}]}>20 km</Text>
        </View>
        <Text  style={[STYLE.v2.t1.self, {}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        <TouchableOpacity style={[STYLE.v2.to1.self, {}]} onPress={()=>{}}>
            <Text style={[STYLE.v2.to1.t1.self, {}]}>{Message.book_now}</Text>
            <Image style={[STYLE.v2.to1.image.self, {}]} source={require('../../assets/Images/next.png')}></Image>
        </TouchableOpacity>
      </View>   
     
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  StatusBar.setHidden(true, 'none');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}