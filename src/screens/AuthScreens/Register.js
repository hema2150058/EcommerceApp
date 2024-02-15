import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';

const Registration = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Text>registration screen</Text>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
