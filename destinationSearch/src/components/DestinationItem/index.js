// Write your code here

import './index.css'

const DestinationItem = props => {
  const {list} = props
  const {imgUrl, name, id} = list
  return (
    <li className="photoContainer">
      <img src={imgUrl} className="photo" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
