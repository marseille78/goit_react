import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {options.map((name) => (
        <OptItem key={name} name={name} onLeaveFeedback={onLeaveFeedback} />
      ))}
    </div>
  );
};

const OptItem = ({ name, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      name={name}
      onClick={() => onLeaveFeedback(name)}
    >
      {name}
    </button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
