import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux'
import { Asset, AppLoading } from 'expo';
import { AsyncStorage } from "react-native"

import { MainNavigator } from './src/config/routes';
import { setLocalNotification } from './src/util/notifications'
import store from './src/config/store'
import theme from './src/config/theme'

import StatusBar from './src/components/StatusBar';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  };
  
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <View style={{flex: 1}}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <MainNavigator />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }

  handleDarkMode = () => {
    this.setState({ darkMode: false })
  }

  async _cacheResourcesAsync() {
    return true;
  }
}