// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isDisplayed: false}

  changeState = () => {
    this.setState(prevState => ({isDisplayed: !prevState.isDisplayed}))
  }

  render() {
    const {isDisplayed} = this.state
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    return (
      <li className="listContainer">
        <div className="individualContainer">
          <h1>{questionText}</h1>
          {isDisplayed ? (
            <button className="btn" type="button" onClick={this.changeState}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
                alt="minus"
              />
            </button>
          ) : (
            <button className="btn" type="button" onClick={this.changeState}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          )}
        </div>
        {isDisplayed && (
          <div>
            <hr className="line" />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
