// Write your JS code here

import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
        />
        <h1>HOME</h1>
      </div>
    )
  }
}

export default Home
