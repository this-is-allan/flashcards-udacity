import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../containers/Home/Home";
import ShowDeckScreen from "../containers/Decks/ShowDeck";
import CreateDeck from "../containers/Decks/CreateDeck";
import ShowQuiz from "../containers/Quizzes/ShowQuiz";
import CreateQuiz from "../containers/Quizzes/CreateQuiz";

import { dark, white, gray2 } from "./colors";

export const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarAccessibilityLabel: "All Decks",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      })
    },
    CreateDeck: {
      screen: CreateDeck,
      navigationOptions: {
        tabBarAccessibilityLabel: "Create a Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: dark,
      inactiveTintColor: gray2,
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: white,
        shadowOpacity: 0
      }
    }
  }
);

export const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    DeckShow: {
      screen: ShowDeckScreen,
      path: "decks/:name",
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title} Deck`,
        headerStyle: {
          backgroundColor: white,
          borderBottomWidth: 0
        }
      })
    },
    Quiz: {
      screen: ShowQuiz,
      path: "decks/:name",
      navigationOptions: ({ navigation }) => ({
        title: "Quiz",
        headerStyle: {
          backgroundColor: white,
          borderBottomWidth: 0
        }
      })
    },
    CreateQuiz: {
      screen: CreateQuiz,
      navigationOptions: ({ navigation }) => ({
        title: "Create Question",
        headerStyle: {
          backgroundColor: white,
          borderBottomWidth: 0
        }
      })
    }
  },
  {
    // initialRouteName: 'DeckShow',
    headerMode: "screen",
    headerLayoutPreset: "left",
    headerMode: "float"
  }
);
