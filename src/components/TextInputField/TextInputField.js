import React from 'react';
import styled from 'styled-components/native'
import { View } from 'react-native';

const Label = styled.Text ``;

const Input = styled.TextInput `
  height: 40;
`

const TextInputField = ({
  label,
  maxLength,
  placeholder,
  autoFocus,
  value,
  onChangeText,
}) => (
  <View>
    <Label>{label}</Label>
    <Input
      placeholder={placeholder}
      maxLength={maxLength}
      selectionColor = '#ED4E5F'
      autoCorrect={false}
      autoFocus={autoFocus}
      keyboardType="default"
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
      clearButtonMode="always"
    />
  </View>
)

export default TextInputField