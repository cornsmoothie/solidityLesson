import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

//Now you can use this thing like you used the thing in the truffle console
var ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//People.deployed().then(a => console.log(a.getPeople().then(console.log)))

class App extends Component {

  //called right before it's mounted onto the screen
  componentWillMount() {
    console.log("We made it I think");
    console.log(ethClient);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
