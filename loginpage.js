import React, { Component } from 'react';
import { Alert, TextInput, View, Button, StyleSheet, TouchableOpacity, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';




export default class StudentReg extends Component {

    static navigationOptions = {
        title: 'third',
    };


    state = {
        Username: 'admin@admin.com',
        Password: 'Password1!'
    }



    login = async (json, action) => {
        try {
            var response = await fetch(
                'http://192.168.56.1:45457/Token',
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'POST',
                    body: 'grant_type=password&username=' + json.Username + '&password=' + json.Password
                }
            )
            console.log("login", response)
            const data = await response.json();
            action(data);
        }
        catch (e) {
            console.log("Error", e)
        }
    }

    handleLogin = () => {
        this.login(
            this.state,
            (data) => {
                if (data.access_token) {
                    // sessionStorage.setItem('token', data.access_token)
                    // sessionStorage.setItem('userName', data.userName)
                    // console.log(sessionStorage.getItem('token'))
                    // console.log(sessionStorage.getItem('userName'))
                    // alert("welcome " + sessionStorage.getItem('userName'))

                    AsyncStorage.setItem('token', data.access_token);
                    AsyncStorage.setItem('userName', data.userName);
                    //console.log(AsyncStorage.getItem('token'))
                    Alert.alert("userName =" + data.userName)

                }
                else {
                    Alert.alert("wrong user/password input ")
                }

            }
        )
    }




    render() {
        return (
            <View style={styles.container}>


                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >



                    <View style={{ alignItems: 'center', marginBottom: 5 }} >
                        <Text style={{ color: 'white', fontSize: 40, color: 'white' }}>login</Text>
                    </View>



                    <View>
                        {/* the entire form box */}


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ backgroundColor: '#706fd3', borderRadius: 10, margin: 5, width: 190 }}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                    placeholder="Email"
                                    selectTextOnFocus={true}

                                    onFocus={this.ShowOnFocus}
                                    onChangeText={(Username) => this.setState({ Username })}
                                    value={this.state.Username}
                                />
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row' }}>




                            <View style={{ backgroundColor: '#706fd3', borderRadius: 10, margin: 5, width: 190 }}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                    placeholder="Password"

                                    onChangeText={(Password) => this.setState({ Password })}
                                    value={this.state.Password}
                                    selectTextOnFocus={true}
                                />

                            </View>


                        </View>


                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={this.handleLogin}>
                                <View style={styles.btnContainer}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, margin: 10 }}>Login</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>





                </KeyboardAvoidingView>






            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#474787',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    textIn: {
        color: 'black', fontSize: 20, margin: 10
    },
    textInNotValid: {
        color: 'red', fontSize: 20, margin: 10
    },

    btnContainer: {
        backgroundColor: "#8584f9", borderRadius: 50, justifyContent: 'center', width: 250
    }
});