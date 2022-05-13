import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style.js'
import IconfontStyle from './statics/iconfont/iconfont'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </React.StrictMode>
);
