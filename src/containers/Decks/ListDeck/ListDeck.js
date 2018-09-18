import React, { Component } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { decksFetch } from "./../../../actions/decks";

const ListDeckItem = styled.Text`
  paddingtop: 10px;
  paddingbottom: 10px;
  fontsize: 18px;
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

const mapStateToProps = ({ decks }) => {
  return {
    decks: decks.decks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => dispatch(decksFetch())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDeck);
