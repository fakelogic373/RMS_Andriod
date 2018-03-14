import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';

export default class CookerOrders extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'CookerOrders',
            headerRight: (
                <LogoImage />
            ),
        };
    };

    state = {
        data: []
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





    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Flat list X </Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text> {item.Name} </Text>
                    }
                />
                 {/* <Button onPress={() => this.props.navigation.navigate("CustomerTab")}  title="Customer " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Cooker " color="red" /> 
                 <Button onPress={() => this.props.navigation.navigate("Orders")}  title="Driver" color="red" />  */}
            </View>
        );
    }
}