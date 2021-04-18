import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';
import CurrentStepContainer from './components/CurrentStepContainer';
import CurrentStepContent from './components/CurrentStepContent';
import { data } from './assets/data';
import { font, primary } from './assets/styleVariables';
import solidArrowIcon from './assets/svg/solidArrow.svg';
import trail from './assets/svg/trail.svg';
import flag from './assets/svg/flag.svg';
import step1bg from './assets/svg/step1bg.svg';
import step2bg from './assets/svg/step2bg.svg';
import step3bg from './assets/svg/step3bg.svg';
import step4bg from './assets/svg/step4bg.svg';
import activeFlag from './assets/svg/activeFlag.svg';

let StyledH1 = styled.h1`
  ${font};
`;
let StyledH2 = styled.h2`
  ${font};
`;
let StyledH3 = styled.h3`
  ${font};
  margin-left: 2vw;
`;
let Text = styled.p`
  ${font};
`;

let Row = styled.div`
  display: flex;
  justify-content: spaced-between;
`;

let Icon = styled.img`
  max-width: 20px;
`;

let Flags = styled.div`
  width: 73%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

let ActiveFlag = styled.img`
  width: 8vw;
`;
let Flag = styled.img`
  width: 5vw;
`;

let Trail = styled.img`
  width: 100vw;
  margin-top: -14px;
`;

let Circle = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${primary};
  color: white;
`;

let { siteTitle, slogan, instructions, steps } = data;
function App() {
  let [state, setState] = useState({
    steps,
    currentStep: { ...steps[0], background: step1bg },
    selection: {},
    error: null, //TODO: implement more later if needed
  });
  let backgrounds = [step1bg, step2bg, step3bg, step4bg];
  let setCurrentStep = (stepID) => {
    if (stepID <= 4) {
      let newStep = state.steps.find((step) => step.id === stepID);
      setState({
        ...state,
        currentStep: newStep,
        background: backgrounds[newStep.id - 1],
      });
    }
  };
  let setSelection = (key, value) => {
    setState({
      ...state,
      selection: {
        ...state.selection,
        [key]: value,
      },
    });
  };

  return (
    <div className="App">
      <Layout>
        <Header>
          <StyledH1>{siteTitle}</StyledH1>
          <StyledH2>{slogan}</StyledH2>
          <Row>
            <Icon src={solidArrowIcon} alt="down arrow" />
            <Text>{instructions}</Text>
            <Icon src={solidArrowIcon} alt="down arrow icon" />
          </Row>
        </Header>
        <ProgressIndicator>
          <Flags>
            {state.steps.map((step) => {
              return step.id === state.currentStep.id ? (
                <ActiveFlag src={activeFlag} alt="flag" key={step.id} />
              ) : (
                <Flag src={flag} alt="flag" key={step.id} />
              );
            })}
          </Flags>
          <Trail src={trail} alt="trail" />
        </ProgressIndicator>
        <CurrentStepContainer>
          {/* 
         title
          */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Circle>{state.currentStep.id}</Circle>
            <StyledH3>{state.currentStep.title}</StyledH3>
          </div>
          {/* 
        content
          */}
          <CurrentStepContent
            currentStep={state.currentStep}
            setCurrentStep={setCurrentStep}
            setSelection={setSelection}
            selection={state.selection}
          />
        </CurrentStepContainer>
      </Layout>
    </div>
  );
}

export default App;
