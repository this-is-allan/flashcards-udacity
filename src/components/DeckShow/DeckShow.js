import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import PrimaryButton from "../Buttons/Primary";

const DeckShow = ({
  deckEmpty,
  onPressDeleteDeck,
  onPressStartQuiz,
  navigation
}) => (
  <View>
    <PrimaryButton
      title="Start"
      disabled={deckEmpty}
      onPress={() => onPressStartQuiz()}
    />

    <PrimaryButton
      title="Add card"
      onPress={() => navigation.navigate("CreateQuiz")}
    />

    <PrimaryButton title="Delete deck" onPress={() => onPressDeleteDeck()} />
  </View>
);

DeckShow.propTypes = {
  deckEmpty: PropTypes.bool.isRequired,
  onPressStartQuiz: PropTypes.func.isRequired,
  onPressDeleteDeck: PropTypes.func.isRequired
};

export default DeckShow;
