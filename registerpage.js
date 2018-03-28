import React, { Component } from 'react';
import { Alert, TextInput, View, Button, StyleSheet, TouchableOpacity, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';




export default class RegisterPage extends Component {

    static navigationOptions = {
        title: 'third',
    };


    state = {
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }



    register = async (json, action) => {
        try {
            var response = await fetch(
                'http://192.168.56.1:45457/api/Account/Register', {
                    method: 'POST',
                    body: JSON.stringify(json),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            console.log("register", response)
            action()
        }
        catch (e) {
            console.log("Error", e)
        }
    }



    handleRegister = () => {

        if (this.state.Password != this.state.ConfirmPassword) {
            alert("the password doesnt match")
        }
        else {
            this.register(
                this.state,
                () => this.props.navigation.navigate("Login")
            )

        }

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
                                    onChangeText={(Email) => this.setState({ Email })}
                                    value={this.state.Email}
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

                            <View style={{ backgroundColor: '#706fd3', borderRadius: 10, margin: 5, width: 190 }}>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[styles.textIn, this.state.flagPass && styles.textInNotValid]}
                                    placeholder="ConfirmPassword"

                                    onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
                                    value={this.state.ConfirmPassword}
                                    selectTextOnFocus={true}
                                />

                            </View>


                        </View>


                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={this.handleRegister}>
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