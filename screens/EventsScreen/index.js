import React, {Component} from 'react';
import {FlatList, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Toast from 'react-native-simple-toast';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export default class EventsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.setUserEvents();
    }

    setUserEvents() {
        const user = auth().currentUser;
        const userDocRef = firestore().collection('users').doc(user.uid);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        firestore().collection('events').where('members', 'array-contains',
            userDocRef).onSnapshot(querySnapshot => {
            this.setState({
                data: []
            });
            querySnapshot.forEach(doc => {
                const start_date = doc.data().start_date_time.toDate();
                const event = {
                    id: doc.id, ...doc.data(),
                    date: start_date.getDate(),
                    month: monthNames[start_date.getMonth()],
                    year: start_date.getFullYear(),
                    time: start_date.toLocaleTimeString()
                };
                console.debug(event);
                this.setState({
                    data: [...this.state.data, event]
                });
            })
        });
        console.log(this.state.data);
    }

    eventClickListener = (event) => {
        Toast.show("event clicked");
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"/>
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
                                        <Text style={styles.eventDay}>{item.date}</Text>
                                        <Text style={styles.eventMonth}>{item.month}</Text>
                                        <Text style={styles.eventYear}>{item.year}</Text>
                                    </View>
                                    <View style={styles.eventContent}>
                                        <Text style={styles.eventTime}>{item.time}</Text>
                                        <Text style={styles.eventName}>{item.event_name}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}
