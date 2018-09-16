import React from 'react';
import Header from './../Header'

const QuizScore = ({
  score,
  questionsLength
}) => (
  <Header
    title="Finished"
    subtitle={`${score} correct questions from ${questionsLength}`}
  />
)

export default QuizScore