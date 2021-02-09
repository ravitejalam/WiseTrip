import React from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {SocialIcon} from 'react-native-elements'
import styles from "./styles";

GoogleSignin.configure({
    webClientId: 'GOOGLE_SIGN_IN_WEB_CLIENT_ID',
});

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: false,
        isValidPassword: false,
    });

    const testInputChange = (val) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(val).toLowerCase())) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            })
        }
    }

    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleValidUser = (val) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(val).toLowerCase())) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    const firebaseSignIn = (val) => {
        if (data.isValidUser && data.isValidPassword) {
            auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    console.log('User signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    } else {
                        alert("Sign In Failed");
                    }
                    console.error(error);
                });
        } else {
            alert("Email or Password are not Valid");
        }
    }

    async function onGoogleButtonPress() {
        const {idToken} = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredential);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
                    <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize="none"
                               onChangeText={(val) => testInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}/>
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20}/>
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20}/>
                    <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false}
                               style={styles.textInput} autoCapitalize="none"
                               onChangeText={(val) => handlePasswordChange(val)}/>
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        <Feather name={data.secureTextEntry ? "eye-off" : "eye"} color="grey" size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                        <Text style={[styles.textSign, {color: '#fff'}]} onPress={firebaseSignIn}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                                      style={[styles.signIn, {borderColor: '#009387', borderWidth: 1, marginTop: 15}]}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
                    </TouchableOpacity>
                    <SocialIcon
                        title="Sign In With Google"
                        button

                        style={[styles.signIn, {marginTop: 15}]}
                        raised={true}
                        type='google'
                        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                    />
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;
