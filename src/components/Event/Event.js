import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import css from "./Event.module.css";
import { formatEventStart, formatEventDuration } from "../../utils";
import { iconSize } from "../../constants";

const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {formatEventStart(start)}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {formatEventDuration(start, end)}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
      {/*<span className="chip free|paid|vip">Event type</span>*/}
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;
