// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navHeader">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="headerLogo"
      />
    </div>
    <ul className="unOrderedList">
      <Link to="/" className="navLink">
        <li className="listStyle">Home</li>
      </Link>
      <Link to="/products" className="navLink">
        <li className="listStyle">Products</li>
      </Link>
      <Link to="/cart" className="navLink">
        <li className="listStyle">Cart</li>
      </Link>
      <button className="logOutButton" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
