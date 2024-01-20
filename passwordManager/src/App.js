import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    webSiteName: '',
    username: '',
    password: '',
    isDisplay: false,
    searchInput: '',
    isTrue: false,
  }

  enterWebsite = event => {
    this.setState({webSiteName: event.target.value})
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  delete = id => {
    const {passwordsList} = this.state
    const newList = passwordsList.filter(eachValue => eachValue.id !== id)
    this.setState({passwordsList: newList})
  }

  searchBasedOnInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addPasswordDetails = event => {
    event.preventDefault()
    const {webSiteName, username, password} = this.state
    const newPassword = {
      id: v4(),
      websiteName: webSiteName,
      userName: username,
      passKey: password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      webSiteName: '',
      username: '',
      password: '',
      searchInput: '',
    }))
  }

  render() {
    const {passwordsList, isDisplay, searchInput} = this.state
    let {isTrue} = this.state
    const {webSiteName, username, password} = passwordsList
    const searchResults = passwordsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchResults.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }

    return (
      <div className="appContainer">
        <div className="insideContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="addNewPasswordContainer">
            <div className="alignmentContainer">
              <form
                className="addDetailsContainer"
                onSubmit={this.addPasswordDetails}
              >
                <h1 className="addNewText">Add New Password</h1>
                <div className="enterDetails">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="globeImage"
                  />
                  <input
                    type="text"
                    className="inputBox"
                    onChange={this.enterWebsite}
                    placeholder="Enter Website"
                    value={webSiteName}
                  />
                </div>
                <div className="enterDetails">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="globeImage"
                  />
                  <input
                    type="text"
                    className="inputBox"
                    onChange={this.enterUsername}
                    placeholder="Enter Username"
                    value={username}
                  />
                </div>
                <div className="enterDetails">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="globeImage"
                  />
                  <input
                    type="password"
                    className="inputBox"
                    onChange={this.enterPassword}
                    placeholder="Enter Password"
                    value={password}
                  />
                </div>
                <button type="submit" className="addButton">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="lockPhoto"
              />
            </div>
          </div>
          <div className="showPasswordContainer">
            <div className="showPasswordAlign">
              <div className="startContainer">
                <h1 className="yourPassHeading">
                  Your Passwords: {passwordsList.length}
                </h1>
                <div className="searchContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="iconImage"
                  />
                  <input
                    type="search"
                    className="searchBox"
                    onChange={this.searchBasedOnInput}
                    placeholder="Search"
                    value={searchInput}
                  />
                </div>
              </div>
              <hr className="line" />
              <div className="showPasswords">
                <input
                  type="checkBox"
                  id="showPass"
                  className="box"
                  onClick={this.showPassword}
                />
                <label htmlFor="showPass" className="para">
                  Show Passwords
                </label>
              </div>

              {!isTrue && (
                <div className="imageContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="noPasswordImage"
                  />
                  <p className="noPasswordPara">No Passwords</p>
                </div>
              )}

              <ul className="arrangeMent">
                {searchResults.map(eachItem => (
                  <li
                    className="individualContainer"
                    key={eachItem.id}
                    id={eachItem.id}
                  >
                    <div className="alignContainersInRow">
                      <div className="initialContainer">
                        <h1>{eachItem.userName.slice(0, 1).toUpperCase()}</h1>
                      </div>
                      <div className="detailsContainer">
                        <p>{eachItem.websiteName}</p>
                        <p className="userNameText">{eachItem.userName}</p>
                        {isDisplay ? (
                          <p>{eachItem.passKey}</p>
                        ) : (
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                            alt="stars"
                            className="starImage"
                          />
                        )}
                      </div>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => this.delete(eachItem.id)}
                        data-testid="delete"
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                          alt="delete"
                          className="deleteImage"
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
