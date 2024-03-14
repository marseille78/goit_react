import PropTypes from 'prop-types';
import Event from 'components/Event';
import { Block } from './EventBoard.styled';


const EventBoard = ({ events }) => {
    return (
        <Block data-cmp="EventBoard">
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
        </Block>
    );
};

EventBoard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),),
};

export default EventBoard;