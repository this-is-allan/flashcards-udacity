import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const PrimaryButton = ({
  title,
  onPress
}) => (
  <View>
    <Button
      onPress={onPress}
      title={title}
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