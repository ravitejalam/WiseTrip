import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import logo from "./../../assets/logo.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AboutScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Ionicons size={32} name='menu' onPress={() => props.navigation.openDrawer()}/>
                <Text style={styles.headerText}>About</Text>
            </View>
            <View>
                <View style={styles.logoBox}>
                    <Image style={styles.logoImage} source={logo}/>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>WiseTrip</Text>
                    <Text>alpha</Text>
                </View>
                <View style={styles.contentsBox}>
                    <Text style={styles.contentsHeader}>Information</Text>
                    <View style={styles.contentsList}>
                        <TouchableOpacity style={styles.contentSpace}>
                            <Ionicons name='md-information-circle-outline' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentsDesc}>
                                    Wanna travel with your gang. Travel wiser with WiseTrip.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.contentsBox, {height: '45%'}]}>
                    <Text style={styles.contentsHeader}>Developer</Text>
                    <View style={styles.contentsList}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://github.com/RavitejaLam/WiseTrip')
                        }} style={styles.contentSpace}>
                            <Ionicons name='logo-github' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentName}>
                                    GitHub
                                </Text>
                                <Text style={styles.contentsDesc}>
                                    Spoiler alert nothing fancy!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://www.instagram.com/raviteja.lam')
                        }} style={styles.contentSpace}>
                            <Ionicons name='logo-instagram' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentName}>
                                    Instagram
                                </Text>
                                <Text style={styles.contentsDesc}>
                                    Spoiler alert nothing fancy!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://github.com/RavitejaLam/WiseTrip/pulls')
                        }} style={styles.contentSpace}>
                            <MaterialIcons name='support' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentName}>
                                    Support
                                </Text>
                                <Text style={styles.contentsDesc}>
                                    Spoiler alert nothing fancy!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://github.com/RavitejaLam/WiseTrip/issues')
                        }} style={styles.contentSpace}>
                            <Ionicons name='bug-outline' size={30}/>
                            <View style={styles.contentDetails}>
                                <Text style={styles.contentName}>
                                    Bug
                                </Text>
                                <Text style={styles.contentsDesc}>
                                    Spoiler alert nothing fancy!
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AboutScreen;

