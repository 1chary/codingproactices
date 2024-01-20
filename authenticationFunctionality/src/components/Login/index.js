// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  renderAfterSubmission = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  renderOnSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const logInDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(logInDetails),
    }
    const responseData = await fetch(url, options)
    const data = await responseData.json()
    if (responseData.ok === true) {
      this.renderAfterSubmission(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form className="logInContainer" onSubmit={this.renderOnSubmit}>
        <h1 className="loginHeading">Please Login</h1>
        <button type="submit" className="btn">
          Login with Sample Creds
        </button>
      </form>
    )
  }
}

export default Login
