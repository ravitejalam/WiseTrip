import React from "react";
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
        height: '75%',
        // flex: 1,
        resizeMode: 'contain'
    },
    logoBox: {
        height: '28%',
        alignContent: 'center',
        alignItems: 'center',

    },
    contentsBox: {
        padding: 15,
        margin: 15,
        backgroundColor: "#eee",
        borderRadius: 10,
        height: '15%'
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
        // borderBottomWidth:1,
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
    }


});

export default styles;
