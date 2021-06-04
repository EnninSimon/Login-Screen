import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ContactsScreen from '../Screens/ContactsScreen';
import { connect } from 'react-redux';
import {logout} from '../redux/actions/authActions';



const Stack = createStackNavigator();

function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer>
      {
        auth.login ?
          //show contacts
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerRight: () => (
                  <TouchableOpacity style={{marginRight: 17}} 
                  onPress={logout} >
                    <Text>Logout</Text>
                  </TouchableOpacity>
                )
              }}
              name="ContactsScreen" component={ContactsScreen} />
          </Stack.Navigator>
          :
          //show login and signup screen
          <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupScreen" component={SignUpScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
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

export default connect(mapStateToProp, {logout})(AppContainer);
