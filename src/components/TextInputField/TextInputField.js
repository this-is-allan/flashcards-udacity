import React from 'react';
import { Text, View, TextInput } from 'react-native';

const TextInputField = ({
  fieldLabel,
  maxLength,
  placeholder,
  autoFocus,
  onChangeText,
}) => (
  <View>
    <Text>{fieldLabel}</Text>
    <TextInput
      style={{ height: 40 }}
      placeholder={placeholder}
      maxLength={maxLength}
      selectionColor = '#ED4E5F'
      autoCorrect={false}
      autoFocus={autoFocus}
      keyboardType="default"
      onChangeText={onChangeText}
    />
  </View>
)

export default TextInputField