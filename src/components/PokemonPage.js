import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemons, search, setSearch, onNewPokemon }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} onNewPokemon={onNewPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
