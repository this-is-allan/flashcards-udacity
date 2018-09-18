import React from "react";

import { Sector } from "../../config/theme";

import Header from "../../components/Header";
import ListDeck from "../../containers/Decks/ListDeck";

const HomeScreen = ({ navigation }) => (
  <Sector>
    <Header title="Welcome" subtitle="Memorize anything" />

    <ListDeck navigation={navigation} />
  </Sector>
);

export default HomeScreen;
