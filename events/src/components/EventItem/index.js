// Write your code here

import './index.css'

const EventItem = props => {
  const {item, setId} = props
  const {imageUrl, name, location, id} = item

  const passId = () => {
    setId(id)
  }

  return (
    <li className="listType">
      <button className="btn" type="button" onClick={passId}>
        <img src={imageUrl} alt="event" className="thumbnail" />
      </button>

      <p className="nameOfTheDance">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
