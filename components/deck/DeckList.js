import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { fetchDecks } from '../../util/storageApi';

export default class DeckList extends Component {
  state = {
    items: []
  }
  
  componentDidMount() {
    fetchDecks().then(items => this.setState({ items }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <FlatList
          data={Object.values(this.state.items)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
