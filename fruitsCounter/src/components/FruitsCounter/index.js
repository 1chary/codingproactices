// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="miniContainer">
          <h1 className="heading">
            Bob ate <span className="number">{mango}</span> mangoes{' '}
            <span className="number">{banana}</span> bananas
          </h1>
          <div className="imageContainer">
            <img
              className="photo"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="photo"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="buttonContainer">
            <button className="button" onClick={this.mango}>
              Eat Mango
            </button>
            <button className="button" onClick={this.banana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
