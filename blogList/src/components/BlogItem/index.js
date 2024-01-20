// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachItem} = this.props
    return (
      <>
        <li className="individualItem">
          <div className="horizontal">
            <h1>{eachItem.title}</h1>
            <p>{eachItem.publishedDate}</p>
          </div>
          <p>{eachItem.description}</p>
        </li>
        <hr className="line" />
      </>
    )
  }
}

export default BlogItem
