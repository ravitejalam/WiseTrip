import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    PermissionsAndroid,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Permissions, Location } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// Geolocation.setRNConfiguration(config);
const styles = StyleSheet.create({
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

let region = {
    // latitude: location.coords.latitude,
    // longitude: location.coords.longitude,
    latitude: 17.690,
    longitude: 83.169,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
}

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }

        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        Geolocation.watchPosition((position) => {
            let tmp = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.setState({ region: tmp })
        })

    }

    render() {
        return (
            <MapView
                onMapReady={() => {
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    ).then(granted => {
                        console.log(granted);
                    });
                }}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                followsUserLocation={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                toolbarEnabled={true}
                zoomEnabled={true}
                rotateEnabled={true}
                region={this.state.region}
            >
            </MapView>
        )
    }
}
