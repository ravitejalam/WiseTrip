import React from 'react';
import {PermissionsAndroid, StyleSheet,} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// Geolocation.setRNConfiguration(config);
const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }
        this._getLocation();
    }

    _getLocation = async () => {
        Geolocation.getCurrentPosition((position) => {
            let coords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.012,
                longitudeDelta: 0.01
            }
            this.setState({region: coords})
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
                initialRegion={this.state.region}
                region={this.state.region}
            >
            </MapView>
        )
    }
}
