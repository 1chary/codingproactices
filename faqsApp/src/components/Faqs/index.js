// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="appContainer">
        <div className="miniContainer">
          <h1 className="headingText">FAQs</h1>
          <ul className="onlyForWidth">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                eachItem={eachItem}
                updateState={this.updateState}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
