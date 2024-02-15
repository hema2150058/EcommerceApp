import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';

const ForgotPassword = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Text>??</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
