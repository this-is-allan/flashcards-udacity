import React from 'react'
import { create } from 'react-test-renderer'

import DeckShow from './'

describe('DeckShow', () => {
  const onPressDeleteDeck = jest.fn();
  const onPressStartQuiz = jest.fn();
  const navigation = jest.fn();
  const tree = create(
    <DeckShow
      deckEmpty={false}
      onPressDeleteDeck={onPressDeleteDeck}
      onPressStartQuiz={onPressStartQuiz}
      navigation={navigation}
    />
  );

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});