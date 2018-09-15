import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListDeck from '../../containers/Decks/ListDeck'
import Welcome from '../../components/Welcome';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <ListDeck navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
});
