import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from "./styles";
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import {Avatar} from "react-native-paper";

const ProfileScreen = (props) => {
    const user = auth().currentUser;
    const [userDetails, setUserDetails] = useState({});
    firestore().collection('users').doc(user.uid).get().then(doc => {
        setUserDetails(doc.data());
    });

    const firebaseSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Ionicons size={32} name='menu' onPress={() => props.navigation.openDrawer()}/>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View>
                <View style={styles.logoBox}>
                    <Avatar.Image
                        style={styles.logoImage}
                        source={{
                            uri: user.photoURL ? user.photoURL : 'https://i.stack.imgur.com/34AD2.jpg'
                        }}
                        size={200}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>{user.displayName}</Text>
                    <Text>ID: {user.uid}</Text>
                </View>
                <View style={styles.contentsBox}>
                    <Text style={styles.contentsHeader}>Information</Text>
                    <View style={styles.contentsList}>
                        <TouchableOpacity style={styles.contentSpace}>
                            <Ionicons name='call-outline' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text
                                    style={styles.contentsDesc}>{user.phoneNumber ? user.phoneNumber : "not defined"}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentSpace}>
                            <Ionicons name='mail-outline' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentsDesc}>{user.email ? user.email : "not defined"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.SignOut} onPress={firebaseSignOut}>
                    <Text style={styles.SignOutText}>Sign Out</Text>
                    <Icon name="exit-outline" size={21}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;
