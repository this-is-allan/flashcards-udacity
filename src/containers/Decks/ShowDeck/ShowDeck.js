import _ from 'lodash'
import React, { Component } from 'react';
import { Sector} from '../../../config/theme';

import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import DeckShow from '../../../components/DeckShow';
import Header from '../../../components/Header';

import { white } from '../../../config/colors';
import { removeDeck, deckFetch, decksFetch} from '../../../actions/decks'

class ShowDeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Ionicons name='ios-arrow-back' size={30} onPress={() => navigation.navigate('DeckList')} style={{ marginLeft: 15 }} />,
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
      <Sector>
        <Header
          title={_.size(questions) > 0 ? `${_.size(questions)} cards` : 'No card'}
        />
    
        <DeckShow
          title={_.size(questions) > 0 ? `${_.size(questions)} cards` : 'No card'}
          deckEmpty={!_.size(questions) > 0}
          navigation={this.props.navigation}
          onPressDeleteDeck={this.onPressDeleteDeck}
          onPressStartQuiz={this.onPressStartQuiz}
        />
      </Sector>
    );
  }
}

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