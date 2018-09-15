import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { decksFetch } from './../../../actions/decks';

class ListDeck extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() =>
      this.props.navigation.navigate('DeckShow', item)}>
      <Text style={styles.listItem}>{item.title} ({item.questions.length})</Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View>
        <FlatList
          data={Object.values(this.props.decks)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#ED4E5F',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#ED4E5F',
    paddingBottom: 10,
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = ({ decks }) => {
  return {
    decks: decks.decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => dispatch(decksFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDeck)