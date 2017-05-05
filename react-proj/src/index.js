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
);*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), age: 18 };
  }

  componentDidMount() {
    console.log('Clock mounted....');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('Clock unmounted....');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      // age: Math.random()
    })
    // console.info(this.state);
    
    //not working
    // this.state.date = new Date();
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>{this.state.age}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <div><Clock id="xxx" /><button onClick={testHandler}>test</button></div>,
  document.getElementById('root')
);

function testHandler(evt){
  console.log('test button clicked...');
}


/*var testArg = 1;
var Element = function (props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.testProp}.</h2>
    </div>
  )
};*/

// function tick() {
//   // testArg++;
//   // console.log(testArg);
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

/*function Welcome(props) {
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
}*/

// console.log("222");
// const element = <Welcome person={tempProp} age={"19"} />;
// console.log("333");
// ReactDOM.render(
//   <Shell />,
//   document.getElementById('root')
// );
