import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SettingsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});