import React, {useState} from 'react';
import {View,} from 'react-native';
import {Avatar, Caption, Drawer, Title} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";

export function DrawerContent(props) {
    const firebaseSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    const user = auth().currentUser;
    const [username, setUsername] = useState();
    firestore().collection('users').doc(user.uid).get().then(doc => {
        setUsername(doc.data().name);
    });

    let profilePictureURL = user.photoURL ? user.photoURL : 'https://i.stack.imgur.com/34AD2.jpg';
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} onStartShouldSetResponder={() => {
                        props.navigation.navigate('ProfileScreen')
                    }}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: profilePictureURL
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>{username}</Title>
                                <Caption style={styles.caption}>Edit Profile</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('HomeScreen')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="ios-calendar"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Events"
                            onPress={() => {
                                props.navigation.navigate('EventsScreen')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {
                                props.navigation.navigate('SettingsScreen')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Ionicons
                                    name="information"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {
                                props.navigation.navigate('AboutScreen')
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="exit-outline" color={color} size={size}/>
                    )}
                    label="Sign Out"
                    onPress={firebaseSignOut}
                />
            </Drawer.Section>
        </View>
    );
}
