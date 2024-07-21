import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div className="alert alert-light" role="alert">
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
