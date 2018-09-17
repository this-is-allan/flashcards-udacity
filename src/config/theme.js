import styled from 'styled-components/native';

export const light = {
  backgroundColor: '#fff',
}

export const dark = {
  backgroundColor: '#000',
}

export const Sector = styled.View `
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
`;