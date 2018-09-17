import React from 'react'
import { create } from 'react-test-renderer'

import QuizScore from './'

describe('QuizScore', () => {
  const tree = create(
    <QuizScore
      score={40}
    />
  );

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});