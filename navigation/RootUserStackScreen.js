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

const Drawer = createDrawerNavigator();

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
