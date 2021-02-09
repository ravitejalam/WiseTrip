import React from 'react';
import {View,} from 'react-native';
import {Avatar, Caption, Drawer, Paragraph, Switch, Text, Title, TouchableRipple} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    const firebaseSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
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
                                    uri: 'https://pbs.twimg.com/profile_images/953321011679670272/BHIhYlyz_400x400.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Raviteja Lam</Title>
                                <Caption style={styles.caption}>@raviteja.lam</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
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
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {
                            [toggleTheme(), alert('Dark Theme is under development')]
                        }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
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
