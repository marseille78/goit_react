import upcomingEvents from '../../upcoming-events.json';

import { Block } from './App.styled';

import PageTitle from 'components/PageTitle';
import EventBoard from 'components/EventBoard';

const App = () => {
    return (
        <Block data-cmp="App">
            <PageTitle title="24th Core Worlds Coalition Conference" />
            <EventBoard events={upcomingEvents} />
        </Block>
    );
};

export default App;