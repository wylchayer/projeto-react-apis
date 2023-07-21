import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokedexListContainer, PokedexList } from "./style";
import Header from "../../components/Header";
import useUpdatePokedex from "../../hooks/useUpdatePokedex";
import { useRequestListPokemon } from "../../hooks/useRequestPokemons";

const PokedexPage = () => {
  const { pokedexIds, catchPokemon, deletePokemon } = useUpdatePokedex();
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
                  catchPokemon={catchPokemon}
                  deletePokemon={deletePokemon}
                />
              );
            })
          )}
        </PokedexList>
      </PokedexListContainer>
    </>
  );
};

export default PokedexPage;
