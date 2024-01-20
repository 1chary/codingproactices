// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {list} = props
  const {id, suggestion} = list
  return (
    <li className="individualContainer">
      <p>{suggestion}</p>
      <button type="button" className="btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arr"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
