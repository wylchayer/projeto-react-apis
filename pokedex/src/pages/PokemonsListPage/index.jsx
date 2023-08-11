import React, { useContext, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";
import { useRequestListPokemonsInitial } from "../../hooks/useRequestPokemons";
import ModalCatchDelete from "../../components/ModalCatchDelete";
import GlobalContext from "../../context/GlobalContext";

const PokemonsListPage = () => {
  const { pokemonsListInitial, isLoading, isError } =
    useRequestListPokemonsInitial();
  const context = useContext(GlobalContext);
  const {
    pokedexIds,
    catchPokemon,
    deletePokemon,
    changeModal,
    setChangeModal,
    isYours,
    setIsYours,
  } = context;

  return (
    <>
      <Header />
      <PokemonListContainer>
        <h2>Todos Pokémons</h2>
        <PokemonList>
          {isLoading ? (
            <h3>Carregando Pokemons</h3>
          ) : isError ? (
            <h3>Erro na requisição</h3>
          ) : (
            pokemonsListInitial.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  pokedexIds={pokedexIds}
                  catchPokemon={catchPokemon}
                  deletePokemon={deletePokemon}
                  setChangeModal={setChangeModal}
                  setIsYours={setIsYours}
                />
              );
            })
          )}
        </PokemonList>
      </PokemonListContainer>
      {changeModal && (
        <ModalCatchDelete check={isYours} setChangeModal={setChangeModal} />
      )}
    </>
  );
};

export default PokemonsListPage;
