import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "../../utils";
import { iconSize } from "../../constants";
import { Card, Chip, Info, Title } from "./Event.styled";

const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatEventStart(start)}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formatEventDuration(start, end)}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
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
