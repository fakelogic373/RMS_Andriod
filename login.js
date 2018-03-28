import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Login',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        data: []
    }

    







    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                 <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("CookerOrders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("DriverOrders")}  title="Driver" color="red" /> 
            </View>
        );
    }
}