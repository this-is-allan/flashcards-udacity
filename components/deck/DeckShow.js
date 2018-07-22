import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck } from './../../actions/decks'

class DeckShow extends Component {
  onPressDeleteDeck = () => {
    const { title } = this.props.navigation.state.params

    this.props.deleteDeck(title, () => {
      this.props.navigation.navigate('DeckList')
    })
  }

  render() {
    const { title } = this.props.navigation.state.params
    
    return (
      <View style={styles.container}>
        <Text>{title}</Text>

        <Button
          onPress={this.onPressDeleteDeck}
          title="Delete Deck"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
});

mapDispatchToProps = dispatch => {
  return {
    deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
  }
}

export default connect(null, mapDispatchToProps)(DeckShow);