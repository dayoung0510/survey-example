import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Intro from 'pages/Intro';
import Agree from 'pages/Agree';
import Survey from 'pages/Survey';
import Result from 'pages/Result';
import AppContext from './context';
import GlobalStyle from '../globalStyles';

const Bg = styled.div`
  background-color: #ffdfde;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  overflow: auto;
  max-width: 768px;
  min-width: 350px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100%;
  line-height: 1.7;
`;

const App: React.FC = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Bg className="App">
        <Container>
          <AppContext>
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </AppContext>
        </Container>
      </Bg>
    </HashRouter>
  );
};

export default App;
