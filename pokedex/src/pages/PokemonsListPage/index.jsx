import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";

const PokemonsListPage = () => {
  const btnLClass = "";
  const btnR = {
    class: "toPokedexPage",
    action: "pokedexPage",
    name: "Pokédex",
  };
  const arrayTeste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} />
      <PokemonListContainer>
        <h2>Todos Pokémons</h2>
        <PokemonList>
          {arrayTeste.map((e) => {
            return <PokemonCard key={e} />;
          })}
        </PokemonList>
      </PokemonListContainer>
    </>
  );
};

export default PokemonsListPage;
