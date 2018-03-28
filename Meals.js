import React from 'react';
<<<<<<< HEAD
// import { Button, View, Text, FlatList } from 'react-native';
=======
import { Button, View, Text, FlatList, AsyncStorage } from 'react-native';
>>>>>>> 1ccbeae6c735d51ba682c26875b4d349d51e55d4
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import { Image } from 'react-native';
// import * as azizmd from 'react-native-material-design';

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

<<<<<<< HEAD
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://amedia.britannica.com/85/5785-004-83380705.jpg' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'https://i1.wp.com/voiceofpeopletoday.com/wp-content/uploads/2017/09/Tens-of-thousands-mark-3-years-since-rebel-takeover-of-Yemen-capital.jpg?fit=1500%2C843&ssl=1' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //     <Text> Meals </Text>
            //     <FlatList
            //         data={this.state.meals}
            //         keyExtractor={(x, i) => i}
            //         renderItem={({ item }) =>
            //             <View style={{ flex: 1, flexDirection: 'row' }}>
            //                 <Text> {item.Name} </Text>
            //                 <Text> {item.Price} </Text>
            //                 <Text> {item.Category.Name} </Text>
            //                 <Button rounded info onPress={() => this.handleBuy(item.MealId)}><Text>Buy</Text></Button>
            //             </View>

            //         }
            //     />
            // </View>
=======
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
>>>>>>> 1ccbeae6c735d51ba682c26875b4d349d51e55d4
        );
    }
}