// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: {}, isLoading: true}

  componentDidMount() {
    this.get()
  }

  get = async () => {
    const getData = await fetch('https://apis.ccbp.in/blogs')
    const convertData = await getData.json()
    const updatedData = convertData.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="blogsListContainer">
        {isLoading ? (
          <Loader type="TailSpin" color="blue" height={50} width={50} />
        ) : (
          blogsList.map(eachItem => (
            <BlogItem list={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
