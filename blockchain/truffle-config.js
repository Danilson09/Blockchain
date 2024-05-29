require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const PROJECT_ID = "3151d41faca84c529ab676718e798faa";
const MNEMONIC = "myth strategy disagree level clay oblige devote dress deliver add foot exercise";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost for Ganache
      port: 7545, // Standard Ganache port
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
      network_id: 11155111, // Sepolia's network ID
      confirmations: 2, // # of confirmations to wait between deployments
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true, // Skip dry run before migrations
    },
  },
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.21", // Fetch exact version from solc-bin
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "petersburg"
      }
    }
  }
};