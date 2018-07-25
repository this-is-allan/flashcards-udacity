import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { newDeck, decksFetch } from '../../actions/decks';

class DeckCreate extends Component {
  state = {
    name: ''
  }

  onPressCreateDeck = () => {
    const entry = this.state
    const newDeck = {
      [entry.name]: {
        title: entry.name,
        questions: []
      }
    }

    this.props.createDeck(newDeck, () => {
      this.props.fetchDecks()
      this.setState({ name: '' })
      this.props.navigation.navigate('DeckShow', { title: entry.name })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create Deck Screen</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />

        <Button
          onPress={this.onPressCreateDeck}
          title="Create Deck"
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 30
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createDeck: (deck, callback) => dispatch(newDeck(deck, callback)),
    fetchDecks: () => dispatch(decksFetch())
  }
}

export default connect(null, mapDispatchToProps)(DeckCreate)