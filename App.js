import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ContactScreen from './ContactsScreen';
import Contact from './Components/Contact';
import PetsScreen from './PetsScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names: ["ama", "kofi", "sam", "bob", "james", "ama", "kofi", "sam", 
      "bob", "james", "ama", "kofi", "sam", "bob", "james", "ama", "kofi", 
      "sam", "bob", "james", "ama", "kofi", "sam", "bob", "james", "ama", "kofi", 
      "sam", "bob", "james", "james", "ama", "kofi", "sam", "bob", "james", "ama", 
      "james", "ama", "kofi", "sam", "bob", "james", "ama", "james", "ama", "kofi", 
      "sam", "bob", "james", "ama", "james", "ama", "kofi", "sam", "bob", "james", "ama",]
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {/* <ContactScreen /> */}
      <PetsScreen/>







        {/* <TextInput style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          //secureTextEntry={true}
          value={this.state.email}
          onChangeText={(email) => {
            this.setState({ email })
            console.log(text)
          }}
        />

        <TextInput style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => {
            this.setState({password})
            console.log(text)
          }}
        />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  input: {
    backgroundColor: "green",
    height: 60,
    marginLeft: 15,
    marginBottom: 5
  },
  button: {
    color: "white",
    fontSize: 20
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "blue",
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }

});

export default App;
