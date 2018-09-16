import React, { Component } from 'react';
import { View } from 'react-native';
import { Sector} from '../../config/theme';

import Header from '../../components/Header';
import ListDeck from '../../containers/Decks/ListDeck'

export default class HomeScreen extends Component {
  render() {
    return (
      <Sector>
        <Header title="Welcome" subtitle="Memorize anything" />

        <ListDeck navigation={this.props.navigation} />
      </Sector>
    );
  }
}