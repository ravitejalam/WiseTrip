import React from "react";
import {View,Text} from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
const HomeSearch=(props) => {
    return(
        <View>
            <View style={styles.CreateEventBox}>
                <Text style={styles.CreateEventInputText}>Destination?</Text>
                <View style={styles.NewEventLogoContainer}>
                    <Entypo name={"plus"} size={20}/>
                    <Text>New</Text>
                </View>
            </View>
            <View style={styles.UpComingEventBox}>
                <View style={styles.UpComingEventIconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'}/>
                </View>
                <Text style={styles.UpComingEventText}>KFC, Central</Text>
            </View>
        </View>
    );
};


export default HomeSearch;
