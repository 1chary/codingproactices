// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {check: false}

  change = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  getButtonText = () => {
    const {check} = this.state
    return check ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.change}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
