import { isEmpty } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import { newDeck, decksFetch } from "../../../actions/decks";
import { Sector } from "../../../config/theme";

import Header from "../../../components/Header";
import TextInputField from "../../../components/TextInputField";
import PrimaryButton from "../../../components/Buttons/Primary";

class CreateDeck extends Component {
  state = {
    name: ""
  };

  verifyFormFill = () => {
    let { name } = this.state;
    return isEmpty(name);
  };

  onPressCreateDeck = () => {
    const entry = this.state;

    const newDeck = {
      [entry.name]: {
        title: entry.name,
        questions: []
      }
    };

    this.props.createDeck(newDeck, () => {
      this.setState({ name: "" });
      this.props.fetchDecks();
      this.props.navigation.navigate("DeckShow", { title: entry.name });
    });
  };

  render() {
    let { name } = this.state;

    return (
      <Sector>
        <Header title="Create a Deck" />

        <TextInputField
          label="Enter a title for your new deck:"
          placeholder="Deck title"
          maxLength={30}
          value={name}
          autoFocus
          onChangeText={name => this.setState({ name })}
        />

        <PrimaryButton
          title="Create Deck"
          onPress={this.onPressCreateDeck}
          disabled={this.verifyFormFill()}
        />
      </Sector>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeck: (deck, callback) => dispatch(newDeck(deck, callback)),
    fetchDecks: () => dispatch(decksFetch())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateDeck);
