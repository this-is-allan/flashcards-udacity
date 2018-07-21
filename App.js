import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DeckList from './components/deck/DeckList.js';

import HomeScreen from './screens/Home';

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks'
    }
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}