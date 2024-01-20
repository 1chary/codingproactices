// Write your code here

import {Component} from 'react'

import './index.css'

const initialState = {isTimerRunning: false, timeInMinutes: 0, timeInSeconds: 0}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  getTimeInGivenFormat() {
    const {timeInSeconds} = this.state
    const minutesHand = Math.floor(timeInSeconds / 60)
    const secondsHand = Math.floor(timeInSeconds % 60)
    const seconds = secondsHand > 9 ? secondsHand : `0${secondsHand}`
    const minutes = minutesHand > 9 ? minutesHand : `0${minutesHand}`
    return `${minutes}:${seconds}`
  }

  start = () => {
    this.intervalId = setInterval(this.stopWatchTime, 1000)
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  reset = () => {
    this.setState(initialState)
    this.clearTimeInterval()
  }

  stop = () => {
    this.clearTimeInterval()
  }

  stopWatchTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="appContainer">
        <h1>Stopwatch</h1>
        <div className="timerContainer">
          <div className="imageWithText">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock"
            />
            <p className="para">Timer</p>
          </div>
          <h1>{this.getTimeInGivenFormat()}</h1>
          <div className="buttonContainer">
            <button
              className="start btn"
              type="button"
              onClick={this.start}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button className="stop btn" type="button" onClick={this.stop}>
              Stop
            </button>
            <button className="reset btn" type="button" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
