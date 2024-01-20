// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, update, isActive} = props
  const {tabId, displayText} = eachTab

  const getCategoryBasedItems = () => {
    update(tabId)
  }

  const check = isActive ? `blueText` : ''

  return (
    <li className="listContainer">
      <button
        type="button"
        className={`button ${check}`}
        onClick={getCategoryBasedItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
