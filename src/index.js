import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import SerchBox from './components/SearchBox';
import AppImages from './apps/AppImages';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <AppImages />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
