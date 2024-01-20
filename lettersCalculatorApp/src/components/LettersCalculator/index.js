// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputString: ''}

  check = event => {
    const {value} = event.target

    this.setState({inputString: value})
  }

  render() {
    const {inputString} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="clock"
        />
        <div className="mini">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="inputValue">Enter the phrase</label>
          <input
            type="text"
            className="box"
            placeholder="    calculator"
            id="inputValue"
            onChange={this.check}
            value={inputString}
          />

          <div className="letterContainer">
            <p>No.of letters: {inputString.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
