import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#E67E22'
    },
    headerTintColor: '#fff',
    headerTintStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#E67E22" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}
    />
  </HomeStack.Navigator>
)

const MapStackScreen = ({ navigation }) => (
  <MapStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#E67E22'
    },
    headerTintColor: '#fff',
    headerTintStyle: {
      fontWeight: 'bold'
    }
  }}>
    <MapStack.Screen name="Map" component={MapScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#E67E22" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}
    />
  </MapStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Map" component={MapStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}