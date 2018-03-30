import React from 'react';
import { View, FlatList, AsyncStorage, Alert, Image } from 'react-native';
import { List, ListItem, Left, Body, Text, Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'

export default class MyOrderHistory extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Your Orders History',
            headerRight: (
                <Image
                    source={require('./images/Headers/chef.png')}
                    style={{ width: 50, height: 50 }}
                />
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

    handleLogout = () => {
        AsyncStorage.getItem('token', (err, item) => console.log(item));
        AsyncStorage.getItem('userName', (err, item) => console.log(item));
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> My Order History </Text>
                <FlatList
                    data={this.state.orders}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        // <View style={{ flex: 1, flexDirection: 'row' }}>
                        //     <Text> {item.OrderId} </Text>
                        //     <Text> {item.Status} </Text>
                        //     <Text> {item.Customer.Name} </Text>
                        // </View>

                        <List>
                            <ListItem>
                                <Left>
                                     {item.OrderId}
                                </Left>
                                <Body>
                                    <Text>{item.Status}</Text>
                                    <Text note>{item.Customer.Name}</Text>
                                </Body>
                            </ListItem>
                        </List>
                    }
                />
                <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                    <Button rounded danger onPress={() => this.handleLogout()}>
                        <Text>logout</Text>
                    </Button>
                </View>

            </View>
        );
    }
}