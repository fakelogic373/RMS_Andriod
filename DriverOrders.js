import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class DriverOrders extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'DriverOrders',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        data: []
    }




    async componentWillMount() {
        return await fetch('http://192.168.56.1:45455/api/Orders')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)

                this.setState({
                    data: responseJson
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }





    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Driver Orders </Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.OrderId} </Text>
                            <Text> {item.Customer.Name} </Text>
                            <Text> {item.Status} </Text>
                            <Button onPress={() => this.handleBuy(item.OrderId)} title="Look at map " color="red" />
                        </View>
                    }
                />
                {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" />  */}
                <Button onPress={() => this.props.navigation.navigate("DeliverlyMap")} title="DeliverlyMap" color="red" />
            </View>
        );
    }
}