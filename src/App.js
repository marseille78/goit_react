import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import SkipEffectOnFirstRender from "./components/SkipEffectOnFirstRender";
import Counter from "./components/Counter/Counter";
import PokemonView from "./views/PokemonView";
import Friends from "./components/Friends";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <AppBar />

      <Routes>
        <Route
          path="/skip-first-render"
          element={<SkipEffectOnFirstRender />}
        />
        <Route path="/pokemon" element={<PokemonView />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/notes" element={<Friends />} />
      </Routes>
    </div>
  );
}
