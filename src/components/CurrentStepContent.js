import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown-select';
import { data } from '../assets/data';
import { days } from '../assets/helpers';
import {
  active,
  activeTransparent,
  background as appBackground,
  borderRadius,
  font,
  fontColor,
} from '../assets/styleVariables';
let { subjects, gradeLevels, buttons } = data;
export default function CurrentStepContent(props) {
  let { currentStep, setCurrentStep, setSelection, selection } = props;
  let [state, setState] = useState({
    buttonDisabled: true,
    morning: true,
  });

  let determineButtonStatus = (newSelection) => {
    let { subject, gradeLevel, day, date, time } = newSelection;
    let shouldButtonStayDisabled = true;
    switch (currentStep.id) {
      case 1:
        shouldButtonStayDisabled = !(subject && gradeLevel);
        break;
      case 2:
        shouldButtonStayDisabled = !(day && time && date);
        break;
      case 3:
        shouldButtonStayDisabled = true;
        break;
      default:
        shouldButtonStayDisabled = true;
    }

    setState({
      buttonDisabled: shouldButtonStayDisabled,
    });
  };

  let handleDropdownChanges = (key, value) => {
    //setSelection won't be done updating state in time, so pass the data long to determineButtonStatus as well.
    console.log(key, value);
    let newSelection = { ...selection, [key]: value };
    console.log({ newSelection });
    setSelection(key, value);
    determineButtonStatus(newSelection);
  };

  let handleNext = () => {
    setCurrentStep(currentStep.id + 1);
    setState({ ...state, buttonDisabled: true });
  };

  let NextButton = ({ disabled }) => {
    return (
      <StyledButton disabled={disabled} onClick={handleNext}>
        {buttons.next}
      </StyledButton>
    );
  };

  let renderDayOption = ({ item: day, methods: { addItem } }) => {
    return (
      <DayOption
        key={day.text}
        onClick={() => {
          addItem({ label: `${day.number} - ${day.text}`, value: day.text }); // updates dropdown
          handleDropdownChanges('day', day.text); //updates state to manage Next button
          handleDropdownChanges('date', day.number); //updates state to manage Next button
        }}
      >
        <div className="number">{day.number}</div>
        <div>{day.text}</div>
      </DayOption>
    );
  };

  let TimeSelection = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 60vw;
    margin-bottom: 10px;
    ${font};
  `;

  let TimeInput = styled.input`
    max-width: 20%;
    background-color: ${activeTransparent};
    border: 2px solid ${fontColor};
    border-radius: 0.25rem;
    text-align: center;
    color: fontColor;
    fontsize: 1.5rem;
    margin: 0 2px;
  `;

  let displayContentForCurrentStep = () => {
    switch (currentStep.id) {
      case 1:
        return (
          <Step1>
            <StyledDropdown
              searchable={false}
              options={subjects.map((sub) => ({ label: sub, value: sub }))}
              placeholder="Select a subject"
              onChange={(option) => {
                console.log(option[0].label);
                handleDropdownChanges('subject', option[0].label);
              }}
            />
            <StyledDropdown
              searchable={false}
              options={gradeLevels.map((grade) => ({
                label: grade,
                value: grade,
              }))}
              placeholder="Select a grade level"
              onChange={(option) =>
                handleDropdownChanges('gradeLevel', option[0].label)
              }
            />
            <NextButton disabled={state.buttonDisabled} />
          </Step1>
        );
      case 2:
        return (
          <Step2>
            <StyledDropdown
              key={1}
              placeholder="Select a day"
              searchable={false}
              options={days()}
              itemRenderer={renderDayOption}
            />
            <TimeSelection>
              <div style={{ flexGrow: 1 }}>
                Please select a time in between 10AM and 10PM.
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  maxWidth: '100%',
                  alignItems: 'center',
                }}
              >
                <TimeInput type="text" placeholder="1" />
                <TimeInput type="text" placeholder="0" />
                <div
                  className="colon-container"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                  }}
                >
                  <div
                    className="top-dot"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: activeTransparent,
                      borderRadius: '50%',
                      border: `2px solid ${fontColor}`,
                    }}
                  ></div>
                  <div
                    className="bottom-dot"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: activeTransparent,
                      borderRadius: '50%',
                      border: `2px solid ${fontColor}`,
                    }}
                  ></div>
                </div>
                <TimeInput type="text" placeholder="0" />
                <TimeInput type="text" placeholder="0" />
                <span>{state.morning ? 'AM' : 'PM'}</span>
              </div>
            </TimeSelection>
            <NextButton disabled={state.buttonDisabled} />
          </Step2>
        );
      default:
        return null;
    }
  };

  return <Content>{displayContentForCurrentStep()}</Content>;
}

let Content = styled.div`
  display: flex;
  flex-direction: column;
`;
let StyledButton = styled.button`
  height: 30px;
  background: ${active};
  border: 2px solid ${fontColor};
  border-radius: ${borderRadius};
  color: ${appBackground};
  box-shadow: 0px 5px 5px 0px rgba(35, 37, 50, 0.75);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(35, 37, 50, 0.75);
  -moz-box-shadow: 0px 5px 5px 0px rgba(35, 37, 50, 0.75);
  &:disabled {
    background: ${activeTransparent};
    box-shadow: none;
    color: ${activeTransparent};
    border-color: ${activeTransparent};
  }
`;
let Step1 = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
let Step2 = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
let StyledDropdown = styled(Dropdown)`
  &.react-dropdown-select {
    padding: 0;
    background-color: ${activeTransparent};
    ${font};
    font-weight: 400;
    margin: 10px 0;
    border-radius: ${borderRadius};
    border: 2px solid ${fontColor};
    color: ${fontColor};
    &:focus,
    &:focus-within,
    &:hover {
      border: 2px solid ${fontColor};
      outline: none;
    }

    .react-dropdown-select-dropdown {
      min-width: fit-content;
      padding: 10px 0;
      max-height: 200px;
      overflow-y: scroll;
    }
  }
`;
let dayOptionWidth = '2rem';
let DayOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: fit-content;
  &:hover {
    background: ${activeTransparent};
  }
  & .number {
    border: 3px solid ${fontColor};
    border-radius: 50%;
    min-width: ${dayOptionWidth};
    max-width: ${dayOptionWidth};
    height: ${dayOptionWidth};
    padding: 3px;
    margin: 0 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
