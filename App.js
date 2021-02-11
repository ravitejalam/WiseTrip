import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';

import 'react-native-gesture-handler';
import RootStackScreen from "./navigation/RootStackScreen"
import RootUserStackScreen from "./navigation/RootUserStackScreen";

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
            <RootStackScreen/>
        );
    }

    return (
        <RootUserStackScreen/>
    );
}