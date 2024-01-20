// Write your JS code here
import {Component} from 'react'

import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="userProfileContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profilePhoto"
        />
        <h1 className="nameText">Wade Warren</h1>
        <p className="designationText">Software developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
