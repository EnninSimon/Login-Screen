import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loginEmailAccount } from '../redux/actions/authActions';


class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value,

        })
    }

    handleOnSubmit = () => {
        this.props.loginEmailAccount(this.state.email, this.state.password)
    }

    render() {
        const { navigation, auth } = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>
                <View>
                    {
                        auth.error.login &&
                        <Text style={{ color: 'red', }}>{auth.error.login}</Text>
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
                        placeholder="Password"
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(text) => {
                            this.handleUpdateState('password', text)
                        }}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleOnSubmit}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProp = (state) => {
    return { auth: state }
}

export default connect(mapStateToProp, { loginEmailAccount })(LoginScreen);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
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
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#0853a8"
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

