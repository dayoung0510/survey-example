import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Intro1 from 'pages/Intro1';
import Intro2 from 'pages/Intro2';
import Survey from 'pages/Survey';
import Result from 'pages/Result';
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
    <BrowserRouter>
      <GlobalStyle />
      <Bg className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Intro1 />} />
            <Route path="/agree" element={<Intro2 />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Container>
      </Bg>
    </BrowserRouter>
  );
};

export default App;
