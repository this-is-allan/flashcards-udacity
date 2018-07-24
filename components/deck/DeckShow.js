import _ from 'lodash'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, deckFetch} from './../../actions/decks'
import { Ionicons } from '@expo/vector-icons';

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
        <Text>{title} ({_.size(questions)})</Text>

        <Button
          onPress={this.onPressDeleteDeck}
          title="Delete Deck"
          color="#000"
        />
        <Button
          onPress={this.onPressStartQuiz}
          title="Start Quiz"
          color="red"
        />
        <Button
          onPress={() => this.props.navigation.navigate('QuizCreate')}
          title="Add Quiz"
          color="purple"
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
  backButton: {
    marginLeft: 15
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
    deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);