// Write your JS code here
import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
        />
        <h1>About</h1>
      </div>
    )
  }
}

export default About
