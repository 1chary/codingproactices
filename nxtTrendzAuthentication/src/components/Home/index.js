// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <div className="arrangeInColumn">
        <h1 className="mainHeading">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="smallDevices"
        />
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shopNowButton" type="button">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="noticeFigure"
        />
      </div>
    </div>
  </>
)
export default Home
