import React from 'react'
import { StyleSheet, View, Button } from 'react-native';

const PrimaryButton = ({
  title,
  onPress,
  disabled
}) => (
  <View>
    <Button
      onPress={onPress}
      title={title}
      disabled={disabled}
    />
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#ED4E5F',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#ED4E5F',
    paddingBottom: 10,
  }
});

export default PrimaryButton