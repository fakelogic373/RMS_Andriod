const images = {

    American : require("./images/Categories/American.png"),

    French : require("./images/Categories/French.png"),

    Greek : require("./images/Categories/Greek.png"),

    Indian : require("./images/Categories/Indian.png"),

    Italian : require("./images/Categories/Italian.png"),

    Japanese : require("./images/Categories/Japanese.png"),

    Mexican : require("./images/Categories/Mexican.png"),

    Pakistani : require("./images/Categories/Pakistani.png"),

    Philippiens : require("./images/Categories/Philippiens.png"),

    Spanish : require("./images/Categories/Spanish.png"),

    Thai : require("./images/Categories/Thai.png"),

    Vietnamese : require("./images/Categories/Vietnamese.png"),

    Yemeni : require("./images/Categories/Yemeni.png"),

////////////////////////////////////////////////////////////////////////

    Adobo : require("./images/Adobo.jpg"),
    
    Aloo_Gobi : require("./images/Aloo_Gobi.jpg"),
    
    Banh_mi : require("./images/Banh_mi.jpg"),

    Banh_Xeo : require("./images/Banh_Xeo.jpg"),

    Beriani : require("./images/Beriani.jpg"),

    Caesar_salad : require("./images/Caesar_salad.jpg"),

    Caprese : require("./images/Caprese.jpg"),

    Charcuterie : require("./images/Charcuterie.jpg"),

    Cheesecake : require("./images/Cheesecake.jpg"),

    Chicken_tandoori : require("./images/Chicken_tandoori.jpg"),

    Chili_con_carne : require("./images/Chili_con_carne.jpg"),

    Croque_Monsieur : require("./images/Croque_Monsieur.jpg"),

    Dhal : require("./images/Dhal.jpg"),

    Empanadas : require("./images/Empanadas.jpg"),

    Fahsa : require("./images/Fahsa.jpg"),

    Goi_cuon : require("./images/Goi_cuon.jpg"),

    Greek_salad : require("./images/Greek_salad.jpg"),

    Jamon : require("./images/Jamon.jpg"),

    Mac_and_cheese : require("./images/Mac_and_cheese.jpg"),

    Madfoon : require("./images/Madfoon.jpg"),

    Mandi : require("./images/Mandi.jpg"),

    Masala_Tea : require("./images/Masala_Tea.jpg"),

    Mousaka : require("./images/Mousaka.jpg"),

    Pad_Thai : require("./images/Pad_Thai.jpg"),

    Paella : require("./images/Paella.jpg"),

    Pancit : require("./images/Pancit.jpg"),

    Paneer_Butter_Masala : require("./images/Paneer_Butter_Masala.jpg"),

    Pasta : require("./images/Pasta.jpg"),

    Pizza : require("./images/Pizza.jpg"),

    Puchero : require("./images/Puchero.jpg"),

    Quessadilla : require("./images/Quessadilla.jpg"),

    Roquefort : require("./images/Roquefort.jpg"),

    Shahi_tukda : require("./images/Shahi_tukda.jpg"),

    Som_Tam : require("./images/Som_Tam.jpg"),

    Souvlaki : require("./images/Souvlaki.jpg"),

    Tapas : require("./images/Tapas.jpg"),

    Tempura : require("./images/Tempura.jpg"),

    Tom_Yam_Goong : require("./images/Tom_Yam_Goong.jpg"),

    Tonkatsu : require("./images/Tonkatsu.jpg"),

    Wagashi : require("./images/Wagashi.jpg"),
    
    }
    
    export default images;



// import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import * as thestyle from 'native-base'
// import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
// import { StyleSheet, Text, Image, View, FlatList, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
// import images from './Image.js'
// export default class Restaurants extends React.Component {

//     state = {
//         data: [],
//         Name: '',
//         isLoading: true
//     };
//     componentDidMount() {
//         //conveyor remote desktop
//         return fetch('http://192.168.56.1:45455/api/RestaurantCategories')
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     isLoading: false,
//                     data: responseJson,
//                 }, function () {
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
//     setSearchText(event) {
//         searchText = event.nativeEvent.text;
//         data = this.state.Name;
//         searchText = searchText.trim().toLowerCase();
//         data = data.filter(l => {
//             return l.nama.toLowerCase().match(searchText);
//         });
//         this.setState({
//             data: data
//         });
//     }
//     render() {
//         // console.log(this.state.data)
//         // console.log(this.state.images)
//         return (
//             <thestyle.Container>
//                 <thestyle.Header style={{ backgroundColor: 'white' }}>
//                     <thestyle.Left>
//                         <thestyle.Button transparent
//                         >
//                             <thestyle.Icon name="md-menu" style={{ color: '#ba0000' }} />
//                         </thestyle.Button>
//                     </thestyle.Left>
//                     <thestyle.Body>
//                         <Image source={require('./images/logo.jpg')} style={{ width: 200, height: 50, resizeMode: "contain" }} />
//                     </thestyle.Body>
//                     <thestyle.Right>
//                         <thestyle.Button transparent
//                         >
//                             {/* <thestyle.Icon name="md-search" style={{ color: '#ba0000' }} /> */}
//                         </thestyle.Button>
//                     </thestyle.Right>
//                 </thestyle.Header>
//                 <thestyle.Header searchBar style={{ backgroundColor: '#cc0202' }} >
//                     <thestyle.Item>
//                         <thestyle.Input placeholder="Search"
//                             placeholder="Search"
//                             value={this.state.Name}
//                             placeholder="Enter Name"
//                             onChange={this.setSearchText.bind(this)}
//                         />
//                         <thestyle.Button transparent>
//                             <thestyle.Icon name="md-search" style={{ color: '#cc0202' }} />
//                             <Text></Text>
//                         </thestyle.Button>
//                     </thestyle.Item>
//                 </thestyle.Header>
//                 <thestyle.Header style={{ height: 15, backgroundColor: style = '#cc0202' }}>
//                 </thestyle.Header>
//                 <thestyle.Content>
//                     <thestyle.List dataArray={this.state.data}
//                         renderRow={(item) =>
//                             <thestyle.ListItem>
//                                 <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('RestaurantsDetails', { id: item.Id })}>
//                                     <View style={{ flex: 0.2, flexDirection: 'column' }}>
//                                         {item.Image
//                                             ?
//                                             <Image
//                                                 style={{ width: 60, height: 60 }}
//                                                 source={images[item.Image]}
//                                             />
//                                             :
//                                             <Image
//                                                 style={{ width: 60, height: 60 }}
//                                                 source={require('./images/q.png')}
//                                             />
//                                         }
//                                     </View>
//                                     <View style={{ flex: 0.8, flexDirection: 'column' }}>
//                                         <View style={{ flexDirection: 'row' }}>
//                                             <Text style={{ fontSize: 19, fontWeight: 'bold' }} > {item.Name}</Text>
//                                         </View>
//                                     </View>
//                                 </TouchableOpacity>
//                             </thestyle.ListItem>
//                         }>
//                     </thestyle.List>
//                 </thestyle.Content>
//             </thestyle.Container >
//         );
//     }
// }