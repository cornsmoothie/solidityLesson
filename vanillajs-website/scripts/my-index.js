// import Web3 from 'web3';
// import Web3 from './package.json';
// var Web3 = require('web3');

window.onload = init;

var ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//got this from JSON.stringify(People.abi)
//var contractABI = '[{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
// var contractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var contractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];


//got this from People.address
//this changes every time you do truffle migrate
var contractAddress = '0xf01d3a2c93a89bf4de801932c96656ea23da2e7b';

//Now you can use this thing like you used the thing in the truffle console
var peopleContract = ethClient.eth.contract(contractABI).at(contractAddress);

// var peopleContract = ethClient.eth.contract(contractABI , contractAddress);
// var peopleContract = new .eth.Contract(contractABI);

//This makes it so we don't have to define the account that we will be using for the transaction every time
//It will just use the first account on the testrpc for everything
// ethClient.eth.defaultAccount = ethClient.eth.accounts[0];
ethClient.eth.defaultAccount = '0xab9c4bd2330930b4b0287b0a2e57c089b4d67841';
// console.log(ethClient.eth.accounts[0]);
// ethClient.eth.getAccounts((error, accounts) => {
//     if (error) {
//       console.log(error)
//       return
//     }
//     ethClient.eth.defaultAccount = accounts[0];
// })

//onload(test);
console.log("TESTING");

var list = document.getElementById("peopleTable");
console.log(list);
var currentNum = 0;

function init() {
    document.getElementById("refreshButton").addEventListener("click" , getPeople);
    document.getElementById("submitButton").addEventListener("click" , addPerson);
    getPeople();
}

// test();
//getPeople();


function getAccounts(){

}

function testFunction() {
    console.log("Made it to test function");
}


function getPeople(){
    var allPeople = peopleContract.getPeople();
    var length = allPeople[0].length;

    for(var i = currentNum;  i < length; i++){
        var table = document.getElementById("peopleTable");
        var tableRow = document.createElement("tr");
        tableRow.appendChild(document.createElement("td")).textContent = ethClient.toAscii(String(allPeople[0][i]));
        tableRow.appendChild(document.createElement("td")).textContent = ethClient.toAscii(String(allPeople[1][i]));
        tableRow.appendChild(document.createElement("td")).textContent = (String(allPeople[2][i]));
        table.appendChild(tableRow);
        currentNum++;
    }
}

function addPerson(){
    console.log(document.getElementById("firstNameInput").value);
    peopleContract.addPerson(String(document.getElementById("firstNameInput").value) , String(document.getElementById("lastNameInput").value) , document.getElementById("ageInput").value); 
    // peopleContract.addPerson("Testing" , "Name" , 100);
    getPeople();
}

function test(){
    console.log("We made it I think");
    // console.log(ethClient.eth.accounts); //this would grab metamask accounts
    var data = peopleContract.getPeople();
    // console.log(data)
    // console.log(peopleContract.addPerson.estimateGas("Crayon" , "Crayons4566" , 455));
    // console.log(data);
    console.log(data[0]);
}