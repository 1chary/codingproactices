// Write your JS code here

import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {list} = this.props
    return (
      <ul className="blogListContainer">
        {list.map(eachItem => (
          <BlogItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }
}

export default BlogList
