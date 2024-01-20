// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputString: ''}

  enteredText = event => {
    this.setState({inputString: event.target.value})
  }

  render() {
    const {inputString} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(inputString.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            className="search"
            placeholder="   Search"
            onChange={this.enteredText}
            value={inputString}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="cardContainer">
          {searchResults.map(eachCard => (
            <DestinationItem list={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
