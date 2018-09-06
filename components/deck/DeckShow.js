import _ from 'lodash'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, deckFetch, decksFetch} from './../../actions/decks'
import { Ionicons } from '@expo/vector-icons';
import { white } from '../../util/colors';

class DeckShow extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Ionicons name='ios-arrow-back' size={30} onPress={() => navigation.navigate('DeckList')} style={styles.backButton} />,
  });

  componentDidMount = () => {
    const { title } = this.props.navigation.state.params
    this.props.deckFetch(title)
  };

  onPressDeleteDeck = () => {
    const { title } = this.props.deck

    this.props.deleteDeck(title, () => {
      this.props.fetchDecks()
      this.props.navigation.navigate('DeckList')
    })
  }

  onPressStartQuiz = () => {
    this.props.navigation.navigate('Quiz')
  }

  render() {
    const { title, questions } = this.props.deck

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{title} ({_.size(questions)})</Text>
        <Button
          onPress={this.onPressDeleteDeck}
          title="Delete Deck"
        />
        <Button
          disabled={!_.size(questions) > 0}
          onPress={this.onPressStartQuiz}
          title="Start Quiz"
        />
        <Button
          onPress={() => this.props.navigation.navigate('QuizCreate')}
          title="Add Quiz"
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
  backButton: {
    marginLeft: 15
  },
  deckTitle: {
    fontSize: 32,
    textAlign: 'center',
  }
});

mapStateToProps = ({deck}) => {
  return {
    deck: deck.deck
  }
}

mapDispatchToProps = dispatch => {
  return {
    deckFetch: id => dispatch(deckFetch(id)),
    fetchDecks: () => dispatch(decksFetch()),
    deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);