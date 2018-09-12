import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizScore = ({
  score,
  questionsLength
}) => (
  <View>
    <Text style={styles.title}>Finished!</Text>
    <Text style={styles.subtitle}>{score} correct questions from {questionsLength}</Text>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ED4E5F'
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center'
  }
})

export default QuizScore