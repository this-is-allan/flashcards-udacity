import _ from "lodash";
import React, { Component } from "react";

import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { Sector } from "../../../config/theme";
import { removeDeck, deckFetch, decksFetch } from "../../../actions/decks";

import PrimaryButton from "../../../components/Buttons/Primary";
import Header from "../../../components/Header";

class ShowDeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Ionicons
        name="ios-arrow-back"
        size={30}
        onPress={() => navigation.navigate("DeckList")}
        style={{ marginLeft: 15 }}
      />
    )
  });

  componentDidMount = () => {
    const { title } = this.props.navigation.state.params;
    this.props.deckFetch(title);
  };

  onPressDeleteDeck = () => {
    const { title } = this.props.deck;

    this.props.deleteDeck(title, () => {
      this.props.fetchDecks();
      this.props.navigation.navigate("DeckList");
    });
  };

  onPressStartQuiz = () => {
    this.props.navigation.navigate("Quiz");
  };

  defineHeader = questions => {
    const length = _.size(questions);

    if (_.size(questions) === 1) {
      return `${length} card`;
    } else if (_.size(questions) > 1) {
      return `${length} cards`;
    } else {
      return "No cards";
    }
  };

  render() {
    const { questions } = this.props.deck;

    return (
      <Sector>
        <Header title={this.defineHeader(questions)} />

        <PrimaryButton
          title="Start"
          disabled={!_.size(questions) > 0}
          color="green"
          onPress={() => this.onPressStartQuiz()}
        />

        <PrimaryButton
          title="Add card"
          onPress={() => this.props.navigation.navigate("CreateQuiz")}
        />

        <PrimaryButton
          title="Delete deck"
          onPress={() => this.onPressDeleteDeck()}
        />
      </Sector>
    );
  }
}

mapStateToProps = ({ deck }) => {
  return {
    deck: deck.deck
  };
};

mapDispatchToProps = dispatch => {
  return {
    deckFetch: id => dispatch(deckFetch(id)),
    fetchDecks: () => dispatch(decksFetch()),
    deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDeckScreen);
