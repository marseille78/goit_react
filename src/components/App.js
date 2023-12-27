import PageTitle from "./PageTitle/PageTitle";
import upcomingEvents from "../upcoming-events.json";
import EventBoard from './EventBoard/EventBoard';

function App() {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
}

export default App;
