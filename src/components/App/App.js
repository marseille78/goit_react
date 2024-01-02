import PageTitle from "../PageTitle/PageTitle";
import upcomingEvents from "../../upcoming-events.json";
import EventBoard from '../EventBoard/EventBoard';
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
}

export default App;
