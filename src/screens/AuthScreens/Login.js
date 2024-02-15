import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ForgotPassword from './ForgotPassword';
import Registration from './Register';

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
        alert('Login successful!');
      //   navigation.reset({
      //     index: 0,
      //     routes: [{ name: 'Home' }],
      // }
      // );
      navigation.navigate('HomeScreen');
        
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else if (authenticationMethod === 'mpin') {
      // MPIN Authentication
      if (mpin === '123456') {
        alert('Login successful using MPIN!');
        navigation.navigate('HomeScreen');
      } else {
        alert('Invalid MPIN. Please try again.');
      }
    }
  };
 
  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.container}>
    <View style={styles.container}>
      <Text>Login</Text>
      {authenticationMethod === 'usernamePassword' && (
        <>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
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
          keyboardType="numeric"
          maxLength={6}
          value={mpin}
          onChangeText={(text) => setMpin(text)}
          style={styles.input}
        />
      )}
      <Button title="Login" onPress={handleLogin} />
      <Button
        title={`Switch to ${authenticationMethod === 'usernamePassword' ? 'MPIN' : 'Username/Password'}`}
        onPress={() =>
          setAuthenticationMethod((prevMethod) =>
            prevMethod === 'usernamePassword' ? 'mpin' : 'usernamePassword'
          )
        }
      />
      <TouchableOpacity
            onPress={() =>
              navigation.navigate("ForgotPassword", {
                userId: 'X0001',
              })}
            style={styles.forgotPassBtn}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
    </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
   </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
 
export default Login;