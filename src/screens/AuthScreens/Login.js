import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome, SimpleLineIcons, FontAwesome5, MaterialCommunityIcons, EvilIcons } from 'react-native-vector-icons';

import ForgotPassword from './ForgotPassword';
import Registration from './Register';
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
//import { Image } from 'react-native-paper/lib/typescript/components/List/List';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mpin, setMpin] = useState('');
  const [authenticationMethod, setAuthenticationMethod] = useState('usernamePassword');

  const handleLogin = () => {
    if (authenticationMethod === 'usernamePassword') {
      // Username and Password Authentication
      if (username === 'demo' && password === 'password') {
        //aalert('Login successful!');
        //   navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Home' }],
        // }
        // );
        setUsername('');
        setPassword('');
        navigation.navigate('HomeScreen');

      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else if (authenticationMethod === 'mpin') {
      // MPIN Authentication
      if (mpin === '123456') {
        //alert('Login successful using MPIN!');
        setMpin('');
        navigation.navigate('HomeScreen');
      } else {
        alert('Invalid MPIN. Please try again.');
      }
    }
  };
  const onSubmitEditing = () => {
    console.log("check")
    Keyboard.dismiss();
  }
  return (

    <TouchableWithoutFeedback onPress={onSubmitEditing} >
    <View 
      style={[
        styles.container,
        { flexDirection: 'column', backgroundColor: '#82174d', },
      ]}>
      <View style={{ flex: 2, alignItems: 'center' }} >
        <Image source={require('../../../assets/images/shopping.jpg')} style={{ width: 200, height: 200, borderRadius: 200 / 2, marginTop: 30, }} />
      </View>
      <View style={{ flex: 3, }}>
        <View style={{ backgroundColor: 'white', padding: '3%', borderRadius: 15, margin: '4%', marginTop: '-5%' }}>
          <Text style={{ fontSize: 30, paddingHorizontal: '14%', color: '#82174d', paddingVertical: 25, paddingBottom: 45 }}>Welcome Explorer</Text>
          {authenticationMethod === 'usernamePassword' && (
            <>
              <TextInput
                placeholder="Username"
                placeholderTextColor='silver'
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor='silver'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
            </>
          )}
          {authenticationMethod === 'mpin' && (
            <TextInput
              placeholder="6-digit MPIN"
              placeholderTextColor='white'
              keyboardType="numeric"
              maxLength={6}
              value={mpin}
              secureTextEntry
              onChangeText={(text) => setMpin(text)}
              style={styles.input}
            />
          )}
          <View style={{ overflow: 'hidden', margin: 1, paddingHorizontal: 5 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ForgotPassword", {
                  userId: 'X0001',
                })}
              style={styles.forgotPassBtn}
              //style={ { backgroundColor: 'white', marginLeft: '60%', paddingVertical: '3%', borderRadius: 15 }}
              >
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ overflow: 'hidden', paddingHorizontal: 14, }}>
            <TouchableOpacity
              onPress={handleLogin}
              style={ { backgroundColor: '#82174d', marginHorizontal: '30%', paddingVertical: '3%', borderRadius: 15 }}>
              <Text style={ { textAlign: 'center', color: 'white', fontWeight: '500', fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10, }}>
            <TouchableOpacity
              onPress={() =>
                setAuthenticationMethod((prevMethod) =>
                  prevMethod === 'usernamePassword' ? 'mpin' : 'usernamePassword'
                )
              }
              style={ { backgroundColor: '#82174d', marginHorizontal: '15%', paddingVertical: '3%', borderRadius: 15 }}>
              <Text style={ { textAlign: 'center', color: 'white', fontWeight: '500', fontSize: 20 }}>
                {`Switch to ${authenticationMethod === 'usernamePassword' ? 'MPIN' : 'Username/Password'}`}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Text style={styles.footerText, { textAlign: 'center', marginTop:5,marginLeft: 50 }}> Don't have an account? </Text>
              <Pressable
                onPress={() => navigation.navigate('Register')} >
              <Text style={{ color: '#82174d', fontSize: 20, textAlign: 'left', }}> Sign Up</Text>
              </Pressable> 
            
          </View>
        </View>
      </View>
      <View style={{ flex: 1, }} >
        <Text style={{ paddingTop: 25, textAlign: 'center', fontSize: 20, color: 'white' }}>Sign In with</Text>
        {/******************** REGISTER BUTTON *********************/}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupBtn}>login options</Text>
        </TouchableOpacity> */}
        <View style={{ backgroundColor: 'white', marginTop: 10, marginHorizontal: 60, height: 60, paddingHorizontal: 10, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>

          <FontAwesome5 name="facebook" size={40} color="#82174d" style={{ paddingHorizontal: 5, paddingLeft: 33 }} />
          <SimpleLineIcons name="social-twitter" size={40} color="#82174d" style={{ paddingHorizontal: 5 }} />
          <FontAwesome name="google" size={40} color="#82174d" style={{ paddingHorizontal: 5 }} />
          <MaterialCommunityIcons name="instagram" size={40} color="#82174d" style={{ paddingHorizontal: 5 }} />

        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    //borderBottomWidth: 1,
    backgroundColor: '#82174d',
    color: 'white'
  },
  forgotPassBtn: {
    //alignItems: 'flex-end',
    marginLeft: '60%',
    paddingBottom: 15,

  },
  forgotPassText: {
    fontWeight: 'bold'
  }
});

export default Login;






// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     //justifyContent: 'center',
//     //alignItems: 'center',
//     //padding: 16,
//   },
//   // container: {
//   //   padding: 15,
//   //   width: '100%',
//   //   //position: 'relative',
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   // footer: {
//   //   position: 'absolute',
//   //   bottom: 20,
//   //   textAlign: 'center',
//   //   flexDirection: 'row',
//   // },
//   // footerText: {
//   //   color: 'gray',
//   //   fontWeight: 'bold',
//   // },
//   // signupBtn: {
//   //   color: 'blue',
//   //   fontWeight: 'bold',
//   // },
// });