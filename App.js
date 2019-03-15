import React, {Component} from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Login from './app/components/Login';
import DashBoard from './app/components/DashBoard';
import store from './app/components/store';

const LoginStack = createStackNavigator({ Home: Login },{headerMode: 'none',});
const DashboardStack = createStackNavigator({ DashBoard: DashBoard });

const RootStack = createSwitchNavigator(
  {
    Signin: LoginStack,
    Emplist: DashboardStack,
  },
  {
    initialRouteName: 'Signin',
  }
);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    );
  }
}

