import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom, Header, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/Ionicons';
import firstTab from './firstTab'
import HomeScreen from './HomeScreen'
import Settings from './Setting'
import Settings2 from './Setting2'
import LogoImage from './logo'
import TabNav from './tabnav'
import Login from './login'
import CustomerTab from './CustomerTab'
import CookerOrders from './CookerOrders'
import DriverOrders from './DriverOrders'
import DeliverlyMap from './DeliveryMap'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    CustomerTab: {
      screen: CustomerTab,
    },
    CookerOrders: {
      screen: CookerOrders,
    },
    DriverOrders: {
      screen: DriverOrders,
    },
    DeliverlyMap: {
      screen: DeliverlyMap,
    },
    Orders: {
      screen: TabNav,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}