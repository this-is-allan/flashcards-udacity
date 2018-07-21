import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class DeckShow extends Component {
  render() {
    const { title } = this.props.navigation.state.params
    
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
});
