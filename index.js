const Notification = (props) => {
  const { className, text, url } = props;
  return (
    <div className={`container ${className}`}>
      <div className="msg-container">
        <img src={url} className="image" />
        <p className="paragraph">{text}</p>
      </div>
    </div>
  );
};

const element = (
  <div className="notifications-main-container">
    <h1 className="notification-heading">Notifications</h1>
    <div className="notification-sub-container">
      <Notification
        className="information-msg"
        text="Information Message"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-msg"
        text="Success Message"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-msg"
        text="Warning Message"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-msg"
        text="Error Message"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
