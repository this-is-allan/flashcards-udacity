import _ from 'lodash'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, deckFetch} from './../../actions/decks'
import { Ionicons } from '@expo/vector-icons';
import CardFlip from 'react-native-card-flip';
import { clearLocalNotification } from '../../util/notifications'

class QuizShow extends Component {
	state = {
		currentQuestion: 0,
		questionsLength: 0,
		correctQuestions: 0,
		showAnswer: false,
		cardFlipped: false,
	}

	componentDidMount = () => {
		this.setState({ questionsLength: this.props.deck.questions.length})
		// clearLocalNotification()
	};
	
	
	onPressNext = (correct) => {
		correct && this.setState({ correctQuestions: this.state.correctQuestions + 10 })

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
			correctQuestions,
			showAnswer,
		} = this.state

		if (currentQuestion === questionsLength) {
			return (
				<View>
					<Text>Terminou</Text>
					<Text>Pontos: {correctQuestions}</Text>
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<Text>{currentQuestion+1}/{questionsLength}</Text>

				
				<CardFlip onFlip={() => this.setState({ showAnswer: true })} style={styles.cardContainer} ref={(card) => this.card = card} >
					<TouchableOpacity style={styles.card} onPress={() => {this.setState({cardFlipped: true}); this.card.flip()}} ><Text>{questions[currentQuestion].question}</Text></TouchableOpacity>
					<TouchableOpacity style={styles.card} onPress={() => {this.setState({cardFlipped: false}); this.card.flip()}} ><Text>{questions[currentQuestion].answer}</Text></TouchableOpacity>
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
    backgroundColor: '#F5FCFF',
	},
  cardContainer:{
    width: 320,
		height: 470,
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
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