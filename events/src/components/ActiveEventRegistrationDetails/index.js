// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="renderImage"
      />
      <p>
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="registerButton" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="renderImage"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon! </p>
    </div>
  )

  const renderNothingHere = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderDetails = () => {
    switch (activeRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderNothingHere()
    }
  }
  return <div>{renderDetails()}</div>
}

export default ActiveEventRegistrationDetails
