import {Component} from 'react'

import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const InitialtransactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    optionId: InitialtransactionTypeOptions[0].optionId,
    detailsList: [],
  }

  enterTitle = event => {
    this.setState({title: event.target.value})
  }

  enterAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {detailsList} = this.state
    const {title, amount, optionId} = this.state
    const typeOption = InitialtransactionTypeOptions.find(
      eachItem => eachItem.optionId === optionId,
    )
    const {displayText} = typeOption
    const newItem = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      detailsList: [...prevState.detailsList, newItem],
      title: '',
      amount: '',
      optionId: InitialtransactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {detailsList} = this.state
    let balance = 0
    let income = 0
    let expense = 0
    detailsList.forEach(eachItem => {
      if (eachItem.type === 'Income') {
        income += eachItem.amount
      } else {
        expense += eachItem.amount
      }
      balance = income - expense
    })
    return balance
  }

  getIncome = () => {
    const {detailsList} = this.state
    let income = 0
    detailsList.forEach(eachItem => {
      if (eachItem.type === 'Income') {
        income += eachItem.amount
      }
    })
    return income
  }

  getExpense = () => {
    const {detailsList} = this.state
    let expense = 0
    detailsList.forEach(eachItem => {
      if (eachItem.type === 'Expenses') {
        expense += eachItem.amount
      }
    })
    return expense
  }

  deleteItem = id => {
    const {detailsList} = this.state
    const newList = detailsList.filter(eachItem => eachItem.id !== id)
    this.setState({detailsList: newList})
  }

  render() {
    const {title, amount, detailsList} = this.state

    const balance = this.getBalance()
    const income = this.getIncome()
    const expense = this.getExpense()

    return (
      <div className="appContainer">
        <div className="insideContainer">
          <div className="nameContainer">
            <h1 className>Hi,Richard</h1>
            <p>
              Welcome back to your{' '}
              <span className="spanElement">Money Manager</span>
            </p>
          </div>
          <div className="moneyDetailsContainer">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expense}
            />
          </div>
          <div className="belowPart">
            <form
              className="addTransactionContainer"
              onSubmit={this.addTransaction}
            >
              <h1 className="addTransactionHeading">Add Transaction</h1>
              <label className="titleHeading" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className="inputBox"
                placeholder=" Title"
                id="title"
                value={title}
                onChange={this.enterTitle}
              />
              <label className="titleHeading" htmlFor="amount">
                Amount
              </label>
              <input
                type="text"
                className="inputBox"
                placeholder=" Amount"
                id="amount"
                value={amount}
                onChange={this.enterAmount}
              />
              <p className="titleHeading">type</p>
              <select className="inputBox" onChange={this.changeType}>
                {InitialtransactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="historyContainer">
              <h1 className="addTransactionHeading">History</h1>
              <div className="arrangeInColumn">
                <ul className="arrangeInColumn">
                  <li className="tableContainer">
                    <p className="column">Title</p>
                    <p className="column">Amount</p>
                    <p className="column">Type</p>
                  </li>
                  {detailsList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      eachItem={eachItem}
                      deleteItem={this.deleteItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
