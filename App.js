import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import RootStackScreen from "./navigation/RootStackScreen"
import RootUserStackScreen from "./navigation/RootUserStackScreen";
import firestore from "@react-native-firebase/firestore";

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
        console.log("Guest Detected");
        return (
            <RootStackScreen/>
        );
    }
    const userDoc = firestore().collection('users').doc(user.uid);

    userDoc.get().then(documentSnapshot => {
        if (documentSnapshot.exists) {
            console.log("Good old user");
            console.log('User already exists data: ', documentSnapshot.data());
        } else {
            userDoc.set({
                name: user.displayName ? user.displayName : user.email.split('@')[0],
                latitude: 0.0,
                longitude: 0.0
            })
                .then(() => {
                    console.log('User Doc added!');
                    console.log('User data: ', documentSnapshot.data());
                });
        }
    });

    return (
        <RootUserStackScreen/>
    );
}