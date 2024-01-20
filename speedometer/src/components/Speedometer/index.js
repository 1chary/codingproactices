// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increase = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  decrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="meter"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para1">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="buttoncontainer">
          <button className="one" onClick={this.increase}>
            Accelerate
          </button>
          <button className="two" onClick={this.decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
