// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  review = reviewsList => {
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]

    return (
      <div className="reviewContainer">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onRight = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state

    return (
      <div className="container">
        <div className="buttonContainer">
          <button
            type="button"
            className="btn"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.review(reviewsList)}
          <button
            type="button"
            className="btn"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
