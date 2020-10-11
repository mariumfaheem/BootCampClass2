import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //sirf file h islye 
import App from './App.jsx'; //App file se App function import horha h
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//component,html render place
//konsa rednder krwana h or dosra kahan krwana h root ki id humne ublic index.html m de hue thi
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
