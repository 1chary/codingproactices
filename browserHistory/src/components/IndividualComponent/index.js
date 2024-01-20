import './index.css'

const IndividualComponent = props => {
  const {list, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = list

  const dustBin = () => {
    deleteItem(id)
  }

  return (
    <li className="individualListItem">
      <div className="row">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" id={id} className="logo" />
        <p className="name">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={dustBin}
        className="buttonOne"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default IndividualComponent
