import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Example } from './Example';
import { Person } from './person';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Example />
    <Person></Person>
  </React.StrictMode>
);


reportWebVitals();
