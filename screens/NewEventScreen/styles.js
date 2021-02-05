import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    newEventContainer: {
        padding: 10,
        backgroundColor: '#fff',
        height: '100%',
        // flex:1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    destinationTextInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 10,
        borderRadius: 10,
        fontSize: 20,
    },
    descriptionTextInput: {
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 10,
        marginVertical: 10,
        textAlign: 'auto',
    },
    showDateTimePickerContainer: {
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PlaceholderText: {
        fontSize: 20,
        color: '#8e8a8a',
    }
});
export default styles;
