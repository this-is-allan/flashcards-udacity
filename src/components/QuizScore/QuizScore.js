import React from 'react';
import { View, Text } from 'react-native'

const QuizScore = ({
  score
}) => (
  <View>
    <Text>Finished!</Text>
    <Text>Score: {score}</Text>
  </View>
)

export default QuizScore