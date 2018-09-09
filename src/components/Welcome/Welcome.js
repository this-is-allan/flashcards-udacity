import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Welcome!</Text>
    <Text style={styles.subtitle}>Memorize anything</Text>
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

export default Welcome