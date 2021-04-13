import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Header(props) {
  return <StyledHeader>{props.children}</StyledHeader>;
}
