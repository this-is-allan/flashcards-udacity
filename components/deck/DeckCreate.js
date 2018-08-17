import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { newDeck, decksFetch } from '../../actions/decks';
import { white } from '../../util/colors';

class DeckCreate extends Component {
  state = {
    name: ''
  }

  onPressCreateDeck = () => {
    const entry = this.state

    if (entry.name !== '') {
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
    } else {
      Alert.alert(
        'Deck name empty',
        'The deck name can\'t to be empty',
        [
          {text: 'Ok'}
        ],
        { cancelable: false }
      )
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a deck</Text>

        <TextInput
          style={styles.input}
          onChangeText={name => this.setState({name})}
          value={this.state.name}
          placeholder='Type the deck name'
          autoFocus
        />

        <Button
          onPress={this.onPressCreateDeck}
          title="Create Deck"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  input: {
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 20,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createDeck: (deck, callback) => dispatch(newDeck(deck, callback)),
    fetchDecks: () => dispatch(decksFetch())
  }
}

export default connect(null, mapDispatchToProps)(DeckCreate)