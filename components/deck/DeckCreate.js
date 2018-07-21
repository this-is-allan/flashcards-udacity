import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createDeck } from '../../util/storageApi';

export default class DeckCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Useless Placeholder'
    }
  }

  onPressCreateDeck = () => {
    const entry = this.state
    
    const newDeck = {
      [entry.text]: {
        title: entry.name,
        questions: []
      }
    }

    createDeck(newDeck).then(() => this.setState({ name: '' }))
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
