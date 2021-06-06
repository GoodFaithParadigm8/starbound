module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      host: "https://rinkeby.infura.io/v3/bb752391fc7048b49b63ab9da878e9d1", // Connect to geth on the specified
      port: 8545,
      from: "0x8b69E1051805C190Fe9464493F32F86077446990", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 
    }
  },
  compilers: {
    solc: {
        version: "^0.8.4"
      },
  }
  
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0

}
