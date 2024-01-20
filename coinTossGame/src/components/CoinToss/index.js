// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  toss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {totalCount, heads, tails} = this.state
    const {imageUrl} = this.state

    return (
      <div className="container">
        <div className="whiteContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="photo" />
          <button className="btn" type="button" onClick={this.toss}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
