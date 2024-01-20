// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`${className} bannerCard`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para"> {description} </p>
        <button className="showMoreButton" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
