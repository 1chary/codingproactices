// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
