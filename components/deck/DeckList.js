import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { decksFetch } from './../../actions/decks';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('DeckShow', item)}>
        <DeckListItem
          id={item.id}
          title={item.title}
          length={item.questions.length}
        />
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
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
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 10
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)