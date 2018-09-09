import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const DeckListItem = ({ title, length}) => (
  <Text style={styles.item}>
    {title} ({length})
  </Text>
)

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

DeckListItem.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
}

export default DeckListItem