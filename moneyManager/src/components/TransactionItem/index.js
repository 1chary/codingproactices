// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteItem} = props
  const {title, amount, type, id} = eachItem

  const deleteTransaction = () => {
    deleteItem(id)
  }

  return (
    <div className="arrangeInRow">
      <p className="title">{title}</p>
      <p className="title">{amount}</p>
      <p>{type}</p>
      <button
        className="deleteButton"
        type="button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deletePhoto"
        />
      </button>
    </div>
  )
}

export default TransactionItem
