import {React} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import Registration from '../screens/AuthScreens/Register';
//import {COLORS, ROUTES} from '../constants';
import MyDrawer from './DrawerNav';
import Login from '../screens/AuthScreens/Login';
import MyTabs from './BottomTabNav';
import {colors} from '../constants/Colors.js';

//import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"Login"}>
      <Stack.Screen name={"Login"} component={Login} options={{headerShown: false}}/>
      <Stack.Screen name={"Register"} component={Registration} 
        options={({route}) => ({
          headerTintColor: 'white',
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.themeColor,
          }})} />
      <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} 
        options={({route}) => ({
          headerTintColor: 'white',
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.themeColor,
          },
          //title: route.params.userId,
        })}/>
      {/* <Stack.Screen name={ROUTES.HOME}  component={BottomTabNavigator} options={{headerShown:true,title:"Login"}}/> */}
      <Stack.Screen
        name={'HomeScreen'}
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;

{/* <Stack.Screen
  name={ROUTES.HOME}
  component={DrawerNavigator}
  options={{headerShown: false}}
/> */}
