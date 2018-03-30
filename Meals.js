import React from 'react';
// import { Button, View, Text, FlatList } from 'react-native';
import { FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoImage from './logo'
import Icon from 'react-native-vector-icons/Ionicons';
import DB from './DB'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, Picker, Form, Item as FormItem } from 'native-base';
const Item = Picker.Item;
import { Platform } from "react-native";
import { Image } from 'react-native';
import ImagesJS from './Images'

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
        meals: [],
        Categories: [],
        selected: ""
    }

    onValueChange(value) {

        this.state.selected = value


        this.state.selected === ''
            ?
            this.find()
            :
            this.handleSearchByCategory()
    }

    // onValueChange(value) {
    //     this.setState({
    //         selected: value
    //     });
    // }

    db = new DB('http://192.168.56.1:45457/api/Meals')
    CategoryDB = new DB('http://192.168.56.1:45457/api/Categories')
    buy = new DB('http://192.168.56.1:45457/api/User')

    componentDidMount() {
        this.find()
        this.getCategory()
    }

    find = (parameters) => {
        this.db.find(
            (data) => this.setState({ meals: data }),
            parameters
        )
        
    }

    getCategory = (parameters) => {
        this.CategoryDB.find(
            (data) => this.setState({ Categories: data }),
            parameters
        )
    }

    handleSearchByCategory = () => {
        this.find({
            Category: this.state.selected
        })
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
                    <Form style={{ backgroundColor: 'lightblue' }}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Search By Cuisine" value="" />
                            {
                                this.state.Categories.map((item) => <Item label={item.Name} key={item.Name} value={item.Name} />)
                            }
                        </Picker>
                    </Form>
                    <FlatList
                        data={this.state.meals}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) =>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Left>
                                        {item.Category.Name
                                            ?
                                            <Thumbnail source={ImagesJS[item.Category.Name.split(" ")[0]]} />
                                            :
                                            <Thumbnail source={require('./images/default-thumbnail.jpg')} />
                                        }
                                        {/* <Thumbnail source={require('./images/Categories/' + item.Category.Name.split(" ")[0] + '.png')} />  '+item.Category.Name.split(" ")[0]+' */}
                                        <Body>
                                            <Text> {item.Name} </Text>
                                            <Text note> {item.Category.Name} </Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{ alignItems: 'center' }}>
                                        {item.ImageName
                                            ?
                                            <Image
                                                style={{ height: 250, width: 300, flex: 1 }}
                                                source={ImagesJS[item.ImageName]}
                                            />

                                            :

                                            <Image
                                                style={{ height: 200, width: 200, flex: 1 }}
                                                source={require('./images/default-thumbnail.jpg')}
                                            />
                                        }
                                        <Text style={{ paddingTop: 10 }}> {item.Description} </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Right style={{ paddingLeft: 280 }}>
                                        <Button rounded info onPress={() => this.handleBuy(item.MealId)}><Text>Buy</Text></Button>
                                    </Right>
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


// import React, { Component } from "react";
// import { Platform } from "react-native";
// import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
// const Item = Picker.Item;
// export default class PickerCustomHeaderStyleExample extends Component {

//     state = {
//       selected: "key0"
//     };

//   onValueChange(value) {
//     this.setState({
//       selected: value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Form>
//             <Picker
//               mode="dropdown"
//               headerStyle={{ backgroundColor: "#b95dd3" }}
//               headerBackButtonTextStyle={{ color: "#fff" }}
//               headerTitleStyle={{ color: "#fff" }}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}
//             >
//               <Item label="Wallet" value="key0" />
//               <Item label="ATM Card" value="key1" />
//               <Item label="Debit Card" value="key2" />
//               <Item label="Credit Card" value="key3" />
//               <Item label="Net Banking" value="key4" />
//             </Picker>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }
