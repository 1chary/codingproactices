// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="imageWithText">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wavePhoto"
          />
          <p className="waveText">Wave</p>
        </div>
        <ul className="unOrderedList">
          <li className="listStyle">
            <Link to="/">Home</Link>
          </li>
          <li className="listStyle">
            <Link to="/about">About</Link>
          </li>
          <li className="listStyle">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
