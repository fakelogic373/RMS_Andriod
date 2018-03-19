import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
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
        data: []
    }

    buy = new DB('http://192.168.56.1:45455/api/User')


    // componentDidMount() {
    //     this.find()
    // }


    Quary = (parameters) => {
        this.buy.find(
            (data) => this.setState({}),
            parameters
        )
    }




    async componentWillMount() {
        return await fetch('http://192.168.56.1:45455/api/Meals')
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

    handleBuy = (val) => {
        console.log("im buying: " + val)
        this.Quary({
            query: "buy",
            id: val
        })
        this.props.navigation.navigate("MyOrders",{
            isReload: true,
          });


    }

    // handleBuy = (val) => {
    //     console.log("im buying: " + val)

    //     this.buy.buy(
    //         val,
    //         console.log("hola")
    //     )


    // }






    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Meals </Text>
                <FlatList
                    data={this.state.data}
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