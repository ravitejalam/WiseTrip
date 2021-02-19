import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBar: {
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoImage: {
        margin:20
    },
    logoBox: {
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    contentsBox: {
        padding: 15,
        margin: 15,
        backgroundColor: "#eee",
        borderRadius: 10,
    }, contentsHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 20,
    },
    contentSpace: {
        padding: 5,
        marginVertical: 10,
        borderColor: '#8b8b8b',
        borderRadius: 5,
        flexDirection: 'row',
    },
    contentDetails: {
        marginLeft: 15,
        flexDirection: 'column',
    },
    contentName: {
        fontSize: 20,
        fontWeight: '600',
    },
    contentsDesc: {
        fontSize: 16,
        color: '#575656',
    },
    contentsList: {
        padding: 10,
    },
    SignOut: {
        padding: 10,
        margin:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        alignContent: 'center'
    },
    SignOutText: {
        fontSize: 16,
        padding: 3,
    }
});

export default styles;
