import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import DeckList from './components/deck/DeckList.js';
import DeckShow from './components/deck/DeckShow.js';

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
  },
  DeckShow: {
    screen: DeckShow,
    path: 'deck/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}'s Deck`
    })
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