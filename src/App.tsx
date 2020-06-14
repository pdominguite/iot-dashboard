import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv';
import Routes from './routes';

import GlobalStyle from './styles/global';

dotenv.config();

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
