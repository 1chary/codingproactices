// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: {}, isLoading: true}

  componentDidMount() {
    this.get()
  }

  get = async () => {
    const responseData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await responseData.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderComponent = () => {
    const {currencyList} = this.state
    return (
      <div className="listContainer">
        <h1 className="headingText">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bitcoinImage"
        />
        <div className="valueContainer">
          <div className="greyContainer">
            <h1 className="coin">Coin Type</h1>
            <div className="usdContainer">
              <h1 className="coin">USD</h1>
              <h1 className="coin">EURO</h1>
            </div>
          </div>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} list={eachItem} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.renderComponent()
    )
  }
}

export default CryptocurrenciesList
