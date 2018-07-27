import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { setLocalNotification } from './util/notifications'
import { dark, white, gray2 } from './util/colors'

import AppStatusBar from './components/StatusBar/StatusBar';
import DeckList from './components/deck/DeckList';
import DeckShow from './components/deck/DeckShow';
import DeckCreate from './components/deck/DeckCreate';
import QuizShow from './components/quiz/QuizShow';
import QuizCreate from './components/quiz/QuizCreate';

const store = createStore(reducer, applyMiddleware(thunk))

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarAccessibilityLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: DeckCreate,
    navigationOptions: {
      tabBarAccessibilityLabel: 'Create a Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: dark,
    inactiveTintColor: gray2,
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: white,
      shadowOpacity: 0
    }
  },
})

function HeaderLeft({ title }) {
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: 15}}>{title}</Text>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home'
    }
  },
  CreateDeck: {
    screen: DeckCreate,
    navigationOptions: ({ navigation }) => ({
      title: 'Create a Deck',
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
      },
    })
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
  },
  QuizCreate: {
    screen: QuizCreate,
    navigationOptions: ({ navigation }) => ({
      title: 'Create Question',
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
      },
    })
  }
}, {
  // initialRouteName: 'CreateDeck',
  headerMode: 'screen',
  headerLayoutPreset: 'left',
  headerMode: 'float',
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  };
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={white} barStyle="dark-content" />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}