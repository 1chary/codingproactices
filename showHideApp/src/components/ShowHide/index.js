// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  first = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  last = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first} = this.state
    const {last} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <button className="btn" type="button" onClick={this.first}>
            Show/Hide Firstname
          </button>
          <button className="btn" type="button" onClick={this.last}>
            Show/Hide Lastname
          </button>
        </div>
        <div>
          {first ? <p className="heading nameContainer">Joe</p> : ''}
          {last ? <p className="heading nameContainer">Jonas</p> : ''}
        </div>
      </div>
    )
  }
}

export default ShowHide
