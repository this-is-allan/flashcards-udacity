import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { newCard } from '../../actions/quiz';
import { deckFetch } from '../../actions/decks';

class QuizCreate extends Component {
  state = {
    question: '',
    answer: ''
  }

  onPressCreateQuestion = () => {
    let card = this.state
    const { title } = this.props.deck

    this.props.addQuestion(card, title, () => {
      this.props.deckFetch(title)
      this.setState({
          question: '',
          answer: ''
      })
    //   this.props.navigation.navigate('DeckShow', { title: entry.name })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState({question})}
          value={this.state.question}
          placeholder='Type a question'
          autoFocus
          />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
          placeholder='Type a answer'
        />

        <Button
          onPress={this.onPressCreateQuestion}
          title="Add Question"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
  }
});

const mapStateToProps = ({ deck }) => {
    return {
        deck: deck.deck
    }
}

const mapDispatchToProps = dispatch => {
  return {
    deckFetch: deckName => dispatch(deckFetch(deckName)),
    addQuestion: (card, deckName, callback) => dispatch(newCard(card, deckName, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreate)