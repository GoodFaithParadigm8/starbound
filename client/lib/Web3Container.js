import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from '../../build/contracts/StarNotaryv1.json'

export default class Web3Container extends React.Component {
  state = { web3: null, address: null, contract: null };

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const address = await web3.eth.getaddress()
      const contract = await getContract(web3, contractDefinition)
      this.setState({ web3, address, contract })
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
    }
  }

  render () {
    const { web3, address, contract } = this.state
    return web3 && address
      ? this.props.render({ web3, address, contract })
      : this.props.renderLoading()
  }
}
