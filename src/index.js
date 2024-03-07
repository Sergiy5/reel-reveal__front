import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import './index.css';
import GlobalStyle from 'components/style/GlobalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="reel-reveal__front">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
