import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//got this from JSON.stringify(People.abi)
//var contractABI = '[{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
var contractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

//got this from People.address
var contractAddress = '0xf6723a8f508f2f34839e26f3d0a7db105ee92e86';

//Now you can use this thing like you used the thing in the truffle console
var peopleContract = ethClient.eth.contract(contractABI).at(contractAddress);

// var peopleContract = ethClient.eth.contract(contractABI , contractAddress);
// var peopleContract = new .eth.Contract(contractABI);


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: []
    }
  }

  //called right before it's mounted onto the screen
  componentWillMount() {
    console.log("We made it I think");
    //console.log(ethClient);
    //console.log(peopleContract);
    console.log(ethClient.eth.accounts); //this would grab metamask accounts
    var data = peopleContract.getPeople();
    //var data = peopleContract.then(a => a.getPeople());
    this.setState({
      firstNames: String(data[0]).split(','),
      lastNames: String(data[1]).split(','),
      ages: String(data[2]).split(',')
      // lastNames: data[1],
      // ages: data[2]
    })
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
        <div className="App-content">
          <pre>{this.state.firstNames}</pre>
          <pre>{this.state.lastNames}</pre>
          <pre>{this.state.ages}</pre>
        </div>
      </div>
    );
  }
}

export default App;
