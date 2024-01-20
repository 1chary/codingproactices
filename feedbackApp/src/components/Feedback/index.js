// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  changeState = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    return (
      <div className="mainContainer">
        <div className="whiteContainer">
          {isTrue && (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="image" />
              <h1>Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
          {!isTrue && (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emojiContainer">
                {emojis.map(eachEmoji => (
                  <li className="individualContainer" key={eachEmoji.id}>
                    <button
                      type="submit"
                      className="btn"
                      onClick={this.changeState}
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="image"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
