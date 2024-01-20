// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    const value = Math.random() * 100
    const no = Math.ceil(value)
    this.setState(prevState => ({count: prevState.count + no}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="mini">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.generate}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
