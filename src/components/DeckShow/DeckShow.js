import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../Buttons/Primary';

const DeckShow = ({
  deckEmpty,
  onPressDeleteDeck,
  onPressStartQuiz,
  navigation
}) => (
  <View style={styles.container}>
    <PrimaryButton
      title="Delete deck"
      onPress={() => onPressDeleteDeck()}
    />

    <PrimaryButton
      title="Add quiz"
      onPress={() => navigation.navigate('CreateQuiz')}
    />

    <PrimaryButton
      title="Start quiz"
      disabled={deckEmpty}
      onPress={() => onPressStartQuiz()}
    />
  </View>
)

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

DeckShow.propTypes = {
  deckEmpty: PropTypes.bool.isRequired,
  onPressStartQuiz: PropTypes.func.isRequired,
  onPressDeleteDeck: PropTypes.func.isRequired
}

export default DeckShow