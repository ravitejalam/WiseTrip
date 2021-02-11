import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {NavigationContainer} from "@react-navigation/native";

const RootStack = createStackNavigator();

const RootStackScreen = (props) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;
