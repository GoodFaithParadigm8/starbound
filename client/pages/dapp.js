import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'

class Dapp extends React.Component {
  state = {
    accounts: null,
    owner: null,
    contract: null
    // balance: undefined,
    // ethBalance: undefined
  };

  // storeValue = async () => {
  //   const { accounts, contract } = this.props
  //   await contract.methods.set(5).send({ from: accounts[0] })
  //   alert('Stored 5 into account')
  // };

  // getValue = async () => {
  //   const { accounts, contract } = this.props
  //   const response = await contract.methods.get().call({ from: accounts[0] })
  //   this.setState({ balance: response })
  // };

  // getEthBalance = async () => {
  //   const { web3, accounts } = this.props
  //   const balanceInWei = await web3.eth.getBalance(accounts[0])
  //   this.setState({ ethBalance: balanceInWei / 1e18 })
  // };

  claimStar = async () => {
    const { accounts, contract } = this.props
    await contract.methods.claimStar().call({ from: accounts[0] })
    let starOwner = await contract.methods.starOwner.call();
    this.setState({ owner: starOwner});
    console.log(starOwner);
  }

 

  render () {
    const { claimStar, starOwner } = this.state
    console.log({claimStar, starOwner })
    return (
      <div>
        <h1>My Dapp</h1>

        <button onClick={this.claimStar}>Claim  Star</button>
        {/* <button onClick={this.getValue}>Get account balance</button> */}
        {/* <button onClick={this.getEthBalance}>Get ether balance</button> */}
        <div>Star Name: {this.starName}</div>
        {/* <div>Ether Balance: {ethBalance}</div> */}
        <div>
          <Link href='/accounts'>
            <a>My Accounts</a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts, contract }) => (
      <Dapp accounts={accounts} contract={contract} web3={web3} />
    )}
  />
)
