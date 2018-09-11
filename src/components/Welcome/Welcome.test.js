import React from 'react'
import { create } from 'react-test-renderer'

import Welcome from './'

describe('Welcome', () => {
  it('renders correctly', () => {
    const tree = create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})