import React, {Component} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';

import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class EventsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, day: 1, month: 'Sep'},
                {id: 2, day: 2, month: 'Jan'},
                {id: 3, day: 3, month: 'Aug'},
                {id: 4, day: 4, month: 'Dec'},
                {id: 5, day: 5, month: 'Jul'},
                {id: 6, day: 6, month: 'Oct'},
                {id: 7, day: 7, month: 'Sep'},
                {id: 8, day: 8, month: 'Jan'},
                {id: 9, day: 9, month: 'May'},
            ],
        };
    }

    eventClickListener = (viewId) => {
        Alert.alert("alert", "event clicked");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBar}>
                    <Ionicons size={32} name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                    <Text style={styles.headerText}>Events</Text>
                </View>
                <FlatList
                    enableEmptySections={true}
                    style={styles.eventList}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                                <View style={styles.eventBox}>
                                    <View style={styles.eventDate}>
                                        <Text style={styles.eventDay}>{item.day}</Text>
                                        <Text style={styles.eventMonth}>{item.month}</Text>
                                    </View>
                                    <View style={styles.eventContent}>
                                        <Text style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                        <Text style={styles.userName}>John Doe</Text>
                                        <Text style={styles.description}>Lorem ipsum dolor sit amet, elit
                                            consectetur</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}
