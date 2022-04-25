import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Intro } from './src/layouts/Intro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/layouts/Home';
import { HomeDetails } from './src/layouts/HomeDetails';
import database from '@react-native-firebase/database';
import { Message } from './src/utils/message';
import { Users } from './src/layouts/Users';
import color from './src/utils/color';

console.disableYellowBox = true

function DummyScreen(props) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming Soon</Text>
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
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitle: () => (
          <Text style={styles.appTitle}>Tourx</Text>
        ),
        headerLeft: () => {
          return <TouchableOpacity>
            <MaterialCommunityIcons style={styles.menuIcon} name="menu" color={'grey'} size={40} />
          </TouchableOpacity>
        },
        headerRight: () => {
          return <TouchableOpacity >
            <Image style={styles.headerRightimg}
              source={require('./src/assets/Images/avatars/me.png')} />
          </TouchableOpacity>
        }
      }} />
    </HomeStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name={Message.screen_users} component={Users}
      />
    </UserStack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

function BototmTab() {
  return (
    <Tab.Navigator shifting={false}
      inactiveColor="grey"
      barStyle={styles.tabBarNavigator}>

      <Tab.Screen name="HomeStack" component={HomeStackScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused, tintcolor }) => (
            <MaterialCommunityIcons style={styles.icon} name="home-circle" color={focused ? color.PRIMARY : 'grey'} size={40} />
          ),
        }}
      />
      <Tab.Screen name="UserStack" component={UserStackScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={styles.icon} name="compass" color={focused ? color.PRIMARY : 'grey'} size={40} />
        ),
      }} />
      <Tab.Screen name={Message.screen_dummy_1} component={DummyScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={styles.icon} name="bookmark" color={focused ? color.PRIMARY : 'grey'} size={40} />
        ),
      }} />
      <Tab.Screen name={Message.screen_dummy_2} component={DummyScreen} options={{
        tabBarLabel: false,
        tabBarIcon: ({ focused, tintcolor }) => (
          <MaterialCommunityIcons style={styles.icon} name="account-circle" color={focused ? color.PRIMARY : 'grey'} size={40} />
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
        <Stack.Screen name="Dashboard" component={BototmTab} options={{ headerShown: false }} />
        <Stack.Screen name={Message.screen_home_details} component={HomeDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabBarNavigator: {
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
  },
  menuIcon: {
    height: 40,
    width: 40
  },
  appTitle: {
    fontSize: 26, color: color.PRIMARY
  },
  icon: {
    height: 40,
    width: 40
  },
  headerRight: {
    width: 28, height: 28, alignItems: 'center', justifyContent: 'center'
  },
  headerRightimg: {
    width: 40, height: 40, borderRadius: 20
  },
  // headerLeft: {
  //   width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: 'grey', alignItems: 'center', justifyContent: 'center'
  // },
  headerLeftImg: {
    width: 30, height: 30, borderRadius: 15,
  }
});
