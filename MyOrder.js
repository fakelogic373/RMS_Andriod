import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

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
        data: [],
        num: 2
    }





    async componentWillMount() {

        return await fetch('http://192.168.56.1:45455/api/User?query=orderitems')
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

    handleReload = async (val) => {
        if(val){
            return await fetch('http://192.168.56.1:45455/api/User?query=orderitems')
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
    }





    render() {

        const { params } = this.props.navigation.state;
        const isReload = params ? params.isReload : null;
        const otherParam = params ? params.otherParam : null;

        this.handleReload(isReload)

        

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> My current order</Text>
                <Text> number : {this.state.num}</Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text> {item.Meal.Name} </Text>
                            <Text> {item.Quantity} </Text>
                            <Text> {item.Status} </Text>

                        </View>

                    }
                />

                <Button onPress={() => this.props.navigation.navigate("Orders")} title="Checkout " color="red" />
                <Button onPress={() => this.handleReload()} title="reload " color="red" />
                {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Driver" color="red" />  */}
            </View>
        );
    }
}