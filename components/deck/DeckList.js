import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { fetchDecks } from '../../util/storageApi';

import DeckListItem from './DeckListItem';

export default class DeckList extends Component {
  state = {
    items: []
  }
  
  componentDidMount() {
    fetchDecks().then(items => this.setState({ items }))
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('DeckShow', item)}>
        <DeckListItem
          id={item.id}
          title={item.title}
          length={item.questions.length}
        />
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(this.state.items)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});
