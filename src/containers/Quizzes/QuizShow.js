import _ from 'lodash'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, deckFetch} from './../../actions/decks'
import { Ionicons } from '@expo/vector-icons';
import CardFlip from 'react-native-card-flip';
import { clearLocalNotification } from '../../util/notifications'
import { white } from '../../config/colors';
import QuizScore from '../../components/QuizScore/QuizScore';

const CountSteps = ({currentQuestion, questionsLength}) => (
	<Text style={styles.quizTrack}>{currentQuestion+1}/{questionsLength}</Text>
)

class QuizShow extends Component {
	state = {
		currentQuestion: 0,
		questionsLength: 0,
		score: 0,
		showAnswer: false,
		cardFlipped: false,
	}

	componentDidMount = () => {
		this.setState({ questionsLength: this.props.deck.questions.length})
		// clearLocalNotification()
	};
	
	
	onPressNext = (correct) => {
		correct && this.setState({ score: this.state.score + 1 })

		if (this.state.cardFlipped === true) {
			this.card.flip()
		}

		setTimeout(() => {
			this.setState({
				showAnswer: false,
				currentQuestion: ++this.state.currentQuestion,
			})
		}, 200);
	}
	
	render() {
		const { questions } = this.props.deck
		let {
			currentQuestion,
			questionsLength,
			score,
			showAnswer,
		} = this.state

		if (currentQuestion === questionsLength) {
			return (
				<View style={styles.container}>
					<QuizScore score={score} questionsLength={questionsLength} />
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<CountSteps currentQuestion={currentQuestion} questionsLength={questionsLength} />

				<CardFlip onFlip={() => this.setState({ showAnswer: true })} style={styles.cardContainer} ref={(card) => this.card = card} >
					<TouchableOpacity style={styles.card} onPress={() => {this.setState({cardFlipped: true}); this.card.flip()}} ><Text style={styles.cardText}>{questions[currentQuestion].question}</Text></TouchableOpacity>
					<TouchableOpacity style={styles.card} onPress={() => {this.setState({cardFlipped: false}); this.card.flip()}} ><Text style={styles.cardText}>{questions[currentQuestion].answer}</Text></TouchableOpacity>
				</CardFlip>

				<Button disabled={!showAnswer} title='Correct' color='green' onPress={() => this.onPressNext(true)} />
				<Button disabled={!showAnswer} title='Incorrect' color='red' onPress={() => this.onPressNext(false)} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
	},
  cardContainer:{
    width: 320,
		height: 470,
  },
  card:{
		display: 'flex',
		justifyContent: 'center',
    width: 320,
		height: 470,
		padding: 30,
    backgroundColor: white,
    borderRadius: 5,
		shadowColor: 'rgba(0,0,0,.15)',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity:0.5,
	},
	cardText: {
		fontSize: 18,
		textAlign: 'center',
	},
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
	},
	quizTrack: {
		color: '#7f8fa6',
	}
});

mapStateToProps = ({deck}) => {
  return {
    deck: deck.deck
  }
}

mapDispatchToProps = dispatch => {
  return {
    deckFetch: id => dispatch(deckFetch(id)),
    deleteDeck: (deck, callback) => dispatch(removeDeck(deck, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow);