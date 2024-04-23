import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle.styled';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="reel-reveal__front">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
