pragma solidity ^0.4.18;


contract People {

    Person[] public people;

    struct Person {
        // string firstName;
        // string lastName;
        bytes32 firstName;
        bytes32 lastName;
        uint age;
    }

    function addPerson(bytes32 _firstName, bytes32 _lastName, uint _age) returns (bool success) {

        Person memory newPerson;

        newPerson.firstName = _firstName;
        newPerson.lastName= _lastName;
        newPerson.age= _age;

        //this pushes it onto the array
        //at this point we are changing state so this will cost $$
        //goes from memory to blockchain
        people.push(newPerson);
    }

    //because strings can't be of varying length in an array on the blockchain, we have to use byte32 arrays
    //returns firstNames , lastNames , ages
    //constant means the blockchain won't change aka no $$$
    function getPeople() constant returns (bytes32[], bytes32[] , uint[]) {

        uint length = people.length;

        bytes32[] memory firstNames = new bytes32[](length);
        bytes32[] memory lastNames = new bytes32[](length);
        uint[] memory ages = new uint[](length);

        for(uint i =0; i < people.length; i++) {

           Person memory currentPerson;
           currentPerson = people[i];

        //    firstNames.push(currentPerson.firstName);
        //    lastNames.push(currentPerson.lastName);
        //    ages.push(currentPerson.age);
            firstNames[i] = currentPerson.firstName;
            lastNames[i] = currentPerson.lastName;
            ages[i] = currentPerson.age;
        }
        return (firstNames , lastNames , ages);
    }
    
}