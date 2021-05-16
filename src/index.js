import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionalComponent from './functional';
import ClassComponent from './classcompo';
import AsyncAwait from './asyncawait';
import Examplesofes6 from './ES6';
import ExampleforPromises from './Promises';

ReactDOM.render(
  <React.StrictMode>
    <ExampleforPromises/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
