import React from 'react';
import { View, Text } from 'react-native';
import store from './src/config/store'
import { Provider } from 'react-redux'
import { MainNavigator } from './src/config/routes';
import { setLocalNotification } from './src/util/notifications'
import { white } from './src/config/colors'

import StatusBar from './src/components/StatusBar';

function HeaderLeft({ title }) {
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: 15}}>{title}</Text>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  };
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={white} barStyle="dark-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}