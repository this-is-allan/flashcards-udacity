import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import HomeScreen from './screens/Home';
import DeckList from './components/deck/DeckList';
import DeckShow from './components/deck/DeckShow';
import DeckCreate from './components/deck/DeckCreate';
import QuizShow from './components/quiz/QuizShow';

const store = createStore(reducer, applyMiddleware(thunk))

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks'
    }
  },
  CreateDeck: {
    screen: DeckCreate,
    navigationOptions: {
      tabBarLabel: 'Create a Deck'
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
    path: 'decks/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}'s Deck`
    })
  },
  Quiz: {
    screen: QuizShow,
    path: 'decks/:name',
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz'
    })
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}