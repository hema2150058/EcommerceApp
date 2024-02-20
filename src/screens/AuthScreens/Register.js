import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../../constants/Colors';

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
 
  // Validation states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [dobError, setDobError] = useState('');
 
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleRegistration = () => {
    // Validate fields
    let isValid = true;
 
    // Validate email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
 
    // Validate password
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      setPasswordError('Password must contain at least 1 lowercase, 1 uppercase, 1 special character, and 1 digit');
      isValid = false;
    } else {
      setPasswordError('');
    }
 
    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
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
 
    // Perform registration logic if all fields are valid
    if (isValid) {
      // Perform registration logic
      console.log('Registration Successful');
      alert("Registration success!!!")
    }
  };
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };
 
  const hideDatePickerModal = () => {
    setShowDatePicker(false);
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
    <View style={styles.container}>
      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      />
 
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, { borderColor: emailError ? 'red' : 'grey' }]}
        value={email}
        onChangeText={setEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
 
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[styles.input, { borderColor: passwordError ? 'red' : 'grey' }]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
 
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={[styles.input, { borderColor: confirmPasswordError ? 'red' : 'grey' }]}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
 
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
 
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
      />
 
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <View style={{marginTop: 10}}>
      <Button title="Register" color={colors.themeColor} onPress={handleRegistration} />
      </View>
      </View>

    </TouchableWithoutFeedback>
  );
};
 
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  },
  datePickerContainer: {
    marginTop: 5,
  },
});

export default Registration;

