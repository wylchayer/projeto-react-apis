import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";
import { PokemonTeste } from "../../temp/pokemonTeste";

const PokemonsListPage = () => {
  const btnLClass = "";
  const btnR = {
    class: "toPokedexPage",
    action: "pokedexPage",
    name: "Pokédex",
  };

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} />
      <PokemonListContainer>
        <h2>Todos Pokémons</h2>
        <PokemonList>
          {PokemonTeste.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </PokemonList>
      </PokemonListContainer>
    </>
  );
};

export default PokemonsListPage;
