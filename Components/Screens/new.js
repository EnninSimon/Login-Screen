import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ContactsScreen from '../Screens/ContactsScreen';
import {connect} from 'react-redux';



const Stack = createStackNavigator();

class AppContainer extends Component {
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
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignupScreen" component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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

const mapStateToProp = (state) => {
  return { auth: state }
}

export default  connect(mapStateToProp)(AppContainer);
