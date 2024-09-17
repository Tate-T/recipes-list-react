import React from 'react';
import App from './App'
import ReactDOM from 'react-dom/client';

import {GlobalStyles} from './components/GlobalStyle/GlobalStyle'
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);


