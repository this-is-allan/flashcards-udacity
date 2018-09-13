import _ from 'lodash'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DeckShow from '../../../components/DeckShow';
import { connect } from 'react-redux';
import { removeDeck, deckFetch, decksFetch} from '../../../actions/decks'
import { Ionicons } from '@expo/vector-icons';
import { white } from '../../../config/colors';

class ShowDeckScreen extends Component {
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
    const { questions } = this.props.deck

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>
          {_.size(questions) > 0 ? `${_.size(questions)} cards` : 'No card'}
        </Text>

        <DeckShow
          title={_.size(questions) > 0 ? `${_.size(questions)} cards` : 'No card'}
          deckEmpty={!_.size(questions) > 0}
          navigation={this.props.navigation}
          onPressDeleteDeck={this.onPressDeleteDeck}
          onPressStartQuiz={this.onPressStartQuiz}
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
    textAlign: 'center',
    color: '#ED4C60',
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowDeckScreen);