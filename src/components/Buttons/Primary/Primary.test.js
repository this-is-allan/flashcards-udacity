import React from 'react';
import { create } from 'react-test-renderer';

import PrimaryButton from './';

describe('PrimaryButton', () => {
  const onPress = jest.fn();
  const tree = create(<PrimaryButton title={'Something'} onPress={onPress} />);
  
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    tree.root.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});