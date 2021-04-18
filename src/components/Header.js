import React from 'react';
import styled from 'styled-components';
import { appWidth } from '../assets/styleVariables';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${appWidth};
`;

export default function Header(props) {
  return <StyledHeader>{props.children}</StyledHeader>;
}
