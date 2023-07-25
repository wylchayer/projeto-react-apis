import React, { useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonListContainer, PokemonList } from "./style";
import Header from "../../components/Header";
import { useRequestListPokemonsInitial } from "../../hooks/useRequestPokemons";
import useUpdatePokedex from "../../hooks/useUpdatePokedex";
import ModalCatchDelete from "../../components/ModalCatchDelete";

const PokemonsListPage = () => {
  const { pokemonsListInitial, isLoading, isError } =
    useRequestListPokemonsInitial();
  const [changeModal, setChangeModal] = useState(false);
  const [isYours, setIsYours] = useState(false);
  const { pokedexIds, catchPokemon, deletePokemon } = useUpdatePokedex(
    setChangeModal,
    setIsYours
  );

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
