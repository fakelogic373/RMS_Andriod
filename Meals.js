import React from 'react';
import { Button, View, Text, FlatList, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'

export default class Meals extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Meals',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        meals: []
    }

    db = new DB('http://192.168.56.1:45457/api/Meals')
    buy = new DB('http://192.168.56.1:45457/api/User')

    componentDidMount() {
        this.find()
    }

    find = (parameters) => {
        this.db.find(
            (data) => this.setState({ meals: data }),
            parameters
        )
    }


    Quary = (parameters) => {
        this.buy.find(
            (data) => this.setState({}),
            parameters
        )
    }




    handleBuy = (val) => {
        console.log("im buying: " + val)
        this.Quary({
            query: "buy",
            id: val
        })
        this.props.navigation.navigate("MyOrders",{isReload: true, });
    }

    handleLogout = () =>{
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('userName')
        this.props.navigation.goBack()
    }

    






    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => this.handleLogout()} title="logout " color="red" />
                <Text> Meals </Text>
                <FlatList
                    data={this.state.meals}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.Name} </Text>
                            <Text> {item.Price} </Text>
                            <Text> {item.Category.Name} </Text>
                            <Button onPress={() => this.handleBuy(item.MealId)} title="Buy " color="red" />
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