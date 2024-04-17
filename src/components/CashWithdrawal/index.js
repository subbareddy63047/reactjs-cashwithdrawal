// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="account-details">
          <div className="name-container">
            <div className="start-letter">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {balance}
              <br />
              <span>In Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="payment-option">CHOOSE SUM (IN RUPEES)</p>
            <ul className="payment-options-container">
              {denominationsList.map(each => (
                <DenominationItem
                  eachAmount={each}
                  key={each.id}
                  withdrawFunction={this.withdrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
