const PrivateKeyProvider = require("./private-provider");
// Standalone Development Node Private Key
const privateKeyDev =
  "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";
// Moonbase Alpha Private Key --> Please change this to your own Private Key with funds
const privateKeyMoonbase =
  "e674d6b83f7263faa4279035728a4ead3162863034f3b4090e767f2ef0a67ea5";

module.exports = {
  networks: {
    dev: {
      provider: () => {
        if (!privateKeyDev.trim()) {
          throw new Error(
            "Please enter a private key with funds, you can use the default one"
          );
        }
        return new PrivateKeyProvider(
          privateKeyDev,
          "http://localhost:44433/",
          43
        );
      },
      network_id: 43
    },
    moonbase: {
      provider: () => {
        if (!privateKeyMoonbase.trim()) {
          throw new Error(
            "Please enter a private key with funds to send transactions to TestNet"
          );
        }
        if (privateKeyDev == privateKeyMoonbase) {
          throw new Error(
            "Please change the private key used for Moonbase to your own with funds"
          );
        }
        return new PrivateKeyProvider(
          privateKeyMoonbase,
          "https://rpc.testnet.moonbeam.network",
          43
        );
      },
      network_id: 43
    }
  },

  plugins: ["moonbeam-truffle-plugin"]
};
