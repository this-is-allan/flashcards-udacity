import React from 'react';
import { create } from 'react-test-renderer';

import TextInputField from './';

describe('TextInputField', () => {
  const onChangeText = jest.fn();
  const tree = create(
    <TextInputField
    placeholder="something"
    maxLength={30}
    label="Enter something"
    onChangeText={onChangeText}
    />
  );
  
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot()
  });
});