const getContractInstance = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId()
  const deployedAddress = contractDefinition.networks[networkId].address

  // create the contract instance
  const contract = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress
  )
  return contract
}

export default getContractInstance
