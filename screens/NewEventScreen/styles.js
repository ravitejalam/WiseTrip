import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    newEventContainer: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    headerBar: {
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    bottom: {
        marginBottom: 36,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#000',
        // position: 'absolute',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 20,
    },
    destinationTextInput: {
        padding: 10,
        borderColor: '#eee',
        borderWidth: 1,
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
    },
    buttonBox: {
        flex: 1,
        justifyContent: 'flex-end',
    }
});
export default styles;
