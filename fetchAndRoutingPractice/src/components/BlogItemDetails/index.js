// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const responseData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await responseData.json()
    console.log(jsonData)
    const data = {
      author: jsonData.author,
      imageUrl: jsonData.image_url,
      avatarUrl: jsonData.avatar_url,
      title: jsonData.title,
      topic: jsonData.topic,
      content: jsonData.content,
    }
    this.setState({blogsData: data})
  }

  render() {
    const {blogsData} = this.state
    const {author, imageUrl, avatarUrl, title, topic, content} = blogsData
    return (
      <div className="detailsContainer">
        <h1 className="headingText">{title}</h1>
        <div className="profileWithName">
          <img src={avatarUrl} className="profile" alt="displayPic" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="detailsPhoto" alt="title" />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
