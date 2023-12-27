import PropTypes from "prop-types";
import css from "./EventBoard.module.css";
import Event from "../Event/Event";

const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, speaker, location, time, type }) => (
        <Event
          key={name}
          speaker={speaker}
          name={name}
          start={time.start}
          location={location}
          end={time.end}
          type={type}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default EventBoard;
