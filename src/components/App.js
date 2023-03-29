/*
App
|_PokemonPage
    |_PokemonCollection
        \_PokemonCard
    |_PokemonForm
    |_Search
*/


import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(r=>r.json())
    .then(pokemons=> setPokemons(pokemons))
  })
  function handleNewPokemon(pokemonObj) {
    setPokemons([...pokemons, pokemonObj])
  }
  const pokemonsOnDisplay = pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <div className="App">
      <PokemonPage onNewPokemon={handleNewPokemon} pokemons={pokemonsOnDisplay} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
