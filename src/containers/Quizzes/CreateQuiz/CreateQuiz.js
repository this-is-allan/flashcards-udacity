import { isEmpty } from "lodash";
import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { newCard } from "../../../actions/quiz";
import { deckFetch } from "../../../actions/decks";
import { Sector } from "../../../config/theme";

import TextInputField from "../../../components/TextInputField";
import PrimaryButton from "../../../components/Buttons/Primary";

class CreateQuiz extends Component {
  state = {
    question: "",
    answer: ""
  };

  verifyFormFill = () => {
    let { question, answer } = this.state;
    return isEmpty(question) || isEmpty(answer);
  };

  onPressCreateQuestion = () => {
    let card = this.state;
    const { title } = this.props.deck;

    this.props.addQuestion(card, title, () => {
      this.props.deckFetch(title);
      this.setState({
        question: "",
        answer: ""
      });

      Alert.alert(
        "Success!",
        "The question was created successfully!",
        [{ text: "Ok" }],
        { cancelable: false }
      );
    });
  };

  render() {
    let { question, answer } = this.state;
    return (
      <Sector>
        <TextInputField
          label="Enter a question for your new card:"
          onChangeText={question => this.setState({ question })}
          value={question}
          placeholder="Type a question"
          autoFocus
        />

        <TextInputField
          label="Enter an answer for your new card:"
          onChangeText={answer => this.setState({ answer })}
          value={answer}
          placeholder="Type a answer"
        />

        <PrimaryButton
          title="Add Question"
          onPress={this.onPressCreateQuestion}
          disabled={this.verifyFormFill()}
        />
      </Sector>
    );
  }
}

const mapStateToProps = ({ deck }) => ({
  deck: deck.deck
});

const mapDispatchToProps = dispatch => ({
  deckFetch: deckName => dispatch(deckFetch(deckName)),
  addQuestion: (card, deckName, callback) =>
    dispatch(newCard(card, deckName, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuiz);
