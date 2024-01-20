const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClass = `notificationCenter ${className}`;
  return (
    <div className={containerClass}>
      <img className="icon" src={iconUrl} />
      <p className="para"> {message} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="mainContainer">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="blue"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />

      <Notification
        className="green"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />

      <Notification
        className="yellow"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />

      <Notification
        className="red"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
