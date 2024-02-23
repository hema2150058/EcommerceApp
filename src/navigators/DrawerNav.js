import * as React from 'react';

//import Home from "../screens/Home";
import Settings from "../screens/Settings";
import HelpAndSupport from "../screens/HelpAndSupport"

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import MyTabs from './BottomTabNav';
import MyProfile from '../screens/MyProfile';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from 'react-native';


const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 20
          , alignItems: 'center', backgroundColor: '#82174d', marginTop: -4
        }}>
          <View>
            <Text style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: '600', fontSize: 16, }}>IraKaira</Text>
            <Text style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: '600', fontSize: 16, }}>IraFashions@gmail.com</Text>
          </View>
          <Image source={{ uri: 'https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg' }}
            style={{ width: 60, height: 60, borderRadius: 30 }} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={{ height: 60, backgroundColor: '#82174d', alignItems: 'center', justifyContent: 'center' }}
        onPress={handleLogout} >
        <Text style={{
          color: 'white', fontFamily: 'sans-serif-condensed', fontWeight: '600', fontSize: 18,
        }} >Logout</Text>
      </TouchableOpacity>
    </View>
  );
}


function MyDrawer() {
  return (

    <Drawer.Navigator drawerContent={(props) => <CustomDrawer{...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#82174d', 
          //Set Header color
        },
        headerTintColor: '#fff',
         //Set Header text color
      }}>
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          drawerLabel: 'Home',
          
          title: 'Ira Fashions',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,
            marginLeft: -16,
            textDecorationLine: 'underline',
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={MyTabs}
      />
      <Drawer.Screen
        name="My Purchases"
        options={{
          drawerLabel: 'My Purchases',
          title: 'My Purchases',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="My Wishlist"
        options={{
          drawerLabel: 'My Wishlist',
          title: 'My Wishlist',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="My Profile"
        options={{
          drawerLabel: 'My Profile',
          title: 'My Profile',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={MyProfile}
      />
      {/* <Drawer.Screen
          name="Camera & Scan"
          options={{
            drawerLabel: 'Photo/QR',
            title: 'Photo/QR',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: '700',
              fontSize: 22,
              marginLeft: -16,
              fontFamily: 'sans-serif-condensed'
            },
          }}
          component={CameraAndScanStack}
        /> */}
      <Drawer.Screen
        name="My Cards"
        options={{
          drawerLabel: 'My Cards',
          title: 'My Cards',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="My Cart"
        options={{
          drawerLabel: 'My Cart',
          title: 'My Cart',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="Help & Support"
        options={{
          drawerLabel: 'Help & Support',
          title: 'Help & Support',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={HelpAndSupport}
      />
    </Drawer.Navigator>

  );

}
/* function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
} */

export default MyDrawer;