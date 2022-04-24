import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Intro } from './src/layouts/Intro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/layouts/Home';
import { HomeDetails } from './src/layouts/HomeDetails';
const profile_img = require('./src/assets/Images/profile.png')
import database from '@react-native-firebase/database';



function SettingsScreen(props) {
 const getData= () => {
   console.log("Here");
   database()
   .ref('/DB/users/123')
   .set({
     name: 'test',
     age: 31,
   })
   .then(() => console.log('Data set.'));
 }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={() => {
        getData()
      }}>
      <Text>Settings!</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  StatusBar.setHidden(true, "none")
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{
        headerTitleAlign: 'center',
        headerShadowVisible:false,
        headerBackTitleVisible: false,
        headerTitle: () => (
          <Text style={{ fontSize: 21, color: '#f4511e' }}>Tourx</Text>
        ),
        headerLeft: () => {
          return <TouchableOpacity>
            <MaterialCommunityIcons style={{
              height: 28,
              width: 28
            }} name="menu" color={'grey'} size={28} />
          </TouchableOpacity>
        },
        headerRight: () => {
          return <TouchableOpacity >
            <Image style={styles.headerLeftImg}
              source={profile_img} />
          </TouchableOpacity>
        }
      }} />
      {/* <HomeStack.Screen name="HomeDetails" component={HomeDetails} options={{ headerShown: false }} /> */}
    </HomeStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={Intro} 
      // options={({ route }) => ({
      //   headerLeft: () => {
      //     return <TouchableOpacity style={{}}>
      //       <Image style={styles.headerLeftImg}
      //         source={profile_img} />
      //     </TouchableOpacity>

      //   }
      // })}
      />
      {/* <UserStack.Screen name="Intro" component={Intro} /> */}
    </UserStack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

function BototmTab() {
  return (
    <Tab.Navigator shifting={false}
      inactiveColor="grey"
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderTopColor: "transparent",

        elevation: 0,
        shadowColor: '#5bc4ff',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      }}>

      <Tab.Screen name="HomeStack" component={HomeStackScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused, tintcolor }) => (
            <MaterialCommunityIcons style={{
              height: 40,
              width: 40
            }} name="home-circle" color={focused ? '#f4511e' : 'grey'} size={40} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={{
            height: 40,
            width: 40
          }} name="compass" color={focused ? '#f4511e' : 'grey'} size={40} />
        ),
      }} />
      <Tab.Screen name="UserStack" component={UserStackScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={{
            height: 40,
            width: 40
          }} name="bookmark" color={focused ? '#f4511e' : 'grey'} size={40} />
        ),
      }} />
      <Tab.Screen name="Settings2" component={SettingsScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={{
            height: 40,
            width: 40
          }} name="account-circle" color={focused ? '#f4511e' : 'grey'} size={40} />
        ),
      }} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={BototmTab}  options={{ headerShown: false }} />
        <Stack.Screen name="HomeDetails" component={HomeDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerRight: {
    width: 28, height: 28, alignItems: 'center', justifyContent: 'center'
  },
  headerRightimg: {
    width: 22, height: 22,
  },
  headerLeft: {
    width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: 'grey', alignItems: 'center', justifyContent: 'center'
  },
  headerLeftImg: {
    width: 22, height: 22, borderRadius: 11,
  }
});
