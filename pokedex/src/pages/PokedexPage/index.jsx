import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokedexListContainer, PokedexList } from "./style";
import Header from "../../components/Header";
import { PokemonTeste } from "../../temp/pokemonTeste";

const PokedexPage = () => {
  const btnLClass = "btnLActive";
  const btnR = {
    class: "",
    action: "",
    name: "",
  };

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} />
      <PokedexListContainer>
        <h2>Meus Pokémons</h2>
        <PokedexList>
          {PokemonTeste.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </PokedexList>
      </PokedexListContainer>
    </>
  );
};

export default PokedexPage;
