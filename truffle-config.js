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
}
