// Write your JS code here
import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {list} = this.props
    const {currencyLogo, currencyName, euroValue, usdValue} = list
    return (
      <li className="itemContainer">
        <div className="imageWithText">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="ethuriumImage"
          />
          <p className="bitCoinName">{currencyName}</p>
        </div>
        <div className="numbers">
          <p className="bitCoinName">{usdValue}</p>
          <p className="bitCoinName">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
