import PropTypes from "prop-types";
import Event from "../Event/Event";
import { Board } from "./EventBoard.styled";

const EventBoard = ({ events }) => {
  return (
    <Board>
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
    </Board>
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
