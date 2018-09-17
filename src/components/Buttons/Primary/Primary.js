import React from 'react';
import styled from 'styled-components/native';
import Button from 'react-native-buttonex'


const PrimaryButton = ({
  title,
  onPress,
  disabled
}) => (
  <Container>
    <Button
      title={title}
      disabled={disabled}
      onPress={() => onPress()}
      noBackground
      bordered
      color="#ed4e5f"
    />
  </Container>
)

const Container = styled.View `
  margin: 5px 0;
`

export default PrimaryButton