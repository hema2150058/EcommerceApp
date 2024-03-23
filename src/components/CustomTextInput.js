import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const CustomTextInput = ({ label, value, onChangeText, onBlur, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:5, marginHorizontal:10 ,borderWidth: 1, borderColor: error ? 'red' : 'grey', borderRadius: 10 }}>
        <TextInput
          style={[{ flex: 1, padding: 10 }]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={label === 'Password' || label === 'Confirm Password'} // Assuming password fields
        />
        {value && (
          <Icon name={error ? 'times-circle' : 'check-circle'} size={25} color={error ? 'red' : 'green'} style={{ marginRight: 10 }} />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
 
export default CustomTextInput;

const styles = StyleSheet.create({

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
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10
  },
});