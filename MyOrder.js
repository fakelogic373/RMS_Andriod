import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'

export default class MyOrder extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'My current order',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        order: null,
        OrderItems: [],
        data: []
    }

    db = new DB('http://192.168.56.1:45457/api/Orders')
    dbUser = new DB('http://192.168.56.1:45457/api/User')

    componentDidMount() {
        this.findCurrentUser()
        this.findOrderItem()
        console.log(this.state.OrderItems)
    }



    findCurrentUser = async (parameters) => {
        await this.dbUser.find(
            (data) => this.setState({ order: data }),
            {
                query: "order"
            }
        )
    }

    Quary = (parameters) => {
        this.dbUser.find(
            (data) => this.setState({}),
            parameters
        )
    }


    findOrderItem = async (parameters) => {
        await this.dbUser.find(
            (data) => this.setState({ OrderItems: data }),
            {
                query: "orderitems"
            }
        )
    }

    handleCheckout = () => {
        console.log("im checking out ")
        this.Quary({
            query: "checkout"

        })

    }

    handleEmptyCart = () => {
        console.log("im emypying cart ")
        this.Quary({
            query: "emptycart"

        })

    }


    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> My current order</Text>
                {/* <Text> number : {this.state.num}</Text> */}
                <FlatList
                    data={this.state.OrderItems}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.Meal.Name} </Text>
                            <Text> {item.Quantity} </Text>
                            <Text> {item.Status} </Text>

                        </View>

                    }
                />

                <Button onPress={() => this.handleCheckout()} title="Checkout " color="red" />
                {/* <Button onPress={() => this.handleReload()} title="reload " color="red" /> */}
                {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Driver" color="red" />  */}
            </View>
        );
    }
}