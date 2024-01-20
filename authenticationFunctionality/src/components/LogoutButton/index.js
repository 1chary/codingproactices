// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const {history} = props
  const onLogOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
