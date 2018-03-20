import React from 'react';
import DB from './DB'
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export class CookerOrdersPaid extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'CookerOrders',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        orders: []
    }

    db = new DB('http://192.168.56.1:45455/api/Orders')

    componentDidMount() {
        this.find({ query: "getPaid" })
    }

    Quary = (parameters) => {
        this.db.find(
            (data) => this.setState({}),
            parameters
        )
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }



    handleCooking = (val) => {
        console.log("val = "  + val)
        this.find({
            query: "setCooking",
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

                            <Button onPress={() => this.handleCooking(item.OrderId)} title="Start Cooking " color="red" />
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

export class CookerOrdersInprogress extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'CookerOrders',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        orders: []
    }

    db = new DB('http://192.168.56.1:45455/api/Orders')

    componentDidMount() {
        this.find({ query: "getCooking" })
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    handleDone = (val) => {
        console.log("val = "  + val)
        this.find({
            query: "setDone",
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

                            <Button onPress={() => this.handleDone(item.OrderId)} title="Done Cooking " color="red" />
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

export class CookerOrdersDone extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'CookerOrders',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        orders: []
    }

    db = new DB('http://192.168.56.1:45455/api/Orders')

    componentDidMount() {
        this.find({ query: "getDone" })
    }

    find = async (parameters) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
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