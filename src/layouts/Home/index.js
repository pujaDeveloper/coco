import * as React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Dimensions, TouchableOpacity } from 'react-native';
// import { BlurView } from '@react-native-community/blur'
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { Message } from '../../utils/message';
import color from '../../utils/color';


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
    let STYLE = styles.carousel;
    return (
      <View style={[STYLE.item.self, {}]}>
        <Image source={item.image} style={[STYLE.item.bgImage.self, {}]}></Image>
        <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate("HomeDetails")}       
          style={[STYLE.item.details.self, {}]}>
          <View 
            // blurRadius={10}
            // reducedTransparencyFallbackColor={'white'}
            // blurType={"xlight"}
            // ReduceTransparency={true}
            // overlayColor={'rgb(255, 255, 255)'}
            style={[STYLE.item.details.bView.self, {}]}>
            <View style={[STYLE.item.details.bView.v1.self, {}]}>
              <View style={[STYLE.item.details.bView.v1.v1.self, {}]}>
                <Text style={[STYLE.item.details.bView.v1.v1.t1.self, {}]}>Turkey</Text>
              </View>
              <View style={[STYLE.item.details.bView.v1.v2.self,{}]}>
                <Text style={[STYLE.item.details.bView.v1.v2.t1.self, {}]}>{item.name}</Text>
                <Text style={[STYLE.item.details.bView.v1.v2.t2.self, {}]}>{item.cost}</Text>
              </View>
            </View>
            <View  style={[STYLE.item.details.bView.v2.self, {}]} on>
              <Image style={[STYLE.item.details.bView.v2.image.self, {}]} source={require('../../assets/Images/cart.png')}></Image>
            </View>
          </View>
        </TouchableOpacity>
    </View>
    );
  }
  let STYLE = styles.mView;
  console.log(STYLE.v1.self);
  return (
    <View style={[STYLE.self, {}]}>
      <Text style={[STYLE.t1.self, {color: color.BLACK}]}>Discover{"\n"}A New World </Text>
      <View style={[STYLE.v1.self, {}]}>
        <View style={[STYLE.v1.v1.self, {}]}>
          <Image style={[STYLE.v1.v1.image.self, {}]} source={require('../../assets/Images/search.png')}></Image>
          <TextInput 
            placeholder={Message.search_place_holder}
            placeholderTextColor={color.PRIMARY}
            style={[STYLE.v1.v1.ti.self, {}]} />
        </View>        
        <TouchableHighlight style={[STYLE.v1.th1.self, {}]} onPress={()=>{}}>
            <Image style={[STYLE.v1.th1.image.self, {}]} source={require('../../assets/Images/settings.png')}></Image>
        </TouchableHighlight>
      </View>
      <View style={[STYLE.v2.self]}>
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
