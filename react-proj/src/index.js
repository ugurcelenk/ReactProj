import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*ReactDOM.render(
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
  setInterval(tick, 1000);
}*/

function Welcome(props) {
  console.log(typeof props.age);
  // return <div><h1>Hello, {props.person.name}</h1><div>{props.person.age}</div></div>;
  return <div><h1>Hello, {props.person.name}</h1><div>{props.age}</div></div>;
}

var tempProp = {
  name: "Sara",
  age: 18
}

function Shell() {
  return (
    <div>
      <Welcome person={tempProp} age={"19"} />
      <Welcome person={tempProp} age={"18"} />
      <Welcome person={tempProp} age={"17"} />
    </div>)
}

// console.log("222");
// const element = <Welcome person={tempProp} age={"19"} />;
// console.log("333");
ReactDOM.render(
  <Shell />,
  document.getElementById('root')
);
