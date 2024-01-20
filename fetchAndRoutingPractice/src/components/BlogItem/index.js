// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  render() {
    const {list} = this.props
    const {id, title, imageUrl, author, avatarUrl, topic} = list
    return (
      <Link to={`/blogs/${id}`} className="itemContainer">
        <div>
          <div className="arrangeInRow">
            <div>
              <img src={imageUrl} className="imageEdit" alt="courseImage" />
            </div>
            <div className="arrangeInColumn">
              <p className="course">{topic}</p>
              <h1 className="updateHeading">{title}</h1>
              <div className="nameWithImage">
                <div className="imageContainer">
                  <img src={avatarUrl} className="profile" alt="avatarImage" />
                </div>
                <p className="course">{author}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem
