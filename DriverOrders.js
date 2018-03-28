import React from 'react';
import DB from './DB'
import { Button, View, Text, FlatList, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';


export default class DriverOrders extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Driver orders',
            headerRight: (
                <Image
                    source={require('./images/Headers/delivery.png')}
                    style={{ width: 50, height: 50 }}
                />
            ),
        };
    };

    state = {
        orders: []
    }

    db = new DB('http://192.168.56.1:45457/api/Orders')

    componentDidMount() {
        this.find({ query: "getDone" })
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    handleDeliverd= (val) => {
        console.log("val = "  + val)
        this.find({
            query: "setDeliverd",
            id: val
        })
    }





    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Incoming orders </Text>
                <FlatList
                    data={this.state.orders}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.OrderId} </Text>
                            <Text> {item.Customer.Name} </Text>
                            <Text> {item.OrderType} </Text>
                            <Text> {item.OrderDate} </Text>
                            <Text> {item.Status} </Text>

                            

                            <Button onPress={() => this.handleDeliverd(item.OrderId)} title="Set Deliverd " color="red" />
                            <Button onPress={() => console.log("hola")} title="View map" color="red" />
                        </View>
                    }
                />
                {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Driver" color="red" />  */}
            </View>
        );
    }
}