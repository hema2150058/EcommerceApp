import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../../components/CustomTextInput';
// import Entypo from 'react-native-vector-icons';

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [confirmPasswordBlurred, setConfirmPasswordBlurred] = useState(false);

  // Validation states
  const [userNameError, setUserNameError] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [dobError, setDobError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);


  const handleUserNameBlur = () => {
    if (!userName.trim()) {
      setUserNameError('Username is required');
      isValid = false;
    } else {
      setUserNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }
    else {
      setEmailError('');
    }
  }

  const handlePasswordBlur = () => {
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      setPasswordError('Password must contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 digit blur');
      isValid = false;
    }
    else {
      setPasswordError('');
    }
  }

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }
    else {
      setConfirmPasswordError('');
    }
  };
  
  const handleEmailChange = (text) => {
    setEmail(text);
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(text)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(text)) {
      setPasswordError('Password must contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 digit');
      isValid = false;
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (password !== text) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
      setPasswordsMatch(false);
    } else {
      setConfirmPasswordError('');
      setPasswordsMatch(true);
    }
  };

  const handleRegistration = async () => {

    let isValid = true;

    //validate username
    handleUserNameBlur();

    //validate email
    handleEmailBlur();

    //validate password
    handlePasswordBlur();

    //validate confirm password
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm Password is required ');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Confirm Passwords do not match ');
      isValid = false;
    }
    else {
      setConfirmPasswordError('');
    }

    // Validate DOB
    const currentDate = new Date();
    if (dob.getTime() > currentDate.getTime()) {
      setDobError('DOB cannot be a future date');
      isValid = false;
    } else {
      setDobError('');
    }

    //validate Mobile no.
    if (mobileNumber.trim() && !/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError('Mobile number must be 10 digits');
      isValid = false;
    } else {
      setMobileNumberError('');
    }

    if (isValid) {
      // Perform registration logic if all fields are valid
      //if (!userNameError && !emailError && !passwordError && !confirmPasswordError && !dobError) {
      const user = {
        userName,
        email,
        dob,
        mobileNumber,
        address,
      };
      try {
        // Retrieve existing users from AsyncStorage
        const existingUsers = JSON.parse(await AsyncStorage.getItem('users')) || [];

        // Add the new user to the list
        existingUsers.push(user);

        // Save the updated users list back to AsyncStorage
        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));

        // Inform the user about successful registration
        alert('Registration Successful', 'Your details have been stored successfully.');
        console.log('Updated users: ' + JSON.stringify(existingUsers, null, 2));
        // Optional: Clear the form fields
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDob(new Date());
        setMobileNumber('');
        setAddress('');
        // ... (clear other fields as needed)
      } catch (error) {
        console.error('Error storing registration details:', error);
      }

      // console.log(isValid)
      // console.log('Registration Successful');
      // alert("Registration success!!!")
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };


  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };
  const onSubmitEditing = () => {
    console.log("check")
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={onSubmitEditing} >
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={[styles.input, { borderColor: userNameError ? 'red' : 'grey' }]}
            value={userName}
            onChangeText={setUserName}
            onBlur={handleUserNameBlur}
          />
          {userNameError ? <Text style={styles.error}>{userNameError}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, { borderColor: emailError ? 'red' : 'grey' }]}
            value={email}
            onChangeText={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, { borderColor: passwordError ? 'red' : 'grey' }]}
            value={password}
            onChangeText={handlePasswordChange}
            onBlur={handlePasswordBlur}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        </View>
        <CustomTextInput
          label='Confirm Password'
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          error={confirmPasswordError}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity onPress={showDatePickerModal}>
            <TextInput
              style={styles.input}
              value={dob.toDateString()}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              onChange={handleDateChange}
              maximumDate={new Date()}
              mode="date"
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={mobileNumber}
            maxLength={10}
            onChangeText={setMobileNumber}
            keyboardType="numeric"
          />
          {mobileNumberError ? <Text style={styles.error} >{mobileNumberError}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 10, paddingBottom: 50, paddingHorizontal: 90 }]}>
          <Button title="Register" color={colors.themeColor} onPress={handleRegistration} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    //backgroundColor: 'silver'

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderColor: 'grey'
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 0,
    marginBottom: 5,
    marginHorizontal: 10
  },
  datePickerContainer: {
    marginTop: 5,
  },
});

export default Registration;

