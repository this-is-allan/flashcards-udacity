import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from '../../components/DeckList'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList navigation={this.props.navigation} />
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
