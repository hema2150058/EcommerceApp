import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';

const Settings = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>!!</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
