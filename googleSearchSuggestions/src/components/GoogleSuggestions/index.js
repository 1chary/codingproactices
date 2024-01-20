// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {textEntered: ''}

  access = event => {
    this.setState({textEntered: event.target.value})
  }

  display = id => {
    const {suggestionsList} = this.state
  }

  render() {
    const {textEntered} = this.state
    const {suggestionsList} = this.props
    const filteredData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(textEntered.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="photo"
          alt="google logo"
        />
        <div className="engine">
          <div className="adjustInRow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="    Search Google"
              className="box"
              onChange={this.access}
              value={textEntered}
            />
          </div>

          <ul>
            {filteredData.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                list={eachItem}
                display={this.display}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
