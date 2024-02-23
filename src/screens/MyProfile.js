import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';

const MyProfile = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>!!</Text>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});