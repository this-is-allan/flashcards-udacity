import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function DeckListItem( item ) {
  return (
      <Text style={styles.item}>{item.title}</Text>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
