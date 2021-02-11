import React from 'react';
import {SafeAreaView, StatusBar, View,} from 'react-native';
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const HomeScreen = (props) => {
    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <HomeMap/>
            <View style={styles.headerBar}>
                <Ionicons size={32} name='menu' onPress={() => props.navigation.openDrawer()}/>
            </View>
            <HomeSearch/>
        </View>
    )
};

export default HomeScreen;
