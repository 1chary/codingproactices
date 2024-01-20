// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {photo, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = photo
  const check = isActive ? `dark` : `buttonImage`

  const changeImage = () => {
    updateImage(id)
  }

  return (
    <li className="list">
      <button type="button" className="btn" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={check}
          key={id}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
