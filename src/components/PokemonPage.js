import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  fetch(url)
  .then((res) => res.json())
  .then(data => setPokemon(data));
    },[]);

    function handleAddPokemon(newPokemon) {
      setPokemon([...pokemon, newPokemon]);
    }

    console.log(searchTerm)

    const pokemonToDisplay = pokemon.filter((poke) => 
     poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search 
      searchTerm = {searchTerm} 
      onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection 
      pokemon={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
