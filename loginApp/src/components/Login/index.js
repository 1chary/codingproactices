// Write your code here

import './index.css'

const Login = props => {
  const {check} = props

  const changeText = () => {
    check()
  }

  return (
    <button className="btn" type="button" onClick={changeText}>
      Login
    </button>
  )
}
export default Login
