import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';
import EventsScreen from './EventsScreen';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const EventsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
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
            name="Events"
            component={EventsStackScreen}
            options={{
                tabBarLabel: 'Events',
                tabBarColor: '#27AE60',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-calendar" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694FAD',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={MapStackScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarColor: '#D02860',
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
    <MapStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#D02860'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MapStack.Screen name="Map" component={MapScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#D02860" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}
        />
    </MapStack.Navigator>
)

const EventsStackScreen = ({ navigation }) => (
    <EventsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#27AE60'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MapStack.Screen name="Events" component={EventsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#27AE60" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}
        />
    </EventsStack.Navigator>
)

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#694FAD'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MapStack.Screen name="Profile" component={ProfileScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#694FAD" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}
        />
    </ProfileStack.Navigator>
)

export default MainTabScreen;
