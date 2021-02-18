import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#fff",
        flex: 1,
    },
    eventList: {
        marginTop: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        fontSize: 50,
        color: "#0099FF",
        fontWeight: "600",
    },
    headerBar: {
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    eventMonth: {
        fontSize: 20,
        color: "#0099FF",
        fontWeight: "900",
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    eventTime: {
        fontSize: 18,
        color: "#151515",
    },
    eventName: {
        fontSize: 20,
        color: "#151515",
        fontWeight: 'bold',
    },
    eventYear: {
        fontSize: 16,
        color: "#0099FF",
        fontWeight: "600",
    }
});

export default styles;
