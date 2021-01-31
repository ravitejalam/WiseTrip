import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, Platform, Button, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
    isValidConfirmPassword: false
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
    }
    else {
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
    }
    else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      })
    }
  }

  const handleConfirmPasswordChange = (val) => {
    if (val.length >= 8 && data.password == val) {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: true
      })
    }
    else {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: false
      })
    }
  }

  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const updateConfirmSecureTextEntry = (val) => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry
    })
  }

  const firebaseSignUp = (val) => {
    if (data.isValidUser && data.isValidPassword) {
      auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          else {
            alert("Sign In Failed")
          }
          console.error(error);
        });
    }
    else {
      alert("Email or Password are InValid");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => testInputChange(val)} />
          {data.check_textInputChange ?
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
            : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handlePasswordChange(val)} />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather name={data.secureTextEntry ? "eye-off" : "eye"} color="grey" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput placeholder="ReEnter Your Password" secureTextEntry={data.confirmSecureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handleConfirmPasswordChange(val)} />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            <Feather name={data.confirmSecureTextEntry ? "eye-off" : "eye"} color="grey" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={[styles.textSign, { color: '#fff' }]} onPress={firebaseSignUp}>Sign Up</Text>
          </LinearGradient>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}>
            <Text style={[styles.textSign, { color: '#009387' }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
