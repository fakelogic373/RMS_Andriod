import React from 'react';
// import { Button, View, Text, FlatList } from 'react-native';
import { FlatList } from 'react-native';
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
                <Image
                    source={require('./images/Headers/meal.png')}
                    style={{ width: 50, height: 50 }}
                />
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
        this.props.navigation.navigate("MyOrders", { isReload: true, });
    }

    

    render() {
        var tempCate = '';

        return (
            <Container>
                <Content>
                    <FlatList
                        data={this.state.meals}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) =>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('./images/Categories/Spanish.png')} />{/*  '+item.Category.Name.split(" ")[0]+' */}
                                        
                                        <Body>
                                            <Text> {item.Name} </Text>
                                            <Text note> {item.Category.Name} </Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Text> {item.Category.Name.split(" ")[0]} </Text>
                                        
                                        {/* <Image source={require('./images/' + '.jpg')} style={{ height: 200, width: 200, flex: 1 }} /> */}
                                    
                                        
                                        {/* <Image source={{ uri: 'https://i1.wp.com/voiceofpeopletoday.com/wp-content/uploads/2017/09/Tens-of-thousands-mark-3-years-since-rebel-takeover-of-Yemen-capital.jpg?fit=1500%2C843&ssl=1' }} style={{ height: 200, width: 200, flex: 1 }} /> */}
                                        <Text style={{ paddingTop: 10 }}> {item.Description} </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button rounded info onPress={() => this.handleBuy(item.MealId)}><Text>Buy</Text></Button>
                                    </Left>
                                </CardItem>

                            </Card>
                        }
                    />
                </Content>
            </Container>

            // <FlatList
            //     data={this.state.meals}
            //     keyExtractor={(x, i) => i}
            //     renderItem={({ item }) =>
            //         <View style={{ flex: 1, flexDirection: 'row' }}>
            //             <Text> {item.Name} </Text>
            //             <Text> {item.Price} </Text>
            //             <Text> {item.Category.Name} </Text>
            //             <Button rounded info onPress={() => this.handleBuy(item.MealId)}><Text>Buy</Text></Button>
            //         </View>

            //     }
            // />

            // {this.state.Products.map(
            //     (product) =>
            // )}

        );
    }
}