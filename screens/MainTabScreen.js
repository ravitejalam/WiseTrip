import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#E67E22',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={MapStackScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarColor: '#E67E22',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-navigate-circle" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

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
    <MapStack.Navigator>
        <MapStack.Screen name="Map" component={MapScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}
        />
    </MapStack.Navigator>
)

export default HomeScreen;
