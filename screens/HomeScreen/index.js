import React from 'react';
import {StatusBar, StyleSheet, View,} from 'react-native';
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const HomeScreen = ({navigation}) => {
    return (
        <View >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <HomeMap/>
            <HomeSearch/>
            {/*create event*/}
            {/*upcomment event*/}
        </View>
    )
};

export default HomeScreen;
