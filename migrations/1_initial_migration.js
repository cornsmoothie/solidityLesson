var Migrations = artifacts.require("./Migrations.sol");
var People = artifacts.require("./People.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(People);
};
