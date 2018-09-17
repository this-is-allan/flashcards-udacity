import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux'
import { Asset, AppLoading } from 'expo';
import { AsyncStorage } from "react-native"

import { MainNavigator } from './src/config/routes';
import { setLocalNotification } from './src/util/notifications'
import { white } from './src/config/colors'
import store from './src/config/store'
import { light, dark } from './src/config/theme'

import StatusBar from './src/components/StatusBar';

function HeaderLeft({ title }) {
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: 15}}>{title}</Text>
  )
}

export default class App extends React.Component {
  state = {
    isReady: false,
    darkMode: false,
  }
  
  componentDidMount() {
    setLocalNotification()
  };
  
  render() {
    let { isReady, darkMode} = this.state;
    
    if (this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._retrieveData}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <Provider store={store}>
        <ThemeProvider theme={darkMode ? dark : light}>
          <View style={{flex: 1}}>
            <StatusBar backgroundColor={white} barStyle="dark-content" />
            {/* <Button title="DarkMode" onPress={() => this.handleDarkMode()} /> */}
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