import React from "react";

import data from "./paintings.json";

import PaintingList from "./components/PaintingList";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <PaintingList items={data}/>
      <Section title="Топ тижня"/>
      <Section/>
    </div>
  );
}

export default App;