// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  clickOnLogInButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <div className="blue" id="message">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout check={this.clickOnLogInButton} />
          ) : (
            <Login check={this.clickOnLogInButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
