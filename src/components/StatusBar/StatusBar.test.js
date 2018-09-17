import React from 'react';
import { create } from 'react-test-renderer';
import StatusBar from './';

describe('StatusBar', () => {
  const tree = create(<StatusBar backgroundColor="#fff" />);
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});