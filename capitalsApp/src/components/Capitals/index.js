import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  onChangeCountry = () => {
    const {activeId} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return countryName.country
  }

  render() {
    const {activeId} = this.state
    const countryName = this.onChangeCountry()
    return (
      <div className="container">
        <div className="whiteContainer">
          <h1>Countries And Capitals</h1>
          <div className="row">
            <select
              className="dropDownList"
              onChange={this.onChangeCapital}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
