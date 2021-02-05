import React, {useState} from "react";
import {SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const NewEventScreen = (props) => {
    const [destinationText, setDestinationTest] = useState('');
    const [meetUpPlace, setMeetUpPlace] = useState('');
    const [destinationPlace, setDestinationPlace] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
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
            <Text style={styles.headerText}>New Event</Text>
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
                <Text style={styles.PlaceholderText}>Set Date</Text>
                <MaterialIcons size={25} color={'#8e8a8a'} name={"date-range"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.showDateTimePickerContainer} onPress={showTimepicker}>
                <Text style={styles.PlaceholderText}>Set Time</Text>
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
        </SafeAreaView>
    );
};

export default NewEventScreen;