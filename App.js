import 'react-native-gesture-handler';
import { StatusBar, StyleSheet,View, Text } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNav';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <View>
    //   <Text>Hello app</Text>
    // </View>
  );
}

export default App;
