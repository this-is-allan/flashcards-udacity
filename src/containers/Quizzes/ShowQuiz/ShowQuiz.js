import _ from "lodash";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CardFlip from "react-native-card-flip";

import { removeDeck, deckFetch } from "../../../actions/decks";
import { clearLocalNotification } from "../../../util/notifications";

import QuizScore from "../../../components/QuizScore/QuizScore";
import PrimaryButton from "../../../components/Buttons/Primary";

const CountSteps = ({ currentQuestion, questionsLength }) => (
  <QuizTrack>
    {currentQuestion + 1}/{questionsLength}
  </QuizTrack>
);

class ShowQuiz extends PureComponent {
  state = {
    currentQuestion: 0,
    questionsLength: 0,
    score: 0,
    showAnswer: false,
    cardFlipped: false
  };

  componentDidMount = () => {
    this.setState({ questionsLength: this.props.deck.questions.length });
    clearLocalNotification();
  };

  onPressNext = correct => {
    correct && this.setState({ score: this.state.score + 1 });

    if (this.state.cardFlipped === true) {
      this.card.flip();
    }

    setTimeout(() => {
      this.setState({
        showAnswer: false,
        currentQuestion: ++this.state.currentQuestion
      });
    }, 200);
  };

  render() {
    const { questions } = this.props.deck;
    let { currentQuestion, questionsLength, score, showAnswer } = this.state;

    if (currentQuestion === questionsLength) {
      return (
        <Container>
          <QuizScore score={score} questionsLength={questionsLength} />
        </Container>
      );
    }

    return (
      <Container>
        <CountSteps
          currentQuestion={currentQuestion}
          questionsLength={questionsLength}
        />

        <CardFlip
          onFlip={() => this.setState({ showAnswer: true })}
          style={{ width: 320, height: 470 }}
          ref={card => (this.card = card)}
        >
          <CardFace
            onPress={() => {
              this.setState({ cardFlipped: true });
              this.card.flip();
            }}
          >
            <CardContent>{questions[currentQuestion].question}</CardContent>
          </CardFace>

          <CardFace
            onPress={() => {
              this.setState({ cardFlipped: false });
              this.card.flip();
            }}
          >
            <CardContent>{questions[currentQuestion].answer}</CardContent>
          </CardFace>
        </CardFlip>

        <ContainerHorizontal>
          <PrimaryButton
            title="Correct"
            onPress={() => this.onPressNext(true)}
            disabled={!showAnswer}
            color="green"
          />

          <PrimaryButton
            title="Incorrect"
            onPress={() => this.onPressNext(false)}
            disabled={!showAnswer}
          />
        </ContainerHorizontal>
      </Container>
    );
  }
}

const QuizTrack = styled.Text`
  color: #7f8fa6;
`;

const ContainerHorizontal = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
`;

const CardFace = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 320px;
  height: 470px;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.15);
`;

const CardContent = styled.Text`
  font-size: 18px;
  text-align: center;
`;

mapStateToProps = ({ deck }) => ({
  deck: deck.deck
});

mapDispatchToProps = dispatch => ({
  deckFetch: id => dispatch(deckFetch(id)),
  deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowQuiz);
