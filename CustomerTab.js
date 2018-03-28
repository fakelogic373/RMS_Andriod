import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom, Header, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import Meals from './Meals'
import MyOrders from './MyOrder'


export default TabNavigator(
  {
    Meals: { screen: Meals },
    MyOrders: { screen: MyOrders },
    
  },
  {

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
      },

    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'lightblue',
        
      },
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {
        fontSize:24,
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);