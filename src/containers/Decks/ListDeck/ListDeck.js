import React, { Component } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { decksFetch } from "./../../../actions/decks";

const ListDeckItem = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  height: 44px;
`;

class ListDeck extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("DeckShow", item)}
    >
      <ListDeckItem>
        {item.title} ({item.questions.length})
      </ListDeckItem>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={Object.values(this.props.decks)}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(decksFetch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDeck);
