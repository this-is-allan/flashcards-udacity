import React from 'react'
import { create } from 'react-test-renderer'

import Welcome from './'

describe('Welcome', () => {
  const tree = create(<Welcome />);

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
})