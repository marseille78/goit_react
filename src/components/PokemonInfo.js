import { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "../services/pokemon-api";

// # Машина состояний (State machine)
// 'idle' - состояние покоя
// 'pending' - состояние ожидания
// 'resolved' - успешное состояние
// 'rejected' - отклоненное состояние

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      setTimeout(() => {
        // fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        //   .then((res) => {
        //     if (res.ok) {
        //       return res.json();
        //     }

        //     return Promise.reject(
        //       new Error(`Нет покемона с именем ${nextName}`)
        //     );
        //   })
        pokemonAPI
          .fetchPokemon(nextName)
          .then((pokemon) =>
            this.setState({ pokemon, status: Status.RESOLVED })
          )
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === Status.IDLE) {
      return <div>Введите имя покемона</div>;
    }

    if (status === Status.PENDING) {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === Status.REJECTED) {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === Status.RESOLVED) {
      return <PokemonDataView pokemon={pokemon} />;
    }

    /* return (
      <div>
        <h1>PokemonInfo</h1>

        {error && <h3>{error.message}</h3>}
        {loading && <div>Загружаем...</div>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    ); */
  }
}
