const Moonbeam = artifacts.require("MoonbeamToken");

module.exports = function(deployer) {
  deployer.deploy(Moonbeam, 100000);
};
