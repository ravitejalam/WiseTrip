import React from "react";
import {PermissionsAndroid, StyleSheet, View,} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";

export default class HomeMap extends React.Component {
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
                latitudeDelta: 0.007,
                longitudeDelta: 0.004,
            }
            this.setState({region: coords})
        })
    }

    render() {
        return (
            <View style={styles.MapContainer}>
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
                    showsUserLocation={true}
                    // showsMyLocationButton={true}
                    showsCompass={true}
                    initialRegion={this.state.region}
                    region={this.state.region}
                >
                </MapView>
            </View>
        )
    }
}
