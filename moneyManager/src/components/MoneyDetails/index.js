// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="moneyDetailsContainer">
      <div className="yellow container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="photo"
        />
        <div className="vertical">
          <h1 className="balanceText">Your Balance</h1>
          <p className="amount" data-testid="balanceAmount">
            RS: {balance}
          </p>
        </div>
      </div>
      <div className="blue container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="photo"
        />
        <div className="vertical">
          <h1 className="balanceText">Your Income</h1>
          <p className="amount" data-testid="incomeAmount">
            RS: {income}
          </p>
        </div>
      </div>
      <div className="purple container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="photo"
        />
        <div className="vertical">
          <h1 className="balanceText">Your Expenses</h1>
          <p className="amount" data-testid="expensesAmount">
            RS: {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
