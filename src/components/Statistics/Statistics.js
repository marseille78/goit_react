import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        Good: <b>{good}</b>
      </li>
      <li class="list-group-item">
        Neutral: <b>{neutral}</b>
      </li>
      <li class="list-group-item">
        Bad: <b>{bad}</b>
      </li>
      <li class="list-group-item">
        Total: <b>{total}</b>
      </li>
      <li class="list-group-item">
        Positive feedback: <b>{positivePercentage}%</b>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
