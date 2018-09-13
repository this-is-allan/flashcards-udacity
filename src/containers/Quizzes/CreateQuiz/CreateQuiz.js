import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import TextInputField from '../../../components/TextInputField'
import PrimaryButton from '../../../components/Buttons/Primary'
import { connect } from 'react-redux';
import { newCard } from '../../../actions/quiz';
import { deckFetch } from '../../../actions/decks';
import { white } from '../../../config/colors';

class CreateQuiz extends Component {
  state = {
    question: '',
    answer: ''
  }

  emptyForm = () => {
    let { question, answer } = this.state;
    return question.length <= 2 || answer.length <= 2 ? true : false;
  }

  onPressCreateQuestion = () => {
    let card = this.state
    const { title } = this.props.deck

    if (this.emptyForm()) {
      Alert.alert(
        'Quiz name empty',
        'The quiz can\'t to be empty',
        [
          {text: 'Ok'}
        ],
        { cancelable: false }
      )
    } else {
      this.props.addQuestion(card, title, () => {
        this.props.deckFetch(title)
        this.setState({
            question: '',
            answer: ''
        })
        Alert.alert(
          'Success!',
          'The question was created successfully!',
          [
            {text: 'Ok'}
          ],
          { cancelable: false }
        )
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputField
          fieldLabel="Enter a question for your new card:"
          style={styles.input}
          onChangeText={question => this.setState({question})}
          value={this.state.question}
          placeholder='Type a question'
          autoFocus
        />

        <TextInputField
          fieldLabel="Enter an answer for your new card:"
          style={styles.input}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
          placeholder='Type a answer'
        />

        <PrimaryButton
          title="Add Question"
          onPress={this.onPressCreateQuestion}
          disabled={this.emptyForm()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz)