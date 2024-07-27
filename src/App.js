import { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo";

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <ToastContainer autoClose={3000} />
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    );
  }
}
