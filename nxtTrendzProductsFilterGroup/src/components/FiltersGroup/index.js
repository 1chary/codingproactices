import './index.css'

const FiltersGroup = props => {
  const renderFilterList = () => {
    const {ratingList} = props

    return ratingList.map(eachItem => {})
  }

  const renderRatingFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderFilterList()}</ul>
    </div>
  )
  return renderRatingFilters()
}

export default FiltersGroup
