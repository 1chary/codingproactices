// Write your code here

import './index.css'

const DenominationItem = props => {
  const {individual, decrease} = props
  const {id, value} = individual

  const get = () => {
    decrease(value)
  }

  return (
    <li className="list">
      <button className="btn" type="button" onClick={get}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
