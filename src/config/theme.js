import styled from "styled-components/native";

export const theme = {
  backgroundColor: "#fff"
};

export const Sector = styled.View`
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
`;

export default theme;
