import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './001/HelloWorld';
import Counter from './002/Counter';
import Todo from './003/Todo';
import Stopwatch from './004/Stopwatch';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Stopwatch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
