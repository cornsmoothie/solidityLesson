//import Web3 from 'web3';


var ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//got this from JSON.stringify(People.abi)
//var contractABI = '[{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
var contractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

//got this from People.address
//this changes every time you do truffle migrate
var contractAddress = '0x976a661bc975d871f47a973fc3fa1f160c55bf6b';

//Now you can use this thing like you used the thing in the truffle console
var peopleContract = ethClient.eth.contract(contractABI).at(contractAddress);

// var peopleContract = ethClient.eth.contract(contractABI , contractAddress);
// var peopleContract = new .eth.Contract(contractABI);

//This makes it so we don't have to define the account that we will be using for the transaction every time
//It will just use the first account on the testrpc for everything
ethClient.eth.defaultAccount = ethClient.eth.accounts[0]


//onload(test);
console.log("TESTING");

var list = document.getElementById("peopleList");
console.log(list);

document.onkeypress = getPeople();

// test();
//getPeople();


function getAccounts(){

}

function getPeople(){
    var allPeople = peopleContract.getPeople();
    var length = allPeople[0].length;

    for(var i = 0; i < length; i++){
        var list = document.getElementById("peopleList");
        console.log(list);
        var listItem = document.createElement("li");
        console.log(String(allPeople[0][0]));
        // listItem.textContent = String(allPeople[0][i]);
        // list.appendChild(listItem);
    }
}

function addPerson(){

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