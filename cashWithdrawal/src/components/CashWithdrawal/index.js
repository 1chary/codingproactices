// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  decrease = value => {
    this.setState(prevState => ({rupees: prevState.rupees - value}))
  }

  render() {
    const {rupees} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="blueContainer">
          <div className="profile">
            <div className="circle">S</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="bal">Your Balance</p>
            <p className="amount">{rupees}</p>
          </div>
          <div className="rupees">
            <p className="rs">In Rupees</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">Choose sum (IN RUPEES)</p>
          <ul className="buttonContainer">
            {denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                individual={eachValue}
                decrease={this.decrease}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
