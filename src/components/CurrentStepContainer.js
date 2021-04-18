import React from 'react';
import styled from 'styled-components';
import { appWidth } from '../assets/styleVariables';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${appWidth};
`;

export default function CurrentStepContainer(props) {
  return <Section>{props.children}</Section>;
}
