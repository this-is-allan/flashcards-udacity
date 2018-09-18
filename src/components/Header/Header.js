import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 32px;
  color: #ed4e5f;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: #ed4e5f;
  padding-bottom: 10px;
`;

const Container = styled.View``;

const Header = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
