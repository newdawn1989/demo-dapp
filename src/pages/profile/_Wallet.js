import React, { Component } from 'react'

import Identicon from 'components/Identicon'

class Wallet extends Component {
  render() {
    const { address, balance, identityAddress } = this.props

    return (
      <div className="wallet">
        <div className="d-flex">
          <div className="image-container">
            <Identicon address={address} />
          </div>
          <div className="eth d-flex flex-column justify-content-between">
            <div>ETH Address:</div>
            <div className="address">
              <strong>{address}</strong>
            </div>
          </div>
        </div>
        <hr className="dark sm" />
        <div className="detail d-flex">
          <div>Account Balance:</div>
          <div>{balance} ETH</div>
        </div>
        <div className="detail d-flex">
          <div>Transaction History:</div>
          <div>
            <a onClick={() => alert('To do')}>ETH</a> | <a onClick={() => alert('To do')}>Tokens</a>
          </div>
        </div>
        {/* Hidden for current deployment */}
        {/* identityAddress &&
          <div>
            <a href={`https://erc725.originprotocol.com/#/identity/${identityAddress}`} target="_blank">Identity Contract Detail</a>
          </div>
        */}
      </div>
    )
  }
}

export default Wallet
