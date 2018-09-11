import React from 'react'
import { create } from 'react-test-renderer'

import DeckListItem from './'

describe('DeckListItem', () => {
  const tree = create(
    <DeckListItem
      title="React"
      length={2}
    />
  );

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
