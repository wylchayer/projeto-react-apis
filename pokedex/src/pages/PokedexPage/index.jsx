import React, { useContext, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokedexListContainer, PokedexList } from "./style";
import Header from "../../components/Header";
import { useRequestListPokemon } from "../../hooks/useRequestPokemons";
import ModalCatchDelete from "../../components/ModalCatchDelete";
import GlobalContext from "../../context/GlobalContext";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const {
    pokedexIds,
    catchPokemon,
    deletePokemon,
    changeModal,
    setChangeModal,
    isYours,
  } = context;
  const [pokemonsList, isLoading, isError] = useRequestListPokemon(pokedexIds);

  return (
    <>
      <Header />
      <PokedexListContainer>
        <h2>Meus Pokémons</h2>
        <PokedexList>
          {isLoading ? (
            <h3>Buscando Pokemons</h3>
          ) : isError ? (
            <h3>Erro na requisição</h3>
          ) : !pokemonsList.length ? (
            <h3>Não há Pokemons capturados!</h3>
          ) : (
            pokemonsList.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  pokedexIds={pokedexIds}
                  catchPokemon={catchPokemon}
                  deletePokemon={deletePokemon}
                />
              );
            })
          )}
        </PokedexList>
        {changeModal && (
          <ModalCatchDelete check={isYours} setChangeModal={setChangeModal} />
        )}
      </PokedexListContainer>
    </>
  );
};

export default PokedexPage;
