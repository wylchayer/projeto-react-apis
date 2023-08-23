import React, { useContext, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import {
  PokedexListContainer,
  PokedexList,
  HeaderPokedexPage,
  DivSelectPokedexPage,
} from "./style";
import Header from "../../components/Header";
import { useRequestListPokemon } from "../../hooks/useRequestPokemons";
import ModalCatchDelete from "../../components/ModalCatchDelete";
import GlobalContext from "../../context/GlobalContext";
import Pagination from "../../components/Pagination";

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

  const {
    pokemonsView,
    isLoading,
    isError,
    setCurrentPage,
    totalPages,
    pokemonPerPage,
    setPokemonPerPage,
  } = useRequestListPokemon(pokedexIds);

  return (
    <>
      <Header />
      <PokedexListContainer>
        <HeaderPokedexPage>
          <h2>Meus Pokémons</h2>
          <DivSelectPokedexPage>
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
          </DivSelectPokedexPage>
        </HeaderPokedexPage>
        <PokedexList>
          {isLoading ? (
            <h3>Buscando Pokemons</h3>
          ) : isError ? (
            <h3>Erro na requisição</h3>
          ) : !pokemonsView.length ? (
            <h3>Não há Pokemons capturados!</h3>
          ) : (
            pokemonsView.map((pokemon) => {
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
        <Pagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </PokedexListContainer>
      {changeModal && (
        <ModalCatchDelete check={isYours} setChangeModal={setChangeModal} />
      )}
    </>
  );
};

export default PokedexPage;
