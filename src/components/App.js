import upcomingEvents from '../upcoming-events.json';

import PageTitle from 'components/PageTitle';
import EventBoard from 'components/EventBoard';

const App = () => {
    return (
        <>
            <PageTitle title="24th Core Worlds Coalition Conference" />
            <EventBoard events={upcomingEvents} />
        </>
    );
};

export default App;