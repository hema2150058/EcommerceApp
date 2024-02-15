import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';

const HelpAndSupport = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Help & support</Text>
      <Text>!!</Text>
    </View>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
