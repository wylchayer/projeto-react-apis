import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";

const PokemonsListPage = (props) => {
  const arrayTeste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const { setPage } = props;
  const btnLClass = "";
  const btnR = {
    class: "toPokedexPage",
    action: "pokedexPage",
    name: "Pokédex",
  };

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} setPage={setPage} />
      <PokemonListContainer>
        <h2>Todos Pokémons</h2>
        <PokemonList>
          {arrayTeste.map((e) => {
            return <PokemonCard key={e} setPage={setPage} />;
          })}
        </PokemonList>
      </PokemonListContainer>
    </>
  );
};

export default PokemonsListPage;
