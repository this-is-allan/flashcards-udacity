import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../containers/Home'
import DeckList from '../containers/Decks/DeckList';
import DeckShow from '../containers/Decks/DeckShow';
import DeckCreate from '../containers/Decks/DeckCreate';
import QuizShow from '../containers/Quizzes/QuizShow';
import QuizCreate from '../containers/Quizzes/QuizCreate';

import { dark, white, gray2 } from './colors'

export const Tabs = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
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

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  DeckShow: {
    screen: DeckShow,
    path: 'decks/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title} Deck`,
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
      },
    })
  },
  Quiz: {
    screen: QuizShow,
    path: 'decks/:name',
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz',
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
      }
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
  // initialRouteName: 'DeckShow',
  headerMode: 'screen',
  headerLayoutPreset: 'left',
  headerMode: 'float',
})