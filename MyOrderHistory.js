import React from 'react';
import { Button, View, Text, FlatList, AsyncStorage, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'

export default class MyOrderHistory extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'My current order',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        orders: [],
        user: null,
        MinPrice: '',
        MaxPrice: '',
        Name: '',
        CategoryName: '',
        Column: '',
        Order: '',
        ToggleId: false,
        ToggleName: false,
        TogglePrice: false,
        ToggleCategory: false
    }
    // small bug in the order
    db = new DB('http://192.168.56.1:45457/api/Orders')
    dbUser = new DB('http://192.168.56.1:45457/api/User')

    componentDidMount() {
        this.findCurrentUser()
        
        
        
    }

    find = (parameters) => {
        this.db.find(
            (data) => this.setState({ orders: data }),
            parameters
        )
    }

    Quary = (parameters) => {
        this.userDB.find(
            (data) => this.setState({}),
            parameters
        )
    }

    findCurrentUser = async (parameters) => {
        await this.dbUser.find(
            (data) => this.findOrder(data.CustomerId),
            {
                query: "customer"
            }
        )
        
    }

    findOrder = async (val) => {
        await this.db.find(
            (data) => this.setState({ orders: data }),
            {
                CustomerID: val

            }
        )
        
    }

    



    handleMinPrice = (event) => {
        this.setState({ MinPrice: event.target.value })
    }

    handleMaxPrice = (event) => {
        this.setState({ MaxPrice: event.target.value })
    }

    handleMealName = (event) => {
        this.setState({ Name: event.target.value })
    }

    handleCategoryText = (event) => {
        this.setState({ CategoryName: event.target.value })
    }

    handleColumn = (event) => {
        this.setState({ Column: event.target.value })
    }

    handleOrder = (event) => {
        this.setState({ Order: event.target.value })
    }

    handleShowAll = () => {
        this.find()
    }

    handleBetween = () => {
        this.find({
            MinPrice: this.state.MinPrice, MaxPrice: this.state.MaxPrice,
        })
    }

    handleFindBy = (CategoryId) => {
        this.find({ CategoryId: CategoryId })
    }

    handleSearchByName = () => {
        this.find({
            Name: this.state.Name
        })
    }



    handleOrderById = () => {
        if (this.state.ToggleId) {
            this.find({
                Column: "Id", Order: "ASC",
            })
            this.setState({ ToggleId: !this.state.ToggleId, Order: "ASC" })
        }
        else {
            this.find({
                Column: "Id", Order: "DSC",
            })
            this.setState({ ToggleId: !this.state.ToggleId, Order: "DESC" })
        }
    }

    handleOrderByName = () => {
        if (this.state.ToggleName) {
            this.find({
                Column: "Name", Order: "ASC",
            })
            this.setState({ ToggleName: !this.state.ToggleName, Order: "ASC" })
        }
        else {
            this.find({
                Column: "Name", Order: "DSC",
            })
            this.setState({ ToggleName: !this.state.ToggleName, Order: "DESC" })
        }
    }





    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> My Order History </Text>
                {/* <Text> number : {this.state.num}</Text> */}
                <FlatList
                    data={this.state.orders}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.OrderId} </Text>
                            <Text> {item.Status} </Text>
                            <Text> {item.Customer.Name} </Text>

                        </View>

                    }
                />

                <Button onPress={() => this.handleCheckout()} title="Checkout " color="red" />
                <Button onPress={() => this.handleLogout()} title="logout " color="red" />
                {/* <Button onPress={() => this.handleReload()} title="reload " color="red" /> */}
                {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Driver" color="red" />  */}
            </View>
        );
    }
}