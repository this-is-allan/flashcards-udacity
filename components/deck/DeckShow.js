import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, deckFetch} from './../../actions/decks'
import { Ionicons } from '@expo/vector-icons';

class DeckShow extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Ionicons name='ios-arrow-back' size={30} onPress={() => navigation.navigate('DeckList')} style={styles.backButton} />,
  });

  state = {
    deck: []
  }

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

  render() {
    const { title } = this.props.deck

    return (
      <View style={styles.container}>
        <Text>{title}</Text>

        <Button
          onPress={this.onPressDeleteDeck}
          title="Delete Deck"
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