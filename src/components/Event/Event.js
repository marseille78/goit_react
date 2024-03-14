import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from 'constants';
import { Block, Chip, EventName, Info } from "./Event.styled";

const Event = ({name, location, speaker, type, start, end}) => {
    const formattedStart = formatEventStart(start);
    const formattedDuration = formatEventDuration(start, end);

    return (
        <Block data-cmp="Event">
            <EventName>{name}</EventName>
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
                {formattedStart}
            </Info>
            <Info>
                <FaClock size={iconSize.sm} />
                {formattedDuration}
            </Info>
            <Chip type={type}>{type}</Chip>
        </Block>
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
