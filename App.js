import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import AppContainer from './Components/Navigation/navigation';
import { store, persistor } from './Components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'




const Stack = createStackNavigator();

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
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
