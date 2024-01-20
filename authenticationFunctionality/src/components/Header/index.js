// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headerContainer">
    <Link to="/" className="items">
      Home
    </Link>
    <Link to="/About">About</Link>
  </div>
)

export default Header
