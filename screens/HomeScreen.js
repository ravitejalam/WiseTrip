import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
});

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>You are in Home Screen</Text>
            <Button
                title="Go to Map Section"
                onPress={() => navigation.push("Map")}
            />
        </View>
    )
};

export default HomeScreen;
