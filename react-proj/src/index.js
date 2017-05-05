import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <div>root2 test</div>,
  document.getElementById('root2')
);

var testArg = 1;
var element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {testArg}.</h2>
  </div>
);

function tick() {
  testArg++;
  console.log(testArg);
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);