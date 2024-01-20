// Write your code here
import './index.css'

const Logout = props => {
  const {check} = props

  const out = () => {
    check()
  }

  return (
    <button className="btn" type="button" onClick={out}>
      Logout
    </button>
  )
}
export default Logout
