import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    CreateEventBox: {
        backgroundColor: '#e3e3e3',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    CreateEventInputText: {
        fontSize: 20,
        fontWeight: "600",
        color: '#616161',
    },
    NewEventLogoContainer: {
        flexDirection: 'row',
        width: 70,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    UpComingEventBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: "#e3e3e3",
    },
    UpComingEventIconContainer: {
        backgroundColor: '#a39f9f',
        padding: 10,
        borderRadius: 25,
    },
    UpComingEventText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444444'
    },
    HomeSearchContainer: {
        borderTopColor: '#5a5a5a',
        borderTopWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});
export default styles;
