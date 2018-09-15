import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import TextInputField from '../../../components/TextInputField'
import PrimaryButton from '../../../components/Buttons/Primary'
import { newDeck, decksFetch } from '../../../actions/decks';
import { white } from '../../../config/colors';

class CreateDeck extends Component {
  state = {
    name: ''
  }

  verifyFormFill = () => {
    let { name } = this.state;
    return isEmpty(name);
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
      this.setState({ name: '' })
      this.props.fetchDecks()
      this.props.navigation.navigate('DeckShow', { title: entry.name })
    })
  }

  render() {
    let { name }  = this.state
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a deck</Text>

        <TextInputField
          fieldLabel="Enter a title for your new deck:"
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

export default connect(null, mapDispatchToProps)(CreateDeck)