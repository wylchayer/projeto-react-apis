import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";
import { useRequestListPokemonsInitial } from "../../hooks/useRequestPokemons";
import useUpdatePokedex from "../../hooks/useUpdatePokedex";

const PokemonsListPage = () => {
  const { pokemonsListInitial, isLoading, isError } =
    useRequestListPokemonsInitial();
  const { catchPokemon, deletePokemon } = useUpdatePokedex();

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
                  catchPokemon={catchPokemon}
                  deletePokemon={deletePokemon}
                />
              );
            })
          )}
        </PokemonList>
      </PokemonListContainer>
    </>
  );
};

export default PokemonsListPage;
