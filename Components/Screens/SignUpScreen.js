import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createEmailAccount, registerError } from '../redux/actions/authActions';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirm: "",
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = () => {
        if (this.state.password !== this.state.confirm) {
            this.props.registerError("Passwords do not match!")
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
    }

    render() {
        const { navigation, auth } = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Sign up</Text>
                </View>
                <View>
                    {
                        auth.error.register &&
                        <Text style={{ color: 'red', }}>{auth.error.register}</Text>
                    }
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => {
                            this.handleUpdateState('email', text)
                        }}
                        value={this.state.email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(text) => {
                            this.handleUpdateState('password', text)
                        }}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        value={this.state.comfirm}
                        placeholder="Password again"
                        onChangeText={(text) => {
                            this.handleUpdateState('confirm', text)
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.handleOnSubmit}
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>You already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                        <Text style={styles.signUpText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProp = (state) => {
    return { auth: state }
}



export default connect(mapStateToProp, { createEmailAccount, registerError })(SignUpScreen);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 150
    },
    loginText: {
        fontSize: 50,
        color: "#5100ad",
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#5100ad",
        fontSize: 20,
        height: 50,
        marginTop: 20
    },
    buttonContainer: {
        height: 50,
        backgroundColor: "#5100ad",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 25,
    },
    noAccountContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    noAccountText: {
        marginRight: 10,
        fontSize: 16
    },
    signUpText: {
        fontSize: 16,
        color: "#5100ad"
    }
})

