import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokedexListContainer, PokedexList } from "./style";
import Header from "../../components/Header";

const PokedexPage = () => {
  const arrayTeste = [0, 1, 2, 3, 4, 5, 6];
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
          {arrayTeste.map((e) => {
            return <PokemonCard key={e} />;
          })}
        </PokedexList>
      </PokedexListContainer>
    </>
  );
};

export default PokedexPage;
