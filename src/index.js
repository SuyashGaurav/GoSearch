import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';  //to get access of context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
  </ResultContextProvider>
);