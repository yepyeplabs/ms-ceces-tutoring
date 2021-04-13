import React from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';
import CurrentStepContainer from './components/CurrentStepContainer';
import { data } from './assets/data';

const font = 'font-family: Palanquin;';

const StyledH1 = styled.h1`
  ${font}
`;
const StyledH2 = styled.h2`
  ${font}
`;
const Text = styled.p`
  ${font}
`;

function App() {
  let { siteTitle, slogan, instructions } = data;
  return (
    <div className="App">
      <Layout>
        <Header>
          <StyledH1>{siteTitle}</StyledH1>
          <StyledH2>{slogan}</StyledH2>
          <Text>{instructions}</Text>
        </Header>
        <ProgressIndicator></ProgressIndicator>
        <CurrentStepContainer></CurrentStepContainer>
      </Layout>
    </div>
  );
}

export default App;
