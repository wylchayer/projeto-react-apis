import React, { useContext, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import {
  PokemonListContainer,
  PokemonList,
  HeaderListPage,
  DivSelect,
} from "./style";
import Header from "../../components/Header";
import { useRequestListPokemonsInitial } from "../../hooks/useRequestPokemons";
import ModalCatchDelete from "../../components/ModalCatchDelete";
import GlobalContext from "../../context/GlobalContext";
import Pagination from "../../components/Pagination";

const PokemonsListPage = () => {
  const {
    pokemonsListInitial,
    isLoading,
    isError,
    setCurrentPage,
    totalPages,
    pokemonPerPage,
    setPokemonPerPage,
  } = useRequestListPokemonsInitial();

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
        <HeaderListPage>
          <h2>Todos Pokémons</h2>
          <DivSelect>
            <p>Pokemons por página: </p>
            <select
              value={pokemonPerPage}
              onChange={(e) => {
                setCurrentPage(0);
                setPokemonPerPage(+e.target.value);
              }}
            >
              <option value="15">15 Pokemons</option>
              <option value="30">30 Pokemons</option>
            </select>
          </DivSelect>
        </HeaderListPage>
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
        <Pagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </PokemonListContainer>
      {changeModal && (
        <ModalCatchDelete check={isYours} setChangeModal={setChangeModal} />
      )}
    </>
  );
};

export default PokemonsListPage;
