import PropTypes from 'prop-types';
import Event from 'components/Event';

import css from "./EventBoard.module.css";

const EventBoard = ({ events }) => {
    return (
        <div className={css.eventBoard}>
            {
                events.map(({name, location, speaker, type, time}) => (
                    <Event
                        key={name}
                        name={name}
                        location={location}
                        speaker={speaker}
                        type={type}
                        start={time.start}
                        end={time.end}
                    />
                ))
            }
        </div>
    );
};

EventBoard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
    }),),
};

export default EventBoard;