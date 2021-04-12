import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';
import CurrentStepContainer from './components/CurrentStepContainer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <ProgressIndicator></ProgressIndicator>
        <CurrentStepContainer></CurrentStepContainer>
      </Layout>
    </div>
  );
}

export default App;
