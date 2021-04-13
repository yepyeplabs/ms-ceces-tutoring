import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 30px;
`;

export default function Layout(props) {
  return <StyledLayout>{props.children}</StyledLayout>;
}

/*
@mixin font-thick{
  font-weight: 400;
}
@mixin font-thin {
  font-weight: 100;
}
@mixin centerContents {
  display: flex;
  justify-content: center;
  align-items: center;
}





*/
