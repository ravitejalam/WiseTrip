import React from 'react';

import NewEventScreen from "../screens/NewEventScreen";
import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerContent} from "../screens/Drawer";
import EventsScreen from "../screens/EventsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen/aboutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const Drawer = createDrawerNavigator();

const user = auth().currentUser;
const userDoc = firestore().collection('users').doc(user.uid);

userDoc.get().then(documentSnapshot => {
    if (documentSnapshot.exists) {
        console.log('User already exists data: ', documentSnapshot.data());
    } else {
        userDoc.set({
            name: user.displayName ? user.displayName : user.email.split('@')[0],
            latitude: 0.0,
            longitude: 0.0
        })
        .then(() => {
            console.log('User Doc added!');
        });
    }
});

const RootUserStackScreen = (props) => (

    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} headerMode='none'
                          initialRouteName={"HomeScreen"}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
            <Drawer.Screen name="EventsScreen" component={EventsScreen}/>
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Drawer.Screen name="AboutScreen" component={AboutScreen}/>
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
            <Drawer.Screen name="NewEventScreen" component={NewEventScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>

);

export default RootUserStackScreen;
