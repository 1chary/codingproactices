// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', message: false, errorMsg: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  failureMessage = errorMsg => {
    this.setState({message: true, errorMsg})
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="inputLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="inputBox"
          onChange={this.changePassword}
          value={password}
          placeholder=" Password"
        />
      </>
    )
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  renderName = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="name" className="inputLabel">
          Username
        </label>
        <input
          type="text"
          id="name"
          className="inputBox"
          onChange={this.changeUserName}
          value={username}
          placeholder=" Username"
        />
      </>
    )
  }

  renderHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const details = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const responseData = await fetch(url, options)
    const data = await responseData.json()
    if (responseData.ok === true) {
      this.renderHomePage()
    } else {
      this.failureMessage(data.error_msg)
    }
  }

  render() {
    const {message, errorMsg} = this.state
    return (
      <div className="logInContainer">
        <div className="insideContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websiteLogo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="websiteImage"
          />
          <form className="formContainer" onSubmit={this.renderFormDetails}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="websiteTrends"
            />
            <div className="inputContainer">{this.renderName()}</div>
            <div className="inputContainer">{this.renderPassword()}</div>
            <button className="inputContainer btn" type="submit">
              LogIn
            </button>
            {message && <p className="errorMessage">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
