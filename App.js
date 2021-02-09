import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from "./screens/Drawer";
import AboutScreen from "./screens/AboutScreen/aboutScreen";
import SettingsScreen from "./screens/SettingsScreen";

import RootStackScreen from "./screens/RootStackScreen"
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewEventScreen from "./screens/NewEventScreen";
import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, []);

    if (!user) {
        return (
            <NavigationContainer>
                <RootStackScreen/>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
                <Drawer.Screen name="EventsScreen" component={EventsScreen}/>
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
                <Drawer.Screen name="AboutScreen" component={AboutScreen}/>
                <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
                <Drawer.Screen name="NewEventScreen" component={NewEventScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}