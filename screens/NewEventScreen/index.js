import React, {useState} from "react";
import {SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


const NewEventScreen = (props) => {
    const [meetUpPlace, setMeetUpPlace] = useState('');
    const [destinationPlace, setDestinationPlace] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView style={styles.newEventContainer}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <View style={styles.headerBar}>
                <Ionicons size={32} name='menu' onPress={() => props.navigation.openDrawer()}/>
                <Text style={styles.headerText}>New Event</Text>
            </View>
            <TextInput style={styles.destinationTextInput} placeholder="Meet Up"/>
            <TextInput style={styles.destinationTextInput} placeholder="Destination"/>
            {/*<GooglePlacesAutocomplete*/}
            {/*    placeholder='Meet Up Place?'*/}
            {/*    onPress={(data, details = null) => {*/}
            {/*        setMeetUpPlace({data,details});*/}
            {/*    }}*/}
            {/*    styles={{textInput: styles.destinationTextInput}}*/}
            {/*    query={{*/}
            {/*        key: 'API_KEY',*/}
            {/*        language: 'en',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<GooglePlacesAutocomplete*/}
            {/*    placeholder='Destination?'*/}
            {/*    onPress={(data, details = null) => {*/}
            {/*        console.log("onPress")*/}
            {/*        setDestinationPlace({data,details});*/}
            {/*    }}*/}
            {/*    styles={{textInput: styles.destinationTextInput}}*/}
            {/*    query={{*/}
            {/*        key: 'API_KEY',*/}
            {/*        language: 'en',*/}
            {/*    }}*/}
            {/*/>*/}
            <TouchableOpacity style={styles.showDateTimePickerContainer} onPress={showDatepicker}>
                <Text style={styles.PlaceholderText}>{date.toDateString()}</Text>
                <MaterialIcons size={25} color={'#8e8a8a'} name={"date-range"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.showDateTimePickerContainer} onPress={showTimepicker}>
                <Text style={styles.PlaceholderText}>{date.toTimeString()}</Text>
                <MaterialIcons size={25} color={'#8e8a8a'} name={"access-time"}/>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <TextInput style={styles.descriptionTextInput} placeholder="Description"/>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.bottom} onPress={() => {console.log("Create Event Button clicked")}}>
                    <Text style={{color:'#fff',alignContent:'center',padding:10,fontWeight:'bold',fontSize:20}}>Create</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NewEventScreen;