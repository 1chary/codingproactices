// Write your code here

import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appId, appName, imageUrl, category} = eachItem

  return (
    <li className="individualContainer">
      <img src={imageUrl} alt={appName} className="photo" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
