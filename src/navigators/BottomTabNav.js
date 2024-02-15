import {React} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Feather, FontAwesome } from 'react-native-vector-icons';

import Home from '../screens/Home';
import MyProfile from '../screens/MyProfile';

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
        // initialRouteName="DashBoard"
        initialRouteName="Home"
        activeColor="#e91e63"
        inactiveColor='blue'
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        firstRoute="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={MyProfile}
          options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="dollar" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={MyProfile}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={MyProfile}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default MyTabs;